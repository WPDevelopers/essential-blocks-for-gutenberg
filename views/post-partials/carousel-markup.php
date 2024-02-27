<?php

$headerMeta = ! is_array( $headerMeta ) ? (array) $headerMeta : $headerMeta;
$footerMeta = ! is_array( $footerMeta ) ? (array) $footerMeta : $footerMeta;

$headerMeta = array_map(
	function ( $item ) {
		return $item->value;
	},
	$headerMeta
);

$footerMeta = array_map(
	function ( $item ) {
		return $item->value;
	},
	$footerMeta
);

/**
 * @var string $source
 */
$taxonomies = get_object_taxonomies( $source );

$allMeta  = array_merge( $headerMeta, $footerMeta );
$tax_meta = array_intersect( $allMeta, $taxonomies );
$html     = '';

foreach ( $posts as $result ) {
	$tax_meta_html = require __DIR__ . '/meta/tax.php';
	$author        = require __DIR__ . '/meta/author.php';
	$avatar        = require __DIR__ . '/meta/avatar.php';
	$date          = require __DIR__ . '/meta/date.php';
	$categories    = require __DIR__ . '/meta/categories.php';
	$tags          = require __DIR__ . '/meta/tags.php';
	$readtime      = require __DIR__ . '/meta/readtime.php';

	$_meta_html = apply_filters(
		'eb_post_carousel_meta_markup',
		array_merge(
			$tax_meta_html,
			array(
				'avatar'     => $avatar,
				'author'     => $author,
				'date'       => $date,
				'categories' => $categories,
				'tags'       => $tags,
				'readtime'   => $readtime,
			)
		),
		$result->ID,
		$allMeta
	);

	/**
	 * Article Markup
	 */
	$html             .= sprintf( '<article class="ebpg-carousel-post ebpg-post-carousel-column" data-id="%1$s">', $result->ID );
	$html             .= '<div class="ebpg-carousel-post-holder">';
	$wrapper_link_html = sprintf( '<a class="ebpg-post-link-wrapper" href="%1$s"></a>', get_permalink( $result->ID ) );
	if ( $preset === 'style-4' ) {
		$html             .= $wrapper_link_html;
		$wrapper_link_html = '';
	}
	$html .= require __DIR__ . '/post-thumbnail.php';
	$html .= '<div class="ebpg-entry-wrapper">';
	$html .= require __DIR__ . '/meta/header.php';
	$html .= require __DIR__ . '/title.php';
	$html .= require __DIR__ . '/post-content.php';
	$html .= require __DIR__ . '/meta/footer.php';
	$html .= '</div>'; // End of class "ebpg-entry-wrapper"
	$html .= '</div>'; // End of class "ebpg-grid-post-holder"
	$html .= '</article>';
}

echo wp_kses( $html, 'post' );
