import {
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    WRAPPER_BG,
    COLUMNS,
    COLUMN_GAP,
    COLUMN_PADDING,
    COLUMN_BG,
    COLUMN_BORDER_SHADOW,
    THUMBNAIL_IMAGE_SIZE,
    THUMBNAIL_BORDER_RADIUS,
    THUMBNAIL_MARGIN,
    TITLE_MARGIN,
    CONTENT_MARGIN,
    READMORE_MARGIN,
    READMORE_PADDING,
    HEADER_META_MARGIN,
    FOOTER_META_MARGIN,
    HEADER_META_SPACE,
    FOOTER_META_SPACE,
    AVATAR_BORDER_RADIUS,
    COLUMN_MEDIA_WIDTH,
    SLIDE_TO_SHOW,
    CUSTOM_HEIGHT,
    DOTS_GAP,
    ARROW_POSITION,
    DOTS_POSITION,
    ARROW_SIZE,
    DOTS_SIZE,
    SLIDES_GAP,
    DOT_PRESETS,
} from "./constants/constants";
import {
    EBPG_TITLE_TYPOGRAPHY,
    EBPG_CONTENT_TYPOGRAPHY,
    EBPG_READMORE_TYPOGRAPHY,
    EBPG_META_TYPOGRAPHY,
} from "./constants/typographyPrefixConstants";

