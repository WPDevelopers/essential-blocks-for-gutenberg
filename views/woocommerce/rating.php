<div class="eb-woo-product-rating-wrapper">

	<?php
        if ( ! isset( $ratingStyle ) ) {
            $ratingStyle = 'star';
        }

        if ( 'star' === $ratingStyle ) {
            for ( $i = 1; $i <= 5; $i++ ) {
                if ( $i <= $product->get_average_rating() ) {
                    echo wp_kses_post( '<span class="eb-woo-product-rating filled"><i class="fas fa-star"></i></span>' );
                } else {
                    echo wp_kses_post( '<span class="eb-woo-product-rating"><i class="far fa-star"></i></span>' );
                }
            }
        } else if ( 'number' === $ratingStyle ) {
            echo sprintf( '<span class="eb-woo-product-rating filled"><i class="fas fa-star"></i> %1$s</span>',
                esc_html( $product->get_average_rating() )
            );
        }
    ?>
</div>
