import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import icon from "./icon";
import attributes from "./attributes";
import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
    keywords: [
        __("posts", "essential-blocks"),
        __("post grid", "essential-blocks"),
        __("posts block", "essential-blocks"),
    ],
    icon,
    attributes,
    edit: Edit,
    save: () => null,
    example: {
        attributes: {
            cover: `${EssentialBlocksLocalize?.image_url}/block-preview/post-grid.jpeg`,
        },
    },
});
