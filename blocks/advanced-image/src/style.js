import { useEffect } from "@wordpress/element";
import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    IMAGE_WIDTH,
    IMAGE_HEIGHT,
    IMAGE_BORDER_SHADOW,
    CAPTION_MARGIN,
    CAPTION_PADDING,
    CAPTION_TYPOGRAPHY,
    CAPTION_WIDTH,
    TEXT_ALIGNMENT,
    IMAGE_ALIGNMENT,
} from "./constants";

/**
 * External depencencies
 */
const {
    softMinifyCssStrings,
    generateTypographyStyles,
    generateDimensionsControlStyles,
    generateBorderShadowStyles,
    generateResponsiveRangeStyles,
    generateBackgroundControlStyles,
    generateResponsiveAlignStyles,
    StyleComponent
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        resOption,
        blockId,
        blockMeta,
        image,
        displayCaption,
        captionColor,
        captionBGColor,
        complexStyle,
        autoFit,
        fitStyles,
        autoHeight,
    } = attributes;

    // Get only urls for Lightbox
    let urls = image.url;
    // image size
    useEffect(() => {
        if (urls && imageWidthDesktop.length == 0) {
            setAttributes({
                widthRange: image.width,
                widthUnit: "px",
                heightRange: image.height,
                heightUnit: "px",
            });
        }
    }, [urls]);

    /**
     * CSS/styling Codes Starts from Here
     */

    // Caption Typography
    const {
        typoStylesDesktop: captionTypographyDesktop,
        typoStylesTab: captionTypographyTab,
        typoStylesMobile: captionTypographyMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: CAPTION_TYPOGRAPHY,
        defaultFontSize: 13,
    });

    /* Wrapper Margin */
    const {
        dimensionStylesDesktop: wrapperMarginDesktop,
        dimensionStylesTab: wrapperMarginTab,
        dimensionStylesMobile: wrapperMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_MARGIN,
        styleFor: "margin",
        attributes,
    });

    /* Wrapper Padding */
    const {
        dimensionStylesDesktop: wrapperPaddingDesktop,
        dimensionStylesTab: wrapperPaddingTab,
        dimensionStylesMobile: wrapperPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_PADDING,
        styleFor: "padding",
        attributes,
    });

    /* Caption Margin */
    const {
        dimensionStylesDesktop: captionMarginDesktop,
        dimensionStylesTab: captionMarginTab,
        dimensionStylesMobile: captionMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: CAPTION_MARGIN,
        styleFor: "margin",
        attributes,
    });

    /* Caption Padding */
    const {
        dimensionStylesDesktop: captionPaddingDesktop,
        dimensionStylesTab: captionPaddingTab,
        dimensionStylesMobile: captionPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: CAPTION_PADDING,
        styleFor: "padding",
        attributes,
    });

    // range controller Separator Line Width
    const {
        rangeStylesDesktop: imageWidthDesktop,
        rangeStylesTab: imageWidthTab,
        rangeStylesMobile: imageWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: IMAGE_WIDTH,
        property: "",
        attributes,
    });

    const {
        alignStylesDesktop: imageAlignDesktop,
        alignStylesTab: imageAlignTab,
        alignStylesMobile: imageAlignMobile,
    } = generateResponsiveAlignStyles({
        controlName: IMAGE_ALIGNMENT,
        property: "margin",
        attributes,
    });

    const {
        alignStylesDesktop: textAlignDesktop,
        alignStylesTab: textAlignTab,
        alignStylesMobile: textAlignMobile,
    } = generateResponsiveAlignStyles({
        controlName: TEXT_ALIGNMENT,
        property: "text-align",
        attributes,
    });

    // range controller Separator Line Width
    const {
        rangeStylesDesktop: imageHeightDesktop,
        rangeStylesTab: imageHeightTab,
        rangeStylesMobile: imageHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: IMAGE_HEIGHT,
        property: "",
        attributes,
    });

    // range controller Separator Line Grid Column Margin Bottom
    const {
        rangeStylesDesktop: captionWidthDesktop,
        rangeStylesTab: captionWidthTab,
        rangeStylesMobile: captionWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: CAPTION_WIDTH,
        property: "width",
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

    // generateBorderShadowStyles for Wrapper ⬇
    const {
        styesDesktop: wrapperBDShadowDesktop,
        styesTab: wrapperBDShadowTab,
        styesMobile: wrapperBDShadowMobile,
        stylesHoverDesktop: wrapperBDShadowHoverDesktop,
        stylesHoverTab: wrapperBDShadowHoverTab,
        stylesHoverMobile: wrapperBDShadowHoverMobile,
        transitionStyle: wrapperBDShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: WRAPPER_BORDER_SHADOW,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    // generateBorderShadowStyles for Images ⬇
    const {
        styesDesktop: imageBDShadowDesktop,
        styesTab: imageBDShadowTab,
        styesMobile: imageBDShadowMobile,
        stylesHoverDesktop: imageBDShadowHoverDesktop,
        stylesHoverTab: imageBDShadowHoverTab,
        stylesHoverMobile: imageBDShadowHoverMobile,
        transitionStyle: imageBDShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: IMAGE_BORDER_SHADOW,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    // wrapper styles css in strings ⬇
    const wrapperStylesDesktop = `
		.eb-advanced-image-wrapper.${blockId}{
			${wrapperMarginDesktop}
			${wrapperPaddingDesktop}
			${wrapperBDShadowDesktop}
			${wrapperBackgroundStylesDesktop}
			transition:${wrapperBgTransitionStyle}, ${wrapperBDShadowTransitionStyle};
		}
		.eb-advanced-image-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverDesktop}
			${wrapperHoverBackgroundStylesDesktop}
		}
	`;
    const wrapperStylesTab = `
		.eb-advanced-image-wrapper.${blockId}{
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${wrapperBDShadowTab}
			${wrapperBackgroundStylesTab}
		}
		.eb-advanced-image-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverTab}
			${wrapperHoverBackgroundStylesTab}
		}
	`;
    const wrapperStylesMobile = `
		.eb-advanced-image-wrapper.${blockId}{
			${wrapperMarginMobile}
			${wrapperPaddingMobile}
			${wrapperBDShadowMobile}
			${wrapperBackgroundStylesMobile}
		}
		.eb-advanced-image-wrapper.${blockId}:hover {
			${wrapperBDShadowHoverMobile}
			${wrapperHoverBackgroundStylesMobile}
		}
	`;

    const imageStylesDesktop = `
		.eb-advanced-image-wrapper.${blockId} .image-wrapper{
			width${imageWidthDesktop};
			${autoHeight ? `height: auto;` : `height${imageHeightDesktop}`};
			${!complexStyle ? imageBDShadowDesktop : ""}
			transition: transform 0.5s, ${imageBDShadowTransitionStyle};
			${imageAlignDesktop}
		}

		.eb-advanced-image-wrapper.${blockId} .image-wrapper img{
			transition: transform 0.5s, ${imageBDShadowTransitionStyle};
			${autoFit ? `object-fit: ${fitStyles};` : ""}
            ${imageWidthDesktop ? 'width: 100%' : ''}
		}

		.eb-advanced-image-wrapper.${blockId} figcaption{
			color: ${captionColor};
			${textAlignDesktop}
			${captionMarginDesktop}
			${captionPaddingDesktop}
			${captionTypographyDesktop}
			${captionWidthDesktop}
		}
		.eb-advanced-image-wrapper.${blockId}.caption-style-1 figcaption {
			background: ${captionBGColor};
		}
		.eb-advanced-image-wrapper.${blockId} .image-wrapper:hover {
			${!complexStyle ? imageBDShadowHoverDesktop : ""}
		}
		${!displayCaption
            ? ` .eb-advanced-image-wrapper.${blockId} figcaption {display:none;} `
            : ""
        }
	`;

    const imageStylesTab = `
		.eb-advanced-image-wrapper.${blockId} .image-wrapper{
			width${imageWidthTab || imageWidthDesktop};
			height${imageHeightTab || imageHeightDesktop};
            ${imageAlignTab}
		}
		.eb-advanced-image-wrapper.${blockId} .image-wrapper img{
			${!complexStyle ? imageBDShadowTab : ""}
            ${imageWidthTab ? 'width: 100%' : ''}
		}
		.eb-advanced-image-wrapper.${blockId} .image-wrapper:hover {
			${!complexStyle ? imageBDShadowHoverTab : ""}
		}
		.eb-advanced-image-wrapper.${blockId} figcaption {
            ${textAlignTab}
			${captionMarginTab}
			${captionPaddingTab}
			${captionTypographyTab}
			${captionWidthTab}
		}
	`;

    const imageStylesMobile = `
        .eb-advanced-image-wrapper.${blockId} .image-wrapper{
			width${imageWidthMobile || imageWidthDesktop};
			height${imageHeightMobile || imageHeightDesktop};
            ${imageAlignMobile}
		}
		.eb-advanced-image-wrapper.${blockId} .image-wrapper img{
			${!complexStyle ? imageBDShadowMobile : ""}
            ${imageWidthMobile ? 'width: 100%' : ''}
		}
		.eb-advanced-image-wrapper.${blockId} .image-wrapper:hover {
			${!complexStyle ? imageBDShadowHoverMobile : ""}
		}
		.eb-advanced-image-wrapper.${blockId} .image-wrapper figcaption {
			${textAlignMobile}
            ${captionMarginMobile}
			${captionPaddingMobile}
			${captionTypographyMobile}
			${captionWidthMobile}
		}
	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
		${imageStylesDesktop}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
		${imageStylesTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
		${imageStylesMobile}
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
