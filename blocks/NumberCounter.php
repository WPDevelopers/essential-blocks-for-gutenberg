<?php
namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;

class NumberCounter extends Block {
	protected $frontend_scripts = array( 'essential-blocks-number-counter-frontend' );
	protected $frontend_styles  = array( 'essential-blocks-fontawesome' );
	/**
	 * Unique name of the block.
	 *
	 * @return string
	 */
	public function get_name() {
		return 'number-counter';
	}

	/**
	 * Register all other scripts
	 *
	 * @return void
	 */
	public function register_scripts() {
		$this->assets_manager->register(
			'number-counter-frontend',
			$this->path() . '/frontend/index.js'
		);
	}
}