const {
    softMinifyCssStrings,
    generateTypographyStyles,
    generateDimensionsControlStyles,
    generateBorderShadowStyles,
    generateResponsiveRangeStyles,
    generateBackgroundControlStyles,
    StyleComponent,
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        preset,
        arrows,
        thumbnailOverlayColor,
        thumbnailOverlayHoverColor,
        titleColor,
        titleHoverColor,
        titleTextAlign,
        contentColor,
        contentTextAlign,
        readmoreColor,
        readmoreBGColor,
        readmoreTextAlign,
        readmoreHoverColor,
        readmoreBGHoverColor,
        dynamicMetaColor,
        dynamicMetaBgColor,
        headerMetaTextAlign,
        footerMetaTextAlign,
        authorMetaColor,
        authorMetaHoverColor,
        commonMetaColor,
        commonMetaHoverColor,
        commonMetaDividerColor,
        categoryMetaColor,
        categoryMetaHoverColor,
        categoryMetaBgColor,
        categoryMetaBgHoverColor,
        tagMetaColor,
        tagMetaHoverColor,
        tagMetaBgColor,
        tagMetaBgHoverColor,
        dateMetaColor,
        styleVerticalAlignment,
        leftArrowIcon,
        rightArrowIcon,
        arrowColor,
        arrowHoverColor,
        dotsColor,
        dotsActiveColor,
        textAlign,
        verticalAlign,
        slidesGapRange,
        TABslidesGapRange,
        MOBslidesGapRange,
        slidesGapUnit,
        TABslidesGapUnit,
        MOBslidesGapUnit,
        dotsSizeRange,
        dotsSizeUnit,
        TABdotsSizeUnit,
        MOBdotsSizeUnit,
        TABdotsSizeRange,
        MOBdotsSizeRange,
        categoryMetaDividerColor,
        tagMetaDividerColor,
        dotsPositionRange,
        TABdotsPositionRange,
        MOBdotsPositionRange,
    } = attributes;

    //
    // CSS/styling Codes Starts from Here

    const {
        typoStylesDesktop: titleTypoStylesDesktop,
        typoStylesTab: titleTypoStylesTab,
        typoStylesMobile: titleTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: EBPG_TITLE_TYPOGRAPHY,
        defaultFontSize: 18,
    });

    const {
        typoStylesDesktop: contentTypoStylesDesktop,
        typoStylesTab: contentTypoStylesTab,
        typoStylesMobile: contentTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: EBPG_CONTENT_TYPOGRAPHY,
        defaultFontSize: 14,
    });

    const {
        typoStylesDesktop: readmoreTypoStylesDesktop,
        typoStylesTab: readmoreTypoStylesTab,
        typoStylesMobile: readmoreTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: EBPG_READMORE_TYPOGRAPHY,
        defaultFontSize: 13,
    });

    const {
        typoStylesDesktop: metaTypoStylesDesktop,
        typoStylesTab: metaTypoStylesTab,
        typoStylesMobile: metaTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: EBPG_META_TYPOGRAPHY,
        defaultFontSize: 13,
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

    const {
        dimensionStylesDesktop: columnPaddingStylesDesktop,
        dimensionStylesTab: columnPaddingStylesTab,
        dimensionStylesMobile: columnPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: COLUMN_PADDING,
        styleFor: "padding",
        attributes,
    });

    const {
        dimensionStylesDesktop: titleMarginStylesDesktop,
        dimensionStylesTab: titleMarginStylesTab,
        dimensionStylesMobile: titleMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: TITLE_MARGIN,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: contentMarginStylesDesktop,
        dimensionStylesTab: contentMarginStylesTab,
        dimensionStylesMobile: contentMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: CONTENT_MARGIN,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: readmoreMarginStylesDesktop,
        dimensionStylesTab: readmoreMarginStylesTab,
        dimensionStylesMobile: readmoreMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: READMORE_MARGIN,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: readmorePaddingStylesDesktop,
        dimensionStylesTab: readmorePaddingStylesTab,
        dimensionStylesMobile: readmorePaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: READMORE_PADDING,
        styleFor: "padding",
        attributes,
    });

    const {
        dimensionStylesDesktop: headerMetaMarginStylesDesktop,
        dimensionStylesTab: headerMetaMarginStylesTab,
        dimensionStylesMobile: headerMetaMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: HEADER_META_MARGIN,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: footerMetaMarginStylesDesktop,
        dimensionStylesTab: footerMetaMarginStylesTab,
        dimensionStylesMobile: footerMetaMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: FOOTER_META_MARGIN,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: thumbnailMarginStylesDesktop,
        dimensionStylesTab: thumbnailMarginStylesTab,
        dimensionStylesMobile: thumbnailMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: THUMBNAIL_MARGIN,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: thumbnailBdrSdwStylesDesktop,
        dimensionStylesTab: thumbnailBdrSdwStylesTab,
        dimensionStylesMobile: thumbnailBdrSdwStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: THUMBNAIL_BORDER_RADIUS,
        styleFor: "border-radius",
        attributes,
    });

    const {
        dimensionStylesDesktop: avatarBdrSdwStylesDesktop,
        dimensionStylesTab: avatarBdrSdwStylesTab,
        dimensionStylesMobile: avatarBdrSdwStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: AVATAR_BORDER_RADIUS,
        styleFor: "border-radius",
        attributes,
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

    const {
        styesDesktop: columnBDShadowDesktop,
        styesTab: columnBDShadowTab,
        styesMobile: columnBDShadowMobile,
        stylesHoverDesktop: columnBDShadowHoverDesktop,
        stylesHoverTab: columnBDShadowHoverTab,
        stylesHoverMobile: columnBDShadowHoverMobile,
        transitionStyle: columnBDShadowTransition,
    } = generateBorderShadowStyles({
        controlName: COLUMN_BORDER_SHADOW,
        attributes,
    });

    const {
        rangeStylesDesktop: thumbnailImageHeightDesktop,
        rangeStylesTab: thumbnailImageHeightTab,
        rangeStylesMobile: thumbnailImageHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: THUMBNAIL_IMAGE_SIZE,
        property: "height",
        attributes,
    });

    const {
        rangeStylesDesktop: headerMetaSpaceDesktop,
        rangeStylesTab: headerMetaSpaceTab,
        rangeStylesMobile: headerMetaSpaceMobile,
    } = generateResponsiveRangeStyles({
        controlName: HEADER_META_SPACE,
        property: "margin-right",
        attributes,
    });

    const {
        rangeStylesDesktop: footerMetaSpaceDesktop,
        rangeStylesTab: footerMetaSpaceTab,
        rangeStylesMobile: footerMetaSpaceMobile,
    } = generateResponsiveRangeStyles({
        controlName: FOOTER_META_SPACE,
        property: "margin-right",
        attributes,
    });

    const {
        rangeStylesDesktop: mediaWidthStylesDesktop,
        rangeStylesTab: mediaWidthStylesTab,
        rangeStylesMobile: mediaWidthStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: COLUMN_MEDIA_WIDTH,
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

    //Generate Background
    const {
        backgroundStylesDesktop: columnBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: columnHoverBackgroundStylesDesktop,
        backgroundStylesTab: columnBackgroundStylesTab,
        hoverBackgroundStylesTab: columnHoverBackgroundStylesTab,
        backgroundStylesMobile: columnBackgroundStylesMobile,
        hoverBackgroundStylesMobile: columnHoverBackgroundStylesMobile,
        bgTransitionStyle: columnBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: COLUMN_BG,
        noOverlay: true,
    });

    // slider

    // range controller Slides to Show
    const {
        rangeStylesDesktop: slideToShowDesktop,
        rangeStylesTab: slideToShowTab,
        rangeStylesMobile: slideToShowMobile,
    } = generateResponsiveRangeStyles({
        controlName: SLIDE_TO_SHOW,
        property: "",
        attributes,
    });

    // range controller Slider Dots Gap
    const {
        rangeStylesDesktop: dotsGapDesktop,
        rangeStylesTab: dotsGapTab,
        rangeStylesMobile: dotsGapMobile,
    } = generateResponsiveRangeStyles({
        controlName: DOTS_GAP,
        property: "margin-right",
        attributes,
    });

    // range controller Slider Left Arrow Position
    const {
        rangeStylesDesktop: leftArrowPositionDesktop,
        rangeStylesTab: leftArrowPositionTab,
        rangeStylesMobile: leftArrowPositionMobile,
    } = generateResponsiveRangeStyles({
        controlName: ARROW_POSITION,
        property: "left",
        attributes,
    });

    // range controller Slider Left Arrow Position
    const {
        rangeStylesDesktop: rightArrowPositionDesktop,
        rangeStylesTab: rightArrowPositionTab,
        rangeStylesMobile: rightArrowPositionMobile,
    } = generateResponsiveRangeStyles({
        controlName: ARROW_POSITION,
        property: "right",
        attributes,
    });

    // range controller Slider Arrow Size
    const {
        rangeStylesDesktop: arrowSizeDesktop,
        rangeStylesTab: arrowSizeTab,
        rangeStylesMobile: arrowSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: ARROW_SIZE,
        property: "font-size",
        attributes,
    });

    // range controller Slider Arrow Size
    const {
        rangeStylesDesktop: dotsSizeDesktop,
        rangeStylesTab: dotsSizeTab,
        rangeStylesMobile: dotsSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: DOTS_SIZE,
        property: "font-size",
        attributes,
    });

    // range controller Slider Slides Gap
    const {
        rangeStylesDesktop: slidesGapDesktop,
        rangeStylesTab: slidesGapTab,
        rangeStylesMobile: slidesGapMobile,
    } = generateResponsiveRangeStyles({
        controlName: SLIDES_GAP,
        property: "padding",
        attributes,
    });

    // range controller Slider Dots Position
    const {
        rangeStylesDesktop: dotsPositionDesktop,
        rangeStylesTab: dotsPositionTab,
        rangeStylesMobile: dotsPositionMobile,
    } = generateResponsiveRangeStyles({
        controlName: DOTS_POSITION,
        property: "bottom",
        attributes,
    });

    let slideGap = slidesGapRange + slidesGapUnit;
    let slideGapTab = TABslidesGapRange + TABslidesGapUnit;
    let slideGapMob = MOBslidesGapRange + MOBslidesGapUnit;

    let carouselDotPosition = Math.abs(dotsPositionRange);
    let carouselDotPositionTab = Math.abs(TABdotsPositionRange);
    let carouselDotPositionMob = Math.abs(MOBdotsPositionRange);

    // slidesGapUnit

    // wrapper styles css in strings ⬇
    const wrapperStylesDesktop = `
		.eb-post-carousel-wrapper.${blockId}{
			display: block;
			position: relative;
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
			${wrapperBackgroundStylesDesktop}
			${wrapperBDShadowDesktop}
			transition: ${wrapperBgTransitionStyle}, ${wrapperBDShadowTransition};
		}
		.eb-post-carousel-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesDesktop}
			${wrapperBDShadowHoverDesktop}
		}

		.eb-post-carousel-wrapper.${blockId} .slick-list {
			margin: calc(-${slidesGapRange}${slidesGapUnit}/2);
		}
		.eb-post-carousel-wrapper.${blockId} .slick-slide .ebpg-carousel-post-holder {
			margin: calc(${slidesGapRange}${slidesGapUnit}/2);
			height: calc(100% - ${slideGap});
		}
	`;

    const wrapperStylesTab = `
		.eb-post-carousel-wrapper.${blockId}{
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
			${wrapperBackgroundStylesTab}
			${wrapperBDShadowTab}
		}
		.eb-post-carousel-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesTab}
			${wrapperBDShadowHoverTab}
		}
		.eb-post-carousel-wrapper.${blockId} .slick-list {
			margin: calc(-${TABslidesGapRange}${TABslidesGapUnit}/2);
		}
		.eb-post-carousel-wrapper.${blockId} .slick-slide .ebpg-carousel-post-holder {
			margin: calc(${TABslidesGapRange}${TABslidesGapUnit}/2);
			height: calc(100% - ${slideGapTab});
		}
	`;
    const wrapperStylesMobile = `
		.eb-post-carousel-wrapper.${blockId}{
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}
			${wrapperBackgroundStylesMobile}
			${wrapperBDShadowMobile}
		}
		.eb-post-carousel-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesMobile}
			${wrapperBDShadowHoverMobile}
		}
		.eb-post-carousel-wrapper.${blockId} .slick-list {
			margin: calc(-${MOBslidesGapRange}${MOBslidesGapUnit}/2);
		}
		.eb-post-carousel-wrapper.${blockId} .slick-slide .ebpg-carousel-post-holder {
			margin: calc(${MOBslidesGapRange}${MOBslidesGapUnit}/2);
			height: calc(100% - ${slideGapMob});
		}
	`;

    let mediaWidthNumber = mediaWidthStylesDesktop.replace(/\D/g, "");
    const carouselColumnStylesDesktop = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-post-carousel-column {
			transition: ${columnBgTransitionStyle}, ${columnBDShadowTransition};
		}
		// .eb-post-carousel-wrapper.${blockId} .ebpg-post-carousel-column:hover {
		// 	${columnHoverBackgroundStylesDesktop}
		// 	${columnBDShadowHoverDesktop}
		// }

		${
            preset === "style-1"
                ? `
				.eb-post-carousel-wrapper.${blockId}.style-1 .ebpg-carousel-post-holder::after {
					${columnBackgroundStylesDesktop}
					${columnPaddingStylesDesktop}
					${columnBDShadowDesktop}
				}
				.eb-post-carousel-wrapper.${blockId} .ebpg-post-carousel-column:hover .ebpg-carousel-post-holder::after {
					${columnHoverBackgroundStylesDesktop}
					${columnBDShadowHoverDesktop}
				}
			`
                : ""
        }

		${
            preset === "style-2"
                ? `
				.eb-post-carousel-wrapper.${blockId} .ebpg-carousel-post-holder {
					${columnBackgroundStylesDesktop}
					${columnBDShadowDesktop}
				}
				.eb-post-carousel-wrapper.${blockId} .ebpg-entry-wrapper {
					${columnBackgroundStylesDesktop}
					${columnPaddingStylesDesktop}
					border-bottom-right-radius: inherit;
					border-bottom-left-radius: inherit;
				}

			`
                : ""
        }

		${
            preset === "style-3"
                ? `
				.eb-post-carousel-wrapper.${blockId} .ebpg-carousel-post-holder {
					${columnBackgroundStylesDesktop}
					${columnBDShadowDesktop}
				}
				.eb-post-carousel-wrapper.${blockId} .ebpg-entry-wrapper {
					${columnBackgroundStylesDesktop}
					${columnPaddingStylesDesktop}
					border-bottom-right-radius: inherit;
					border-top-right-radius: inherit;
				}

			`
                : ""
        }

		${
            preset === "style-3" && mediaWidthStylesDesktop
                ? `
			.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder {
				align-items: ${styleVerticalAlignment};
			}
			${
                mediaWidthNumber === "0"
                    ? `.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-media {
					display: none;
				}
				.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-wrapper {
					width: ${100 - mediaWidthNumber}%;
				}`
                    : mediaWidthNumber === "100"
                    ? `.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder {
						flex-wrap: wrap;
					}
					.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-media {
						width: ${mediaWidthNumber}%;
					}
					.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-wrapper {
						width: ${mediaWidthNumber}%;
					}`
                    : `.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-media {
					width: ${mediaWidthNumber}%;
				}
				.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-wrapper {
					width: ${100 - mediaWidthNumber}%;
				}`
            }`
                : ""
        }
		${
            preset === "style-4"
                ? `

			.eb-post-carousel-wrapper.${blockId}.style-4 .ebpg-carousel-post-holder .ebpg-entry-wrapper {
				justify-content: ${styleVerticalAlignment};
				${columnPaddingStylesDesktop}
			}
			.eb-post-carousel-wrapper.${blockId} .ebpg-entry-thumbnail {
				${columnBDShadowDesktop}
			}
			.eb-post-carousel-wrapper.${blockId}.style-4 .ebpg-entry-thumbnail img, .eb-post-carousel-wrapper.${blockId}.style-4 .ebpg-entry-thumbnail:after {
				${columnBDShadowDesktop}
				border-width: 0px !important;
			}
			`
                : ""
        }

	`;

    let mediaWidthNumberTab = mediaWidthStylesTab.replace(/\D/g, "");
    const carouselColumnStylesTab = `
		${
            preset === "style-1"
                ? `
				.eb-post-carousel-wrapper.${blockId}.style-1 .ebpg-carousel-post-holder::after {
					${columnBackgroundStylesTab}
					${columnPaddingStylesTab}
					${columnBDShadowTab}
				}
				.eb-post-carousel-wrapper.${blockId} .ebpg-post-carousel-column:hover .ebpg-carousel-post-holder::after {
					${columnHoverBackgroundStylesTab}
					${columnBDShadowHoverTab}
				}
			`
                : ""
        }

		${
            preset === "style-2"
                ? `
				.eb-post-carousel-wrapper.${blockId} .ebpg-carousel-post-holder {
					${columnBackgroundStylesTab}
					${columnBDShadowDesktop}
				}
				.eb-post-carousel-wrapper.${blockId} .ebpg-entry-wrapper {
					${columnBackgroundStylesTab}
					${columnPaddingStylesTab}
					border-bottom-right-radius: inherit;
					border-bottom-left-radius: inherit;
				}

			`
                : ""
        }

		${
            preset === "style-3"
                ? `
				.eb-post-carousel-wrapper.${blockId} .ebpg-carousel-post-holder {
					${columnBackgroundStylesTab}
					${columnBDShadowDesktop}
				}
				.eb-post-carousel-wrapper.${blockId} .ebpg-entry-wrapper {
					${columnBackgroundStylesTab}
					${columnPaddingStylesTab}
				}

			`
                : ""
        }

		${
            preset === "style-3" && mediaWidthStylesTab
                ? `
			.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder {
				align-items: ${styleVerticalAlignment};
			}
			${
                mediaWidthNumberTab === "0"
                    ? `.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-media {
					display: none;
				}
				.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-wrapper {
					width: ${100 - mediaWidthNumberTab}%;
				}`
                    : mediaWidthNumberTab === "100"
                    ? `.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder {
						flex-wrap: wrap;
					}
					.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-media {
						width: ${mediaWidthNumberTab}%;
					}
					.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-wrapper {
						width: ${mediaWidthNumberTab}%;
					}`
                    : `.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-media {
					width: ${mediaWidthNumberTab}%;
				}
				.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-wrapper {
					width: ${100 - mediaWidthNumberTab}%;
				}`
            }`
                : ""
        }
		${
            preset === "style-4"
                ? `

			.eb-post-carousel-wrapper.${blockId}.style-4 .ebpg-carousel-post-holder .ebpg-entry-wrapper {
				${columnPaddingStylesTab}
			}
			.eb-post-carousel-wrapper.${blockId} .ebpg-entry-thumbnail {
				${columnBDShadowTab}
			}
			.eb-post-carousel-wrapper.${blockId}.style-4 .ebpg-entry-thumbnail img, .eb-post-carousel-wrapper.${blockId}.style-4 .ebpg-entry-thumbnail:after {
				${columnBDShadowTab}
			}
			`
                : ""
        }
	`;

    let mediaWidthNumberMobile = mediaWidthStylesMobile.replace(/\D/g, "");
    const carouselColumnStylesMobile = `
		${
            preset === "style-1"
                ? `
				.eb-post-carousel-wrapper.${blockId}.style-1 .ebpg-carousel-post-holder::after {
					${columnBackgroundStylesMobile}
					${columnPaddingStylesMobile}
					${columnBDShadowMobile}
				}
				.eb-post-carousel-wrapper.${blockId} .ebpg-post-carousel-column:hover .ebpg-carousel-post-holder::after {
					${columnHoverBackgroundStylesMobile}
					${columnBDShadowHoverMobile}
				}
			`
                : ""
        }

		${
            preset === "style-2"
                ? `
				.eb-post-carousel-wrapper.${blockId} .ebpg-carousel-post-holder {
					${columnBackgroundStylesMobile}
					${columnBDShadowMobile}
				}
				.eb-post-carousel-wrapper.${blockId} .ebpg-entry-wrapper {
					${columnBackgroundStylesMobile}
					${columnPaddingStylesMobile}
				}

			`
                : ""
        }

		${
            preset === "style-3"
                ? `
				.eb-post-carousel-wrapper.${blockId} .ebpg-carousel-post-holder {
					${columnBackgroundStylesMobile}
					${columnBDShadowDesktop}
				}
				.eb-post-carousel-wrapper.${blockId} .ebpg-entry-wrapper {
					${columnBackgroundStylesMobile}
					${columnPaddingStylesMobile}
				}

			`
                : ""
        }
		${
            preset === "style-3" && mediaWidthStylesMobile
                ? `
			.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder {
				align-items: ${styleVerticalAlignment};
			}
			${
                mediaWidthNumberMobile === "0"
                    ? `.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-media {
					display: none;
				}
				.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-wrapper {
					width: ${100 - mediaWidthNumberMobile}%;
				}`
                    : mediaWidthNumberMobile === "100"
                    ? `.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder {
						flex-wrap: wrap;
					}
					.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-media {
						width: ${mediaWidthNumberMobile}%;
					}
					.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-wrapper {
						width: ${mediaWidthNumberMobile}%;
					}`
                    : `.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-media {
					width: ${mediaWidthNumberMobile}%;
				}
				.eb-post-carousel-wrapper.${blockId}.style-3 .ebpg-carousel-post-holder .ebpg-entry-wrapper {
					width: ${100 - mediaWidthNumberMobile}%;
				}`
            }`
                : ""
        }
		${
            preset === "style-4"
                ? `

			.eb-post-carousel-wrapper.${blockId}.style-4 .ebpg-carousel-post-holder .ebpg-entry-wrapper {
				${columnPaddingStylesMobile}
			}
			.eb-post-carousel-wrapper.${blockId} .ebpg-entry-thumbnail {
				${columnBDShadowMobile}
			}
			.eb-post-carousel-wrapper.${blockId}.style-4 .ebpg-entry-thumbnail img, .eb-post-carousel-wrapper.${blockId}.style-4 .ebpg-entry-thumbnail:after {
				${columnBDShadowMobile}
			}
			`
                : ""
        }
	`;

    const thumbnailStyleDesktop = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-entry-thumbnail {
			${thumbnailMarginStylesDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-entry-thumbnail img {
			${thumbnailImageHeightDesktop}
			${thumbnailBdrSdwStylesDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-carousel-post-holder .ebpg-entry-thumbnail:after {
			background-color: ${thumbnailOverlayColor}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-carousel-post-holder .ebpg-entry-thumbnail:hover:after,
		.eb-post-carousel-wrapper.${blockId}.style-4 .ebpg-carousel-post-holder:hover .ebpg-entry-thumbnail:after {
			background-color: ${thumbnailOverlayHoverColor};
			${thumbnailBdrSdwStylesDesktop}
		}
		.eb-post-carousel-wrapper.${blockId}.style-4 .ebpg-carousel-post-holder:hover .ebpg-entry-thumbnail:after {
			border-radius: inherit;
		}
	`;

    const thumbnailStyleTab = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-entry-thumbnail {
			${thumbnailMarginStylesTab}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-entry-thumbnail img {
			${thumbnailImageHeightTab}
			${thumbnailBdrSdwStylesTab}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-carousel-post-holder .ebpg-entry-thumbnail:hover:after,
		.eb-post-carousel-wrapper.${blockId}.style-4 .ebpg-carousel-post-holder:hover .ebpg-entry-thumbnail:after {
			${thumbnailBdrSdwStylesTab}
		}
	`;

    const thumbnailStyleMobile = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-entry-thumbnail img {
			${thumbnailMarginStylesMobile}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-entry-thumbnail img {
			${thumbnailImageHeightMobile}
			${thumbnailBdrSdwStylesMobile}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-carousel-post-holder .ebpg-entry-thumbnail:hover:after,
		.eb-post-carousel-wrapper.${blockId}.style-4 .ebpg-carousel-post-holder:hover .ebpg-entry-thumbnail:after {
			${thumbnailBdrSdwStylesMobile}
		}
	`;

    const titleStyleDesktop = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-entry-title {
			text-align: ${titleTextAlign};
			${titleTypoStylesDesktop}
			${titleMarginStylesDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-entry-title a {
			color: ${titleColor};
			${titleTypoStylesDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-entry-title a:hover {
			color: ${titleHoverColor};
		}
	`;

    const titleStyleTab = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-entry-title {
			${titleTypoStylesTab}
			${titleMarginStylesTab}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-entry-title a {
			${titleTypoStylesTab}
		}
	`;

    const titleStyleMobile = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-entry-title {
			${titleTypoStylesMobile}
			${titleMarginStylesMobile}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-entry-title a {
			${titleTypoStylesMobile}
		}
	`;

    const contentStyleDesktop = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-carousel-post-excerpt p {
			color: ${contentColor};
			text-align: ${contentTextAlign};
			${contentTypoStylesDesktop}
			${contentMarginStylesDesktop}
		}
	`;

    const contentStyleTab = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-carousel-post-excerpt p {
			${contentTypoStylesTab}
			${contentMarginStylesTab}
		}
	`;

    const contentStyleMobile = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-carousel-post-excerpt p {
			${contentTypoStylesMobile}
			${contentMarginStylesMobile}
		}
	`;

    const readmoreStyleDesktop = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-readmore-btn {
			text-align: ${readmoreTextAlign};
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-readmore-btn a {
			color: ${readmoreColor};
			background-color: ${readmoreBGColor};
			${readmoreTypoStylesDesktop}
			${readmoreMarginStylesDesktop}
			${readmorePaddingStylesDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-readmore-btn a:hover {
			color: ${readmoreHoverColor};
			color: ${readmoreBGHoverColor};
		}
	`;

    const readmoreStyleTab = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-readmore-btn a {
			${readmoreTypoStylesTab}
			${readmoreMarginStylesTab}
			${readmorePaddingStylesTab}
		}
	`;

    const readmoreStyleMobile = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-readmore-btn a {
			${readmoreTypoStylesMobile}
			${readmoreMarginStylesMobile}
			${readmorePaddingStylesMobile}
		}
	`;

    const avatarStyleDesktop = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-author-avatar img {
			${avatarBdrSdwStylesDesktop}
		}
	`;

    const avatarStyleTab = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-author-avatar img {
			${avatarBdrSdwStylesTab}
		}
	`;

    const avatarStyleMobile = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-author-avatar img {
			${avatarBdrSdwStylesMobile}
		}
	`;

    const dateStyleDesktop = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-posted-on {
			color: ${dateMetaColor};
			${metaTypoStylesDesktop}
		}
	`;

    const dateStyleTab = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-posted-on {
			${metaTypoStylesTab}
		}
	`;

    const dateStyleMobile = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-posted-on {
			${metaTypoStylesMobile}
		}
	`;

    const authorStyleDesktop = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-posted-by {
			color: ${authorMetaColor};
			${metaTypoStylesDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-posted-by a {
			color: ${authorMetaColor};
			${metaTypoStylesDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-posted-by a:hover {
			color: ${authorMetaHoverColor};
		}
	`;

    const authorStyleTab = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-posted-by {
			${metaTypoStylesTab}
		}
	`;

    const authorStyleMobile = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-posted-by {
			${metaTypoStylesMobile}
		}
	`;

    const commonStyleDesktop = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-meta a {
			color: ${commonMetaColor};
			${metaTypoStylesDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-meta a:not(:first-child)::before {
			background-color: ${commonMetaDividerColor};
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-meta a:hover {
			color: ${commonMetaHoverColor};
		}
	`;

    const commonStyleTab = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-meta a {
			${metaTypoStylesTab}
		}
	`;

    const commonStyleMobile = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-meta a {
			${metaTypoStylesMobile}
		}
	`;

    const dynamicMetaStyleDesktop = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-meta.ebpg-dynamic-values {
			color: ${dynamicMetaColor};
			background-color: ${dynamicMetaBgColor};
			${metaTypoStylesDesktop}
		}
	`;

    const dynamicMetaStyleTab = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-meta.ebpg-dynamic-values  {
			${metaTypoStylesTab}
		}
	`;

    const dynamicMetaStyleMobile = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-meta.ebpg-dynamic-values  {
			${metaTypoStylesMobile}
		}
	`;

    const categoriesStyleDesktop = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-categories-meta a {
			color: ${categoryMetaColor};
			${metaTypoStylesDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-categories-meta a:not(:first-child)::before {
			background-color: ${categoryMetaDividerColor};
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-categories-meta a:hover {
			color: ${categoryMetaHoverColor};
			// background-color: ${categoryMetaBgHoverColor};
		}
	`;

    const categoriesStyleTab = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-categories-meta a {
			${metaTypoStylesTab}
		}
	`;

    const categoriesStyleMobile = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-categories-meta a {
			${metaTypoStylesMobile}
		}
	`;

    const tagsStyleDesktop = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-tags-meta a {
			color: ${tagMetaColor};
			background-color: ${tagMetaBgColor};
			${metaTypoStylesDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-tags-meta a:not(:first-child)::before {
			background-color: ${tagMetaDividerColor};
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-tags-meta a:hover {
			color: ${tagMetaHoverColor};
			background-color: ${tagMetaBgHoverColor};
		}
	`;

    const tagsStyleTab = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-tags-meta a {
			${metaTypoStylesTab}
		}
	`;

    const tagsStyleMobile = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-tags-meta a {
			${metaTypoStylesMobile}
		}
	`;

    const headerMetaDesktop = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-header-meta {
			justify-content: ${headerMetaTextAlign};
			${headerMetaMarginStylesDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-header-meta .ebpg-entry-meta-items {
			justify-content: ${headerMetaTextAlign};
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-header-meta .ebpg-author-avatar,
		.eb-post-carousel-wrapper.${blockId} .ebpg-header-meta .ebpg-entry-meta-items > * {
			${headerMetaSpaceDesktop}
		}
	`;

    const headerMetaTab = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-header-meta {
			${headerMetaMarginStylesTab}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-header-meta .ebpg-author-avatar,
		.eb-post-carousel-wrapper.${blockId} .ebpg-header-meta .ebpg-entry-meta-items > * {
			${headerMetaSpaceTab}
		}
	`;

    const headerMetaMobile = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-header-meta {
			${headerMetaMarginStylesMobile}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-header-meta .ebpg-author-avatar,
		.eb-post-carousel-wrapper.${blockId} .ebpg-header-meta .ebpg-entry-meta-items > * {
			${headerMetaSpaceMobile}
		}
	`;

    const footerMetaDesktop = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-footer-meta {
			justify-content: ${footerMetaTextAlign};
			${footerMetaMarginStylesDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-footer-meta .ebpg-entry-meta-items {
			justify-content: ${footerMetaTextAlign};
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-footer-meta .ebpg-author-avatar,
		.eb-post-carousel-wrapper.${blockId} .ebpg-footer-meta .ebpg-entry-meta-items > * {
			${footerMetaSpaceDesktop}
		}
	`;

    const footerMetaTab = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-footer-meta {
			${footerMetaMarginStylesTab}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-footer-meta .ebpg-author-avatar,
		.eb-post-carousel-wrapper.${blockId} .ebpg-footer-meta .ebpg-entry-meta-items > * {
			${footerMetaSpaceTab}
		}
	`;

    const footerMetaMobile = `
		.eb-post-carousel-wrapper.${blockId} .ebpg-footer-meta {
			${footerMetaMarginStylesMobile}
		}
		.eb-post-carousel-wrapper.${blockId} .ebpg-footer-meta .ebpg-author-avatar,
		.eb-post-carousel-wrapper.${blockId} .ebpg-footer-meta .ebpg-entry-meta-items > * {
			${footerMetaSpaceMobile}
		}
	`;

    const sliderControlsStylesDesktop = `
		.eb-post-carousel-wrapper.${blockId} .slick-prev {
			${leftArrowPositionDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .slick-next {
			${rightArrowPositionDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .slick-prev i,
		.eb-post-carousel-wrapper.${blockId} .slick-next i {
			color: ${arrowColor} !important;
			${arrowSizeDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .slick-prev:hover i,
		.eb-post-carousel-wrapper.${blockId} .slick-next:hover i {
			color: ${arrowHoverColor} !important;
		}
		.eb-post-carousel-wrapper.${blockId}.eb-slider-dots,
		.eb-post-carousel-wrapper.${blockId}.slick-dotted.slick-slider{
			margin-bottom: calc(${carouselDotPosition}px + 20px);
		}
		.eb-post-carousel-wrapper.${blockId} .slick-dots {
			${dotsPositionDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .slick-dots li {
			${dotsGapDesktop}
		}
		.eb-post-carousel-wrapper.${blockId} .slick-dots li button:before {
			color: ${dotsColor} !important;
			${dotsSizeDesktop}
		}
		.eb-post-carousel-wrapper.${blockId}.dot-style-2 .slick-dots li button:before {
			background-color: ${dotsColor} !important;
			font-size: 0;
			width: ${dotsSizeRange}${dotsSizeUnit};
			height: ${dotsSizeRange}${dotsSizeUnit};
		}
		.eb-post-carousel-wrapper.${blockId}.dot-style-3 .slick-dots li button:before {
			background-color: ${dotsColor} !important;
			font-size: 0;
			width: ${dotsSizeRange}${dotsSizeUnit};
			height: ${dotsSizeRange}${dotsSizeUnit};
		}

		.eb-post-carousel-wrapper.${blockId} .slick-dots li.slick-active button:before {
			color: ${dotsActiveColor} !important;
		}
		.eb-post-carousel-wrapper.${blockId}.dot-style-2 .slick-dots li.slick-active button:before {
			background-color: ${dotsActiveColor} !important;
		}
		.eb-post-carousel-wrapper.${blockId}.dot-style-3 .slick-dots li.slick-active button:before {
			background-color: ${dotsActiveColor} !important;
			width: calc(${dotsSizeRange}${dotsSizeUnit}* 2);
		}
		.eb-post-carousel-wrapper.${blockId}.dot-style-3 .slick-dots li.slick-active {
			width: calc(${dotsSizeRange}${dotsSizeUnit}* 2);
		}

		.eb-post-carousel-wrapper.${blockId}.dot-style-4 .slick-dots li button:before {
			background-color: ${dotsColor} !important;
			font-size: 0;
			width: ${dotsSizeRange}${dotsSizeUnit};
		}
		.eb-post-carousel-wrapper.${blockId}.dot-style-4 .slick-dots li.slick-active button:before {
			background-color: ${dotsActiveColor} !important;
			width: calc(${dotsSizeRange}${dotsSizeUnit});
		}
		.eb-post-carousel-wrapper.${blockId}.dot-style-4 .slick-dots li.slick-active {
			width: calc(${dotsSizeRange}${dotsSizeUnit});
		}
	`;
    const sliderControlsStylesTab = `
		.eb-post-carousel-wrapper.${blockId} .slick-prev {
			${leftArrowPositionTab}
		}
		.eb-post-carousel-wrapper.${blockId} .slick-next {
			${rightArrowPositionTab}
		}
		.eb-post-carousel-wrapper.${blockId} .slick-prev i,
		.eb-post-carousel-wrapper.${blockId} .slick-next i {
			${arrowSizeTab}
		}
		.eb-post-carousel-wrapper.${blockId}.eb-slider-dots,
		.eb-post-carousel-wrapper.${blockId}.slick-dotted.slick-slider{
			margin-bottom: calc(${carouselDotPositionTab}px + 20px);
		}
		.eb-post-carousel-wrapper.${blockId} .slick-dots {
			${dotsPositionTab}
		}
		.eb-post-carousel-wrapper.${blockId} .slick-dots li {
			${dotsGapTab}
		}
		.eb-post-carousel-wrapper.${blockId} .slick-dots li button:before {
			${dotsSizeTab}
		}

		.eb-post-carousel-wrapper.${blockId}.dot-style-2 .slick-dots li button:before {
			width: ${TABdotsSizeRange}${TABdotsSizeUnit};
			height: ${TABdotsSizeRange}${TABdotsSizeUnit};
		}
		.eb-post-carousel-wrapper.${blockId}.dot-style-3 .slick-dots li button:before {
			width: ${TABdotsSizeRange}${TABdotsSizeUnit};
			height: ${TABdotsSizeRange}${TABdotsSizeUnit};
		}

		.eb-post-carousel-wrapper.${blockId}.dot-style-3 .slick-dots li.slick-active button:before {
			width: calc(${TABdotsSizeRange}${TABdotsSizeUnit}* 2);
		}
		.eb-post-carousel-wrapper.${blockId}.dot-style-3 .slick-dots li.slick-active {
			width: calc(${TABdotsSizeRange}${TABdotsSizeUnit}* 2);
		}
	`;
    const sliderControlsStylesMobile = `
		.eb-post-carousel-wrapper.${blockId} .slick-prev {
			${leftArrowPositionMobile}
		}
		.eb-post-carousel-wrapper.${blockId} .slick-next {
			${rightArrowPositionMobile}
		}
		.eb-post-carousel-wrapper.${blockId} .slick-prev i,
		.eb-post-carousel-wrapper.${blockId} .slick-next i {
			${arrowSizeMobile}
		}
		.eb-post-carousel-wrapper.${blockId}.eb-slider-dots,
		.eb-post-carousel-wrapper.${blockId}.slick-dotted.slick-slider{
			margin-bottom: calc(${carouselDotPositionMob}px + 20px);
		}
		.eb-post-carousel-wrapper.${blockId} .slick-dots {
			${dotsPositionMobile}
		}
		.eb-post-carousel-wrapper.${blockId} .slick-dots li {
			${dotsGapMobile}
		}
		.eb-post-carousel-wrapper.${blockId} .slick-dots li button:before {
			${dotsSizeMobile}
		}

		.eb-post-carousel-wrapper.${blockId}.dot-style-2 .slick-dots li button:before {
			width: ${MOBdotsSizeRange}${MOBdotsSizeUnit};
			height: ${MOBdotsSizeRange}${MOBdotsSizeUnit};
		}
		.eb-post-carousel-wrapper.${blockId}.dot-style-3 .slick-dots li button:before {
			width: ${MOBdotsSizeRange}${TABdotsSizeUnit};
			height: ${MOBdotsSizeRange}${MOBdotsSizeUnit};
		}

		.eb-post-carousel-wrapper.${blockId}.dot-style-3 .slick-dots li.slick-active button:before {
			width: calc(${MOBdotsSizeRange}${MOBdotsSizeUnit}* 2);
		}
		.eb-post-carousel-wrapper.${blockId}.dot-style-3 .slick-dots li.slick-active {
			width: calc(${MOBdotsSizeRange}${MOBdotsSizeUnit}* 2);
		}

		.eb-post-carousel-wrapper.${blockId}.eb-dot-style-modern-1 .slick-dots li button:before,
        .eb-post-carousel-wrapper.${blockId}.eb-dot-style-modern-2 .slick-dots li button:before,
        .eb-post-carousel-wrapper.${blockId}.eb-dot-style-modern-3 .slick-dots li button:before {
			background-color: ${dotsColor} !important;
			font-size: 0;
		}
		.eb-post-carousel-wrapper.${blockId}.eb-dot-style-modern-1 .slick-dots li.slick-active button:before,
		.eb-post-carousel-wrapper.${blockId}.eb-dot-style-modern-2 .slick-dots li.slick-active button:before,
        .eb-post-carousel-wrapper.${blockId}.eb-dot-style-modern-3 .slick-dots li.slick-active button:before {
			background-color: ${dotsActiveColor} !important;
		}
	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
		${carouselColumnStylesDesktop}
		${thumbnailStyleDesktop}
		${titleStyleDesktop}
		${contentStyleDesktop}
		${readmoreStyleDesktop}
		${avatarStyleDesktop}
		${dateStyleDesktop}
		${authorStyleDesktop}
		${commonStyleDesktop}
		${dynamicMetaStyleDesktop}
		${categoriesStyleDesktop}
		${tagsStyleDesktop}
		${headerMetaDesktop}
		${footerMetaDesktop}
		${sliderControlsStylesDesktop}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
		${carouselColumnStylesTab}
		${thumbnailStyleTab}
		${titleStyleTab}
		${contentStyleTab}
		${readmoreStyleTab}
		${avatarStyleTab}
		${dateStyleTab}
		${authorStyleTab}
		${commonStyleTab}
		${dynamicMetaStyleTab}
		${categoriesStyleTab}
		${tagsStyleTab}
		${headerMetaTab}
		${footerMetaTab}
		${sliderControlsStylesTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
		${carouselColumnStylesMobile}
		${thumbnailStyleMobile}
		${titleStyleMobile}
		${contentStyleMobile}
		${readmoreStyleMobile}
		${avatarStyleMobile}
		${dateStyleMobile}
		${authorStyleMobile}
		${commonStyleMobile}
		${dynamicMetaStyleMobile}
		${categoriesStyleMobile}
		${tagsStyleMobile}
		${headerMetaMobile}
		${footerMetaMobile}
		${sliderControlsStylesMobile}
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
