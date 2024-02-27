/**
 * WordPress dependeincies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import Save from "./components/save";
import Edit from "./components/edit";
import deprecated from "./components/deprecated";
import example from "./example";
import { ButtonIcon } from "./icon";
// import { ButtonIcon } from "../../../util/icons";
import metadata from "../block.json";
import attributes from "./components/attributes";
const { ebConditionalRegisterBlockType } = EBControls;

/**
 * Import styles
 */
import "./style.scss";

ebConditionalRegisterBlockType(metadata, {
	icon: ButtonIcon,
	attributes,
	keywords: [
		__("button", "essential-blocks"),
		__("eb essential", "essential-blocks"),
		__("link", "essential-blocks"),
	],
	edit: Edit,
	save: Save,
	example: example,
	deprecated,
});
