/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { SocialShareIcon } from "./icon";
import Edit from "./edit";
import attributes from "./attributes";
import "./style.scss";

import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
    icon: SocialShareIcon,
    attributes,
    keywords: [
        __("social share", "essential-blocks"),
        __("icons", "essential-blocks"),
        __("eb essential", "essential-blocks"),
    ],
    edit: Edit,
    save: () => null,
    example: {
        attributes: {
            cover: `${EssentialBlocksLocalize?.image_url}/block-preview/social-share.jpg`,
        },
    },
});
