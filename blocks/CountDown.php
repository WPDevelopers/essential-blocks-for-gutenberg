<?php
namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;

class CountDown extends Block {
	protected $frontend_scripts = array( 'essential-blocks-countdown-block-frontend' );
	protected $frontend_styles  = array( 'essential-blocks-frontend-style' );

	/**
	 * Unique name of the block.
	 *
	 * @return string
	 */
	public function get_name() {
		return 'countdown';
	}

	/**
	 * Register all other scripts
	 *
	 * @return void
	 */
	public function register_scripts() {
		$this->assets_manager->register(
			'countdown-block-frontend',
			$this->path() . '/frontend/index.js'
		);
	}
}
