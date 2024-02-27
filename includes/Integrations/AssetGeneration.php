<?php
namespace EssentialBlocks\Integrations;

class AssetGeneration extends ThirdPartyIntegration {

	public function __construct() {
		$this->add_ajax(
			array(
				'eb_regenerate_assets' => array(
					'callback' => 'regenerate_assets',
					'public'   => false,
				),
			)
		);
	}

	/**
	 * regenerate_assets
	 */
	public function regenerate_assets() {
		$response_data = array( 'messsage' => __( 'Sorry, you are not allowed to do this operation.', 'essential-blocks' ) );

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( $response_data );
		}

		/**
		 * Nonce verification
		 */
		if ( ! isset( $_POST['admin_nonce'] ) || ! wp_verify_nonce( sanitize_key( $_POST['admin_nonce'] ), 'admin-nonce' ) ) {
			die( esc_html__( 'Nonce did not match', 'essential-blocks' ) );
		}

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'essential-blocks' ) );
			wp_send_json_error( $response_data );
		}

		$upload_dir = wp_upload_dir();
		$base_path  = $upload_dir['basedir'];
		self::remove_directory_files( $base_path . '/eb-style' );
		$response_data = array(
			'messsage' => __( 'Successfully saved data!', 'essential-blocks' ),
		);
		wp_send_json_success( $response_data );
	}

	public static function remove_directory_files( $src ) {
		if ( is_dir( $src ) ) {
			$dir = opendir( $src );
			while ( false !== ( $file = readdir( $dir ) ) ) {
				if ( ( $file != '.' ) && ( $file != '..' ) ) {
					$full = $src . '/' . $file;
					if ( is_dir( $full ) ) {
						self::remove_directory_files( $full );
					} else {
						wp_delete_file( $full );
					}
				}
			}
			closedir( $dir );
			rmdir( $src );
		}
	}
}
