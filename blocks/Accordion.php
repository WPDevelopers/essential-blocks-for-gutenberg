<?php
namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;
use EssentialBlocks\Core\FaqSchema;

class Accordion extends Block {
    protected $frontend_scripts = ['essential-blocks-accordion-frontend'];
    protected $frontend_styles  = ['essential-blocks-fontawesome'];

    /**
     * Unique name of the block.
     *
     * @return string
     */
    public function get_name() {
        return 'accordion';
    }

    public function load_dependencies() {
        FaqSchema::get_instance();
    }

    /**
     * Initialize the InnerBlocks for Accordion
     *
     * @return array<Block>
     */
    public function inner_blocks() {
        return [
            AccordionItem::get_instance()
        ];
    }

    /**
     * Register all other scripts
     *
     * @return void
     */
    public function register_scripts() {
        $this->assets_manager->register(
            'accordion-frontend',
            $this->path() . '/frontend/index.js',
            ['essential-blocks-controls-frontend']
        );
    }
}
