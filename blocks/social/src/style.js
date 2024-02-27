import {
    wrapperWidth,
    rangeIconSize,
    rangeIconPadding,
    rangeIconDistance,
    rangeIconRowGap,
    sclDeviderPosRight,
} from "./constants/rangeNames";

import {
    tmbWrapMarginConst,
    tmbWrapPaddingConst,
} from "./constants/dimensionsConstants";

import { WrpBgConst } from "./constants/backgroundsConstants";

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
    } = attributes;

    //
    // styling codes start from here
    //

    // styles related to generateResponsiveRangeStyles start ⬇
    const {
        rangeStylesDesktop: wrapWidthDesktop,
        rangeStylesTab: wrapWidthTab,
        rangeStylesMobile: wrapWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: wrapperWidth,
        // customUnit: "px",
        property: "max-width",
        attributes,
    });

    const {
        rangeStylesDesktop: iconSizeDesktop,
        rangeStylesTab: iconSizeTab,
        rangeStylesMobile: iconSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeIconSize,
        customUnit: "px",
        property: "font-size",
        attributes,
    });

    const {
        rangeStylesDesktop: iconPaddingDesktop,
        rangeStylesTab: iconPaddingTab,
        rangeStylesMobile: iconPaddingMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeIconPadding,
        customUnit: "em",
        property: "padding",
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
        // noOverlay: true,
        // noMainBgi: true,
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    });

    // styles related to generateBackgroundControlStyles end

    // styles related to generateDimensionsControlStyles start ⬇
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

    // styles related to generateBorderShadowStyles end

    const socialStyles = socialDetails.reduce(
        (acc, { bgColor, color }, i) => `
		${acc}

		${bgColor || color
                ? `
				.${blockId}.eb-social-links-wrapper ul.eb-socials li:nth-child(${i + 1}) a {
					${bgColor ? `background: ${bgColor};` : ""}
					${color ? `color: ${color};` : ""}
				}
				`
                : ""
            }
		`,
        ""
    );

    const wrapperStylesDesktop = `
	div.eb-social-links-wrapper ul {
		margin: 0;
		padding:0;
	}

	.${blockId}.eb-social-links-wrapper {
		position:relative;
		margin:auto;
		${wrapWidthDesktop}
		${wrpBackgroundStylesDesktop}
		${wrpMarginDesktop}
		${wrpPaddingDesktop}
		${wrpBdShdStyesDesktop}
		transition: ${wrpBgTransitionStyle}, ${wrpBdShdTransitionStyle};
	}

	.${blockId}.eb-social-links-wrapper:hover{

		${wrpHoverBackgroundStylesDesktop}
		${wrpBdShdStylesHoverDesktop}
	}

	.${blockId}.eb-social-links-wrapper:before{
		${wrpOverlayStylesDesktop}
		transition: ${wrpOvlTransitionStyle};

	}

	.${blockId}.eb-social-links-wrapper:hover:before{
		${wrpHoverOverlayStylesDesktop}

	}


	.${blockId}.eb-social-links-wrapper ul.eb-socials {
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
		.${blockId}.eb-social-links-wrapper ul.eb-socials li{
			position:relative;
		}

		.${blockId}.eb-social-links-wrapper ul.eb-socials li + li:before {
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

	.${blockId}.eb-social-links-wrapper ul.eb-socials li a {
		box-sizing:content-box;
		text-decoration: none;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 0;
		width: 0;
		${textHOffset || textVOffset || blurRadius || textShadowColor
            ? `text-shadow: ${textHOffset || 0}px ${textVOffset || 0}px ${blurRadius || 0
            }px ${textShadowColor || "rgba(0,0,0,.5)"};`
            : ""
        }
		${iconSizeDesktop}
		${iconPaddingDesktop}
		${socialBdrShdwDesktop}
		transition: color 0.5s, background-color 0.5s, ${socialBdrShdwTransitionStyle};
	}

	.${blockId}.eb-social-links-wrapper ul.eb-socials li:hover a {
		background:${hvIcnColor};
		color:${hvIcnBgc};
		${socialBdrShdwsHoverDesktop}
	}

`;

    const wrapperStylesTab = `
	.${blockId}.eb-social-links-wrapper {
		${wrapWidthTab}
		${wrpBackgroundStylesTab}
		${wrpMarginTab}
		${wrpPaddingTab}
		${wrpBdShdStyesTab}
	}

	.${blockId}.eb-social-links-wrapper:hover{
		${wrpHoverBackgroundStylesTab}
		${wrpBdShdStylesHoverTab}

	}

	.${blockId}.eb-social-links-wrapper:before{
		${wrpOverlayStylesTab}

	}

	.${blockId}.eb-social-links-wrapper:hover:before{
		${wrpHoverOverlayStylesTab}

	}

	.${blockId}.eb-social-links-wrapper ul.eb-socials {
		${iconSpaceTab}
		${iconRowGapTab}
	}

	${isIconsDevider
            ? `
			.${blockId}.eb-social-links-wrapper ul.eb-socials li + li:before {
				${sSepPosRightTab}
			}
			`
            : ""
        }

	.${blockId}.eb-social-links-wrapper ul.eb-socials li a {
		${iconSizeTab}
		${iconPaddingTab}
		${socialBdrShdwTab}
	}

	.${blockId}.eb-social-links-wrapper ul.eb-socials li:hover a {
		${socialBdrShdwsHoverTab}
	}

	`;

    const wrapperStylesMobile = `
	.${blockId}.eb-social-links-wrapper {
		${wrapWidthMobile}
		${wrpBackgroundStylesMobile}
		${wrpMarginMobile}
		${wrpPaddingMobile}
		${wrpBdShdStyesMobile}
	}

	.${blockId}.eb-social-links-wrapper:hover{
		${wrpHoverBackgroundStylesMobile}
		${wrpBdShdStylesHoverMobile}

	}

	.${blockId}.eb-social-links-wrapper:before{
		${wrpOverlayStylesMobile}

	}

	.${blockId}.eb-social-links-wrapper:hover:before{
		${wrpHoverOverlayStylesMobile}

	}

	.${blockId}.eb-social-links-wrapper ul.eb-socials {
		${iconSpaceMobile}
		${iconRowGapMobile}
	}


	${isIconsDevider
            ? `
			.${blockId}.eb-social-links-wrapper ul.eb-socials li + li:before {
				${sSepPosRightMobile}
			}
			`
            : ""
        }

	.${blockId}.eb-social-links-wrapper ul.eb-socials li a {
		${iconSizeMobile}
		${iconPaddingMobile}
		${socialBdrShdwMobile}
	}


	.${blockId}.eb-social-links-wrapper ul.eb-socials li:hover a {
		${socialBdrShdwsHoverMobile}
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
