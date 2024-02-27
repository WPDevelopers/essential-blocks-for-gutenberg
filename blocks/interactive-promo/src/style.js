import {
    wrapperMargin,
    wrapperPadding,
    imageBorderShadow,
    imageHeight,
    imageWidth,
} from "./constants";
import {
    typoPrefix_header,
    typoPrefix_content,
} from "./constants/typographyPrefixConstants";

const {
    softMinifyCssStrings,
    generateDimensionsControlStyles,
    generateBorderShadowStyles,
    generateTypographyStyles,
    generateResponsiveRangeStyles,
    StyleComponent
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        blockMeta,
        blockId,
        resOption,
        headerColor,
        contentColor,
        imageAlignment,
        isBackgroundGradient,
        backgroundColor,
        backgroundGradient,
        classHook,
    } = attributes;

    // wrapper styles css in strings
    const {
        dimensionStylesDesktop: wrapperMarginStylesDesktop,
        dimensionStylesTab: wrapperMarginStylesTab,
        dimensionStylesMobile: wrapperMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: wrapperMargin,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: wrapperPaddingStylesDesktop,
        dimensionStylesTab: wrapperPaddingStylesTab,
        dimensionStylesMobile: wrapperPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: wrapperPadding,
        styleFor: "padding",
        attributes,
    });

    //header typography
    const {
        typoStylesDesktop: headerTypoStylesDesktop,
        typoStylesTab: headerTypoStylesTab,
        typoStylesMobile: headerTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_header,
    });

    //Content typography
    const {
        typoStylesDesktop: contentTypoStylesDesktop,
        typoStylesTab: contentTypoStylesTab,
        typoStylesMobile: contentTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_content,
    });

    // image height
    const {
        rangeStylesDesktop: imageHeightDesktop,
        rangeStylesTab: imageHeightTab,
        rangeStylesMobile: imageHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: imageHeight,
        property: "height",
        attributes,
        customUnit: "px",
    });

    // image width
    const {
        rangeStylesDesktop: imageWidthDesktop,
        rangeStylesTab: imageWidthTab,
        rangeStylesMobile: imageWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: imageWidth,
        property: "max-width",
        attributes,
        customUnit: "px",
    });

    const {
        styesDesktop: imageBdShadowStyesDesktop,
        styesTab: imageBdShadowStyesTab,
        styesMobile: imageBdShadowStyesMobile,
        stylesHoverDesktop: imageBdShadowStylesHoverDesktop,
        stylesHoverTab: imageBdShadowStylesHoverTab,
        stylesHoverMobile: imageBdShadowStylesHoverMobile,
        transitionStyle: imageBdShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: imageBorderShadow,
        attributes,
    });

    const imageAlign =
        imageAlignment === "left"
            ? "margin: 0;"
            : imageAlignment === "right"
                ? "margin: 0 0 0 auto;"
                : "margin: 0 auto;";

    const desktopStyles = `
		.eb-interactive-promo-wrapper figure > figcaption {
			box-sizing: border-box;
		}

		.eb-interactive-promo-wrapper.${blockId} {
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
		}

		.eb-interactive-promo-wrapper.${blockId} .eb-interactive-promo-header {
			${headerTypoStylesDesktop}
			${headerColor ? `color: ${headerColor};` : ""}
		}

		.eb-interactive-promo-wrapper.${blockId} .eb-interactive-promo-content {
			${contentTypoStylesDesktop}
			color: ${contentColor};
		}

		.eb-interactive-promo-wrapper.${blockId} .eb-interactive-promo figure {
			${imageHeightDesktop.replace(/\D/g, "") ? imageHeightDesktop : "height: 100%;"}
			${imageWidthDesktop.replace(/\D/g, "") ? imageWidthDesktop : "max-width: 100%;"}
			${imageBdShadowStyesDesktop}
			${imageAlign}
			${isBackgroundGradient
            ? `background: ${backgroundGradient};`
            : backgroundColor
                ? `background: ${backgroundColor};`
                : ""
        }
			width: 100%;
			position: relative;
			overflow: hidden;
			transition: ${imageBdShadowTransitionStyle};
		}

		.eb-interactive-promo-wrapper.${blockId} .eb-interactive-promo:hover figure {
			${imageBdShadowStylesHoverDesktop}
		}

		.eb-interactive-promo-wrapper.${blockId} .eb-interactive-promo figure img {
			min-width: 100%;
			object-fit: cover;
		}
	`;
    const tabStyles = `
		.eb-interactive-promo-wrapper.${blockId} {
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
		}

		.eb-interactive-promo-wrapper.${blockId} .eb-interactive-promo-header {
			${headerTypoStylesTab}
		}

		.eb-interactive-promo-wrapper.${blockId} .eb-interactive-promo-content {
			${contentTypoStylesTab}
		}

		.eb-interactive-promo-wrapper.${blockId} .eb-interactive-promo figure {
			${imageHeightTab.replace(/\D/g, "") ? imageHeightTab : "height: 100%;"}
			${imageWidthTab.replace(/\D/g, "") ? imageWidthTab : "max-width: 100%;"}
			${imageBdShadowStyesTab}
		}

		.eb-interactive-promo-wrapper.${blockId} .eb-interactive-promo:hover figure {
			${imageBdShadowStylesHoverTab}
		}
	`;

    const mobileStyles = `
		.eb-interactive-promo-wrapper.${blockId} {
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}
		}

		.eb-interactive-promo-wrapper.${blockId} .eb-interactive-promo-header {
			${headerTypoStylesMobile}
		}

		.eb-interactive-promo-wrapper.${blockId} .eb-interactive-promo-content {
			${contentTypoStylesMobile}
		}

		.eb-interactive-promo-wrapper.${blockId} .eb-interactive-promo figure {
			${imageHeightMobile.replace(/\D/g, "") ? imageHeightMobile : "height: 100%;"}
			${imageWidthMobile.replace(/\D/g, "") ? imageWidthMobile : "max-width: 100%;"}
			${imageBdShadowStyesMobile}
		}

		.eb-interactive-promo-wrapper.${blockId} .eb-interactive-promo:hover figure {
			${imageBdShadowStylesHoverMobile}
		}
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
