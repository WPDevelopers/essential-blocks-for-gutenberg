/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    Button,
    ButtonGroup,
    BaseControl,
    TabPanel,
    PanelRow,
} from "@wordpress/components";

/**
 * Internal depencencies
 */

import objAttributes from "./attributes";

import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    IMAGE_WIDTH,
    IMAGE_HEIGHT,
    SIZE_UNIT_TYPES,
    IMAGE_BORDER_SHADOW,
    ATTRIBUTION_MARGIN,
    ATTRIBUTION_PADDING,
    ATTRIBUTION_TYPOGRAPHY,
    ATTRIBUTION_WIDTH,
    STYLES,
    TEXT_ALIGN,
    HORIZONTAL_ALIGN,
    UNIT_TYPES,
    ATTRIBUTION_STYLES,
    HOVER_EFFECT,
} from "./constants";

const {
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BorderShadowControl,
    ResponsiveRangeController,
    BackgroundControl,
    ColorControl,
    AdvancedControls,
} = window.EBControls;

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resOption,
        displayAttribution,
        attributionColor,
        textAlign,
        stylePreset,
        attributionStyle,
        hoverEffect,
        complexStyle,
        autoFit,
    } = attributes;

    const changeStyle = (selected) => {
        setAttributes({ stylePreset: selected });
        const complexLayouts = ["octagon", "rhombus", "triangle"];
        if (complexLayouts.includes(selected)) {
            setAttributes({
                complexStyle: true,
            });
        } else {
            setAttributes({
                complexStyle: false,
            });
        }

        //
        switch (selected) {
            case "rounded":
                setAttributes({
                    imgBorderShadowRds_Bottom: "15",
                    imgBorderShadowRds_Top: "15",
                    imgBorderShadowRds_Left: "15",
                    imgBorderShadowRds_Right: "15",
                    imgBorderShadowRds_Unit: "px",
                });
                break;
            case "square":
                setAttributes({
                    imgBorderShadowRds_Bottom: "0",
                    imgBorderShadowRds_Top: "0",
                    imgBorderShadowRds_Left: "0",
                    imgBorderShadowRds_Right: "0",
                    imgBorderShadowRds_Unit: "px",
                });
                break;
            case "circle":
                setAttributes({
                    imgBorderShadowRds_Bottom: "50",
                    imgBorderShadowRds_Top: "50",
                    imgBorderShadowRds_Left: "50",
                    imgBorderShadowRds_Right: "50",
                    imgBorderShadowRds_Unit: "%",
                });
                break;
            default:
                return false;
        }
    };

    const checkAttribution = (selected) => {
        if (selected) {
            setAttributes({
                displayAttribution: selected,

                wrpBorderShadowBdr_Bottom: "1",
                wrpBorderShadowBdr_Left: "1",
                wrpBorderShadowBdr_Right: "1",
                wrpBorderShadowBdr_Top: "1",
                wrpBorderShadowBdr_Unit: "px",
                wrpBorderShadowBdr_isLinked: true,
                wrpBorderShadowborderColor: "#C1CDE1",
                wrpBorderShadowborderStyle: "solid",
                wrpBorderShadowRds_Bottom: "15",
                wrpBorderShadowRds_Left: "15",
                wrpBorderShadowRds_Right: "15",
                wrpBorderShadowRds_Top: "15",
                wrpBorderShadowRds_Unit: "px",
                wrpBorderShadowRds_isLinked: true,
            });
        } else {
            setAttributes({
                displayAttribution: selected,

                wrpBorderShadowBdr_Bottom: "0",
                wrpBorderShadowBdr_Left: "0",
                wrpBorderShadowBdr_Right: "0",
                wrpBorderShadowBdr_Top: "0",
                wrpBorderShadowBdr_Unit: "px",
                wrpBorderShadowBdr_isLinked: true,
                wrpBorderShadowborderColor: "#C1CDE1",
                wrpBorderShadowborderStyle: "none",
                wrpBorderShadowRds_Bottom: "0",
                wrpBorderShadowRds_Left: "0",
                wrpBorderShadowRds_Right: "0",
                wrpBorderShadowRds_Top: "0",
                wrpBorderShadowRds_Unit: "px",
                wrpBorderShadowRds_isLinked: true,
            });
        }
    };

    const changCaptionStyle = (selected) => {
        switch (selected) {
            case "attribution-style-1":
                setAttributes({
                    attributionStyle: selected,
                    textAlign: "left",
                    attributionColor: "#211C70",
                    captionPaddingBottom: "",
                    captionPaddingLeft: "10",
                    captionPaddingRight: "10",
                    captionPaddingTop: "20",
                    captionPaddingUnit: "px",
                    captionPaddingisLinked: false,

                    wrpBorderShadowBdr_Bottom: "1",
                    wrpBorderShadowBdr_Left: "1",
                    wrpBorderShadowBdr_Right: "1",
                    wrpBorderShadowBdr_Top: "1",
                    wrpBorderShadowBdr_Unit: "px",
                    wrpBorderShadowBdr_isLinked: true,
                    wrpBorderShadowborderColor: "#C1CDE1",
                    wrpBorderShadowborderStyle: "solid",
                    wrpBorderShadowRds_Bottom: "15",
                    wrpBorderShadowRds_Left: "15",
                    wrpBorderShadowRds_Right: "15",
                    wrpBorderShadowRds_Top: "15",
                    wrpBorderShadowRds_Unit: "px",
                    wrpBorderShadowRds_isLinked: true,

                    wrpPaddingBottom: "15",
                    wrpPaddingLeft: "15",
                    wrpPaddingRight: "15",
                    wrpPaddingTop: "15",
                    wrpPaddingUnit: "px",
                    wrpPaddingisLinked: false,
                });
                break;
            case "attribution-style-2":
                setAttributes({
                    attributionStyle: selected,
                    textAlign: "center",
                    attributionColor: "#2673FF",
                    captionPaddingBottom: "15",
                    captionPaddingLeft: "10",
                    captionPaddingRight: "10",
                    captionPaddingTop: "15",
                    captionPaddingUnit: "px",
                    captionPaddingisLinked: false,

                    wrpBorderShadowBdr_Bottom: "0",
                    wrpBorderShadowBdr_Left: "0",
                    wrpBorderShadowBdr_Right: "0",
                    wrpBorderShadowBdr_Top: "0",
                    wrpBorderShadowBdr_Unit: "px",
                    wrpBorderShadowBdr_isLinked: true,
                    wrpBorderShadowborderColor: "#C1CDE1",
                    wrpBorderShadowborderStyle: "none",
                    wrpBorderShadowRds_Bottom: "0",
                    wrpBorderShadowRds_Left: "0",
                    wrpBorderShadowRds_Right: "0",
                    wrpBorderShadowRds_Top: "0",
                    wrpBorderShadowRds_Unit: "px",
                    wrpBorderShadowRds_isLinked: true,

                    wrpPaddingBottom: "0",
                    wrpPaddingLeft: "0",
                    wrpPaddingRight: "0",
                    wrpPaddingTop: "0",
                    wrpPaddingUnit: "px",
                    wrpPaddingisLinked: false,
                });
                break;
            default:
                setAttributes({
                    attributionStyle: selected,
                });
        }
    };

    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
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
                                    <PanelBody title={__("General", "essential-blocks")} initialOpen={true}>
                                        <SelectControl
                                            label={__("Styles", "essential-blocks")}
                                            description={__("Border won't work", "essential-blocks")}
                                            value={stylePreset}
                                            options={STYLES}
                                            onChange={(stylePreset) => changeStyle(stylePreset)}
                                        />
                                        {stylePreset === "circle" && (
                                            <PanelRow>
                                                <em>
                                                    Please use equal "Height" &#38; "Width" for perfect Circle shape.
                                                </em>
                                            </PanelRow>
                                        )}

                                        <ResponsiveRangeController
                                            baseLabel={__("Width", "essential-blocks")}
                                            controlName={IMAGE_WIDTH}
                                            resRequiredProps={resRequiredProps}
                                            min={1}
                                            max={1000}
                                            step={1}
                                            units={SIZE_UNIT_TYPES}
                                        />

                                        <ResponsiveRangeController
                                            baseLabel={__("Height", "essential-blocks")}
                                            controlName={IMAGE_HEIGHT}
                                            resRequiredProps={resRequiredProps}
                                            min={0}
                                            max={1000}
                                            step={1}
                                            units={SIZE_UNIT_TYPES}
                                        />

                                        <ToggleControl
                                            label={__("Auto Fit Image?", "essential-blocks")}
                                            checked={autoFit}
                                            onChange={(autoFit) => setAttributes({ autoFit })}
                                        />

                                        <SelectControl
                                            label={__("Hover Effect", "essential-blocks")}
                                            value={hoverEffect}
                                            options={HOVER_EFFECT}
                                            onChange={(hoverEffect) => setAttributes({ hoverEffect })}
                                        />

                                        <ToggleControl
                                            label={__("Display Attribution", "essential-blocks")}
                                            checked={displayAttribution}
                                            onChange={() => checkAttribution(!displayAttribution)}
                                        />

                                        {displayAttribution && (
                                            <SelectControl
                                                label={__("Attribution Styles", "essential-blocks")}
                                                value={attributionStyle}
                                                options={ATTRIBUTION_STYLES}
                                                onChange={(attributionStyle) => changCaptionStyle(attributionStyle)}
                                            />
                                        )}
                                    </PanelBody>
                                </>
                            )}

                            {tab.name === "styles" && (
                                <>
                                    <PanelBody title={__("Image Settings", "essential-blocks")}>
                                        {!complexStyle && (
                                            <>
                                                <BaseControl>
                                                    <h3 className="eb-control-title">
                                                        {__("Border", "essential-blocks")}
                                                    </h3>
                                                </BaseControl>
                                                <BorderShadowControl
                                                    controlName={IMAGE_BORDER_SHADOW}
                                                    resRequiredProps={resRequiredProps}
                                                    // noShadow
                                                    // noBorder
                                                />
                                            </>
                                        )}
                                        {complexStyle && (
                                            <PanelRow>
                                                <em>Border Style doesn't support for "{stylePreset} style".</em>
                                            </PanelRow>
                                        )}
                                    </PanelBody>

                                    {displayAttribution && (
                                        <PanelBody title={__("Caption Styles", "essential-blocks")}>
                                            <ColorControl
                                                label={__("Text Color", "essential-blocks")}
                                                color={attributionColor}
                                                onChange={(newColor) => setAttributes({ attributionColor: newColor })}
                                            />

                                            <TypographyDropdown
                                                baseLabel={__("Typography", "essential-blocks")}
                                                typographyPrefixConstant={ATTRIBUTION_TYPOGRAPHY}
                                                resRequiredProps={resRequiredProps}
                                            />

                                            <ResponsiveRangeController
                                                baseLabel={__("Width", "essential-blocks")}
                                                controlName={ATTRIBUTION_WIDTH}
                                                resRequiredProps={resRequiredProps}
                                                units={UNIT_TYPES}
                                                min={0}
                                                max={300}
                                                step={1}
                                            />

                                            {displayAttribution && (
                                                <>
                                                    <BaseControl label={__("Text Align", "essential-blocks")}>
                                                        <ButtonGroup>
                                                            {TEXT_ALIGN.map((item) => (
                                                                <Button
                                                                    // isLarge
                                                                    isPrimary={textAlign === item.value}
                                                                    isSecondary={textAlign !== item.value}
                                                                    onClick={() =>
                                                                        setAttributes({ textAlign: item.value })
                                                                    }
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </BaseControl>

                                                    <ResponsiveDimensionsControl
                                                        resRequiredProps={resRequiredProps}
                                                        controlName={ATTRIBUTION_MARGIN}
                                                        baseLabel="Margin"
                                                    />

                                                    <ResponsiveDimensionsControl
                                                        resRequiredProps={resRequiredProps}
                                                        controlName={ATTRIBUTION_PADDING}
                                                        baseLabel="Padding"
                                                    />
                                                </>
                                            )}
                                        </PanelBody>
                                    )}
                                </>
                            )}

                            {tab.name === "advance" && (
                                <>
                                    <PanelBody>
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={WRAPPER_MARGIN}
                                            baseLabel="Margin"
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={WRAPPER_PADDING}
                                            baseLabel="Padding"
                                        />
                                    </PanelBody>
                                    <PanelBody title={__("Background", "essential-blocks")} initialOpen={false}>
                                        <BackgroundControl
                                            controlName={WRAPPER_BG}
                                            resRequiredProps={resRequiredProps}
                                            noOverlay
                                        />
                                    </PanelBody>
                                    <PanelBody title={__("Border & Shadow")} initialOpen={false}>
                                        <BorderShadowControl
                                            controlName={WRAPPER_BORDER_SHADOW}
                                            resRequiredProps={resRequiredProps}
                                            // noShadow
                                            // noBorder
                                        />
                                    </PanelBody>

                                    <AdvancedControls attributes={attributes} setAttributes={setAttributes} />
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
