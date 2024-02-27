import {
    //
    typoPrefixNav,
    typoPrefixNavDropdown,
    typoPrefixNavHamburger,
    typoPrefixHamburgerBtn,
} from "./constants/typographyPrefixConstants";

import { prefixWrapBg } from "./constants/backgroundsConstants";

import {
    prefixWrapBdShadow,
    prefixNavBdShadow,
    prefixNavDropdownBdShadow,
    prefixDropdownItemBdShadow,
    prefixHamburgerItemBdShadow,
} from "./constants/borderShadowConstants";

import {
    prefixWrapperMargin,
    prefixWrapperPadding,
    prefixNavPadding,
    prefixNavMargin,
    prefixNavDropdownPadding,
    prefixDropdownItemPadding,
    prefixNavHamburgerPadding,
    prefixHamburgerItemPadding,
    prefixHamburgerBtnPadding,
} from "./constants/dimensionsConstants";

import {
    prefixCaretSize,
    prefixDropdownWidth,
    prefixHamburerBtnSize,
} from "./constants/rangeNames";

/**
 * External depencencies
 */
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
        // responsive control attributes ⬇
        resOption,

        // blockMeta is for keeping all the styles
        blockMeta,

        // blockId attribute for making unique className and other uniqueness
        blockId,

        //
        layout,

        //
        navTextColor,
        hvNavTextColor,

        //
        actNavTextColor,
        actHvNavTextColor,

        //
        caretColor,
        carZ_Range,
        TABcarZ_Range,
        MOBcarZ_Range,

        //
        navAlign,
        hvNavBgColor,
        actNavBgColor,
        actHvNavBgColor,
        navDropdownTextColor,
        hvNavDropdownTextColor,
        actNavDropdownTextColor,
        actHvNavDropdownTextColor,
        navDropdownBgColor,
        hvNavDropdownBgColor,
        actNavDropdownBgColor,
        actHvNavDropdownBgColor,
        preset,
        dropdownItemBgColor,
        hvDropdownItemBgColor,
        actDropdownItemBgColor,
        actHvDropdownItemBgColor,
        dropdownW_Range,
        TABdropdownW_Range,
        MOBdropdownW_Range,
        hvCaretColor,
        verticalPreset,
        dropdownOpenOnClick,
        navBtnType,
        showDropdownIcon,

        navHamburgerBgColor,
        navHamburgerTextColor,
        hamburgerItemBgColor,
        hvNavHamburgerTextColor,
        hvHamburgerItemBgColor,
        actNavHamburgerTextColor,
        actHamburgerItemBgColor,
        actHvNavHamburgerTextColor,
        actHvHamburgerItemBgColor,
        hamburgerCloseIconColor,
        navDividerColor,
        navDropdownDividerColor,
        flexWrap,
        navVerticalAlign,
        hamburgerMenu,
        navHamburgerBtnColor,
        hamburgerBtnZ_Range,
        TABhamburgerBtnZ_Range,
        MOBhamburgerBtnZ_Range,
        hamburgerCloseIconAlign,
        verticalNavDividerColor,
        classHook,
    } = attributes;

    //
    // styles related to generateTypographyStyles start ⬇
    const {
        typoStylesDesktop: navTypoStylesDesktop,
        typoStylesTab: navTypoStylesTab,
        typoStylesMobile: navTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefixNav,
        defaultFontSize: 16,
    });

    const {
        typoStylesDesktop: navDropdownTypoStylesDesktop,
        typoStylesTab: navDropdownTypoStylesTab,
        typoStylesMobile: navDropdownTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefixNavDropdown,
        defaultFontSize: 16,
    });

    const {
        typoStylesDesktop: navHamburgerTypoStylesDesktop,
        typoStylesTab: navHamburgerTypoStylesTab,
        typoStylesMobile: navHamburgerTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefixNavHamburger,
        defaultFontSize: 16,
    });

    const {
        typoStylesDesktop: hamburgerBtnTypoStylesDesktop,
        typoStylesTab: hamburgerBtnTypoStylesTab,
        typoStylesMobile: hamburgerBtnTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: typoPrefixHamburgerBtn,
        defaultFontSize: 16,
    });
    // styles related to generateTypographyStyles end

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
        controlName: prefixWrapBg,
        // noOverlay: true,
        // noMainBgi: true,
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
        controlName: prefixWrapperMargin,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: wrpPaddingDesktop,
        dimensionStylesTab: wrpPaddingTab,
        dimensionStylesMobile: wrpPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: prefixWrapperPadding,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: navMarginDesktop,
        dimensionStylesTab: navMarginTab,
        dimensionStylesMobile: navMarginMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: prefixNavMargin,
        styleFor: "margin",
    });

    const {
        dimensionStylesDesktop: navPaddingDesktop,
        dimensionStylesTab: navPaddingTab,
        dimensionStylesMobile: navPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: prefixNavPadding,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: navDropdownPaddingDesktop,
        dimensionStylesTab: navDropdownPaddingTab,
        dimensionStylesMobile: navDropdownPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: prefixNavDropdownPadding,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: dropdownItemPaddingDesktop,
        dimensionStylesTab: dropdownItemPaddingTab,
        dimensionStylesMobile: dropdownItemPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: prefixDropdownItemPadding,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: hamburgerPaddingDesktop,
        dimensionStylesTab: hamburgerPaddingTab,
        dimensionStylesMobile: hamburgerPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: prefixNavHamburgerPadding,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: hamburgerItemPaddingDesktop,
        dimensionStylesTab: hamburgerItemPaddingTab,
        dimensionStylesMobile: hamburgerItemPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: prefixHamburgerItemPadding,
        styleFor: "padding",
    });

    const {
        dimensionStylesDesktop: hamburgerBtnPaddingDesktop,
        dimensionStylesTab: hamburgerBtnPaddingTab,
        dimensionStylesMobile: hamburgerBtnPaddingMobile,
    } = generateDimensionsControlStyles({
        attributes,
        controlName: prefixHamburgerBtnPadding,
        styleFor: "padding",
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
        controlName: prefixWrapBdShadow,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: navBdShdStyesDesktop,
        styesTab: navBdShdStyesTab,
        styesMobile: navBdShdStyesMobile,
        transitionStyle: navBdShdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: prefixNavBdShadow,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: navDropdownBdShdStyesDesktop,
        styesTab: navDropdownBdShdStyesTab,
        styesMobile: navDropdownBdShdStyesMobile,
    } = generateBorderShadowStyles({
        controlName: prefixNavDropdownBdShadow,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: navHamburgerItemBdShdStyesDesktop,
        styesTab: navHamburgerItemBdShdStyesTab,
        styesMobile: navHamburgerItemBdShdStyesMobile,
    } = generateBorderShadowStyles({
        controlName: prefixHamburgerItemBdShadow,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: dropdownItemBdShdStyesDesktop,
        styesTab: dropdownItemBdShdStyesTab,
        styesMobile: dropdownItemBdShdStyesMobile,
        stylesHoverDesktop: dropdownItemBdShdStylesHoverDesktop,
        stylesHoverTab: dropdownItemBdShdStylesHoverTab,
        stylesHoverMobile: dropdownItemBdShdStylesHoverMobile,
        transitionStyle: dropdownItemBdShdTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: prefixDropdownItemBdShadow,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    // styles related to generateBorderShadowStyles end

    // all common (editor&frontEnd) css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStylesCommon = softMinifyCssStrings(`

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation{
			${wrpMarginDesktop}
			${wrpPaddingDesktop}
			${wrpBackgroundStylesDesktop}
			${wrpBdShdStyesDesktop}
			transition: all .5s, ${wrpBgTransitionStyle}, ${wrpBdShdTransitionStyle};
		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation:hover{
			${wrpHoverBackgroundStylesDesktop}
			${wrpBdShdStylesHoverDesktop}
		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation:before{
			${wrpOverlayStylesDesktop}
			transition: all .5s, ${wrpOvlTransitionStyle};
		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation:hover:before{
			${wrpHoverOverlayStylesDesktop}
		}



		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation-item{
			${navMarginDesktop}
			${navPaddingDesktop}
			transition: all .5s, ${navBdShdTransitionStyle};
		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation-item__content {
			${navTextColor ? `color:${navTextColor} !important;` : ""}
			${navTypoStylesDesktop}
		}
		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation-item:hover >.wp-block-navigation-item__content {
			${hvNavTextColor ? `color:${hvNavTextColor} !important;` : ""}
		}

		.${blockId}.eb-advanced-navigation-wrapper .current-menu-item .wp-block-navigation-item__content {
			${actNavTextColor ? `color:${actNavTextColor} !important;` : ""}
		}
		.${blockId}.eb-advanced-navigation-wrapper .current-menu-item:hover >.wp-block-navigation-item__content {
			${actHvNavTextColor
            ? `color:${actHvNavTextColor} !important;`
            : `color:${hvNavTextColor} !important;`
        }
		}

		${preset === "preset-2" && layout == "is-horizontal"
            ? `
				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation-item:hover {
					${hvNavBgColor ? `background-color:${hvNavBgColor};` : ""}
				}

				.${blockId}.eb-advanced-navigation-wrapper .current-menu-item {
					${actNavBgColor ? `background-color:${actNavBgColor};` : ""}
				}
				.${blockId}.eb-advanced-navigation-wrapper .current-menu-item:hover {
					${actHvNavBgColor ? `background-color:${actHvNavBgColor};` : ""}
				}

				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container .wp-block-navigation-item__content {
					${dropdownItemBgColor ? `background-color:${dropdownItemBgColor};` : ""}

				}

				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container .wp-block-navigation-item:hover > .wp-block-navigation-item__content,
				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container .wp-block-navigation-item:hover > .wp-block-navigation-item__content {
					${hvDropdownItemBgColor ? `background-color:${hvDropdownItemBgColor};` : ""}
				}

				`
            : ""
        }

		${preset === "preset-3" && layout == "is-horizontal"
            ? `
				// .${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation-item__content{

				// 	border-color: transparent;
				// }
				// .${blockId}.eb-advanced-navigation-wrapper.preset-3 .current-menu-item .wp-block-navigation-item__content,
				// .${blockId}.eb-advanced-navigation-wrapper.preset-3 .wp-block-navigation-item:hover .wp-block-navigation-item__content {
				// 	${navBdShdStyesDesktop}
				// }


				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__container > .wp-block-navigation-item.current-menu-item::before {
					${actNavBgColor ? `background-color:${actNavBgColor};` : ""}
					${navBdShdStyesDesktop}
				}
				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__container > .wp-block-navigation-item:hover::before {
					${hvNavBgColor ? `background-color:${hvNavBgColor};` : ""}
					${navBdShdStyesDesktop}
				}


				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation-item:hover::before {
					${hvNavBgColor ? `background-color:${hvNavBgColor};` : ""}
					${navBdShdStyesDesktop}
				}

				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation-item.current-menu-item::before {
					${actNavBgColor ? `background-color:${actNavBgColor};` : ""}
					${navBdShdStyesDesktop}

				}
				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation-item.current-menu-item:hover::before  {
					${actHvNavBgColor ? `background-color:${actHvNavBgColor};` : ""}
				}

				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container .wp-block-navigation-item__content {
					${dropdownItemBgColor ? `background-color:${dropdownItemBgColor};` : ""}

				}

				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container .wp-block-navigation-item:hover > .wp-block-navigation-item__content,
				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container .wp-block-navigation-item:hover > .wp-block-navigation-item__content {
					${hvDropdownItemBgColor ? `background-color:${hvDropdownItemBgColor};` : ""}
				}

				`
            : ""
        }


		${preset === "preset-4" && layout == "is-horizontal"
            ? `
				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container:not(.is-menu-open) .wp-block-navigation__container > .wp-block-navigation-item:not(:last-child)::after {
					${navDividerColor ? `background-color:${navDividerColor};` : ""}
				}

				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container .wp-block-navigation-item {
					${navDropdownDividerColor ? `border-color:${navDropdownDividerColor};` : ""}
				}

				`
            : ""
        }

		${layout == "is-vertical" && verticalPreset === "vertical-preset-1"
            ? `
				.${blockId}.eb-advanced-navigation-wrapper.is-vertical.vertical-preset-1 .wp-block-navigation__responsive-container:not(.is-menu-open) .wp-block-navigation-item:not(:last-child) {
					border-bottom: 1px solid ${verticalNavDividerColor};

				}

			`
            : ""
        }

		${layout == "is-vertical" && verticalPreset === "vertical-preset-2"
            ? `
				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation-item:hover {
					${hvNavBgColor ? `background-color:${hvNavBgColor};` : ""}
				}

				.${blockId}.eb-advanced-navigation-wrapper .current-menu-item {
					${actNavBgColor ? `background-color:${actNavBgColor};` : ""}
				}
				.${blockId}.eb-advanced-navigation-wrapper .current-menu-item:hover {
					${actHvNavBgColor ? `background-color:${actHvNavBgColor};` : ""}
				}

				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container > .wp-block-navigation-item:hover,
				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container >.wp-block-navigation-item:hover {
					${hvDropdownItemBgColor ? `background-color:${hvDropdownItemBgColor};` : ""}
				}

			`
            : ""
        }


		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container {
			${navDropdownPaddingDesktop}
			${navDropdownBgColor ? `background-color:${navDropdownBgColor};` : ""}
			${navDropdownBdShdStyesDesktop}
			min-width: ${dropdownW_Range}px !important;
			width: max-content!important;
			max-width: max-content!important;
		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container .wp-block-navigation-item {
			padding: 0;
		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container .wp-block-navigation-item__content {
			${navDropdownTypoStylesDesktop}
			${navDropdownTextColor ? `color:${navDropdownTextColor};` : ""}
			${dropdownItemPaddingDesktop}
			${dropdownItemBdShdStyesDesktop}

		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container .wp-block-navigation-item:hover > .wp-block-navigation-item__content,
		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container .wp-block-navigation-item:hover >.wp-block-navigation-item__content {
			${hvNavDropdownTextColor ? `color:${hvNavDropdownTextColor};` : ""}
		}


		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-icon {
			width: ${carZ_Range}px;
			height: ${carZ_Range}px;
			${caretColor ? `color:${caretColor};` : `color:${navTextColor};`}
		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation-item:hover .wp-block-navigation__submenu-icon {
			${hvCaretColor ? `color:${hvCaretColor};` : `color:${hvNavTextColor};`}
		}


		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container-open {
			${navHamburgerBtnColor ? `color:${navHamburgerBtnColor};` : ""}
			${hamburgerBtnPaddingDesktop}
			${navBtnType ? "" : hamburgerBtnTypoStylesDesktop}
		}

		${navBtnType
            ? `
				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container-open svg{
					width: ${hamburgerBtnZ_Range}px;
					height: ${hamburgerBtnZ_Range}px;
				}

			`
            : ""
        }


		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open {
			background-color: ${navHamburgerBgColor};
			${hamburgerPaddingDesktop}
		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item {
			width: 100%;
		}


		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item__content{
			color: ${navHamburgerTextColor};
			background-color: transparent;
			${hamburgerItemPaddingDesktop}
			${navHamburgerTypoStylesDesktop}
			${navHamburgerItemBdShdStyesDesktop}
		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item:hover > .wp-block-navigation-item__content,
		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item:hover .wp-block-navigation__submenu-container .wp-block-navigation-item:hover .wp-block-navigation-item__content  {
			color: ${hvNavHamburgerTextColor};

		}


		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item:hover {
			background-color: ${hvHamburgerItemBgColor} !important;
		}

		.${blockId}.eb-advanced-navigation-wrapper .is-menu-open .wp-block-navigation-item.wp-block-navigation-submenu {
			background-color: ${hamburgerItemBgColor} !important;
		}

		.${blockId}.eb-advanced-navigation-wrapper .is-menu-open  .wp-block-navigation-item.wp-block-navigation-submenu .wp-block-navigation-item:hover {
			background-color: ${hvHamburgerItemBgColor} !important;
		}
		.${blockId}.eb-advanced-navigation-wrapper .is-menu-open .wp-block-navigation-item.wp-block-navigation-submenu .wp-block-navigation-item:hover .wp-block-navigation-item__content {
			background-color: transparent;
		}

		.${blockId}.eb-advanced-navigation-wrapper .is-menu-open .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__submenu-container {
			width: auto !Important;
		}



		.${blockId}.eb-advanced-navigation-wrapper .is-menu-open .wp-block-navigation__responsive-container-close {
			color: ${hamburgerCloseIconColor};
		}


	`);

    // all common (editor&frontEnd) css styles for Tab in strings ⬇
    const tabAllStylesCommon = softMinifyCssStrings(`

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation{
			${wrpMarginTab}
			${wrpPaddingTab}
			${wrpBackgroundStylesTab}
			${wrpBdShdStyesTab}
		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation:hover{
			${wrpHoverBackgroundStylesTab}
			${wrpBdShdStylesHoverTab}
		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation:before{
			${wrpOverlayStylesTab}
		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation:hover:before{
			${wrpHoverOverlayStylesTab}
		}



		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation-item{
			${navMarginTab}
			${navPaddingTab}
		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation-item__content {
			${navTypoStylesTab}

		}


		${preset === "preset-3" && layout == "is-horizontal"
            ? `


				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__container > .wp-block-navigation-item.current-menu-item::before {
					${navBdShdStyesTab}
				}
				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__container > .wp-block-navigation-item:hover::before {
					${navBdShdStyesTab}
				}


				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation-item:hover::before {
					${navBdShdStyesTab}
				}

				.${blockId}.eb-advanced-navigation-wrapper .current-menu-item::before {
					${navBdShdStyesTab}

				}


				`
            : ""
        }

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container {
			${navDropdownPaddingTab}
			${navDropdownBdShdStyesTab}
			min-width: ${TABdropdownW_Range}px !important;
		}
		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container .wp-block-navigation-item__content {
			${navDropdownTypoStylesTab}
			${dropdownItemPaddingTab}
			${dropdownItemBdShdStyesTab}

		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container-open {
			${hamburgerBtnPaddingTab}
			${navBtnType ? "" : hamburgerBtnTypoStylesTab}
		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-icon {
			width: ${TABcarZ_Range}px;
			height: ${TABcarZ_Range}px;
		}

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item__content{
			${hamburgerItemPaddingTab}
			${navHamburgerTypoStylesTab}
			${navHamburgerItemBdShdStyesTab}
		}

		${navBtnType
            ? `
				.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container-open svg{
					width: ${TABhamburgerBtnZ_Range}px;
					height: ${TABhamburgerBtnZ_Range}px;
				}

			`
            : ""
        }

		.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open {
			background-color: ${navHamburgerBgColor};
			${hamburgerPaddingTab}
		}

	`);

    // all common (editor&frontEnd) css styles for Mobile in strings ⬇
    const mobileAllStylesCommon = softMinifyCssStrings(`
	.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation{
		${wrpMarginMobile}
		${wrpPaddingMobile}
		${wrpBackgroundStylesMobile}
		${wrpBdShdStyesMobile}
	}

	.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation:hover{
		${wrpHoverBackgroundStylesMobile}
		${wrpBdShdStylesHoverMobile}
	}

	.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation:before{
		${wrpOverlayStylesMobile}
	}

	.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation:hover:before{
		${wrpHoverOverlayStylesMobile}
	}



	.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation-item{
		${navMarginMobile}
		${navPaddingMobile}
	}

	.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation-item__content {
		${navTypoStylesMobile}

	}


	${preset === "preset-3" && layout == "is-horizontal"
            ? `


			.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__container > .wp-block-navigation-item.current-menu-item::before {
				${navBdShdStyesMobile}
			}
			.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__container > .wp-block-navigation-item:hover::before {
				${navBdShdStyesMobile}
			}


			.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation-item:hover::before {
				${navBdShdStyesMobile}
			}

			.${blockId}.eb-advanced-navigation-wrapper .current-menu-item::before {
				${navBdShdStyesMobile}

			}

			`
            : ""
        }

	.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container {
		${navDropdownPaddingMobile}
		${navDropdownBdShdStyesMobile}
		min-width: ${MOBdropdownW_Range}px !important;
	}
	.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-container .wp-block-navigation-item__content {
		${navDropdownTypoStylesMobile}
		${dropdownItemPaddingMobile}
		${dropdownItemBdShdStyesMobile}

	}

	.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container-open {
		${hamburgerBtnPaddingMobile}
		${navBtnType ? "" : hamburgerBtnTypoStylesMobile}
	}
	.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__submenu-icon {
		width: ${MOBcarZ_Range}px;
		height: ${MOBcarZ_Range}px;
	}

	.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item__content{
		${hamburgerItemPaddingMobile}
		${navHamburgerTypoStylesMobile}
		${navHamburgerItemBdShdStyesMobile}
	}

	${navBtnType
            ? `
			.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container-open svg{
				width: ${MOBhamburgerBtnZ_Range}px;
				height: ${MOBhamburgerBtnZ_Range}px;
			}

		`
            : ""
        }

	.${blockId}.eb-advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open {
		background-color: ${navHamburgerBgColor};
		${hamburgerPaddingMobile}
	}

	`);

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		${desktopAllStylesCommon}

	`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		${tabAllStylesCommon}

	`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		${mobileAllStylesCommon}

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
