/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import example from "./example";
import metadata from "../block.json";
import "./style.scss";
import attributes from "./attributes";
import { InstagramIcon } from "./icon";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
    icon: InstagramIcon,
    attributes,
    keywords: [
        __("Instagram Feed", "essential-blocks"),
        __("eb Instagram Feed", "essential-blocks"),
    ],
    edit: Edit,
    save: () => null,
    example: {
        attributes: {
            cover: `${EssentialBlocksLocalize?.image_url}/block-preview/instagram-feed.jpeg`,
        },
    },
});
