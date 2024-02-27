/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import example from "./example";
import metadata from "../block.json";
import attributes from "./attributes";
import PopupIcon from "./icon";
import deprecated from "./deprecated";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon: PopupIcon,
	attributes,
	keywords: [
		__("popup", "essential-blocks"),
		__("modal", "essential-blocks"),
		__("eb essential", "essential-blocks"),
	],
	edit: Edit,
	save: Save,
	example: example,
	deprecated,
});
