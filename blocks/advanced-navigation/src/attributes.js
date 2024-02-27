import * as typoPrefixs from "./constants/typographyPrefixConstants";

import { prefixWrapBg, prefixActNavBg, prefixContentBg, prefixTtlWrpBg } from "./constants/backgroundsConstants";

import {
    prefixWrapBdShadow,
    prefixNavBdShadow,
    prefixActNavBdShadow,
    prefixContentBdShadow,
    prefixDropdownItemBdShadow,
    prefixNavDropdownBdShadow,
    prefixHamburgerItemBdShadow,
} from "./constants/borderShadowConstants";

import {
    prefixWrapperMargin,
    prefixWrapperPadding,
    prefixNavPadding,
    prefixNavMargin,
    prefixNavDropdownPadding,
    prefixNavDropdownMargin,
    prefixDropdownItemPadding,
    prefixTtlWrpMargin,
    prefixTtlWrpPadding,
    prefixNavHamburgerPadding,
    prefixHamburgerItemPadding,
    prefixHamburgerBtnPadding,
} from "./constants/dimensionsConstants";

import {
    prefixTitleMinWidth,
    prefixIconSize,
    prefixIconGap,
    prefixCaretSize,
    prefixDropdownWidth,
    prefixHamburerBtnSize,
} from "./constants/rangeNames";

