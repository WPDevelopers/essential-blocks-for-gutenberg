<?php
namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;
use EssentialBlocks\Utils\QueryHelper;

abstract class PostBlock extends Block {
    protected static $default_attributes = [
        'preset'             => 'style-1',
        'showThumbnail'      => true,
        'showTitle'          => true,
        'titleLength'        => '',
        'titleTag'           => 'h2',
        'showContent'        => true,
        'contentLength'      => 20,
        'expansionIndicator' => '...',
        'showReadMore'       => false,
        'readmoreText'       => 'Read More',
        'showMeta'           => true,
        'headerMeta'         => '[{"value":"categories","label":"Categories"}]',
        'footerMeta'         => '[{"value":"avatar","label":"Author Avatar"},{"value":"author","label":"Author Name"},{"value":"date","label":"Published Date"}]',
        'authorPrefix'       => 'by',
        'datePrefix'         => 'on'
    ];

    abstract public function get_default_attributes();

    public function truncate( $phrase, $max_words ) {
        $phrase_array = explode( ' ', $phrase );
        if ( count( $phrase_array ) > $max_words && $max_words >= 0 ) {
            $phrase = implode( ' ', array_slice( $phrase_array, 0, $max_words ) );
        }
        return strip_shortcodes( $phrase );
    }

    public static function get_posts( $queryData, $isAjax = false ) {
        // Since > 4.2.5 took the functionality to QueryHelper Class
        $posts = QueryHelper::get_posts( $queryData, $isAjax );
        return $posts;
    }
}
