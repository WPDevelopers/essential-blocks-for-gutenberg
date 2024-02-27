<?php

namespace EssentialBlocks\Integrations;

use \Datetime;

class Form extends ThirdPartyIntegration
{
    public function __construct()
    {
        $this->add_ajax( [
            'eb_form_submit'     => [
                'callback' => 'eb_form_submit_callback',
                'public'   => true
             ],
            'eb_fetch_form_data' => [
                'callback' => 'fetch_form_data',
                'public'   => false
             ],
            'eb_save_form_data'  => [
                'callback' => 'save_form_data',
                'public'   => false
             ]
         ] );
    }

    /**
     * Form Submit Action
     */
    public function eb_form_submit_callback()
    {
        if ( ! isset( $_POST[ 'form_id' ] ) || ! isset( $_POST[ 'nonce' ] ) ) {
            die( esc_html__( 'Invalid Data', 'essential-blocks' ) );
        }
        if ( ! wp_verify_nonce( $_POST[ 'nonce' ], $_POST[ 'form_id' ] . '-nonce' ) ) {
            die( esc_html__( 'Nonce did not match', 'essential-blocks' ) );
        }
        if ( ! isset( $_POST[ 'form_data' ] ) || ! is_object( json_decode( wp_unslash( $_POST[ 'form_data' ] ) ) ) ) {
            die( esc_html__( 'Invalid Request!', 'essential-blocks' ) );
        }

        $form_id = sanitize_key( $_POST[ 'form_id' ] );

        $fields = (array) json_decode( wp_unslash( $_POST[ 'form_data' ] ) );

        $success          = false;
        $response_message = "Form isn't configured!";

        $settings = $this->get_form_settings( $form_id );

        if ( is_object( $settings ) ) {
            $field_settings = isset( $settings->settings ) ? unserialize( $settings->settings ) : [  ];

            //Validate Form
            $is_validate = true;
            if ( isset( $field_settings[ 'validationRules' ] ) ) {
                $rules      = (array) $field_settings[ 'validationRules' ];
                $validation = $this->form_validation( $fields, $rules );

                if ( is_array( $validation ) ) {
                    if ( isset( $validation[ 'data' ] ) && isset( $validation[ 'success' ] ) && $validation[ 'success' ] === false ) {
                        $is_validate      = false;
                        $response_message = [
                            'message'    => "Validation Failed! Please check the error messages.",
                            'validation' => $validation[ 'data' ]
                         ];
                        if ( isset( $field_settings[ 'messages' ] ) ) {
                            $messages = (array) $field_settings[ 'messages' ];
                            if ( isset( $messages[ 'validationError' ] ) && is_string( $messages[ 'validationError' ] ) ) {
                                $response_message[ 'message' ] = $messages[ 'validationError' ];
                            }
                        }
                    }
                }
            }

            //Handle Form Fields from settings and Sanitize Form Data
            if ( $is_validate && isset( $settings->fields ) && is_serialized( $settings->fields ) ) {
                $form_fields = unserialize( $settings->fields );
                $fields      = $this->handle_response_data( $form_fields, $fields );
            }

            //After validation, check if there is any integration and add hook for integration
            if ( $is_validate && isset( $field_settings[ 'integrations' ] ) ) {
                $integrations = (array) $field_settings[ 'integrations' ];
                if ( count( $integrations ) > 0 ) {
                    do_action( 'eb_form_block_integrations', $form_id, $fields, $integrations );
                }
            }
            //After validation, check if there is formsettings, send email
            if ( $is_validate && isset( $settings->form_options ) && is_serialized( $settings->form_options ) ) {
                $formSettings = unserialize( $settings->form_options );

                $notification = isset( $formSettings[ 'notification' ] ) ? sanitize_text_field( $formSettings[ 'notification' ] ) : 'email';

                do_action( 'eb_form_submit_before_email', $form_id, $fields, $notification ); //Hook After validation and before email send

                $to      = isset( $formSettings[ 'mailTo' ] ) && strlen( trim( $formSettings[ 'mailTo' ] ) ) > 0 ? $formSettings[ 'mailTo' ] : get_option( 'admin_email' );
                $subject = isset( $formSettings[ 'mailSubject' ] ) && strlen( trim( $formSettings[ 'mailSubject' ] ) ) > 0 ? $formSettings[ 'mailSubject' ] : 'New Form Submission [' . get_site_url() . ']';

                $body = 'Invalid data';
                if ( isset( $settings->fields ) && is_serialized( $settings->fields ) ) {
                    $form_fields = unserialize( $settings->fields );

                    $prepare_body = [  ];
                    foreach ( $form_fields as $key => $value ) {
                        if ( isset( $value->label ) ) {
                            $label            = $value->label;
                            $prepare_body[  ] = sprintf(
                                '<table cellspacing="0" cellpadding="0" width="580" style="font-size: 14px;border: 1px solid #ededed; font-family: sans-serif;">
                                    <tr><th style="background: #E9F2F9; padding: 10px 15px; text-align: left;">%1$s</th></tr>
                                    <tr><td style="padding: 10px 15px;">%2$s</td></tr>
                                </table>',
                                $label,
                                $fields[ $key ]
                            );
                        }
                    }

                    $body = apply_filters(
                        'eb_form_block_email_body',
                        implode( '', $prepare_body )
                    );
                }

                $headers = [ 'Content-Type: text/html; charset=UTF-8' ];
                if ( isset( $formSettings[ 'mailCc' ] ) ) {
                    $headers[  ] = 'Cc: ' . $formSettings[ 'mailCc' ];
                }
                if ( isset( $formSettings[ 'mailBcc' ] ) ) {
                    $headers[  ] = 'Bcc: ' . $formSettings[ 'mailBcc' ];
                }

                $mail = false;
                if ( $notification === 'email' || $notification === 'emailsave' ) {
                    $mail = wp_mail( $to, $subject, $body, $headers ); //send email
                    if ( $mail ) {
                        $success          = true;
                        $response_message = "Email Send Successfully";
                    } else {
                        $response_message = "Couldn't send email. Please try again or check site Admin.";
                    }
                } else {
                    $success          = true;
                    $response_message = "Your Response has been saved Successfully.";
                }

                do_action( 'eb_form_submit_after_email', $form_id, $fields, $mail, $notification ); //Hook after mail function done
            }
        }

        if ( $success ) {
            wp_send_json_success( $response_message );
        } else {
            wp_send_json_error( $response_message );
        }
        exit;
    }

