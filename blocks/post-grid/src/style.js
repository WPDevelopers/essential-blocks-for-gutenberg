/**
 * WordPress dependencies
 */
import { useEffect, useState } from "@wordpress/element";

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
    READMORE_BORDER_SHADOW,
    HEADER_META_MARGIN,
    FOOTER_META_MARGIN,
    HEADER_META_SPACE,
    FOOTER_META_SPACE,
    AVATAR_BORDER_RADIUS,
    COLUMN_MEDIA_WIDTH,
    LOADMORE_PADDING,
    LOADMORE_MARGIN,
    LOADMORE_BORDER_SHADOW,
    FILTER_MARGIN,
    FILTER_ITEM_PADDING,
    FILTER_ITEM_BORDER_SHADOW,
    FILTER_ITEM_GAP,
    ICON_SIZE,
    ICON_SPACE,
} from "./constants/constants";
import {
    EBPG_TITLE_TYPOGRAPHY,
    EBPG_CONTENT_TYPOGRAPHY,
    EBPG_READMORE_TYPOGRAPHY,
    EBPG_META_TYPOGRAPHY,
    EBPG_LOAD_MORE_TYPOGRAPHY,
    FILTER_ITEM_TYPOGRAPHY,
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
    const { attributes, setAttributes, name, isContentEnabled } = props;

    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        preset,
        queryResults,
        loadMoreOptions,
        showThumbnail,
        thumbnailOverlayColor,
        thumbnailOverlayHoverColor,
        thumbnailSize,
        showTitle,
        titleColor,
        titleHoverColor,
        titleLength,
        titleTextAlign,
        titleTag,
        showContent,
        contentColor,
        contentTextAlign,
        contentLength,
        expansionIndicator,
        showReadMore,
        readmoreText,
        readmoreColor,
        readmoreBGColor,
        readmoreTextAlign,
        readmoreHoverColor,
        readmoreBGHoverColor,
        showMeta,
        headerMeta,
        footerMeta,
        headerMetaTextAlign,
        footerMetaTextAlign,
        authorMetaColor,
        authorMetaHoverColor,
        commonMetaColor,
        commonMetaHoverColor,
        commonMetaBgColor,
        commonMetaBgHoverColor,
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
        loadMoreColorType,
        loadMoreColor,
        loadMoreBgColor,
        loadMoreHoverColor,
        loadMoreHoverBgColor,
        loadMoreActiveColor,
        loadMoreActiveBgColor,
        ReadTimeMetaColor,
        dynamicMetaColor,
        dynamicMetaBgColor,
        showTaxonomyFilter,
        filterBgColor,
        filterTextColor,
        filterActiveBgColor,
        filterActiveTextColor,
        filterHoverBgColor,
        filterHoverTextColor,
        classHook,
        addIcon,
        iconPosition,
        enableContents,
    } = attributes;

    useEffect(() => {
        const borderColor = attributes[`${FILTER_ITEM_BORDER_SHADOW}borderColor`];
        const borderStyle = attributes[`${FILTER_ITEM_BORDER_SHADOW}borderStyle`];
        if (!borderColor && borderStyle === "none") {
            setAttributes({
                [`${FILTER_ITEM_BORDER_SHADOW}borderColor`]: "var(--eb-global-tertiary-color)",
                [`${FILTER_ITEM_BORDER_SHADOW}borderStyle`]: "solid",
            });
        }
    }, []);

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
        defaultFontSize: 15,
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
        typoStylesDesktop: filterTypoStylesDesktop,
        typoStylesTab: filterTypoStylesTab,
        typoStylesMobile: filterTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: FILTER_ITEM_TYPOGRAPHY,
        defaultFontSize: 16,
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
        dimensionStylesDesktop: filterItemPaddingDesktop,
        dimensionStylesTab: filterItemPaddingTab,
        dimensionStylesMobile: filterItemPaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: FILTER_ITEM_PADDING,
        styleFor: "padding",
        attributes,
    });

    const {
        dimensionStylesDesktop: filterMarginStylesDesktop,
        dimensionStylesTab: filterMarginStylesTab,
        dimensionStylesMobile: filterMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: FILTER_MARGIN,
        styleFor: "margin",
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
        rangeStylesDesktop: columnNumberDesktop,
        rangeStylesTab: columnNumberTab,
        rangeStylesMobile: columnNumberMobile,
    } = generateResponsiveRangeStyles({
        controlName: COLUMNS,
        property: "",
        attributes,
    });

    const {
        rangeStylesDesktop: columnGapDesktop,
        rangeStylesTab: columnGapTab,
        rangeStylesMobile: columnGapMobile,
    } = generateResponsiveRangeStyles({
        controlName: COLUMN_GAP,
        property: "gap",
        attributes,
    });

    const {
        rangeStylesDesktop: filterItemGapDesktop,
        rangeStylesTab: filterItemGapTab,
        rangeStylesMobile: filterItemGapMobile,
    } = generateResponsiveRangeStyles({
        controlName: FILTER_ITEM_GAP,
        property: "gap",
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

    //Load More Controls
    const {
        dimensionStylesDesktop: loadMorePaddingDesktop,
        dimensionStylesTab: loadMorePaddingTab,
        dimensionStylesMobile: loadMorePaddingMobile,
    } = generateDimensionsControlStyles({
        controlName: LOADMORE_PADDING,
        styleFor: "padding",
        attributes,
    });

    const {
        dimensionStylesDesktop: loadMoreMarginDesktop,
        dimensionStylesTab: loadMoreMarginTab,
        dimensionStylesMobile: loadMoreMarginMobile,
    } = generateDimensionsControlStyles({
        controlName: LOADMORE_MARGIN,
        styleFor: "margin",
        attributes,
    });

    const {
        typoStylesDesktop: loadmoreTypoStylesDesktop,
        typoStylesTab: loadmoreTypoStylesTab,
        typoStylesMobile: loadmoreTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: EBPG_LOAD_MORE_TYPOGRAPHY,
        defaultFontSize: 14,
    });

    const {
        styesDesktop: loadMoreBDShadowDesktop,
        styesTab: loadMoreBDShadowTab,
        styesMobile: loadMoreBDShadowMobile,
        stylesHoverDesktop: loadMoreBDShadowHoverDesktop,
        stylesHoverTab: loadMoreBDShadowHoverTab,
        stylesHoverMobile: loadMoreBDShadowHoverMobile,
        transitionStyle: loadMoreBDShadowTransition,
    } = generateBorderShadowStyles({
        controlName: LOADMORE_BORDER_SHADOW,
        attributes,
        noShadow: true,
    });

    const {
        styesDesktop: readMoreBDShadowDesktop,
        styesTab: readMoreBDShadowTab,
        styesMobile: readMoreBDShadowMobile,
        stylesHoverDesktop: readMoreBDShadowHoverDesktop,
        stylesHoverTab: readMoreBDShadowHoverTab,
        stylesHoverMobile: readMoreBDShadowHoverMobile,
        transitionStyle: readMoreBDShadowTransition,
    } = generateBorderShadowStyles({
        controlName: READMORE_BORDER_SHADOW,
        attributes,
        noShadow: true,
    });

    const {
        styesDesktop: filterBDShadowDesktop,
        styesTab: filterBDShadowTab,
        styesMobile: filterBDShadowMobile,
        stylesHoverDesktop: filterBDShadowHoverDesktop,
        stylesHoverTab: filterBDShadowHoverTab,
        stylesHoverMobile: filterBDShadowHoverMobile,
        transitionStyle: filterBDShadowTransition,
    } = generateBorderShadowStyles({
        controlName: FILTER_ITEM_BORDER_SHADOW,
        attributes,
    });

    // button icon size
    const {
        rangeStylesDesktop: iconSizeDesktop,
        rangeStylesTab: iconSizeTab,
        rangeStylesMobile: iconSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: ICON_SIZE,
        property: "font-size",
        attributes,
        customUnit: "px",
    });

    // button gap left
    const {
        rangeStylesDesktop: iconGapLeftDesktop,
        rangeStylesTab: iconGapLeftTab,
        rangeStylesMobile: iconGapLeftMobile,
    } = generateResponsiveRangeStyles({
        controlName: ICON_SPACE,
        property: "margin-left",
        attributes,
        customUnit: "px",
    });

    // button gap right
    const {
        rangeStylesDesktop: iconGapRightDesktop,
        rangeStylesTab: iconGapRightTab,
        rangeStylesMobile: iconGapRightMobile,
    } = generateResponsiveRangeStyles({
        controlName: ICON_SPACE,
        property: "margin-right",
        attributes,
        customUnit: "px",
    });

    // wrapper styles css in strings ⬇
    const wrapperStylesDesktop = `
        .eb-post-grid-wrapper.${blockId} .eb-post-grid-posts-wrapper {
            display: grid;
            position: relative;
            grid-template-columns: repeat(${columnNumberDesktop.replace(/\D/g, "")}, minmax(0, 1fr));
            ${columnGapDesktop}
        }

		.eb-post-grid-wrapper.${blockId}{
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
			${wrapperBackgroundStylesDesktop}
			${wrapperBDShadowDesktop}
			transition: ${wrapperBgTransitionStyle}, ${wrapperBDShadowTransition};
		}
		.eb-post-grid-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesDesktop}
			${wrapperBDShadowHoverDesktop}
		}
	`;
    const wrapperStylesTab = `
    .eb-post-grid-wrapper.${blockId} .eb-post-grid-posts-wrapper {
            grid-template-columns: repeat(
				${columnNumberTab
            ? columnNumberTab.replace(/\D/g, "")
            : typeof queryResults === "object" && queryResults.length > 1
                ? 2
                : 1
        },
				minmax(0, 1fr)
			);
			${columnGapTab}
        }
		.eb-post-grid-wrapper.${blockId}{
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
			${wrapperBackgroundStylesTab}
			${wrapperBDShadowTab}
		}
		.eb-post-grid-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesTab}
			${wrapperBDShadowHoverTab}
		}
	`;
    const wrapperStylesMobile = `
        .eb-post-grid-wrapper.${blockId} .eb-post-grid-posts-wrapper {
            grid-template-columns: repeat(
				${columnNumberMobile ? columnNumberMobile.replace(/\D/g, "") : 1},
				minmax(0, 1fr)
			);
			${columnGapMobile}
        }
		.eb-post-grid-wrapper.${blockId} {
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}
			${wrapperBackgroundStylesMobile}
			${wrapperBDShadowMobile}
		}
		.eb-post-grid-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesMobile}
			${wrapperBDShadowHoverMobile}
		}
	`;

    let mediaWidthNumber = mediaWidthStylesDesktop.replace(/\D/g, "");
    const gridColumnStylesDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-post-grid-column {
			${columnPaddingStylesDesktop}
			${columnBDShadowDesktop}
			${columnBackgroundStylesDesktop}
			transition: ${columnBgTransitionStyle}, ${columnBDShadowTransition};
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-post-grid-column:hover {
			${columnHoverBackgroundStylesDesktop}
			${columnBDShadowHoverDesktop}
		}
		${preset === "style-4" && mediaWidthStylesDesktop
            ? `
			.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder {
				align-items: ${styleVerticalAlignment};
			}
			${mediaWidthNumber === "0"
                ? `.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-media {
					display: none;
				}
				.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-wrapper {
					width: ${100 - mediaWidthNumber}%;
				}`
                : mediaWidthNumber === "100"
                    ? `.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder {
						flex-wrap: wrap;
					}
					.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-media {
						width: ${mediaWidthNumber}%;
					}
					.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-wrapper {
						width: ${mediaWidthNumber}%;
					}`
                    : `.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-media {
					width: ${mediaWidthNumber}%;
				}
				.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-wrapper {
					width: ${100 - mediaWidthNumber}%;
				}`
            }`
            : ""
        }
		${preset === "style-5"
            ? `
			.eb-post-grid-wrapper.${blockId}.style-5 .ebpg-grid-post-holder .ebpg-entry-wrapper {
				justify-content: ${styleVerticalAlignment};
			}
			`
            : ""
        }
	`;

    let mediaWidthNumberTab = mediaWidthStylesTab.replace(/\D/g, "");
    const gridColumnStylesTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-post-grid-column {
			${columnPaddingStylesTab}
			${columnBDShadowTab}
			${columnBackgroundStylesTab}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-post-grid-column:hover {
			${columnHoverBackgroundStylesTab}
			${columnBDShadowHoverTab}
		}
		${preset === "style-4" && mediaWidthStylesTab
            ? `
			.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder {
				align-items: ${styleVerticalAlignment};
			}
			${mediaWidthNumberTab === "0"
                ? `.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-media {
					display: none;
				}
				.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-wrapper {
					width: ${100 - mediaWidthNumberTab}%;
				}`
                : mediaWidthNumberTab === "100"
                    ? `.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder {
						flex-wrap: wrap;
					}
					.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-media {
						width: ${mediaWidthNumberTab}%;
					}
					.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-wrapper {
						width: ${mediaWidthNumberTab}%;
					}`
                    : `.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-media {
					width: ${mediaWidthNumberTab}%;
				}
				.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-wrapper {
					width: ${100 - mediaWidthNumberTab}%;
				}`
            }`
            : ""
        }
	`;

    let mediaWidthNumberMobile = mediaWidthStylesMobile.replace(/\D/g, "");
    const gridColumnStylesMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-post-grid-column {
			${columnPaddingStylesMobile}
			${columnBDShadowMobile}
			${columnBackgroundStylesMobile}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-post-grid-column:hover {
			${columnHoverBackgroundStylesMobile}
			${columnBDShadowHoverMobile}
		}
		${preset === "style-4" && mediaWidthStylesMobile
            ? `
			.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder {
				align-items: ${styleVerticalAlignment};
			}
			${mediaWidthNumberMobile === "0"
                ? `.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-media {
					display: none;
				}
				.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-wrapper {
					width: ${100 - mediaWidthNumberMobile}%;
				}`
                : mediaWidthNumberMobile === "100"
                    ? `.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder {
						flex-wrap: wrap;
					}
					.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-media {
						width: ${mediaWidthNumberMobile}%;
					}
					.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-wrapper {
						width: ${mediaWidthNumberMobile}%;
					}`
                    : `.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-media {
					width: ${mediaWidthNumberMobile}%;
				}
				.eb-post-grid-wrapper.${blockId}.style-4 .ebpg-grid-post-holder .ebpg-entry-wrapper {
					width: ${100 - mediaWidthNumberMobile}%;
				}`
            }`
            : ""
        }
	`;

    const thumbnailStyleDesktop = `
        ${preset === "style-1" || preset === "style-2" || preset === "style-3"
            ? `
            .eb-post-grid-wrapper.${blockId} .ebpg-entry-media {
                ${isContentEnabled("thumbnail") && `order: ${enableContents.indexOf("thumbnail") + 1}`}
            }
            `
            : ""
        }
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-thumbnail {
			${thumbnailMarginStylesDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-thumbnail img {
			${thumbnailImageHeightDesktop}
			${thumbnailBdrSdwStylesDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-grid-post-holder .ebpg-entry-thumbnail:after {
			background-color: ${thumbnailOverlayColor};
			${thumbnailBdrSdwStylesDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-grid-post-holder .ebpg-entry-thumbnail:hover:after,
		.eb-post-grid-wrapper.${blockId}.style-5 .ebpg-grid-post-holder:hover .ebpg-entry-thumbnail:after {
			background-color: ${thumbnailOverlayHoverColor};
			${thumbnailBdrSdwStylesDesktop}
		}
	`;

    const thumbnailStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-thumbnail {
			${thumbnailMarginStylesTab}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-thumbnail img {
			${thumbnailImageHeightTab}
			${thumbnailBdrSdwStylesTab}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-grid-post-holder .ebpg-entry-thumbnail:hover:after,
		.eb-post-grid-wrapper.${blockId}.style-5 .ebpg-grid-post-holder:hover .ebpg-entry-thumbnail:after {
			${thumbnailBdrSdwStylesTab}
		}
	`;

    const thumbnailStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-thumbnail {
			${thumbnailMarginStylesMobile}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-thumbnail img {
			${thumbnailImageHeightMobile}
			${thumbnailBdrSdwStylesMobile}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-grid-post-holder .ebpg-entry-thumbnail:hover:after,
		.eb-post-grid-wrapper.${blockId}.style-5 .ebpg-grid-post-holder:hover .ebpg-entry-thumbnail:after {
			${thumbnailBdrSdwStylesMobile}
		}
	`;

    const titleStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-header {
            ${isContentEnabled("title") && `order: ${enableContents.indexOf("title") + 1}`}
        }
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-title {
			text-align: ${titleTextAlign};
			${titleTypoStylesDesktop}
			${titleMarginStylesDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-title a {
			color: ${titleColor};
			${titleTypoStylesDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-title a:hover {
			color: ${titleHoverColor};
		}
	`;

    const titleStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-title {
			${titleTypoStylesTab}
			${titleMarginStylesTab}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-title a {
			${titleTypoStylesTab}
		}
	`;

    const titleStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-title {
			${titleTypoStylesMobile}
			${titleMarginStylesMobile}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-title a {
			${titleTypoStylesMobile}
		}
	`;

    const contentStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-content, .eb-post-grid-wrapper.${blockId} .ebpg-grid-post-excerpt {
            ${isContentEnabled("excerpt") && `order: ${enableContents.indexOf("excerpt") + 1}`}
        }
		.eb-post-grid-wrapper.${blockId} .ebpg-grid-post-excerpt p {
			color: ${contentColor};
			text-align: ${contentTextAlign};
			${contentTypoStylesDesktop}
			${contentMarginStylesDesktop}
		}
	`;

    const contentStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-grid-post-excerpt p {
			${contentTypoStylesTab}
			${contentMarginStylesTab}
		}
	`;

    const contentStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-grid-post-excerpt p {
			${contentTypoStylesMobile}
			${contentMarginStylesMobile}
		}
	`;

    const readmoreStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-readmore-btn {
			text-align: ${readmoreTextAlign};
            order: 10;
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-readmore-btn a {
			color: ${readmoreColor};
			background-color: ${readmoreBGColor};
			${readmoreTypoStylesDesktop}
			${readmoreMarginStylesDesktop}
			${readmorePaddingStylesDesktop}
            ${readMoreBDShadowDesktop}
			transition: ${readMoreBDShadowTransition};
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-readmore-btn a:hover {
			color: ${readmoreHoverColor};
			background-color: ${readmoreBGHoverColor};
            ${readMoreBDShadowHoverDesktop}
		}

		${addIcon
            ? `.eb-post-grid-wrapper.${blockId} .ebpg-readmore-btn .eb-button-icon {
					${iconSizeDesktop}
					${iconPosition === "left" ? iconGapRightDesktop : iconGapLeftDesktop}
				}`
            : ""
        }
	`;

    const readmoreStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-readmore-btn a {
			${readmoreTypoStylesTab}
			${readmoreMarginStylesTab}
			${readmorePaddingStylesTab}
            ${readMoreBDShadowTab}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-readmore-btn a:hover {
            ${readMoreBDShadowHoverTab}
		}
		${addIcon
            ? `.eb-post-grid-wrapper.${blockId} .ebpg-readmore-btn .eb-button-icon {
					${iconSizeTab}
					${iconPosition === "left" ? iconGapRightTab : iconGapLeftTab}
				}`
            : ""
        }
	`;

    const readmoreStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-readmore-btn a {
			${readmoreTypoStylesMobile}
			${readmoreMarginStylesMobile}
			${readmorePaddingStylesMobile}
            ${readMoreBDShadowMobile}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-readmore-btn a:hover {
            ${readMoreBDShadowHoverMobile}
		}
		${addIcon
            ? `.eb-post-grid-wrapper.${blockId} .ebpg-readmore-btn .eb-button-icon {
					${iconSizeMobile}
					${iconPosition === "left" ? iconGapRightMobile : iconGapLeftMobile}
				}`
            : ""
        }
	`;

    const avatarStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-author-avatar img {
			${avatarBdrSdwStylesDesktop}
		}
	`;

    const avatarStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-author-avatar img {
			${avatarBdrSdwStylesTab}
		}
	`;

    const avatarStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-author-avatar img {
			${avatarBdrSdwStylesMobile}
		}
	`;

    const dateStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-posted-on {
			color: ${dateMetaColor};
			${metaTypoStylesDesktop}
		}
	`;

    const dateStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-posted-on {
			${metaTypoStylesTab}
		}
	`;

    const dateStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-posted-on {
			${metaTypoStylesMobile}
		}
	`;

    const authorStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-posted-by {
			color: ${authorMetaColor};
			${metaTypoStylesDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-posted-by a {
			color: ${authorMetaColor};
			${metaTypoStylesDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-posted-by a:hover {
			color: ${authorMetaHoverColor};
		}
	`;

    const authorStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-posted-by {
			${metaTypoStylesTab}
		}
	`;

    const authorStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-posted-by {
			${metaTypoStylesMobile}
		}
	`;

    const commonStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-meta a {
			color: ${commonMetaColor};
			background-color: ${commonMetaBgColor};
			${metaTypoStylesDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-meta a:hover {
			color: ${commonMetaHoverColor};
			background-color: ${commonMetaBgHoverColor};
		}
	`;

    const commonStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-meta a {
			${metaTypoStylesTab}
		}
	`;

    const commonStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-meta a {
			${metaTypoStylesMobile}
		}
	`;

    const categoriesStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-categories-meta a {
			color: ${categoryMetaColor};
			background-color: ${categoryMetaBgColor};
			${metaTypoStylesDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-categories-meta a:hover {
			color: ${categoryMetaHoverColor};
			background-color: ${categoryMetaBgHoverColor};
		}
	`;

    const categoriesStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-categories-meta a {
			${metaTypoStylesTab}
		}
	`;

    const categoriesStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-categories-meta a {
			${metaTypoStylesMobile}
		}
	`;

    const tagsStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-tags-meta a {
			color: ${tagMetaColor};
			background-color: ${tagMetaBgColor};
			${metaTypoStylesDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-tags-meta a:hover {
			color: ${tagMetaHoverColor};
			background-color: ${tagMetaBgHoverColor};
		}
	`;

    const tagsStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-tags-meta a {
			${metaTypoStylesTab}
		}
	`;

    const tagsStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-tags-meta a {
			${metaTypoStylesMobile}
		}
	`;

    const readTimeStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-read-time {
			color: ${ReadTimeMetaColor};
			${metaTypoStylesDesktop}
		}
	`;

    const readTimeStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-read-time {
			${metaTypoStylesTab}
		}
	`;

    const readTimeStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-read-time {
			${metaTypoStylesMobile}
		}
	`;

    const dynamicMetaStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-meta.ebpg-dynamic-values {
			color: ${dynamicMetaColor};
			background-color: ${dynamicMetaBgColor};
			${metaTypoStylesDesktop}
		}
	`;

    const dynamicMetaStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-meta.ebpg-dynamic-values  {
			${metaTypoStylesTab}
		}
	`;

    const dynamicMetaStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-meta.ebpg-dynamic-values  {
			${metaTypoStylesMobile}
		}
	`;

    const headerMetaDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-header-meta {
			justify-content: ${headerMetaTextAlign};
			${headerMetaMarginStylesDesktop}
            ${isContentEnabled("headerMeta") && `order: ${enableContents.indexOf("headerMeta") + 1}`}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-header-meta .ebpg-entry-meta-items {
			justify-content: ${headerMetaTextAlign};
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-header-meta .ebpg-author-avatar,
		.eb-post-grid-wrapper.${blockId} .ebpg-header-meta .ebpg-entry-meta-items > * {
			${headerMetaSpaceDesktop}
		}
	`;

    const headerMetaTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-header-meta {
			${headerMetaMarginStylesTab}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-header-meta .ebpg-author-avatar,
		.eb-post-grid-wrapper.${blockId} .ebpg-header-meta .ebpg-entry-meta-items > * {
			${headerMetaSpaceTab}
		}
	`;

    const headerMetaMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-header-meta {
			${headerMetaMarginStylesMobile}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-header-meta .ebpg-author-avatar,
		.eb-post-grid-wrapper.${blockId} .ebpg-header-meta .ebpg-entry-meta-items > * {
			${headerMetaSpaceMobile}
		}
	`;

    const footerMetaDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-footer-meta {
			justify-content: ${footerMetaTextAlign};
			${footerMetaMarginStylesDesktop}
            ${isContentEnabled("footerMeta") && `order: ${enableContents.indexOf("footerMeta") + 1}`}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-footer-meta .ebpg-entry-meta-items {
			justify-content: ${footerMetaTextAlign};
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-footer-meta .ebpg-author-avatar,
		.eb-post-grid-wrapper.${blockId} .ebpg-footer-meta .ebpg-entry-meta-items > * {
			${footerMetaSpaceDesktop}
		}
	`;

    const footerMetaTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-footer-meta {
			${footerMetaMarginStylesTab}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-footer-meta .ebpg-author-avatar,
		.eb-post-grid-wrapper.${blockId} .ebpg-footer-meta .ebpg-entry-meta-items > * {
			${footerMetaSpaceTab}
		}
	`;

    const footerMetaMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-footer-meta {
			${footerMetaMarginStylesMobile}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-footer-meta .ebpg-author-avatar,
		.eb-post-grid-wrapper.${blockId} .ebpg-footer-meta .ebpg-entry-meta-items > * {
			${footerMetaSpaceMobile}
		}
	`;

    const loadMoreStylesDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-pagination {
			text-align: ${loadMoreOptions ? loadMoreOptions.alignment : "center"};
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-pagination button {
			color: ${loadMoreColor};
			background-color: ${loadMoreBgColor};
			${loadMorePaddingDesktop}
			${loadMoreMarginDesktop}
			${loadmoreTypoStylesDesktop}
			${loadMoreBDShadowDesktop}
			transition: ${loadMoreBDShadowTransition};
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-pagination button:hover {
			color: ${loadMoreHoverColor};
			background-color: ${loadMoreHoverBgColor};
			${loadMoreBDShadowHoverDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-pagination button.ebpg-pagination-item.active {
			color: ${loadMoreActiveColor};
			background-color: ${loadMoreActiveBgColor};
		}
	`;

    const loadMoreStylesTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-pagination button {
			${loadMorePaddingTab}
			${loadMoreMarginTab}
			${loadmoreTypoStylesTab}
			${loadMoreBDShadowTab}
			${loadMoreBDShadowHoverTab}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-pagination button:hover {
			${loadMoreBDShadowHoverTab}
		}
	`;

    const loadMoreStylesMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-pagination button {
			${loadMorePaddingMobile}
			${loadMoreMarginMobile}
			${loadmoreTypoStylesMobile}
			${loadMoreBDShadowMobile}
			${loadMoreBDShadowHoverMobile}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-pagination button:hover {
			${loadMoreBDShadowHoverMobile}
		}
	`;

    const filterStylesDesktop = `
		${showTaxonomyFilter
            ? `
			.eb-post-grid-wrapper.${blockId} .eb-post-grid-category-filter {
				${filterMarginStylesDesktop}
			}
			.eb-post-grid-wrapper.${blockId} .ebpg-category-filter-list {
				${filterItemGapDesktop}
			}
			.eb-post-grid-wrapper.${blockId} .ebpg-category-filter-list-item {
				color: ${filterTextColor};
				background-color: ${filterBgColor};
				${filterTypoStylesDesktop}
				${filterItemPaddingDesktop}
				${filterBDShadowDesktop}
				transition: ${filterBDShadowTransition};
			}
			.eb-post-grid-wrapper.${blockId} .ebpg-category-filter-list-item.active {
				color: ${filterActiveTextColor};
				background-color: ${filterActiveBgColor};
			}
			.eb-post-grid-wrapper.${blockId} .ebpg-category-filter-list-item:hover {
				color: ${filterHoverTextColor};
				background-color: ${filterHoverBgColor};
				${filterBDShadowHoverDesktop}
			}
		`
            : ""
        }
	`;

    const filterStylesTab = `
		${showTaxonomyFilter
            ? `
			.eb-post-grid-wrapper.${blockId} .eb-post-grid-category-filter {
				${filterMarginStylesTab}
			}
			.eb-post-grid-wrapper.${blockId} .ebpg-category-filter-list {
				${filterItemGapTab}
			}
			.eb-post-grid-wrapper.${blockId} .ebpg-category-filter-list-item {
				${filterTypoStylesTab}
				${filterItemPaddingTab}
				${filterBDShadowTab}
			}
			.eb-post-grid-wrapper.${blockId} .ebpg-category-filter-list-item:hover {
				${filterBDShadowHoverTab}
			}
		`
            : ""
        }
	`;

    const filterStylesMobile = `
		${showTaxonomyFilter
            ? `
			.eb-post-grid-wrapper.${blockId} .eb-post-grid-category-filter {
				${filterMarginStylesMobile}
			}
			.eb-post-grid-wrapper.${blockId} .ebpg-category-filter-list {
				${filterItemGapMobile}
			}
			.eb-post-grid-wrapper.${blockId} .ebpg-category-filter-list-item {
				${filterTypoStylesMobile}
				${filterItemPaddingMobile}
				${filterBDShadowMobile}
			}
			.eb-post-grid-wrapper.${blockId} .ebpg-category-filter-list-item:hover {
				${filterBDShadowHoverMobile}
			}
		`
            : ""
        }
	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
		${gridColumnStylesDesktop}
		${thumbnailStyleDesktop}
		${titleStyleDesktop}
		${contentStyleDesktop}
		${readmoreStyleDesktop}
		${avatarStyleDesktop}
		${dateStyleDesktop}
		${authorStyleDesktop}
		${commonStyleDesktop}
		${categoriesStyleDesktop}
		${tagsStyleDesktop}
		${readTimeStyleDesktop}
		${dynamicMetaStyleDesktop}
		${headerMetaDesktop}
		${footerMetaDesktop}
		${loadMoreStylesDesktop}
		${filterStylesDesktop}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
		${gridColumnStylesTab}
		${thumbnailStyleTab}
		${titleStyleTab}
		${contentStyleTab}
		${readmoreStyleTab}
		${avatarStyleTab}
		${dateStyleTab}
		${authorStyleTab}
		${commonStyleTab}
		${categoriesStyleTab}
		${tagsStyleTab}
		${readTimeStyleTab}
		${dynamicMetaStyleTab}
		${headerMetaTab}
		${footerMetaTab}
		${loadMoreStylesTab}
		${filterStylesTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
		${gridColumnStylesMobile}
		${thumbnailStyleMobile}
		${titleStyleMobile}
		${contentStyleMobile}
		${readmoreStyleMobile}
		${avatarStyleMobile}
		${dateStyleMobile}
		${authorStyleMobile}
		${commonStyleMobile}
		${categoriesStyleMobile}
		${tagsStyleMobile}
		${readTimeStyleMobile}
		${dynamicMetaStyleMobile}
		${headerMetaMobile}
		${footerMetaMobile}
		${loadMoreStylesMobile}
		${filterStylesMobile}
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
