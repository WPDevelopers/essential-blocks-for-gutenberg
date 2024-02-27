import * as typoPrefixs from "./constants/typographyPrefixConstants";

import {
    tmbWrapMarginConst,
    tmbWrapPaddingConst,
    tmbDescsPaddingConst,
    tmbNamePaddingConst,
    tmbJobPaddingConst,
    iconsWrapPadding,
    iconsWrapMargin,
    imageMarginConst,
    imagePaddingConst,
    contentsPad,
    contentsMargin,
} from "./constants/dimensionsConstants";

import { WrpBgConst, imgTopBgPrefix, socialWrpBg } from "./constants/backgroundsConstants";

import { WrpBdShadowConst, prefixSocialBdShadow, prefixImgBd, ovlBdPrefix } from "./constants/borderShadowConstants";

import {
    wrapperWidth,
    imageWidth,
    imageHeight,
    rangeIconSize,
    rangeIconPadding,
    rangeIconDistance,
    rangeIconRowGap,
    imgTopBgHeight,
    cSepWPrefix,
    sSepWPrefix,
    cSepHPrefix,
    sSepHPrefix,
    sclDeviderPosRight,
    p9LGap,
} from "./constants/rangeNames";

// import {
// 	generateDimensionsAttributes,
// 	generateTypographyAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// 	generateResponsiveRangeAttributes,
// } from "../../../util/helpers";

