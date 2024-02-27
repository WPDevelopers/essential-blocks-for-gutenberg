<?php

$tags = '';
if ( in_array( 'tags', $allMeta ) ) {
	$tagArray = get_the_tags( $result->ID );
	if ( is_array( $tagArray ) && count( $tagArray ) > 0 ) {
		$tags .= '<div class="ebpg-meta ebpg-tags-meta">';
		foreach ( $tagArray as $tag ) {
			$tags .= sprintf(
				'<a href="%1$s" title="%2$s">%2$s</a>',
				esc_attr( esc_url( get_tag_link( $tag->term_id ) ) ),
				esc_html( $tag->name )
			);
		}
		$tags .= '</div>';
	}
}

return $tags;
