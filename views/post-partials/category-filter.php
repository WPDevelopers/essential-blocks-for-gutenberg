<div class="eb-post-grid-category-filter<?php if ( $showSearch ) {echo esc_attr( ' eb-show-search' );}?>" data-ebpgTaxonomy="<?php echo esc_attr( $taxonomy ); ?>">
	<ul class="ebpg-category-filter-list">
		<?php
            /**
             * @var array $categories
             */
            array_map(
                function ( $item ) use ($essentialAttr){
                    $activeClass = $item->value === $essentialAttr['defaultFilter'] ? 'active' : '';
                    echo wp_kses(
                        sprintf(
                            '<li class="ebpg-category-filter-list-item %1$s" data-ebpgCategory="%2$s">%3$s</li>',
                            $activeClass,
                            $item->value,
                            $item->label
                        ),
                        'post'
                    );
                },
                $categories
            );
        ?>
	</ul>
    <?php
        /**
         * Add search form
         */
        do_action( 'eb_post_grid_search_form', $essentialAttr );

    ?>
</div>