    /**
     * Fetch From data from "eb_form_settings" table
     */
    public function fetch_form_data()
    {
        if ( ! isset( $_POST[ 'id' ] ) || ! isset( $_POST[ 'nonce' ] ) ) {
            die( esc_html__( 'Invalid Data', 'essential-blocks' ) );
        }
        if ( ! wp_verify_nonce( sanitize_key( $_POST[ 'nonce' ] ), 'admin-nonce' ) ) {
            die( esc_html__( 'Nonce did not match', 'essential-blocks' ) );
        }

        if ( ! current_user_can( 'edit_posts' ) ) {
            wp_send_json_error( __( 'You are not authorized!', 'essential-blocks' ) );
        }

        $form_id = sanitize_key( $_POST[ 'id' ] );
        $field   = '*';
        if ( isset( $_POST[ 'field' ] ) ) {
            $field = sanitize_key( $_POST[ 'field' ] );
        }

        $result = $this->get_form_settings( $form_id, $field );

        if ( $result ) {
            if ( is_object( $result ) ) {
                $response = [  ];
                if ( isset( $result->block_id ) ) {
                    $response[ 'block_id' ] = sanitize_key( $result->block_id );
                }
                if ( isset( $result->updated_at ) ) {
                    $response[ 'updated_at' ] = sanitize_key( $result->updated_at );
                }
                if ( isset( $result->fields ) ) {
                    $response[ 'fields' ] = (object) unserialize( $result->fields );
                }
                if ( isset( $result->form_options ) ) {
                    $response[ 'form_options' ] = (object) unserialize( $result->form_options );
                }
                if ( isset( $result->settings ) ) {
                    $response[ 'settings' ] = (object) unserialize( $result->settings );
                }
            }
            wp_send_json_success( (object) $response );
        } else {
            wp_send_json_error();
        }
    }

