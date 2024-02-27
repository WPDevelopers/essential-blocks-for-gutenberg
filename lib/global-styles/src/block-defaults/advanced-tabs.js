/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    // TextControl,
    Button,
    RangeControl,
    BaseControl,
    ButtonGroup,
    TabPanel,
} from "@wordpress/components";

const {
    BackgroundControl,
    BorderShadowControl,
    ColorControl,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    TypographyDropdown,
} = window.EBControls;

import {
    prefixWrapBg,
    prefixTitleBg,
    prefixActTitleBg,
    prefixContentBg,
    prefixTtlWrpBg,
} from "../../../../blocks/advanced-tabs/src/constants/backgroundsConstants";

import {
    prefixWrapBdShadow,
    prefixTitleBdShadow,
    prefixActTitleBdShadow,
    prefixContentBdShadow,
    prefixTtlWrpBdShadow,
} from "../../../../blocks/advanced-tabs/src/constants/borderShadowConstants";

import {
    prefixWrapperMargin,
    prefixWrapperPadding,
    prefixTitlePadding,
    prefixTitleMargin,
    prefixContentMargin,
    prefixContentPadding,
    prefixTtlWrpMargin,
    prefixTtlWrpPadding,
} from "../../../../blocks/advanced-tabs/src/constants/dimensionsConstants";

import {
    prefixTitleMinWidth,
    prefixIconSize,
    prefixIconGap,
    prefixCaretSize,
} from "../../../../blocks/advanced-tabs/src/constants/rangeNames";

import objAttributes from "../../../../blocks/advanced-tabs/src/attributes";

import {
    //
    typoPrefixTabTitle,
} from "../../../../blocks/advanced-tabs/src/constants/typographyPrefixConstants";

import {
    LAYOUT_TYPES,
    MEDIA_TYPES,
    ICON_IMAGE_BG_TYPES,
    sizeUnitTypes,
    HEADER_TAGS,
    CONTENTS_ALIGNMENTS,
    MEDIA_ALIGNMENTS_ON_FLEX_COLUMN,
    MEDIA_ALIGNMENTS_ON_FLEX_ROW,
    HOVER_EFFECT,
    imgHeightUnits,
} from "../../../../blocks/advanced-tabs/src/constants";

