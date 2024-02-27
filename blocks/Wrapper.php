<?php

namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;

class Wrapper extends Block {
	protected $editor_styles   = 'essential-blocks-block-common';
	protected $frontend_styles = array( 'essential-blocks-block-common' );

	/**
	 * Unique name of the block.
	 *
	 * @return string
	 */
	public function get_name() {
		return 'wrapper';
	}
}
