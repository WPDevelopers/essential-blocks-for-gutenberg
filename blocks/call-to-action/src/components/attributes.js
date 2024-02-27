import { __ } from "@wordpress/i18n";
import {
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    TITLE_MARGIN,
    SUBTITLE_MARGIN,
    WRAPPER_BACK,
    WRAPPER_BORDER,
    BUTTON_BORDER,
    ICON_SIZE,
    BUTTON_PADDING,
    ICON_PADDING,
    DESC_PADDING,
} from "./constants";
import * as prefixObjs from "./typographyPrefixConstants";

// import {
// 	generateTypographyAttributes,
// 	generateResponsiveRangeAttributes,
// 	generateDimensionsAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// } from "../../../../util/helpers";

const {
    generateTypographyAttributes,
    generateResponsiveRangeAttributes,
    generateDimensionsAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
} = window.EBControls;

const attributes = {
    // the following 4 attributes is must required for responsive options and asset generation for frontend
    // responsive control attributes ⬇
    resOption: {
        type: "string",
        default: "Desktop",
    },
    // blockId attribute for making unique className and other uniqueness ⬇
    blockId: {
        type: "string",
    },
    blockRoot: {
        type: "string",
        default: "essential_block",
    },
    // blockMeta is for keeping all the styles ⬇
    blockMeta: {
        type: "object",
    },
    contentStyle: {
        type: "string",
        default: "basic",
    },
    contentAlign: {
        type: "string",
        default: "center",
    },
    showIcon: {
        type: "boolean",
        default: true,
    },
    icon: {
        type: "string",
        source: "attribute",
        selector: ".eb-cia-wrapper",
        attribute: "data-icon",
        default: "fas fa-glass-martini",
    },
    iconColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    sortableLists: {
        type: "array",
        default: [
            { label: __("Icon", "essential-blocks"), value: "icon" },
            { label: __("Subtitle", "essential-blocks"), value: "subtitle" },
            { label: __("Title", "essential-blocks"), value: "title" },
            {
                label: __("Description", "essential-blocks"),
                value: "description",
            },
        ],
    },
    title: {
        type: "string",
        selector: ".eb-cia-title",
        default: "Essential Blocks for Gutenberg",
    },
    titleTag: {
        type: "string",
        default: "h3",
    },
    titleColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    showSubtitle: {
        type: "boolean",
        default: false,
    },
    subtitle: {
        type: "string",
        selector: ".eb-cia-subtitle",
    },
    subtitleTag: {
        type: "string",
        default: "h3",
    },
    subtitleColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    description: {
        type: "string",
        selector: ".eb-cia-description",
        default:
            "Add a strong one liner supporting the heading above and giving users a reason to click on the button below.",
    },
    descriptionColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    showButton: {
        type: "boolean",
        default: true,
    },
    buttonText: {
        type: "string",
        souce: "html",
        selector: ".eb-cia-button",
        default: "Button Text",
    },
    buttonURL: {
        type: "string",
    },
    linkNewTab: {
        type: "boolean",
        default: false,
    },
    buttonSize: {
        type: "string",
        default: "large",
    },
    buttonBackgroundColor: {
        type: "string",
        default: "var(--eb-global-button-background-color)",
    },
    buttonHoverBackgroundColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },
    buttonTextColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    buttonHoverTextColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    buttonPosition: {
        type: "string",
        default: "center",
    },
    btnHoverEffect: {
        type: "string",
    },
    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(prefixObjs)),
    // dimension
    ...generateDimensionsAttributes(WRAPPER_MARGIN, {
        top: 28,
        right: 0,
        bottom: 28,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(WRAPPER_PADDING),
    ...generateDimensionsAttributes(TITLE_MARGIN),
    ...generateDimensionsAttributes(SUBTITLE_MARGIN),
    ...generateDimensionsAttributes(BUTTON_PADDING),
    ...generateDimensionsAttributes(ICON_PADDING),
    ...generateDimensionsAttributes(DESC_PADDING),
    // background Attributes
    ...generateBackgroundAttributes(WRAPPER_BACK, {
        defaultFillColor: "var(--eb-global-background-color)",
    }),
    // border shadow controller
    ...generateBorderShadowAttributes(WRAPPER_BORDER),
    ...generateBorderShadowAttributes(BUTTON_BORDER),
    // range controller
    ...generateResponsiveRangeAttributes(ICON_SIZE),
};

export default attributes;
