<?php
namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;

class AdvancedVideo extends Block {

    protected $editor_scripts = [
        'essential-blocks-hls',
        'essential-blocks-flv',
        'essential-blocks-dash'
    ];
    protected $frontend_scripts = ['essential-blocks-advanced-video-frontend'];
    protected $frontend_styles  = ['essential-blocks-frontend-style', 'essential-blocks-fontawesome'];

    /**
     * Unique name of the block.
     *
     * @return string
     */
    public function get_name() {
        return 'advanced-video';
    }

    /**
     * Register all other scripts
     *
     * @return void
     */
    public function register_scripts() {
        $this->assets_manager->register(
            'advanced-video-frontend',
            $this->path() . '/frontend/index.js',
            [
                'essential-blocks-vendor-bundle',
                'essential-blocks-hls',
                'essential-blocks-flv',
                'essential-blocks-dash'
            ]
        );
    }
}
