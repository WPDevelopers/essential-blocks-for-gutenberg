<?php

$headerMetaHtml = '';
if ( isset( $showMeta ) && $showMeta ) {
	if ( in_array( 'avatar', $headerMeta ) ) {
		$headerMetaHtml .= $_meta_html['avatar'];
	}

	$headerMetaHtml .= '<div class="ebpg-entry-meta-items">';
	foreach ( $headerMeta as $meta ) {
		if ( $meta === 'avatar' ) {
			continue;
		}

		if ( is_array( $_meta_html ) && array_key_exists( $meta, $_meta_html ) ) {
			$headerMetaHtml .= $_meta_html[ $meta ];
		}
	}
	$headerMetaHtml .= '</div>';
}

if ( ! empty( $headerMetaHtml ) ) {
	$headerMetaHtml = sprintf(
		'<div class="ebpg-entry-meta ebpg-header-meta">%1$s</div>',
		$headerMetaHtml
	);
}

return $headerMetaHtml;
