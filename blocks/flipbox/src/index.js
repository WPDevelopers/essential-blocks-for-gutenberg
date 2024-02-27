/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/*
 * Internal dependencies
 */
import { FlipboxIcon } from "./icon";
import Edit from "./edit";
import Save from "./save";
import example from "./example";
import attributes from "./attributes";
import "./style.scss";
import metadata from "../block.json";
import deprecated from "./deprecated";

const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon: FlipboxIcon,
	category: "essential-blocks",
	attributes,
	keywords: [
		__("eb flipbox", "essential-blocks"),
		__("essential", "essential-blocks"),
		__("box", "essential-blocks"),
	],
	edit: Edit,
	save: Save,
	example: example,
	deprecated,
});
