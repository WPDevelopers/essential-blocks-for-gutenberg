<?php
namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;

class AccordionItem extends Block {
    /**
     * Unique name of the block.
     *
     * @return string
     */
    public function get_name() {
        return 'accordion-item';
    }
}