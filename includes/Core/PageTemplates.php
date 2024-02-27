<?php
namespace EssentialBlocks\Core;

use EssentialBlocks\Traits\HasSingletone;

class PageTemplates {
	use HasSingletone;

	/**
	 * The array of templates that this plugin tracks.
	 */
	protected $templates;

	/**
	 * Initializes the plugin by setting filters and administration functions.
	 */
	private function __construct() {

		$this->templates = array();

		add_filter( 'theme_page_templates', array( $this, 'add_new_template' ) );
		add_filter( 'theme_post_templates', array( $this, 'add_new_template' ) );

		// Add a filter to the save post to inject out template into the page cache.
		add_filter( 'wp_insert_post_data', array( $this, 'register_templates' ) );

		// Add a filter to the template include to determine if the page has our.
		// template assigned and return it's path.
		add_filter( 'template_include', array( $this, 'view_template' ) );

		// Add your templates to this array.
		$this->templates = array(
			'essential-blocks-fullwidth-template.php' => __( 'Essential Blocks Fullwidth Template', 'essential_blocks' ),
			'essential-blocks-blank-template.php'     => __( 'Essential Blocks Blank Template', 'essential_blocks' ),
		);
	}

	/**
	 * Adds our template to the page dropdown for v4.7+
	 */
	public function add_new_template( $posts_templates ) {
		$posts_templates = array_merge( $posts_templates, $this->templates );
		return $posts_templates;
	}

	/**
	 * Adds our template to the pages cache in order to trick WordPress
	 * into thinking the template file exists where it doens't really exist.
	 */
	public function register_templates( $atts ) {

		// Create the key used for the themes cache
		$cache_key = 'page_templates-' . md5( get_theme_root() . '/' . get_stylesheet() );

		// Retrieve the cache list.
		// If it doesn't exist, or it's empty prepare an array.
		$page_templates = wp_get_theme()->get_page_templates();
		if ( empty( $page_templates ) ) {
			$page_templates = array();
		}

		// New cache, therefore remove the old one.
		wp_cache_delete( $cache_key, 'themes' );

		// Now add our template to the list of templates by merging our templates.
		// with the existing templates array from the cache.
		$page_templates = array_merge( $page_templates, $this->templates );

		// Add the modified cache to allow WordPress to pick it up for listing.
		// available templates.
		wp_cache_add( $cache_key, $page_templates, 'themes', 1800 );

		$cache_key_post = 'post_templates-' . md5( get_theme_root() . '/' . get_stylesheet() );

		$post_templates = wp_get_theme()->get_post_templates();

		if ( empty( $post_templates ) ) {
			$post_templates = array();
		}

		if ( ! isset( $post_templates['post'] ) ) {
			$post_templates['post'] = array();
		}

		// New cache, therefore remove the old one.
		wp_cache_delete( $cache_key_post, 'themes' );

		// Now add our template to the list of templates by merging our templates.
		// with the existing templates array from the cache.
		$post_templates['post'] = array_merge( $post_templates['post'], $this->templates );

		// Add the modified cache to allow WordPress to pick it up for listing.
		// available templates.
		wp_cache_add( $cache_key_post, $post_templates, 'themes', 1800 );

		return $atts;
	}

	/**
	 * Checks if the template is assigned to the page
	 */
	public function view_template( $template ) {

		// Get global post.
		global $post;

		// Return template if post is empty.
		if ( ! $post ) {
			return $template;
		}

		// Return default template if we don't have a custom one defined.
		if ( ! isset(
			$this->templates[ get_post_meta(
				$post->ID,
				'_wp_page_template',
				true
			) ]
		) ) {
			return $template;
		}

		$file = ESSENTIAL_BLOCKS_DIR_PATH . 'templates/' . get_post_meta(
			$post->ID,
			'_wp_page_template',
			true
		);

		// Just to be safe, we check if the file exist first.
		if ( file_exists( $file ) ) {
			return $file;
		} else {
			echo esc_html( $file );
		}

		// Return template.
		return $template;
	}
}
