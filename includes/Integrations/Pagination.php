<?php

namespace EssentialBlocks\Integrations;

class Pagination extends ThirdPartyIntegration {
    public function __construct() {
        $this->add_ajax( [
            'post_grid_block_pagination' => [
                'callback' => 'post_grid_block_pagination_callback',
                'public'   => true
            ]
        ] );
    }

    /**
     * Get Post Grid Pagination
     */
    public function post_grid_block_pagination_callback() {
        if ( ! wp_verify_nonce( $_POST['post_grid_pagination_nonce'], 'eb-pagination-nonce' ) ) {
            die( esc_html__( 'Nonce did not match', 'essential-blocks' ) );
        }

        $html = '';

        $query           = isset( $_POST['querydata'] ) ? json_decode( wp_unslash( wp_kses_post( $_POST['querydata'] ) ) ) : [];
        $attributes      = isset( $_POST['attributes'] ) ? json_decode( wp_unslash( wp_kses_post( $_POST['attributes'] ) ) ) : [];
        $query           = ( is_object( $query ) || is_array( $query ) ) ? (array) $query : [];
        $attributes      = ( is_object( $attributes ) || is_array( $attributes ) ) ? (array) $attributes : [];
        $loadMoreOptions = isset( $attributes['loadMoreOptions'] ) ? (array) $attributes['loadMoreOptions'] : [];

        $totalPosts = isset( $_POST['totalPosts'] ) ? sanitize_text_field( $_POST['totalPosts'] ) : 0;
        $per_page   = isset( $query['per_page'] ) ? sanitize_text_field( $query['per_page'] ) : 0;

        $enableMorePosts   = $loadMoreOptions['enableMorePosts'] ?? false;
        $loadMoreType      = $loadMoreOptions['loadMoreType'] ?? '1';
        $loadMoreButtonTxt = $loadMoreOptions['loadMoreButtonTxt'] ?? "Load More";
        $prevTxt           = isset( $loadMoreOptions['prevTxt'] ) && ! empty( $loadMoreOptions['prevTxt'] ) ? $loadMoreOptions['prevTxt'] : "<";
        $nextTxt           = isset( $loadMoreOptions['nextTxt'] ) && ! empty( $loadMoreOptions['nextTxt'] ) ? $loadMoreOptions['nextTxt'] : ">";

        $html = "";
        if ( isset( $totalPosts ) && (int) $totalPosts > (int) $per_page ) {
            if ( isset( $enableMorePosts ) && $enableMorePosts ) {
                if ( $loadMoreType === '1' ) {
                    $html .= sprintf(
                        '<button class="btn ebpg-pagination-button" data-pagenumber="1">%1$s</button>',
                        $loadMoreButtonTxt
                    );
                }

                if ( isset( $totalPosts ) && ( $loadMoreType === '2' || $loadMoreType === '3' ) ) {
                    $totalPages = ceil( (int) $totalPosts / (int) $per_page );
                    $html .= sprintf(
                        '<button class="ebpg-pagination-item-previous">
                    %1$s
                </button>',
                        esc_html( $prevTxt )
                    );
                    for ( $i = 1; $i <= $totalPages; $i++ ) {
                        $active = $i == 1 ? "active" : "";

                        $html .= sprintf(
                            '<button class="ebpg-pagination-item %2$s" data-pagenumber="%1$s">
                        %1$s
                    </button>',
                            $i, $active
                        );
                    }
                    $html .= sprintf(
                        '<button class="ebpg-pagination-item-next">
                    %1$s
                </button>',
                        esc_html( $nextTxt )
                    );
                }
            }
        }

        echo wp_kses_post( $html );
        wp_die();
    }
}
