import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import { WrapperIcon } from "./icon";
import attributes from "./attributes";
import deprecated from "./deprecated";
import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
    keywords: [
        __("wrapper", "essential-blocks"),
        __("eb essential", "essential-blocks"),
        __("container", "essential-blocks"),
    ],
    icon: WrapperIcon,
    attributes,
    edit: Edit,
    save,
    deprecated,
    example: {}
});
