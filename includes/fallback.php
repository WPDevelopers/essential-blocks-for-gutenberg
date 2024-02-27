<?php
use EssentialBlocks\Core\Blocks;
use EssentialBlocks\Utils\Settings;

class EssentialAdmin {

	/**
	 * Get the version number
	 */
	public static function get_version( $path ) {
		if ( defined( 'EB_DEV' ) && EB_DEV === true ) {
			return filemtime( $path );
		} else {
			return ESSENTIAL_BLOCKS_VERSION;
		}
	}

}

class EssentialBlocks {

}

class EBBlocks extends Blocks {
	public static function get_blocks() {
		return self::get_instance( Settings::get_instance() )->all();
	}
}
