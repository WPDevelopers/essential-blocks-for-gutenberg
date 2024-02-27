<?php

namespace EssentialBlocks\API;

use EssentialBlocks\Traits\HasSingletone;

class Server {
	use HasSingletone;

	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
	}

	public function register_routes() {
		$routes = $this->routes();

		foreach ( $routes as $route ) {
			$route->register();
		}
	}

	public function routes() {
		return array(
			'product'     => Product::get_instance(),
			'post-blocks' => PostBlock::get_instance(),
		);
	}
}
