<?php

$tax_meta_html = array();
if ( count( $tax_meta ) > 0 ) {
	foreach ( $tax_meta as $tax ) {
		$tax_item_html = '';
		/**
		 * @var WP_Post $result
		 */
		$term_obj_list = get_the_terms( $result->ID, $tax );
		$item_class    = $tax === 'category' ? 'categories' : ( $tax === 'post_tag' ? 'tags' : $tax );

		if ( is_array( $term_obj_list ) && ! empty( $term_obj_list ) ) {

			$tax_item_html .= sprintf(
				'<div class="ebpg-meta ebpg-%1$s-meta">',
				$item_class
			);

			foreach ( $term_obj_list as $term ) {
				$tax_item_html .= sprintf(
					'<a href="%1$s" title="%2$s">%2$s</a>',
					esc_attr( esc_url( get_term_link( $term->term_id ) ) ),
					esc_html( $term->name )
				);
			}

			$tax_item_html .= '</div>';
		}

		$tax_meta_html[ $tax ] = $tax_item_html;
	}
}

return $tax_meta_html;
