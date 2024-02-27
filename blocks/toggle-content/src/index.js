/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { ToggleContentIcon } from "./icon";
import Edit from "./edit";
import Save from "./save";
import deprecated from "./deprecated";
import example from "./example";
import metadata from "../block.json";
import attributes from "./attributes";
import "./style.scss";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon: ToggleContentIcon,
	attributes,
	edit: Edit,
	save: Save,
	keywords: [
		__("Toggle", "essential-blocks"),
		__("eb Toggle Content", "essential-blocks"),
	],
	example,
	deprecated,
});
