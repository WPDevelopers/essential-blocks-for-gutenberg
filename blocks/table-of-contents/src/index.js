/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */

import "./style.scss";

import { TOC_Icon } from "./icon";
import Edit from "./edit";
import attributes from "./attributes";
import metadata from "../block.json";
import example from "./example";
import deprecated from "./deprecated";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
    keywords: [
        __("TOC", "essential-blocks"),
        __("Table Of Contents", "essential-blocks"),
        __("eb table of contents", "essential-blocks"),
    ],
    icon: TOC_Icon,
    attributes,
    edit: Edit,
    save: () => null,
    example: {
        attributes: {
            cover: `${EssentialBlocksLocalize?.image_url}/block-preview/table-of-contents.jpeg`,
        },
    },
    deprecated,
});
