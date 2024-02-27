<?php

namespace EssentialBlocks\API;

use WP_Error;
use WP_Query;
use EssentialBlocks\Utils\Helper;

class Product extends Base
{
    private $sampleData = [  ];
    /**
     * Register REST Routes
     *
     * @return void
     */
    public function register()
    {
        $this->get(
            'products',
            [
                'args'     => [
                    'order_by'   => [  ],
                    'order'      => [  ],
                    'per_page'   => [  ],
                    'offset'     => [  ],
                    'categories' => [  ],
                    'tags'       => [  ]
                 ],
                'callback' => [ $this, 'get_products' ]
             ]
        );
    }

    public static function __callStatic( $name, $arguments = [  ] )
    {
        if ( method_exists( __CLASS__, $name ) ) {
            return static::get_instance()->$name( $arguments );
        }
    }

    /**
     * Get a list of WooCommerce products
     *
     * @param mixed $request
     * @param mixed $local
     * @return array|false|string|WP_Error
     *
     * @suppress PHP0417
     */
    public function get_products( $request, $local = false )
    {
        $data       = [  ];
        $query_data = ! empty( $request->get_param( 'query_data' ) ) ? json_decode( $request->get_param( 'query_data' ) ) : [  ];
        $query_data = ( is_object( $query_data ) || is_array( $query_data ) ) ? (array) $query_data : [  ];
        $pageNumber = isset( $request[ 'pageNumber' ] ) ? (int) sanitize_text_field( $request[ 'pageNumber' ] ) - 1 : 0;

        $_is_frontend = true;

        if ( ! rest_sanitize_boolean( $request->get_param( 'is_frontend' ) ) ) {
            $_is_frontend = false;
            $query_data   = $request->get_params();
        }

        // old
        // if ( isset( $query_data['per_page'] ) && isset( $query_data['offset'] ) ) {
        //     $query_data['offset'] = (int) $query_data['offset'] + ( (int) $query_data['per_page'] * (int) $pageNumber );
        // }

        if ( isset( $query_data[ 'per_page' ] ) && isset( $query_data[ 'offset' ] ) ) {
            $query_data[ 'offset' ] = (int) $query_data[ 'offset' ] + ( (int) $query_data[ 'per_page' ] * (int) $pageNumber );
        }

        // for filter by taxonomy
        if ( isset( $request[ "taxonomy" ] ) && isset( $request[ "category" ] ) ) {
            $category  = get_term_by( 'slug', sanitize_text_field( $request[ "category" ] ), sanitize_text_field( $request[ "taxonomy" ] ) );
            $catString = json_encode( [ [
                "label" => $category->name,
                "value" => $category->term_id
             ] ] );
            $filterQuery = [
                $request[ "taxonomy" ] => [
                    "name"  => sanitize_text_field( $request[ "category" ] ),
                    "slug"  => sanitize_text_field( $request[ "category" ] ),
                    "value" => $catString
                 ]
             ];
            $query_data[ "taxonomies" ] = $filterQuery;
        }

        $loop = new WP_Query( $this->query_builder( $query_data ) );

        $attributes = $_is_frontend ? json_decode( $request->get_param( 'attributes' ) ) : [  ];
        $attributes = ( is_object( $attributes ) || is_array( $attributes ) ) ? (array) $attributes : [  ];

        $isCustomCartBtn  = isset( $attributes[ 'isCustomCartBtn' ] ) ? $attributes[ 'isCustomCartBtn' ] : false;
        $simpleCartText   = isset( $attributes[ 'simpleCartText' ] ) ? $attributes[ 'simpleCartText' ] : 'Buy Now';
        $variableCartText = isset( $attributes[ 'variableCartText' ] ) ? $attributes[ 'variableCartText' ] : 'Select Options';
        $groupedCartText  = isset( $attributes[ 'groupedCartText' ] ) ? $attributes[ 'groupedCartText' ] : 'View Products';
        $externalCartText = isset( $attributes[ 'externalCartText' ] ) ? $attributes[ 'externalCartText' ] : 'Buy Now';
        $defaultCartText  = isset( $attributes[ 'defaultCartText' ] ) ? $attributes[ 'defaultCartText' ] : 'Read More';

        $this->sampleData = [
            $simpleCartText,
            $variableCartText,
            $groupedCartText,
            $externalCartText,
            $defaultCartText
         ];
        if ( $_is_frontend && $isCustomCartBtn ) {
            // change the cart button text according to editor change
            add_filter( 'woocommerce_product_add_to_cart_text', [ $this, 'eb_change_cart_button_text' ], 10, 1 );
        }

        $posts_count = 0;
        if ( isset( $loop->found_posts ) ) {
            $posts_count = $loop->found_posts;
        }

        if ( $loop->have_posts() ) {
            if ( $_is_frontend ) {
                ob_start();
            }
            while ( $loop->have_posts() ) {
                $loop->the_post();

                $products = [  ];
                $post_id  = get_the_ID();
                $product  = wc_get_product( $post_id );

                $products[ 'id' ]               = $post_id;
                $products[ 'title' ]            = get_the_title();
                $products[ 'permalink' ]        = get_permalink();
                $products[ 'excerpt' ]          = wp_strip_all_tags( get_the_content() );
                $products[ 'excerpt_full' ]     = wp_strip_all_tags( get_the_excerpt() );
                $products[ 'time' ]             = get_the_date();
                $products[ 'price' ]            = $product->get_price();
                $products[ 'price_sale' ]       = $product->get_sale_price();
                $products[ 'price_regular' ]    = $product->get_regular_price();
                $products[ 'discount' ]         = ( $products[ 'price_sale' ] && $products[ 'price_regular' ] ) ? round(  ( $products[ 'price_regular' ] - $products[ 'price_sale' ] ) / $products[ 'price_regular' ] * 100 ) . '%' : '';
                $products[ 'sale' ]             = $product->is_on_sale();
                $products[ 'price_html' ]       = $product->get_price_html();
                $products[ 'stock' ]            = $product->get_stock_status();
                $products[ 'featured' ]         = $product->is_featured();
                $products[ 'rating_count' ]     = $product->get_rating_count();
                $products[ 'rating_average' ]   = $product->get_average_rating();
                $products[ 'add_to_cart_url' ]  = $product->add_to_cart_url();
                $products[ 'add_to_cart_text' ] = $product->add_to_cart_text();
                $products[ 'type' ]             = $product->get_type();
                $products[ 'sold_count' ]       = $product->get_total_sales();
                $products[ 'stock_quantity' ]   = $product->get_stock_quantity();

                // image
                if ( has_post_thumbnail() ) {
                    $thumb_id    = get_post_thumbnail_id( $post_id );
                    $image_sizes = get_intermediate_image_sizes();
                    $image_src   = [  ];
                    foreach ( $image_sizes as $key => $value ) {
                        $image_src[ $value ] = wp_get_attachment_image_src( $thumb_id, $value, false )[ 0 ];
                    }
                    $products[ 'image' ] = $image_src;
                }

                // tag
                $tag = get_the_terms( $post_id, ( isset( $request[ 'tag' ] ) ? esc_attr( $request[ 'tag' ] ) : 'product_tag' ) );
                if ( ! empty( $tag ) ) {
                    $all_tag = [  ];
                    foreach ( $tag as $val ) {
                        $all_tag[  ] = [
                            'term_id' => $val->term_id,
                            'slug'    => $val->slug,
                            'name'    => $val->name,
                            'url'     => get_term_link( $val->term_id )
                         ];
                    }
                    $products[ 'tag' ] = $all_tag;
                }

                // cat
                $cat = get_the_terms( $post_id, ( isset( $request[ 'cat' ] ) ? esc_attr( $request[ 'cat' ] ) : 'product_cat' ) );
                if ( ! empty( $cat ) ) {
                    $all_cats = [  ];
                    foreach ( $cat as $val ) {
                        $all_cats[  ] = [
                            'term_id' => $val->term_id,
                            'slug'    => $val->slug,
                            'name'    => $val->name,
                            'url'     => get_term_link( $val->term_id )
                         ];
                    }
                    $products[ 'category' ] = $all_cats;
                }
                $data[  ] = $products;

                if ( $_is_frontend ) {
                    $_params = array_merge(
                        $attributes,
                        [ 'product' => wc_get_product( (int) $products[ 'id' ] ) ]
                    );
                    Helper::views( 'woocommerce/single-product', $_params );
                }
            }
            // wp_reset_query();
            wp_reset_postdata();

            if ( $_is_frontend && $isCustomCartBtn ) {
                // remove our own callback from filter
                remove_filter( 'woocommerce_product_add_to_cart_text', [ $this, 'eb_change_cart_button_text' ], 10 );
            }

            $response = $_is_frontend ? rest_ensure_response( ob_get_clean() ) : rest_ensure_response( $data );

            $response->set_headers( [
                'x-wp-total' => $posts_count
             ] );

            return $response;
        } else {
            return false;
        }
    }

