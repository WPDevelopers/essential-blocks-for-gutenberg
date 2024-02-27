<?php

$date = '';
if ( in_array( 'date', $allMeta ) ) {
	$date .= sprintf(
		'<span class="ebpg-posted-on">
            %3$s <time dateTime="%1$s">%2$s</time>
        </span>',
		esc_attr( get_the_date( 'c', $result ) ),
		esc_html( get_the_date( '', $result ) ),
		$datePrefix
	);
}

return $date;
