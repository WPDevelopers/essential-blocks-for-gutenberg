<?php

namespace EssentialBlocks\Integrations;

use EssentialBlocks\Utils\Helper;
use EssentialBlocks\Utils\HttpRequest;

class OpenVerse extends ThirdPartyIntegration {
    /**
     * Base URL for Openverse API
     *
     * @var string
     */
    const URL = 'https://api.openverse.engineering/';

    public function __construct() {
        $this->add_ajax(
            [
                'eb_get_collections'      => [
                    'callback' => 'collections',
                    'public'   => false
                ],
                'eb_get_item'             => [
                    'callback' => 'get_item',
                    'public'   => false
                ],
                'eb_get_registration'     => [
                    'callback' => 'registration',
                    'public'   => false
                ],
                'eb_openverse_token'      => [
                    'callback' => 'generate_token',
                    'public'   => false
                ],
                'openverse_email_name_DB' => [
                    'callback' => 'get_siteinfo',
                    'public'   => false
                ]
            ]
        );
    }

    /**
     * Generate token from Openverse API.
     *
     * @return void
     */
    public function generate_token() {
        if ( ! current_user_can( 'activate_plugins' ) ) {
            wp_send_json_error( __( 'You are not authorized!', 'essential-blocks' ) );
        }
        $response = $this->generate_openverse_token();
        wp_send_json( $response );
    }

    /**
     * Openverse Registration
     */
    public function registration() {
        if ( ! wp_verify_nonce( sanitize_key( $_POST['admin_nonce'] ), 'admin-nonce' ) ) {
            die( esc_html__( 'Nonce did not match', 'essential-blocks' ) );
        }
        if ( ! current_user_can( 'activate_plugins' ) ) {
            wp_send_json_error( __( 'You are not authorized!', 'essential-blocks' ) );
        }

        $name  = sanitize_text_field( Helper::is_isset( 'openverseName' ) );
        $email = sanitize_email( Helper::is_isset( 'openverseEmail' ) );

        // Registration for client id and client secret
        $response = HttpRequest::get_instance()->post(
            $this->url( 'auth_tokens/register/' ),
            [
                'body' => [
                    'name'        => $name,
                    'description' => 'Openverse Block by Essential Blocks',
                    'email'       => $email
                ]
            ]
        );

        $response_array = is_object( $response ) ? get_object_vars( $response ) : $response;

        if ( isset( $response_array['client_id'], $response_array['client_secret'], $response_array['name'] ) ) {
            $this->settings()->save_eb_settings(
                'openverseApi',
                [
                    'client_id'     => $response_array['client_id'],
                    'client_secret' => $response_array['client_secret'],
                    'name'          => $response_array['name'],
                    'email'         => $email
                ]
            );
        }

        wp_send_json( $response );
    }

    /**
     * Get siteinfor from options table
     *
     * @return void
     */
    public function get_siteinfo() {
        if ( ! wp_verify_nonce( sanitize_key( $_POST['admin_nonce'] ), 'admin-nonce' ) ) {
            die( esc_html__( 'Nonce did not match', 'essential-blocks' ) );
        }
        if ( ! current_user_can( 'activate_plugins' ) ) {
            wp_send_json_error( __( 'You are not authorized!', 'essential-blocks' ) );
        }

        /**
         * @return string OpenVerse API Key if exists
         */
        $settings = get_option( 'eb_settings', [] );
        if ( isset( $settings['openverseApi'] ) ) {
            wp_send_json_success( $settings['openverseApi'] );
        }

        $admin_email = get_bloginfo( 'admin_email' );
        $site_name   = get_bloginfo( 'name' );
        if ( ! empty( $admin_email ) || ! empty( $site_name ) ) {
            $site_info = [
                'email' => $admin_email,
                'name'  => $site_name
            ];
            wp_send_json_success( $site_info );
        }

        wp_send_json_error( "Couldn't found any data" );
    }

