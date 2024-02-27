import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const EFFECTS_LIST = [
	{ label: __("Apollo", "essential-blocks"), value: "apollo" },
	{ label: __("Bubba", "essential-blocks"), value: "bubba" },
	{ label: __("Chico", "essential-blocks"), value: "chico" },
	{ label: __("Dexter", "essential-blocks"), value: "dexter" },
	{ label: __("Duke", "essential-blocks"), value: "duke" },
	{ label: __("Goliath", "essential-blocks"), value: "goliath" },
	{ label: __("Jazz", "essential-blocks"), value: "jazz" },
	{ label: __("Julia", "essential-blocks"), value: "julia" },
	{ label: __("Layla", "essential-blocks"), value: "layla" },
	{ label: __("Lexi", "essential-blocks"), value: "lexi" },
	{ label: __("Lily", "essential-blocks"), value: "lily" },
	{ label: __("Marley", "essential-blocks"), value: "marley" },
	{ label: __("Milo", "essential-blocks"), value: "milo" },
	{ label: __("Ming", "essential-blocks"), value: "ming" },
	{ label: __("Moses", "essential-blocks"), value: "moses" },
	{ label: __("Oscar", "essential-blocks"), value: "oscar" },
	{ label: __("Ruby", "essential-blocks"), value: "ruby" },
	{ label: __("Roxy", "essential-blocks"), value: "roxy" },
	{ label: __("Romeo", "essential-blocks"), value: "romeo" },
	{ label: __("Sadie", "essential-blocks"), value: "sadie" },
	{ label: __("Selena", "essential-blocks"), value: "selena" },
	{ label: __("Sarah", "essential-blocks"), value: "sarah" },
];

export const WRAPPER_UNITS = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
];

export const IMAGE_HEIGHT = [
	{ label: "px", value: "px" },
	{ label: "vh", value: "vh" },
];

export const IMAGE_WIDTH = [
	{ label: "px", value: "px" },
	{ label: "vw", value: "vw" },
];

export const ALIGNMENT = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
];

// Responsive Range Controller
export const imageHeight = "imgHeight";
export const imageWidth = "imgWidth";

// responsive dimension controller
export const wrapperMargin = "wrpMargin";
export const wrapperPadding = "wrpPadding";

// border & shadow
export const wrapperBorderShadow = "wrpBrdShdw";
export const imageBorderShadow = "imgBrdShdw";
