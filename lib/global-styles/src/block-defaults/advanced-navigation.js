/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
    PanelBody,
    ToggleControl,
    Button,
    RangeControl,
    BaseControl,
    ButtonGroup,
    PanelRow,
    __experimentalDivider as Divider,
} from "@wordpress/components";

/**
 * External depencencies
 */

const {
    BackgroundControl,
    BorderShadowControl,
    ColorControl,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    TypographyDropdown,
} = window.EBControls;

/**
 * Internal depencencies
 */
import {
    NAV_POSITION,
    NAV_V_POSITION,
    NAV_RESPONSIVE_BTN,
    HAMBURGER_SCREEN,
    CLOSE_ICON_ALIGN,
} from "../../../../blocks/advanced-navigation/src/constants";

import {
    typoPrefixNav,
    typoPrefixNavDropdown,
    typoPrefixNavHamburger,
    typoPrefixHamburgerBtn,
} from "../../../../blocks/advanced-navigation/src/constants/typographyPrefixConstants";

import { prefixWrapBg } from "../../../../blocks/advanced-navigation/src/constants/backgroundsConstants";

import {
    prefixWrapBdShadow,
    prefixNavBdShadow,
    prefixNavDropdownBdShadow,
    prefixDropdownItemBdShadow,
    prefixHamburgerItemBdShadow,
} from "../../../../blocks/advanced-navigation/src/constants/borderShadowConstants";

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
    prefixNavDropdownMargin,
} from "../../../../blocks/advanced-navigation/src/constants/dimensionsConstants";

import {
    prefixCaretSize,
    prefixDropdownWidth,
    prefixHamburerBtnSize,
} from "../../../../blocks/advanced-navigation/src/constants/rangeNames";

import objAttributes from "../../../../blocks/advanced-navigation/src/attributes";

