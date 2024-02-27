/**
 * WordPress dependeincies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { ProgressbarIcon } from "./icon";
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";
import example from "./example";
import deprecated from "./deprecated";
import metadata from "../block.json";
import "./style.scss";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon: ProgressbarIcon,
	attributes,
	keywords: [
		__("progress", "essential-blocks"),
		__("bar", "essential-blocks"),
		__("eb essential", "essential-blocks"),
	],
	edit: Edit,
	save: Save,
	example,
	deprecated,
});
