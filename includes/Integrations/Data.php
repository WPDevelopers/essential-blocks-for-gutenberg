<?php

namespace EssentialBlocks\Integrations;

use EssentialBlocks\Utils\Settings;

class Data extends ThirdPartyIntegration {
    public function __construct() {
        $this->add_ajax( [
            'eb_fetch_options_data' => [
                'callback' => 'fetch_options_data_callback',
                'public'   => false
            ],
            'eb_save_options_data'  => [
                'callback' => 'save_options_data_callback',
                'public'   => false
            ]
        ] );
    }

    /**
     * fetch_options_data_callback
     */
    public function fetch_options_data_callback() {
        if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( $_POST['nonce'], 'admin-nonce' ) ) {
            wp_send_json_error( __( 'Nonce Error', 'essential-blocks' ) );
        }

        if ( ! current_user_can( 'activate_plugins' ) ) {
            wp_send_json_error( __( 'You are not authorized!', 'essential-blocks' ) );
        }

        if ( isset( $_POST['key'] ) ) {
            $key  = trim( $_POST['key'] );
            $data = Settings::get( $key );

            if ( $data ) {
                wp_send_json_success( wp_unslash( $data ) );
            } else {
                wp_send_json_error( __( 'No Data Found!', 'essential-blocks' ) );
            }
        } else {
            wp_send_json_error( __( 'Something went wrong regarding getting options data.', 'essential-blocks' ) );
        }
        exit;
    }

    /**
     * save_options_data_callback
     */
    public function save_options_data_callback() {
        if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( $_POST['nonce'], 'admin-nonce' ) ) {
            wp_send_json_error( __( 'Nonce Error', 'essential-blocks' ) );
        }

        if ( ! current_user_can( 'activate_plugins' ) ) {
            wp_send_json_error( __( 'You are not authorized!', 'essential-blocks' ) );
        }

        if ( isset( $_POST['key'] ) && $_POST['value'] ) {
            $key   = trim( $_POST['key'] );
            $value = trim( $_POST['value'] );

            $save = Settings::save( $key, $value );

            if ( $save ) {
                wp_send_json_success( $save );
            } else {
                wp_send_json_error( __( 'Couldn\'t save data', 'essential-blocks' ) );
            }
        } else {
            wp_send_json_error( __( 'Something went wrong regarding getting options data.', 'essential-blocks' ) );
        }
        exit;
    }
}
