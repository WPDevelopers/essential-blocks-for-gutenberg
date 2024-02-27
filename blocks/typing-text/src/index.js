/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import { TypingTextIcon } from "./icon";
import example from "./example";
import metadata from "../block.json";
import attributes from "./attributes";
import deprecated from "./deprecated";
import "./style.scss";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon: TypingTextIcon,
	keywords: [
		__("Typing Text", "essential-blocks"),
		__("animated Text", "essential-blocks"),
		__("eb typing", "essential-blocks"),
	],
	attributes,
	edit: Edit,
	save: Save,
	example,
	deprecated,
});
