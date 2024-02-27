<?php

$categories = '';
if ( in_array( 'categories', $allMeta ) ) {
	$catArray = wp_get_post_categories( $result->ID, array( 'fields' => 'all' ) );
	if ( is_array( $catArray ) && count( $catArray ) > 0 ) {
		$categories .= '<div class="ebpg-meta ebpg-categories-meta">';
		foreach ( $catArray as $cat ) {
			$categories .= sprintf(
				'<a href="%1$s" title="%2$s">%2$s</a>',
				esc_attr( esc_url( get_category_link( $cat->term_id ) ) ),
				esc_html( $cat->name )
			);
		}
		$categories .= '</div>';
	}
}

return $categories;
