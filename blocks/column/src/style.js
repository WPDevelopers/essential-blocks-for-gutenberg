/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { useEffect, useRef, useState } from "@wordpress/element";
import { select, useSelect, dispatch } from "@wordpress/data";

//
const {
    //
    softMinifyCssStrings,
    generateDimensionsControlStyles,
    generateBackgroundControlStyles,
    generateResponsiveRangeStyles,
    generateBorderShadowStyles,
    generateResponsiveSelectControlStyles,
    StyleComponent
} = window.EBControls;

import {
    wrapperWidth,
    columnOrderPrefix,
} from "./constants/rangeNames";

import {
    cWrapMarginConst,
    cWrapPaddingConst,
} from "./constants/dimensionsNames";
import { WrpBgConst } from "./constants/backgroundsConstants";
import { WrpBdShadowConst } from "./constants/borderShadowConstants";
import { rowOverflowPrefix } from "./constants/selectControlPrefixs";

export default function Style(props) {
    const {
        attributes,
        setAttributes,
        name,
        isColumnOrder_Custom_Desktop,
        isColumnOrder_Custom_Tab,
        isColumnOrder_Custom_Mobile,
        columnGap,
        columnNumber
    } = props;
    const {
        blockId,
        [`${wrapperWidth}Range`]: desktopRange,
        [`TAB${wrapperWidth}Range`]: tabWidthRange,
        [`MOB${wrapperWidth}Range`]: mobileWidthRange,
        [`${columnOrderPrefix}Range`]: columnOrderDesktop,
        [`TAB${columnOrderPrefix}Range`]: columnOrderTab,
        [`MOB${columnOrderPrefix}Range`]: columnOrderMobile,
        colAli,
    } = attributes;

    //Calculate Gap for Responsiveness
    const calculateGap = (gap = columnGap.desktop, columnNumber) => {

        let columnGap = columnNumber;
        if (columnGap > 1) {
            columnGap = columnNumber - 1;
        }
        return (gap * columnGap) / columnNumber;
    }

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
        rangeStylesDesktop: wrapWidthDesktop,
        rangeStylesTab: wrapWidthTab,
        rangeStylesMobile: wrapWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: wrapperWidth,
        customUnit: "%",
        property: "width",
        attributes,
    });

    // styles related to generateResponsiveRangeStyles end

    // styles related to generateDimensionsControlStyles start ⬇
    const {
        dimensionStylesDesktop: wrpMarginDesktop,
        dimensionStylesTab: wrpMarginTab,
        dimensionStylesMobile: wrpMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: cWrapMarginConst,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: wrpPaddingDesktop,
        dimensionStylesTab: wrpPaddingTab,
        dimensionStylesMobile: wrpPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: cWrapPaddingConst,
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

    //
    // CSS/styling Codes Starts from Here

    // all common (editor&frontEnd) css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStylesCommon = softMinifyCssStrings(`
		.${blockId}.eb-column-wrapper > .eb-column-inner > *{
			position:relative;
		}

		.${blockId}.eb-column-wrapper > .eb-column-inner:before{
			${wrpOverlayStylesDesktop}
			transition: all .5s, ${wrpOvlTransitionStyle};
		}

		.${blockId}.eb-column-wrapper > .eb-column-inner:hover:before{
			${wrpHoverOverlayStylesDesktop}
		}
	`);

    // all common (editor&frontEnd) css styles for Tab in strings ⬇
    const tabAllStylesCommon = softMinifyCssStrings(`
		.${blockId}.eb-column-wrapper > .eb-column-inner:before{
			${wrpOverlayStylesTab}
		}

		.${blockId}.eb-column-wrapper > .eb-column-inner:hover:before{
			${wrpHoverOverlayStylesTab}
		}
	`);

    // all common (editor&frontEnd) css styles for Mobile in strings ⬇
    const mobileAllStylesCommon = softMinifyCssStrings(`
		.${blockId}.eb-column-wrapper > .eb-column-inner:before{
			${wrpOverlayStylesMobile}
		}

		.${blockId}.eb-column-wrapper > .eb-column-inner:hover:before{
			${wrpHoverOverlayStylesMobile}
		}
	`);

    //
    const desktopAllStylesEditor = `
		${desktopAllStylesCommon}
		.eb-row-wrapper .eb-guten-block-main-parent-wrapper.eb-column-editor-wrap.eb-column-editor-wrap-${blockId}{
			${colAli ? `align-self:${colAli} !important;` : ""}
			${wrapWidthDesktop}
			${!isColumnOrder_Custom_Desktop || columnOrderDesktop === undefined ? "order: unset;" : `order: ${columnOrderDesktop};`}
			${rOverflowStylesDesktop}

			${wrpMarginDesktop}
			${wrpPaddingDesktop}
			${wrpBackgroundStylesDesktop}
			${wrpBdShdStyesDesktop}
			transition: all .5s, ${wrpBgTransitionStyle}, ${wrpBdShdTransitionStyle};
		}
		.eb-row-wrapper .eb-guten-block-main-parent-wrapper.eb-column-editor-wrap.eb-column-editor-wrap-${blockId}:hover{
			${wrpHoverBackgroundStylesDesktop}
			${wrpBdShdStylesHoverDesktop}
		}
	`;

    const tabAllStylesEditor = `
		${tabAllStylesCommon}
		.eb-row-wrapper .eb-guten-block-main-parent-wrapper.eb-column-editor-wrap.eb-column-editor-wrap-${blockId}{
			width: calc(${tabWidthRange ? tabWidthRange : (desktopRange !== 100 ? 50 : 100)}% - ${calculateGap(columnGap.tab, columnNumber.tab)}px);

			${!isColumnOrder_Custom_Tab || columnOrderTab === undefined ? "order: unset;" : `order: ${columnOrderTab};`}
			${rOverflowStylesTab}

			${wrpMarginTab}
			${wrpPaddingTab}
			${wrpBackgroundStylesTab}
			${wrpBdShdStyesTab}
		}
		.eb-row-wrapper .eb-guten-block-main-parent-wrapper.eb-column-editor-wrap.eb-column-editor-wrap-${blockId}:hover{
			${wrpHoverBackgroundStylesTab}
			${wrpBdShdStylesHoverTab}
		}
	`;

    const mobileAllStylesEditor = `
		${mobileAllStylesCommon}
		.eb-row-wrapper .eb-guten-block-main-parent-wrapper.eb-column-editor-wrap.eb-column-editor-wrap-${blockId}{
			width: calc(${mobileWidthRange ? mobileWidthRange : 100}% - ${calculateGap(columnGap.mobile, columnNumber.mobile)}px);

			${!isColumnOrder_Custom_Mobile || columnOrderMobile === undefined ? "order: unset;" : `order: ${columnOrderMobile};`}
			${rOverflowStylesMobile}

			${wrpMarginMobile}
			${wrpPaddingMobile}
			${wrpBackgroundStylesMobile}
			${wrpBdShdStyesMobile}
		}
		.eb-row-wrapper .eb-guten-block-main-parent-wrapper.eb-column-editor-wrap.eb-column-editor-wrap-${blockId}:hover{
			${wrpHoverBackgroundStylesMobile}
			${wrpBdShdStylesHoverMobile}
		}
	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStylesFrontEnd = softMinifyCssStrings(`
		${desktopAllStylesCommon}

		.eb-parent-${blockId}{
			${colAli ? `align-self:${colAli} !important;` : ""}
			${wrapWidthDesktop}

			${!isColumnOrder_Custom_Desktop || columnOrderDesktop === undefined ? "order: unset;" : `order: ${columnOrderDesktop};`}
			${rOverflowStylesDesktop}

			${wrpMarginDesktop}
			${wrpPaddingDesktop}
			${wrpBackgroundStylesDesktop}
			${wrpBdShdStyesDesktop}
			transition: all .5s, ${wrpBgTransitionStyle}, ${wrpBdShdTransitionStyle};
		}
		.eb-parent-${blockId}:hover{
			${wrpHoverBackgroundStylesDesktop}
			${wrpBdShdStylesHoverDesktop}
		}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStylesFrontEnd = softMinifyCssStrings(`
		${tabAllStylesCommon}

		.eb-parent-${blockId}{
			width: calc(${tabWidthRange ? tabWidthRange : (desktopRange !== 100 ? 50 : 100)}% - ${calculateGap(columnGap.tab, columnNumber.tab)}px);

			${!isColumnOrder_Custom_Tab || columnOrderTab === undefined ? "order: unset;" : `order: ${columnOrderTab};`}
			${rOverflowStylesTab}

			${wrpMarginTab}
			${wrpPaddingTab}
			${wrpBackgroundStylesTab}
			${wrpBdShdStyesTab}
		}
		.eb-parent-${blockId}:hover{
			${wrpHoverBackgroundStylesTab}
			${wrpBdShdStylesHoverTab}
		}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStylesFrontEnd = softMinifyCssStrings(`
		${mobileAllStylesCommon}

		.eb-parent-${blockId}{
			width: calc(${mobileWidthRange ? mobileWidthRange : 100}% - ${calculateGap(columnGap.mobile, columnNumber.mobile)}px);

			${!isColumnOrder_Custom_Mobile || columnOrderMobile === undefined ? "order: unset;" : `order: ${columnOrderMobile};`}
			${rOverflowStylesMobile}

			${wrpMarginMobile}
			${wrpPaddingMobile}
			${wrpBackgroundStylesMobile}
			${wrpBdShdStyesMobile}
		}
		.eb-parent-${blockId}:hover{
			${wrpHoverBackgroundStylesMobile}
			${wrpBdShdStylesHoverMobile}
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
