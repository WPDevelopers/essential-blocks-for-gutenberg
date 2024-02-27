/**
 * WordPress dependencies
 */
import { useEffect } from "@wordpress/element";

import {
    SHAPE_DIVIDER,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BG,
    WRAPPER_BORDER_SHADOW,
} from "./constants";

const {
    softMinifyCssStrings,
    generateShapeDividerStyles,
    generateDimensionsControlStyles,
    generateBackgroundControlStyles,
    generateBorderShadowStyles,
    StyleComponent
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        shapeDividerPosition,
    } = attributes;

    // shape divider styles
    const {
        desktopShapeStyle: shapeDividerDesktop,
        tabShapeStyle: shapeDividerTab,
        mobShapeStyle: shapeDividerMobile,
    } = generateShapeDividerStyles({
        controlName: SHAPE_DIVIDER,
        position: shapeDividerPosition,
        attributes,
    });

    const {
        dimensionStylesDesktop: wrapperMarginStylesDesktop,
        dimensionStylesTab: wrapperMarginStylesTab,
        dimensionStylesMobile: wrapperMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_MARGIN,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: wrapperPaddingStylesDesktop,
        dimensionStylesTab: wrapperPaddingStylesTab,
        dimensionStylesMobile: wrapperPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_PADDING,
        styleFor: "padding",
        attributes,
    });

    //Generate Background
    const {
        backgroundStylesDesktop: wrapperBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: wrapperHoverBackgroundStylesDesktop,
        backgroundStylesTab: wrapperBackgroundStylesTab,
        hoverBackgroundStylesTab: wrapperHoverBackgroundStylesTab,
        backgroundStylesMobile: wrapperBackgroundStylesMobile,
        hoverBackgroundStylesMobile: wrapperHoverBackgroundStylesMobile,
        bgTransitionStyle: wrapperBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: WRAPPER_BG,
        noOverlay: true,
    });

    const {
        styesDesktop: wrapperBDShadowDesktop,
        styesTab: wrapperBDShadowTab,
        styesMobile: wrapperBDShadowMobile,
        stylesHoverDesktop: wrapperBDShadowHoverDesktop,
        stylesHoverTab: wrapperBDShadowHoverTab,
        stylesHoverMobile: wrapperBDShadowHoverMobile,
        transitionStyle: wrapperBDShadowTransition,
    } = generateBorderShadowStyles({
        controlName: WRAPPER_BORDER_SHADOW,
        attributes,
        // noShadow: true,
    });

    // wrapper styles css in strings ⬇
    const wrapperStylesDesktop = `
        .eb-shape-divider-wrapper.${blockId}{
    		display: block;
    		position: relative;
    		${wrapperMarginStylesDesktop}
    		${wrapperPaddingStylesDesktop}
    		${wrapperBackgroundStylesDesktop}
    		${wrapperBDShadowDesktop}
    		transition: ${wrapperBgTransitionStyle}, ${wrapperBDShadowTransition};
    	}
    	.eb-shape-divider-wrapper.${blockId}:hover {
    		${wrapperHoverBackgroundStylesDesktop}
    		${wrapperBDShadowHoverDesktop}
    	}
    `;

    const wrapperStylesTab = `
    	.eb-shape-divider-wrapper.${blockId}{
    		${wrapperMarginStylesTab}
    		${wrapperPaddingStylesTab}
    		${wrapperBackgroundStylesTab}
    		${wrapperBDShadowTab}
    	}
    	.eb-shape-divider-wrapper.${blockId}:hover {
    		${wrapperHoverBackgroundStylesTab}
    		${wrapperBDShadowHoverTab}
    	}
    `;
    const wrapperStylesMobile = `
    	.eb-shape-divider-wrapper.${blockId}{
    		${wrapperMarginStylesMobile}
    		${wrapperPaddingStylesMobile}
    		${wrapperBackgroundStylesMobile}
    		${wrapperBDShadowMobile}
    	}
    	.eb-shape-divider-wrapper.${blockId}:hover {
    		${wrapperHoverBackgroundStylesMobile}
    		${wrapperBDShadowHoverMobile}
    	}
    `;

    const shapeDividerStyleDesktop = `
        .eb-shape-divider-wrapper.${blockId} .eb-shape-divider-bottom {
            z-index: unset;
        }
        ${shapeDividerDesktop}
    `;

    const shapeDividerStyleTab = `
        ${shapeDividerTab}
    `;

    const shapeDividerStyleMobile = `
        ${shapeDividerMobile}
    `;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
		${shapeDividerStyleDesktop}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
		${shapeDividerStyleTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
		${shapeDividerStyleMobile}
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
