<?php
namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;

class CallToAction extends Block {
	protected $frontend_styles = array( 'essential-blocks-frontend-style', 'essential-blocks-fontawesome', 'essential-blocks-hover-css' );

	/**
	 * Unique name of the block.
	 *
	 * @return string
	 */
	public function get_name() {
		return 'call-to-action';
	}
}
