import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";
import Edit from "./edit";
import save from "./save";
// import { HeadingIcon } from "../../../util/icons";
import { HeadingIcon } from "./icon";
import attributes from "./attributes";
import deprecated from "./deprecated";
import Example from "./example";
import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBControls;

const { name, category } = metadata;

ebConditionalRegisterBlockType(metadata, {
	keywords: [
		__("heading", "essential-blocks"),
		__("Advanced Heading", "essential-blocks"),
		__("heading block", "essential-blocks"),
		__("heading box", "essential-blocks"),
	],
	icon: HeadingIcon,
	attributes,
	edit: Edit,
	save,
	example: Example,
	deprecated
});