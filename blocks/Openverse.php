<?php
namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;
use EssentialBlocks\Integrations\OpenVerse as OpenVerseAJAX;

class Openverse extends Block {
	protected $frontend_styles = array( 'essential-blocks-frontend-style', 'essential-blocks-fontawesome' );

	/**
	 * Unique name of the block.
	 *
	 * @return string
	 */
	public function get_name() {
		return 'openverse';
	}

	public function load_dependencies() {
		OpenVerseAJAX::get_instance();
	}
}
