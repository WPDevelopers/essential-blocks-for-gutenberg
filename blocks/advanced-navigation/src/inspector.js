/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    Button,
    RangeControl,
    BaseControl,
    ButtonGroup,
    TabPanel,
    PanelRow,
    __experimentalDivider as Divider,
} from "@wordpress/components";

/**
 * Internal dependencies
 */

const {
    BackgroundControl,
    BorderShadowControl,
    ColorControl,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    AdvancedControls,
    EBIconPicker
} = EBControls;

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

import objAttributes from "./attributes";

import {
    //
    typoPrefixNav,
    typoPrefixNavDropdown,
    typoPrefixNavHamburger,
    typoPrefixHamburgerBtn,
} from "./constants/typographyPrefixConstants";

import {
    PRESET,
    NAV_POSITION,
    NAV_V_POSITION,
    NAV_RESPONSIVE_BTN,
    HAMBURGER_SCREEN,
    VERTICAL_PRESET,
    CLOSE_ICON_ALIGN,
} from "./constants";

function Inspector(props) {
    const { attributes, setAttributes, clientId, handleTabTitleClick } = props;

    const {
        blockId,

        // responsive control attributes ⬇
        resOption,

        layout,

        //
        navTextColor,
        hvNavTextColor,

        //
        actNavTextColor,
        actHvNavTextColor,

        //
        colorTransition,
        actColorTransition,

        //
        caretColor,

        //
        preset,
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
        dropdownOpenOnClick,
        showDropdownIcon,
        navBtnType,
        dropdownItemBgColor,
        hvDropdownItemBgColor,
        actDropdownItemBgColor,
        actHvDropdownItemBgColor,
        hvCaretColor,
        verticalPreset,

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
        hamburgerCloseIconAlign,
        verticalNavDividerColor,
    } = attributes;

    //
    const [colorSwitcher, setColorSwitcher] = useState("normal");
    const [activeColorSwitcher, setActiveColorSwitcher] = useState("normal");

    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
    };

    const changeLayout = (preset) => {
        setAttributes({ layout: preset });
        if (preset === "is-horizontal") {
            changePreset(preset);
        } else {
            changeVerticalPreset(verticalPreset);
        }
    };

    const changePreset = (selected) => {
        setAttributes({ preset: selected });
        switch (selected) {
            case "preset-1":
                setAttributes({
                    wrpBg_backgroundColor: "#ffffff",
                    navTextColor: "#6A72A5",
                    hvNavTextColor: "#2673FF",
                    caretColor: "#6A72A5",
                    hvCaretColor: "#2673FF",
                    navHamburgerBtnColor: "#2673FF",

                    actNavTextColor: "#2673FF",
                    actHvNavTextColor: "#2673FF",
                    hvNavDropdownTextColor: "#2673FF",

                    hvNavBgColor: "#ffffff",
                    actNavBgColor: "#ffffff",
                    actHvNavBgColor: "#ffffff",

                    navDropdownBgColor: "#ffffff",
                    navDropdownTextColor: "#6A72A5",
                    hvNavDropdownTextColor: "#2673FF",
                    dropdownItemBgColor: "#ffffff",
                    hvDropdownItemBgColor: "#ffffff",

                    dropdownP_Bottom: "10",
                    dropdownP_Left: "10",
                    dropdownP_Right: "10",
                    dropdownP_Top: "10",
                    dropdownP_Unit: "px",
                    dropdownP_isLinked: true,
                    dropdownItemP_Bottom: "10",
                    dropdownItemP_Left: "10",
                    dropdownItemP_Right: "10",
                    dropdownItemP_Top: "10",
                    dropdownItemP_Unit: "px",
                    dropdownItemP_isLinked: true,

                    wrpBds_Rds_Bottom: "5",
                    wrpBds_Rds_Left: "5",
                    wrpBds_Rds_Right: "5",
                    wrpBds_Rds_Top: "5",

                    navDropdownBds_Rds_Bottom: "5",
                    navDropdownBds_Rds_Left: "5",
                    navDropdownBds_Rds_Right: "5",
                    navDropdownBds_Rds_Top: "5",

                    wrpBds_BorderType: "normal",
                    wrpBds_borderStyle: "none",
                    wrpBds_borderColor: "#2673FF",
                    wrpBds_Bdr_Bottom: "1",
                    wrpBds_Bdr_Left: "1",
                    wrpBds_Bdr_Right: "1",
                    wrpBds_Bdr_Top: "1",
                    wrpBds_Bdr_Unit: "px",
                    wrpBds_Bdr_isLinked: true,

                    navDropdownBds_BorderType: "normal",
                    navDropdownBds_borderStyle: "none",
                    navDropdownBds_borderColor: "#6C63FF",
                    navDropdownBds_Bdr_Bottom: "1",
                    navDropdownBds_Bdr_Left: "1",
                    navDropdownBds_Bdr_Right: "1",
                    navDropdownBds_Bdr_Top: "1",
                    navDropdownBds_Bdr_Unit: "px",
                    navDropdownBds_Bdr_isLinked: true,
                });
                break;
            case "preset-2":
                setAttributes({
                    wrpBg_backgroundColor: "#6C63FF",
                    navTextColor: "#ffffff",
                    hvNavTextColor: "#6C63FF",
                    navHamburgerBtnColor: "#ffffff",
                    caretColor: "#ffffff",
                    hvCaretColor: "#6C63FF",
                    actNavTextColor: "#6C63FF",
                    actHvNavTextColor: "#6C63FF",
                    hvNavBgColor: "#ffffff",
                    actNavBgColor: "#ffffff",
                    actHvNavBgColor: "#ffffff",

                    navDropdownBgColor: "#6C63FF",
                    navDropdownTextColor: "#ffffff",
                    hvNavDropdownTextColor: "#6C63FF",
                    dropdownItemBgColor: "#6C63FF",
                    hvDropdownItemBgColor: "#ffffff",

                    dropdownP_Bottom: "0",
                    dropdownP_Left: "0",
                    dropdownP_Right: "0",
                    dropdownP_Top: "0",
                    dropdownP_Unit: "px",
                    dropdownP_isLinked: true,

                    wrpBds_Rds_Bottom: "0",
                    wrpBds_Rds_Left: "0",
                    wrpBds_Rds_Right: "0",
                    wrpBds_Rds_Top: "0",

                    navDropdownBds_Rds_Bottom: "0",
                    navDropdownBds_Rds_Left: "0",
                    navDropdownBds_Rds_Right: "0",
                    navDropdownBds_Rds_Top: "0",

                    wrpBds_BorderType: "normal",
                    wrpBds_borderStyle: "none",
                    wrpBds_borderColor: "#6C63FF",
                    wrpBds_Bdr_Bottom: "1",
                    wrpBds_Bdr_Left: "1",
                    wrpBds_Bdr_Right: "1",
                    wrpBds_Bdr_Top: "1",
                    wrpBds_Bdr_Unit: "px",
                    wrpBds_Bdr_isLinked: true,

                    navDropdownBds_BorderType: "normal",
                    navDropdownBds_borderStyle: "none",
                    navDropdownBds_borderColor: "#6C63FF",
                    navDropdownBds_Bdr_Bottom: "1",
                    navDropdownBds_Bdr_Left: "1",
                    navDropdownBds_Bdr_Right: "1",
                    navDropdownBds_Bdr_Top: "1",
                    navDropdownBds_Bdr_Unit: "px",
                    navDropdownBds_Bdr_isLinked: true,
                });
                break;
            case "preset-3":
                setAttributes({
                    wrpBg_backgroundColor: "#2673FF",
                    navTextColor: "#ffffff",
                    hvNavTextColor: "#ffffff",
                    caretColor: "#ffffff",
                    hvCaretColor: "#ffffff",
                    navHamburgerBtnColor: "#ffffff",

                    actNavTextColor: "#ffffff",
                    actHvNavTextColor: "#ffffff",
                    hvNavBgColor: "#0059FC",

                    actNavBgColor: "#0059FC",
                    actHvNavBgColor: "#0059FC",

                    navDropdownBgColor: "#2673FF",
                    navDropdownTextColor: "#ffffff",
                    hvNavDropdownTextColor: "#ffffff",
                    dropdownItemBgColor: "#2673FF",
                    hvDropdownItemBgColor: "#0059FC",

                    dropdownP_Bottom: "10",
                    dropdownP_Left: "10",
                    dropdownP_Right: "10",
                    dropdownP_Top: "10",
                    dropdownP_Unit: "px",
                    dropdownP_isLinked: true,
                    hvCaretColor: "#ffffff",

                    dropdownItemBds_Rds_Bottom: "0",
                    dropdownItemBds_Rds_Left: "0",
                    dropdownItemBds_Rds_Right: "0",
                    dropdownItemBds_Rds_Top: "0",

                    wrpBds_Rds_Bottom: "0",
                    wrpBds_Rds_Left: "0",
                    wrpBds_Rds_Right: "0",
                    wrpBds_Rds_Top: "0",

                    navDropdownBds_Rds_Bottom: "0",
                    navDropdownBds_Rds_Left: "0",
                    navDropdownBds_Rds_Right: "0",
                    navDropdownBds_Rds_Top: "0",

                    wrpBds_BorderType: "normal",
                    wrpBds_borderStyle: "none",
                    wrpBds_borderColor: "#6C63FF",
                    wrpBds_Bdr_Bottom: "1",
                    wrpBds_Bdr_Left: "1",
                    wrpBds_Bdr_Right: "1",
                    wrpBds_Bdr_Top: "1",
                    wrpBds_Bdr_Unit: "px",
                    wrpBds_Bdr_isLinked: true,

                    navDropdownBds_BorderType: "normal",
                    navDropdownBds_borderStyle: "none",
                    navDropdownBds_borderColor: "#6C63FF",
                    navDropdownBds_Bdr_Bottom: "1",
                    navDropdownBds_Bdr_Left: "1",
                    navDropdownBds_Bdr_Right: "1",
                    navDropdownBds_Bdr_Top: "1",
                    navDropdownBds_Bdr_Unit: "px",
                    navDropdownBds_Bdr_isLinked: true,
                });
                break;

            case "preset-4":
                setAttributes({
                    wrpBg_backgroundColor: "#ffffff",
                    navTextColor: "#6A72A5",
                    hvNavTextColor: "#2673FF",
                    caretColor: "#6A72A5",
                    hvCaretColor: "#2673FF",
                    navHamburgerBtnColor: "#2673FF",

                    actNavTextColor: "#2673FF",
                    actHvNavTextColor: "#2673FF",

                    navDropdownBgColor: "#ffffff",
                    navDropdownTextColor: "#6A72A5",
                    hvNavDropdownTextColor: "#2673FF",
                    dropdownP_Bottom: "0",
                    dropdownP_Left: "0",
                    dropdownP_Right: "0",
                    dropdownP_Top: "0",
                    dropdownP_Unit: "px",
                    dropdownP_isLinked: true,

                    wrpBds_Rds_Bottom: "5",
                    wrpBds_Rds_Left: "5",
                    wrpBds_Rds_Right: "5",
                    wrpBds_Rds_Top: "5",

                    navDropdownBds_Rds_Bottom: "5",
                    navDropdownBds_Rds_Left: "5",
                    navDropdownBds_Rds_Right: "5",
                    navDropdownBds_Rds_Top: "5",

                    wrpBds_BorderType: "normal",
                    wrpBds_borderStyle: "solid",
                    wrpBds_borderColor: "#2673FF",
                    wrpBds_Bdr_Bottom: "1",
                    wrpBds_Bdr_Left: "1",
                    wrpBds_Bdr_Right: "1",
                    wrpBds_Bdr_Top: "1",
                    wrpBds_Bdr_Unit: "px",
                    wrpBds_Bdr_isLinked: true,

                    navDropdownBds_BorderType: "normal",
                    navDropdownBds_borderStyle: "solid",
                    navDropdownBds_borderColor: "#2673FF",
                    navDropdownBds_Bdr_Bottom: "1",
                    navDropdownBds_Bdr_Left: "1",
                    navDropdownBds_Bdr_Right: "1",
                    navDropdownBds_Bdr_Top: "1",
                    navDropdownBds_Bdr_Unit: "px",
                    navDropdownBds_Bdr_isLinked: true,
                });
                break;

            default:
                return false;
        }
    };

    const changeVerticalPreset = (selected) => {
        setAttributes({ verticalPreset: selected });
        switch (selected) {
            case "vertical-preset-1":
                setAttributes({
                    wrpBg_backgroundColor: "#ffffff",
                    navTextColor: "#6A72A5",
                    hvNavTextColor: "#2673FF",
                    caretColor: "#6A72A5",
                    hvCaretColor: "#2673FF",

                    navHamburgerBtnColor: "#2673FF",

                    actNavTextColor: "#2673FF",
                    actHvNavTextColor: "#2673FF",

                    navDropdownBgColor: "#ffffff",
                    navDropdownTextColor: "#6A72A5",
                    hvNavDropdownTextColor: "#2673FF",

                    dropdownP_Bottom: "0",
                    dropdownP_Left: "0",
                    dropdownP_Right: "0",
                    dropdownP_Top: "0",
                    dropdownP_Unit: "px",
                    dropdownP_isLinked: true,

                    dropdownItemP_Bottom: "10",
                    dropdownItemP_Left: "10",
                    dropdownItemP_Right: "10",
                    dropdownItemP_Top: "10",
                    dropdownItemP_Unit: "px",
                    dropdownItemP_isLinked: true,
                    actNavTextColor: "#2673FF",
                    hvNavTextColor: "#2673FF",
                    hvCaretColor: "#2673FF",

                    wrpBds_Rds_Bottom: "5",
                    wrpBds_Rds_Left: "5",
                    wrpBds_Rds_Right: "5",
                    wrpBds_Rds_Top: "5",

                    navDropdownBds_Rds_Bottom: "5",
                    navDropdownBds_Rds_Left: "5",
                    navDropdownBds_Rds_Right: "5",
                    navDropdownBds_Rds_Top: "5",

                    wrpBds_BorderType: "normal",
                    wrpBds_borderStyle: "none",
                    wrpBds_borderColor: "#ffffff",
                    wrpBds_Bdr_Bottom: "0",
                    wrpBds_Bdr_Left: "0",
                    wrpBds_Bdr_Right: "0",
                    wrpBds_Bdr_Top: "0",
                    wrpBds_Bdr_Unit: "px",
                    wrpBds_Bdr_isLinked: true,

                    navDropdownBds_BorderType: "normal",
                    navDropdownBds_borderStyle: "none",
                    navDropdownBds_borderColor: "#ffffff",
                    navDropdownBds_Bdr_Bottom: "0",
                    navDropdownBds_Bdr_Left: "0",
                    navDropdownBds_Bdr_Right: "0",
                    navDropdownBds_Bdr_Top: "0",
                    navDropdownBds_Bdr_Unit: "px",
                    navDropdownBds_Bdr_isLinked: true,
                });
                break;
            case "vertical-preset-2":
                setAttributes({
                    wrpBg_backgroundColor: "#2673FF",
                    navTextColor: "#ffffff",
                    hvNavTextColor: "#ffffff",
                    caretColor: "#ffffff",
                    hvCaretColor: "#ffffff",
                    navHamburgerBtnColor: "#ffffff",

                    actNavTextColor: "#ffffff",
                    actHvNavTextColor: "#ffffff",
                    hvNavBgColor: "#0059FC",

                    actNavBgColor: "#0053EB",
                    actHvNavBgColor: "#0053EB",

                    navDropdownBgColor: "#0059FC",
                    // navDropdownTextColor: "#ffffff",
                    // hvNavDropdownTextColor: "#ffffff",
                    // dropdownItemBgColor: "#2673FF",
                    // hvDropdownItemBgColor: "#0059FC",

                    navDropdownTextColor: "#ffffff",
                    hvNavDropdownTextColor: "#ffffff",
                    dropdownItemBgColor: "#0059FC",
                    hvDropdownItemBgColor: "#0053EB",

                    dropdownP_Bottom: "0",
                    dropdownP_Left: "0",
                    dropdownP_Right: "0",
                    dropdownP_Top: "0",
                    dropdownP_Unit: "px",
                    dropdownP_isLinked: true,

                    wrpBds_Rds_Bottom: "5",
                    wrpBds_Rds_Left: "5",
                    wrpBds_Rds_Right: "5",
                    wrpBds_Rds_Top: "5",

                    navDropdownBds_Rds_Bottom: "5",
                    navDropdownBds_Rds_Left: "5",
                    navDropdownBds_Rds_Right: "5",
                    navDropdownBds_Rds_Top: "5",

                    wrpBds_BorderType: "normal",
                    wrpBds_borderStyle: "solid",
                    wrpBds_borderColor: "#2673FF",
                    wrpBds_Bdr_Bottom: "1",
                    wrpBds_Bdr_Left: "1",
                    wrpBds_Bdr_Right: "1",
                    wrpBds_Bdr_Top: "1",
                    wrpBds_Bdr_Unit: "px",
                    wrpBds_Bdr_isLinked: true,

                    navDropdownBds_BorderType: "normal",
                    navDropdownBds_borderStyle: "none",
                    navDropdownBds_borderColor: "#2673FF",
                    navDropdownBds_Bdr_Bottom: "1",
                    navDropdownBds_Bdr_Left: "1",
                    navDropdownBds_Bdr_Right: "1",
                    navDropdownBds_Bdr_Top: "1",
                    navDropdownBds_Bdr_Unit: "px",
                    navDropdownBds_Bdr_isLinked: true,
                });
                break;

            default:
                return false;
        }
    };

    return (
        <InspectorControls key="controls">
            <div className="eb-panel-control">
                <TabPanel
                    className="eb-parent-tab-panel"
                    activeClass="active-tab"
                    // onSelect={onSelect}
                    tabs={[
                        {
                            name: "general",
                            title: "General",
                            className: "eb-tab general",
                        },
                        {
                            name: "styles",
                            title: "Style",
                            className: "eb-tab styles",
                        },
                        {
                            name: "advance",
                            title: "Advanced",
                            className: "eb-tab advance",
                        },
                    ]}
                >
                    {(tab) => (
                        <div className={"eb-tab-controls" + tab.name}>
                            {tab.name === "general" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "General",
                                            "essential-blocks"
                                        )}
                                    // initialOpen={false}
                                    >
                                        <PanelRow>
                                            {__("Layout", "essential-blocks")}
                                        </PanelRow>
                                        <SelectControl
                                            label={__(
                                                "Orientation",
                                                "essential-blocks"
                                            )}
                                            value={layout}
                                            options={[
                                                {
                                                    label: __(
                                                        "Horizontal",
                                                        "essential-blocks"
                                                    ),
                                                    value: "is-horizontal",
                                                },
                                                {
                                                    label: __(
                                                        "Vertical",
                                                        "essential-blocks"
                                                    ),
                                                    value: "is-vertical",
                                                },
                                            ]}
                                            onChange={(selected) =>
                                                changeLayout(selected)
                                            }
                                        />

                                        {layout == "is-horizontal" && (
                                            <>
                                                <SelectControl
                                                    label={__(
                                                        "Preset",
                                                        "essential-blocks"
                                                    )}
                                                    value={preset}
                                                    options={PRESET}
                                                    onChange={(selected) =>
                                                        changePreset(selected)
                                                    }
                                                />

                                                <ToggleControl
                                                    label={__(
                                                        "Allow to wrap to multiple lines",
                                                        "essential-blocks"
                                                    )}
                                                    checked={flexWrap}
                                                    onChange={(flexWrap) =>
                                                        setAttributes({
                                                            flexWrap,
                                                        })
                                                    }
                                                />

                                                <BaseControl
                                                    label={__(
                                                        "Alignment",
                                                        "essential-blocks"
                                                    )}
                                                >
                                                    <ButtonGroup id="eb-button-group-alignment">
                                                        {NAV_POSITION.map(
                                                            (item, index) => (
                                                                <Button
                                                                    key={index}
                                                                    isPrimary={
                                                                        navAlign ===
                                                                        item.value
                                                                    }
                                                                    isSecondary={
                                                                        navAlign !==
                                                                        item.value
                                                                    }
                                                                    onClick={() =>
                                                                        setAttributes(
                                                                            {
                                                                                navAlign:
                                                                                    item.value,
                                                                            }
                                                                        )
                                                                    }
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            )
                                                        )}
                                                    </ButtonGroup>
                                                </BaseControl>
                                            </>
                                        )}

                                        {layout == "is-vertical" && (
                                            <>
                                                <SelectControl
                                                    label={__(
                                                        "Preset",
                                                        "essential-blocks"
                                                    )}
                                                    value={verticalPreset}
                                                    options={VERTICAL_PRESET}
                                                    onChange={(selected) =>
                                                        changeVerticalPreset(
                                                            selected
                                                        )
                                                    }
                                                />

                                                <BaseControl
                                                    label={__(
                                                        "Alignment",
                                                        "essential-blocks"
                                                    )}
                                                >
                                                    <ButtonGroup id="eb-button-group-alignment">
                                                        {NAV_V_POSITION.map(
                                                            (item, index) => (
                                                                <Button
                                                                    key={index}
                                                                    isPrimary={
                                                                        navVerticalAlign ===
                                                                        item.value
                                                                    }
                                                                    isSecondary={
                                                                        navVerticalAlign !==
                                                                        item.value
                                                                    }
                                                                    onClick={() =>
                                                                        setAttributes(
                                                                            {
                                                                                navVerticalAlign:
                                                                                    item.value,
                                                                            }
                                                                        )
                                                                    }
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            )
                                                        )}
                                                    </ButtonGroup>
                                                </BaseControl>
                                            </>
                                        )}

                                        <Divider />

                                        <PanelRow>
                                            {__(
                                                "Dropdown Menus",
                                                "essential-blocks"
                                            )}
                                        </PanelRow>
                                        <ToggleControl
                                            label={__(
                                                "Open on Click",
                                                "essential-blocks"
                                            )}
                                            checked={dropdownOpenOnClick}
                                            onChange={(dropdownOpenOnClick) =>
                                                setAttributes({
                                                    dropdownOpenOnClick,
                                                })
                                            }
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Show Dropdown Menu Icon?",
                                                "essential-blocks"
                                            )}
                                            checked={showDropdownIcon}
                                            onChange={(showDropdownIcon) =>
                                                setAttributes({
                                                    showDropdownIcon,
                                                })
                                            }
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Hamburger Menu",
                                            "essential-blocks"
                                        )}
                                    // initialOpen={false}
                                    >
                                        <BaseControl
                                            label={__(
                                                "Button Type",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup id="eb-button-group-alignment">
                                                {NAV_RESPONSIVE_BTN.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                navBtnType ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                navBtnType !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    navBtnType:
                                                                        item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>
                                        </BaseControl>

                                        <BaseControl
                                            label={__(
                                                "Display Hamburger Menu",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup id="eb-button-group-alignment">
                                                {HAMBURGER_SCREEN.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                hamburgerMenu ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                hamburgerMenu !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    hamburgerMenu:
                                                                        item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>
                                        </BaseControl>
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "Navigation",
                                            "essential-blocks"
                                        )}
                                    // initialOpen={false}
                                    >
                                        <TypographyDropdown
                                            baseLabel="Typography"
                                            typographyPrefixConstant={
                                                typoPrefixNav
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />

                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={prefixNavPadding}
                                            baseLabel="Padding"
                                        />

                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={prefixNavMargin}
                                            baseLabel="Margin"
                                        />

                                        {layout == "is-horizontal" &&
                                            preset == "preset-4" && (
                                                <ColorControl
                                                    label={__(
                                                        "Divider Color",
                                                        "essential-blocks"
                                                    )}
                                                    defaultColor={
                                                        objAttributes
                                                            .navDividerColor
                                                            .default
                                                    }
                                                    color={navDividerColor}
                                                    onChange={(
                                                        navDividerColor
                                                    ) =>
                                                        setAttributes({
                                                            navDividerColor,
                                                        })
                                                    }
                                                />
                                            )}

                                        {layout == "is-vertical" &&
                                            preset == "preset-1" && (
                                                <ColorControl
                                                    label={__(
                                                        "Divider Color",
                                                        "essential-blocks"
                                                    )}
                                                    defaultColor={
                                                        objAttributes
                                                            .verticalNavDividerColor
                                                            .default
                                                    }
                                                    color={
                                                        verticalNavDividerColor
                                                    }
                                                    onChange={(
                                                        verticalNavDividerColor
                                                    ) =>
                                                        setAttributes({
                                                            verticalNavDividerColor,
                                                        })
                                                    }
                                                />
                                            )}

                                        <PanelBody
                                            title={__(
                                                "Colors",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <BaseControl>
                                                <ButtonGroup>
                                                    {[
                                                        {
                                                            label: __(
                                                                "Normal",
                                                                "essential-blocks"
                                                            ),
                                                            value: "normal",
                                                        },
                                                        {
                                                            label: __(
                                                                "Hover",
                                                                "essential-blocks"
                                                            ),
                                                            value: "hover",
                                                        },
                                                    ].map(
                                                        (
                                                            { value, label },
                                                            index
                                                        ) => (
                                                            <Button
                                                                key={index}
                                                                // isLarge
                                                                isPrimary={
                                                                    colorSwitcher ===
                                                                    value
                                                                }
                                                                isSecondary={
                                                                    colorSwitcher !==
                                                                    value
                                                                }
                                                                onClick={() =>
                                                                    setColorSwitcher(
                                                                        value
                                                                    )
                                                                }
                                                            >
                                                                {label}
                                                            </Button>
                                                        )
                                                    )}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {colorSwitcher === "normal" && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Text",
                                                            "essential-blocks"
                                                        )}
                                                        defaultColor={
                                                            objAttributes
                                                                .navTextColor
                                                                .default
                                                        }
                                                        color={navTextColor}
                                                        onChange={(
                                                            navTextColor
                                                        ) =>
                                                            setAttributes({
                                                                navTextColor,
                                                            })
                                                        }
                                                    />

                                                    {/* {preset == "preset-2" && (
														<ColorControl
															label={__("Background", "essential-blocks")}
															defaultColor={objAttributes.navBgColor.default}
															color={navBgColor}
															onChange={(navBgColor) =>
																setAttributes({ navBgColor })
															}
														/>
													)} */}
                                                </>
                                            )}

                                            {colorSwitcher === "hover" && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Text",
                                                            "essential-blocks"
                                                        )}
                                                        defaultColor={
                                                            objAttributes
                                                                .hvNavTextColor
                                                                .default
                                                        }
                                                        color={hvNavTextColor}
                                                        onChange={(
                                                            hvNavTextColor
                                                        ) =>
                                                            setAttributes({
                                                                hvNavTextColor,
                                                            })
                                                        }
                                                    />
                                                    {layout ==
                                                        "is-horizontal" &&
                                                        (preset == "preset-2" ||
                                                            preset ==
                                                            "preset-3") && (
                                                            <ColorControl
                                                                label={__(
                                                                    "Background",
                                                                    "essential-blocks"
                                                                )}
                                                                defaultColor={
                                                                    objAttributes
                                                                        .hvNavBgColor
                                                                        .default
                                                                }
                                                                color={
                                                                    hvNavBgColor
                                                                }
                                                                onChange={(
                                                                    hvNavBgColor
                                                                ) =>
                                                                    setAttributes(
                                                                        {
                                                                            hvNavBgColor,
                                                                        }
                                                                    )
                                                                }
                                                            />
                                                        )}

                                                    {layout == "is-vertical" &&
                                                        verticalPreset ==
                                                        "vertical-preset-2" && (
                                                            <ColorControl
                                                                label={__(
                                                                    "Background",
                                                                    "essential-blocks"
                                                                )}
                                                                defaultColor={
                                                                    objAttributes
                                                                        .hvNavBgColor
                                                                        .default
                                                                }
                                                                color={
                                                                    hvNavBgColor
                                                                }
                                                                onChange={(
                                                                    hvNavBgColor
                                                                ) =>
                                                                    setAttributes(
                                                                        {
                                                                            hvNavBgColor,
                                                                        }
                                                                    )
                                                                }
                                                            />
                                                        )}
                                                </>
                                            )}
                                        </PanelBody>

                                        <PanelBody
                                            title={__(
                                                "Active Colors",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <BaseControl>
                                                <ButtonGroup>
                                                    {[
                                                        {
                                                            label: __(
                                                                "Normal",
                                                                "essential-blocks"
                                                            ),
                                                            value: "normal",
                                                        },
                                                        {
                                                            label: __(
                                                                "Hover",
                                                                "essential-blocks"
                                                            ),
                                                            value: "hover",
                                                        },
                                                    ].map(
                                                        (
                                                            { value, label },
                                                            index
                                                        ) => (
                                                            <Button
                                                                key={index}
                                                                // isSmall
                                                                // isLarge
                                                                isPrimary={
                                                                    activeColorSwitcher ===
                                                                    value
                                                                }
                                                                isSecondary={
                                                                    activeColorSwitcher !==
                                                                    value
                                                                }
                                                                onClick={() =>
                                                                    setActiveColorSwitcher(
                                                                        value
                                                                    )
                                                                }
                                                            >
                                                                {label}
                                                            </Button>
                                                        )
                                                    )}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {activeColorSwitcher ===
                                                "normal" && (
                                                    <>
                                                        <ColorControl
                                                            label={__(
                                                                "Text",
                                                                "essential-blocks"
                                                            )}
                                                            defaultColor={
                                                                objAttributes
                                                                    .actNavTextColor
                                                                    .default
                                                            }
                                                            color={actNavTextColor}
                                                            onChange={(
                                                                actNavTextColor
                                                            ) =>
                                                                setAttributes({
                                                                    actNavTextColor,
                                                                })
                                                            }
                                                        />

                                                        {layout ==
                                                            "is-horizontal" &&
                                                            (preset == "preset-2" ||
                                                                preset ==
                                                                "preset-3") && (
                                                                <ColorControl
                                                                    label={__(
                                                                        "Background",
                                                                        "essential-blocks"
                                                                    )}
                                                                    defaultColor={
                                                                        objAttributes
                                                                            .actNavBgColor
                                                                            .default
                                                                    }
                                                                    color={
                                                                        actNavBgColor
                                                                    }
                                                                    onChange={(
                                                                        actNavBgColor
                                                                    ) =>
                                                                        setAttributes(
                                                                            {
                                                                                actNavBgColor,
                                                                            }
                                                                        )
                                                                    }
                                                                />
                                                            )}

                                                        {layout == "is-vertical" &&
                                                            verticalPreset ==
                                                            "vertical-preset-2" && (
                                                                <ColorControl
                                                                    label={__(
                                                                        "Background",
                                                                        "essential-blocks"
                                                                    )}
                                                                    defaultColor={
                                                                        objAttributes
                                                                            .actNavBgColor
                                                                            .default
                                                                    }
                                                                    color={
                                                                        actNavBgColor
                                                                    }
                                                                    onChange={(
                                                                        actNavBgColor
                                                                    ) =>
                                                                        setAttributes(
                                                                            {
                                                                                actNavBgColor,
                                                                            }
                                                                        )
                                                                    }
                                                                />
                                                            )}
                                                    </>
                                                )}

                                            {activeColorSwitcher ===
                                                "hover" && (
                                                    <>
                                                        <ColorControl
                                                            label={__(
                                                                "Text",
                                                                "essential-blocks"
                                                            )}
                                                            defaultColor={
                                                                objAttributes
                                                                    .actHvNavTextColor
                                                                    .default
                                                            }
                                                            color={
                                                                actHvNavTextColor
                                                            }
                                                            onChange={(
                                                                actHvNavTextColor
                                                            ) =>
                                                                setAttributes({
                                                                    actHvNavTextColor,
                                                                })
                                                            }
                                                        />

                                                        {layout ==
                                                            "is-horizontal" &&
                                                            (preset == "preset-2" ||
                                                                preset ==
                                                                "preset-3") && (
                                                                <ColorControl
                                                                    label={__(
                                                                        "Backgound",
                                                                        "essential-blocks"
                                                                    )}
                                                                    defaultColor={
                                                                        objAttributes
                                                                            .actHvNavBgColor
                                                                            .default
                                                                    }
                                                                    color={
                                                                        actHvNavBgColor
                                                                    }
                                                                    onChange={(
                                                                        actHvNavBgColor
                                                                    ) =>
                                                                        setAttributes(
                                                                            {
                                                                                actHvNavBgColor,
                                                                            }
                                                                        )
                                                                    }
                                                                />
                                                            )}

                                                        {layout == "is-vertical" &&
                                                            verticalPreset ==
                                                            "vertical-preset-2" && (
                                                                <ColorControl
                                                                    label={__(
                                                                        "Backgound",
                                                                        "essential-blocks"
                                                                    )}
                                                                    defaultColor={
                                                                        objAttributes
                                                                            .actHvNavBgColor
                                                                            .default
                                                                    }
                                                                    color={
                                                                        actHvNavBgColor
                                                                    }
                                                                    onChange={(
                                                                        actHvNavBgColor
                                                                    ) =>
                                                                        setAttributes(
                                                                            {
                                                                                actHvNavBgColor,
                                                                            }
                                                                        )
                                                                    }
                                                                />
                                                            )}

                                                        <BaseControl
                                                            label={__(
                                                                "Transition",
                                                                "essential-blocks"
                                                            )}
                                                        >
                                                            <RangeControl
                                                                value={
                                                                    actColorTransition
                                                                }
                                                                onChange={(
                                                                    actColorTransition
                                                                ) =>
                                                                    setAttributes({
                                                                        actColorTransition,
                                                                    })
                                                                }
                                                                step={0.1}
                                                                min={0}
                                                                max={5}
                                                            />
                                                        </BaseControl>
                                                    </>
                                                )}
                                        </PanelBody>

                                        {preset === "preset-3" && (
                                            <PanelBody
                                                title={__(
                                                    "Active & Hover Border"
                                                )}
                                                initialOpen={false}
                                            >
                                                <BorderShadowControl
                                                    controlName={
                                                        prefixNavBdShadow
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    noShadow
                                                    noBdrHover
                                                // noBorder
                                                />
                                            </PanelBody>
                                        )}
                                    </PanelBody>

                                    <PanelBody
                                        title={__(
                                            "Dropdown Menu",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <PanelRow>
                                            {__(
                                                "Container",
                                                "essential-blocks"
                                            )}
                                        </PanelRow>
                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Min Width (PX)",
                                                "essential-blocks"
                                            )}
                                            controlName={prefixDropdownWidth}
                                            resRequiredProps={resRequiredProps}
                                            min={100}
                                            max={500}
                                            step={1}
                                            noUnits
                                        />
                                        <ColorControl
                                            label={__(
                                                "Background",
                                                "essential-blocks"
                                            )}
                                            defaultColor={
                                                objAttributes.navDropdownBgColor
                                                    .default
                                            }
                                            color={navDropdownBgColor}
                                            onChange={(navDropdownBgColor) =>
                                                setAttributes({
                                                    navDropdownBgColor,
                                                })
                                            }
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={
                                                prefixNavDropdownPadding
                                            }
                                            baseLabel="Padding"
                                        />

                                        <PanelBody
                                            title={__("Border & Shadow")}
                                            initialOpen={false}
                                        >
                                            <BorderShadowControl
                                                controlName={
                                                    prefixNavDropdownBdShadow
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                noBdrHover

                                            // noShadow
                                            // noBorder
                                            />
                                        </PanelBody>

                                        <Divider />
                                        <PanelRow>
                                            {__("Items", "essential-blocks")}
                                        </PanelRow>
                                        <TypographyDropdown
                                            baseLabel="Typography"
                                            typographyPrefixConstant={
                                                typoPrefixNavDropdown
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={
                                                prefixDropdownItemPadding
                                            }
                                            baseLabel="Padding"
                                        />
                                        {preset == "preset-4" && (
                                            <ColorControl
                                                label={__(
                                                    "Divider Color",
                                                    "essential-blocks"
                                                )}
                                                defaultColor={
                                                    objAttributes
                                                        .navDropdownDividerColor
                                                        .default
                                                }
                                                color={navDropdownDividerColor}
                                                onChange={(
                                                    navDropdownDividerColor
                                                ) =>
                                                    setAttributes({
                                                        navDropdownDividerColor,
                                                    })
                                                }
                                            />
                                        )}
                                        <PanelBody
                                            title={__(
                                                "Colors",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <BaseControl>
                                                <ButtonGroup>
                                                    {[
                                                        {
                                                            label: __(
                                                                "Normal",
                                                                "essential-blocks"
                                                            ),
                                                            value: "normal",
                                                        },
                                                        {
                                                            label: __(
                                                                "Hover",
                                                                "essential-blocks"
                                                            ),
                                                            value: "hover",
                                                        },
                                                    ].map(
                                                        (
                                                            { value, label },
                                                            index
                                                        ) => (
                                                            <Button
                                                                key={index}
                                                                // isLarge
                                                                isPrimary={
                                                                    colorSwitcher ===
                                                                    value
                                                                }
                                                                isSecondary={
                                                                    colorSwitcher !==
                                                                    value
                                                                }
                                                                onClick={() =>
                                                                    setColorSwitcher(
                                                                        value
                                                                    )
                                                                }
                                                            >
                                                                {label}
                                                            </Button>
                                                        )
                                                    )}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {colorSwitcher === "normal" && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Text",
                                                            "essential-blocks"
                                                        )}
                                                        defaultColor={
                                                            objAttributes
                                                                .navDropdownTextColor
                                                                .default
                                                        }
                                                        color={
                                                            navDropdownTextColor
                                                        }
                                                        onChange={(
                                                            navDropdownTextColor
                                                        ) =>
                                                            setAttributes({
                                                                navDropdownTextColor,
                                                            })
                                                        }
                                                    />

                                                    {(preset == "preset-2" ||
                                                        preset ==
                                                        "preset-3") && (
                                                            <ColorControl
                                                                label={__(
                                                                    "Background",
                                                                    "essential-blocks"
                                                                )}
                                                                defaultColor={
                                                                    objAttributes
                                                                        .dropdownItemBgColor
                                                                        .default
                                                                }
                                                                color={
                                                                    dropdownItemBgColor
                                                                }
                                                                onChange={(
                                                                    dropdownItemBgColor
                                                                ) =>
                                                                    setAttributes({
                                                                        dropdownItemBgColor,
                                                                    })
                                                                }
                                                            />
                                                        )}
                                                </>
                                            )}

                                            {colorSwitcher === "hover" && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Text",
                                                            "essential-blocks"
                                                        )}
                                                        defaultColor={
                                                            objAttributes
                                                                .hvNavDropdownTextColor
                                                                .default
                                                        }
                                                        color={
                                                            hvNavDropdownTextColor
                                                        }
                                                        onChange={(
                                                            hvNavDropdownTextColor
                                                        ) =>
                                                            setAttributes({
                                                                hvNavDropdownTextColor,
                                                            })
                                                        }
                                                    />

                                                    {layout ==
                                                        "is-horizontal" &&
                                                        (preset == "preset-2" ||
                                                            preset ==
                                                            "preset-3") && (
                                                            <ColorControl
                                                                label={__(
                                                                    "Background",
                                                                    "essential-blocks"
                                                                )}
                                                                defaultColor={
                                                                    objAttributes
                                                                        .hvDropdownItemBgColor
                                                                        .default
                                                                }
                                                                color={
                                                                    hvDropdownItemBgColor
                                                                }
                                                                onChange={(
                                                                    hvDropdownItemBgColor
                                                                ) =>
                                                                    setAttributes(
                                                                        {
                                                                            hvDropdownItemBgColor,
                                                                        }
                                                                    )
                                                                }
                                                            />
                                                        )}

                                                    {layout == "is-vertical" &&
                                                        verticalPreset ==
                                                        "vertical-preset-2" && (
                                                            <ColorControl
                                                                label={__(
                                                                    "Background",
                                                                    "essential-blocks"
                                                                )}
                                                                defaultColor={
                                                                    objAttributes
                                                                        .hvDropdownItemBgColor
                                                                        .default
                                                                }
                                                                color={
                                                                    hvDropdownItemBgColor
                                                                }
                                                                onChange={(
                                                                    hvDropdownItemBgColor
                                                                ) =>
                                                                    setAttributes(
                                                                        {
                                                                            hvDropdownItemBgColor,
                                                                        }
                                                                    )
                                                                }
                                                            />
                                                        )}

                                                    <RangeControl
                                                        value={colorTransition}
                                                        onChange={(
                                                            colorTransition
                                                        ) =>
                                                            setAttributes({
                                                                colorTransition,
                                                            })
                                                        }
                                                        step={0.1}
                                                        min={0}
                                                        max={5}
                                                    />
                                                </>
                                            )}
                                        </PanelBody>

                                        <PanelBody
                                            title={__(
                                                "Active Colors",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <BaseControl>
                                                <ButtonGroup>
                                                    {[
                                                        {
                                                            label: __(
                                                                "Normal",
                                                                "essential-blocks"
                                                            ),
                                                            value: "normal",
                                                        },
                                                        {
                                                            label: __(
                                                                "Hover",
                                                                "essential-blocks"
                                                            ),
                                                            value: "hover",
                                                        },
                                                    ].map(
                                                        (
                                                            { value, label },
                                                            index
                                                        ) => (
                                                            <Button
                                                                key={index}
                                                                // isSmall
                                                                // isLarge
                                                                isPrimary={
                                                                    activeColorSwitcher ===
                                                                    value
                                                                }
                                                                isSecondary={
                                                                    activeColorSwitcher !==
                                                                    value
                                                                }
                                                                onClick={() =>
                                                                    setActiveColorSwitcher(
                                                                        value
                                                                    )
                                                                }
                                                            >
                                                                {label}
                                                            </Button>
                                                        )
                                                    )}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {activeColorSwitcher ===
                                                "normal" && (
                                                    <>
                                                        <ColorControl
                                                            label={__(
                                                                "Text",
                                                                "essential-blocks"
                                                            )}
                                                            defaultColor={
                                                                objAttributes
                                                                    .actNavDropdownTextColor
                                                                    .default
                                                            }
                                                            color={
                                                                actNavDropdownTextColor
                                                            }
                                                            onChange={(
                                                                actNavDropdownTextColor
                                                            ) =>
                                                                setAttributes({
                                                                    actNavDropdownTextColor,
                                                                })
                                                            }
                                                        />

                                                        {(preset == "preset-2" ||
                                                            preset ==
                                                            "preset-3") && (
                                                                <ColorControl
                                                                    label={__(
                                                                        "Background",
                                                                        "essential-blocks"
                                                                    )}
                                                                    defaultColor={
                                                                        objAttributes
                                                                            .actDropdownItemBgColor
                                                                            .default
                                                                    }
                                                                    color={
                                                                        actDropdownItemBgColor
                                                                    }
                                                                    onChange={(
                                                                        actDropdownItemBgColor
                                                                    ) =>
                                                                        setAttributes({
                                                                            actDropdownItemBgColor,
                                                                        })
                                                                    }
                                                                />
                                                            )}

                                                        {/* <ColorControl
														label={__("Icon", "essential-blocks")}
														defaultColor={objAttributes.actIconColor.default}
														color={actIconColor}
														onChange={(actIconColor) =>
															setAttributes({ actIconColor })
														}
													/> */}
                                                    </>
                                                )}

                                            {activeColorSwitcher ===
                                                "hover" && (
                                                    <>
                                                        <ColorControl
                                                            label={__(
                                                                "Text",
                                                                "essential-blocks"
                                                            )}
                                                            defaultColor={
                                                                objAttributes
                                                                    .actHvNavDropdownTextColor
                                                                    .default
                                                            }
                                                            color={
                                                                actHvNavDropdownTextColor
                                                            }
                                                            onChange={(
                                                                actHvNavDropdownTextColor
                                                            ) =>
                                                                setAttributes({
                                                                    actHvNavDropdownTextColor,
                                                                })
                                                            }
                                                        />

                                                        {(preset == "preset-2" ||
                                                            preset ==
                                                            "preset-3") && (
                                                                <ColorControl
                                                                    label={__(
                                                                        "Background",
                                                                        "essential-blocks"
                                                                    )}
                                                                    defaultColor={
                                                                        objAttributes
                                                                            .actHvDropdownItemBgColor
                                                                            .default
                                                                    }
                                                                    color={
                                                                        actHvDropdownItemBgColor
                                                                    }
                                                                    onChange={(
                                                                        actHvDropdownItemBgColor
                                                                    ) =>
                                                                        setAttributes({
                                                                            actHvDropdownItemBgColor,
                                                                        })
                                                                    }
                                                                />
                                                            )}

                                                        {/* <ColorControl
														label={__("Icon", "essential-blocks")}
														defaultColor={objAttributes.actHvIconColor.default}
														color={actHvIconColor}
														onChange={(actHvIconColor) =>
															setAttributes({ actHvIconColor })
														}
													/> */}

                                                        {/* <BaseControl
														label={__("Transition", "essential-blocks")}
													>
														<RangeControl
															value={actColorTransition}
															onChange={(actColorTransition) =>
																setAttributes({
																	actColorTransition,
																})
															}
															step={0.1}
															min={0}
															max={5}
														/>
													</BaseControl> */}
                                                    </>
                                                )}
                                        </PanelBody>

                                        {preset == "preset-3" && (
                                            <PanelBody
                                                title={__("Border & Shadow")}
                                                initialOpen={false}
                                            >
                                                <BorderShadowControl
                                                    controlName={
                                                        prefixDropdownItemBdShadow
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    noShadow
                                                // noBorder
                                                />
                                            </PanelBody>
                                        )}
                                    </PanelBody>

                                    {showDropdownIcon && (
                                        <PanelBody
                                            title={__(
                                                "Caret",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Caret Size",
                                                    "essential-blocks"
                                                )}
                                                controlName={prefixCaretSize}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={0}
                                                max={100}
                                                step={1}
                                                noUnits
                                            />

                                            <ColorControl
                                                label={__(
                                                    "Caret Color",
                                                    "essential-blocks"
                                                )}
                                                defaultColor={
                                                    objAttributes.caretColor
                                                        .default
                                                }
                                                color={caretColor}
                                                onChange={(caretColor) =>
                                                    setAttributes({
                                                        caretColor,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Hover Caret Color",
                                                    "essential-blocks"
                                                )}
                                                defaultColor={
                                                    objAttributes.hvCaretColor
                                                        .default
                                                }
                                                color={hvCaretColor}
                                                onChange={(hvCaretColor) =>
                                                    setAttributes({
                                                        hvCaretColor,
                                                    })
                                                }
                                            />
                                        </PanelBody>
                                    )}

                                    <PanelBody
                                        title={__(
                                            "Hamburger Menu",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <PanelRow>
                                            {__("Button", "essential-blocks")}
                                        </PanelRow>

                                        {navBtnType && (
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Icon Size(PX)",
                                                    "essential-blocks"
                                                )}
                                                controlName={
                                                    prefixHamburerBtnSize
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={0}
                                                max={100}
                                                step={1}
                                                noUnits
                                            />
                                        )}

                                        {!navBtnType && (
                                            <TypographyDropdown
                                                baseLabel="Typography"
                                                typographyPrefixConstant={
                                                    typoPrefixHamburgerBtn
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                        )}

                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            defaultColor={
                                                objAttributes
                                                    .navHamburgerBtnColor
                                                    .default
                                            }
                                            color={navHamburgerBtnColor}
                                            onChange={(navHamburgerBtnColor) =>
                                                setAttributes({
                                                    navHamburgerBtnColor,
                                                })
                                            }
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={
                                                prefixHamburgerBtnPadding
                                            }
                                            baseLabel="Padding"
                                        />

                                        <PanelRow>
                                            {__(
                                                "Container",
                                                "essential-blocks"
                                            )}
                                        </PanelRow>

                                        <ColorControl
                                            label={__(
                                                "Background",
                                                "essential-blocks"
                                            )}
                                            defaultColor={
                                                objAttributes
                                                    .navHamburgerBgColor.default
                                            }
                                            color={navHamburgerBgColor}
                                            onChange={(navHamburgerBgColor) =>
                                                setAttributes({
                                                    navHamburgerBgColor,
                                                })
                                            }
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={
                                                prefixNavHamburgerPadding
                                            }
                                            baseLabel="Padding"
                                        />

                                        <Divider />

                                        <PanelRow>
                                            {__("Items", "essential-blocks")}
                                        </PanelRow>
                                        <TypographyDropdown
                                            baseLabel="Typography"
                                            typographyPrefixConstant={
                                                typoPrefixNavHamburger
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={
                                                prefixHamburgerItemPadding
                                            }
                                            baseLabel="Padding"
                                        />
                                        <PanelBody
                                            title={__(
                                                "Colors",
                                                "essential-blocks"
                                            )}
                                            initialOpen={false}
                                        >
                                            <BaseControl>
                                                <ButtonGroup>
                                                    {[
                                                        {
                                                            label: __(
                                                                "Normal",
                                                                "essential-blocks"
                                                            ),
                                                            value: "normal",
                                                        },
                                                        {
                                                            label: __(
                                                                "Hover",
                                                                "essential-blocks"
                                                            ),
                                                            value: "hover",
                                                        },
                                                    ].map(
                                                        (
                                                            { value, label },
                                                            index
                                                        ) => (
                                                            <Button
                                                                key={index}
                                                                // isLarge
                                                                isPrimary={
                                                                    colorSwitcher ===
                                                                    value
                                                                }
                                                                isSecondary={
                                                                    colorSwitcher !==
                                                                    value
                                                                }
                                                                onClick={() =>
                                                                    setColorSwitcher(
                                                                        value
                                                                    )
                                                                }
                                                            >
                                                                {label}
                                                            </Button>
                                                        )
                                                    )}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {colorSwitcher === "normal" && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Text",
                                                            "essential-blocks"
                                                        )}
                                                        defaultColor={
                                                            objAttributes
                                                                .navHamburgerTextColor
                                                                .default
                                                        }
                                                        color={
                                                            navHamburgerTextColor
                                                        }
                                                        onChange={(
                                                            navHamburgerTextColor
                                                        ) =>
                                                            setAttributes({
                                                                navHamburgerTextColor,
                                                            })
                                                        }
                                                    />

                                                    <ColorControl
                                                        label={__(
                                                            "Background",
                                                            "essential-blocks"
                                                        )}
                                                        defaultColor={
                                                            objAttributes
                                                                .hamburgerItemBgColor
                                                                .default
                                                        }
                                                        color={
                                                            hamburgerItemBgColor
                                                        }
                                                        onChange={(
                                                            hamburgerItemBgColor
                                                        ) =>
                                                            setAttributes({
                                                                hamburgerItemBgColor,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}

                                            {colorSwitcher === "hover" && (
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Text",
                                                            "essential-blocks"
                                                        )}
                                                        defaultColor={
                                                            objAttributes
                                                                .hvNavHamburgerTextColor
                                                                .default
                                                        }
                                                        color={
                                                            hvNavHamburgerTextColor
                                                        }
                                                        onChange={(
                                                            hvNavHamburgerTextColor
                                                        ) =>
                                                            setAttributes({
                                                                hvNavHamburgerTextColor,
                                                            })
                                                        }
                                                    />

                                                    <ColorControl
                                                        label={__(
                                                            "Background",
                                                            "essential-blocks"
                                                        )}
                                                        defaultColor={
                                                            objAttributes
                                                                .hvHamburgerItemBgColor
                                                                .default
                                                        }
                                                        color={
                                                            hvHamburgerItemBgColor
                                                        }
                                                        onChange={(
                                                            hvHamburgerItemBgColor
                                                        ) =>
                                                            setAttributes({
                                                                hvHamburgerItemBgColor,
                                                            })
                                                        }
                                                    />

                                                    {/* <RangeControl
														value={colorTransition}
														onChange={(colorTransition) =>
															setAttributes({
																colorTransition,
															})
														}
														step={0.1}
														min={0}
														max={5}
													/> */}
                                                </>
                                            )}
                                        </PanelBody>

                                        <PanelBody
                                            title={__("Border")}
                                            initialOpen={false}
                                        >
                                            <BorderShadowControl
                                                controlName={
                                                    prefixHamburgerItemBdShadow
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                noShadow
                                                noBdrHover
                                            // noBorder
                                            />
                                        </PanelBody>

                                        <Divider />

                                        <PanelRow>
                                            {__(
                                                "Close Icon",
                                                "essential-blocks"
                                            )}
                                        </PanelRow>
                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            defaultColor={
                                                objAttributes
                                                    .hamburgerCloseIconColor
                                                    .default
                                            }
                                            color={hamburgerCloseIconColor}
                                            onChange={(
                                                hamburgerCloseIconColor
                                            ) =>
                                                setAttributes({
                                                    hamburgerCloseIconColor,
                                                })
                                            }
                                        />
                                        <BaseControl
                                            label={__(
                                                "Alignment",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup id="eb-button-group-alignment">
                                                {CLOSE_ICON_ALIGN.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                hamburgerCloseIconAlign ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                hamburgerCloseIconAlign !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    hamburgerCloseIconAlign:
                                                                        item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>
                                        </BaseControl>
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "advance" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "Margin & Padding",
                                            "essential-blocks"
                                        )}
                                    >
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={prefixWrapperMargin}
                                            baseLabel="Margin"
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={prefixWrapperPadding}
                                            baseLabel="Padding"
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__(
                                            "Background",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <BackgroundControl
                                            controlName={prefixWrapBg}
                                            resRequiredProps={resRequiredProps}
                                        // noOverlay
                                        // noMainBgi
                                        // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Border & Shadow")}
                                        initialOpen={false}
                                    >
                                        <BorderShadowControl
                                            controlName={prefixWrapBdShadow}
                                            resRequiredProps={resRequiredProps}
                                        // noShadow
                                        // noBorder
                                        />
                                    </PanelBody>

                                    <AdvancedControls
                                        attributes={attributes}
                                        setAttributes={setAttributes}
                                    />
                                </>
                            )}
                        </div>
                    )}
                </TabPanel>
            </div>
        </InspectorControls>
    );
}
export default Inspector;
