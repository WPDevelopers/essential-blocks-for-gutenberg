import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import { HeadingIcon } from "./icon";
import attributes from "./attributes";
import Example from "./example";
import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
    keywords: [
        __("Price", "essential-blocks"),
        __("eb price", "essential-blocks"),
    ],
    icon: HeadingIcon,
    attributes,
    edit: Edit,
    save,
    example: Example,
});
