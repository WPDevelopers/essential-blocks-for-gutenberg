/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import Icon from "./icon";
import Edit from "./edit";
import Save from "./save";
import deprecated from "./deprecated";
import attributes from "./attributes";
import metadata from "../block.json";
import "./style.scss";

const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
    keywords: [
        __("EB Form", "essential-blocks"),
        __("Form Block", "essential-blocks"),
        __("Contact Form", "essential-blocks"),
        __("Subscription Form", "essential-blocks"),
    ],
    icon: Icon,
    attributes,
    edit: Edit,
    save: Save,
    example: {},
    deprecated
});
