<?php
namespace EssentialBlocks\Utils;

use Plugin_Upgrader;
use WP_Filesystem_Base;
use WP_Ajax_Upgrader_Skin;
use EssentialBlocks\Traits\HasSingletone;

class Installer {
	use HasSingletone;

	/**
	 * Some process take long time to execute
	 * for that need to raise the limit.
	 */
	public static function raise_limits() {
		wp_raise_memory_limit( 'admin' );
		if ( wp_is_ini_value_changeable( 'max_execution_time' ) ) {
			@ini_set( 'max_execution_time', 0 );
		}
		@set_time_limit( 0 );
	}

	public function install( $plugin ) {
		require_once ABSPATH . 'wp-admin/includes/plugin.php';
		require_once ABSPATH . 'wp-admin/includes/file.php';
		require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
		include_once ABSPATH . 'wp-admin/includes/plugin-install.php';

		$response = array( 'success' => false );

		$_plugins     = Helper::get_plugins();
		$is_installed = isset( $_plugins[ $plugin['plugin_file'] ] );

		if ( isset( $plugin['is_pro'] ) && $plugin['is_pro'] == true ) {
			if ( ! $is_installed ) {
				$status['code']    = 'pro_plugin';
				$status['message'] = 'Pro Plugin';
			}
		}

		if ( ! $is_installed ) {
			/**
			 * @var array|object $api
			 */
			$api = plugins_api(
				'plugin_information',
				array(
					'slug'   => sanitize_key( wp_unslash( $plugin['slug'] ) ),
					'fields' => array(
						'sections' => false,
					),
				)
			);

			if ( is_wp_error( $api ) ) {
				$response['message'] = $api->get_error_message();
				return $response;
			}

			$response['name'] = $api->name;

			$skin     = new WP_Ajax_Upgrader_Skin();
			$upgrader = new Plugin_Upgrader( $skin );
			$result   = $upgrader->install( $api->download_link );

			if ( is_wp_error( $result ) ) {
				$response['code']    = $result->get_error_code();
				$response['message'] = $result->get_error_message();
				return $response;
			} elseif ( is_wp_error( $skin->result ) ) {
				$response['code']    = $skin->result->get_error_code();
				$response['message'] = $skin->result->get_error_message();

				return $response;
			} elseif ( $skin->get_errors()->has_errors() ) {
				$response['message'] = $skin->get_error_messages();

				return $response;
			} elseif ( is_null( $result ) ) {
				global $wp_filesystem;
				$response['code']    = 'unable_to_connect_to_filesystem';
				$response['message'] = __( 'Unable to connect to the filesystem. Please confirm your credentials.' );

				if ( $wp_filesystem instanceof WP_Filesystem_Base && is_wp_error( $wp_filesystem->errors ) && $wp_filesystem->errors->has_errors() ) {
					$response['message'] = esc_html( $wp_filesystem->errors->get_error_message() );
				}
				return $response;
			}

			$install_status        = install_plugin_install_status( $api );
			$plugin['plugin_file'] = $install_status['file'];
		}

		$activate_status = $this->activate_plugin( $plugin['plugin_file'] );
		if ( $activate_status && ! is_wp_error( $activate_status ) ) {
			$response['success'] = true;
		}

		$response['slug'] = $plugin['slug'];
		return $response;
	}

	private function activate_plugin( $file ) {
		if ( current_user_can( 'activate_plugin', $file ) && is_plugin_inactive( $file ) ) {
			$result = activate_plugin( $file, false, false );
			if ( is_wp_error( $result ) ) {
				return $result;
			} else {
				return true;
			}
		}

		return false;
	}
}
