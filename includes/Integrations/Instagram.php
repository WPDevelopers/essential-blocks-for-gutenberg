<?php

namespace EssentialBlocks\Integrations;

class Instagram extends ThirdPartyIntegration {
	public function __construct() {
		$this->add_ajax(
			array(
				'get_instagram_access_token' => array(
					'callback' => 'get_instagram_access_token_callback',
					'public'   => true,
				),
			)
		);
	}

	/**
	 * Get Google Map API
	 */
	public function get_instagram_access_token_callback() {
		if ( ! wp_verify_nonce( sanitize_key( $_POST['admin_nonce'] ), 'admin-nonce' ) ) {
			die( esc_html__( 'Nonce did not match', 'essential-blocks' ) );
		}
		if ( ! current_user_can( 'edit_posts' ) ) {
			wp_send_json_error( esc_html__( 'You are not authorized!', 'essential-blocks' ) );
		}

		$settings = get_option( 'eb_settings' );

		if ( is_array( $settings ) && isset( $settings['instagramToken'] ) ) {
			wp_send_json_success( $settings['instagramToken'] );
		} else {
			wp_send_json_error( "Couldn't found data" );
		}
		exit;
	}
}
