import * as typoPrefixs from "./constants/typographyPrefixConstants";
// import {
// 	generateTypographyAttributes,
// 	generateResponsiveRangeAttributes,
// 	generateDimensionsAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// } from "../../../util/helpers";

const {
    generateTypographyAttributes,
    generateResponsiveRangeAttributes,
    generateDimensionsAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
} = window.EBControls;

import {
    buttonIconSpacing,
    buttonIconSize,
    headerIconSize,
    headerIconWidth,
    headerIconHeight,
    buttonPadding,
    buttonMargin,
    wrapperMargin,
    wrapperPadding,
    titleMargin,
    titlePadding,
    priceCurrencyMargin,
    buttonBackgroundControl,
    priceTableBackground,
    buttonBorderShadow,
    wrapperBorderShadow,
    iconBorderShadow,
    ribbonBorderShadow,
    salepriceCurrencyMargin,
    featuresIconSize,
} from "./constants";
import { truncate } from "lodash";

const attributes = {
    // the following 4 attributes is must required for responsive options and asset generation for frontend
    // responsive control attributes ⬇
    resOption: {
        type: "string",
        default: "Desktop",
    },
    // blockId attribute for making unique className and other uniqueness ⬇
    blockId: {
        type: "string",
    },
    blockRoot: {
        type: "string",
        default: "essential_block",
    },
    // blockMeta is for keeping all the styles ⬇
    blockMeta: {
        type: "object",
    },
    pricingStyle: {
        type: "string",
        default: "style-1",
    },
    title: {
        type: "string",
        source: "text",
        selector: ".eb-pricing .eb-pricing-header .eb-pricing-title",
        default: "Startup",
    },
    defaultSubtitle: {
        type: "boolean",
    },
    showSubtitle: {
        type: "boolean",
        default: false,
    },
    subtitle: {
        type: "string",
        source: "text",
        selector: ".eb-pricing .eb-pricing-header .eb-pricing-subtitle",
        default: "A tagline here.",
    },
    defaultHeaderIcon: {
        type: "boolean",
    },
    showHeaderIcon: {
        type: "boolean",
        default: false,
    },
    headerIcon: {
        type: "attribute",
        selector: ".eb-pricing-icon",
        attribute: "data-icon",
        default: "fas fa-home",
    },
    defaultTitleLine: {
        type: "boolean",
    },
    showTitleLine: {
        type: "boolean",
        default: true,
    },
    mainPrice: {
        type: "string",
        source: "attribute",
        selector: ".eb-pricing-tag .original-price",
        attribute: "data-price",
        default: "99",
    },
    showOnSale: {
        type: "boolean",
        default: false,
    },
    salePrice: {
        type: "string",
        source: "attribute",
        selector: ".eb-pricing-tag .sale-price",
        attribute: "data-sale-price",
        default: "89",
    },
    priceCurrency: {
        type: "string",
        source: "text",
        selector: ".eb-pricing-tag .price-currency",
        default: "$",
    },
    currencyPlacement: {
        type: "string",
        default: "left",
    },
    pricePeriod: {
        type: "string",
        source: "attribute",
        selector: ".eb-pricing-tag .price-period",
        attribute: "data-price-period",
        default: "month",
    },
    periodSeparator: {
        type: "string",
        source: "attribute",
        selector: ".eb-pricing-tag .price-period",
        attribute: "data-period-separator",
        default: "/",
    },
    hideFeatures: {
        type: "boolean",
        default: false,
    },
    features: {
        type: "array",
        source: "query",
        selector: ".eb-pricing .eb-pricing-body ul li",
        query: {
            text: {
                type: "string",
                source: "text",
                selector: ".eb-pricebox-feature-text",
            },
            icon: {
                type: "string",
                source: "attribute",
                attribute: "data-icon",
            },
            color: {
                type: "string",
                source: "attribute",
                attribute: "data-color",
            },
            link: {
                type: "string",
                source: "attribute",
                attribute: "data-link",
            },
            clickable: {
                type: "string",
                source: "attribute",
                attribute: "data-clickable",
            },
        },
        default: [],
    },
    showButton: {
        type: "boolean",
        default: true,
    },
    buttonIcon: {
        type: "attribute",
        selector: ".eb-pricing .eb-pricing-footer",
        attribute: "data-icon",
    },
    buttonIconPosition: {
        type: "string",
        default: "left",
    },
    buttonText: {
        type: "string",
        default: "Choose Plan",
    },
    titleTextColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    titleLineColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    titleBackgroundColor: {
        type: "string",
    },
    subtitleTextColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    showIconBackground: {
        type: "boolean",
        default: true,
    },
    iconBackgroundColor: {
        type: "string",
    },
    iconBackgroundHoverColor: {
        type: "string",
    },
    iconColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    iconHoverColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    priceTextColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    priceCurrencyTextColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    salePriceTextColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    salepriceCurrencyTextColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },
    pricingPeriodTextColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    featuresTextColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },
    contentAlign: {
        type: "String",
        default: "center",
    },
    showRibbon: {
        type: "boolean",
        default: false,
    },
    ribbonAlignHorizontal: {
        type: "string",
        default: "right",
    },
    ribbonAlignVertical: {
        type: "string",
        default: "top",
    },
    ribbonStyle: {
        type: "string",
        default: "ribbon-1",
    },
    ribbonText: {
        type: "string",
        default: "featured",
    },
    ribbonColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    ribbonBackgroundColor: {
        type: "string",
        default: "var(--eb-global-button-background-color)",
    },
    buttonTextColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    hoverTextColor: {
        type: "string",
        default: "var(--eb-global-button-text-color)",
    },
    buttonURL: {
        type: "string",
        default: "#",
    },
    featuresAlignment: {
        type: "string",
    },
    buttonAlignment: {
        type: "string",
    },
    headerAlignment: {
        type: "string",
    },
    priceAlignment: {
        type: "string",
    },
    iconAlignment: {
        type: "string",
    },
    newWindow: {
        type: "boolean",
        default: false,
    },
    showFeatureLine: {
        type: "boolean",
        default: true,
    },
    pricingTopBgColor: {
        type: "string",
        default: "#7967ff",
    },
    ...generateResponsiveRangeAttributes(buttonIconSpacing, {
        defaultRange: 0,
        noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(buttonIconSize, {
        defaultRange: 20,
        noUnits: true,
    }),
    ...generateResponsiveRangeAttributes(headerIconSize, {
        defaultRange: 30,
    }),
    ...generateResponsiveRangeAttributes(headerIconWidth, {
        defaultRange: 80,
    }),
    ...generateResponsiveRangeAttributes(headerIconHeight, {
        defaultRange: 80,
    }),
    ...generateResponsiveRangeAttributes(featuresIconSize, {
        defaultRange: 20,
    }),
    ...generateDimensionsAttributes(buttonPadding),
    ...generateDimensionsAttributes(buttonMargin),
    ...generateDimensionsAttributes(wrapperMargin),
    ...generateDimensionsAttributes(wrapperPadding),
    ...generateDimensionsAttributes(titlePadding),
    ...generateDimensionsAttributes(titleMargin),
    ...generateDimensionsAttributes(priceCurrencyMargin),
    ...generateDimensionsAttributes(salepriceCurrencyMargin),
    // typography attributes
    ...generateTypographyAttributes(Object.values(typoPrefixs)),
    // background attributes
    ...generateBackgroundAttributes(buttonBackgroundControl, {
        defaultFillColor: "var(--eb-global-button-background-color)",
        defaultHovFillColor: "var(--eb-global-tertiary-color)",
        noOverlay: true,
        noMainBgi: true,
    }),
    ...generateBackgroundAttributes(priceTableBackground, {
        defaultBgGradient: "linear-gradient(45deg, rgba(255,255,255,0.8) 0% , rgba(255,255,255,0.8) 100%)",
    }),
    // border shadow attriubtes
    ...generateBorderShadowAttributes(buttonBorderShadow),
    ...generateBorderShadowAttributes(wrapperBorderShadow),
    ...generateBorderShadowAttributes(iconBorderShadow),
    ...generateBorderShadowAttributes(ribbonBorderShadow),
};

export default attributes;
