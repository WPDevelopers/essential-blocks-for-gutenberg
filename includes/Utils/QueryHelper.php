<?php
namespace EssentialBlocks\Utils;

class QueryHelper {
    /**
     * Get Query Results From Post Grid/Post Grid Search Block
     *
     * @param array $queryData
     * @param bool   $isAjax
     *
     * @return \WP_Query
     */
    public static function get_posts( $queryData, $isAjax = false ) {

        $queryData['source']  = $queryData['source'] === 'posts' ? 'post' : $queryData['source'];
        $queryData['orderby'] = $queryData['orderby'] === 'id' ? 'ID' : $queryData['orderby'];

        // Set Orderby to Default if Pro Orderby is selected and Pro isn't active
        $proOrderby = ['rand', 'menu_order', 'comment_count'];
        if ( ! ESSENTIAL_BLOCKS_IS_PRO_ACTIVE && in_array( $queryData['orderby'], $proOrderby ) ) {
            $queryData['orderby'] = 'date';
        }

        $args = [
            'post_status'      => 'publish',
            'post_type'        => $queryData['source'],
            'posts_per_page'   => (int) $queryData['per_page'],
            'order'            => $queryData['order'],
            'orderby'          => $queryData['orderby'],
            'offset'           => $queryData['offset'],
            'suppress_filters' => false
        ];

        if ( isset( $queryData['taxonomies'] ) && is_array( $queryData['taxonomies'] ) && count( $queryData['taxonomies'] ) > 0 ) {
            $tax_query = [];
            foreach ( $queryData['taxonomies'] as $taxonomy_key => $taxonomy ) {
                // if( ! empty( $taxonomy ) && ! empty( $taxonomy["value"] ) ) {

                // }

                // If Taxonomoy is array and has value
                if ( is_array( $taxonomy ) && count( $taxonomy ) > 0 && isset( $taxonomy['value'] ) ) {
                    $tax_value_obj = json_decode( $taxonomy['value'] ); // decode value from json strong to array
                    $tax_values    = [];

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
                $args['tax_query'] = $tax_query;
            }
        }
        // For Old Query Data [Beofre 3.9.0]
        else {
            if ( isset( $queryData['categories'] ) && strlen( $queryData['categories'] ) > 0 ) {
                $catJsonDecode = json_decode( $queryData['categories'] );
                $catArray      = [];
                if ( is_array( $catJsonDecode ) ) {
                    foreach ( $catJsonDecode as $item ) {
                        array_push( $catArray, $item->value );
                    }
                }
                $args['category__in'] = $catArray;
            }

            if ( isset( $queryData['tags'] ) && strlen( $queryData['tags'] ) > 0 ) {
                $tagJsonDecode = json_decode( $queryData['tags'] );
                $tagArray      = [];
                foreach ( $tagJsonDecode as $item ) {
                    array_push( $tagArray, $item->value );
                }
                $args['tag__in'] = $tagArray;
            }
        }

        if ( isset( $queryData['author'] ) && strlen( $queryData['author'] ) > 0 ) {
            $authorJsonDecode = json_decode( $queryData['author'] );
            $authorArray      = [];
            foreach ( $authorJsonDecode as $item ) {
                array_push( $authorArray, $item->value );
            }
            $args['author__in'] = $authorArray;
        }

        if ( isset( $queryData['include'] ) && strlen( $queryData['include'] ) > 0 ) {
            $includeJsonDecode = json_decode( $queryData['include'] );
            $includeArray      = [];
            foreach ( $includeJsonDecode as $item ) {
                array_push( $includeArray, $item->value );
            }
            $args['post__in'] = $includeArray;
        }

        if ( isset( $queryData['exclude'] ) && strlen( $queryData['exclude'] ) > 0 ) {
            $excludeJsonDecode = json_decode( $queryData['exclude'] );
            $excludeArray      = [];
            foreach ( $excludeJsonDecode as $item ) {
                array_push( $excludeArray, $item->value );
            }
            $args['post__not_in'] = $excludeArray;
        }

        if ( isset( $queryData['exclude_current'] ) && $queryData['exclude_current'] ) {
            $post_id = get_the_ID();

            if ( $isAjax ) {
                $url     = wp_get_referer();
                $post_id = url_to_postid( $url );
            }

            if ( isset( $args['post__not_in'] ) && count( $args['post__not_in'] ) > 0 && ! in_array( $post_id, $args['post__not_in'] ) ) {
                array_push( $args['post__not_in'], $post_id );
            } else {
                $args['post__not_in'] = [$post_id];
            }
        }

        if ( isset( $queryData['s'] ) && $queryData['s'] ) {
            $args['s'] = $queryData['s'];
        }

        // $posts = get_posts( $args );
        $posts = new \WP_Query( $args );
        return $posts;
    }
}
