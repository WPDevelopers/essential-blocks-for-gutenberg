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
		__("Video", "essential-blocks"),
		__("Advanced Video", "essential-blocks"),
		__("Video block", "essential-blocks"),
		__("Advanced", "essential-blocks"),
	],
	icon: AdvancedImageIcon,
	attributes,
	edit: Edit,
	save,
    deprecated,
	example: Example,
});
