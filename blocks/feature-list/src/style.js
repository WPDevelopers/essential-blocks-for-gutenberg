import {
    connectorWidth,
    titleSpace,
    iconSize,
    listSpace,
    rowSpace,
    iconBackgroundSize,
    iconPadding,
    iconSpace,
    iconBackgroundType,
    iconBorder,
    wrapperMargin,
    wrapperPadding,
    boxPadding,
    boxBackgroundType,
    boxBorder,
    wrapperBackgroundType,
    wrapperBorder,
} from "./constants";

import {
    typoPrefix_title,
    typoPrefix_content,
} from "./constants/typographyPrefixConstants";

const {
    softMinifyCssStrings,
    generateDimensionsControlStyles,
    generateBackgroundControlStyles,
    generateBorderShadowStyles,
    generateTypographyStyles,
    generateResponsiveRangeStyles,
    StyleComponent,
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;

    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        featureListAlign,
        features,
        iconPosition,
        iconShape,
        shapeView,
        titleTag,
        titleTextColor = "#4F6592",
        titleTextHoverColor,
        descTextColor = "#5F77A7",
        iconGlobalColor = "#ffffff",
        showContentVertical,
        showConnector,
        connectorStyle,
        connectorType,
        connectorColor,
        classHook,
        useInlineDesign,
    } = attributes;
    /**
     * CSS/styling Codes Starts from Here
     */

    // title bottom space
    const {
        rangeStylesDesktop: titleBottomMarginDesktop,
        rangeStylesTab: titleBottomMarginTab,
        rangeStylesMobile: titleBottomMarginMobile,
    } = generateResponsiveRangeStyles({
        controlName: titleSpace,
        property: "margin-bottom",
        attributes,
        customUnit: "px",
    });

    //Connector Width
    const {
        rangeStylesDesktop: connectorWidthDesktop,
        rangeStylesTab: connectorWidthTab,
        rangeStylesMobile: connectorWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: connectorWidth,
        property: "border-width",
        attributes,
        customUnit: "px",
    });

    // icon font-size
    const {
        rangeStylesDesktop: iconFontSizeDesktop,
        rangeStylesTab: iconFontSizeTab,
        rangeStylesMobile: iconFontSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: iconSize,
        property: "font-size",
        attributes,
        customUnit: "px",
    });

    // list space between
    const {
        rangeStylesDesktop: listSpaceDesktop,
        rangeStylesTab: listSpaceTab,
        rangeStylesMobile: listSpaceMobile,
    } = generateResponsiveRangeStyles({
        controlName: listSpace,
        property: "padding-bottom",
        attributes,
        customUnit: "px",
    });

    // list space between
    const {
        rangeStylesDesktop: rowSpaceDesktop,
        rangeStylesTab: rowSpaceTab,
        rangeStylesMobile: rowSpaceMobile,
    } = generateResponsiveRangeStyles({
        controlName: rowSpace,
        property: "padding-bottom",
        attributes,
        customUnit: "px",
    });

    // icon area size
    const {
        rangeStylesDesktop: iconAreaSizeDesktop,
        rangeStylesTab: iconAreaSizeTab,
        rangeStylesMobile: iconAreaSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: iconBackgroundSize,
        property: "",
        attributes,
        customUnit: "px",
    });

    // icon padding
    const {
        dimensionStylesDesktop: iconPaddingDesktop,
        dimensionStylesTab: iconPaddingTab,
        dimensionStylesMobile: iconPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: iconPadding,
        styleFor: "padding",
        attributes,
    });

    // icon space
    const {
        rangeStylesDesktop: iconAreaSpaceDesktop,
        rangeStylesTab: iconAreaSpaceTab,
        rangeStylesMobile: iconAreaSpaceMobile,
    } = generateResponsiveRangeStyles({
        controlName: iconSpace,
        property: "",
        attributes,
        customUnit: "px",
    });

    // title typography
    const {
        typoStylesDesktop: titleTypoStylesDesktop,
        typoStylesTab: titleTypoStylesTab,
        typoStylesMobile: titleTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_title,
        defaultFontSize: 18,
    });

    // content typography
    const {
        typoStylesDesktop: contentTypoStylesDesktop,
        typoStylesTab: contentTypoStylesTab,
        typoStylesMobile: contentTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_content,
        defaultFontSize: 14,
    });

    // icon background
    const {
        backgroundStylesDesktop: iconBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: iconHoverBackgroundStylesDesktop,
        bgTransitionStyle: iconBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: iconBackgroundType,
        noOverlay: true,
        noMainBgi: true,
    });

    // icon area border
    const {
        styesDesktop: iconBorderStyesDesktop,
        styesTab: iconBorderStyesTab,
        styesMobile: iconBorderStyesMobile,
        stylesHoverDesktop: iconBorderStylesHoverDesktop,
        stylesHoverTab: iconBorderStylesHoverTab,
        stylesHoverMobile: iconBorderStylesHoverMobile,
        transitionStyle: iconBorderTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: iconBorder,
        attributes,
    });

    // wrapper margin
    const {
        dimensionStylesDesktop: wrapperMarginDesktop,
        dimensionStylesTab: wrapperMarginTab,
        dimensionStylesMobile: wrapperMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: wrapperMargin,
        styleFor: "margin",
        attributes,
    });

    // wrapper margin
    const {
        dimensionStylesDesktop: wrapperPaddingDesktop,
        dimensionStylesTab: wrapperPaddingTab,
        dimensionStylesMobile: wrapperPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: wrapperPadding,
        styleFor: "padding",
        attributes,
    });

    // content box padding
    const {
        dimensionStylesDesktop: boxPaddingDesktop,
        dimensionStylesTab: boxPaddingTab,
        dimensionStylesMobile: boxPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: boxPadding,
        styleFor: "padding",
        attributes,
    });

    // box background
    const {
        backgroundStylesDesktop: boxBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: boxHoverBackgroundStylesDesktop,
        bgTransitionStyle: boxBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: boxBackgroundType,
        noOverlay: true,
        noMainBgi: true,
    });

    // box area border
    const {
        styesDesktop: boxBorderStyesDesktop,
        styesTab: boxBorderStyesTab,
        styesMobile: boxBorderStyesMobile,
        stylesHoverDesktop: boxBorderStylesHoverDesktop,
        stylesHoverTab: boxBorderStylesHoverTab,
        stylesHoverMobile: boxBorderStylesHoverMobile,
        transitionStyle: boxBorderTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: boxBorder,
        attributes,
    });

    // wrapper background
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
        controlName: wrapperBackgroundType,
    });

    // wrapper area border
    const {
        styesDesktop: wrapperBorderStyesDesktop,
        styesTab: wrapperBorderStyesTab,
        styesMobile: wrapperBorderStyesMobile,
        stylesHoverDesktop: wrapperBorderStylesHoverDesktop,
        stylesHoverTab: wrapperBorderStylesHoverTab,
        stylesHoverMobile: wrapperBorderStylesHoverMobile,
        transitionStyle: wrapperBorderTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: wrapperBorder,
        attributes,
    });

    const connector1position = (iconSize, paddingLeft, PaddingRight) => {
        iconSize = parseInt(iconSize.replace(/\D/g, ""));
        paddingLeft = paddingLeft ? parseInt(paddingLeft) : 0;
        PaddingRight = PaddingRight ? parseInt(PaddingRight) : 0;
        let position = 0;
        if (iconSize > paddingLeft + PaddingRight) {
            position = iconSize / 2;
        } else {
            position = (paddingLeft + PaddingRight) / 2;
        }
        return position;
    };

    const desktopStyles = `
		 .${blockId}.eb-feature-list-wrapper {
			 ${wrapperMarginDesktop}
			 ${wrapperPaddingDesktop}
			 ${wrpBackgroundStylesDesktop}
			 ${wrapperBorderStyesDesktop}
			 transition: all 0.3s, ${wrpBgTransitionStyle}, ${wrapperBorderTransitionStyle};
		 }

		 .${blockId}.eb-feature-list-wrapper:hover {
			${wrpHoverBackgroundStylesDesktop}
			${wrapperBorderStylesHoverDesktop}
		 }

		 .${blockId}.eb-feature-list-wrapper:before {
			${wrpOverlayStylesDesktop}
			transition: all 0.3s, ${wrpOvlTransitionStyle};
		 }

		 .${blockId}.eb-feature-list-wrapper:before:hover {
			${wrpHoverOverlayStylesDesktop}
		 }

		 ${showContentVertical
            ? `
		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-item {
			 align-items: center;
		 }
		 `
            : ""
        }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-item .eb-feature-list-title {
			 ${titleBottomMarginDesktop}
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-icon-box .eb-feature-list-icon {
			 ${iconShape !== "none"
            ? `
				 height: ${iconAreaSizeDesktop.replace(/\D/g, "")}px;
				 width:${iconAreaSizeDesktop.replace(/\D/g, "")}px;
				 `
            : ""
        }
			 ${iconFontSizeDesktop}
			 ${iconPaddingDesktop}
			 color: ${iconGlobalColor};
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-icon-box .eb-feature-list-icon img {
			 height: ${iconFontSizeDesktop.replace(/\D/g, "")}px;
			 width: ${iconFontSizeDesktop.replace(/\D/g, "")}px;
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-items .eb-feature-list-icon svg {
			 color: ${iconGlobalColor};
		 }

		 ${!useInlineDesign
            ? `.${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-item:not(:last-child) {
			padding-bottom: calc(${listSpaceDesktop.replace(/\D/g, "") / 2}px);
		}

		.${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-item:not(:first-child) {
			padding-top: calc(${listSpaceDesktop.replace(/\D/g, "") / 2}px);
		}`
            : ""
        }

		 .${blockId}.eb-feature-list-wrapper.-icon-position-left .eb-feature-list-items .eb-feature-list-content-box, .${blockId}.eb-feature-list-wrapper.-icon-position-right .eb-feature-list-items .eb-feature-list-content-box, .${blockId}.eb-feature-list-wrapper.-icon-position-top .eb-feature-list-items .eb-feature-list-content-box {
			${boxPaddingDesktop}
			${boxBackgroundStylesDesktop}
			${boxBorderStyesDesktop}
			 margin: ${iconAreaSpaceDesktop.replace(/\D/g, "")}px;
			 transition: all 0.3s, ${boxBgTransitionStyle}, ${boxBorderTransitionStyle};
		 }

		 .${blockId}.eb-feature-list-wrapper.-icon-position-left .eb-feature-list-items .eb-feature-list-content-box:hover, .${blockId}.eb-feature-list-wrapper.-icon-position-right .eb-feature-list-items .eb-feature-list-content-box:hover, .${blockId}.eb-feature-list-wrapper.-icon-position-top .eb-feature-list-items .eb-feature-list-content-box:hover {
			${boxHoverBackgroundStylesDesktop}
			${boxBorderStylesHoverDesktop}
		 }

		 .${blockId}.eb-feature-list-wrapper.-mobile-icon-position-left .eb-feature-list-items .eb-feature-list-content-box {
			 margin: 0 0 0 ${iconAreaSpaceDesktop.replace(/\D/g, "")}px !important;
		 }

		 .${blockId}.eb-feature-list-wrapper.-mobile-icon-position-right .eb-feature-list-items .eb-feature-list-content-box {
			 margin: 0 ${iconAreaSpaceDesktop.replace(/\D/g, "")}px 0 0 !important;
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-content-box .eb-feature-list-title,
		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-content-box .eb-feature-list-title > a,
		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-content-box .eb-feature-list-title:visited {
			 color: ${titleTextColor};
		 }
		 ${titleTextHoverColor
            ? ` .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-content-box .eb-feature-list-title:hover,
		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-content-box .eb-feature-list-title:hover > a {
				color: ${titleTextHoverColor};
		 }`
            : ""
        }


		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-content-box .eb-feature-list-title, .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-content-box .eb-feature-list-title a {
			 ${titleTypoStylesDesktop}
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-content-box .eb-feature-list-content {
			 color: ${descTextColor};
			 ${contentTypoStylesDesktop}
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-icon-box .eb-feature-list-icon-inner {
			 ${iconBackgroundStylesDesktop}
			 ${shapeView === "framed" ? iconBorderStyesDesktop : ""}
			 transition: ${(iconBgTransitionStyle, iconBorderTransitionStyle)};
		 }

		 .${blockId}.eb-feature-list-wrapper:hover .eb-feature-list-items .eb-feature-list-icon-box .eb-feature-list-icon-inner {
			 ${iconHoverBackgroundStylesDesktop}
			 ${shapeView === "framed" ? iconBorderStylesHoverDesktop : ""}
		 }
		 .${blockId}.eb-feature-list-wrapper.connector-style-1 .eb-feature-list-items .eb-feature-list-item .eb-feature-list-icon-box:before {
			border-left: ${connectorType + " " + connectorColor};
			${connectorWidthDesktop}
			top: ${parseInt(attributes.iconPaddingTop) * 2}px;
			height: calc(100% + ${parseInt(attributes.listSpaceRange)}px);
		 }

		 .${blockId}.eb-feature-list-wrapper.connector-style-2 .eb-feature-list-items .eb-feature-list-item:before {
			border-left: ${connectorType + " " + connectorColor};
			${connectorWidthDesktop}
		 }
		 .${blockId}.eb-feature-list-wrapper.connector-style-2 .eb-feature-list-items .eb-feature-list-icon-box:before {
			border-top: ${connectorType + " " + connectorColor};
			${connectorWidthDesktop}
		 }

		 ${useInlineDesign
            ? `

		 	.${blockId}.eb-feature-list-wrapper .eb-inline-feature-list {
				display: inline-flex;
				flex-wrap: wrap;
			}

			.${blockId}.eb-feature-list-wrapper .eb-inline-feature-list li .eb-feature-list-title {
				margin: 0 !important;
			}


			.${blockId}.eb-feature-list-wrapper .eb-inline-feature-list li {
				padding-right: ${listSpaceDesktop.replace(/\D/g, "")}px;
				padding-bottom: ${rowSpaceDesktop.replace(/\D/g, "")}px;
			}
		 `
            : ""
        }
	`;

    const tabStyles = `
		 .${blockId}.eb-feature-list-wrapper {
			 ${wrapperMarginTab}
			 ${wrapperPaddingTab}
			 ${wrpBackgroundStylesTab}
			 ${wrapperBorderStyesTab}
		 }

		 .${blockId}.eb-feature-list-wrapper:hover {
			${wrpHoverBackgroundStylesTab}
			${wrapperBorderStylesHoverTab}
		 }

		 .${blockId}.eb-feature-list-wrapper:before {
			${wrpOverlayStylesTab}
		 }

		 .${blockId}.eb-feature-list-wrapper:before:hover {
			${wrpHoverOverlayStylesTab}
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-item .eb-feature-list-title {
			 ${titleBottomMarginTab}
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-icon-box .eb-feature-list-icon {
			 ${iconShape !== "none"
            ? `
				 height: ${iconAreaSizeTab.replace(/\D/g, "")}px;
				 width:${iconAreaSizeTab.replace(/\D/g, "")}px;
				 `
            : ""
        }
			 ${iconFontSizeTab}
			 ${iconPaddingTab}
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-icon-box .eb-feature-list-icon img {
			 height: ${iconFontSizeTab.replace(/\D/g, "")}px;
			 width: ${iconFontSizeTab.replace(/\D/g, "")}px;
		 }

		 ${!useInlineDesign
            ? `.${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-item:not(:last-child) {
			padding-bottom: calc(${listSpaceTab.replace(/\D/g, "") / 2}px);
		}

		.${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-item:not(:first-child) {
			padding-top: calc(${listSpaceTab.replace(/\D/g, "") / 2}px);
		}`
            : ""
        }

		 .${blockId}.eb-feature-list-wrapper.-icon-position-left .eb-feature-list-items .eb-feature-list-content-box, .${blockId}.eb-feature-list-wrapper.-icon-position-right .eb-feature-list-items .eb-feature-list-content-box, .${blockId}.eb-feature-list-wrapper.-icon-position-top .eb-feature-list-items .eb-feature-list-content-box{
			${boxPaddingTab}
			${boxBorderStyesTab}
			 margin: ${iconAreaSpaceTab.replace(/\D/g, "")}px;
		 }

		 .${blockId}.eb-feature-list-wrapper.-icon-position-left .eb-feature-list-items .eb-feature-list-content-box:hover, .${blockId}.eb-feature-list-wrapper.-icon-position-right .eb-feature-list-items .eb-feature-list-content-box:hover, .${blockId}.eb-feature-list-wrapper.-icon-position-top .eb-feature-list-items .eb-feature-list-content-box:hover{
			${boxBorderStylesHoverTab}
		 }

		 .${blockId}.eb-feature-list-wrapper.-mobile-icon-position-left .eb-feature-list-items .eb-feature-list-content-box {
			 margin: 0 0 0 ${iconAreaSpaceTab.replace(/\D/g, "")}px !important;
		 }

		 .${blockId}.eb-feature-list-wrapper.-mobile-icon-position-right .eb-feature-list-items .eb-feature-list-content-box {
			 margin: 0 ${iconAreaSpaceTab.replace(/\D/g, "")}px 0 0 !important;
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-content-box .eb-feature-list-title, .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-content-box .eb-feature-list-title a {
			 ${titleTypoStylesTab}
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-content-box .eb-feature-list-content {
			 ${contentTypoStylesTab}
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-icon-box .eb-feature-list-icon-inner {
			 ${shapeView === "framed" ? iconBorderStyesTab : ""}
		 }

		 .${blockId}.eb-feature-list-wrapper:hover .eb-feature-list-items .eb-feature-list-icon-box .eb-feature-list-icon-inner {
			 ${shapeView === "framed" ? iconBorderStylesHoverTab : ""}
		 }
		 .${blockId}.eb-feature-list-wrapper.connector-style-1 .eb-feature-list-items .eb-feature-list-item .eb-feature-list-icon-box:before {
			${connectorWidthTab}
			height: calc(100% + ${parseInt(
            attributes.TABlistSpaceRange
                ? attributes.TABlistSpaceRange
                : attributes.listSpaceRange
        )}px);
		 }
		 .${blockId}.eb-feature-list-wrapper.connector-style-2 .eb-feature-list-items .eb-feature-list-item:before {
			${connectorWidthTab}
		 }
		 .${blockId}.eb-feature-list-wrapper.connector-style-2 .eb-feature-list-items .eb-feature-list-icon-box:before {
			${connectorWidthTab}
		 }

		 ${useInlineDesign
            ? `
		.${blockId}.eb-feature-list-wrapper .eb-inline-feature-list li {
			padding-right: ${listSpaceTab.replace(/\D/g, "")}px;
			padding-bottom: ${rowSpaceTab.replace(/\D/g, "")}px;
		}
	 `
            : ""
        }
	  `;

    const mobileStyles = `
		 .${blockId}.eb-feature-list-wrapper {
			 ${wrapperMarginMobile}
			 ${wrapperPaddingMobile}
			 ${wrpBackgroundStylesMobile}
			 ${wrapperBorderStyesMobile}
		 }

		 .${blockId}.eb-feature-list-wrapper:hover {
			${wrpHoverBackgroundStylesMobile}
			${wrapperBorderStylesHoverMobile}
		}

		.${blockId}.eb-feature-list-wrapper:before {
			${wrpOverlayStylesMobile}
		 }

		 .${blockId}.eb-feature-list-wrapper:before:hover {
			${wrpHoverOverlayStylesMobile}
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-item .eb-feature-list-title {
			 ${titleBottomMarginMobile}
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-icon-box .eb-feature-list-icon {
			 ${iconShape !== "none"
            ? `
				 height: ${iconAreaSizeMobile.replace(/\D/g, "")}px;
				 width:${iconAreaSizeMobile.replace(/\D/g, "")}px;
				 `
            : ""
        }
			 ${iconFontSizeMobile}
			 ${iconPaddingMobile}
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-icon-box .eb-feature-list-icon img {
			 height: ${iconFontSizeMobile.replace(/\D/g, "")}px;
			 width: ${iconFontSizeMobile.replace(/\D/g, "")}px;
		 }

		 ${!useInlineDesign
            ? `.${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-item:not(:last-child) {
			padding-bottom: calc(${listSpaceMobile.replace(/\D/g, "") / 2}px);
		}

		.${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-item:not(:first-child) {
			padding-top: calc(${listSpaceMobile.replace(/\D/g, "") / 2}px);
		}`
            : ""
        }

		 .${blockId}.eb-feature-list-wrapper.-icon-position-left .eb-feature-list-items .eb-feature-list-content-box, .${blockId}.eb-feature-list-wrapper.-icon-position-right .eb-feature-list-items .eb-feature-list-content-box, .${blockId}.eb-feature-list-wrapper.-icon-position-top .eb-feature-list-items .eb-feature-list-content-box {
			${boxPaddingMobile}
			${boxBorderStyesMobile}
			 margin: ${iconAreaSpaceMobile.replace(/\D/g, "")}px;
		 }

		 .${blockId}.eb-feature-list-wrapper.-icon-position-left .eb-feature-list-items .eb-feature-list-content-box:hover, .${blockId}.eb-feature-list-wrapper.-icon-position-right .eb-feature-list-items .eb-feature-list-content-box:hover, .${blockId}.eb-feature-list-wrapper.-icon-position-top .eb-feature-list-items .eb-feature-list-content-box:hover{
			${boxBorderStylesHoverMobile}
		 }

		 .${blockId}.eb-feature-list-wrapper.-mobile-icon-position-left .eb-feature-list-items .eb-feature-list-content-box {
			 margin: 0 0 0 ${iconAreaSpaceMobile.replace(/\D/g, "")}px !important;
		 }

		 .${blockId}.eb-feature-list-wrapper.-mobile-icon-position-right .eb-feature-list-items .eb-feature-list-content-box {
			 margin: 0 ${iconAreaSpaceMobile.replace(/\D/g, "")}px 0 0 !important;
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-content-box .eb-feature-list-title, .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-content-box .eb-feature-list-title a {
			 ${titleTypoStylesMobile}
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-content-box .eb-feature-list-content {
			 ${contentTypoStylesMobile}
		 }

		 .${blockId}.eb-feature-list-wrapper .eb-feature-list-items .eb-feature-list-icon-box .eb-feature-list-icon-inner {
			 ${shapeView === "framed" ? iconBorderStyesMobile : ""}
		 }

		 .${blockId}.eb-feature-list-wrapper:hover .eb-feature-list-items .eb-feature-list-icon-box .eb-feature-list-icon-inner {
			 ${shapeView === "framed" ? iconBorderStylesHoverMobile : ""}
		 }
		 .${blockId}.eb-feature-list-wrapper.connector-style-1 .eb-feature-list-items .eb-feature-list-item .eb-feature-list-icon-box:before {
			${connectorWidthMobile}
			height: calc(100% + ${parseInt(
            attributes.MOBlistSpaceRange
                ? attributes.MOBlistSpaceRange
                : attributes.listSpaceRange
        )}px);
		 }
		 .${blockId}.eb-feature-list-wrapper.connector-style-2 .eb-feature-list-items .eb-feature-list-item:before {
			${connectorWidthMobile}
		 }
		 .${blockId}.eb-feature-list-wrapper.connector-style-2 .eb-feature-list-items .eb-feature-list-icon-box:before {
			${connectorWidthMobile}
		 }
		 ${useInlineDesign
            ? `
	.${blockId}.eb-feature-list-wrapper .eb-inline-feature-list li {
		padding-right: ${listSpaceMobile.replace(/\D/g, "")}px;
		padding-bottom: ${rowSpaceMobile.replace(/\D/g, "")}px;
	}
 `
            : ""
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

    //
    // styling codes End here
    //

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
