<?php

$read_more_html = '';
$read_more_icon = '';

if ( $addIcon ) {
    $read_more_icon .= sprintf(
        '%1$s',
        $helper::eb_render_icon( $helper::eb_get_icon_type( $icon ), 'eb-button-icon eb-button-icon-left hvr-icon', $icon )
    );
}

if ( $showReadMore ) {
    $read_more_html .= sprintf(
        '<div class="ebpg-readmore-btn">
            <a href="%1$s">%3$s %2$s %4$s</a>
        </div>',
        get_permalink( $result->ID ),
        $readmoreText,
        $addIcon && $iconPosition == 'left' ? $read_more_icon : '',
        $addIcon && $iconPosition == 'right' ? $read_more_icon : '',
    );
}

return $read_more_html;
