<?php
namespace EssentialBlocks\blocks;

use EssentialBlocks\Utils\Helper;

class PostGrid extends PostBlock {
    protected $frontend_scripts = ['essential-blocks-post-grid-frontend'];

    protected $frontend_styles = ['essential-blocks-frontend-style', 'essential-blocks-fontawesome'];

    protected static $default_attributes = [
        'thumbnailSize'       => '',
        'loadMoreOptions'     => false,
        'showTaxonomyFilter'  => false,
        'showSearch'          => false,
        'enableAjaxSearch'    => false,
        'addIcon'             => false,
        'iconPosition'        => 'left',
        'icon'                => 'fas fa-chevron-right',
        'preset'              => 'style-1',
        'enableThumbnailSort' => true,
        'defaultFilter'       => 'all',
        'version'             => ""
    ];

    public function get_default_attributes() {
        return array_merge( parent::$default_attributes, self::$default_attributes );
    }

    /**
     * Unique name of the block.
     * @return string
     */
    public function get_name() {
        return 'post-grid';
    }

    /**
     * Register all other scripts
     * @return void
     */
    public function register_scripts() {
        $this->assets_manager->register(
            'post-grid-frontend',
            $this->path() . '/frontend/index.js'
        );
    }

    /**
     * Block render callback.
     *
     * @param mixed $attributes
     * @param mixed $content
     * @return mixed
     */
    public function render_callback( $attributes, $content ) {
        if ( is_admin() ) {
            return;
        }

        $queryData = $attributes["queryData"];

        $customQueryData = $queryData; //Update with filter data

        if ( isset( $attributes['showTaxonomyFilter'] ) && $attributes['showTaxonomyFilter'] ) {
            $defaultFilter = isset( $attributes["defaultFilter"] ) ? $attributes["defaultFilter"] : "all";
            if ( $defaultFilter !== "all" ) {
                $taxonomy  = json_decode( $attributes['selectedTaxonomy'] );
                $category  = get_term_by( 'slug', sanitize_text_field( $defaultFilter ), sanitize_text_field( $taxonomy->value ) );
                $catString = json_encode( [[
                    "label" => $category->name,
                    "value" => $category->term_id
                ]] );
                $defaultTaxonomy[$taxonomy->value] = [
                    'name'  => $defaultFilter,
                    'slug'  => $defaultFilter,
                    'value' => $catString
                ];
                $customQueryData['taxonomies'] = $defaultTaxonomy;
            }
        }

        //Query Result
        $result = $this->get_posts( $customQueryData );
        $query  = [];
        if ( isset( $result->posts ) && is_array( $result->posts ) && count( $result->posts ) > 0 ) {
            $query = apply_filters( 'eb_post_grid_query_results', $result->posts );
        }

        $attributes = wp_parse_args( $attributes, $this->get_default_attributes() );

        //Set enableThumbnailSort to false if preset is 4/5
        if ( isset( $attributes['enableThumbnailSort'] ) && ! in_array( $attributes["preset"], ['style-1', 'style-2', 'style-3'] ) ) {
            $attributes['enableThumbnailSort'] = false;
        }

        $className = isset( $attributes["className"] ) ? $attributes["className"] : "";
        $classHook = isset( $attributes['classHook'] ) ? $attributes['classHook'] : '';

        $_default_attributes = array_keys( parent::$default_attributes );
        $_essential_attrs    = [
            'thumbnailSize'      => $attributes["thumbnailSize"],
            'loadMoreOptions'    => $attributes['loadMoreOptions'],
            'showSearch'         => $attributes['showSearch'],
            'showTaxonomyFilter' => $attributes['showTaxonomyFilter'],
            'enableAjaxSearch'   => $attributes['enableAjaxSearch'],
            'addIcon'            => $attributes['addIcon'],
            'iconPosition'       => $attributes['iconPosition'],
            'icon'               => $attributes['icon'],
            'preset'             => $attributes['preset'],
            'defaultFilter'      => $attributes['defaultFilter'],
            'version'            => isset( $attributes['version'] ) ? $attributes['version'] : ''
        ];

        //set total posts
        if ( isset( $result->found_posts ) ) {
            if ( isset( $attributes['loadMoreOptions']['totalPosts'] ) ) {
                $attributes['loadMoreOptions']['totalPosts'] = $result->found_posts;
            }
            if ( isset( $_essential_attrs['loadMoreOptions']['totalPosts'] ) ) {
                $_essential_attrs['loadMoreOptions']['totalPosts'] = $result->found_posts;
            }
        }

        array_walk( $_default_attributes, function ( $key ) use ( $attributes, &$_essential_attrs ) {
            $_essential_attrs[$key] = $attributes[$key];
        } );

        ob_start();
        Helper::views( 'post-grid', array_merge( $attributes, [
            'essentialAttr' => $_essential_attrs,
            'className'     => $className,
            'classHook'     => $classHook,
            'queryData'     => $queryData,
            'posts'         => $query,
            'block_object'  => $this
        ] ) );

        return ob_get_clean();
    }
}
