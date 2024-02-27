/**
 * WordPress dependeincies
 */
// const { __ } = wp.i18n;
// const { registerBlockType } = wp.blocks;

import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import Icon from "./icon";

import metadata from "../block.json";
import attributes from "./attributes";

const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon: Icon,
	attributes,
	edit: Edit,
	save: Save,
});