const {
    //
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

    // member name
    name: {
        type: "string",
        default: "John Doe",
    },

    // job title
    jobTitle: {
        type: "string",
        default: "Software Engineer",
    },

    //
    showDescs: {
        type: "boolean",
        default: true,
    },
    showDesignation: {
        type: "boolean",
        default: true,
    },

    // member description
    description: {
        type: "string",
        default:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },

    //
    imageUrl: {
        source: "attribute",
        selector: ".eb-team-member-avatar",
        attribute: "src",
        default: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/user.jpg",
    },

    //
    imageId: {
        type: "string",
    },
    imageAlt: {
        type: "string",
    },

    //
    isImgHeightAuto: {
        type: "boolean",
        default: false,
    },

    //
    icnEffect: {
        type: "string",
    },

    //
    descsColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    nameColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    jobColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },

    // social profiles

    showSocials: {
        type: "boolean",
        default: true,
    },
    showLinkNewTab: {
        type: "boolean",
        default: true,
    },

    iconsJustify: {
        type: "string",
        default: "center",
    },
    iconsVAlign: {
        type: "string",
        default: "center",
    },

    profilesOnly: {
        type: "array",
    },

    socialDetails: {
        type: "array",
        default: [],
    },

    //
    contentsAlign: {
        type: "string",
        default: "center",
    },
    imageAlign: {
        type: "string",
        default: "center",
    },

    //
    preset: {
        type: "string",
        default: "default",
    },

    //
    socialInImage: {
        type: "Boolean",
        default: false,
    },

    //
    imgBeforeEl: {
        type: "Boolean",
        default: false,
    },

    //
    showCSeparator: {
        type: "Boolean",
        default: false,
    },
    showSSeparator: {
        type: "Boolean",
        default: false,
    },
    cSepAlign: {
        type: "string",
        default: "center",
    },
    sSepAlign: {
        type: "string",
        default: "center",
    },
    cSepColor: {
        type: "string",
    },
    sSepColor: {
        type: "string",
    },
    cSepType: {
        type: "string",
        default: "solid",
    },
    sSepType: {
        type: "string",
        default: "solid",
    },

    //
    isIconsDevider: {
        type: "boolean",
        default: false,
    },

    icnsDevideColor: {
        type: "string",
    },
    icnSepW: {
        type: "number",
        default: 1,
    },
    icnSepH: {
        type: "number",
        default: 30,
    },

    hvIcnColor: {
        type: "string",
    },
    hvIcnBgc: {
        type: "string",
    },

    conVtAlign: {
        type: "string",
        default: "center",
    },

    isConBgGradient: {
        type: "boolean",
        default: true,
    },

    conBgGradient: {
        type: "string",
        default: "linear-gradient(211deg, #C8D2E3 0%, rgb(154 164 182 / 60%) 100%)",
    },
    conBgColor: {
        type: "string",
    },

    imgCnVtAlign: {
        type: "string",
        default: "flex-start",
    },

    isP9reverse: {
        type: "boolean",
        default: false,
    },

    avatarURL: {
        type: "string",
        default: "",
    },
    newWindow: {
        type: "boolean",
        default: false,
    },


    isContentOverlay: {
        type: "boolean",
        default: false,
    },
    showSocialTitle: {
        type: "boolean",
        default: false,
    },
    hoverPreset: {
        type: "string",
        default: "hover-left",
    },

    // typography attributes
    ...generateTypographyAttributes(Object.values(typoPrefixs)),

    // Responsive Range Controller attributes
    ...generateResponsiveRangeAttributes(imageWidth, {
        defaultRange: 200,
    }),

    ...generateResponsiveRangeAttributes(imageHeight, {
        defaultRange: 200,
    }),

    ...generateResponsiveRangeAttributes(rangeIconSize, {
        defaultRange: 20,
        noUnits: true,
    }),

    ...generateResponsiveRangeAttributes(rangeIconPadding, {
        defaultRange: 1,
        noUnits: true,
    }),

    ...generateResponsiveRangeAttributes(rangeIconDistance, {
        defaultRange: 20,
        noUnits: true,
    }),

    ...generateResponsiveRangeAttributes(rangeIconRowGap, {
        defaultRange: 4,
        noUnits: true,
    }),

    ...generateResponsiveRangeAttributes(wrapperWidth, {
        defaultUnit: "%",
        defaultRange: 100,
    }),

    ...generateResponsiveRangeAttributes(imgTopBgHeight, {
        defaultRange: 150,
    }),

    ...generateResponsiveRangeAttributes(cSepWPrefix, {
        defaultRange: 70,
    }),

    ...generateResponsiveRangeAttributes(sSepWPrefix, {
        defaultUnit: "%",
        defaultRange: 90,
    }),

    ...generateResponsiveRangeAttributes(cSepHPrefix, {
        defaultRange: 3,
    }),

    ...generateResponsiveRangeAttributes(sSepHPrefix, {
        defaultRange: 1,
    }),

    ...generateResponsiveRangeAttributes(sclDeviderPosRight, {
        defaultRange: 23,
    }),

    ...generateResponsiveRangeAttributes(p9LGap, {
        defaultRange: 20,
    }),

    // boxs background attributes ⬇
    ...generateBackgroundAttributes(WrpBgConst, {
        defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    }),
    ...generateBackgroundAttributes(socialWrpBg, {
        defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true',
        noMainBgi: true,
        noOverlay: true,
    }),
    ...generateBackgroundAttributes(imgTopBgPrefix, {
        defaultFillColor: "var(--eb-global-primary-color)",
        defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    }),
    // ...generateBackgroundAttributes(cdBoxsBgConst, {
    // 	// defaultFillColor: "#7967ff",
    // 	isBgDefaultGradient: true,
    // 	noOverlay: true,
    // 	noMainBgi: true,
    // 	defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)",
    // 	// noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    // }),

    // boxs BorderShadow attributes ⬇
    ...generateBorderShadowAttributes(WrpBdShadowConst, {
        // noShadow: true,
        // noBorder: true,
    }),
    ...generateBorderShadowAttributes(prefixImgBd, {
        // noShadow: true,
        // noBorder: true,
    }),
    ...generateBorderShadowAttributes(prefixSocialBdShadow, {
        noShadow: true,
        bdrDefaults: {
            top: 1,
            bottom: 1,
            right: 1,
            left: 1,
        },
        // noBorder: true,
    }),
    ...generateBorderShadowAttributes(ovlBdPrefix, {
        // noShadow: true,
        noBdrHover: true,
        // bdrDefaults: {
        // 	top: 1,
        // 	bottom: 1,
        // 	right: 1,
        // 	left: 1,
        // },
        // noBorder: true,
    }),
    // ...generateBorderShadowAttributes(cdBoxsBdShadowConst, {
    // 	// bdrDefaults: {
    // 	// 	top: 0,
    // 	// 	bottom: 0,
    // 	// 	right: 0,
    // 	// 	left: 0,
    // 	// },
    // 	rdsDefaults: {
    // 		top: 10,
    // 		bottom: 10,
    // 		right: 10,
    // 		left: 10,
    // 	},
    // 	// noShadow: true,
    // 	// noBorder: true,
    // }),

    // dimensions Control related Attributes

    ...generateDimensionsAttributes(tmbWrapMarginConst),
    ...generateDimensionsAttributes(tmbWrapPaddingConst),
    ...generateDimensionsAttributes(imageMarginConst),
    ...generateDimensionsAttributes(imagePaddingConst),
    ...generateDimensionsAttributes(tmbDescsPaddingConst, {
        top: 15,
        bottom: 20,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(contentsMargin, {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
    }),
    ...generateDimensionsAttributes(contentsPad, {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
    }),
    ...generateDimensionsAttributes(tmbNamePaddingConst, {
        top: 20,
        bottom: 15,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(tmbJobPaddingConst, {
        // top: 10,
        // bottom: 20,
        // isLinked: false,
    }),
    ...generateDimensionsAttributes(iconsWrapPadding, {
        top: 10,
        // bottom: 20,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(iconsWrapMargin, {
        // top: 10,
        // bottom: 20,
        // isLinked: false,
    }),
};

export default attributes;