    /**
     * API Query Builder
     */
    public static function query_builder( $attr )
    {

        $query_args = [
            'post_status'    => 'publish',
            'post_type'      => 'product',
            'posts_per_page' => isset( $attr[ 'per_page' ] ) ? $attr[ 'per_page' ] : 10,
            'orderby'        => isset( $attr[ 'orderby' ] ) ? $attr[ 'orderby' ] : 'date',
            'order'          => isset( $attr[ 'order' ] ) ? $attr[ 'order' ] : 'desc',
            'offset'         => isset( $attr[ 'offset' ] ) ? $attr[ 'offset' ] : 0
         ];

        if ( isset( $attr[ 'orderby' ] ) ) {
            switch ( $attr[ 'orderby' ] ) {
                case 'price':
                    $query_args[ 'meta_key' ] = '_price';
                    $query_args[ 'orderby' ]  = 'meta_value_num';
                    break;
                case 'popular':
                    $query_args[ 'meta_key' ] = 'total_sales';
                    $query_args[ 'orderby' ]  = 'meta_value_num';
                    $query_args[ 'order' ]    = 'desc';
                    break;
                case 'rating';
                    $query_args[ 'meta_key' ] = '_wc_average_rating';
                    $query_args[ 'orderby' ]  = 'meta_value_num';
                    break;
                default:
                    $query_args[ 'orderby' ] = $attr[ 'orderby' ];
                    break;
            }
        }

        if ( isset( $attr[ 'taxonomies' ] ) && is_array( $attr[ 'taxonomies' ] ) && count( $attr[ 'taxonomies' ] ) > 0 ) {
            $tax_query = [  ];
            foreach ( $attr[ 'taxonomies' ] as $taxonomy_key => $taxonomy ) {
                // If Taxonomoy is array and has value
                if ( is_array( $taxonomy ) && count( $taxonomy ) > 0 && isset( $taxonomy[ 'value' ] ) ) {
                    $tax_value_obj = json_decode( $taxonomy[ 'value' ] ); // decode value from json strong to array
                    $tax_values    = [  ];
                    // If value is Array and has value, push the value to $tax_values array
                    if ( is_array( $tax_value_obj ) && count( $tax_value_obj ) > 0 ) {
                        foreach ( $tax_value_obj as $tax_item ) {
                            array_push( $tax_values, $tax_item->value );
                        }

                        // Push taxonomy array to $tax_query
                        array_push(
                            $tax_query,
                            [
                                'taxonomy' => $taxonomy_key,
                                'field'    => 'id',
                                'terms'    => $tax_values
                             ]
                        );
                    }
                }
            }

            if ( count( $tax_query ) > 0 ) {
                $query_args[ 'tax_query' ] = $tax_query;
            }
        }
        // For Old Query Data [Beofre 4.3.2]
        else {
            if ( ! empty( $attr[ 'category' ] ) ) {
                $query_args[ 'tax_query' ][  ] = [
                    [
                        'taxonomy' => 'product_cat',
                        'field'    => 'term_id',
                        'terms'    => explode( ',', $attr[ 'category' ] )
                     ]
                 ];
            }

            if ( ! empty( $attr[ 'tag' ] ) ) {
                $query_args[ 'tax_query' ]     = [ 'relation' => 'OR' ];
                $query_args[ 'tax_query' ][  ] = [
                    [
                        'taxonomy' => 'product_tag',
                        'field'    => 'term_id',
                        'terms'    => explode( ',', $attr[ 'tag' ] )
                     ]
                 ];
            }
        }

        $hide_outofstock_products = get_option( 'woocommerce_hide_out_of_stock_items' );
        if ( "yes" === $hide_outofstock_products ) {
            $meta_query[  ] = [
                'key'     => '_stock_status',
                'value'   => 'outofstock',
                'compare' => 'NOT IN'
             ];

            $query_args[ 'meta_query' ] = $meta_query;
        }

        return $query_args;
    }

    public function eb_change_cart_button_text( $text )
    {
        global $product;

        list( $simpleCartText, $variableCartText, $groupedCartText, $externalCartText, $defaultCartText ) = $this->sampleData;

        $product_type = $product->get_type();

        $product_types = [
            'external' => $externalCartText,
            'grouped'  => $groupedCartText,
            'simple'   => $simpleCartText,
            'variable' => $variableCartText
         ];

        return isset( $product_types[ $product_type ] ) ?
        esc_html( $product_types[ $product_type ] ) :
        esc_html( $defaultCartText );
    }
}
