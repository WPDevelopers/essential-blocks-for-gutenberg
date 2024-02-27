/**
 * WordPress dependencies
 */
import { useEffect, useState, useRef } from "@wordpress/element";

/**
 * Internal depenencies
 */
import {
    rWrapMarginConst,
    rWrapPaddingConst,
} from "./constants/dimensionsNames";

import { WrpBgConst } from "./constants/backgroundsConstants";
import { WrpBdShadowConst } from "./constants/borderShadowConstants";
import {
    rowOverflowPrefix,
    columnsOrderPrefix,
} from "./constants/selectControlPrefixs";

import { rMinHConst, rMaxWConst, rColsNumber } from "./constants/rangeNames";

const {
    //
    softMinifyCssStrings,
    generateDimensionsControlStyles,
    generateBackgroundControlStyles,
    generateBorderShadowStyles,
    generateResponsiveRangeStyles,
    generateResponsiveSelectControlStyles,
    StyleComponent
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        isLayoutSelected,
        rowWidthName,
        rowHeightName,
        rowOverFlow,
        rowAli,
        clGp_Range,
        TABclGp_Range,
        MOBclGp_Range,
        [`${rColsNumber}Range`]: desktopColNumber,
        [`TAB${rColsNumber}Range`]: tabColNumber,
        [`MOB${rColsNumber}Range`]: mobileColNumber,
        [`${columnsOrderPrefix}Option`]: desktopColOrder,
        [`TAB${columnsOrderPrefix}Option`]: tabColOrder,
        [`MOB${columnsOrderPrefix}Option`]: mobileColOrder,
        classHook,
    } = attributes;


    // CSS/styling Codes Starts from Here

    // styles related to generateResponsiveSelectControlStyles start ⬇
    const {
        selectStylesDesktop: rOverflowStylesDesktop,
        selectStylesTab: rOverflowStylesTab,
        selectStylesMobile: rOverflowStylesMobile,
    } = generateResponsiveSelectControlStyles({
        controlName: rowOverflowPrefix,
        property: "overflow",
        attributes,
    });

    // styles related to generateResponsiveSelectControlStyles end

    // styles related to generateResponsiveRangeStyles start ⬇
    const {
        rangeStylesDesktop: wrapHeightDesktop,
        rangeStylesTab: wrapHeightTab,
        rangeStylesMobile: wrapHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: rMinHConst,
        property: "min-height",
        attributes,
    });

    const {
        rangeStylesDesktop: rowMaxWidthDesktop,
        rangeStylesTab: rowMaxWidthTab,
        rangeStylesMobile: rowMaxWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: rMaxWConst,
        property: "max-width",
        attributes,
        customUnit: "px",
    });
    // styles related to generateResponsiveRangeStyles end

    // styles related to generateDimensionsControlStyles start ⬇
    const {
        dimensionStylesDesktop: wrpMarginDesktop,
        dimensionStylesTab: wrpMarginTab,
        dimensionStylesMobile: wrpMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: rWrapMarginConst,
        styleFor: "margin",
        disableLeftRight: true,
    });

    const {
        dimensionStylesDesktop: wrpPaddingDesktop,
        dimensionStylesTab: wrpPaddingTab,
        dimensionStylesMobile: wrpPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: rWrapPaddingConst,
        styleFor: "padding",
    });

    // styles related to generateDimensionsControlStyles End

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

    // styles related to generateBackgroundControlStyles End

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

    // styles related to generateBorderShadowStyles End

    // all common (editor&frontEnd) css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStylesCommon = softMinifyCssStrings(`


		.${blockId}.eb-row-root-container > *{
			position:relative;
		}

		.${blockId}.eb-row-root-container{
			${rOverflowStylesDesktop}

			${wrpBackgroundStylesDesktop}
			${wrpMarginDesktop}
			${wrpPaddingDesktop}
			${wrpBdShdStyesDesktop}
			transition:all 0.5s, ${wrpBgTransitionStyle}, ${wrpBdShdTransitionStyle};
		}


		.${blockId}.eb-row-root-container:hover{
			${wrpHoverBackgroundStylesDesktop}
			${wrpBdShdStylesHoverDesktop}
		}

		.${blockId}.eb-row-root-container:before{
			${wrpOverlayStylesDesktop}
			transition:all 0.5s, ${wrpOvlTransitionStyle};

		}

		.${blockId}.eb-row-root-container:hover:before{
			${wrpHoverOverlayStylesDesktop}

		}

	`);

    // all common (editor&frontEnd) css styles for Tab in strings ⬇
    const tabAllStylesCommon = softMinifyCssStrings(`

		.${blockId}.eb-row-root-container{
			${rOverflowStylesTab}

			${wrpBackgroundStylesTab}
			${wrpMarginTab}
			${wrpPaddingTab}
			${wrpBdShdStyesTab}
		}

		.${blockId}.eb-row-root-container:hover{
			${wrpHoverBackgroundStylesTab}
			${wrpBdShdStylesHoverTab}
		}

		.${blockId}.eb-row-root-container:before{
			${wrpOverlayStylesTab}

		}

		.${blockId}.eb-row-root-container:hover:before{
			${wrpHoverOverlayStylesTab}

		}
	`);

    // all common (editor&frontEnd) css styles for Mobile in strings ⬇
    const mobileAllStylesCommon = softMinifyCssStrings(`
		.${blockId}.eb-row-root-container{
			${rOverflowStylesMobile}

			${wrpBackgroundStylesMobile}
			${wrpMarginMobile}
			${wrpPaddingMobile}
			${wrpBdShdStyesMobile}
		}

		.${blockId}.eb-row-root-container:hover{
			${wrpHoverBackgroundStylesMobile}
			${wrpBdShdStylesHoverMobile}
		}

		.${blockId}.eb-row-root-container:before{
			${wrpOverlayStylesMobile}

		}

		.${blockId}.eb-row-root-container:hover:before{
			${wrpHoverOverlayStylesMobile}

		}
	`);

    //
    const desktopAllStylesEditor = `
		${desktopAllStylesCommon}

		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner > .block-editor-inner-blocks {
			${rowWidthName === "boxed" ? rowMaxWidthDesktop : ""}

		}

		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner > .block-editor-inner-blocks > .block-editor-block-list__layout {
			${rowHeightName === "minH"
            ? wrapHeightDesktop
            : rowHeightName === "fit"
                ? `min-height:100vh;`
                : ""
        }
			${rowAli ? `align-items:${rowAli};` : ""}
			${clGp_Range ? `gap:${clGp_Range}px;` : ""}
			${desktopColOrder === "row-reverse"
            ? `flex-flow: row-reverse;`
            : "flex-flow: row;"
        }
			${rowHeightName === "equalH" ? `align-items: unset;` : ""}
		}

		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner > .block-editor-inner-blocks > .block-editor-block-list__layout > .eb-column-editor-wrap{
			box-sizing:border-box;
			${rowHeightName === "minH" ? wrapHeightDesktop : ""}
			${rowHeightName === "equalH"
            ? `
				display:flex;
				align-items: ${rowAli};
			`
            : ""
        }
		}
		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner > .block-editor-inner-blocks > .block-editor-block-list__layout > .eb-column-editor-wrap > .eb-parent-wrapper {
			${rowHeightName === "equalH" ? `width: 100%;` : ""}
		}

	`;

    const tabAllStylesEditor = `
		${tabAllStylesCommon}

		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner > .block-editor-inner-blocks {
			${rowWidthName === "boxed" ? rowMaxWidthTab : ""}
		}

		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner > .block-editor-inner-blocks > .block-editor-block-list__layout{
			flex-wrap: wrap;
			${rowHeightName === "minH"
            ? wrapHeightTab
            : rowHeightName === "fit"
                ? `min-height:100vh`
                : ""
        }
			${`gap:${TABclGp_Range}px;`}
			${tabColOrder === "row-reverse"
            ? `flex-flow: row-reverse; flex-wrap: wrap-reverse !important;`
            : `flex-flow: row; flex-wrap: wrap !important;`
        }
		}

		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner > .block-editor-inner-blocks > .block-editor-block-list__layout > .eb-column-editor-wrap{
			${`gap:${TABclGp_Range}px;`}
			${rowHeightName === "minH" ? wrapHeightTab || wrapHeightDesktop : ""}
		}
	`;

    const mobileAllStylesEditor = `
		${mobileAllStylesCommon}

		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner > .block-editor-inner-blocks {
			${rowWidthName === "boxed" ? rowMaxWidthMobile : ""}
		}

		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner > .block-editor-inner-blocks > .block-editor-block-list__layout{
			${rowHeightName === "minH"
            ? wrapHeightMobile
            : rowHeightName === "fit"
                ? `min-height:100vh`
                : ""
        }
			${`gap:${MOBclGp_Range}px;`}
			${mobileColOrder === "row-reverse"
            ? `flex-flow: row-reverse; flex-wrap: wrap-reverse !important;`
            : `flex-flow: row; flex-wrap: wrap !important;`
        }
		}

		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner > .block-editor-inner-blocks > .block-editor-block-list__layout > .eb-column-editor-wrap{
			${`gap:${MOBclGp_Range}px;`}
			${rowHeightName === "minH" ? wrapHeightMobile || wrapHeightDesktop : ""}
		}

	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStylesFrontEnd = softMinifyCssStrings(`
		${desktopAllStylesCommon}

		.${blockId}.eb-row-root-container > .eb-row-wrapper{
			${rowWidthName === "boxed" ? rowMaxWidthDesktop : ""}

		}

		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner {
			${rowHeightName === "minH"
            ? wrapHeightDesktop
            : rowHeightName === "fit"
                ? `min-height:100vh;`
                : ""
        }

			${rowAli ? `align-items:${rowAli};` : ""}
			${`gap:${clGp_Range}px;`}
			${desktopColOrder === "row-reverse"
            ? `flex-flow: row-reverse;`
            : "flex-flow: row;"
        }
			${rowHeightName === "equalH" ? `align-items: unset;` : ""}
		}

		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner > .eb-parent-wrapper{
			${rowHeightName === "minH" ? wrapHeightDesktop : ""}
			${rowHeightName === "equalH"
            ? `
				display:flex;
				align-items: ${rowAli};
			`
            : ""
        }
		}
		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner > .eb-parent-wrapper > * {
			${rowHeightName === "equalH" ? `width: 100%;` : ""}
		}

	`);

    // all css styles for Tab in strings ⬇
    const tabAllStylesFrontEnd = softMinifyCssStrings(`
		${tabAllStylesCommon}


		.${blockId}.eb-row-root-container > .eb-row-wrapper{
			${rowWidthName === "boxed" ? rowMaxWidthTab : ""}
		}

		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner {
			${rowHeightName === "minH"
            ? wrapHeightTab
            : rowHeightName === "fit"
                ? `min-height:100vh`
                : ""
        }
			${`gap: ${TABclGp_Range}px;`}
			${tabColOrder === "row-reverse"
            ? `flex-flow: row-reverse; flex-wrap: wrap-reverse !important;`
            : `flex-flow: row; flex-wrap: wrap !important;`
        }
		}

		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner > .eb-parent-wrapper{
			${`gap: ${TABclGp_Range}px;`}
			${rowHeightName === "minH" ? wrapHeightTab || wrapHeightDesktop : ""}
		}

	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStylesFrontEnd = softMinifyCssStrings(`
		${mobileAllStylesCommon}

		.${blockId}.eb-row-root-container > .eb-row-wrapper{
			${rowWidthName === "boxed" ? rowMaxWidthMobile : ""}
		}

		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner {
			${rowHeightName === "minH"
            ? wrapHeightMobile
            : rowHeightName === "fit"
                ? `min-height:100vh`
                : ""
        }
			${`gap: ${MOBclGp_Range}px;`}

			${mobileColOrder === "row-reverse"
            ? `flex-flow: row-reverse; flex-wrap: wrap-reverse !important;`
            : `flex-flow: row; flex-wrap: wrap !important;`
        }
		}

		.${blockId}.eb-row-root-container > .eb-row-wrapper > .eb-row-inner > .eb-parent-wrapper{
			${`gap: ${MOBclGp_Range}px;`}
			${rowHeightName === "minH" ? wrapHeightMobile || wrapHeightDesktop : ""}
		}

	`);

    return (
        <>
            <StyleComponent
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyles={desktopAllStylesFrontEnd}
                tabAllStyles={tabAllStylesFrontEnd}
                mobileAllStyles={mobileAllStylesFrontEnd}
                editorDesktopStyles={desktopAllStylesEditor}
                editorTabStyles={tabAllStylesEditor}
                editorMobileStyles={mobileAllStylesEditor}
                blockName={name}
            />
        </>
    );
}
