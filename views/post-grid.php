<?php
    $_parent_classes = [
        'eb-parent-wrapper',
        'eb-parent-' . $blockId,
        $classHook
    ];
    $_wrapper_classes = [
        $blockId,
        $preset,
        $className
    ];

?>

<div class="<?php echo esc_attr( implode( ' ', $_parent_classes ) ); ?>">
    <div
        class="<?php echo esc_attr( implode( ' ', $_wrapper_classes ) ); ?> eb-post-grid-wrapper"
        data-id="<?php echo esc_attr( $blockId ); ?>"
        data-querydata="<?php echo esc_attr( json_encode( $queryData ) ); ?>"
        data-attributes="<?php echo esc_attr( json_encode( $essentialAttr ) ); ?>">

		<?php
            /**
             * Category Filter Views
             */
            if ( $showTaxonomyFilter && ! empty( $selectedTaxonomy ) && ! empty( $selectedTaxonomyItems ) ) {
                $selectedTaxonomy = json_decode( $selectedTaxonomy );
                $categories       = json_decode( $selectedTaxonomyItems );
                $helper::views(
                    'post-partials/category-filter',
                    [
                        'taxonomy'      => $selectedTaxonomy->value,
                        'categories'    => $categories,
                        'essentialAttr' => $essentialAttr,
                        'showSearch'    => $showSearch
                    ]
                );
            }
        ?>


<?php
    if ( ! $showTaxonomyFilter ) {
        /**
         * Add search form
         */
        do_action( 'eb_post_grid_search_form', $essentialAttr );
    }

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
        if ( $version === 'v2' ) {
            echo '<div class="eb-post-grid-posts-wrapper">';
        }

        $helper::views( 'post-partials/grid-markup', $_params );

        if ( $version === 'v2' ) {
            echo '</div>';
        }
    }

    /**
     * No Post Markup
     */
    if ( empty( $posts ) ) {
        $helper::views(
            'common/no-content',
            [
                'content' => __( 'No Posts Found', 'essential-blocks' )
            ]
        );
    }

    /**
     * Pagination Markup
     */
    if ( ! empty( $posts ) && is_array( $loadMoreOptions ) && is_array( $queryData ) ) {
        $helper::views( 'common/pagination', array_merge(
            $loadMoreOptions, $queryData, [
                'posts'        => $posts,
                'parent_class' => 'ebpostgrid-pagination'
            ]
        ) );
    }
?>
    </div>
</div>