    /**
     * Get collections from Openverse API.
     *
     * @return \WP_Error|mixed
     */
    public function collections() {
        if ( ! wp_verify_nonce( sanitize_key( $_POST['admin_nonce'] ), 'admin-nonce' ) ) {
            die( esc_html__( 'Nonce did not match', 'essential-blocks' ) );
        }

        // Fetching the token and check the expire time
        $token = get_transient( 'eb_openverse_token' );
        if ( empty( $token ) ) {
            $token_info = $this->generate_openverse_token();
            $token      = $token_info['access_token'];
        }

        $body_params = [
            'page_size'    => Helper::is_isset( 12 ),
            'q'            => sanitize_text_field( Helper::is_isset( 'openverseQ' ) ),
            'license'      => sanitize_text_field( Helper::is_isset( 'openverseFilterLicenses' ) ),
            'categories'   => sanitize_text_field( Helper::is_isset( 'openverseFilterImgtype' ) ),
            'size'         => sanitize_text_field( Helper::is_isset( 'openverseFilterSize' ) ),
            'extension'    => sanitize_text_field( Helper::is_isset( 'openverseFilterExtension' ) ),
            'license_type' => sanitize_text_field( Helper::is_isset( 'openverseFilterLicensesType' ) ),
            'page'         => intval( Helper::is_isset( 'openversePage', 1 ) )
        ];

        $response = HttpRequest::get_instance()->get(
            $this->url( 'images/' ),
            [
                'body'    => $body_params,
                'headers' => [
                    'Content-Type' => 'application/json',
                    'X-API-KEY'    => $token
                ],
                'timeout' => 240,
                'is_ajax' => true
            ]
        );

        return $response;
    }

    /**
     * Get Item for download.
     *
     * @return void
     */
    public function get_item() {
        if ( ! wp_verify_nonce( sanitize_key( $_POST['admin_nonce'] ), 'admin-nonce' ) ) {
            die( esc_html__( 'Nonce did not match', 'essential-blocks' ) );
        }

        if ( isset( $_POST['image_url'] ) ) {
            $file = sanitize_url( $_POST['image_url'] );
        }

        $filename = basename( $file );
        try {
            echo esc_url( wp_get_attachment_url( $this->do_upload( $file, $filename ) ) );
        } catch ( \Exception $e ) {
            echo esc_html( 'Upload failed, details: ' . $e->getMessage() );
        }

        wp_die();
    }

    /**
     * Generates openverse token.
     *
     * @return array
     */
    private function generate_openverse_token() {
        // get client idd ... from db
        $settings = get_option( 'eb_settings' );

        if ( ! is_array( $settings ) || ! isset( $settings['openverseApi'] ) ) {
            wp_send_json_error( "Couldn't found data" );
        }

        $client_id     = $settings['openverseApi']['client_id'];
        $client_secret = $settings['openverseApi']['client_secret'];

        // Registration for client id and client secret
        $response = HttpRequest::get_instance()->post(
            $this->url( 'auth_tokens/token/' ),
            [
                'body'    => [
                    'client_id'     => $client_id,
                    'client_secret' => $client_secret,
                    'grant_type'    => 'client_credentials'
                ],
                // 'headers' => [
                // 'Content-Type' => 'multipart/form-data',
                // ],
                'timeout' => 240
            ]
        );

        $response_array = is_object( $response ) ? get_object_vars( $response ) : $response;
        if ( isset( $response_array['access_token'], $response_array['expires_in'] ) ) {
            set_transient( 'eb_openverse_token', $response_array['access_token'], $response_array['expires_in'] - 60 );
        }

        return $response_array;
    }

    /**
     * Upload to media
     *
     * @return bool|int
     */
    private function do_upload( $url, $title = null ) {

        if ( ! function_exists( 'download_url' ) && ! function_exists( 'media_handle_sideload' ) ) {
            return false;
        }
        // Download url to a temp file
        $tmp = download_url( $url );
        if ( is_wp_error( $tmp ) ) {
            return false;
        }

        $filename  = pathinfo( $url, PATHINFO_FILENAME );
        $extension = pathinfo( $url, PATHINFO_EXTENSION );

        if ( ! $extension ) {
            $mime = mime_content_type( $tmp );
            $mime = is_string( $mime ) ? sanitize_mime_type( $mime ) : false;

            $mime_extensions = [
                // mime_type         => extension (no period)
                'image/jpg'  => 'jpg',
                'image/jpeg' => 'jpeg',
                'image/gif'  => 'gif',
                'image/png'  => 'png'
            ];

            if ( isset( $mime_extensions[$mime] ) ) {
                $extension = $mime_extensions[$mime];
            } else {
                wp_delete_file( $tmp );
                return false;
            }
        }
        $args = [
            'name'     => "$filename.$extension",
            'tmp_name' => $tmp
        ];

        // Do the upload
        $attachment_id = media_handle_sideload( $args, 0, $title );

        wp_delete_file( $tmp );

        // Error uploading
        if ( is_wp_error( $attachment_id ) ) {
            return false;
        }

        return (int) $attachment_id;
    }
}
