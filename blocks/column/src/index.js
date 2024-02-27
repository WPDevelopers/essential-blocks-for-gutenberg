/**
 * WordPress dependeincies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import { ColumnIcon } from "./icon";
import metadata from "../block.json";
import attributes from "./attributes";
import deprecated from "./deprecated";

import example from "./example";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon: ColumnIcon,
	attributes,
	edit: Edit,
	save: Save,
	example: example,
	deprecated,
});
