/*
 * WordPress Dependencies
 */
import { __ } from "@wordpress/i18n";

import {
    WRAPPER_WIDTH,
    WRAPPER_BACKGROUND,
    WRAPPER_BORDER,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    SHAPE_DIVIDER_TOP,
    SHAPE_DIVIDER_BOTTOM,
    WRAPPER_HEIGHT,
} from "./constants";

const {
    softMinifyCssStrings,
    generateResponsiveRangeStyles,
    generateDimensionsControlStyles,
    generateBackgroundControlStyles,
    generateBorderShadowStyles,
    generateShapeDividerStyles,
    StyleComponent,
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;

    const {
        blockId,
        isWrapperWidth,
        useCustomHeight,
        contentAlign,
    } = attributes;

    // wrapper margin
    const {
        dimensionStylesDesktop: wrapperMarginDesktop,
        dimensionStylesTab: wrapperMarginTab,
        dimensionStylesMobile: wrapperMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_MARGIN,
        styleFor: "margin",
        attributes,
    });

    // wrapper padding
    const {
        dimensionStylesDesktop: wrapperPaddingDesktop,
        dimensionStylesTab: wrapperPaddingTab,
        dimensionStylesMobile: wrapperPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_PADDING,
        styleFor: "padding",
        attributes,
    });

    // wrapper background
    const {
        backgroundStylesDesktop,
        hoverBackgroundStylesDesktop,
        backgroundStylesTab,
        hoverBackgroundStylesTab,
        backgroundStylesMobile,
        hoverBackgroundStylesMobile,
        overlayStylesDesktop,
        hoverOverlayStylesDesktop,
        overlayStylesTab,
        hoverOverlayStylesTab,
        overlayStylesMobile,
        hoverOverlayStylesMobile,
        bgTransitionStyle,
        ovlTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: WRAPPER_BACKGROUND,
    });

    // wrapper border
    const {
        styesDesktop: bdShadowStyesDesktop,
        styesTab: bdShadowStyesTab,
        styesMobile: bdShadowStyesMobile,
        stylesHoverDesktop: bdShadowStylesHoverDesktop,
        stylesHoverTab: bdShadowStylesHoverTab,
        stylesHoverMobile: bdShadowStylesHoverMobile,
        transitionStyle: bdShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: WRAPPER_BORDER,
        attributes,
    });

    // wrapper max-width
    const {
        rangeStylesDesktop: wrapperWidthDesktop,
        rangeStylesTab: wrapperWidthTab,
        rangeStylesMobile: wrapperWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: WRAPPER_WIDTH,
        property: "width",
        attributes,
    });

    // wrapper width
    const {
        rangeStylesDesktop: wrapperHeightDesktop,
        rangeStylesTab: wrapperHeightTab,
        rangeStylesMobile: wrapperHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: WRAPPER_HEIGHT,
        property: "height",
        attributes,
    });

    // shape divider top styles
    const {
        desktopShapeStyle: shapeDividerTopDesktop,
        tabShapeStyle: shapeDividerTopTab,
        mobShapeStyle: shapeDividerTopMobile,
    } = generateShapeDividerStyles({
        controlName: SHAPE_DIVIDER_TOP,
        position: "top",
        attributes,
    });

    // shape divider styles
    const {
        desktopShapeStyle: shapeDividerBottomDesktop,
        tabShapeStyle: shapeDividerBottomTab,
        mobShapeStyle: shapeDividerBottomMobile,
    } = generateShapeDividerStyles({
        controlName: SHAPE_DIVIDER_BOTTOM,
        position: "bottom",
        attributes,
    });

    const contentHeightDesktop = `
        .wp-block .eb-parent-${blockId} {
            overflow-y: auto;
        }
        .eb-parent-${blockId} {
            display: flex !important;
            flex-wrap: wrap;
            ${wrapperHeightDesktop}
        }
        .eb-wrapper-outer.${blockId} {
            display: flex;
            align-items: ${contentAlign};
            justify-content: center;
            width: 100%;
        }

        .eb-wrapper-outer.${blockId} .eb-wrapper-inner {
            flex: 1;
        }
    `;

    const contentHeightTab = `
        .eb-parent-${blockId} {
            ${wrapperHeightTab}
        }
    `;

    const contentHeightMobile = `
        .eb-parent-${blockId} {
            ${wrapperHeightMobile}
        }
    `;

    const desktopStyles = `
        .eb-parent-${blockId} {
            position: relative;
        }
		.eb-wrapper-align-center {
			margin-right: auto !important;
			margin-left: auto !important;
		}

		.eb-wrapper-align-right {
			margin-left: auto !important;
		}

		.eb-wrapper-outer.${blockId} {
			${wrapperMarginDesktop}
			${wrapperPaddingDesktop}
			${backgroundStylesDesktop}
			${bdShadowStyesDesktop}
			${isWrapperWidth ? wrapperWidthDesktop : ""}
			max-width: 100%;
			transition: ${bgTransitionStyle}, ${bdShadowTransitionStyle};
		}

		.eb-wrapper-outer.${blockId} > .eb-wrapper-inner > .eb-wrapper-inner-blocks {
			${!isWrapperWidth ? wrapperWidthDesktop : ""}
			max-width: 100%;
			position: relative;
		}

		.eb-wrapper-outer.${blockId}:hover{
			${hoverBackgroundStylesDesktop}
			${bdShadowStylesHoverDesktop}
		}

		.eb-wrapper-outer.${blockId}:before{
			${overlayStylesDesktop}
			transition: ${ovlTransitionStyle};
		}

		.eb-wrapper-outer.${blockId}:hover:before{
			${hoverOverlayStylesDesktop}
		}
        ${shapeDividerTopDesktop}
        ${shapeDividerBottomDesktop}
        ${useCustomHeight ? contentHeightDesktop : ""}
	`;

    const tabStyles = `
		.eb-wrapper-outer.${blockId} {
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${backgroundStylesTab}
			${bdShadowStyesTab}
            ${isWrapperWidth ? wrapperWidthTab : ""}
		}

		.eb-wrapper-outer.${blockId} > .eb-wrapper-inner > .eb-wrapper-inner-blocks {
			${!isWrapperWidth ? wrapperWidthTab : ""}
		}

		.eb-wrapper-outer.${blockId}:hover{
			${hoverBackgroundStylesTab}
			${bdShadowStylesHoverTab}
		}

		.eb-wrapper-outer.${blockId}:before{
			${overlayStylesTab}
		}

		.eb-wrapper-outer.${blockId}:hover:before{
			${hoverOverlayStylesTab}
		}
         ${shapeDividerTopTab}
         ${shapeDividerBottomTab}
         ${useCustomHeight ? contentHeightTab : ""}
	`;

    const mobileStyles = `
		.eb-wrapper-outer.${blockId} {
			${wrapperMarginMobile}
			${wrapperPaddingMobile}
			${backgroundStylesMobile}
			${bdShadowStyesMobile}
            ${isWrapperWidth ? wrapperWidthMobile : ""}
		}

		.eb-wrapper-outer.${blockId} > .eb-wrapper-inner > .eb-wrapper-inner-blocks {
			${!isWrapperWidth ? wrapperWidthMobile : ""}
		}

		.eb-wrapper-outer.${blockId}:hover{
			${hoverBackgroundStylesMobile}
			${bdShadowStylesHoverMobile}
		}

		.eb-wrapper-outer.${blockId}:before{
			${overlayStylesMobile}
		}

		.eb-wrapper-outer.${blockId}:hover:before{
			${hoverOverlayStylesMobile}
		}
         ${shapeDividerTopMobile}
         ${shapeDividerBottomMobile}
         ${useCustomHeight ? contentHeightMobile : ""}
	`;
    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${desktopStyles}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${tabStyles}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${mobileStyles}
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
