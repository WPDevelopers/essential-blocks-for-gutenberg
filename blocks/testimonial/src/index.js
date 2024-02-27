import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit";
import Save from "./save";
import { TestimonialIcon } from "./icon";
import attributes from "./attributes";
import metadata from "../block.json";
import Example from "./example";
import Deprecated from "./deprecated";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon: TestimonialIcon,
	attributes,
	keywords: [
		__("testimonial", "essential-blocks"),
		__("about", "essential-blocks"),
		__("eb quote", "essential-blocks"),
	],
	edit: Edit,
	save: Save,
	example: Example,
	deprecated: Deprecated,
});