/**
 * WordPress dependencies
 */
import { useEffect } from "@wordpress/element";

import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
} from "./constants";

import {
    typoPrefix_original_price,
    typoPrefix_pricing_period,
    typoPrefix_saleprice,
    typoPrefix_sale_pricing_period,
} from "./constants/typographyPrefixConstants";

const {
    softMinifyCssStrings,
    generateTypographyStyles,
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
        priceTextColor,
        priceAlignment,
        pricingPeriodTextColor,
        salePriceTextColor,
        salePricingPeriodTextColor,
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

    const {
        typoStylesDesktop: orginalPriceTypoStylesDesktop,
        typoStylesTab: orginalPriceTypoStylesTab,
        typoStylesMobile: orginalPriceTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_original_price,
    });

    const {
        typoStylesDesktop: pricePeriodTypoStylesDesktop,
        typoStylesTab: pricePeriodPriceTypoStylesTab,
        typoStylesMobile: pricePeriodPriceTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_pricing_period,
    });

    const {
        typoStylesDesktop: salePriceTypoStylesDesktop,
        typoStylesTab: salePricePriceTypoStylesTab,
        typoStylesMobile: salePricePriceTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_saleprice,
    });

    const {
        typoStylesDesktop: salePricePeriodTypoStylesDesktop,
        typoStylesTab: salePricePeriodPriceTypoStylesTab,
        typoStylesMobile: salePricePeriodPriceTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_sale_pricing_period,
    });

    // all desktop styls start
    // Desktop Wrapper
    const desktopWrapper = `
		.${blockId}.eb-price-wrapper {
			${wrapperMarginDesktop}
			${wrapperPaddingDesktop}
			${wrapperBDShadowDesktop}
			${wrapperBackgroundStylesDesktop}
			transition:${wrapperBgTransitionStyle}, ${wrapperBDShadowTransition};
		}

        .${blockId}.eb-price-wrapper .eb-price-container {
            text-align: ${priceAlignment};
        }

        .${blockId}.eb-price-wrapper .eb-price-container .eb-original-price-wrapper,
        .${blockId}.eb-price-wrapper .eb-price-container .eb-original-price-wrapper.eb-line-through {
            ${priceTextColor ? `color: ${priceTextColor};` : ""}
            ${orginalPriceTypoStylesDesktop}
        }

        .${blockId}.eb-price-wrapper .eb-price-container .eb-original-price-wrapper .eb-price-period {
            ${pricingPeriodTextColor ? `color: ${pricingPeriodTextColor};` : ""}
            ${pricePeriodTypoStylesDesktop}
        }

        .${blockId}.eb-price-wrapper .eb-price-container .eb-sale-price-wrapper {
            ${salePriceTextColor ? `color: ${salePriceTextColor};` : ""}
            ${salePriceTypoStylesDesktop}
        }

        .${blockId}.eb-price-wrapper .eb-price-container .eb-sale-price-wrapper .eb-sale-price-period {
            ${salePricingPeriodTextColor
            ? `color: ${salePricingPeriodTextColor};`
            : ""
        }
            ${salePricePeriodTypoStylesDesktop}
        }


		.${blockId}.eb-price-wrapper:hover {
			${wrapperBDShadowHoverDesktop}
		}
	`;

    // ALL TAB Styles
    // tab Wrapper
    const tabWrapper = `
		.${blockId}.eb-price-wrapper{
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${wrapperBDShadowTab}
			${wrapperBackgroundStylesTab}
		}

		.${blockId}.eb-price-wrapper:hover {
			${wrapperBDShadowHoverTab}
		}
	`;

    // ALL MOBILE Styles
    // mobile Wrapper
    const mobileWrapper = `
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

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    // all desktop
    const desktopAllStyles = softMinifyCssStrings(`
		${desktopWrapper}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${tabWrapper}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${mobileWrapper}
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
