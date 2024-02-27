/**
 * WordPress dependeincies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import { NoticeIcon } from "./icon";

import metadata from "../block.json";
import attributes from "./attributes";
import example from "./example";
import deprecated from "./deprecated";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon: NoticeIcon,
	attributes,
	keywords: [
		__("EB notice", "essential-blocks"),
		__("notice", "essential-blocks"),
		__("alert ", "essential-blocks"),
	],
	edit: Edit,
	save: Save,
	example: example,
	deprecated,
});
