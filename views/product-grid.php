<?php

    /**
     * @var string $presetClass
     */
    $presetClass = ( 'grid' === $layout ) ? $gridPreset : $listPreset;

?>
<div class="eb-parent-wrapper eb-parent-<?php echo esc_attr( $blockId ); ?><?php echo esc_attr( $classHook ); ?>">
	<div
		class="<?php echo esc_attr( $blockId ); ?> eb-woo-products-wrapper"
		data-id="<?php echo esc_attr( $blockId ); ?>"
		data-querydata='<?php echo esc_attr( json_encode( $queryData ) ); ?>'
		data-attributes='<?php echo esc_attr( json_encode( $essentialAttr ) ); ?>'>
        <?php do_action( 'eb_woo_product_grid_taxonomy_filter', $essentialAttr );?>
		<div class="<?php echo esc_attr( $presetClass ); ?> eb-woo-products-gallery">
			<?php

                if ( $query->have_posts() ) {
                    while ( $query->have_posts() ) {
                        $query->the_post();
                        $product = wc_get_product( get_the_ID() );

                        $helper::views(
                            'woocommerce/single-product',
                            [
                                'product'           => $product,
                                'showRating'        => $showRating,
                                'ratingStyle'       => $ratingStyle,
                                'showSoldCount'     => $showSoldCount,
                                'showSoldCountBar'  => $showSoldCountBar,
                                'soldCountPrefix'   => $soldCountPrefix,
                                'soldCountSuffix'   => $soldCountSuffix,
                                'stockPercent'      => $stockPercent,
                                'showPrice'         => $showPrice,
                                'layout'            => $layout,
                                'showSaleBadge'     => $showSaleBadge,
                                'gridPreset'        => $gridPreset,
                                'saleBadgeAlign'    => $saleBadgeAlign,
                                'saleText'          => $saleText,
                                'productDescLength' => $productDescLength
                            ]
                        );
                    }
                }

                if ( ! $query->have_posts() ) {
                    $helper::views(
                        'common/no-content',
                        [
                            'content' => __( 'No Product Found', 'essential-blocks' )
                        ]
                    );
                }
            ?>
		</div>
		<?php
            /**
             * Pagination Markup
             */
            if ( $query->have_posts() ) {
                $helper::views(
                    'common/pagination',
                    array_merge(
                        $loadMoreOptions,
                        $queryData,
                        [
                            'parent_class' => 'ebproductgrid-pagination'
                        ]
                    )
                );
            }
        ?>
	</div>
</div>
