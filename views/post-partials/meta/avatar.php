<?php

$authorId = $result->post_author;
$avatar   = '';
if ( in_array( 'avatar', $allMeta ) ) {
	$authorName   = esc_html( get_the_author_meta( 'display_name', $authorId ) );
	$authorUrl    = esc_url( get_author_posts_url( get_the_author_meta( 'ID', $authorId ) ) );
	$authorAvatar = get_avatar_url( $authorId, array( 'size' => '96' ) );

	$avatar .= sprintf(
		'<div class="ebpg-author-avatar">
            <a href="%1$s">
                <img
                    alt="%2$s"
                    src="%3$s"
                />
            </a>
        </div>',
		$authorUrl,
		$authorName,
		$authorAvatar
	);
}

return $avatar;
