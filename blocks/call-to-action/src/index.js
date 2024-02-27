/**
 WordPress dependeincies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
// import { CallToActionIcon } from "../../../util/icons";
import { CallToActionIcon } from "./icon";
import Edit from "./components/edit";
import Save from "./components/save";
import example from "./example";
import metadata from "../block.json";
import attributes from "./components/attributes";
import deprecated from "./components/deprecated";
const { ebConditionalRegisterBlockType } = EBControls;
import "./style.scss";

ebConditionalRegisterBlockType(metadata, {
	icon: CallToActionIcon,
	attributes,
	keywords: [
		__("call to action", "essential-blocks"),
		__("cta", "essential-blocks"),
		__("eb essential", "essential-blocks"),
	],
	edit: Edit,
	save: Save,
	example: example,
	deprecated,
});
