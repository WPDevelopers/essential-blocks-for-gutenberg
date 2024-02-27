/**
 * WordPress dependencies
 */

import {
    typoPrefix_title,
    typoPrefix_content,
} from "./constants/typographyPrefixConstants";

import { rangeIconSize, accGapRange } from "./constants/rangeNames";

import {
    wrapMarginConst,
    wrapPaddingConst,
    iconMarginConst,
    iconPaddingConst,
    tabMarginConst,
    tabPaddingConst,
    conMarginConst,
    conPaddingConst,
} from "./constants/dimensionsConstants";

import {
    WrpBgConst,
    iconBgConst,
    tabBgConst,
    conBgConst,
} from "./constants/backgroundsConstants";

import {
    WrpBdShadowConst,
    iconBdShadowConst,
    tabBdShadowConst,
    conBdShadowConst,
} from "./constants/borderShadowConstants";

const {
    softMinifyCssStrings,
    generateBackgroundControlStyles,
    generateDimensionsControlStyles,
    generateTypographyStyles,
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
        classHook,

        //
        accordionType,
        displayIcon,
        transitionDuration,
        tabIcon,
        expandedIcon,
        titleColor = "#fff",
        contentColor = "#555",
        contentAlign = "left",
        iconColor = "#4a5059",
        iconPosition,
        titleAlignment,
        hoverTitleColor,
        activeBgColor,
        activeTitleColor,
        tagName,
        faqSchema,

        //
        icnZ_Range,
        TABicnZ_Range,
        MOBicnZ_Range,
        accordionChildCount,
    } = attributes;

    // styles related to generateTypographyStyles start ⬇
    const {
        typoStylesDesktop: titleTypoStylesDesktop,
        typoStylesTab: titleTypoStylesTab,
        typoStylesMobile: titleTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_title,
        defaultFontSize: 18,
    });

    const {
        typoStylesDesktop: contentTypoStylesDesktop,
        typoStylesTab: contentTypoStylesTab,
        typoStylesMobile: contentTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_content,
        defaultFontSize: 14,
    });

    // styles related to generateTypographyStyles end

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

    const {
        backgroundStylesDesktop: iconBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: iconHoverBackgroundStylesDesktop,
        bgTransitionStyle: iconBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: iconBgConst,
        noOverlay: true,
        noMainBgi: true,
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    });

    const {
        backgroundStylesDesktop: tabBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: tabHoverBackgroundStylesDesktop,
        bgTransitionStyle: tabBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: tabBgConst,
        noOverlay: true,
        noMainBgi: true,
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    });

    const {
        backgroundStylesDesktop: conBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: conHoverBackgroundStylesDesktop,
        bgTransitionStyle: conBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: conBgConst,
        noOverlay: true,
        noMainBgi: true,
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
        controlName: wrapMarginConst,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: wrpPaddingDesktop,
        dimensionStylesTab: wrpPaddingTab,
        dimensionStylesMobile: wrpPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: wrapPaddingConst,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: iconMarginDesktop,
        dimensionStylesTab: iconMarginTab,
        dimensionStylesMobile: iconMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: iconMarginConst,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: iconPaddingDesktop,
        dimensionStylesTab: iconPaddingTab,
        dimensionStylesMobile: iconPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: iconPaddingConst,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: tabMarginDesktop,
        dimensionStylesTab: tabMarginTab,
        dimensionStylesMobile: tabMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: tabMarginConst,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: tabPaddingDesktop,
        dimensionStylesTab: tabPaddingTab,
        dimensionStylesMobile: tabPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: tabPaddingConst,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: conMarginDesktop,
        dimensionStylesTab: conMarginTab,
        dimensionStylesMobile: conMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: conMarginConst,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: conPaddingDesktop,
        dimensionStylesTab: conPaddingTab,
        dimensionStylesMobile: conPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: conPaddingConst,
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
        styesDesktop: iconBdShdStyesDesktop,
        styesTab: iconBdShdStyesTab,
        styesMobile: iconBdShdStyesMobile,
        stylesHoverDesktop: iconBdShdStylesHoverDesktop,
        stylesHoverTab: iconBdShdStylesHoverTab,
        stylesHoverMobile: iconBdShdStylesHoverMobile,
        transitionStyle: iconBdShdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: iconBdShadowConst,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: tabBdShdStyesDesktop,
        styesTab: tabBdShdStyesTab,
        styesMobile: tabBdShdStyesMobile,
        stylesHoverDesktop: tabBdShdStylesHoverDesktop,
        stylesHoverTab: tabBdShdStylesHoverTab,
        stylesHoverMobile: tabBdShdStylesHoverMobile,
        transitionStyle: tabBdShdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: tabBdShadowConst,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: conBdShdStyesDesktop,
        styesTab: conBdShdStyesTab,
        styesMobile: conBdShdStyesMobile,
        stylesHoverDesktop: conBdShdStylesHoverDesktop,
        stylesHoverTab: conBdShdStylesHoverTab,
        stylesHoverMobile: conBdShdStylesHoverMobile,
        transitionStyle: conBdShdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: conBdShadowConst,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });
    // styles related to generateBorderShadowStyles end

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
        rangeStylesDesktop: accGapDesktop,
        rangeStylesTab: accGapTab,
        rangeStylesMobile: accGapMobile,
    } = generateResponsiveRangeStyles({
        controlName: accGapRange,
        customUnit: "px",
        property: "padding-top",
        attributes,
    });
    // styles related to generateResponsiveRangeStyles end

    const wrapperStylesDesktop = `

	.eb-accordion-item.is-selected .eb-accordion-content-wrapper {
		height:auto;
		opacity: 0;
		overflow: visible;
	}

	.eb-accordion-container.eb_accdn_loaded .eb-accordion-wrapper:not(.for_edit_page) .eb-accordion-content-wrapper{
		visibility:visible;
		position:static;
	}

	.eb-accordion-container .eb-accordion-wrapper:not(.for_edit_page) .eb-accordion-content-wrapper{
		visibility:hidden;
		position:absolute;
	}

	.${blockId}.eb-accordion-container .eb-accordion-inner{
		position:relative;
	}

	.${blockId}.eb-accordion-container .eb-accordion-wrapper h1,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper h2,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper h3,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper h4,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper h5,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper h6,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper p{
		margin:0;
		padding:0;
	}


	.${blockId}.eb-accordion-container .eb-accordion-wrapper + .eb-accordion-wrapper{
		${accGapDesktop}
	}


	.${blockId}.eb-accordion-container{
		${wrpMarginDesktop}
		${wrpPaddingDesktop}
		${wrpBackgroundStylesDesktop}
		${wrpBdShdStyesDesktop}
		transition:${wrpBgTransitionStyle}, ${wrpBdShdTransitionStyle};
		overflow:hidden;
	}

	.${blockId}.eb-accordion-container:hover{
		${wrpHoverBackgroundStylesDesktop}
		${wrpBdShdStylesHoverDesktop}
	}

	.${blockId}.eb-accordion-container:before{
		${wrpOverlayStylesDesktop}
		transition:${wrpOvlTransitionStyle};
	}

	.${blockId}.eb-accordion-container:hover:before{
		${wrpHoverOverlayStylesDesktop}
	}


${displayIcon
            ? `
		.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper{
			display: flex;
			justify-content: center;
			align-items: center;
			${iconMarginDesktop}
			${iconPaddingDesktop}
			${iconBackgroundStylesDesktop}
			${iconBdShdStyesDesktop}
			transition:${iconBgTransitionStyle}, ${iconBdShdTransitionStyle};
		}


		.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper:hover{
			${iconHoverBackgroundStylesDesktop}
			${iconBdShdStylesHoverDesktop}
		}

		.${blockId}.eb-accordion-container .eb-accordion-icon{
			text-align:center;
			color: ${iconColor};
			${iconSizeDesktop}
			${icnZ_Range ? `width:${icnZ_Range}px;` : ""}
		}

		`
            : ""
        }

	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper {
		cursor: pointer;
		display: flex;
		align-items: center;
		flex-direction: ${iconPosition === "right" && displayIcon ? "row-reverse" : "row"
        };
		${tabBackgroundStylesDesktop}
		${tabMarginDesktop}
		${tabPaddingDesktop}
		${tabBdShdStyesDesktop}
		transition:${tabBgTransitionStyle}, ${tabBdShdTransitionStyle};
	}


	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper:hover{
		${tabHoverBackgroundStylesDesktop}
		${tabBdShdStylesHoverDesktop}
	}


	.${blockId}.eb-accordion-container .eb-accordion-title{
		text-align:${titleAlignment || "left"};
		flex:1;
		color:${titleColor};
		${titleTypoStylesDesktop}
	}

${activeTitleColor
            ? `
	.${blockId}.eb-accordion-container .eb-accordion-wrapper:not(.eb-accordion-hidden,.for_edit_page) h3.eb-accordion-title,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper.expanded_tab h3.eb-accordion-title{
		${activeTitleColor ? `color: ${activeTitleColor} !important;` : ""}
	}
	`
            : ""
        }

${activeBgColor
            ? `
	.${blockId}.eb-accordion-container .eb-accordion-wrapper:not(.eb-accordion-hidden,.for_edit_page) .eb-accordion-title-wrapper,
	.${blockId}.eb-accordion-container .eb-accordion-wrapper.expanded_tab .eb-accordion-title-wrapper{
		${activeBgColor
                ? `background-color: ${activeBgColor} !important; background-image: unset`
                : ""
            }
	}
	`
            : ""
        }

	${hoverTitleColor
            ? `
			.${blockId}.eb-accordion-container .eb-accordion-title-wrapper:hover .eb-accordion-title{
				color:${hoverTitleColor};
			}
			`
            : ""
        }

	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper .eb-accordion-content{
		color:${contentColor};
		text-align:${contentAlign};
		${conBackgroundStylesDesktop}
		${contentTypoStylesDesktop}
		${conMarginDesktop}
		${conPaddingDesktop}
		${conBdShdStyesDesktop}
		transition:${conBdShdTransitionStyle}, ${conBgTransitionStyle};
	}

	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper:hover .eb-accordion-content{
		${conHoverBackgroundStylesDesktop}
		${conBdShdStylesHoverDesktop}
	}

	`;

    const wrapperStylesTab = `

	.${blockId}.eb-accordion-container .eb-accordion-wrapper + .eb-accordion-wrapper{
		${accGapTab}
	}


	.${blockId}.eb-accordion-container{
		${wrpMarginTab}
		${wrpPaddingTab}
		${wrpBackgroundStylesTab}
		${wrpBdShdStyesTab}
	}

	.${blockId}.eb-accordion-container:hover{
		${wrpHoverBackgroundStylesTab}
		${wrpBdShdStylesHoverTab}
	}

	.${blockId}.eb-accordion-container:before{
		${wrpOverlayStylesTab}
	}

	.${blockId}.eb-accordion-container:hover:before{
		${wrpHoverOverlayStylesTab}
	}



${displayIcon
            ? `
		.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper{
			${iconMarginTab}
			${iconPaddingTab}
			${iconBdShdStyesTab}
		}


		.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper:hover{
			${iconBdShdStylesHoverTab}
		}

		.${blockId}.eb-accordion-container .eb-accordion-icon{
			${iconSizeTab}
			${TABicnZ_Range ? `width:${TABicnZ_Range}px;` : ""}
		}

		`
            : ""
        }



	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper {
		${tabMarginTab}
		${tabPaddingTab}
		${tabBdShdStyesTab}
	}


	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper:hover{
		${tabBdShdStylesHoverTab}
	}

	.${blockId}.eb-accordion-container .eb-accordion-title{
		${titleTypoStylesTab}
	}



	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper .eb-accordion-content{
		${contentTypoStylesTab}
		${conMarginTab}
		${conPaddingTab}
		${conBdShdStyesTab}
	}

	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper:hover .eb-accordion-content{
		${conBdShdStylesHoverTab}
	}



	`;

    const wrapperStylesMobile = `

	.${blockId}.eb-accordion-container .eb-accordion-wrapper + .eb-accordion-wrapper{
		${accGapMobile}
	}

	.${blockId}.eb-accordion-container{
		${wrpMarginMobile}
		${wrpPaddingMobile}
		${wrpBackgroundStylesMobile}
		${wrpBdShdStyesMobile}
	}

	.${blockId}.eb-accordion-container:hover{
		${wrpHoverBackgroundStylesMobile}
		${wrpBdShdStylesHoverMobile}
	}

	.${blockId}.eb-accordion-container:before{
		${wrpOverlayStylesMobile}
	}

	.${blockId}.eb-accordion-container:hover:before{
		${wrpHoverOverlayStylesMobile}
	}



	${displayIcon
            ? `
			.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper{
				${iconMarginMobile}
				${iconPaddingMobile}
				${iconBdShdStyesMobile}
			}

			.${blockId}.eb-accordion-container .eb-accordion-icon-wrapper:hover{
				${iconBdShdStylesHoverMobile}
			}

			.${blockId}.eb-accordion-container .eb-accordion-icon{
				${iconSizeMobile}
				${MOBicnZ_Range ? `width:${MOBicnZ_Range}px;` : ""}
			}

			`
            : ""
        }


	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper {
		${tabMarginMobile}
		${tabPaddingMobile}
		${tabBdShdStyesMobile}
	}


	.${blockId}.eb-accordion-container .eb-accordion-title-wrapper:hover{
		${tabBdShdStylesHoverMobile}
	}

	.${blockId}.eb-accordion-container .eb-accordion-title{
		${titleTypoStylesMobile}
	}

	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper .eb-accordion-content{
		${contentTypoStylesMobile}
		${conMarginMobile}
		${conPaddingMobile}
		${conBdShdStyesMobile}
	}

	.${blockId}.eb-accordion-container .eb-accordion-content-wrapper:hover .eb-accordion-content{
		${conBdShdStylesHoverMobile}
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
