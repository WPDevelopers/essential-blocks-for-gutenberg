<?php
namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;

class InteractivePromo extends Block {
	protected $frontend_styles = array( 'essential-blocks-hover-effects-style' );

	/**
	 * Unique name of the block.
	 *
	 * @return string
	 */
	public function get_name() {
		return 'interactive-promo';
	}
}
