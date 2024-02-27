<?php

namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;

class Slider extends Block
{
    protected $frontend_scripts = [
        'essential-blocks-slider-frontend',
        'essential-blocks-slickjs',
        'essential-blocks-vendor-bundle'
     ];
    protected $frontend_styles = [ 'essential-blocks-frontend-style', 'essential-blocks-fontawesome', 'essential-blocks-slick-style', 'essential-blocks-common-style' ];

    /**
     * Unique name of the block.
     *
     * @return string
     */
    public function get_name()
    {
        return 'slider';
    }

    /**
     * Register all other scripts
     *
     * @return void
     */
    public function register_scripts()
    {
        $this->assets_manager->register(
            'slider-frontend',
            $this->path() . '/frontend/index.js',
            [ 'jquery' ]
        );
    }
}
