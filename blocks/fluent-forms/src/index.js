/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import example from "./example";
import metadata from "../block.json";
import attributes from "./attributes";
import { FluentFormIcon } from "./icon";

const { name } = metadata;
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(
    { name, ...metadata },
    {
        icon: FluentFormIcon,
        attributes,
        keywords: [
            __("Fluent Form", "essential-blocks"),
            __("EB Fluent Form", "essential-blocks"),
            __("Form", "essential-blocks"),
        ],
        edit: Edit,
        save: () => null,
        example: {
            attributes: {
                cover: `${EssentialBlocksLocalize?.image_url}/block-preview/fluent-forms.jpeg`,
            },
        },
    }
);
