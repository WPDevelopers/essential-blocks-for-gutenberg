import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import deprecated from "./deprecated";
import { IconBlock } from "./icon";
import attributes from "./attributes";
import Example from "./example";
import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
    keywords: [
        __("Icon", "essential-blocks"),
        __("eb icon", "essential-blocks"),
    ],
    icon: IconBlock,
    attributes,
    edit: Edit,
    save,
    example: Example,
    deprecated
});
