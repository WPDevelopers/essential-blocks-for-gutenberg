<?php
namespace EssentialBlocks\Utils;

use EssentialBlocks\Traits\HasSingletone;

class Migrator {
	use HasSingletone;

	public function init() {
		/**
		 * For 1.3.1
		 */
		$this->migration_options_db();
	}

	public function migration_options_db() {
		$opt_db_migration = get_option( 'eb_opt_migration', false );
		if ( version_compare( ESSENTIAL_BLOCKS_VERSION, '1.3.1', '==' ) && $opt_db_migration === false ) {
			update_option( 'eb_opt_migration', true );
			$all_blocks = get_option( 'essential_all_blocks', array() );
			$blocks     = array();
			if ( ! empty( $all_blocks ) ) {
				foreach ( $all_blocks as $block ) {
					$blocks[ $block['value'] ] = $block;
				}
			}
			update_option( 'essential_all_blocks', $blocks );
		}
	}
}