const {
    generateDimensionsAttributes,
    generateTypographyAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateResponsiveRangeAttributes,
} = EBControls;

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

    //
    layout: {
        type: "string",
        default: "is-horizontal",
    },

    preset: {
        type: "string",
        default: "preset-1",
    },
    verticalPreset: {
        type: "string",
        default: "vertical-preset-1",
    },

    navAlign: {
        type: "string",
        default: "items-justified-left",
    },

    dropdownOpenOnClick: {
        type: "boolean",
        default: false,
    },
    showDropdownIcon: {
        type: "boolean",
        default: true,
    },

    navBtnType: {
        type: "boolean",
        default: true,
    },

    //
    navTextColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    hvNavTextColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    actNavTextColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    actHvNavTextColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    navBgColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    hvNavBgColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    actNavBgColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    actHvNavBgColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    iconColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },

    hvIconColor: {
        type: "string",
    },

    actIconColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },

    actHvIconColor: {
        type: "string",
    },
    colorTransition: {
        type: "number",
    },
    actColorTransition: {
        type: "number",
    },

    navDropdownTextColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    hvNavDropdownTextColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    actNavDropdownTextColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    actHvNavDropdownTextColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },

    navDropdownBgColor: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },
    hvNavDropdownBgColor: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },
    actNavDropdownBgColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    actHvNavDropdownBgColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },

    // Dropdown Menu
    dropdownItemBgColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },

    hvDropdownItemBgColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    actDropdownItemBgColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    actHvDropdownItemBgColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    actColorTransition: {
        type: "number",
    },

    //
    navDividerColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    verticalNavDividerColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    navDropdownDividerColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },

    // Hamburger Menu
    navHamburgerBgColor: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },
    navHamburgerTextColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    hvNavHamburgerTextColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },

    hamburgerItemBgColor: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },
    hvHamburgerItemBgColor: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },
    actNavHamburgerTextColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    actHamburgerItemBgColor: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },
    actHvNavHamburgerTextColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    actHvHamburgerItemBgColor: {
        type: "string",
        default: "var(--eb-global-background-color)",
    },
    hamburgerCloseIconColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },

    navHamburgerBtnColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },

    //
    flexWrap: {
        type: "boolean",
        default: false,
    },
    hamburgerMenu: {
        type: "string",
        default: "mobile",
    },

    navVerticalAlign: {
        type: "string",
        default: "items-justified-left",
    },
    //
    showCaret: {
        type: "boolean",
        default: true,
    },
    caretColor: {
        type: "string",
        default: "var(--eb-global-secondary-color)",
    },
    hvCaretColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },

    hamburgerCloseIconAlign: {
        type: "string",
        default: "close-icon-right",
    },

    //
    // typography Control attributes
    ...generateTypographyAttributes(Object.values(typoPrefixs)),

    // Responsive Range Control Attributes
    ...generateResponsiveRangeAttributes(prefixTitleMinWidth, {
        // defaultRange: 46,
        // defaultUnit: "%", // if 'noUnits: true' is also passed here then 'defaultUnit' won't work, also it doesn't make sense to pass a defaultUnit when No units given
        // noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(prefixIconSize, {
        defaultRange: 18,
        noUnits: true,
        // defaultUnit: "%", // if 'noUnits: true' is also passed here then 'defaultUnit' won't work, also it doesn't make sense to pass a defaultUnit when No units given
    }),
    ...generateResponsiveRangeAttributes(prefixIconGap, {
        defaultRange: 10,
        noUnits: true,
        // defaultUnit: "%", // if 'noUnits: true' is also passed here then 'defaultUnit' won't work, also it doesn't make sense to pass a defaultUnit when No units given
    }),
    ...generateResponsiveRangeAttributes(prefixCaretSize, {
        defaultRange: 15,
        noUnits: true,
        // defaultUnit: "%", // if 'noUnits: true' is also passed here then 'defaultUnit' won't work, also it doesn't make sense to pass a defaultUnit when No units given
    }),
    ...generateResponsiveRangeAttributes(prefixDropdownWidth, {
        defaultRange: 200,
        noUnits: true,
        // defaultUnit: "%", // if 'noUnits: true' is also passed here then 'defaultUnit' won't work, also it doesn't make sense to pass a defaultUnit when No units given
    }),

    ...generateResponsiveRangeAttributes(prefixHamburerBtnSize, {
        defaultRange: 30,
        noUnits: true,
        // defaultUnit: "%", // if 'noUnits: true' is also passed here then 'defaultUnit' won't work, also it doesn't make sense to pass a defaultUnit when No units given
    }),

    //
    // Background Control Attributes
    ...generateBackgroundAttributes(prefixWrapBg, {
        defaultFillColor: "var(--eb-global-background-color)",
        // isBgDefaultGradient: true,
        // noOverlay: true,
        // noMainBgi: true,
        defaultBgGradient: "linear-gradient(45deg,#ffffff,#ffffff)",
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    }),

    ...generateBackgroundAttributes(prefixActNavBg, {
        defaultFillColor: "#7967ff",
        // isBgDefaultGradient: true,
        noOverlay: true,
        // noMainBgi: true,
        defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    }),
    ...generateBackgroundAttributes(prefixContentBg, {
        // defaultFillColor: "#888",
        // isBgDefaultGradient: true,
        noOverlay: true,
        // noMainBgi: true,
        defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    }),
    ...generateBackgroundAttributes(prefixTtlWrpBg, {
        // defaultFillColor: "#f5f5f5",
        // isBgDefaultGradient: true,
        noOverlay: true,
        // noMainBgi: true,
        defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    }),

    //
    // BorderShadow Control Attributes
    ...generateBorderShadowAttributes(prefixWrapBdShadow, {
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
        rdsDefaults: {
            top: 5,
            bottom: 5,
            right: 5,
            left: 5,
        },
        // noShadow: true,
        // noBorder: true,
    }),
    ...generateBorderShadowAttributes(prefixNavDropdownBdShadow, {
        rdsDefaults: {
            top: 5,
            bottom: 5,
            right: 5,
            left: 5,
        },
    }),
    ...generateBorderShadowAttributes(prefixDropdownItemBdShadow, {
        rdsDefaults: {
            top: 3,
            bottom: 3,
            right: 3,
            left: 3,
        },
    }),
    ...generateBorderShadowAttributes(prefixNavBdShadow, {
        rdsDefaults: {
            top: 3,
            bottom: 3,
            right: 3,
            left: 3,
        },
    }),
    ...generateBorderShadowAttributes(prefixActNavBdShadow),
    ...generateBorderShadowAttributes(prefixContentBdShadow, {
        bdrDefaults: {
            top: 1,
            bottom: 1,
            right: 1,
            left: 1,
        },
        defaultBdrColor: "var(--eb-global-background-color)",
        defaultBdrStyle: "solid",
    }),
    ...generateBorderShadowAttributes(prefixHamburgerItemBdShadow),

    //
    // dimensions Control related Attributes
    ...generateDimensionsAttributes(prefixWrapperMargin, {
        // top: 20,
        // bottom: 20,
        // isLinked: false,
    }),
    ...generateDimensionsAttributes(prefixWrapperPadding),
    ...generateDimensionsAttributes(prefixNavPadding, {
        top: 20,
        bottom: 20,
        left: 10,
        right: 10,
        // isLinked: false,
    }),
    ...generateDimensionsAttributes(prefixNavMargin),
    ...generateDimensionsAttributes(prefixNavDropdownMargin),
    ...generateDimensionsAttributes(prefixDropdownItemPadding, {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(prefixNavDropdownPadding, {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(prefixTtlWrpMargin),
    ...generateDimensionsAttributes(prefixTtlWrpPadding),
    ...generateDimensionsAttributes(prefixNavHamburgerPadding, {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(prefixHamburgerItemPadding, {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
        isLinked: false,
    }),

    ...generateDimensionsAttributes(prefixHamburgerBtnPadding, {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
        isLinked: false,
    }),
};

export default attributes;
