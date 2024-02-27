import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import Save from "./save";
import icon from "./icon";
import attributes from "./attributes";
import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
    keywords: [
        __("Shape Divider", "essential-blocks"),
        __("Shape", "essential-blocks"),
        __("Divider", "essential-blocks"),
        __("EB shape divider", "essential-blocks"),
    ],
    icon,
    attributes,
    edit: Edit,
    save: Save,
    example: {},
});
