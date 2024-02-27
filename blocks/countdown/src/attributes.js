import * as typoPrefixs from "./constants/typographyPrefixConstants";

import {
    cdBoxsPaddingConst,
    cdWrapMarginConst,
    cdWrapPaddingConst,
    cdDigitsPaddingConst,
    cdLabelsPaddingConst,
} from "./constants/dimensionsConstants";

import {
    cdBoxsBgConst,
    cdDayBoxBgConst,
    cdHourBoxBgConst,
    cdMinuteBoxBgConst,
    cdSecondBoxBgConst,
    WrpBgConst,
} from "./constants/backgroundsConstants";

import { cdBoxsBdShadowConst, WrpBdShadowConst } from "./constants/borderShadowConstants";

import { wrapperWidth, boxsSpaceConst, separatorPosTop, separatorPosRight } from "./constants/rangeNames";

// import {
// 	generateDimensionsAttributes,
// 	generateTypographyAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// 	generateResponsiveRangeAttributes,
// } from "../../../util/helpers";

//
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

    //
    preset: {
        type: "string",
        default: "default",
    },

    //
    flexDirection: {
        type: "string",
        default: "row",
    },

    //
    contentsAlign: {
        type: "string",
        default: "center",
    },

    //
    contentsJustify: {
        type: "string",
        default: "center",
    },

    //
    contentsDirection: {
        type: "string",
        default: "column",
    },

    //
    showSeparator: {
        type: "boolean",
        default: false,
    },

    //
    separatorType: {
        type: "string",
        default: ":",
    },
    separatorColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    //  deadline Date timestamp
    endTimeStamp: {
        type: "number",
    },
    showDays: {
        type: "boolean",
        default: true,
    },
    showHours: {
        type: "boolean",
        default: true,
    },
    showMinutes: {
        type: "boolean",
        default: true,
    },
    showSeconds: {
        type: "boolean",
        default: true,
    },
    daysLabel: {
        type: "string",
        default: "Days",
    },
    hoursLabel: {
        type: "string",
        default: "Hours",
    },
    minutesLabel: {
        type: "string",
        default: "Minutes",
    },
    secondsLabel: {
        type: "string",
        default: "Seconds",
    },
    digitsColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    dayDgColor: {
        type: "string",
        // default: "var(--eb-global-heading-color)",
    },
    hourDgColor: {
        type: "string",
        // default: "var(--eb-global-heading-color)",
    },
    minuteDgColor: {
        type: "string",
        // default: "var(--eb-global-heading-color)",
    },
    secondDgColor: {
        type: "string",
        // default: "var(--eb-global-heading-color)",
    },
    labelsColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    dayLbColor: {
        type: "string",
    },
    hourLbColor: {
        type: "string",
    },
    minuteLbColor: {
        type: "string",
    },
    secondLbColor: {
        type: "string",
    },
    dayBdrColor: {
        type: "string",
    },
    hourBdrColor: {
        type: "string",
    },
    minuteBdrColor: {
        type: "string",
    },
    secondBdrColor: {
        type: "string",
    },
    isEvergreenTimer: {
        type: "boolean",
        default: false,
    },
    evergreenTimerHours: {
        type: "string",
        default: "11",
    },
    evergreenTimerMinutes: {
        type: "string",
        default: "59",
    },
    recurringCountdown: {
        type: "boolean",
        default: false,
    },
    restartTime: {
        type: "string",
        default: "0",
    },
    recurringCountdownEnd: {
        type: "number",
    },

    // typography attributes
    ...generateTypographyAttributes(Object.values(typoPrefixs)),

    // Responsive Range Controller attributes
    ...generateResponsiveRangeAttributes(wrapperWidth, {
        defaultRange: 600,
    }),
    ...generateResponsiveRangeAttributes(boxsSpaceConst, {
        defaultRange: 30,
    }),
    ...generateResponsiveRangeAttributes(separatorPosTop, {
        defaultRange: 46,
        defaultUnit: "%", // if 'noUnits: true' is also passed here then 'defaultUnit' won't work, also it doesn't make sense to pass a defaultUnit when No units given
    }),
    ...generateResponsiveRangeAttributes(separatorPosRight, {
        defaultRange: 18,
        defaultUnit: "%", // if 'noUnits: true' is also passed here then 'defaultUnit' won't work, also it doesn't make sense to pass a defaultUnit when No units given
    }),

    // boxs background attributes ⬇
    ...generateBackgroundAttributes(WrpBgConst, {
        // defaultFillColor: "var(--eb-global-primary-color)",
        defaultBgGradient: "var(--eb-global-background-color)",
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    }),
    ...generateBackgroundAttributes(cdBoxsBgConst, {
        defaultFillColor: "var(--eb-global-background-color)",
        // isBgDefaultGradient: true,
        noOverlay: true,
        noMainBgi: true,
        // defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    }),
    ...generateBackgroundAttributes(cdDayBoxBgConst, {
        noTransition: true,
        noOverlay: true,
        noMainBgi: true
    }),
    ...generateBackgroundAttributes(cdHourBoxBgConst, {
        noTransition: true,
        noOverlay: true,
        noMainBgi: true
    }),
    ...generateBackgroundAttributes(cdMinuteBoxBgConst, {
        noTransition: true,
        noOverlay: true,
        noMainBgi: true
    }),
    ...generateBackgroundAttributes(cdSecondBoxBgConst, {
        noTransition: true,
        noOverlay: true,
        noMainBgi: true
    }),

    // boxs BorderShadow attributes ⬇
    ...generateBorderShadowAttributes(WrpBdShadowConst, {
        // noShadow: true,
        // noBorder: true,
    }),
    ...generateBorderShadowAttributes(cdBoxsBdShadowConst, {
        // bdrDefaults: {
        // 	top: 0,
        // 	bottom: 0,
        // 	right: 0,
        // 	left: 0,
        // },
        rdsDefaults: {
            top: 10,
            bottom: 10,
            right: 10,
            left: 10,
        },
        // noShadow: true,
        // noBorder: true,
    }),

    // dimensions Control related Attributes
    ...generateDimensionsAttributes(cdBoxsPaddingConst, {
        top: 20,
        bottom: 20,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(cdWrapMarginConst),
    ...generateDimensionsAttributes(cdWrapPaddingConst),
    ...generateDimensionsAttributes(cdDigitsPaddingConst),
    ...generateDimensionsAttributes(cdLabelsPaddingConst),
};

export default attributes;
