<?php

namespace EssentialBlocks\Utils;

use WP_Error;
use EssentialBlocks\Traits\HasSingletone;

class HttpRequest {
	use HasSingletone;

	public function post( $url, $args = array() ) {
		return $this->call( 'post', array( $url, $args ) );
	}

	public function get( $url, $args = array() ) {
		return $this->call( 'get', array( $url, $args ) );
	}

	public function call( $method = 'get', $args = array() ) {
		/**
		 * User must have passed an url to call.
		 *
		 * @var string $_url
		 */
		$_url = ! empty( $args[0] ) ? $args[0] : false;
		if ( ! $_url ) {
			return new WP_Error( 'empty_url', __( 'URL cannot be empty.', 'essential-blocks' ) );
		}

		/**
		 * Other Request option passed by Users.
		 *
		 * @var mixed $_args_options
		 */
		$_args_options = ! empty( $args[1] ) ? $args[1] : array();

		$default_options = array(
			'timeout' => 45,
			'headers' => array(),
		);

		if ( $method === 'get' && ! empty( $_args_options['body'] ) ) {
			$_url = Helper::build_url( $_url, $_args_options['body'] );
			unset( $_args_options['body'] );
		}

		// if( $method === 'post' ) {
		// $default_options['headers'] = array_merge($default_options['headers'], [
		// 'Content-Type' => 'application/json'
		// ]);
		// }

		$is_ajax = false;
		if ( ! empty( $_args_options['is_ajax'] ) ) {
			$is_ajax = (bool) $_args_options['is_ajax'];
			unset( $_args_options['is_ajax'] );
		}

		$_options = wp_parse_args( $_args_options, $default_options );
		$response = call_user_func_array( "wp_remote_$method", array( $_url, $_options ) );

		if ( is_wp_error( $response ) ) {
			$error_message = $response->get_error_message();

			if ( $is_ajax ) {
				wp_send_json_error( 'Something went wrong!' );
			}

			return array(
				'status'  => 'error',
				'message' => 'Something went wrong: ' . $error_message,
			);
		}

		$_remote_body = wp_remote_retrieve_body( $response );
		$_status_code = wp_remote_retrieve_response_code( $response );

		if ( $is_ajax ) {
			if ( $_status_code === 200 ) {
				wp_send_json_success( $_remote_body );
			} else {
				wp_send_json_error( $_remote_body );
			}
		}

		return json_decode( $_remote_body );
	}
}
