<?php
namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;

class FlipBox extends Block {
    protected $frontend_styles = ['essential-blocks-frontend-style', 'essential-blocks-fontawesome'];

    protected $frontend_scripts = ['essential-blocks-flipbox-frontend'];

    /**
     * Register all other scripts
     * @return void
     */
    public function register_scripts() {
        $this->assets_manager->register(
            'flipbox-frontend',
            $this->path() . '/frontend/index.js'
        );
    }

    /**
     * Unique name of the block.
     *
     * @return string
     */
    public function get_name() {
        return 'flipbox';
    }
}
