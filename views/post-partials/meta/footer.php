<?php

$footerMetaHtml = '';
if ( isset( $showMeta ) && $showMeta ) {
	if ( in_array( 'avatar', $footerMeta ) ) {
		$footerMetaHtml .= $_meta_html['avatar'];
	}
	$footerMetaHtml .= '<div class="ebpg-entry-meta-items">';
	foreach ( $footerMeta as $meta ) {
		if ( $meta === 'avatar' ) {
			continue;
		}

		if ( is_array( $_meta_html ) && array_key_exists( $meta, $_meta_html ) ) {
			$footerMetaHtml .= $_meta_html[ $meta ];
		}
	}
	$footerMetaHtml .= '</div>';
}

if ( ! empty( $footerMetaHtml ) ) {
	$footerMetaHtml = sprintf(
		'<div class="ebpg-entry-meta ebpg-footer-meta">%1$s</div>',
		$footerMetaHtml
	);
}

return $footerMetaHtml;
