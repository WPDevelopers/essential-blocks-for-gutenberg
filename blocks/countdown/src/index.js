/**
 * WordPress depencencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { CountdownIcon } from "./icon";
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";
import "./style.scss";
import example from "./example";
import deprecated from "./deprecated";
import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon: CountdownIcon,
	attributes,
	keywords: [
		__("countdown", "essential-blocks"),
		__("eb counter", "essential-blocks"),
		__("eb countdown", "essential-blocks"),
	],
	edit: Edit,
	save: Save,
	example: example,
	deprecated,
});
