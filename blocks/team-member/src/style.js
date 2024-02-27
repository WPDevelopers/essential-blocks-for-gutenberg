/**
 * WordPress dependencies
 */

import {
    typoPrefix_descs,
    typoPrefix_name,
    typoPrefix_job,
} from "./constants/typographyPrefixConstants";

import {
    wrapperWidth,
    imageWidth,
    imageHeight,
    rangeIconSize,
    rangeIconPadding,
    rangeIconDistance,
    rangeIconRowGap,
    imgTopBgHeight,
    cSepWPrefix,
    sSepWPrefix,
    cSepHPrefix,
    sSepHPrefix,
    sclDeviderPosRight,
    p9LGap,
} from "./constants/rangeNames";

import {
    tmbWrapMarginConst,
    tmbWrapPaddingConst,
    tmbDescsPaddingConst,
    tmbNamePaddingConst,
    tmbJobPaddingConst,
    iconsWrapPadding,
    iconsWrapMargin,
    imageMarginConst,
    imagePaddingConst,
    contentsPad,
    contentsMargin,
} from "./constants/dimensionsConstants";

import {
    WrpBgConst,
    imgTopBgPrefix,
    socialWrpBg,
} from "./constants/backgroundsConstants";

import {
    WrpBdShadowConst,
    prefixSocialBdShadow,
    prefixImgBd,
    ovlBdPrefix,
} from "./constants/borderShadowConstants";

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
    const { attributes, setAttributes, name: blockName } = props;

    const {
        resOption,
        blockId,
        blockMeta,
        name,
        jobTitle,
        description,
        showDescs,
        imageUrl,
        imageId,
        isImgHeightAuto,
        descsColor = "#9f9f9f",
        jobColor = "#4b4b4b",
        nameColor = "#4b4b4b",
        showSocials,
        socialDetails,
        profilesOnly,
        iconsJustify,
        iconsVAlign,
        contentsAlign,
        imageAlign,
        cSepAlign,
        sSepAlign,
        preset,
        socialInImage,
        imgBeforeEl,
        showCSeparator,
        showSSeparator,
        cSepType = "solid",
        sSepType = "solid",
        cSepColor = "#84AFFF",
        sSepColor = "#CACACA",
        isIconsDevider,
        icnsDevideColor = "#cacaca",
        icnSepW = 1,
        icnSepH = 30,
        hvIcnColor,
        hvIcnBgc,
        conVtAlign,
        isConBgGradient,
        conBgGradient,
        conBgColor = "rgba(0,0,0,.4)",
        imgCnVtAlign,
        isP9reverse,
        icnEffect,
        classHook,
        isContentOverlay,
    } = attributes;
    //
    // styling codes start from here
    //

    // styles related to generateTypographyStyles start ⬇

    const {
        typoStylesDesktop: nameTypoStylesDesktop,
        typoStylesTab: nameTypoStylesTab,
        typoStylesMobile: nameTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_name,
        defaultFontSize: 20,
    });

    const {
        typoStylesDesktop: jobTypoStylesDesktop,
        typoStylesTab: jobTypoStylesTab,
        typoStylesMobile: jobTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_job,
        defaultFontSize: 16,
    });

    const {
        typoStylesDesktop: descsTypoStylesDesktop,
        typoStylesTab: descsTypoStylesTab,
        typoStylesMobile: descsTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefix_descs,
        defaultFontSize: 16,
    });

    // styles related to generateTypographyStyles end ⬇

    // styles related to generateResponsiveRangeStyles start ⬇
    const {
        rangeStylesDesktop: wrapWidthDesktop,
        rangeStylesTab: wrapWidthTab,
        rangeStylesMobile: wrapWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: wrapperWidth,
        // customUnit: "px",
        property: "max-width",
        attributes,
    });

    const {
        rangeStylesDesktop: imgWidthDesktop,
        rangeStylesTab: imgWidthTab,
        rangeStylesMobile: imgWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: imageWidth,
        // customUnit: "px",
        property: "width",
        attributes,
    });

    const {
        rangeStylesDesktop: p9flexGapDesktop,
        rangeStylesTab: p9flexGapTab,
        rangeStylesMobile: p9flexGapMobile,
    } = generateResponsiveRangeStyles({
        controlName: p9LGap,
        // customUnit: "px",
        property: "Gap",
        attributes,
    });

    const {
        rangeStylesDesktop: imgHeightDesktop,
        rangeStylesTab: imgHeightTab,
        rangeStylesMobile: imgHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: imageHeight,
        // customUnit: "px",
        property: "height",
        attributes,
    });

    const {
        rangeStylesDesktop: iconSizeDesktop,
        rangeStylesTab: iconSizeTab,
        rangeStylesMobile: iconSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeIconSize,
        customUnit: "px",
        property: "font-size",
        attributes,
    });

    const {
        rangeStylesDesktop: iconPaddingDesktop,
        rangeStylesTab: iconPaddingTab,
        rangeStylesMobile: iconPaddingMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeIconPadding,
        customUnit: "em",
        property: "padding",
        attributes,
    });

    const {
        rangeStylesDesktop: iconSpaceDesktop,
        rangeStylesTab: iconSpaceTab,
        rangeStylesMobile: iconSpaceMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeIconDistance,
        customUnit: "px",
        property: "column-gap",
        attributes,
    });

    const {
        rangeStylesDesktop: iconRowGapDesktop,
        rangeStylesTab: iconRowGapTab,
        rangeStylesMobile: iconRowGapMobile,
    } = generateResponsiveRangeStyles({
        controlName: rangeIconRowGap,
        customUnit: "px",
        property: "row-gap",
        attributes,
    });

    const {
        rangeStylesDesktop: imgTopBgHeightDesktop,
        rangeStylesTab: imgTopBgHeightTab,
        rangeStylesMobile: imgTopBgHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: imgTopBgHeight,
        customUnit: "px",
        property: "height",
        attributes,
    });

    const {
        rangeStylesDesktop: contentSepWidthDesktop,
        rangeStylesTab: contentSepWidthTab,
        rangeStylesMobile: contentSepWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: cSepWPrefix,
        property: "width",
        attributes,
    });

    const {
        rangeStylesDesktop: socialSepWidthDesktop,
        rangeStylesTab: socialSepWidthTab,
        rangeStylesMobile: socialSepWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: sSepWPrefix,
        property: "width",
        attributes,
    });

    const {
        rangeStylesDesktop: contentSepHeightDesktop,
        rangeStylesTab: contentSepHeightTab,
        rangeStylesMobile: contentSepHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: cSepHPrefix,
        property: "border-bottom-width",
        attributes,
    });

    const {
        rangeStylesDesktop: socialSepHeightDesktop,
        rangeStylesTab: socialSepHeightTab,
        rangeStylesMobile: socialSepHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: sSepHPrefix,
        property: "border-bottom-width",
        attributes,
    });

    const {
        rangeStylesDesktop: sSepPosRightDesktop,
        rangeStylesTab: sSepPosRightTab,
        rangeStylesMobile: sSepPosRightMobile,
    } = generateResponsiveRangeStyles({
        controlName: sclDeviderPosRight,
        property: "margin-right",
        attributes,
    });

    // styles related to generateResponsiveRangeStyles end

    // styles related to generateBackgroundControlStyles start ⬇

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
        controlName: WrpBgConst,
        // noOverlay: true,
        // noMainBgi: true,
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    });

    const {
        backgroundStylesDesktop: imgTopBackgroundStyles,
        hoverBackgroundStylesDesktop: imgTopHoverBackgroundStyles,
        bgTransitionStyle: imgTopBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: imgTopBgPrefix,
        noOverlay: true,
        noMainBgi: true,
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    });

    const {
        backgroundStylesDesktop: socialWrapBackgroundStyles,
        hoverBackgroundStylesDesktop: socialWrapHoverBackgroundStyles,
        bgTransitionStyle: socialWrapTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: socialWrpBg,
        noOverlay: true,
        noMainBgi: true,
        // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    });

    // styles related to generateBackgroundControlStyles end

    // styles related to generateDimensionsControlStyles start ⬇
    const {
        dimensionStylesDesktop: wrpMarginDesktop,
        dimensionStylesTab: wrpMarginTab,
        dimensionStylesMobile: wrpMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: tmbWrapMarginConst,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: wrpPaddingDesktop,
        dimensionStylesTab: wrpPaddingTab,
        dimensionStylesMobile: wrpPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: tmbWrapPaddingConst,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: descsPaddingDesktop,
        dimensionStylesTab: descsPaddingTab,
        dimensionStylesMobile: descsPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: tmbDescsPaddingConst,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: namePaddingDesktop,
        dimensionStylesTab: namePaddingTab,
        dimensionStylesMobile: namePaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: tmbNamePaddingConst,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: jobPaddingDesktop,
        dimensionStylesTab: jobPaddingTab,
        dimensionStylesMobile: jobPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: tmbJobPaddingConst,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: iconsWrapPaddingDesktop,
        dimensionStylesTab: iconsWrapPaddingTab,
        dimensionStylesMobile: iconsWrapPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: iconsWrapPadding,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: iconsWrapMarginDesktop,
        dimensionStylesTab: iconsWrapMarginTab,
        dimensionStylesMobile: iconsWrapMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: iconsWrapMargin,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: imageMarginDesktop,
        dimensionStylesTab: imageMarginTab,
        dimensionStylesMobile: imageMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: imageMarginConst,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: imagePaddingDesktop,
        dimensionStylesTab: imagePaddingTab,
        dimensionStylesMobile: imagePaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: imagePaddingConst,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: contentsPaddingDesktop,
        dimensionStylesTab: contentsPaddingTab,
        dimensionStylesMobile: contentsPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: contentsPad,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: contentsMarginDesktop,
        dimensionStylesTab: contentsMarginTab,
        dimensionStylesMobile: contentsMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: contentsMargin,
        styleFor: "margin",
    });

    // styles related to generateDimensionsControlStyles end

    // styles related to generateBorderShadowStyles start ⬇
    const {
        styesDesktop: wrpBdShdStyesDesktop,
        styesTab: wrpBdShdStyesTab,
        styesMobile: wrpBdShdStyesMobile,
        stylesHoverDesktop: wrpBdShdStylesHoverDesktop,
        stylesHoverTab: wrpBdShdStylesHoverTab,
        stylesHoverMobile: wrpBdShdStylesHoverMobile,
        transitionStyle: wrpBdShdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: WrpBdShadowConst,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: socialBorderDesktop,
        styesTab: socialBorderTab,
        styesMobile: socialBorderMobile,
        stylesHoverDesktop: socialBordersHoverDesktop,
        stylesHoverTab: socialBordersHoverTab,
        stylesHoverMobile: socialBordersHoverMobile,
        transitionStyle: socialBorderTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: prefixSocialBdShadow,
        attributes,
        noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: imageBdShdStyleDesktop,
        styesTab: imageBdShdStyleTab,
        styesMobile: imageBdShdStyleMobile,
        stylesHoverDesktop: imageBdShdStylesHoverDesktop,
        stylesHoverTab: imageBdShdStylesHoverTab,
        stylesHoverMobile: imageBdShdStylesHoverMobile,
        transitionStyle: imageBdShdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: prefixImgBd,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: ovlBdShdStyleDesktop,
        styesTab: ovlBdShdStyleTab,
        styesMobile: ovlBdShdStyleMobile,
    } = generateBorderShadowStyles({
        controlName: ovlBdPrefix,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    // styles related to generateBorderShadowStyles end

    const socialStyles = socialDetails.reduce(
        (acc, curr, i) => `
		 ${acc}
		 .${blockId}.eb-team-wrapper ul.socials li:nth-child(${i + 1}) a {
			 background-color: ${curr.bgColor || "#000"};
			 color: ${curr.color || "#fff"};
		 }
		 `,
        ""
    );

    const wrapperStylesDesktop = `
		 div.eb-team-wrapper h3,
		 div.eb-team-wrapper h4,
		 div.eb-team-wrapper p,
		 div.eb-team-wrapper ul {
			 margin: 0;
			 padding:0;
		 }

		 .social-icon {
			 font-style: normal;
		 }


		 .${blockId}.eb-team-wrapper > *{
			 position:relative;
		 }

		 .${blockId}.eb-team-wrapper {
			 position:relative;
			 overflow:hidden;
			 margin:auto;
			 ${wrapWidthDesktop}
			 ${wrpBackgroundStylesDesktop}
			 ${wrpMarginDesktop}
			 ${wrpPaddingDesktop}
			 ${wrpBdShdStyesDesktop}
			 transition: ${wrpBgTransitionStyle}, ${wrpBdShdTransitionStyle};
		 }


		 ${preset === "preset3"
            ? `
				 .${blockId}.eb-team-wrapper .eb-team-member-image{
					 position: relative;
				 }
				 `
            : ""
        }
		 ${preset === "preset3" && isContentOverlay
            ? `
            .${blockId}.eb-team-wrapper.content-overlay .eb-team-member-contents {
                justify-content: ${conVtAlign || "center"};
                ${contentsPaddingDesktop}
                ${contentsMarginDesktop}
                ${ovlBdShdStyleDesktop}
                ${isConBgGradient
                ? `background-image: ${conBgGradient};`
                : `background-color: ${conBgColor};`
            }
            }
				 `
            : ""
        }

		 ${preset === "preset2"
            ? `
				 .${blockId}.eb-team-wrapper .eb-team-member-contents{
					 ${isConBgGradient
                ? `background-image: ${conBgGradient};`
                : `background-color: ${conBgColor};`
            }
					 height: 50%;
					 display: flex;
					 flex-direction: column;
					 justify-content: center;
				 }

				 .${blockId}.eb-team-wrapper div.eb-team-member-contents .eb-team-member-job-title {
					 display: block;
				 }

				 .${blockId}.eb-team-wrapper div.eb-team-member-contents ul.socials {
					 display: flex;
				 }

				 .${blockId}.eb-team-wrapper:hover .eb-team-member-contents{
					 top: 50%;
				 }

				 `
            : ""
        }

         ${preset === "new-preset1" || preset === "new-preset2" || preset === "new-preset3"
            ? `
                .${blockId}.eb-team-wrapper .eb-team-member-contents-inner{
                    ${isConBgGradient
                ? `background-image: ${conBgGradient};`
                : `background-color: ${conBgColor};`
            }
                    ${contentsPaddingDesktop}
			        ${contentsMarginDesktop}
			        ${ovlBdShdStyleDesktop}
                }

                .${blockId}.eb-team-wrapper .eb-team-member-job-title {
                    ${jobTypoStylesDesktop}
                    ${jobPaddingDesktop}
                    color: ${jobColor};
                    ${preset === "preset2" ? `display:none;` : ""}
                }

                .${blockId}.eb-team-wrapper div.eb-team-member-contents .eb-team-member-job-title {
                    display: block;
                }

                .${blockId}.eb-team-wrapper div.eb-team-member-contents ul.socials {
                    display: flex;
                }

                .${blockId}.eb-team-wrapper:hover .eb-team-member-contents{
                    top: 50%;
                }

                `
            : ""
        }


		 ${preset === "preset5"
            ? `
				 .${blockId}.eb-team-wrapper .eb-team-inner {
					 display: flex;
					 justify-content: space-between;
					 flex-direction: ${isP9reverse ? "row-reverse" : "row"};
					 align-items: ${imgCnVtAlign || "flex-start"};
					 ${p9flexGapDesktop}
				 }

				 .${blockId}.eb-team-wrapper .eb-team-member-image {
					 ${imgWidthDesktop}
				 }

				 .${blockId}.eb-team-wrapper .eb-team-member-contents {
					 flex:1;
				 }
				 `
            : ""
        }



		 .${blockId}.eb-team-wrapper:hover{
			 ${preset === "preset2" ? `overflow:hidden;` : ""}

			 ${wrpHoverBackgroundStylesDesktop}
			 ${wrpBdShdStylesHoverDesktop}
		 }

		 .${blockId}.eb-team-wrapper:before{
			 ${wrpOverlayStylesDesktop}
			 transition: ${wrpOvlTransitionStyle};

		 }

		 .${blockId}.eb-team-wrapper:hover:before{
			 ${wrpHoverOverlayStylesDesktop}

		 }

         .${blockId}.eb-team-wrapper .eb-team-member-image {
            ${imageAlign === "left"
            ? "text-align: left;"
            : imageAlign === "right"
                ? "text-align: right;"
                : "text-align: center"
        }
         }

		 .${blockId}.eb-team-wrapper .eb-team-member-image img {
			 max-width: 100%;
			 object-fit: cover;
			 display: inline-block;
			 ${preset === "preset5" ? "width:100%;" : imgWidthDesktop}
			 ${imageBdShdStyleDesktop}
			 ${imageMarginDesktop}
			 ${imagePaddingDesktop}
			 ${isImgHeightAuto ? `height:auto;` : imgHeightDesktop}
			 ${preset === "preset6"
            ? `clipPath: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);`
            : ""
        }
		 }


		 ${imgBeforeEl
            ? `
			 .${blockId}.eb-team-wrapper .eb-team-member-image:before {
				 content: "";
				 display: block;
				 ${imgTopBgHeightDesktop}
				 ${imgTopBackgroundStyles}
				 transition: ${imgTopBgTransitionStyle};

			 }

			 .${blockId}.eb-team-wrapper .eb-team-member-image:hover:before{
				 ${imgTopHoverBackgroundStyles}
			 }
			 `
            : ""
        }



		 .${blockId}.eb-team-wrapper .eb-team-member-image:hover > img {
			 ${imageBdShdStylesHoverDesktop}
			 transition: ${imageBdShdTransitionStyle};
		 }

		 .${blockId}.eb-team-wrapper .eb-team-member-contents {
			 text-align: ${contentsAlign};
			 box-sizing: border-box;
			 ${preset === "preset2"
            ? `
					 position: absolute;
					 left: 0;
					 right: 0;
					 top: 100%;
					 transition: 0.5s;
					 `
            : ""
        }
		 }

		 .${blockId}.eb-team-wrapper .eb-team-member-contents .eb-team-member-name {
			 ${nameTypoStylesDesktop}
			 ${namePaddingDesktop}
			 color: ${nameColor};
		 }

		 .${blockId}.eb-team-wrapper .eb-team-member-contents .eb-team-member-job-title {
			 ${jobTypoStylesDesktop}
			 ${jobPaddingDesktop}
			 color: ${jobColor};
			 ${preset === "preset2" ? `display:none;` : ""}
		 }

		 ${showDescs
            ? `
				 .${blockId}.eb-team-wrapper .eb-team-member-contents .eb-team-member-description {
					 color: ${descsColor};
					 ${descsPaddingDesktop}
					 ${descsTypoStylesDesktop}
				 }
				 `
            : ""
        }

 ${showCSeparator
            ? `
		 .${blockId}.eb-team-wrapper .eb-team-member-contents .eb-team-member-content-separator {
			 border: none;
			 margin: auto;
			 border-bottom: 1px ${cSepType} ${cSepColor};
			 ${contentSepWidthDesktop}
			 ${contentSepHeightDesktop}
			 ${cSepAlign === "left"
                ? "margin-left:0;"
                : cSepAlign === "right"
                    ? "margin-right:0;"
                    : ""
            }
		 }
		 `
            : ""
        }

 ${showSocials && showSSeparator
            ? `
		 .${blockId}.eb-team-wrapper .eb-team-member-social-separator {
			 border: none;
			 margin: auto;
			 border-bottom: 1px ${sSepType} ${sSepColor};
			 ${socialSepWidthDesktop}
			 ${socialSepHeightDesktop}
			 ${sSepAlign === "left"
                ? "margin-left:0;"
                : sSepAlign === "right"
                    ? "margin-right:0;"
                    : ""
            }
		 }
		 `
            : ""
        }

 ${preset === "preset4"
            ? `
		 .${blockId}.eb-team-wrapper .eb-team-inner {
			 position: relative;
		 }

		 .${blockId}.eb-team-wrapper:hover .eb-team-member-contents {
			 opacity: 1;
		 }

		 .${blockId}.eb-team-wrapper .eb-team-member-contents {
			 transition: 0.5s;
			 opacity: 0;
			 position: absolute;
			 top: 0;
			 left: 0;
			 right: 0;
			 bottom: 0;
			 display: flex;
			 flex-direction: column;
			 justify-content: ${conVtAlign || "center"};
			 ${contentsPaddingDesktop}
			 ${contentsMarginDesktop}
			 ${ovlBdShdStyleDesktop}
			 ${isConBgGradient
                ? `background-image: ${conBgGradient};`
                : `background-color: ${conBgColor};`
            }
		 }

		 `
            : ""
        }

 ${showSocials
            ? `
		 ${socialStyles}

		 .${blockId}.eb-team-wrapper ul.socials {
			 list-style: none;
			 flex-wrap: wrap;
			 align-items: ${iconsVAlign || "center"};
			 justify-content: ${iconsJustify};
			 ${iconSpaceDesktop}
			 ${iconRowGapDesktop}
			 ${socialWrapBackgroundStyles}
			 transition: ${socialWrapTransitionStyle}, opacity .5s;
			 ${preset === "preset2" ? `display:none;` : "display: flex;"}
			 ${preset === "preset3" && !isContentOverlay
                ? `
				 opacity:0;
				 position: absolute;
				 top: 0;
				 bottom: 0;
				 left:0;
				 right:0;
				 box-sizing:border-box;
				 ${contentsPaddingDesktop}
				 ${contentsMarginDesktop}
				 ${ovlBdShdStyleDesktop}
				 ${isConBgGradient
                    ? `background-image: ${conBgGradient};`
                    : `background-color: ${conBgColor};`
                }
			 `
                : `
					 ${iconsWrapMarginDesktop}
					 ${iconsWrapPaddingDesktop}
					 `
            }
		 }

		 ${preset === "preset3"
                ? `
				 .${blockId}.eb-team-wrapper:hover ul.socials {
					 opacity: 1;
				 }
				 `
                : ""
            }

		 .${blockId}.eb-team-wrapper ul.socials:hover {
			 ${socialWrapHoverBackgroundStyles}
		 }

	 ${isIconsDevider
                ? `
		 .${blockId}.eb-team-wrapper ul.socials li{
			 position:relative;
		 }

		 .${blockId}.eb-team-wrapper ul.socials li + li:before {
			 content: "";
			 background-color: ${icnsDevideColor};
			 height: ${icnSepH}px;
			 width: ${icnSepW}px;
			 position: absolute;
			 top: 2px;
			 right: 100%;
			 ${sSepPosRightDesktop}
		 }
		 `
                : ""
            }

		 .${blockId}.eb-team-wrapper ul.socials li a {
			 box-sizing:content-box;
			 text-decoration: none;
			 cursor: pointer;
			 display: flex;
			 justify-content: center;
			 align-items: center;
			 height: 0;
			 width: 0;
             line-height: 1em;
			 ${iconSizeDesktop}
			 ${iconPaddingDesktop}
			 ${socialBorderDesktop}
			 transition: color 0.5s, background-color 0.5s, ${socialBorderTransitionStyle};
		 }

		 .${blockId}.eb-team-wrapper ul.socials li:hover a {
			 background-color:${hvIcnBgc};
			 color:${hvIcnColor};
			 ${socialBordersHoverDesktop}
		 }

         ${icnEffect
                ? `.${blockId}.eb-team-wrapper ul.socials li a:before {
                background-color:${hvIcnBgc};
			    color:${hvIcnColor};
			    ${socialBordersHoverDesktop}
			}
			`
                : ""
            }

		 `
            : ""
        }



	 `;

    const wrapperStylesTab = `
	 .${blockId}.eb-team-wrapper {
		 ${wrapWidthTab}
		 ${wrpBackgroundStylesTab}
		 ${wrpMarginTab}
		 ${wrpPaddingTab}
		 ${wrpBdShdStyesTab}
	 }

	 .${blockId}.eb-team-wrapper:hover{
		 ${wrpHoverBackgroundStylesTab}
		 ${wrpBdShdStylesHoverTab}

	 }

	 .${blockId}.eb-team-wrapper:before{
		 ${wrpOverlayStylesTab}

	 }

	 .${blockId}.eb-team-wrapper:hover:before{
		 ${wrpHoverOverlayStylesTab}

	 }


	 ${preset === "preset5"
            ? `
			 .${blockId}.eb-team-wrapper .eb-team-member-image {
				 ${imgWidthTab}
			 }

			 .${blockId}.eb-team-wrapper .eb-team-inner {
				 ${p9flexGapTab}
			 }

			 `
            : ""
        }


	 ${imgBeforeEl
            ? `
		 .${blockId}.eb-team-wrapper .eb-team-member-image:before {
			 ${imgTopBgHeightTab}
		 }
		 `
            : ""
        }


	 .${blockId}.eb-team-wrapper .eb-team-member-image > img {
		 ${imageBdShdStyleTab}
		 ${imageMarginTab}
		 ${imagePaddingTab}
		 ${preset === "preset5" ? "" : imgWidthTab}
		 ${isImgHeightAuto ? "" : imgHeightTab}
	 }


	 .${blockId}.eb-team-wrapper .eb-team-member-image:hover > img {
		 ${imageBdShdStylesHoverTab}

	 }


	 ${showDescs
            ? `
			 .${blockId}.eb-team-wrapper .eb-team-member-contents .eb-team-member-description {
				 ${descsTypoStylesTab}
				 ${descsPaddingTab}
			 }
			 `
            : ""
        }

	 .${blockId}.eb-team-wrapper .eb-team-member-contents .eb-team-member-name {
		 ${nameTypoStylesTab}
		 ${namePaddingTab}
	 }

	 .${blockId}.eb-team-wrapper .eb-team-member-contents .eb-team-member-job-title {
		 ${jobTypoStylesTab}
		 ${jobPaddingTab}
	 }



 ${showCSeparator
            ? `
		 .${blockId}.eb-team-wrapper .eb-team-member-contents .eb-team-member-content-separator {
			 ${contentSepWidthTab}
			 ${contentSepHeightTab}
		 }
		 `
            : ""
        }

 ${showSocials && showSSeparator
            ? `
		 .${blockId}.eb-team-wrapper .eb-team-member-social-separator {
			 ${socialSepWidthTab}
			 ${socialSepHeightTab}
		 }
		 `
            : ""
        }

 ${preset === "preset4"
            ? `
		 .${blockId}.eb-team-wrapper .eb-team-member-contents {
			 ${contentsPaddingTab}
			 ${contentsMarginTab}
			 ${ovlBdShdStyleTab}
		 }
		 `
            : ""
        }

 ${showSocials
            ? `
		 ${socialStyles}

		 .${blockId}.eb-team-wrapper ul.socials {
			 ${iconsWrapMarginTab}
			 ${iconsWrapPaddingTab}
			 ${iconSpaceTab}
			 ${iconRowGapTab}
			 ${preset === "preset3"
                ? `
						 ${contentsPaddingTab}
						 ${contentsMarginTab}
						 ${ovlBdShdStyleTab}
					 `
                : ""
            }
		 }


	 ${isIconsDevider
                ? `
			 .${blockId}.eb-team-wrapper ul.socials li + li:before {
				 ${sSepPosRightTab}
			 }
			 `
                : ""
            }

		 .${blockId}.eb-team-wrapper ul.socials li a {
			 ${iconSizeTab}
			 ${iconPaddingTab}
			 ${socialBorderTab}
		 }

		 .${blockId}.eb-team-wrapper ul.socials li:hover a {
			 ${socialBordersHoverTab}
		 }
		 `
            : ""
        }

        ${icnEffect
            ? `.${blockId}.eb-team-wrapper ul.socials li a:before {
            ${socialBordersHoverTab}
        }
        `
            : ""
        }


	 `;

    const wrapperStylesMobile = `
	 .${blockId}.eb-team-wrapper {
		 ${wrapWidthMobile}
		 ${wrpBackgroundStylesMobile}
		 ${wrpMarginMobile}
		 ${wrpPaddingMobile}
		 ${wrpBdShdStyesMobile}
	 }

	 .${blockId}.eb-team-wrapper:hover{
		 ${wrpHoverBackgroundStylesMobile}
		 ${wrpBdShdStylesHoverMobile}

	 }

	 .${blockId}.eb-team-wrapper:before{
		 ${wrpOverlayStylesMobile}

	 }

	 .${blockId}.eb-team-wrapper:hover:before{
		 ${wrpHoverOverlayStylesMobile}

	 }

	 ${preset === "preset5"
            ? `
			 .${blockId}.eb-team-wrapper .eb-team-member-image {
				 ${imgWidthMobile}
			 }

			 .${blockId}.eb-team-wrapper .eb-team-inner {
				 ${p9flexGapMobile}
			 }
			 `
            : ""
        }


	 ${imgBeforeEl
            ? `
		 .${blockId}.eb-team-wrapper .eb-team-member-image:before {
			 ${imgTopBgHeightMobile}
		 }
		 `
            : ""
        }

	 .${blockId}.eb-team-wrapper .eb-team-member-image > img {
		 ${preset === "preset5" ? "" : imgWidthMobile}
		 ${imageBdShdStyleMobile}
		 ${imageMarginMobile}
		 ${imagePaddingMobile}

		 ${isImgHeightAuto ? "" : imgHeightMobile}
	 }




	 .${blockId}.eb-team-wrapper .eb-team-member-image:hover > img {
		 ${imageBdShdStylesHoverMobile}
	 }

	 ${showDescs
            ? `
			 .${blockId}.eb-team-wrapper .eb-team-member-contents .eb-team-member-description {
				 ${descsTypoStylesMobile}
				 ${descsPaddingMobile}
			 }
			 `
            : ""
        }

	 .${blockId}.eb-team-wrapper .eb-team-member-contents .eb-team-member-name {
		 ${nameTypoStylesMobile}
		 ${namePaddingMobile}
	 }

	 .${blockId}.eb-team-wrapper .eb-team-member-contents .eb-team-member-job-title {
		 ${jobTypoStylesMobile}
		 ${jobPaddingMobile}
	 }



	 ${showCSeparator
            ? `
			 .${blockId}.eb-team-wrapper .eb-team-member-contents .eb-team-member-content-separator {
				 ${contentSepWidthMobile}
				 ${contentSepHeightMobile}
			 }
			 `
            : ""
        }

	 ${showSocials && showSSeparator
            ? `
			 .${blockId}.eb-team-wrapper .eb-team-member-social-separator {
				 ${socialSepWidthMobile}
				 ${socialSepHeightMobile}
			 }
			 `
            : ""
        }


	 ${preset === "preset4"
            ? `
			 .${blockId}.eb-team-wrapper .eb-team-member-contents {
				 ${contentsPaddingMobile}
				 ${contentsMarginMobile}
				 ${ovlBdShdStyleMobile}
			 }
			 `
            : ""
        }

	 ${showSocials
            ? `
			 ${socialStyles}

			 .${blockId}.eb-team-wrapper ul.socials {
				 ${iconSpaceMobile}
				 ${iconRowGapMobile}
				 ${iconsWrapPaddingMobile}
				 ${iconsWrapMarginMobile}
				 ${preset === "preset3"
                ? `
							 ${contentsPaddingMobile}
							 ${contentsMarginMobile}
							 ${ovlBdShdStyleMobile}
						 `
                : ""
            }
			 }

			 ${isIconsDevider
                ? `
					 .${blockId}.eb-team-wrapper ul.socials li + li:before {
						 ${sSepPosRightMobile}
					 }
					 `
                : ""
            }

			 .${blockId}.eb-team-wrapper ul.socials li a {
				 ${iconSizeMobile}
				 ${iconPaddingMobile}
				 ${socialBorderMobile}
			 }


			 .${blockId}.eb-team-wrapper ul.socials li:hover a {
				 ${socialBordersHoverMobile}
			 }

             ${icnEffect
                ? `.${blockId}.eb-team-wrapper ul.socials li a:before {
                ${socialBordersHoverMobile}
            }
            `
                : ""
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
                blockName={blockName}
            />
        </>
    );
}
