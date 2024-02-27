import {
    rangeIconSize,
    rangeIconDistance,
    rangeIconRowGap,
    sclDeviderPosRight,
    rangeIconMargin,
    rangeIconHeight,
    rangeIconWidth,
    rangeFloatingWidth,
    rangeFloatingHeight,
} from "./constants/rangeNames";

import {
    iconsPadding,
    tmbWrapMarginConst,
    tmbWrapPaddingConst,
} from "./constants/dimensionsConstants";

import { WrpBgConst } from "./constants/backgroundsConstants";

import { TITLE_TYPOGRAPHY } from "./constants/typographyPrefixConstants";

import {
    WrpBdShadowConst,
    prefixSocialBdShadow,
} from "./constants/borderShadowConstants";

const {
    softMinifyCssStrings,
    generateBackgroundControlStyles,
    generateDimensionsControlStyles,
    generateBorderShadowStyles,
    generateResponsiveRangeStyles,
    generateTypographyStyles,
    StyleComponent
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        resOption,
        blockId,
        blockMeta,
        socialDetails,
        iconsJustify,
        iconsVAlign,
        isIconsDevider,
        icnsDevideColor = "#cacaca",
        icnSepW = 1,
        icnSepH = 30,
        hvIcnColor,
        hvIcnBgc,
        textShadowColor,
        textHOffset,
        textVOffset,
        blurRadius,
        classHook,
        showTitle,
        iconShape,
        isFloating,
    } = attributes;

    //
    // styling codes start from here
    //

    const {
        rangeStylesDesktop: iconSizeDesktop,
        rangeStylesTab: iconSizeTab,
        rangeStylesMobile: iconSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeIconSize,
        customUnit: "px",
        property: null,
        attributes,
    });

    const {
        rangeStylesDesktop: iconMarginDesktop,
        rangeStylesTab: iconMarginTab,
        rangeStylesMobile: iconMarginMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeIconMargin,
        customUnit: "px",
        property: null,
        attributes,
    });

    const {
        rangeStylesDesktop: iconHeightDesktop,
        rangeStylesTab: iconHeightTab,
        rangeStylesMobile: iconHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeIconHeight,
        customUnit: "px",
        property: null,
        attributes,
    });

    const {
        rangeStylesDesktop: iconWidthDesktop,
        rangeStylesTab: iconWidthTab,
        rangeStylesMobile: iconWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeIconWidth,
        customUnit: "px",
        property: null,
        attributes,
    });

    const {
        rangeStylesDesktop: floatingWidthDesktop,
        rangeStylesTab: floatingWidthTab,
        rangeStylesMobile: floatingWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeFloatingWidth,
        customUnit: "px",
        property: null,
        attributes,
    });

    const {
        rangeStylesDesktop: floatingHeightDesktop,
        rangeStylesTab: floatingHeightTab,
        rangeStylesMobile: floatingHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeFloatingHeight,
        customUnit: "px",
        property: null,
        attributes,
    });

    const {
        rangeStylesDesktop: iconSpaceDesktop,
        rangeStylesTab: iconSpaceTab,
        rangeStylesMobile: iconSpaceMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeIconDistance,
        customUnit: "px",
        property: "column-gap",
        attributes,
    });

    const {
        rangeStylesDesktop: iconRowGapDesktop,
        rangeStylesTab: iconRowGapTab,
        rangeStylesMobile: iconRowGapMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeIconRowGap,
        customUnit: "px",
        property: "row-gap",
        attributes,
    });

    const {
        rangeStylesDesktop: sSepPosRightDesktop,
        rangeStylesTab: sSepPosRightTab,
        rangeStylesMobile: sSepPosRightMobile,
    } = generateResponsiveRangeStyles({
        controlName: sclDeviderPosRight,
        property: "margin-right",
        attributes,
    });

    // styles related to generateResponsiveRangeStyles end

    // styles related to generateBackgroundControlStyles start ⬇

    const {
        backgroundStylesDesktop: wrpBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: wrpHoverBackgroundStylesDesktop,
        backgroundStylesTab: wrpBackgroundStylesTab,
        hoverBackgroundStylesTab: wrpHoverBackgroundStylesTab,
        backgroundStylesMobile: wrpBackgroundStylesMobile,
        hoverBackgroundStylesMobile: wrpHoverBackgroundStylesMobile,
        overlayStylesDesktop: wrpOverlayStylesDesktop,
        hoverOverlayStylesDesktop: wrpHoverOverlayStylesDesktop,
        overlayStylesTab: wrpOverlayStylesTab,
        hoverOverlayStylesTab: wrpHoverOverlayStylesTab,
        overlayStylesMobile: wrpOverlayStylesMobile,
        hoverOverlayStylesMobile: wrpHoverOverlayStylesMobile,
        bgTransitionStyle: wrpBgTransitionStyle,
        ovlTransitionStyle: wrpOvlTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: WrpBgConst,
    });

    // styles related to generateBackgroundControlStyles end

    // styles related to generateDimensionsControlStyles start ⬇
    // icon padding
    const {
        dimensionStylesDesktop: iconPaddingDesktop,
        dimensionStylesTab: iconPaddingTab,
        dimensionStylesMobile: iconPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: iconsPadding,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: wrpMarginDesktop,
        dimensionStylesTab: wrpMarginTab,
        dimensionStylesMobile: wrpMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: tmbWrapMarginConst,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: wrpPaddingDesktop,
        dimensionStylesTab: wrpPaddingTab,
        dimensionStylesMobile: wrpPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: tmbWrapPaddingConst,
        styleFor: "padding",
    });

    // styles related to generateDimensionsControlStyles end

    // styles related to generateBorderShadowStyles start ⬇
    const {
        styesDesktop: wrpBdShdStyesDesktop,
        styesTab: wrpBdShdStyesTab,
        styesMobile: wrpBdShdStyesMobile,
        stylesHoverDesktop: wrpBdShdStylesHoverDesktop,
        stylesHoverTab: wrpBdShdStylesHoverTab,
        stylesHoverMobile: wrpBdShdStylesHoverMobile,
        transitionStyle: wrpBdShdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: WrpBdShadowConst,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: socialBdrShdwDesktop,
        styesTab: socialBdrShdwTab,
        styesMobile: socialBdrShdwMobile,
        stylesHoverDesktop: socialBdrShdwsHoverDesktop,
        stylesHoverTab: socialBdrShdwsHoverTab,
        stylesHoverMobile: socialBdrShdwsHoverMobile,
        transitionStyle: socialBdrShdwTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: prefixSocialBdShadow,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        typoStylesDesktop: titleTypographyDesktop,
        typoStylesTab: titleTypographyTab,
        typoStylesMobile: titleTypographyMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: TITLE_TYPOGRAPHY,
    });

    // styles related to generateBorderShadowStyles end

    const socialStyles = socialDetails.reduce(
        (acc, { backgroundColor, color, separatorColor }, i) => `
		${acc}

		${separatorColor
                ? `
				.${blockId}.eb-social-share-wrapper ul.eb-social-shares li:nth-child(${i + 1
                }) a .social-icon-v-line {
					background-color: ${separatorColor};
				}
				`
                : ""
            }

		${backgroundColor || color
                ? `
				.${blockId}.eb-social-share-wrapper ul.eb-social-shares li:nth-child(${i + 1
                }) a {
					${backgroundColor ? `background: ${backgroundColor};` : ""}
					${color ? `color: ${color};` : ""}
				}
				`
                : ""
            }
		`,
        ""
    );

    const wrapperStylesDesktop = `
	div.eb-social-share-wrapper ul {
		margin: 0;
		padding:0;
	}

	${isFloating
            ? `
	.eb-parent-wrapper.eb-parent-eb-social-share-qier2p8.eb_animation.eb__animated {
		animation-name: none !important;
		-webkit-animation-name: none !important;
	}
	`
            : ""
        }

	.${blockId}.eb-social-share-wrapper {
		position:relative;
		${!isFloating ? wrpBackgroundStylesDesktop : ""}
		${!isFloating ? wrpMarginDesktop : ""}
		${!isFloating ? wrpPaddingDesktop : ""}
		${!isFloating ? wrpBdShdStyesDesktop : ""}
		transition: ${wrpBgTransitionStyle}, ${wrpBdShdTransitionStyle};
	}

	.${blockId}.eb-social-share-wrapper:hover{

		${wrpHoverBackgroundStylesDesktop}
		${!isFloating ? wrpBdShdStylesHoverDesktop : ""}
	}

	.${blockId}.eb-social-share-wrapper:before{
		${wrpOverlayStylesDesktop}
		transition: ${wrpOvlTransitionStyle};

	}

	.${blockId}.eb-social-share-wrapper:hover:before{
		${wrpHoverOverlayStylesDesktop}

	}


	.${blockId}.eb-social-share-wrapper ul.eb-social-shares {
		list-style: none;
		flex-wrap: wrap;
		align-items: ${iconsVAlign || "center"};
		justify-content: ${iconsJustify};
		${iconSpaceDesktop}
		${iconRowGapDesktop}
		display: flex;
	}


	${socialStyles}


	${isIconsDevider
            ? `
		.${blockId}.eb-social-share-wrapper ul.eb-social-shares li{
			position:relative;
		}

		.${blockId}.eb-social-share-wrapper ul.eb-social-shares li + li:before {
			content: "";
			background-color: ${icnsDevideColor};
			height: ${icnSepH}px;
			width: ${icnSepW}px;
			position: absolute;
			top: 2px;
			right: 100%;
			${sSepPosRightDesktop}
		}

		`
            : ""
        }



	.${blockId}.eb-social-share-wrapper ul.eb-social-shares li a {
		box-sizing:border-box;
		text-decoration: none;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: ${iconMarginDesktop} 0;
		${textHOffset || textVOffset || blurRadius || textShadowColor
            ? `text-shadow: ${textHOffset || 0}px ${textVOffset || 0}px ${blurRadius || 0
            }px ${textShadowColor || "rgba(0,0,0,.5)"};`
            : ""
        }
		${iconShape !== "circular" ? iconPaddingDesktop : ""}
		${socialBdrShdwDesktop}
		transition: color 0.5s, background-color 0.5s, ${socialBdrShdwTransitionStyle};
		${iconShape === "circular" && iconHeightDesktop
            ? `height: ${iconHeightDesktop};`
            : ""
        }
		${iconShape === "circular" && iconWidthDesktop
            ? `width: ${iconWidthDesktop};`
            : ""
        }
		${showTitle ? titleTypographyDesktop : `font-size: ${iconSizeDesktop};`}
	}

	.${blockId}.eb-social-share-wrapper.eb-social-share-floating ul.eb-social-shares {
		display: inline-block;
		position: fixed;
		left: 0;
		top: 35%;
		transform: translate(0, -50px);
		overflow: auto;
		-ms-overflow-style: none;  /* IE and Edge */
  		scrollbar-width: none;  /* Firefox */
		max-height: ${typeof floatingHeightDesktop === "string" &&
            floatingHeightDesktop.length !== 0
            ? floatingHeightDesktop
            : "200px"
        };
		${isFloating ? wrpBackgroundStylesDesktop : ""}
		${isFloating ? wrpBdShdStyesDesktop : ""}
	}

	ul.eb-social-shares::-webkit-scrollbar {
		display: none;
	}

	.${blockId}.eb-social-share-wrapper.eb-social-share-floating ul.eb-social-shares .eb-social-share-text {
		width: 0;
		overflow: hidden;
		white-space: nowrap;
		transition: all 0.4s;
	}

	.${blockId}.eb-social-share-wrapper.eb-social-share-floating ul.eb-social-shares li a .eb-social-share-icon {
		width: ${iconSizeDesktop};
		text-align: center;
	}

    ${!showTitle
            ? `.${blockId}.eb-social-share-wrapper ul.eb-social-shares li a .eb-social-share-icon {
		width: ${iconSizeDesktop};
        height: ${iconSizeDesktop};
		text-align: center;
	}`
            : ""
        }

	.${blockId}.eb-social-share-wrapper.eb-social-share-floating ul.eb-social-shares li a {
		display: inline-flex;
	}

	.${blockId}.eb-social-share-wrapper.eb-social-share-floating ul.eb-social-shares li a.eb-slide-out .eb-social-share-text {
		width: ${typeof floatingWidthDesktop === "string" &&
            floatingWidthDesktop.length !== 0
            ? floatingWidthDesktop
            : "100px"
        };
	}

	.${blockId}.eb-social-share-wrapper ul.eb-social-shares li:hover a {
		background:${hvIcnBgc};
		color:${hvIcnColor};
		${socialBdrShdwsHoverDesktop}
	}

	.${blockId}.eb-social-share-wrapper ul.eb-social-shares li span.eb-social-share-text:before {
		content: "";
		width: 1px;
		height: 20px;
		background-color: #fff;
		opacity: .5;
		display: inline-block;
		vertical-align: middle;
		margin: 0 10px;
	}

	.${blockId}.eb-social-share-wrapper.eb-social-share-floating.eb-social-share-circular ul.eb-social-shares li a.eb-slide-out {
		height: unset;
		width: unset;
		border-radius: ${iconHeightDesktop}
	}

	.${blockId}.eb-social-share-wrapper.eb-social-share-floating.eb-social-share-circular ul.eb-social-shares li a.eb-slide-out i {
		height: ${iconHeightDesktop};
		width: ${iconWidthDesktop};
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

    const wrapperStylesTab = `

	.${blockId}.eb-social-share-wrapper {
		${wrpBackgroundStylesTab}
		${wrpMarginTab}
		${wrpPaddingTab}
		${wrpBdShdStyesTab}
	}

	.${blockId}.eb-social-share-wrapper:hover{
		${wrpHoverBackgroundStylesTab}
		${wrpBdShdStylesHoverTab}

	}

	.${blockId}.eb-social-share-wrapper:before{
		${wrpOverlayStylesTab}

	}

	.${blockId}.eb-social-share-wrapper:hover:before{
		${wrpHoverOverlayStylesTab}

	}

	.${blockId}.eb-social-share-wrapper ul.eb-social-shares {
		${iconSpaceTab}
		${iconRowGapTab}
	}

	${isIconsDevider
            ? `
			.${blockId}.eb-social-share-wrapper ul.eb-social-shares li + li:before {
				${sSepPosRightTab}
			}
			`
            : ""
        }

	.${blockId}.eb-social-share-wrapper.eb-social-share-floating ul.eb-social-shares {
		max-height: ${typeof floatingHeightTab === "string" &&
            floatingHeightTab.length !== 0
            ? floatingHeightTab
            : "200px"
        };
		${isFloating ? wrpBackgroundStylesTab : ""}
		${isFloating ? wrpBdShdStyesTab : ""}
	}

	.${blockId}.eb-social-share-wrapper.eb-social-share-floating ul.eb-social-shares li a.eb-slide-out .eb-social-share-text {
		width: ${typeof floatingWidthTab === "string" &&
            floatingWidthTab.length !== 0
            ? floatingWidthTab
            : "100px"
        };
	}

	.${blockId}.eb-social-share-wrapper ul.eb-social-shares li a {
		${showTitle ? titleTypographyTab : `font-size: ${iconSizeTab};`}
		${iconShape !== "circular" ? iconPaddingTab : ""}
		${socialBdrShdwTab}
		margin: ${iconMarginTab} 0;
		${iconShape === "circular" && iconHeightTab ? `height: ${iconHeightTab};` : ""}
		${iconShape === "circular" && iconWidthTab ? `width: ${iconWidthTab};` : ""}
	}

	.${blockId}.eb-social-share-wrapper ul.eb-social-shares li:hover a {
		${socialBdrShdwsHoverTab}
	}

    ${!showTitle
            ? `.${blockId}.eb-social-share-wrapper ul.eb-social-shares li a .eb-social-share-icon {
		width: ${iconSizeTab};
        height: ${iconSizeTab};
		text-align: center;
	}`
            : ""
        }

	`;

    const wrapperStylesMobile = `
	.${blockId}.eb-social-share-wrapper {
		${wrpBackgroundStylesMobile}
		${wrpMarginMobile}
		${wrpPaddingMobile}
		${wrpBdShdStyesMobile}
	}

	.${blockId}.eb-social-share-wrapper:hover{
		${wrpHoverBackgroundStylesMobile}
		${wrpBdShdStylesHoverMobile}

	}

	.${blockId}.eb-social-share-wrapper:before{
		${wrpOverlayStylesMobile}

	}

	.${blockId}.eb-social-share-wrapper:hover:before{
		${wrpHoverOverlayStylesMobile}

	}

	.${blockId}.eb-social-share-wrapper ul.eb-social-shares {
		${iconSpaceMobile}
		${iconRowGapMobile}
	}


	${isIconsDevider
            ? `
			.${blockId}.eb-social-share-wrapper ul.eb-social-shares li + li:before {
				${sSepPosRightMobile}
			}
			`
            : ""
        }

	.${blockId}.eb-social-share-wrapper.eb-social-share-floating ul.eb-social-shares {
		max-height: ${typeof floatingHeightMobile === "string" &&
            floatingHeightMobile.length !== 0
            ? floatingHeightMobile
            : "200px"
        };
		${isFloating ? wrpBackgroundStylesMobile : ""}
		${isFloating ? wrpBdShdStyesMobile : ""}
	}

	.${blockId}.eb-social-share-wrapper.eb-social-share-floating ul.eb-social-shares li a.eb-slide-out .eb-social-share-text {
		width: ${typeof floatingWidthMobile === "string" &&
            floatingWidthMobile.length !== 0
            ? floatingWidthMobile
            : "100px"
        };
	}

	.${blockId}.eb-social-share-wrapper ul.eb-social-shares li a {
		${showTitle ? titleTypographyMobile : `font-size: ${iconSizeMobile};`}
		${iconShape !== "circular" ? iconPaddingMobile : ""}
		${socialBdrShdwMobile}
		margin: ${iconMarginMobile} 0;
		${iconShape === "circular" && iconHeightMobile
            ? `height: ${iconHeightMobile};`
            : ""
        }
		${iconShape === "circular" && iconWidthMobile
            ? `width: ${iconWidthMobile};`
            : ""
        }
	}


	.${blockId}.eb-social-share-wrapper ul.eb-social-shares li:hover a {
		${socialBdrShdwsHoverMobile}
	}

    ${!showTitle
            ? `.${blockId}.eb-social-share-wrapper ul.eb-social-shares li a .eb-social-share-icon {
		width: ${iconSizeMobile};
        height: ${iconSizeMobile};
		text-align: center;
	}`
            : ""
        }

	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
	`);

    //
    // styling codes End here
    //

    return (
        <>
            <StyleComponent
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyles={desktopAllStyles}
                tabAllStyles={tabAllStyles}
                mobileAllStyles={mobileAllStyles}
                blockName={name}
            />
        </>
    );
}
