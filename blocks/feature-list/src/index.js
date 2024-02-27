/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import example from "./example";
import attributes from "./attributes";
import deprecated from "./deprecated";
import "./style.scss";
import featureListIcon from "./icon";
import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBControls;


ebConditionalRegisterBlockType(metadata, {
	icon: featureListIcon,
	keywords: [
		__("Feature list", "essential-blocks"),
		__("Feature box", "essential-blocks"),
		__("eb feature", "essential-blocks"),
	],
	attributes,
	edit: Edit,
	save: Save,
	example,
	deprecated,
});
