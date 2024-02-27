/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import Save from "./save";
import Edit from "./edit";
import Attributes from "./attributes";
import example from "./example";
import { ImageGalleryIcon } from "./icon";
import deprecated from "./deprecated";
import "./style.scss";
import metadata from "../block.json";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon: ImageGalleryIcon,
	attributes: Attributes,
	keywords: [
		__("images", "essential-blocks"),
		__("photos", "essential-blocks"),
		__("eb image gallery", "essential-blocks"),
	],
	edit: Edit,
	save: Save,
	example,
	deprecated,
});
