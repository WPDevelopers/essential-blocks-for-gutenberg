/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { SocialIcon } from "./icon";
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";
import "./style.scss";

import example from "./example";
import deprecated from "./deprecated";
import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon: SocialIcon,
	attributes,
	keywords: [
		__("social", "essential-blocks"),
		__("icons", "essential-blocks"),
		__("eb essential", "essential-blocks"),
	],
	edit: Edit,
	save: Save,
	example,
	deprecated,
});
