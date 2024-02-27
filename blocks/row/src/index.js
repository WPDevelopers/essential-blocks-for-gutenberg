/**
 * WordPress dependeincies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import { RowIcon } from "./icon";

import metadata from "../block.json";
import "./style.scss";
import attributes from "./attributes";
import deprecated from "./deprecated";
import example from "./example";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon: RowIcon,
	attributes,
	keywords: [__("EB row", "essential-blocks"), __("row", "essential-blocks")],
	edit: Edit,
	save: Save,
	deprecated,
	example: example,
});