    /**
     * Save From data to "eb_form_settings" table
     */
    public function save_form_data()
    {
        if ( ! isset( $_POST[ 'id' ] ) || ! isset( $_POST[ 'nonce' ] ) ) {
            die( esc_html__( 'Invalid Data', 'essential-blocks' ) );
        }
        if ( ! wp_verify_nonce( sanitize_key( $_POST[ 'nonce' ] ), 'admin-nonce' ) ) {
            die( esc_html__( 'Nonce did not match', 'essential-blocks' ) );
        }

        if ( ! current_user_can( 'edit_posts' ) ) {
            wp_send_json_error( __( 'You are not authorized!', 'essential-blocks' ) );
        }

        $form_id       = sanitize_key( $_POST[ 'id' ] );
        $form_title    = '';
        $form_fields   = [  ];
        $form_options  = [  ];
        $form_settings = [  ];
        if ( isset( $_POST[ 'form_title' ] ) && strlen( $_POST[ 'form_title' ] ) > 0 ) {
            $form_title = sanitize_text_field( $_POST[ 'form_title' ] );
        }
        if ( isset( $_POST[ 'form_fields' ] ) && strlen( $_POST[ 'form_fields' ] ) > 0 ) {
            $form_fields = (array) json_decode( wp_unslash( sanitize_text_field( $_POST[ 'form_fields' ] ) ) );
        }
        if ( isset( $_POST[ 'form_options' ] ) && strlen( $_POST[ 'form_options' ] ) > 0 ) {
            $form_options = (array) json_decode( wp_unslash( sanitize_text_field( $_POST[ 'form_options' ] ) ) );
        }
        if ( isset( $_POST[ 'settings' ] ) && strlen( $_POST[ 'settings' ] ) > 0 ) {
            $form_settings = (array) json_decode( wp_unslash( sanitize_text_field( $_POST[ 'settings' ] ) ) );
        }
        $insert = false;

        global $wpdb;
        $table_name = esc_sql( ESSENTIAL_BLOCKS_FORM_SETTINGS_TABLE );

        $data = [
            'title'        => $form_title,
            'fields'       => serialize( $form_fields ),
            'form_options' => serialize( $form_options ),
            'settings'     => serialize( $form_settings ),
            'updated_at'   => current_time( 'mysql' )
         ];
        $where = [
            'block_id' => $form_id
         ];

        $existing_row = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $table_name WHERE block_id = %s", $form_id ) );

        $user_id          = get_current_user_id();
        $existing_creator = isset( $existing_row->created_by ) ? intval( $existing_row->created_by ) : 0;

        if ( count( $form_fields ) === 0 ) {
            if ( current_user_can( 'manage_options' ) || $user_id === $existing_creator ) {
                // delete data if no fields
                $insert = $wpdb->delete( $table_name, [ 'block_id' => $form_id ] );
            } else {
                wp_send_json_error( 'You don\'t have permission to update form settings' );
            }
        } else if ( $existing_row ) {
            if (  ( current_user_can( 'manage_options' ) ) || $user_id === $existing_creator ) {
                // Update the existing row
                $insert = $wpdb->update( $table_name, $data, $where );
            } else {
                wp_send_json_error( 'You don\'t have permission to update form settings' );
            }
        } else {
            // Insert a new row
            $data[ 'block_id' ]   = $form_id;
            $data[ 'created_by' ] = $user_id;
            $insert               = $wpdb->insert( $table_name, $data );
        }

        if ( $insert ) {
            wp_send_json_success( 'Form settings updated Successfully!' );
        } else {
            wp_send_json_error( 'Couldn\'t save form settings' );
        }
    }

    public function get_form_settings( $form_id, $field = '*' )
    {
        global $wpdb;
        $table_name = ESSENTIAL_BLOCKS_FORM_SETTINGS_TABLE;

        return $wpdb->get_row( $wpdb->prepare( "SELECT $field FROM $table_name WHERE block_id = %s", $form_id ) );
    }

