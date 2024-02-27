<?php

namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;

class TeamMember extends Block {
	protected $frontend_styles = array( 'essential-blocks-fontawesome', 'essential-blocks-hover-css', 'essential-blocks-frontend-style' );

	/**
	 * Unique name of the block.
	 *
	 * @return string
	 */
	public function get_name() {
		return 'team-member';
	}
}
