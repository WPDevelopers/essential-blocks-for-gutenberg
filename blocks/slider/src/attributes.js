import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    TITLE_MARGIN,
    SUBTITLE_MARGIN,
    BUTTON_MARGIN,
    BUTTON_PADDING,
    BUTTON_BORDER_SHADOW,
    BUTTON2_MARGIN,
    BUTTON2_PADDING,
    BUTTON2_BORDER_SHADOW,
    SLIDE_TO_SHOW,
    CUSTOM_HEIGHT,
    DOTS_GAP,
    ARROW_POSITION,
    DOTS_POSITION,
    ARROW_SIZE,
    DOTS_SIZE,
    SLIDES_GAP,
} from "./constants/constants";
import * as TYPOGRAPHY from "./constants/typography-constant";

// import {
// 	generateDimensionsAttributes,
// 	generateTypographyAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// 	generateResponsiveRangeAttributes,
// } from "../../../util/helpers";

const {
    generateDimensionsAttributes,
    generateTypographyAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateResponsiveRangeAttributes,
} = window.EBControls;

const attributes = {
    resOption: {
        type: "string",
        default: "Desktop",
    },

    // blockId attribute for making unique className and other uniqueness
    blockId: {
        type: "string",
    },
    blockRoot: {
        type: "string",
        default: "essential_block",
    },
    blockMeta: {
        type: "object",
    },
    sliderType: {
        type: "string",
        default: "image",
    },
    sliderContentType: {
        type: "string",
        default: "content-1",
    },
    images: {
        type: "array",
        default: [],
    },
    arrows: {
        type: "boolean",
        default: true,
    },
    adaptiveHeight: {
        type: "boolean",
        default: false,
    },
    autoplay: {
        type: "bolean",
        default: true,
    },
    autoplaySpeed: {
        type: "number",
        default: 3000,
    },
    dots: {
        type: "boolean",
        default: true,
    },
    fade: {
        type: "boolean",
        default: false,
    },
    infinite: {
        type: "boolean",
        default: true,
    },
    vertical: {
        type: "boolean",
        default: false,
    },
    pauseOnHover: {
        type: "boolean",
        default: true,
    },
    isCustomHeight: {
        type: "boolean",
        default: true,
    },
    slidesToShow: {
        type: "number",
        default: 1,
    },
    speed: {
        type: "number",
        default: 500,
    },
    initialSlide: {
        type: "number",
        default: 0,
    },
    titleColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    subtitleColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    buttonColorType: {
        type: "string",
        default: "normal",
    },
    buttonColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    buttonHoverColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    buttonBGColor: {
        type: "string",
        default: "var(--eb-global-button-background-color)",
    },
    buttonHoverBGColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },

    secondButtonColorType: {
        type: "string",
        default: "normal",
    },
    secondButtonColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    secondButtonHoverColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    secondButtonBGColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },
    secondButtonHoverBGColor: {
        type: "string",
        default: "var(--eb-global-button-background-color)",
    },
    overlayColor: {
        type: "string",
        default: "rgb(234 233 235 / 75%)",
    },
    arrowColorType: {
        type: "string",
        default: "normal",
    },
    arrowColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    arrowHoverColor: {
        type: "string",
        default: "var(--eb-global-tertiary-color)",
    },
    dotsColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    dotsActiveColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    textAlign: {
        type: "string",
        default: "left",
    },
    verticalAlign: {
        type: "string",
        default: "center",
    },
    isRTLEnable: {
        type: "boolean",
        default: false,
    },

    arrowPrevIcon: {
        type: "string",
        default: "fas fa-arrow-alt-circle-left",
    },
    arrowNextIcon: {
        type: "string",
        default: "fas fa-arrow-alt-circle-right",
    },
    titleTag: {
        type: "string",
        default: "h2",
    },
    contentTag: {
        type: "string",
        default: "p",
    },

    // typography attributes ⬇
    ...generateTypographyAttributes(Object.values(TYPOGRAPHY)),

    // margin padding attributes ⬇
    ...generateDimensionsAttributes(WRAPPER_MARGIN),
    ...generateDimensionsAttributes(WRAPPER_PADDING, {
        top: 0,
        bottom: 30,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(TITLE_MARGIN, {
        top: 0,
        bottom: 20,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(SUBTITLE_MARGIN, {
        top: 0,
        bottom: 20,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(BUTTON_MARGIN, {
        top: 0,
        bottom: 20,
        right: 0,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(BUTTON_PADDING, {
        top: 10,
        bottom: 10,
        right: 30,
        left: 30,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(BUTTON2_MARGIN, {
        top: 0,
        bottom: 20,
        right: 10,
        left: 0,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(BUTTON2_PADDING, {
        top: 10,
        bottom: 10,
        right: 30,
        left: 30,
        isLinked: false,
    }),

    // border shadow attributes for Wrapper ⬇
    ...generateBorderShadowAttributes(WRAPPER_BORDER_SHADOW, {
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
        // noShadow: true,
        // noBorder: true,
    }),
    // border shadow attributes for Button ⬇
    ...generateBorderShadowAttributes(BUTTON_BORDER_SHADOW, {
        bdrDefaults: {
            top: 1,
            bottom: 1,
            right: 1,
            left: 1,
        },
        // noShadow: true,
        // noBorder: true,
    }),
    ...generateBorderShadowAttributes(BUTTON2_BORDER_SHADOW, {
        bdrDefaults: {
            top: 1,
            bottom: 1,
            right: 1,
            left: 1,
        },
        // noShadow: true,
        // noBorder: true,
    }),

    // background attributes for Wrapper ⬇
    ...generateBackgroundAttributes(WRAPPER_BG, {
        defaultBgGradient: "linear-gradient(45deg,#ffffff,#ffffff)",
        noOverlay: true,
    }),

    // range controller Slide to Show
    ...generateResponsiveRangeAttributes(SLIDE_TO_SHOW, {
        defaultRange: 1,
    }),

    // range controller Slider Height
    ...generateResponsiveRangeAttributes(CUSTOM_HEIGHT, {
        defaultRange: 400,
    }),

    // range controller Dots Gap
    ...generateResponsiveRangeAttributes(DOTS_GAP, {
        defaultRange: 10,
    }),

    // range controller Arrow Position
    ...generateResponsiveRangeAttributes(ARROW_POSITION, {
        defaultRange: -25,
    }),

    // range controller Dots Position
    ...generateResponsiveRangeAttributes(DOTS_POSITION, {
        defaultRange: -25,
    }),

    // range controller Arrow Position
    ...generateResponsiveRangeAttributes(ARROW_SIZE, {
        defaultRange: 20,
    }),

    // range controller Dots Position
    ...generateResponsiveRangeAttributes(DOTS_SIZE, {
        defaultRange: 10,
    }),

    // range controller Slides Gap
    ...generateResponsiveRangeAttributes(SLIDES_GAP, {
        defaultRange: 5,
    }),
};

export default attributes;
