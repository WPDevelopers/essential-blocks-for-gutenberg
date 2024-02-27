import { __ } from "@wordpress/i18n";

import { ImageComparisonIcon } from "./icon";
import Edit from "./edit";
import save from "./save";
import example from "./example";
import attributes from "./attributes";
import deprecated from "./deprecated";
import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	keywords: [
		__("image compare", "essential-blocks"),
		__("comparison", "essential-blocks"),
		__("compare", "essential-blocks"),
	],
	attributes,
	icon: ImageComparisonIcon,
	edit: Edit,
	save,
	example,
	deprecated,
});
