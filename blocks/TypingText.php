<?php

namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;

class TypingText extends Block {
	protected $frontend_scripts = array( 'essential-blocks-typing-text-frontend', 'essential-blocks-typedjs' );

	/**
	 * Unique name of the block.
	 *
	 * @return string
	 */
	public function get_name() {
		return 'typing-text';
	}

	/**
	 * Register all other scripts
	 *
	 * @return void
	 */
	public function register_scripts() {
		$this->assets_manager->register(
			'typing-text-frontend',
			$this->path() . '/frontend/index.js',
			array( 'jquery', 'essential-blocks-typedjs' )
		);
	}
}
