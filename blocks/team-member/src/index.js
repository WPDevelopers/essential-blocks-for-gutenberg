/**
 * WordPress depencencies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import { TeamMembersIcon } from "./icon";
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";
import example from "./example";
import deprecated from "./deprecated";
import metadata from "../block.json";

import "./style.scss";

const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
    icon: TeamMembersIcon,
    attributes,
    keywords: [
        __("team", "essential-blocks"),
        __("member", "essential-blocks"),
        __("eb essential", "essential-blocks"),
    ],
    edit: Edit,
    save: Save,
    example,
    deprecated,
});
