/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { AdvNav } from "./icon";
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";
import metadata from "../block.json";
import "./style.scss";


const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	keywords: [
		__("Menu", "essential-blocks"),
		__("Navigation", "essential-blocks"),
		__("EB Navigation", "essential-blocks"),
		__("EB Advanced Navigation", "essential-blocks"),
		__("Advanced Navigation Block", "essential-blocks"),
		__("Advanced Navigation", "essential-blocks"),
	],
	icon: AdvNav,
	attributes,
	edit: Edit,
	save: Save,
	example: {},
});