function AdvancedTabs(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        isMediaOn,
        layout,
        mediaPositon,
        mediaAlign,
        textColor,
        iconColor,
        hvTextColor,
        hvIconColor,
        actTextColor,
        actIconColor,
        actHvTextColor,
        actHvIconColor,
        colorTransition,
        actColorTransition,
        showCaret,
        caretColor,
        isFillTitle,
    } = defaultValues;

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
                align: "wide",
                layout: "horizontal",
                mediaPositon: "inline",
                mediaAlign: "left",
                tabTitles: [
                    {
                        text: "Tab Title 1",
                        id: "1",
                        media: "icon",
                        icon: "fas fa-home",
                        image: "",
                        isExpanded: true,
                        isDefault: true,
                    },
                    {
                        text: "Tab Title 2",
                        id: "2",
                        media: "icon",
                        icon: "fas fa-home",
                        image: "",
                        isExpanded: false,
                        isDefault: false,
                    },
                    {
                        text: "Tab Title 3",
                        id: "3",
                        media: "icon",
                        icon: "fas fa-home",
                        image: "",
                        isExpanded: false,
                        isDefault: false,
                    },
                ],
                tabChildCount: 3,
                isMediaOn: true,
                isFillTitle: true,
                textColor: "var(--eb-global-heading-color)",
                iconColor: "var(--eb-global-heading-color)",
                actTextColor: "var(--eb-global-background-color)",
                actIconColor: "var(--eb-global-background-color)",
                actColorTransition: "number",
                showCaret: true,
                caretColor: "var(--eb-global-primary-color)",
                [`${prefixTitleMinWidth}Unit`]: "px",
                [`${prefixTitlePadding}Unit`]: "px",
                [`${prefixTitlePadding}isLinked`]: true,
                [`${prefixTitleMargin}Unit`]: "px",
                [`${prefixTitleMargin}isLinked`]: true,
                [`${prefixTitleBdShadow}Bdr_Unit`]: "px",
                [`${prefixTitleBdShadow}Bdr_isLinked`]: true,
                [`${prefixTitleBdShadow}Rds_Unit`]: "px",
                [`${prefixTitleBdShadow}Rds_isLinked`]: true,
                [`${prefixTitleBdShadow}BorderType`]: "normal",
                [`${prefixTitleBdShadow}shadowType`]: "normal",
                [`${prefixActTitleBdShadow}Bdr_Unit`]: "px",
                [`${prefixActTitleBdShadow}Bdr_isLinked`]: true,
                [`${prefixActTitleBdShadow}Rds_Unit`]: "px",
                [`${prefixActTitleBdShadow}Rds_isLinked`]: true,
                [`${prefixActTitleBdShadow}BorderType`]: "normal",
                [`${prefixActTitleBdShadow}shadowType`]: "normal",
                [`${prefixTitlePadding}isLinked`]: true,
                [`${prefixTitleMargin}Unit`]: "px",
                [`${prefixTtlWrpMargin}Unit`]: "px",
                [`${prefixTtlWrpMargin}isLinked`]: true,
                [`${prefixTtlWrpPadding}Unit`]: "px",
                [`${prefixTtlWrpPadding}isLinked`]: true,
                [`${prefixTtlWrpBdShadow}Bdr_Unit`]: "px",
                [`${prefixTtlWrpBdShadow}Bdr_isLinked`]: true,
                [`${prefixTtlWrpBdShadow}Rds_Unit`]: "px",
                [`${prefixTtlWrpBdShadow}Rds_isLinked`]: true,
                [`${prefixTtlWrpBdShadow}BorderType`]: "normal",
                [`${prefixTtlWrpBdShadow}shadowType`]: "normal",
                [`${prefixContentMargin}Unit`]: "px",
                [`${prefixContentMargin}isLinked`]: true,
                [`${prefixContentPadding}Unit`]: "px",
                [`${prefixContentPadding}isLinked`]: true,
                [`${prefixContentBdShadow}Bdr_Unit`]: "px",
                [`${prefixContentBdShadow}Bdr_isLinked`]: true,
                [`${prefixContentBdShadow}Rds_Unit`]: "px",
                [`${prefixContentBdShadow}Rds_isLinked`]: true,
                [`${prefixContentBdShadow}BorderType`]: "normal",
                [`${prefixContentBdShadow}shadowType`]: "normal",
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
                        title={__("Tabs Settings", "essential-blocks")}
                    // initialOpen={false}
                    >
                        <SelectControl
                            label={__("Tabs Layout", "essential-blocks")}
                            value={layout}
                            options={[
                                {
                                    label: __("Horizontal", "essential-blocks"),
                                    value: "horizontal",
                                },
                                {
                                    label: __("Vertical", "essential-blocks"),
                                    value: "vertical",
                                },
                            ]}
                            onChange={(layout) => handleBlockDefault({ layout: layout })}
                        />

                        {layout === "horizontal" && (
                            <>
                                <ToggleControl
                                    label={__("Fill Titles' Wrapper", "essential-blocks")}
                                    checked={isFillTitle}
                                    onChange={() =>
                                        handleBlockDefault({
                                            isFillTitle: !isFillTitle,
                                        })
                                    }
                                />
                            </>
                        )}

                        <ToggleControl
                            label={__("Enable Icon", "essential-blocks")}
                            checked={isMediaOn}
                            onChange={() => handleBlockDefault({ isMediaOn: !isMediaOn })}
                        />
                        {isMediaOn && (
                            <>
                                <SelectControl
                                    label={__("Icon Layout", "essential-blocks")}
                                    value={mediaPositon}
                                    options={[
                                        {
                                            label: __("Stacked", "essential-blocks"),
                                            value: "stacked",
                                        },
                                        {
                                            label: __("Inline", "essential-blocks"),
                                            value: "inline",
                                        },
                                    ]}
                                    onChange={(mediaPositon) => handleBlockDefault({ mediaPositon })}
                                />
                                {mediaPositon === "inline" && (
                                    <>
                                        <ButtonGroup id="eb-advTabs-type-btgrp">
                                            {[
                                                {
                                                    label: __("Left", "essential-blocks"),
                                                    value: "left",
                                                },
                                                {
                                                    label: __("Right", "essential-blocks"),
                                                    value: "right",
                                                },
                                            ].map((item, index) => (
                                                <Button
                                                    key={index}
                                                    // isLarge
                                                    isSecondary={mediaAlign !== item.value}
                                                    isPrimary={mediaAlign === item.value}
                                                    onClick={() =>
                                                        handleBlockDefault({
                                                            mediaAlign: item.value,
                                                        })
                                                    }
                                                >
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>

                                        <label style={{ display: "block" }}>
                                            <i>Set icon position before/after the tab title.</i>
                                        </label>
                                    </>
                                )}
                            </>
                        )}
                    </PanelBody>
                    <PanelBody title={__("Tab Title Style", "essential-blocks")} initialOpen={false}>
                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefixTabTitle}
                            resRequiredProps={resRequiredProps}
                        />

                        <ResponsiveRangeController
                            baseLabel={__("Title Min Width", "essential-blocks")}
                            controlName={prefixTitleMinWidth}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={1000}
                            step={1}
                            units={[
                                { label: "px", value: "px" },
                                { label: "em", value: "em" },
                                { label: "%", value: "%" },
                            ]}
                        />

                        <ResponsiveRangeController
                            baseLabel={__("Icon Size", "essential-blocks")}
                            controlName={prefixIconSize}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={200}
                            step={1}
                            noUnits
                        />

                        <ResponsiveRangeController
                            baseLabel={__("Icon Gap", "essential-blocks")}
                            controlName={prefixIconGap}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={200}
                            step={1}
                            noUnits
                        />

                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={prefixTitlePadding}
                            baseLabel="Padding"
                        />

                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={prefixTitleMargin}
                            baseLabel="Margin"
                        />

                        <PanelBody title={__("Colors", "essential-blocks")} initialOpen={false}>
                            <BaseControl>
                                <ButtonGroup>
                                    {[
                                        {
                                            label: __("Normal", "essential-blocks"),
                                            value: "normal",
                                        },
                                        {
                                            label: __("Hover", "essential-blocks"),
                                            value: "hover",
                                        },
                                    ].map(({ value, label }, index) => (
                                        <Button
                                            key={index}
                                            // isLarge
                                            isPrimary={colorSwitcher === value}
                                            isSecondary={colorSwitcher !== value}
                                            onClick={() => setColorSwitcher(value)}
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
                                        defaultColor={objAttributes.textColor.default}
                                        color={textColor}
                                        onChange={(textColor) => handleBlockDefault({ textColor })}
                                    />

                                    <ColorControl
                                        label={__("Icon", "essential-blocks")}
                                        defaultColor={objAttributes.iconColor.default}
                                        color={iconColor}
                                        onChange={(iconColor) => handleBlockDefault({ iconColor })}
                                    />
                                </>
                            )}

                            {colorSwitcher === "hover" && (
                                <>
                                    <ColorControl
                                        label={__("Text", "essential-blocks")}
                                        defaultColor={objAttributes.hvTextColor.default}
                                        color={hvTextColor}
                                        onChange={(hvTextColor) => handleBlockDefault({ hvTextColor })}
                                    />

                                    <ColorControl
                                        label={__("Icon", "essential-blocks")}
                                        defaultColor={objAttributes.hvIconColor.default}
                                        color={hvIconColor}
                                        onChange={(hvIconColor) => handleBlockDefault({ hvIconColor })}
                                    />

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

                        <PanelBody title={__("Background", "essential-blocks")} initialOpen={false}>
                            <BackgroundControl
                                controlName={prefixTitleBg}
                                resRequiredProps={resRequiredProps}
                                noOverlay
                            // noMainBgi
                            // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'
                            />
                        </PanelBody>

                        <PanelBody title={__("Border & Shadow")} initialOpen={false}>
                            <BorderShadowControl
                                controlName={prefixTitleBdShadow}
                                resRequiredProps={resRequiredProps}
                            // noShadow
                            // noBorder
                            />
                        </PanelBody>

                        <PanelBody title={__("Active Colors", "essential-blocks")} initialOpen={false}>
                            <BaseControl>
                                <ButtonGroup>
                                    {[
                                        {
                                            label: __("Normal", "essential-blocks"),
                                            value: "normal",
                                        },
                                        {
                                            label: __("Hover", "essential-blocks"),
                                            value: "hover",
                                        },
                                    ].map(({ value, label }, index) => (
                                        <Button
                                            key={index}
                                            // isSmall
                                            // isLarge
                                            isPrimary={activeColorSwitcher === value}
                                            isSecondary={activeColorSwitcher !== value}
                                            onClick={() => setActiveColorSwitcher(value)}
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
                                        defaultColor={objAttributes.actTextColor.default}
                                        color={actTextColor}
                                        onChange={(actTextColor) => handleBlockDefault({ actTextColor })}
                                    />

                                    <ColorControl
                                        label={__("Icon", "essential-blocks")}
                                        defaultColor={objAttributes.actIconColor.default}
                                        color={actIconColor}
                                        onChange={(actIconColor) => handleBlockDefault({ actIconColor })}
                                    />
                                </>
                            )}

                            {activeColorSwitcher === "hover" && (
                                <>
                                    <ColorControl
                                        label={__("Text", "essential-blocks")}
                                        defaultColor={objAttributes.actHvTextColor.default}
                                        color={actHvTextColor}
                                        onChange={(actHvTextColor) =>
                                            handleBlockDefault({
                                                actHvTextColor,
                                            })
                                        }
                                    />

                                    <ColorControl
                                        label={__("Icon", "essential-blocks")}
                                        defaultColor={objAttributes.actHvIconColor.default}
                                        color={actHvIconColor}
                                        onChange={(actHvIconColor) =>
                                            handleBlockDefault({
                                                actHvIconColor,
                                            })
                                        }
                                    />

                                    <BaseControl label={__("Transition", "essential-blocks")}>
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

                        <PanelBody title={__("Active Background", "essential-blocks")} initialOpen={false}>
                            <BackgroundControl
                                controlName={prefixActTitleBg}
                                resRequiredProps={resRequiredProps}
                                noOverlay
                            // noMainBgi
                            // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'
                            />
                        </PanelBody>

                        <PanelBody title={__("Active Border & Shadow")} initialOpen={false}>
                            <BorderShadowControl
                                controlName={prefixActTitleBdShadow}
                                resRequiredProps={resRequiredProps}
                            // noShadow
                            // noBorder
                            />
                        </PanelBody>
                    </PanelBody>
                    <PanelBody title={__("Tab Titles' Wrapper Style", "essential-blocks")} initialOpen={false}>
                        <PanelBody title={__("Margin Padding", "essential-blocks")}>
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={prefixTtlWrpMargin}
                                baseLabel="Margin"
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={prefixTtlWrpPadding}
                                baseLabel="Padding"
                            />
                        </PanelBody>

                        <PanelBody title={__("Background", "essential-blocks")} initialOpen={false}>
                            <BackgroundControl
                                controlName={prefixTtlWrpBg}
                                resRequiredProps={resRequiredProps}
                                noOverlay
                            // noMainBgi
                            // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'
                            />
                        </PanelBody>

                        <PanelBody title={__("Border & Shadow")} initialOpen={false}>
                            <BorderShadowControl
                                controlName={prefixTtlWrpBdShadow}
                                resRequiredProps={resRequiredProps}
                            // noShadow
                            // noBorder
                            />
                        </PanelBody>
                    </PanelBody>
                    <PanelBody title={__("Content Style")} initialOpen={false}>
                        <PanelBody title={__("Margin Padding", "essential-blocks")}>
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={prefixContentMargin}
                                baseLabel="Margin"
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={prefixContentPadding}
                                baseLabel="Padding"
                            />
                        </PanelBody>

                        <PanelBody title={__("Background", "essential-blocks")} initialOpen={false}>
                            <BackgroundControl
                                controlName={prefixContentBg}
                                resRequiredProps={resRequiredProps}
                                noOverlay
                            // noMainBgi
                            // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'
                            />
                        </PanelBody>

                        <PanelBody title={__("Border & Shadow")} initialOpen={false}>
                            <BorderShadowControl
                                controlName={prefixContentBdShadow}
                                resRequiredProps={resRequiredProps}
                            // noShadow
                            // noBorder
                            />
                        </PanelBody>
                    </PanelBody>
                    <PanelBody title={__("Caret Style", "essential-blocks")} initialOpen={false}>
                        <ToggleControl
                            label={__("Show Caret on Active Tab", "essential-blocks")}
                            checked={showCaret}
                            onChange={() => handleBlockDefault({ showCaret: !showCaret })}
                        />

                        {showCaret && (
                            <>
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
                                    onChange={(caretColor) => handleBlockDefault({ caretColor })}
                                />
                            </>
                        )}
                    </PanelBody>
                    <PanelBody title={__("Wrapper Margin & Padding", "essential-blocks")} initialOpen={false}>
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

                    <PanelBody title={__("Wrapper Background", "essential-blocks")} initialOpen={false}>
                        <BackgroundControl
                            controlName={prefixWrapBg}
                            resRequiredProps={resRequiredProps}
                        // noOverlay
                        // noMainBgi
                        // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'
                        />
                    </PanelBody>

                    <PanelBody title={__("Wrapper Border & Shadow")} initialOpen={false}>
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

export default AdvancedTabs;
