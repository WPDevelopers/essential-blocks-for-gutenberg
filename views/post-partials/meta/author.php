<?php
$author   = '';
$authorId = $result->post_author;

if ( in_array( 'author', $allMeta ) ) {
	$authorName = esc_html( get_the_author_meta( 'display_name', $authorId ) );
	$authorUrl  = esc_url( get_author_posts_url( get_the_author_meta( 'ID', $authorId ) ) );

	$author .= sprintf(
		'<span class="ebpg-posted-by">
            %3$s <a href="%2$s" title="%1$s" rel="author">%1$s</a>
        </span>',
		$authorName,
		$authorUrl,
		$authorPrefix
	);
}

return $author;
