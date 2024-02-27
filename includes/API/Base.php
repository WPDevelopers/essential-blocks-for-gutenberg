<?php

namespace EssentialBlocks\API;

use WP_REST_Server;
use EssentialBlocks\Traits\HasSingletone;

abstract class Base {
    use HasSingletone;

    /**
     * Register REST Routes
     *
     * @return void
     */
    abstract function register();

    public function register_endpoint( $endpoint, $args = [] ) {
        register_rest_route( 'essential-blocks/v1', $endpoint, $args );
    }

    public function get( $endpoint, $args = [] ) {
        $_args = wp_parse_args(
            $args,
            [
                'methods'             => WP_REST_Server::READABLE,
                'permission_callback' => '__return_true'
            ]
        );

        $this->register_endpoint( $endpoint, $_args );
    }

    public function post( $endpoint, $args = [] ) {
        $_args = wp_parse_args(
            $args,
            [
                'methods'             => WP_REST_Server::CREATABLE,
                'permission_callback' => '__return_true'
            ]
        );

        $this->register_endpoint( $endpoint, $_args );
    }
}
