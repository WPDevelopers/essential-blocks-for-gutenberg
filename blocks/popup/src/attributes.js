import * as typoPrefixs from "./constants/typographyPrefixConstants";

import {
    POPUP_HEIGHT,
    POPUP_WIDTH,
    BUTTON_BACKGROUND,
    BUTTON_BORDER,
    BUTTON_PADDING,
    POPUP_PADDING,
    POPUP_MARGIN,
    POPUP_BACKGROUND,
    POPUP_BORDER,
    CLOSE_BORDER,
    CLOSE_PADDING,
    CONTAINER_PADDING,
    CLOSE_BTN_TOP,
    CLOSE_BTN_RIGHT,
    CLOSE_BTN_LEFT,
    wrapMarginConst,
    wrapPaddingConst,
} from "./constants";

const {
    generateDimensionsAttributes,
    generateTypographyAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateResponsiveRangeAttributes,
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
    trigger: {
        type: "string",
        default: "btn_click",
    },
    btnType: {
        type: "string",
        default: "button",
    },
    btnText: {
        type: "string",
        default: "Open Popup",
    },
    btnIcon: {
        type: "string",
    },
    iconPosition: {
        type: "string",
        default: "left",
    },
    btnAlignment: {
        type: "string",
        default: "center",
    },
    triggerIcon: {
        type: "string",
        default: "fas fa-bullhorn",
    },
    displayCloseIcon: {
        type: "boolean",
        default: true,
    },
    escToExit: {
        type: "boolean",
        default: true,
    },
    clickToExit: {
        type: "boolean",
        default: true,
    },
    autoExit: {
        type: "boolean",
        default: false,
    },
    autoExitTime: {
        type: "string",
        default: "3",
    },
    autoHeight: {
        type: "boolean",
        default: true,
    },
    position: {
        type: "string",
        default: "middle_center",
    },
    pageLoadDelay: {
        type: "string",
        default: "1",
    },
    eleIdentifier: {
        type: "string",
        default: "#open-popup",
    },
    btnTextColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    btnHoverTextColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    popupFullWidth: {
        type: "boolean",
        default: false,
    },
    useCloseIcon: {
        type: "boolean",
        default: false,
    },
    closeBtnText: {
        type: "string",
        default: "X",
    },
    closeBtnColor: {
        type: "string",
        default: "var(--eb-global-button-background-color)",
    },
    closeBtnHoverColor: {
        type: "string",
    },
    closeBtnBackColor: {
        type: "string",
    },
    closeBtnBackHoverColor: {
        type: "string",
    },
    overlayColor: {
        type: "string",
    },
    useCookies: {
        type: "boolean",
        default: true,
    },
    cookieExpireTime: {
        type: "string",
        default: "",
    },
    ...generateResponsiveRangeAttributes(POPUP_HEIGHT),
    ...generateResponsiveRangeAttributes(POPUP_WIDTH, { defaultRange: 650 }),
    ...generateResponsiveRangeAttributes(CLOSE_BTN_LEFT, {
        defaultRange: 0,
    }),
    ...generateResponsiveRangeAttributes(CLOSE_BTN_RIGHT, {
        defaultRange: 10,
    }),
    ...generateResponsiveRangeAttributes(CLOSE_BTN_TOP, {
        defaultRange: 10,
    }),
    // background Attributes
    ...generateBackgroundAttributes(BUTTON_BACKGROUND, {
        defaultFillColor: "var(--eb-global-button-background-color)",
        defaultHovFillColor: "var(--eb-global-tertiary-color)",
        noOverlay: true,
        noMainBgi: true,
    }),
    // border shadow
    ...generateBorderShadowAttributes(BUTTON_BORDER),
    // dimension control
    ...generateDimensionsAttributes(BUTTON_PADDING, {
        top: 15,
        right: 30,
        bottom: 15,
        left: 30,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(CLOSE_PADDING),
    ...generateDimensionsAttributes(CONTAINER_PADDING),
    ...generateDimensionsAttributes(wrapMarginConst),
    ...generateDimensionsAttributes(wrapPaddingConst),
    // typography attributes
    ...generateTypographyAttributes(Object.values(typoPrefixs)),

    ...generateDimensionsAttributes(POPUP_MARGIN),
    ...generateDimensionsAttributes(POPUP_PADDING),
    ...generateBackgroundAttributes(POPUP_BACKGROUND, {
        defaultFillColor: "var(--eb-global-background-color)",
    }),
    ...generateBorderShadowAttributes(POPUP_BORDER),
    ...generateBorderShadowAttributes(CLOSE_BORDER, {
        noShadow: true,
    }),
};

export default attributes;
