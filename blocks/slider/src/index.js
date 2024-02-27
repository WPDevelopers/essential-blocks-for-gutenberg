import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";
import Icon from "./icon";
import Example from "./example";
import deprecated from "./deprecated";

import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	keywords: [
		__("slider", "essential-blocks"),
		__("carousel", "essential-blocks"),
		__("images", "essential-blocks"),
	],
	icon: Icon,
	example: Example,
	attributes,
	edit: Edit,
	save: Save,
	deprecated,
});
