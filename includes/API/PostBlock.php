<?php

namespace EssentialBlocks\API;

use EssentialBlocks\Utils\Helper;
use EssentialBlocks\blocks\PostGrid as PostGridBlock;
use EssentialBlocks\blocks\PostCarousel as PostCarouselBlock;

class PostBlock extends Base
{
    /**
     * Register REST Routes
     * @return void
     */
    public function register()
    {
        $this->get( 'queries', [
            'callback' => [ $this, 'get_posts' ]
         ] );
    }

    public function get_posts( $request )
    {
        $block_type = $request->has_param( 'block_type' ) ? $request->get_param( 'block_type' ) : 'post-grid';

        $query      = json_decode( $request[ 'query_data' ], true );
        $attributes = json_decode( $request[ 'attributes' ], true );
        $query      = ( is_object( $query ) || is_array( $query ) ) ? (array) $query : [  ];
        $attributes = ( is_object( $attributes ) || is_array( $attributes ) ) ? (array) $attributes : [  ];
        $pageNumber = isset( $request[ 'pageNumber' ] ) ? (int) sanitize_text_field( $request[ 'pageNumber' ] ) - 1 : 0;
        //Check if param is empty
        if ( ! is_array( $query ) || ! is_array( $attributes ) ) {
            wp_send_json_error( "Invalid request param" );
        }

        if ( isset( $query[ 'per_page' ] ) && isset( $query[ 'offset' ] ) ) {
            $query[ 'offset' ] = (int) $query[ 'offset' ] + ( (int) $query[ 'per_page' ] * (int) $pageNumber );
        }

        $_template_name = 'carousel-markup';
        $block_object   = PostCarouselBlock::get_instance();
        if ( $block_type === 'post-grid' ) {
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
                $query[ "taxonomies" ] = array_merge( $query[ 'taxonomies' ] ?? [  ], $filterQuery );
            }

            if ( isset( $request[ "query_type" ] ) && $request[ "query_type" ] == 'search' && isset( $request[ "s" ] ) ) {
                $searchKey    = sanitize_text_field( $request[ "s" ] );
                $query[ "s" ] = $searchKey;
            }

            $_template_name = 'grid-markup';
            $block_object   = PostGridBlock::get_instance();
            $attributes     = wp_parse_args( $attributes, $block_object->get_default_attributes() );
        }

        $result = $block_object->get_posts( $query, true );
        $posts  = [  ];
        if ( isset( $result->posts ) && is_array( $result->posts ) && count( $result->posts ) > 0 ) {
            $posts = $result->posts;
        }
        $posts_count = 0;
        if ( isset( $result->found_posts ) ) {
            $posts_count = $result->found_posts;
        }

        if ( empty( $posts ) ) {
            return false;
        }

        ob_start();
        Helper::views( 'post-partials/' . $_template_name, array_merge( $attributes, [
            'posts'        => $posts,
            'block_object' => $block_object,
            'source'       => isset( $query[ 'source' ] ) ? $query[ 'source' ] : 'post',
            'headerMeta'   => ! empty( $attributes[ 'headerMeta' ] ) ? json_decode( $attributes[ 'headerMeta' ] ) : [  ],
            'footerMeta'   => ! empty( $attributes[ 'footerMeta' ] ) ? json_decode( $attributes[ 'footerMeta' ] ) : [  ]
         ] ) );

        $response = rest_ensure_response( ob_get_clean() );
        $response->set_headers( [
            'x-wp-total' => $posts_count
         ] );

        return $response;
    }
}
