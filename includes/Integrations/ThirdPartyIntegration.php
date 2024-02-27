<?php
namespace EssentialBlocks\Integrations;

use EssentialBlocks\Utils\Settings;
use EssentialBlocks\Traits\HasSingletone;

abstract class ThirdPartyIntegration {
	use HasSingletone;

	/**
	 * Returns concat URL with the endpoint and version.
	 *
	 * @param string $endpoint
	 * @param string $version
	 * @return string
	 */
	protected function url( $endpoint, $version = 'v1/' ) {
		return static::URL . $version . $endpoint;
	}

	public static function is_isset( $value, $default = '' ) {
		return isset( $_POST[ $value ] ) ? sanitize_text_field( $_POST[ $value ] ) : $default;
	}

	public function settings() {
		return Settings::get_instance();
	}

	public function add_ajax( array $actions = array() ) {
		if ( ! empty( $actions ) ) {
			foreach ( $actions as $action => $method ) {
				if ( is_string( $method ) ) {
					add_action( "wp_ajax_$action", array( $this, $method ) );
					add_action( "wp_ajax_nopriv_$action", array( $this, $method ) );
				} else {
					add_action( "wp_ajax_$action", array( $this, $method['callback'] ) );
					if ( isset( $method['public'] ) && $method['public'] == true ) {
						add_action( "wp_ajax_nopriv_$action", array( $this, $method['callback'] ) );
					}
				}
			}
		}
	}
}
