import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";
import icon from "./icon";
import Example from "./example";
import deprecated from "./deprecated";
import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon,
	attributes,
	edit: Edit,
	save,
	keywords: [
		__("Parallax", "essential-blocks"),
		__("Slider", "essential-blocks"),
		__("eb Parallax Slider", "essential-blocks"),
	],
	example: Example,
	deprecated,
});
