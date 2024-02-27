/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import example from "./example";
import metadata from "../block.json";
import attributes from "./attributes";
import AccordionIcon from "./icon";
import deprecated from "./deprecated";
const { ebConditionalRegisterBlockType } = EBControls;


ebConditionalRegisterBlockType(metadata, {
    icon: AccordionIcon,
    attributes,
    keywords: [
        __("accordion", "essential-blocks"),
        __("toggle", "essential-blocks"),
        __("eb essential", "essential-blocks"),
    ],
    edit: Edit,
    save: Save,
    example: example,
    deprecated,
});
