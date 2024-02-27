/**
 * WordPress dependeincies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import { CounterIcon } from "./icon";
import metadata from "../block.json";
import attributes from "./attributes";
import deprecated from "./deprecated";
import example from "./example";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon: CounterIcon,
	keywords: [
		__("EB number counter", "essential-blocks"),
		__("counter", "essential-blocks"),
		__("counter up", "essential-blocks"),
	],
	attributes,
	edit: Edit,
	save,
	example: example,
	deprecated,
});
