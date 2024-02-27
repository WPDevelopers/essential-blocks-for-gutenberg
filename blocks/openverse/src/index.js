import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import { OpenverseIcon } from "./icon";
import attributes from "./attributes";
import Example from "./example";
import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBControls;

const { name, category } = metadata;

ebConditionalRegisterBlockType(metadata, {
    keywords: [
        __("Openverse", "essential-blocks"),
        __("Openverse block", "essential-blocks"),
        __("Openverse image", "essential-blocks"),
        __("EB Openverse block", "essential-blocks"),
        __("eb openverse block", "essential-blocks"),
        __("essential blocks", "essential-blocks"),
    ],
    icon: OpenverseIcon,
    attributes,
    edit: Edit,
    save,
    example: {
        attributes: {
            cover: `${EssentialBlocksLocalize?.image_url}/block-preview/openverse.jpeg`,
        },
    },
});
