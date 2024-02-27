<?php
    $_wrapper_classes = [
        $blockId,
        $preset,
        $className,
        $arrows == 1 ? 'slick-arrows' : 'arrow-none',
        $adaptiveHeight == 1 ? 'equal-height' : 'arrow-none',
        $dotPreset
    ];

    $_eb_classes = [
        'eb-post-carousel',
        'init-' . $blockId
    ];
?>

<div class="eb-parent-wrapper eb-parent-<?php echo esc_attr( $blockId ); ?><?php echo esc_attr( $classHook ); ?>">
    <div
        class="eb-post-carousel-wrapper                                                                                                                                                                                                                                                                                                                         <?php echo esc_attr( implode( ' ', $_wrapper_classes ) ); ?>"
        data-id="<?php echo esc_attr( $blockId ); ?>"
        data-querydata="<?php echo esc_attr( serialize( $queryData ) ); ?>"
        data-slidersettings="<?php echo esc_attr( json_encode( $sliderSettings ) ); ?>"
        data-attributes="<?php echo esc_attr( json_encode( $essentialAttr ) ); ?>">

        <div class="<?php echo esc_attr( implode( ' ', $_eb_classes ) ); ?>" data-id="<?php echo esc_attr( $blockId ); ?>">
            <?php
                /**
                 * Post Grid Markup
                 */

                if ( ! empty( $posts ) ) {
                    $_defined_vars = get_defined_vars();
                    $_params       = isset( $_defined_vars['data'] ) ? $_defined_vars['data'] : [];

                    $_params = array_merge(
                        $_params,
                        [
                            'posts'      => $posts,
                            'queryData'  => isset( $queryData ) ? $queryData : [],
                            'source'     => isset( $queryData['source'] ) ? $queryData['source'] : 'post',
                            'headerMeta' => ! empty( $headerMeta ) ? json_decode( $headerMeta ) : [],
                            'footerMeta' => ! empty( $footerMeta ) ? json_decode( $footerMeta ) : []
                        ]
                    );

                    $helper::views( 'post-partials/carousel-markup', $_params );
                }

                /**
                 * No Post Markup
                 */
                if ( empty( $posts ) ) {
                    $helper::views( 'common/no-content', [
                        'content' => __( 'No Posts Found', 'essential-blocks' )
                    ] );
                }
            ?>
        </div>
    </div>
</div>
