import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    ICON_SIZE,
    BORDER,
    BORDER_WIDTH,
} from "./constants";

const {
    softMinifyCssStrings,
    generateTypographyStyles,
    generateResponsiveRangeStyles,
    generateDimensionsControlStyles,
    generateBorderShadowStyles,
    generateBackgroundControlStyles,
    StyleComponent
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        resOption,
        blockMeta,
        blockId,
        iconAlign,
        iconPadding,
        iconPrimaryColor,
        iconPrimaryHoverColor,
        iconSecondaryColor,
        iconSecondaryHoverColor,
    } = attributes;

    const {
        dimensionStylesDesktop: wrapperMarginDesktop,
        dimensionStylesTab: wrapperMarginTab,
        dimensionStylesMobile: wrapperMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_MARGIN,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: wrapperPaddingDesktop,
        dimensionStylesTab: wrapperPaddingTab,
        dimensionStylesMobile: wrapperPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_PADDING,
        styleFor: "padding",
        attributes,
    });

    const {
        backgroundStylesDesktop: wrapperBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: wrapperHoverBackgroundStylesDesktop,
        backgroundStylesTab: wrapperBackgroundStylesTab,
        hoverBackgroundStylesTab: wrapperHoverBackgroundStylesTab,
        backgroundStylesMobile: wrapperBackgroundStylesMobile,
        hoverBackgroundStylesMobile: wrapperHoverBackgroundStylesMobile,
        overlayStylesDesktop: wrapperOverlayStylesDesktop,
        hoverOverlayStylesDesktop: wrapperHoverOverlayStylesDesktop,
        overlayStylesTab: wrapperOverlayStylesTab,
        hoverOverlayStylesTab: wrapperHoverOverlayStylesTab,
        overlayStylesMobile: wrapperOverlayStylesMobile,
        hoverOverlayStylesMobile: wrapperHoverOverlayStylesMobile,
        bgTransitionStyle: wrapperBgTransitionStyle,
        ovlTransitionStyle: wrapperOvlTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: WRAPPER_BG,
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
    });

    // icon size
    const {
        rangeStylesDesktop: iconSizeDesktop,
        rangeStylesTab: iconSizeTab,
        rangeStylesMobile: iconSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: ICON_SIZE,
        property: "font-size",
        attributes,
    });

    const {
        dimensionStylesDesktop: iconBorderDesktop,
        dimensionStylesTab: iconBorderTab,
        dimensionStylesMobile: iconBorderMobile,
    } = generateDimensionsControlStyles({
        controlName: BORDER,
        styleFor: "border-radius",
        attributes,
    });

    const {
        dimensionStylesDesktop: iconBorderWidthDesktop,
        dimensionStylesTab: iconBorderWidthTab,
        dimensionStylesMobile: iconBorderWidthMobile,
    } = generateDimensionsControlStyles({
        controlName: BORDER_WIDTH,
        styleFor: "border",
        attributes,
    });

    // all desktop styls start
    // Desktop Wrapper
    const desktopWrapper = `
		.${blockId}.eb-icon-wrapper {
            text-align: ${iconAlign};
			${wrapperMarginDesktop}
			${wrapperPaddingDesktop}
			${wrapperBDShadowDesktop}
			${wrapperBackgroundStylesDesktop}
			transition:${wrapperBgTransitionStyle}, ${wrapperBDShadowTransition};
		}

		.${blockId}.eb-icon-wrapper:hover {
			${wrapperBDShadowHoverDesktop}
		}
	`;

    const desktopIcon = `
        .${blockId}.eb-icon-wrapper.eb-icon-view-framed .eb-icon-container,
        .${blockId}.eb-icon-wrapper.eb-icon-view-default .eb-icon-container {
            ${iconPrimaryColor ? `color: ${iconPrimaryColor};` : ""}

        }
        .${blockId}.eb-icon-wrapper.eb-icon-view-framed .eb-icon-container {
             ${iconSecondaryColor
            ? `background-color: ${iconSecondaryColor};`
            : ""
        }
             ${iconPrimaryColor ? `border-color: ${iconPrimaryColor};` : ""}
        }
        .${blockId}.eb-icon-wrapper.eb-icon-view-framed .eb-icon-container:hover {
             ${iconPrimaryHoverColor ? `color: ${iconPrimaryHoverColor};` : ""}
             ${iconPrimaryHoverColor
            ? `border-color: ${iconPrimaryHoverColor};`
            : ""
        }
             ${iconSecondaryHoverColor
            ? `background-color: ${iconSecondaryHoverColor};`
            : ""
        }
        }
        .${blockId}.eb-icon-wrapper.eb-icon-view-stacked .eb-icon-container {
            ${iconPrimaryColor ? `background-color: ${iconPrimaryColor};` : ""}
            ${iconSecondaryColor ? `color: ${iconSecondaryColor};` : ""}
        }

        .${blockId}.eb-icon-wrapper.eb-icon-view-stacked .eb-icon-container:hover {
            ${iconPrimaryHoverColor
            ? `background-color: ${iconPrimaryHoverColor};`
            : ""
        }
            ${iconSecondaryHoverColor
            ? `color: ${iconSecondaryHoverColor};`
            : ""
        }
        }

        .${blockId}.eb-icon-wrapper .eb-icon-container {
            ${iconSizeDesktop}
            ${iconPadding ? `padding: ${iconPadding}px;` : ""}
            ${iconBorderDesktop}
            ${iconBorderWidthDesktop}
         }
    `;

    // ALL TAB Styles
    // tab Wrapper
    const tabWrapper = `
		.${blockId}.eb-icon-wrapper{
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${wrapperBDShadowTab}
			${wrapperBackgroundStylesTab}
		}

		.${blockId}.eb-icon-wrapper:hover {
			${wrapperBDShadowHoverTab}
		}
	`;

    const tabIcon = `
        .${blockId}.eb-icon-wrapper .eb-icon-container {
            ${iconSizeTab}
            ${iconBorderTab}
            ${iconBorderWidthTab}
        }
    `;

    // ALL MOBILE Styles
    // mobile Wrapper
    const mobileWrapper = `
        .eb-parent-${blockId} {
            line-height: 0;
        }

		.${blockId}.eb-icon-wrapper {
			${wrapperMarginMobile}
			${wrapperPaddingMobile}
			${wrapperBDShadowMobile}
			${wrapperBackgroundStylesMobile}
		}

		.${blockId}.eb-icon-wrapper:hover {
			${wrapperBDShadowHoverMobile}
		}
	`;

    const mobileIcon = `
        .${blockId}.eb-icon-wrapper .eb-icon-container {
            ${iconSizeMobile}
            ${iconBorderMobile}
            ${iconBorderWidthMobile}
        }
    `;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    // all desktop
    const desktopAllStyles = softMinifyCssStrings(`
		${desktopWrapper}
        ${desktopIcon}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${tabWrapper}
        ${tabIcon}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${mobileWrapper}
        ${mobileIcon}
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
