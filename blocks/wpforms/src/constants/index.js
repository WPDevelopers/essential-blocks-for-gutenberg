//
import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const FORM_FULL_LISTS = EssentialBlocksLocalize.wpforms_lists && JSON.parse(EssentialBlocksLocalize.wpforms_lists);

export const FORM_LISTS =
	FORM_FULL_LISTS &&
	FORM_FULL_LISTS.map((obj, i) => {
		return {
			label: obj.label,
			value: obj.value,
		};
	});

export const SUBMIT_BUTTON_POSITION = [
	{ label: <Dashicon icon={"editor-alignleft"} />, value: "left" },
	{ label: <Dashicon icon={"editor-aligncenter"} />, value: "center" },
	{ label: <Dashicon icon={"editor-alignright"} />, value: "right" },
];

export const FORM_ALIGNMENT = [
	{ label: <Dashicon icon={"remove"} />, value: "none" },
	{ label: <Dashicon icon={"editor-alignleft"} />, value: "left" },
	{ label: <Dashicon icon={"editor-aligncenter"} />, value: "center" },
	{ label: <Dashicon icon={"editor-alignright"} />, value: "right" },
];

export const BTN_WIDTH_STYLE = [
	{ label: __("Full Width", "essential-blocks"), value: "full_width" },
	{ label: __("Custom", "essential-blocks"), value: "custom" },
];

export const INPUT_TEXTAREA_INDENT = "inpTxtIndent";
export const INPUT_WIDTH = "inpWidth";
export const INPUT_HEIGHT = "inpHeight";
export const TEXTAREA_WIDTH = "txtWidth";
export const TEXTAREA_HEIGHT = "txtHeight";
export const INPUT_TEXTAREA_PADDING = "inpTxtPadding";
export const INPUT_TEXTAREA_SPACING = "inpTxtSpacing";
export const LABEL_SPACING = "lblSpacing";
export const SUBMIT_BUTTON_WIDTH = "btnWidth";
export const SUBMIT_BUTTON_PADDING = "btnPadding";
export const SUBMIT_BUTTON_MARGIN = "btnMargin";
export const SUBMIT_BUTTON_BORDER = "btnBorder";
export const INPUT_TEXTAREA_BORDER = "inpTxtBorder";
export const SUCCESS_BORDER = "successBrd";
export const ERROR_PADDING = "errorPadding";
export const ERROR_MARGIN = "errorMargin";
export const CHECKBOX_SIZE = "checkSize";
export const CHECKBOX_BORDER = "checkBdr";
export const CHECKBOX_RADIUS = "checkRad";
export const RADIO_RADIUS = "radioRad";
export const FORM_MAX_WIDTH = "formWidth";
export const FORM_BORDER = "formBorder";
export const FORM_MARGIN = "formMargin";
export const FORM_PADDING = "formPadding";
