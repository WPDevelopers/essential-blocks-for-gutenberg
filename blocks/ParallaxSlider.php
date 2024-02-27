<?php
namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;

class ParallaxSlider extends Block {
	protected $frontend_scripts = array( 'essential-blocks-parallax-slider-frontend' );
	protected $frontend_styles  = array( 'essential-blocks-frontend-style' );
	/**
	 * Unique name of the block.
	 *
	 * @return string
	 */
	public function get_name() {
		return 'parallax-slider';
	}

	/**
	 * Register all other scripts
	 *
	 * @return void
	 */
	public function register_scripts() {
		$this->assets_manager->register(
			'parallax-slider-frontend',
			$this->path() . '/frontend/index.js'
		);
	}
}
