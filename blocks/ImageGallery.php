<?php
namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;

class ImageGallery extends Block {
    protected $frontend_scripts = ['essential-blocks-image-gallery-frontend'];
    protected $frontend_styles  = ['essential-blocks-frontend-style'];

    /**
     * Unique name of the block.
     *
     * @return string
     */
    public function get_name() {
        return 'image-gallery';
    }

    /**
     * Register all other scripts
     *
     * @return void
     */
    public function register_scripts() {
        $this->assets_manager->register(
            'image-gallery-frontend',
            $this->path() . '/frontend/index.js'
        );
    }

    /**
     * block's render callback function
     *
     * @param array  $attributes
     * @param string $content
     * @return mixed
     */
    public function render_callback( $attributes, $content ) {
        if ( ! is_admin() ) {
            $disableLightBox = false;
            if ( isset( $attributes['disableLightBox'] ) && $attributes['disableLightBox'] == true ) {
                $disableLightBox = true;
            }

            $enableFilter = false;
            $enableIsotope = false;
            if ( isset( $attributes['enableFilter'] ) && $attributes['enableFilter'] == true ) {
                $enableFilter = true;
            }
            if ( isset( $attributes['enableIsotope'] ) && $attributes['enableIsotope'] == true ) {
                $enableIsotope = true;
            }
            if ( $enableFilter || $enableIsotope ) {
                $this->assets_manager->enqueue(
                    'isotope',
                    'js/isotope.pkgd.min.js'
                );

                $this->assets_manager->enqueue(
                    'image-loaded',
                    'js/images-loaded.min.js'
                );
            }

            // Load Lighbox Resource if Lightbox isn't disbaled
            if ( ! $disableLightBox ) {
                $this->assets_manager->enqueue(
                    'fslightbox',
                    'js/fslightbox.min.js',
                    ['jquery']
                );

                $this->assets_manager->enqueue(
                    'fslightbox-style',
                    'css/fslightbox.min.css'
                );
            }
        }
        return $content;
    }
}