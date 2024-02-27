import { __ } from "@wordpress/i18n";

// Default colors
const DARK_GRAY = "#4a5059";
const LIGHT_GRAY = "#edf1f7";

export const DEFAULT_TITLE_COLOR = DARK_GRAY;
export const DEFAULT_TITLE_SIZE = "16";
export const DEFAULT_TITLE_BACKGROUND = LIGHT_GRAY;
export const DEFAULT_TITLE_ACTIVE_COLOR = "#ffffff";
export const DEFAULT_CONTENT_COLOR = DARK_GRAY;
export const DEFAULT_CONTENT_BACKGROUND = "transparent";
export const DEFAULT_CONTENT_BORDER_COLOR = DARK_GRAY;
export const DEFAULT_ICON_COLOR = DARK_GRAY;
export const MAX_HEIGHT = 2000;

export const ACCORDION_TYPES = [
	{ label: __("Accordion", "essential-blocks"), value: "accordion" },
	{ label: __("Toggle", "essential-blocks"), value: "toggle" },
];

export const ACCORDION_STYLES = [
	{ label: __("Material", "essential-blocks"), value: "material" },
	{ label: __("Gradient", "essential-blocks"), value: "gradient" },
	{ label: __("Dark", "essential-blocks"), value: "dark" },
	{ label: __("Royal", "essential-blocks"), value: "royal" },
	{ label: __("Custom", "essential-blocks"), value: "custom" },
];

export const BACKGROUND_TYPE = [
	{ label: __("Fill", "essential-blocks"), value: "fill" },
	{ label: __("Gradient", "essential-blocks"), value: "gradient" },
	{ label: __("Image", "essential-blocks"), value: "image" },
];

export const TITLE_BACKGROUND_TYPE = [
	{ label: __("Fill", "essential-blocks"), value: "fill" },
	{ label: __("Gradient", "essential-blocks"), value: "gradient" },
];

export const BACKGROUND_CLIP = [
	{ label: __("Border Box", "essential-blocks"), value: "border-box" },
	{ label: __("Padding Box", "essential-blocks"), value: "padding-box" },
	{ label: __("Content Box", "essential-blocks"), value: "content-box" },
];

export const BUTTON_STYLES = [
	{ label: __("Material", "essential-blocks"), value: "material" },
	{ label: __("Ghost", "essential-blocks"), value: "ghost" },
	{ label: __("Rounded", "essential-blocks"), value: "rounded" },
	{ label: __("Custom", "essential-blocks"), value: "custom" },
];

export const BACKGROUND_SIZE = [
	{ label: __("Auto", "essential-blocks"), value: "auto" },
	{ label: __("Cover", "essential-blocks"), value: "cover" },
	{ label: __("Container", "essential-blocks"), value: "container" },
];

export const BACKGROUND_REPEAT = [
	{ label: __("Initial", "essential-blocks"), value: "initial" },
	{ label: __("No Repeat", "essential-blocks"), value: "no-repeat" },
	{ label: __("Repeat", "essential-blocks"), value: "repeat" },
	{ label: __("Repeat X", "essential-blocks"), value: "repeat-x" },
	{ label: __("Repeat Y", "essential-blocks"), value: "repeat-y" },
	{ label: __("Space", "essential-blocks"), value: "space" },
	{ label: __("Round", "essential-blocks"), value: "round" },
];

export const BACKGROUND_ATTACHMENT = [
	{ label: __("Initial", "essential-blocks"), value: "initial" },
	{ label: __("Scroll", "essential-blocks"), value: "scroll" },
	{ label: __("Fixed", "essential-blocks"), value: "fixed" },
	{ label: __("Local", "essential-blocks"), value: "local" },
];

export const BORDER_STYLES = [
	{ label: __("Dashed", "essential-blocks"), value: "dashed" },
	{ label: __("Solid", "essential-blocks"), value: "solid" },
	{ label: __("Dotted", "essential-blocks"), value: "dotted" },
	{ label: __("Double", "essential-blocks"), value: "double" },
	{ label: __("Groove", "essential-blocks"), value: "groove" },
	{ label: __("Inset", "essential-blocks"), value: "inset" },
	{ label: __("Outset", "essential-blocks"), value: "outset" },
	{ label: __("Ridge", "essential-blocks"), value: "ridge" },
];

export const HEADERS = [
	{ label: __("H1", "essential-blocks"), value: "h1" },
	{ label: __("H2", "essential-blocks"), value: "h2" },
	{ label: __("H3", "essential-blocks"), value: "h3" },
	{ label: __("H4", "essential-blocks"), value: "h4" },
	{ label: __("H5", "essential-blocks"), value: "h5" },
	{ label: __("H6", "essential-blocks"), value: "h6" },
];

export const ICON_POSITIONS = [
	{ label: __("Left", "essential-blocks"), value: "left" },
	{ label: __("Right", "essential-blocks"), value: "right" },
];

export const TRANSITION_TYPES = [
	{ label: __("Liner", "essential-blocks"), value: "linear" },
	{ label: __("Ease", "essential-blocks"), value: "ease" },
	{ label: __("Ease In", "essential-blocks"), value: "ease-in" },
	{ label: __("Ease Out", "essential-blocks"), value: "ease-out" },
	{ label: __("Ease In Out", "essential-blocks"), value: "ease-in-out" },
];

export const TITLE_ALIGNMENT = [
	{ label: __("Left", "essential-blocks"), value: "left" },
	{ label: __("Center", "essential-blocks"), value: "center" },
	{ label: __("Right", "essential-blocks"), value: "right" },
];

export const CONTENT_ALIGN = [
	{ label: __("Left", "essential-blocks"), value: "left" },
	{ label: __("Center", "essential-blocks"), value: "center" },
	{ label: __("Right", "essential-blocks"), value: "right" },
];

export const COLOR_TYPES = [
	{ label: __("Fill", "essential-blocks"), value: "fill" },
	{ label: __("Gradient", "essential-blocks"), value: "gradient" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None", "essential-blocks"), value: "none" },
	{ label: __("Lowercase", "essential-blocks"), value: "lowercase" },
	{ label: __("Capitalize", "essential-blocks"), value: "capitalize" },
	{ label: __("Uppercase", "essential-blocks"), value: "uppercase" },
];

export const FONT_WEIGHTS = [
	{ label: __("Lighter", "essential-blocks"), value: "lighter" },
	{ label: __("Normal", "essential-blocks"), value: "normal" },
	{ label: __("Bold", "essential-blocks"), value: "bold" },
	{ label: __("Bolder", "essential-blocks"), value: "bolder" },
];

export const TEXT_DECORATION = [
	{ label: __("Initial", "essential-blocks"), value: "initial" },
	{ label: __("Overline", "essential-blocks"), value: "overline" },
	{ label: __("Line Through", "essential-blocks"), value: "line-through" },
	{ label: __("Underline", "essential-blocks"), value: "underline" },
	{
		label: __("Underline Oveline", "essential-blocks"),
		value: "underline overline",
	},
];

export const HEADING = [
	{ label: __("H1", "essential-blocks"), value: "h1" },
	{ label: __("H2", "essential-blocks"), value: "h2" },
	{ label: __("H3", "essential-blocks"), value: "h3" },
	{ label: __("H4", "essential-blocks"), value: "h4" },
	{ label: __("H5", "essential-blocks"), value: "h5" },
	{ label: __("H6", "essential-blocks"), value: "h6" },
	{ label: __("P", "essential-blocks"), value: "p" },
];
