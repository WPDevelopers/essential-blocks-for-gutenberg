<?php

namespace EssentialBlocks\Core;

use EssentialBlocks\Traits\HasSingletone;

/**
 * Description
 *
 * @method string render_callback($attributes, $content)
 * @property-read mixed $attributes
 *
 * @since 1.0.0
 * @package PackageName
 */
abstract class Block {
    use HasSingletone;

    /**
     * Enqueue
     *
     * @var \EssentialBlocks\Utils\Enqueue
     */
    protected $assets_manager = null;
    protected $dir            = '';
    protected $is_pro         = false;

    // WordPress older than 6.1 don't support array, needs to handle if multiple value needed
    // protected $editor_scripts = ['essential-blocks-editor-script'];
    // protected $editor_styles = ['essential-blocks-editor-css'];
    protected $editor_scripts   = [];
    protected $editor_styles    = [];
    protected $animation_script = 'essential-blocks-eb-animation';
    protected $animation_style  = 'essential-blocks-animation';

    protected $frontend_styles  = ['essential-blocks-frontend-style'];
    protected $frontend_scripts = [];

    /**
     * unique name of block
     *
     * @return string
     */
    abstract public function get_name();

    /**
     * Block can be enabled or not.
     *
     * Override if needed.
     *
     * @return bool
     */
    public function can_enable() {
        return true;
    }

    public function get_block_path( $name, $wp_version_check = false ) {
        $path = ESSENTIAL_BLOCKS_DIR_PATH . 'blocks/' . $name;

        if ( $wp_version_check && ESSENTIAL_BLOCKS_WP_VERSION < 5.8 ) {
            $path = 'essential-blocks/' . $name;
        }

        return apply_filters( 'essential_blocks_block_path', $path, $this->is_pro, $name, $wp_version_check );
    }

    public function path( $name = '' ) {
        if ( empty( $name ) ) {
            $name = $this->get_name();
        }

        return $this->get_block_path( $name );
    }

    public function register_block_type( $name, ...$args ) {
        if ( empty( $name ) ) {
            $name = $this->get_name();
        }

        return register_block_type( $this->get_block_path( $name, true ), ...$args );
    }

    public function load_frontend_styles() {
        // Enqueue Animation
        wp_enqueue_style( $this->animation_style );

        if ( empty( $this->frontend_styles ) ) {
            return;
        }

        foreach ( $this->frontend_styles as $handle ) {
            wp_enqueue_style( $handle );
        }
    }

    public function load_frontend_scripts() {
        wp_enqueue_script( $this->animation_script );

        if ( empty( $this->frontend_scripts ) ) {
            return;
        }

        foreach ( $this->frontend_scripts as $handle ) {
            wp_enqueue_script( $handle );
        }
    }

    public function load_scripts() {

        $this->frontend_styles  = apply_filters( "eb_frontend_styles/{$this->get_name()}", $this->frontend_styles );
        $this->frontend_scripts = apply_filters( "eb_frontend_scripts/{$this->get_name()}", $this->frontend_scripts );

        $this->load_frontend_styles();
        $this->load_frontend_scripts();
    }

    public function register( $assets_manager ) {
        $this->assets_manager = $assets_manager;

        $_args = [];

        if ( method_exists( $this, 'register_scripts' ) ) {
            $this->register_scripts();
        }

        $_args['render_callback'] = function ( $attributes, $content ) {
            return $content;
        };

        if ( method_exists( $this, 'render_callback' ) ) {
            $_args['render_callback'] = function ( $attributes, $content ) {
                if ( ! is_admin() ) {
                    $this->load_scripts();
                }
                return $this->render_callback( $attributes, $content );
            };
        }

        if (  ( ! empty( $this->frontend_scripts ) || ! empty( $this->frontend_styles ) ) && ! method_exists( $this, 'render_callback' ) ) {
            $_args['render_callback'] = function ( $attributes, $content ) {
                if ( ! is_admin() ) {
                    $this->load_scripts();
                }
                return $content;
            };
        }

        $_args['editor_script'] = array_merge(
            is_array( $this->editor_scripts ) ? $this->editor_scripts : [$this->editor_scripts],
            [$this->animation_script],
            ['essential-blocks-editor-script']
        );
        $_args['editor_style'] = array_merge(
            is_array( $this->editor_styles ) ? $this->editor_styles : [$this->editor_styles],
            [$this->animation_style],
            ['essential-blocks-editor-css']
        );

        if ( property_exists( $this, 'attributes' ) ) {
            $_args['attributes'] = $this->attributes;
        }

        return $this->register_block_type( $this->get_name(), $_args );
    }
}
