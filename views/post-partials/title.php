<?php

$titleHTML = '';

/**
 * @var \WP_Post $result
 */

if ( $showTitle ) {
	$ebpg_title = wp_kses( $result->post_title, 'post' );
	if ( ! empty( $titleLength ) ) {
		$ebpg_title = $block_object->truncate( $ebpg_title, $titleLength );
	}

	$title_link_classes = $block_object->get_name() == 'post-grid' ? 'ebpg-grid-post-link' : 'ebpg-carousel-post-link';

	$titleHTML .= sprintf(
		'<header class="ebpg-entry-header">
            <%1$s class="ebpg-entry-title">
                <a class="%5$s" href="%2$s" title="%3$s">%4$s</a>
            </%1$s>
        </header>',
		$titleTag,
		get_permalink( $result->ID ),
		esc_attr( $ebpg_title ),
		$ebpg_title,
		$title_link_classes
	);
}

return $titleHTML;