function AdvancedNavigation(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
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
    } = defaultValues;

    //
    const [colorSwitcher, setColorSwitcher] = useState("normal");
    const [activeColorSwitcher, setActiveColorSwitcher] = useState("normal");

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                layout: "is-horizontal",
                preset: "preset-1",
                verticalPreset: "vertical-preset-1",
                navAlign: "items-justified-left",
                dropdownOpenOnClick: false,
                showDropdownIcon: true,
                navBtnType: true,
                navTextColor: "#6A72A5",
                hvNavTextColor: "#2673FF",
                actNavTextColor: "#2673FF",
                actHvNavTextColor: "#2673FF",
                navBgColor: "#ffffff",
                hvNavBgColor: "#2673FF",
                actNavBgColor: "#2673FF",
                actHvNavBgColor: "#2673FF",
                iconColor: "#555555",
                hvIconColor: "",
                actIconColor: "#ffffff",
                actHvIconColor: "",
                colorTransition: "number",
                actColorTransition: "number",
                navDropdownTextColor: "#6A72A5",
                hvNavDropdownTextColor: "#2673FF",
                actNavDropdownTextColor: "#2673FF",
                actHvNavDropdownTextColor: "#2673FF",
                navDropdownBgColor: "#ffffff",
                hvNavDropdownBgColor: "#555555",
                actNavDropdownBgColor: "#555555",
                actHvNavDropdownBgColor: "#555555",
                dropdownItemBgColor: "#ffffff",
                hvDropdownItemBgColor: "#ffffff",
                actDropdownItemBgColor: "#ffffff",
                actHvDropdownItemBgColor: "#ffffff",
                actColorTransition: "number",
                navDividerColor: "#d9d9d9",
                verticalNavDividerColor: "#d9d9d9",
                navDropdownDividerColor: "#d9d9d9",
                navHamburgerBgColor: "#2673FF",
                navHamburgerTextColor: "#ffffff",
                hvNavHamburgerTextColor: "#ffffff",
                hamburgerItemBgColor: "#0059FC",
                hvHamburgerItemBgColor: "#0059FC",
                actNavHamburgerTextColor: "#ffffff",
                actHamburgerItemBgColor: "#ffffff",
                actHvNavHamburgerTextColor: "#ffffff",
                actHvHamburgerItemBgColor: "#ffffff",
                hamburgerCloseIconColor: "#ffffff",
                navHamburgerBtnColor: "#2673FF",
                flexWrap: false,
                hamburgerMenu: "mobile",
                navVerticalAlign: "items-justified-left",
                showCaret: true,
                caretColor: "#6A72A5",
                hvCaretColor: "#2673FF",
                hamburgerCloseIconAlign: "close-icon-right",

                [`${prefixNavPadding}Top`]: 20,
                [`${prefixNavPadding}Bottom`]: 20,
                [`${prefixNavPadding}Right`]: 10,
                [`${prefixNavPadding}Left`]: 10,
                [`${prefixNavPadding}Unit`]: "px",
                [`${prefixNavPadding}isLinked`]: true,

                [`${prefixNavMargin}Unit`]: "px",
                [`${prefixNavMargin}isLinked`]: true,

                [`${prefixNavDropdownPadding}Top`]: 5,
                [`${prefixNavDropdownPadding}Bottom`]: 5,
                [`${prefixNavDropdownPadding}Right`]: 5,
                [`${prefixNavDropdownPadding}Left`]: 5,
                [`${prefixNavDropdownPadding}Unit`]: "px",
                [`${prefixNavDropdownPadding}isLinked`]: false,

                [`${prefixDropdownItemPadding}Top`]: 10,
                [`${prefixDropdownItemPadding}Bottom`]: 10,
                [`${prefixDropdownItemPadding}Right`]: 10,
                [`${prefixDropdownItemPadding}Left`]: 10,
                [`${prefixDropdownItemPadding}Unit`]: "px",
                [`${prefixDropdownItemPadding}isLinked`]: false,

                [`${prefixNavDropdownMargin}Unit`]: "px",
                [`${prefixNavDropdownMargin}isLinked`]: true,

                [`${prefixNavHamburgerPadding}Top`]: 5,
                [`${prefixNavHamburgerPadding}Bottom`]: 5,
                [`${prefixNavHamburgerPadding}Right`]: 5,
                [`${prefixNavHamburgerPadding}Left`]: 5,
                [`${prefixNavHamburgerPadding}Unit`]: "px",
                [`${prefixNavHamburgerPadding}isLinked`]: false,

                [`${prefixHamburgerItemPadding}Top`]: 5,
                [`${prefixHamburgerItemPadding}Bottom`]: 5,
                [`${prefixHamburgerItemPadding}Right`]: 5,
                [`${prefixHamburgerItemPadding}Left`]: 5,
                [`${prefixHamburgerItemPadding}Unit`]: "px",
                [`${prefixHamburgerItemPadding}isLinked`]: true,

                [`${prefixHamburgerBtnPadding}Top`]: 10,
                [`${prefixHamburgerBtnPadding}Bottom`]: 10,
                [`${prefixHamburgerBtnPadding}Right`]: 10,
                [`${prefixHamburgerBtnPadding}Left`]: 10,
                [`${prefixHamburgerBtnPadding}Unit`]: "px",
                [`${prefixHamburgerBtnPadding}isLinked`]: false,

                [`${prefixNavDropdownMargin}Unit`]: "px",
                [`${prefixNavDropdownMargin}isLinked`]: true,

                [`${prefixWrapperMargin}Unit`]: "px",
                [`${prefixWrapperMargin}isLinked`]: true,

                [`${prefixWrapperPadding}Unit`]: "px",
                [`${prefixWrapperPadding}isLinked`]: true,

                [`${prefixWrapBdShadow}Bdr_Unit`]: "px",
                [`${prefixWrapBdShadow}Bdr_isLinked`]: true,
                [`${prefixWrapBdShadow}Rds_Unit`]: "px",
                [`${prefixWrapBdShadow}Rds_isLinked`]: true,
                [`${prefixWrapBdShadow}BorderType`]: "normal",
                [`${prefixWrapBdShadow}shadowType`]: "normal",
            });
        }
        setDefaultSet(true);
    }, []);

    /**
     * On change default value, set to block default
     */
    useEffect(() => {
        setBlockDefaults({
            [name]: defaultValues,
        });
    }, [defaultValues]);

    /**
     * handleBlockDefault
     * @param {*} obj
     */
    const handleBlockDefault = (obj) => {
        let values = { ...defaultValues };
        Object.keys(obj).map((item) => {
            values[item] = obj[item];
        });
        setDefaultValues(values);
    };

    /**
     * resRequiredProps
     */
    const resRequiredProps = {
        setAttributes: handleBlockDefault,
        resOption: deviceType,
        attributes: defaultValues,
        objAttributes,
    };

    return (
        <>
            {isDefaultSet && (
                <div className="eb-panel-control">
                    <PanelBody
                        title={__("General", "essential-blocks")}
                        // initialOpen={false}
                    >
                        <PanelRow>{__("Layout", "essential-blocks")}</PanelRow>

                        {layout == "is-horizontal" && (
                            <>
                                <ToggleControl
                                    label={__(
                                        "Allow to wrap to multiple lines",
                                        "essential-blocks"
                                    )}
                                    checked={flexWrap}
                                    onChange={(flexWrap) =>
                                        handleBlockDefault({ flexWrap })
                                    }
                                />

                                <BaseControl
                                    label={__("Alignment", "essential-blocks")}
                                >
                                    <ButtonGroup id="eb-button-group-alignment">
                                        {NAV_POSITION.map((item, index) => (
                                            <Button
                                                key={index}
                                                isPrimary={
                                                    navAlign === item.value
                                                }
                                                isSecondary={
                                                    navAlign !== item.value
                                                }
                                                onClick={() =>
                                                    handleBlockDefault({
                                                        navAlign: item.value,
                                                    })
                                                }
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>
                            </>
                        )}

                        {layout == "is-vertical" && (
                            <>
                                <BaseControl
                                    label={__("Alignment", "essential-blocks")}
                                >
                                    <ButtonGroup id="eb-button-group-alignment">
                                        {NAV_V_POSITION.map((item, index) => (
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
                                                    handleBlockDefault({
                                                        navVerticalAlign:
                                                            item.value,
                                                    })
                                                }
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>
                            </>
                        )}

                        <Divider />

                        <PanelRow>
                            {__("Dropdown Menus", "essential-blocks")}
                        </PanelRow>
                        <ToggleControl
                            label={__("Open on Click", "essential-blocks")}
                            checked={dropdownOpenOnClick}
                            onChange={(dropdownOpenOnClick) =>
                                handleBlockDefault({ dropdownOpenOnClick })
                            }
                        />
                        <ToggleControl
                            label={__(
                                "Show Dropdown Menu Icon?",
                                "essential-blocks"
                            )}
                            checked={showDropdownIcon}
                            onChange={(showDropdownIcon) =>
                                handleBlockDefault({ showDropdownIcon })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Hamburger Menu", "essential-blocks")}
                        // initialOpen={false}
                    >
                        <BaseControl
                            label={__("Button Type", "essential-blocks")}
                        >
                            <ButtonGroup id="eb-button-group-alignment">
                                {NAV_RESPONSIVE_BTN.map((item, index) => (
                                    <Button
                                        key={index}
                                        isPrimary={navBtnType === item.value}
                                        isSecondary={navBtnType !== item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                navBtnType: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>

                        <BaseControl
                            label={__(
                                "Display Hamburger Menu",
                                "essential-blocks"
                            )}
                        >
                            <ButtonGroup id="eb-button-group-alignment">
                                {HAMBURGER_SCREEN.map((item, index) => (
                                    <Button
                                        key={index}
                                        isPrimary={hamburgerMenu === item.value}
                                        isSecondary={
                                            hamburgerMenu !== item.value
                                        }
                                        onClick={() =>
                                            handleBlockDefault({
                                                hamburgerMenu: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                    </PanelBody>
                    {/* Styles */}
                    <PanelBody
                        title={__("Navigation Styles", "essential-blocks")}
                        initialOpen={false}
                    >
                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefixNav}
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

                        {layout == "is-horizontal" && preset == "preset-4" && (
                            <ColorControl
                                label={__("Divider Color", "essential-blocks")}
                                defaultColor={
                                    objAttributes.navDividerColor.default
                                }
                                color={navDividerColor}
                                onChange={(navDividerColor) =>
                                    handleBlockDefault({ navDividerColor })
                                }
                            />
                        )}

                        {layout == "is-vertical" && preset == "preset-1" && (
                            <ColorControl
                                label={__("Divider Color", "essential-blocks")}
                                defaultColor={
                                    objAttributes.verticalNavDividerColor
                                        .default
                                }
                                color={verticalNavDividerColor}
                                onChange={(verticalNavDividerColor) =>
                                    handleBlockDefault({
                                        verticalNavDividerColor,
                                    })
                                }
                            />
                        )}

                        <PanelBody
                            title={__("Colors", "essential-blocks")}
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
                                    ].map(({ value, label }, index) => (
                                        <Button
                                            key={index}
                                            // isLarge
                                            isPrimary={colorSwitcher === value}
                                            isSecondary={
                                                colorSwitcher !== value
                                            }
                                            onClick={() =>
                                                setColorSwitcher(value)
                                            }
                                        >
                                            {label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>

                            {colorSwitcher === "normal" && (
                                <>
                                    <ColorControl
                                        label={__("Text", "essential-blocks")}
                                        defaultColor={
                                            objAttributes.navTextColor.default
                                        }
                                        color={navTextColor}
                                        onChange={(navTextColor) =>
                                            handleBlockDefault({ navTextColor })
                                        }
                                    />

                                    {/* {preset == "preset-2" && (
														<ColorControl
															label={__("Background", "essential-blocks")}
															defaultColor={objAttributes.navBgColor.default}
															color={navBgColor}
															onChange={(navBgColor) =>
																handleBlockDefault({ navBgColor })
															}
														/>
													)} */}
                                </>
                            )}

                            {colorSwitcher === "hover" && (
                                <>
                                    <ColorControl
                                        label={__("Text", "essential-blocks")}
                                        defaultColor={
                                            objAttributes.hvNavTextColor.default
                                        }
                                        color={hvNavTextColor}
                                        onChange={(hvNavTextColor) =>
                                            handleBlockDefault({
                                                hvNavTextColor,
                                            })
                                        }
                                    />
                                    {layout == "is-horizontal" &&
                                        (preset == "preset-2" ||
                                            preset == "preset-3") && (
                                            <ColorControl
                                                label={__(
                                                    "Background",
                                                    "essential-blocks"
                                                )}
                                                defaultColor={
                                                    objAttributes.hvNavBgColor
                                                        .default
                                                }
                                                color={hvNavBgColor}
                                                onChange={(hvNavBgColor) =>
                                                    handleBlockDefault({
                                                        hvNavBgColor,
                                                    })
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
                                                    objAttributes.hvNavBgColor
                                                        .default
                                                }
                                                color={hvNavBgColor}
                                                onChange={(hvNavBgColor) =>
                                                    handleBlockDefault({
                                                        hvNavBgColor,
                                                    })
                                                }
                                            />
                                        )}
                                </>
                            )}
                        </PanelBody>

                        <PanelBody
                            title={__("Active Colors", "essential-blocks")}
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
                                    ].map(({ value, label }, index) => (
                                        <Button
                                            key={index}
                                            // isSmall
                                            // isLarge
                                            isPrimary={
                                                activeColorSwitcher === value
                                            }
                                            isSecondary={
                                                activeColorSwitcher !== value
                                            }
                                            onClick={() =>
                                                setActiveColorSwitcher(value)
                                            }
                                        >
                                            {label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>

                            {activeColorSwitcher === "normal" && (
                                <>
                                    <ColorControl
                                        label={__("Text", "essential-blocks")}
                                        defaultColor={
                                            objAttributes.actNavTextColor
                                                .default
                                        }
                                        color={actNavTextColor}
                                        onChange={(actNavTextColor) =>
                                            handleBlockDefault({
                                                actNavTextColor,
                                            })
                                        }
                                    />

                                    {layout == "is-horizontal" &&
                                        (preset == "preset-2" ||
                                            preset == "preset-3") && (
                                            <ColorControl
                                                label={__(
                                                    "Background",
                                                    "essential-blocks"
                                                )}
                                                defaultColor={
                                                    objAttributes.actNavBgColor
                                                        .default
                                                }
                                                color={actNavBgColor}
                                                onChange={(actNavBgColor) =>
                                                    handleBlockDefault({
                                                        actNavBgColor,
                                                    })
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
                                                    objAttributes.actNavBgColor
                                                        .default
                                                }
                                                color={actNavBgColor}
                                                onChange={(actNavBgColor) =>
                                                    handleBlockDefault({
                                                        actNavBgColor,
                                                    })
                                                }
                                            />
                                        )}
                                </>
                            )}

                            {activeColorSwitcher === "hover" && (
                                <>
                                    <ColorControl
                                        label={__("Text", "essential-blocks")}
                                        defaultColor={
                                            objAttributes.actHvNavTextColor
                                                .default
                                        }
                                        color={actHvNavTextColor}
                                        onChange={(actHvNavTextColor) =>
                                            handleBlockDefault({
                                                actHvNavTextColor,
                                            })
                                        }
                                    />

                                    {layout == "is-horizontal" &&
                                        (preset == "preset-2" ||
                                            preset == "preset-3") && (
                                            <ColorControl
                                                label={__(
                                                    "Backgound",
                                                    "essential-blocks"
                                                )}
                                                defaultColor={
                                                    objAttributes
                                                        .actHvNavBgColor.default
                                                }
                                                color={actHvNavBgColor}
                                                onChange={(actHvNavBgColor) =>
                                                    handleBlockDefault({
                                                        actHvNavBgColor,
                                                    })
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
                                                        .actHvNavBgColor.default
                                                }
                                                color={actHvNavBgColor}
                                                onChange={(actHvNavBgColor) =>
                                                    handleBlockDefault({
                                                        actHvNavBgColor,
                                                    })
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
                                            value={actColorTransition}
                                            onChange={(actColorTransition) =>
                                                handleBlockDefault({
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
                                title={__("Active & Hover Border")}
                                initialOpen={false}
                            >
                                <BorderShadowControl
                                    controlName={prefixNavBdShadow}
                                    resRequiredProps={resRequiredProps}
                                    noShadow
                                    noBdrHover
                                    // noBorder
                                />
                            </PanelBody>
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Dropdown Menu Styles", "essential-blocks")}
                        initialOpen={false}
                    >
                        <PanelRow>
                            {__("Container", "essential-blocks")}
                        </PanelRow>
                        <ResponsiveRangeController
                            baseLabel={__("Min Width (PX)", "essential-blocks")}
                            controlName={prefixDropdownWidth}
                            resRequiredProps={resRequiredProps}
                            min={100}
                            max={500}
                            step={1}
                            noUnits
                        />
                        <ColorControl
                            label={__("Background", "essential-blocks")}
                            defaultColor={
                                objAttributes.navDropdownBgColor.default
                            }
                            color={navDropdownBgColor}
                            onChange={(navDropdownBgColor) =>
                                handleBlockDefault({ navDropdownBgColor })
                            }
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={prefixNavDropdownPadding}
                            baseLabel="Padding"
                        />

                        <PanelBody
                            title={__("Border & Shadow")}
                            initialOpen={false}
                        >
                            <BorderShadowControl
                                controlName={prefixNavDropdownBdShadow}
                                resRequiredProps={resRequiredProps}
                                noBdrHover

                                // noShadow
                                // noBorder
                            />
                        </PanelBody>

                        <Divider />
                        <PanelRow>{__("Items", "essential-blocks")}</PanelRow>
                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefixNavDropdown}
                            resRequiredProps={resRequiredProps}
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={prefixDropdownItemPadding}
                            baseLabel="Padding"
                        />
                        {preset == "preset-4" && (
                            <ColorControl
                                label={__("Divider Color", "essential-blocks")}
                                defaultColor={
                                    objAttributes.navDropdownDividerColor
                                        .default
                                }
                                color={navDropdownDividerColor}
                                onChange={(navDropdownDividerColor) =>
                                    handleBlockDefault({
                                        navDropdownDividerColor,
                                    })
                                }
                            />
                        )}
                        <PanelBody
                            title={__("Colors", "essential-blocks")}
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
                                    ].map(({ value, label }, index) => (
                                        <Button
                                            key={index}
                                            // isLarge
                                            isPrimary={colorSwitcher === value}
                                            isSecondary={
                                                colorSwitcher !== value
                                            }
                                            onClick={() =>
                                                setColorSwitcher(value)
                                            }
                                        >
                                            {label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>

                            {colorSwitcher === "normal" && (
                                <>
                                    <ColorControl
                                        label={__("Text", "essential-blocks")}
                                        defaultColor={
                                            objAttributes.navDropdownTextColor
                                                .default
                                        }
                                        color={navDropdownTextColor}
                                        onChange={(navDropdownTextColor) =>
                                            handleBlockDefault({
                                                navDropdownTextColor,
                                            })
                                        }
                                    />

                                    {(preset == "preset-2" ||
                                        preset == "preset-3") && (
                                        <ColorControl
                                            label={__(
                                                "Background",
                                                "essential-blocks"
                                            )}
                                            defaultColor={
                                                objAttributes
                                                    .dropdownItemBgColor.default
                                            }
                                            color={dropdownItemBgColor}
                                            onChange={(dropdownItemBgColor) =>
                                                handleBlockDefault({
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
                                        label={__("Text", "essential-blocks")}
                                        defaultColor={
                                            objAttributes.hvNavDropdownTextColor
                                                .default
                                        }
                                        color={hvNavDropdownTextColor}
                                        onChange={(hvNavDropdownTextColor) =>
                                            handleBlockDefault({
                                                hvNavDropdownTextColor,
                                            })
                                        }
                                    />

                                    {layout == "is-horizontal" &&
                                        (preset == "preset-2" ||
                                            preset == "preset-3") && (
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
                                                color={hvDropdownItemBgColor}
                                                onChange={(
                                                    hvDropdownItemBgColor
                                                ) =>
                                                    handleBlockDefault({
                                                        hvDropdownItemBgColor,
                                                    })
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
                                                color={hvDropdownItemBgColor}
                                                onChange={(
                                                    hvDropdownItemBgColor
                                                ) =>
                                                    handleBlockDefault({
                                                        hvDropdownItemBgColor,
                                                    })
                                                }
                                            />
                                        )}

                                    <RangeControl
                                        value={colorTransition}
                                        onChange={(colorTransition) =>
                                            handleBlockDefault({
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
                            title={__("Active Colors", "essential-blocks")}
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
                                    ].map(({ value, label }, index) => (
                                        <Button
                                            key={index}
                                            // isSmall
                                            // isLarge
                                            isPrimary={
                                                activeColorSwitcher === value
                                            }
                                            isSecondary={
                                                activeColorSwitcher !== value
                                            }
                                            onClick={() =>
                                                setActiveColorSwitcher(value)
                                            }
                                        >
                                            {label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>

                            {activeColorSwitcher === "normal" && (
                                <>
                                    <ColorControl
                                        label={__("Text", "essential-blocks")}
                                        defaultColor={
                                            objAttributes
                                                .actNavDropdownTextColor.default
                                        }
                                        color={actNavDropdownTextColor}
                                        onChange={(actNavDropdownTextColor) =>
                                            handleBlockDefault({
                                                actNavDropdownTextColor,
                                            })
                                        }
                                    />

                                    {(preset == "preset-2" ||
                                        preset == "preset-3") && (
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
                                            color={actDropdownItemBgColor}
                                            onChange={(
                                                actDropdownItemBgColor
                                            ) =>
                                                handleBlockDefault({
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
															handleBlockDefault({ actIconColor })
														}
													/> */}
                                </>
                            )}

                            {activeColorSwitcher === "hover" && (
                                <>
                                    <ColorControl
                                        label={__("Text", "essential-blocks")}
                                        defaultColor={
                                            objAttributes
                                                .actHvNavDropdownTextColor
                                                .default
                                        }
                                        color={actHvNavDropdownTextColor}
                                        onChange={(actHvNavDropdownTextColor) =>
                                            handleBlockDefault({
                                                actHvNavDropdownTextColor,
                                            })
                                        }
                                    />

                                    {(preset == "preset-2" ||
                                        preset == "preset-3") && (
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
                                            color={actHvDropdownItemBgColor}
                                            onChange={(
                                                actHvDropdownItemBgColor
                                            ) =>
                                                handleBlockDefault({
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
															handleBlockDefault({ actHvIconColor })
														}
													/> */}

                                    {/* <BaseControl
														label={__("Transition", "essential-blocks")}
													>
														<RangeControl
															value={actColorTransition}
															onChange={(actColorTransition) =>
																handleBlockDefault({
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
                                    controlName={prefixDropdownItemBdShadow}
                                    resRequiredProps={resRequiredProps}
                                    noShadow
                                    // noBorder
                                />
                            </PanelBody>
                        )}
                    </PanelBody>

                    {showDropdownIcon && (
                        <PanelBody
                            title={__("Caret Styles", "essential-blocks")}
                            initialOpen={false}
                        >
                            <ResponsiveRangeController
                                baseLabel={__("Caret Size", "essential-blocks")}
                                controlName={prefixCaretSize}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={100}
                                step={1}
                                noUnits
                            />

                            <ColorControl
                                label={__("Caret Color", "essential-blocks")}
                                defaultColor={objAttributes.caretColor.default}
                                color={caretColor}
                                onChange={(caretColor) =>
                                    handleBlockDefault({ caretColor })
                                }
                            />
                            <ColorControl
                                label={__(
                                    "Hover Caret Color",
                                    "essential-blocks"
                                )}
                                defaultColor={
                                    objAttributes.hvCaretColor.default
                                }
                                color={hvCaretColor}
                                onChange={(hvCaretColor) =>
                                    handleBlockDefault({ hvCaretColor })
                                }
                            />
                        </PanelBody>
                    )}

                    <PanelBody
                        title={__("Hamburger Menu Styles", "essential-blocks")}
                        initialOpen={false}
                    >
                        <PanelRow>{__("Button", "essential-blocks")}</PanelRow>

                        {navBtnType && (
                            <ResponsiveRangeController
                                baseLabel={__(
                                    "Icon Size(PX)",
                                    "essential-blocks"
                                )}
                                controlName={prefixHamburerBtnSize}
                                resRequiredProps={resRequiredProps}
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
                                resRequiredProps={resRequiredProps}
                            />
                        )}

                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            defaultColor={
                                objAttributes.navHamburgerBtnColor.default
                            }
                            color={navHamburgerBtnColor}
                            onChange={(navHamburgerBtnColor) =>
                                handleBlockDefault({ navHamburgerBtnColor })
                            }
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={prefixHamburgerBtnPadding}
                            baseLabel="Padding"
                        />

                        <PanelRow>
                            {__("Container", "essential-blocks")}
                        </PanelRow>

                        <ColorControl
                            label={__("Background", "essential-blocks")}
                            defaultColor={
                                objAttributes.navHamburgerBgColor.default
                            }
                            color={navHamburgerBgColor}
                            onChange={(navHamburgerBgColor) =>
                                handleBlockDefault({ navHamburgerBgColor })
                            }
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={prefixNavHamburgerPadding}
                            baseLabel="Padding"
                        />

                        <Divider />

                        <PanelRow>{__("Items", "essential-blocks")}</PanelRow>
                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefixNavHamburger}
                            resRequiredProps={resRequiredProps}
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={prefixHamburgerItemPadding}
                            baseLabel="Padding"
                        />
                        <PanelBody
                            title={__("Colors", "essential-blocks")}
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
                                    ].map(({ value, label }, index) => (
                                        <Button
                                            key={index}
                                            // isLarge
                                            isPrimary={colorSwitcher === value}
                                            isSecondary={
                                                colorSwitcher !== value
                                            }
                                            onClick={() =>
                                                setColorSwitcher(value)
                                            }
                                        >
                                            {label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>

                            {colorSwitcher === "normal" && (
                                <>
                                    <ColorControl
                                        label={__("Text", "essential-blocks")}
                                        defaultColor={
                                            objAttributes.navHamburgerTextColor
                                                .default
                                        }
                                        color={navHamburgerTextColor}
                                        onChange={(navHamburgerTextColor) =>
                                            handleBlockDefault({
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
                                            objAttributes.hamburgerItemBgColor
                                                .default
                                        }
                                        color={hamburgerItemBgColor}
                                        onChange={(hamburgerItemBgColor) =>
                                            handleBlockDefault({
                                                hamburgerItemBgColor,
                                            })
                                        }
                                    />
                                </>
                            )}

                            {colorSwitcher === "hover" && (
                                <>
                                    <ColorControl
                                        label={__("Text", "essential-blocks")}
                                        defaultColor={
                                            objAttributes
                                                .hvNavHamburgerTextColor.default
                                        }
                                        color={hvNavHamburgerTextColor}
                                        onChange={(hvNavHamburgerTextColor) =>
                                            handleBlockDefault({
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
                                            objAttributes.hvHamburgerItemBgColor
                                                .default
                                        }
                                        color={hvHamburgerItemBgColor}
                                        onChange={(hvHamburgerItemBgColor) =>
                                            handleBlockDefault({
                                                hvHamburgerItemBgColor,
                                            })
                                        }
                                    />

                                    {/* <RangeControl
														value={colorTransition}
														onChange={(colorTransition) =>
															handleBlockDefault({
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

                        <PanelBody title={__("Border")} initialOpen={false}>
                            <BorderShadowControl
                                controlName={prefixHamburgerItemBdShadow}
                                resRequiredProps={resRequiredProps}
                                noShadow
                                noBdrHover
                                // noBorder
                            />
                        </PanelBody>

                        <Divider />

                        <PanelRow>
                            {__("Close Icon", "essential-blocks")}
                        </PanelRow>
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            defaultColor={
                                objAttributes.hamburgerCloseIconColor.default
                            }
                            color={hamburgerCloseIconColor}
                            onChange={(hamburgerCloseIconColor) =>
                                handleBlockDefault({ hamburgerCloseIconColor })
                            }
                        />
                        <BaseControl
                            label={__("Alignment", "essential-blocks")}
                        >
                            <ButtonGroup id="eb-button-group-alignment">
                                {CLOSE_ICON_ALIGN.map((item, index) => (
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
                                            handleBlockDefault({
                                                hamburgerCloseIconAlign:
                                                    item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                    </PanelBody>

                    {/* Advanced */}
                    <PanelBody
                        title={__(
                            "Wrapper Margin & Padding",
                            "essential-blocks"
                        )}
                        initialOpen={false}
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
                        title={__("Wrapper Background", "essential-blocks")}
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
                        title={__("Wrapper Border & Shadow")}
                        initialOpen={false}
                    >
                        <BorderShadowControl
                            controlName={prefixWrapBdShadow}
                            resRequiredProps={resRequiredProps}
                            // noShadow
                            // noBorder
                        />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default AdvancedNavigation;
