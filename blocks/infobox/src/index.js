/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import { InfoboxIcon } from "./icon";
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";
import deprecated from "./deprecated";
import metadata from "../block.json";
import "./style.scss";
import example from "./example";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon: InfoboxIcon,
	attributes,
	keywords: [
		__("EB infobox", "essential-blocks"),
		__("info box", "essential-blocks"),
		__("infobox block", "essential-blocks"),
	],
	edit: Edit,
	save: Save,
	example: example,
	deprecated,
});
