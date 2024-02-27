import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import { AdvancedImageIcon } from "./icon";
import attributes from "./attributes";
import Example from "./example";
import deprecated from "./deprecated";
import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBControls;

const { name, category } = metadata;

ebConditionalRegisterBlockType(metadata, {
	keywords: [
		__("Image", "essential-blocks"),
		__("Image block", "essential-blocks"),
		__("Advanced Image", "essential-blocks"),
		__("Image block", "essential-blocks"),
		__("Single image", "essential-blocks"),
	],
	icon: AdvancedImageIcon,
	attributes,
	edit: Edit,
	save,
	example: Example,
	deprecated,
});
