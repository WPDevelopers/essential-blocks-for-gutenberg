import {
    typoPrefix_content,
    typoPrefix_title,
    typoPrefix_subTitle,
    typoPrefix_number,
    typoPrefix_buttonText,
} from "./constants/typographyPrefixConstants";

import {
    mediaBackground,
    mediaBgMargin,
    mediaBgRadius,
    // buttonRadius,
    buttonPadding,
    titlePadding,
    contentPadding,
    subTitlePadding,
    wrapperPadding,
    wrapperMargin,
} from "./constants/dimensionsConstants";

import { infoWrapBg, infoBtnBg } from "./constants/backgroundsConstants";
import { wrpBdShadow, btnBdShd } from "./constants/borderShadowConstants";

import {
    mediaIconSize,
    mediaImageWidth,
    mediaImageHeight,
    mediaContentGap,
} from "./constants/rangeNames";
const {
    softMinifyCssStrings,
    generateBackgroundControlStyles,
    generateDimensionsControlStyles,
    generateTypographyStyles,
    generateBorderShadowStyles,
    generateResponsiveRangeStyles,
    StyleComponent
} = window.EBControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        // responsive control attributes ⬇
        resOption,

        // blockMeta is for keeping all the styles
        blockMeta,

        // blockId attribute for making unique className and other uniqueness
        blockId,
        media,
        imageUrl,
        enableSubTitle,
        enableDescription,
        flexDirection,
        mediaAlignSelf,
        contentAlignment,
        useNumIconBg,
        numIconColor,
        numIconBgType,
        numIconBgColor,
        numIconBgGradient,
        [`${mediaImageWidth}Unit`]: mediaImgWidthUnit,
        [`TAB${mediaImageWidth}Unit`]: TABmediaImgWidthUnit,
        [`MOB${mediaImageWidth}Unit`]: MOBmediaImgWidthUnit,
        isMediaImgHeightAuto,
        buttonTextColor = "#30267A",
        buttonHvrTextColor,
        titleColor = "#fff",
        subTitleColor = "#fff",
        descriptionColor = "#fff",
        mediaAlignment,
        contentsAlignment,
        btnAlignment,
        numberFontSize,
        TABnumberFontSize,
        MOBnumberFontSize,
        mIconZRange,
        TABmIconZRange,
        MOBmIconZRange,
        mIconZUnit,
        TABmIconZUnit,
        MOBmIconZUnit,
        numberSizeUnit,
        TABnumberSizeUnit,
        MOBnumberSizeUnit,
        isInfoClick,
        enableButton,
        btnEffect
    } = attributes;

    const buttonThakbe = !isInfoClick && enableButton;

    //
    // styling codes starts from here
    //

    const {
        typoStylesDesktop: titleTypoStylesDesktop,
        typoStylesTab: titleTypoStylesTab,
        typoStylesMobile: titleTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_title,
        defaultFontSize: 26,
    });

    const {
        typoStylesDesktop: subTitleTypoStylesDesktop,
        typoStylesTab: subTitleTypoStylesTab,
        typoStylesMobile: subTitleTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_subTitle,
        defaultFontSize: 22,
    });

    const {
        typoStylesDesktop: contentTypoStylesDesktop,
        typoStylesTab: contentTypoStylesTab,
        typoStylesMobile: contentTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_content,
        defaultFontSize: 20,
    });

    const {
        typoStylesDesktop: buttonTypoStylesDesktop,
        typoStylesTab: buttonTypoStylesTab,
        typoStylesMobile: buttonTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_buttonText,
        defaultFontSize: 20,
    });

    const {
        typoStylesDesktop: numTypoStylesDesktop,
        typoStylesTab: numTypoStylesTab,
        typoStylesMobile: numTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_number,
        defaultFontSize: 28,
    });

    const {
        dimensionStylesDesktop: mediaBgPaddingDesktop,
        dimensionStylesTab: mediaBgPaddingTab,
        dimensionStylesMobile: mediaBgPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: mediaBackground,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: mediaRadiusStylesDesktop,
        dimensionStylesTab: mediaRadiusStylesTab,
        dimensionStylesMobile: mediaRadiusStylesMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: mediaBgRadius,
        styleFor: "border-radius",
    });

    const {
        dimensionStylesDesktop: mediaBgMarginStylesDesktop,
        dimensionStylesTab: mediaBgMarginStylesTab,
        dimensionStylesMobile: mediaBgMarginStylesMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: mediaBgMargin,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: buttonPaddingStylesDesktop,
        dimensionStylesTab: buttonPaddingStylesTab,
        dimensionStylesMobile: buttonPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: buttonPadding,
        styleFor: "padding",
    });

    // const {
    // 	dimensionStylesDesktop: buttonRadiusStylesDesktop,
    // 	dimensionStylesTab: buttonRadiusStylesTab,
    // 	dimensionStylesMobile: buttonRadiusStylesMobile,
    // } = generateDimensionsControlStyles({
    // 	attributes,
    // 	controlName: buttonRadius,
    // 	styleFor: "border-radius",
    // });

    const {
        dimensionStylesDesktop: titlePaddingStylesDesktop,
        dimensionStylesTab: titlePaddingStylesTab,
        dimensionStylesMobile: titlePaddingStylesMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: titlePadding,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: subTitlePaddingStylesDesktop,
        dimensionStylesTab: subTitlePaddingStylesTab,
        dimensionStylesMobile: subTitlePaddingStylesMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: subTitlePadding,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: contentPaddingStylesDesktop,
        dimensionStylesTab: contentPaddingStylesTab,
        dimensionStylesMobile: contentPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: contentPadding,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: wrapperPaddingStylesDesktop,
        dimensionStylesTab: wrapperPaddingStylesTab,
        dimensionStylesMobile: wrapperPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: wrapperPadding,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: wrapperMarginStylesDesktop,
        dimensionStylesTab: wrapperMarginStylesTab,
        dimensionStylesMobile: wrapperMarginStylesMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: wrapperMargin,
        styleFor: "margin",
    });

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
        controlName: infoWrapBg,
        // noOverlay: true,
        // noMainBgi: true,
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    });

    const {
        backgroundStylesDesktop: btnBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: btnHoverBackgroundStylesDesktop,
        backgroundStylesTab: btnBackgroundStylesTab,
        hoverBackgroundStylesTab: btnHoverBackgroundStylesTab,
        backgroundStylesMobile: btnBackgroundStylesMobile,
        hoverBackgroundStylesMobile: btnHoverBackgroundStylesMobile,
        bgTransitionStyle: btnBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: infoBtnBg,
        forButton: true,
        // noOverlay: true,
        // noMainBgi: true,
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    });

    const {
        styesDesktop: bdShadowStyesDesktop,
        styesTab: bdShadowStyesTab,
        styesMobile: bdShadowStyesMobile,
        stylesHoverDesktop: bdShadowStylesHoverDesktop,
        stylesHoverTab: bdShadowStylesHoverTab,
        stylesHoverMobile: bdShadowStylesHoverMobile,
        transitionStyle: bdShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: wrpBdShadow,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: btnBdShadowStyesDesktop,
        styesTab: btnBdShadowStyesTab,
        styesMobile: btnBdShadowStyesMobile,
        stylesHoverDesktop: btnBdShadowStylesHoverDesktop,
        stylesHoverTab: btnBdShadowStylesHoverTab,
        stylesHoverMobile: btnBdShadowStylesHoverMobile,
        transitionStyle: btnBdShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: btnBdShd,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        rangeStylesDesktop: iconSizeDesktop,
        rangeStylesTab: iconSizeTab,
        rangeStylesMobile: iconSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: mediaIconSize,
        customUnit: "px",
        property: "font-size",
        attributes,
    });

    const {
        rangeStylesDesktop: contentMediaGapDesktop,
        rangeStylesTab: contentMediaGapTab,
        rangeStylesMobile: contentMediaGapMobile,
    } = generateResponsiveRangeStyles({
        controlName: mediaContentGap,
        customUnit: "px",
        property: "gap",
        attributes,
    });

    const {
        rangeStylesDesktop: mediaImgHeightDesktop,
        rangeStylesTab: mediaImgHeightTab,
        rangeStylesMobile: mediaImgHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: mediaImageHeight,
        property: "height",
        attributes,
    });

    const {
        rangeStylesDesktop: mediaImgWidthDesktop,
        rangeStylesTab: mediaImgWidthTab,
        rangeStylesMobile: mediaImgWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: mediaImageWidth,
        property: "width",
        attributes,
    });

    const wrapperStylesDesktop = `
		.eb-infobox-wrapper.${blockId} {
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
			${bdShadowStyesDesktop}
			${backgroundStylesDesktop}
			transition: ${bgTransitionStyle}, ${bdShadowTransitionStyle};
		}

		.eb-infobox-wrapper.${blockId}:hover{
			${hoverBackgroundStylesDesktop}
			${bdShadowStylesHoverDesktop}
		}

		.eb-infobox-wrapper.${blockId}:before{
			${overlayStylesDesktop}
			transition: ${ovlTransitionStyle};
		}

		.eb-infobox-wrapper.${blockId}:hover:before{
			${hoverOverlayStylesDesktop}
		}

		.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner {
			${flexDirection ? `flex-direction: ${flexDirection};` : " "}
			${media !== "none" ? `${contentMediaGapDesktop}` : ""}
		}

		${media !== "none"
            ? `
				.eb-infobox-wrapper.${blockId} .icon-img-wrapper {
					${mediaAlignment
                ? `align-self: ${mediaAlignment};`
                : `align-self: ${mediaAlignSelf || "center"};`
            }

					${mediaBgMarginStylesDesktop}

				}


				${media === "image"
                ? `

						.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner .icon-img-wrapper{
							${mediaImgWidthUnit === "%" ? mediaImgWidthDesktop : " "}
						}

						.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner img {

							${imageUrl ? mediaRadiusStylesDesktop : " "}

							${mediaImgWidthUnit === "%" ? `width: 100%;` : mediaImgWidthDesktop}
							${isMediaImgHeightAuto ? `height:auto;` : mediaImgHeightDesktop}

						}

						.eb-infobox-wrapper.${blockId} .eb-infobox-image-wrapper{
							${imageUrl ? " " : mediaRadiusStylesDesktop}
						}
						`
                : " "
            }



				${media === "number" || media === "icon"
                ? `

						.eb-infobox-wrapper.${blockId} .number-or-icon {

							${mediaBgPaddingDesktop}
							${mediaRadiusStylesDesktop}

							${useNumIconBg
                    ? `${numIconBgType === "fill"
                        ? `background-color: ${numIconBgColor};`
                        : numIconBgType === "gradient"
                            ? `background-image: ${numIconBgGradient};`
                            : " "
                    }`
                    : " "
                }

						}

						.eb-infobox-wrapper.${blockId} .number-or-icon > * {
							color: ${numIconColor || "#fff"};
						}

						`
                : " "
            }



				${media === "number"
                ? `

					.eb-infobox-wrapper.${blockId} span.eb-infobox-number{
						${numTypoStylesDesktop}
						height:${numberFontSize || 28}${numberSizeUnit};
						width:${numberFontSize || 28}${numberSizeUnit};
						display:flex;
						justify-content:center;
						align-items:center;
					}

					`
                : " "
            }

				${media === "icon"
                ? `

						.eb-infobox-wrapper.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
							${iconSizeDesktop}
							height:${mIconZRange}${mIconZUnit};
							width:${mIconZRange}${mIconZUnit};
							display:flex;
							justify-content:center;
							align-items:center;
						}

						`
                : " "
            }


			`
            : " "
        }

		.eb-infobox-wrapper.${blockId} .contents-wrapper {
			flex: 1;
			${contentAlignment ? `text-align: ${contentAlignment};` : " "}

			${contentsAlignment
            ? `text-align: ${contentsAlignment};`
            : `text-align: ${contentAlignment};`
        }
		}

		.eb-infobox-wrapper.${blockId} .title {
			${titleTypoStylesDesktop}
			${titlePaddingStylesDesktop}
			${titleColor ? `color: ${titleColor};` : " "}
		}

		${enableSubTitle
            ? `
				.eb-infobox-wrapper.${blockId} .subtitle {
					${subTitleTypoStylesDesktop}
					${subTitlePaddingStylesDesktop}
					${subTitleColor ? `color: ${subTitleColor};` : " "}
				}
				`
            : " "
        }

		${enableDescription
            ? `

				.eb-infobox-wrapper.${blockId} .description {

					${contentTypoStylesDesktop}
					${contentPaddingStylesDesktop}
					${descriptionColor ? `color: ${descriptionColor};` : " "}

				}

				`
            : " "
        }

		${buttonThakbe
            ? `

				.eb-infobox-wrapper.${blockId} .contents-wrapper .eb-infobox-btn-wrapper{
					${btnAlignment ? `text-align:${btnAlignment};` : ""}
				}

				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn{
					${buttonTypoStylesDesktop}
					${buttonPaddingStylesDesktop}
					${btnBackgroundStylesDesktop}
					${btnBdShadowStyesDesktop}


					${buttonTextColor ? `color: ${buttonTextColor};` : " "}

					transition: all 0.5s, ${btnBgTransitionStyle}, ${btnBdShadowTransitionStyle};
				}

				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn:hover{
					${buttonHvrTextColor ? `color: ${buttonHvrTextColor};` : " "}
					${btnBdShadowStylesHoverDesktop}
				}

                ${btnEffect
                ? `.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn:before{
                        ${btnHoverBackgroundStylesDesktop}
                        ${buttonHvrTextColor ? `color: ${buttonHvrTextColor};` : " "}
                        ${btnBdShadowStylesHoverDesktop}
                    }
                    `
                : ""
            }




				`
            : " "
        }

		`;

    const wrapperStylesTab = `
		.eb-infobox-wrapper.${blockId} {
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
			${backgroundStylesTab}
			${bdShadowStyesTab}
		}

		.eb-infobox-wrapper.${blockId}:hover{
			${hoverBackgroundStylesTab}
			${bdShadowStylesHoverTab}
		}


		.eb-infobox-wrapper.${blockId}:before{
			${overlayStylesTab}
		}

		.eb-infobox-wrapper.${blockId}:hover:before{
			${hoverOverlayStylesTab}
		}

		.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner {
			${media !== "none" ? `${contentMediaGapTab}` : ""}
		}

		${media !== "none"
            ? `

				.eb-infobox-wrapper.${blockId} .icon-img-wrapper {

					${mediaBgMarginStylesTab}
				}

				${media === "number" || media === "icon"
                ? `

						.eb-infobox-wrapper.${blockId} .number-or-icon {
							${mediaRadiusStylesTab}
							${mediaBgPaddingTab}
						}

						`
                : " "
            }


				${media === "number"
                ? `

						.eb-infobox-wrapper.${blockId} span.eb-infobox-number{
							${numTypoStylesTab}
							${TABnumberFontSize ? `height:${TABnumberFontSize}${TABnumberSizeUnit};` : ""}
							${TABnumberFontSize ? `width:${TABnumberFontSize}${TABnumberSizeUnit};` : ""}
						}

					`
                : " "
            }


				${media === "icon"
                ? `

						.eb-infobox-wrapper.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
							${iconSizeTab}
							${TABmIconZRange ? `height:${TABmIconZRange}${TABmIconZUnit};` : ""}
							${TABmIconZRange ? `width:${TABmIconZRange}${TABmIconZUnit};` : ""}
						}

					`
                : " "
            }


				${media === "image"
                ? `

					.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner .icon-img-wrapper{
						${TABmediaImgWidthUnit === "%"
                    ? mediaImgWidthTab
                    : mediaImgWidthUnit === "%"
                        ? `width: auto;`
                        : " "
                }
					}

					.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner img {

						${TABmediaImgWidthUnit === "%"
                    ? mediaImgWidthUnit === "%"
                        ? " "
                        : `width: 100%;`
                    : mediaImgWidthTab
                }

						${isMediaImgHeightAuto ? "" : mediaImgHeightTab}

					}


					.eb-infobox-wrapper.${blockId} .eb-infobox-image-wrapper{
						${mediaRadiusStylesTab}

					}

					`
                : " "
            }




			`
            : " "
        }


		.eb-infobox-wrapper.${blockId} .title {
			${titleTypoStylesTab}
			${titlePaddingStylesTab}

		}

		${enableSubTitle
            ? `
				.eb-infobox-wrapper.${blockId} .subtitle {
					${subTitleTypoStylesTab}
					${subTitlePaddingStylesTab}

				}
				`
            : " "
        }

		${enableDescription
            ? `
				.eb-infobox-wrapper.${blockId} .description {
					${contentTypoStylesTab}
					${contentPaddingStylesTab}

				}
				`
            : " "
        }

		${buttonThakbe
            ? `
				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn{
					${buttonTypoStylesTab}
					${buttonPaddingStylesTab}
					${btnBdShadowStyesTab}
				}

				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn:hover{
					${btnBdShadowStylesHoverTab}
				}

				`
            : " "
        }

        ${btnEffect
            ? `.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn:before{
                    ${btnHoverBackgroundStylesTab}
                    ${btnBdShadowStylesHoverTab}
                }
                `
            : ""
        }

	`;

    const wrapperStylesMobile = `
		.eb-infobox-wrapper.${blockId} {
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}
			${backgroundStylesMobile}
			${bdShadowStyesMobile}
		}

		.eb-infobox-wrapper.${blockId}:hover{
			${hoverBackgroundStylesMobile}
			${bdShadowStylesHoverMobile}
		}

		.eb-infobox-wrapper.${blockId}:before{
			${overlayStylesMobile}
		}


		.eb-infobox-wrapper.${blockId}:hover:before{
			${hoverOverlayStylesMobile}
		}

		.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner {
			${media !== "none" ? `${contentMediaGapMobile}` : ""}
		}

		${media !== "none"
            ? `

				.eb-infobox-wrapper.${blockId} .icon-img-wrapper {

					${mediaBgMarginStylesMobile}
				}

				${media === "number" || media === "icon"
                ? `

						.eb-infobox-wrapper.${blockId} .number-or-icon {
							${mediaRadiusStylesMobile}
							${mediaBgPaddingMobile}
						}

						`
                : " "
            }

				${media === "number"
                ? `

					.eb-infobox-wrapper.${blockId} span.eb-infobox-number{
						${numTypoStylesMobile}
						${MOBnumberFontSize ? `height:${MOBnumberFontSize}${MOBnumberSizeUnit};` : ""}
						${MOBnumberFontSize ? `width:${MOBnumberFontSize}${MOBnumberSizeUnit};` : ""}
					}

					`
                : " "
            }

				${media === "icon"
                ? `

						.eb-infobox-wrapper.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
							${iconSizeMobile}
							${MOBmIconZRange ? `height:${MOBmIconZRange}${MOBmIconZUnit};` : ""}
							${MOBmIconZRange ? `width:${MOBmIconZRange}${MOBmIconZUnit};` : ""}
						}

					`
                : " "
            }

				${media === "image"
                ? `


					.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner .icon-img-wrapper{
						${MOBmediaImgWidthUnit === "%"
                    ? mediaImgWidthMobile
                    : TABmediaImgWidthUnit === "%"
                        ? `width: auto;`
                        : " "
                }
					}


					.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner img {

						${MOBmediaImgWidthUnit === "%"
                    ? TABmediaImgWidthUnit === "%"
                        ? " "
                        : `width: 100%;`
                    : mediaImgWidthMobile
                }

						${isMediaImgHeightAuto ? "" : mediaImgHeightMobile}

					}


					.eb-infobox-wrapper.${blockId} .eb-infobox-image-wrapper{
						${mediaRadiusStylesMobile}
					}

					`
                : " "
            }



			`
            : " "
        }

		.eb-infobox-wrapper.${blockId} .title {
			${titleTypoStylesMobile}
			${titlePaddingStylesMobile}

		}

		${enableSubTitle
            ? `
				.eb-infobox-wrapper.${blockId} .subtitle {
					${subTitleTypoStylesMobile}
					${subTitlePaddingStylesMobile}

				}
				`
            : " "
        }

		${enableDescription
            ? `
				.eb-infobox-wrapper.${blockId} .description {
					${contentTypoStylesMobile}
					${contentPaddingStylesMobile}

				}

				`
            : " "
        }

		${buttonThakbe
            ? `

				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn{
					${buttonTypoStylesMobile}
					${btnBdShadowStyesMobile}
				}


				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn:hover{
					${btnBdShadowStylesHoverMobile}
				}

				`
            : " "
        }


        ${btnEffect
            ? `.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn:before{
                    ${btnHoverBackgroundStylesMobile}
                    ${btnBdShadowStylesHoverMobile}
                }
                `
            : ""
        }
	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${wrapperStylesDesktop}
	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
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
