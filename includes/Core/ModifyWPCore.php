<?php
namespace EssentialBlocks\Core;

use EssentialBlocks\Traits\HasSingletone;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class ModifyWPCore {

	use HasSingletone;

	public function __construct() {
		$post_types = get_post_types(
			array(
				'public' => true,
			)
		);

		if ( is_array( $post_types ) && count( $post_types ) > 0 ) {
			foreach ( $post_types as $post ) {
				add_filter( 'rest_' . $post . '_collection_params', array( $this, 'filterPostQueryArgs' ), 2, 10 );
			}
		}
	}

	public static function filterPostQueryArgs( $query_params, $post_type ) {
		$query_params['orderby']['enum'] = array_merge( $query_params['orderby']['enum'], array( 'rand', 'menu_order', 'comment_count' ) );
		return $query_params;
	}
}
