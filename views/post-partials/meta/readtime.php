<?php
use EssentialBlocks\Utils\Helper;

$calcReadTime = Helper::calculate_read_time( $result->post_content );
$readtime     = '';
if ( in_array( 'readtime', $allMeta ) ) {
    // Enqueue FontAwesome for Time Icon
    wp_enqueue_style( 'essential-blocks-fontawesome' );
    $readtime .= sprintf(
        '<span class="ebpg-read-time"><i class="fas fa-clock"></i>%1$s %2$s read</span>',
        $calcReadTime,
        $calcReadTime > 1 ? 'minutes' : 'minute'
    );
}

return $readtime;
