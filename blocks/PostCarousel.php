<?php
namespace EssentialBlocks\blocks;

use EssentialBlocks\Utils\Helper;

class PostCarousel extends PostBlock {
    protected $frontend_scripts = [
        'essential-blocks-post-carousel-frontend',
        'essential-blocks-slickjs'
    ];
    protected $frontend_styles = [
        'essential-blocks-frontend-style',
        'essential-blocks-slick-style',
        'essential-blocks-fontawesome',
        'essential-blocks-common-style'
    ];

    protected static $default_attributes = [
        'arrows'           => true,
        'dots'             => true,
        'dotPreset'        => 'dot-circle',
        'autoplaySpeed'    => 3000,
        'speed'            => 500,
        'adaptiveHeight'   => true,
        'autoplay'         => true,
        'infinite'         => true,
        'pauseOnHover'     => true,
        'slideToShowRange' => 3,
        'titleLength'      => '10',
        'leftArrowIcon'    => 'fas fa-chevron-circle-left',
        'rightArrowIcon'   => 'fas fa-chevron-circle-right',
        'addIcon'          => false
    ];

    public function get_default_attributes() {
        return array_merge( parent::$default_attributes, self::$default_attributes );
    }

    /**
     * Unique name of the block.
     *
     * @return string
     */
    public function get_name() {
        return 'post-carousel';
    }

    /**
     * Register all other scripts
     *
     * @return void
     */
    public function register_scripts() {
        $this->assets_manager->register(
            'post-carousel-frontend',
            $this->path() . '/frontend/index.js',
            ['jquery']
        );
        $this->assets_manager->register( 'slickjs', 'js/slick.min.js' );
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

        $queryData = $attributes['queryData'];

        // Query Result
        $result = $this->get_posts( $queryData );
        $query  = [];
        if ( isset( $result->posts ) && is_array( $result->posts ) && count( $result->posts ) > 0 ) {
            $query = apply_filters( 'eb_post_carousel_query_results', $result->posts );
        }

        $attributes = wp_parse_args( $attributes, $this->get_default_attributes() );

        $className = isset( $attributes['className'] ) ? $attributes['className'] : '';
        $classHook = isset( $attributes['classHook'] ) ? $attributes['classHook'] : '';

        $_default_attributes = array_keys( parent::$default_attributes );
        if ( isset( $attributes['leftArrowIcon'] ) ) {
            $_default_attributes[] = 'leftArrowIcon';
        }
        if ( isset( $attributes['rightArrowIcon'] ) ) {
            $_default_attributes[] = 'rightArrowIcon';
        }
        $_essential_attrs = [];
        array_walk(
            $_default_attributes,
            function ( $key ) use ( $attributes, &$_essential_attrs ) {
                $_essential_attrs[$key] = $attributes[$key];
            }
        );

        $_slider_attributes = self::$default_attributes;

        unset( $_slider_attributes['dotPreset'] );
        unset( $_slider_attributes['titleLength'] );

        $_slider_attributes['TABslideToShowRange'] = 2;
        $_slider_attributes['MOBslideToShowRange'] = 1;

        $_slider_settings = [];
        array_walk(
            $_slider_attributes,
            function ( $value, $key ) use ( $attributes, &$_slider_settings ) {
                $_slider_settings[$key] = isset( $attributes[$key] ) ? $attributes[$key] : $value;
            }
        );

        ob_start();
        Helper::views(
            'post-carousel',
            array_merge(
                $attributes,
                [
                    'essentialAttr'  => $_essential_attrs,
                    'sliderSettings' => $_slider_settings,
                    'className'      => $className,
                    'classHook'      => $classHook,
                    'thumbnailSize'  => '',
                    'posts'          => $query,
                    'block_object'   => $this
                ]
            )
        );

        return ob_get_clean();
    }
}