    /**
     * Go through all response data
     * If there is options data (select, radio, checkbox, etc) update the key with value
     * Sanitize each data
     */
    public function handle_response_data( $settings, $fields )
    {
        if ( ! is_array( $settings ) || count( $settings ) === 0 ) {
            return $fields;
        }
        $updated_fields = [  ];
        foreach ( $settings as $index => $item ) {
            $type = isset( $item->type ) && is_string( $item->type ) ? $item->type : 'text';
            if ( is_object( $item ) && isset( $item->options ) && is_array( $item->options ) ) {
                foreach ( $item->options as $option ) {
                    if ( is_object( $option ) && isset( $option->value ) && isset( $option->name ) ) {
                        if ( is_string( $fields[ $index ] ) && $fields[ $index ] === $option->value ) {
                            $updated_fields[ $index ] = $this->sanitize_field( $type, $option->name );
                        } elseif ( is_array( $fields[ $index ] ) ) {
                            foreach ( $fields[ $index ] as $data ) {
                                if ( $option->value === $data ) {
                                    $updated_fields[ $index ] = isset( $updated_fields[ $index ] ) ? $this->sanitize_field( $type, $updated_fields[ $index ] . ", " . $option->name ) : $this->sanitize_field( $type, $option->name );
                                }
                            }
                        }
                    }
                }
            } else {
                $updated_fields[ $index ] = $this->sanitize_field( $type, $fields[ $index ] );
            }
        }
        return $updated_fields;
    }

    /**
     * Sanitize response data
     */
    public function sanitize_field( $type, $value )
    {
        if ( ! is_string( $type ) || ! is_string( $value ) ) {
            return '';
        }
        switch ( $type ) {
            case 'email':
                $value = sanitize_email( sanitize_text_field( $value ) );
                break;
            case 'textarea':
                $value = sanitize_textarea_field( $value );
                break;
            default:
                $value = sanitize_text_field( $value );
        }
        return $value;
    }

    /**
     * Validate form data according to Form Settings
     */
    public function form_validation( $formdata, $rules )
    {
        $validation = [ 'success' => true ];
        if ( is_array( $formdata ) && count( $formdata ) > 0 ) {
            foreach ( $formdata as $index => $data ) {
                if ( isset( $rules[ $index ] ) ) {
                    $datarules = isset( $rules[ $index ] ) && is_object( $rules[ $index ] ) ? (array) $rules[ $index ] : [  ];
                    if ( count( $datarules ) === 0 ) {
                        return $validation;
                    }
                    foreach ( $datarules as $rulesType => $rulesData ) {
                        switch ( $rulesType ) {
                            case 'isRequired':
                                $message = "This field is required.";
                                if ( isset( $rulesData->message ) && is_string( $rulesData->message ) ) {
                                    $message = $rulesData->message;
                                }
                                if ( isset( $rulesData->status ) && $rulesData->status === true ) {
                                    if ( is_string( $data ) && strlen( trim( $data ) ) === 0 ) {
                                        $validation[ 'success' ]        = false;
                                        $validation[ 'data' ][ $index ] = $message;
                                        break 2;
                                    }
                                }
                                break;
                            case 'isEmail':
                                $message = "Invalid Email Address";
                                if ( isset( $rulesData->message ) && is_string( $rulesData->message ) ) {
                                    $message = $rulesData->message;
                                }
                                if ( ! filter_var( $data, FILTER_VALIDATE_EMAIL ) ) {
                                    $validation[ 'success' ]        = false;
                                    $validation[ 'data' ][ $index ] = $message;
                                    break 2;
                                }
                                break;
                            case 'isNumber':
                                $message = "Invalid Number";
                                if ( isset( $rulesData->message ) && is_string( $rulesData->message ) ) {
                                    $message = $rulesData->message;
                                }
                                if ( ! is_numeric( $data ) ) {
                                    $validation[ 'success' ]        = false;
                                    $validation[ 'data' ][ $index ] = $message;
                                    break 2;
                                }
                                break;
                            case 'isDate':
                                $message = "Invalid Date Format";
                                if ( isset( $rulesData->message ) && is_string( $rulesData->message ) ) {
                                    $message = $rulesData->message;
                                }
                                $isDate = DateTime::createFromFormat( $rulesData->format, $data );
                                if ( ! $isDate ) {
                                    $validation[ 'success' ]        = false;
                                    $validation[ 'data' ][ $index ] = $message;
                                    break 2;
                                }
                                break;
                            default:
                                $validation[ 'success' ] = false;
                        }
                    }

                    apply_filters( 'eb_form_data_validation', $validation, $datarules, $data, $index );
                }
            }
        }
        return $validation;
    }
}
