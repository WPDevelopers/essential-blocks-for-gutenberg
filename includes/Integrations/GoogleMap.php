<?php

namespace EssentialBlocks\Integrations;

use EssentialBlocks\Utils\HttpRequest;

class GoogleMap extends ThirdPartyIntegration {

	public function __construct() {
		$this->add_ajax(
			array(
				'google_map_api_key'      => array(
					'callback' => 'google_map_api_key_callback',
					'public'   => true,
				),
				'google_map_api_key_save' => array(
					'callback' => 'google_map_api_key_save_callback',
					'public'   => false,
				),
			)
		);
	}

	/**
	 * Get Google Map API
	 */
	public function google_map_api_key_callback() {
		if ( ! wp_verify_nonce( sanitize_key( $_POST['admin_nonce'] ), 'admin-nonce' ) ) {
			die(esc_html__( 'Nonce did not match', 'essential-blocks' ) );
		}

		$settings = get_option( 'eb_settings' );

		if ( is_array( $settings ) && isset( $settings['googleMapApi'] ) ) {
			wp_send_json_success( $settings['googleMapApi'] );
		} else {
			wp_send_json_error( "Couldn't found data" );
		}
		exit;
	}

	/**
	 * Google Map API key save callback
	 */
	public function google_map_api_key_save_callback() {
		if ( ! wp_verify_nonce( sanitize_key( $_POST['admin_nonce'] ), 'admin-nonce' ) ) {
			die(esc_html__( 'Nonce did not match', 'essential-blocks' ) );
		}
		if ( ! current_user_can( 'activate_plugins' ) ) {
			wp_send_json_error( __( 'You are not authorized!', 'essential-blocks' ) );
		}

		$api = '';
		if ( isset( $_POST['googleMapApi'] ) ) {
			$api = trim( sanitize_text_field( $_POST['googleMapApi'] ) );
		}

		$settings = is_array( get_option( 'eb_settings' ) ) ? get_option( 'eb_settings' ) : array();
		if ( strlen( $api ) === 0 ) {
			unset( $settings['googleMapApi'] );
		} else {
			$settings['googleMapApi'] = $api;
		}

		if ( is_array( $settings ) > 0 ) {
			$output = update_option( 'eb_settings', $settings );
			wp_send_json_success( $output );
		} else {
			wp_send_json_error( "Couldn't save data" );
		}

		exit;
	}
}
