<?php
namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;

class ImageComparison extends Block {
	protected $frontend_scripts = array( 'essential-blocks-image-comparison-frontend' );
	protected $frontend_styles  = array();
	/**
	 * Unique name of the block.
	 *
	 * @return string
	 */
	public function get_name() {
		return 'image-comparison';
	}

	/**
	 * Register all other scripts
	 *
	 * @return void
	 */
	public function register_scripts() {
		$this->assets_manager->register(
			'image-comparison-frontend',
			$this->path() . '/frontend/index.js',
			array( 'essential-blocks-vendor-bundle' )
		);
	}
}
