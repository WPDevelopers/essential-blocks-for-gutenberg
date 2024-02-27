/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {
    PanelBody,
    PanelRow,
    ToggleControl,
    Button,
    ButtonGroup,
    TabPanel,
    RangeControl,
    TextControl,
} from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */
import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    TITLE_MARGIN,
    BUTTON_MARGIN,
    BUTTON_PADDING,
    BUTTON_BORDER_SHADOW,
    CUSTOM_HEIGHT,
    SLIDES_GAP,
    CONTENTS_PADDING,
    SLIDE_BORDER_RADIUS,
    NORMAL_HOVER,
    HORIZONTAL_ALIGN,
    VERTICAL_ALIGN,
    UNIT_TYPES,
    GAP_UNIT_TYPES,
    COLORS,
} from "./constants/constants";
import { TITLE_TYPOGRAPHY, BUTTON_TYPOGRAPHY } from "./constants/typography-constant";

import objAttributes from "./attributes";

const {
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BorderShadowControl,
    ResponsiveRangeController,
    BackgroundControl,
    ColorControl,
    AdvancedControls,
} = window.EBControls;

const Inspector = ({ attributes, setAttributes }) => {
    const {
        resOption,
        sliderData,
        current,
        intensity,
        isCustomHeight,
        titleColor,
        titleBackgroundColor,
        buttonColorType,
        buttonColor,
        buttonHoverColor,
        buttonBackgroundColor,
        buttonHoverBackgroundColor,
        horizontalAlign,
        verticalAlign,
    } = attributes;

    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
    };

    const handleTextChange = (type, value, index) => {
        let updatedData = [...sliderData];
        updatedData[index][type] = value;

        setAttributes({ sliderData: updatedData });
    };

    const handlePanelClick = (index) => {
        let updatedIndex = index !== current ? index : 1;
        setAttributes({ current: updatedIndex });
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
                                    <PanelBody title={__("General", "essential-blocks")}>
                                        <RangeControl
                                            label={__("Parallax Softness", "essential-blocks")}
                                            value={intensity}
                                            allowReset
                                            onChange={(intensity) => setAttributes({ intensity })}
                                            min={0}
                                            max={100}
                                        />
                                        <ToggleControl
                                            label={__("Custom Height", "essential-blocks")}
                                            checked={isCustomHeight}
                                            onChange={() =>
                                                setAttributes({
                                                    isCustomHeight: !isCustomHeight,
                                                })
                                            }
                                        />

                                        {isCustomHeight && (
                                            <ResponsiveRangeController
                                                baseLabel={__("Slider Size", "essential-blocks")}
                                                controlName={CUSTOM_HEIGHT}
                                                resRequiredProps={resRequiredProps}
                                                units={UNIT_TYPES}
                                                min={1}
                                                max={500}
                                                step={1}
                                            />
                                        )}

                                        <ResponsiveRangeController
                                            baseLabel={__("Slides Gap", "essential-blocks")}
                                            controlName={SLIDES_GAP}
                                            resRequiredProps={resRequiredProps}
                                            units={GAP_UNIT_TYPES}
                                            min={0}
                                            max={200}
                                            step={1}
                                        />
                                    </PanelBody>

                                    <PanelBody title={__("Slides", "essential-blocks")} initialOpen={false}>
                                        {sliderData.map((slide, index) => (
                                            <PanelBody
                                                key={index}
                                                title={
                                                    slide.title && slide.title.length > 0
                                                        ? slide.title
                                                        : "Slide " + (index + 1) + " Settings"
                                                }
                                                initialOpen={false}
                                                onToggle={() => handlePanelClick(index)}
                                                className="eb-slider-item-single-panel"
                                            >
                                                <TextControl
                                                    label={__("Title Text", "essential-blocks")}
                                                    value={slide.title}
                                                    onChange={(title) => handleTextChange("title", title, index)}
                                                />

                                                <TextControl
                                                    label={__("Button Text", "essential-blocks")}
                                                    value={slide.btnText}
                                                    onChange={(btnText) => handleTextChange("btnText", btnText, index)}
                                                />

                                                <TextControl
                                                    label={__("Button Link", "essential-blocks")}
                                                    value={slide.link}
                                                    onChange={(link) => handleTextChange("link", link, index)}
                                                />

                                                <ToggleControl
                                                    label={__("Open in New Tab", "essential-blocks")}
                                                    checked={slide.openNewTab}
                                                    onChange={() =>
                                                        handleTextChange("openNewTab", !slide.openNewTab, index)
                                                    }
                                                />
                                            </PanelBody>
                                        ))}
                                    </PanelBody>
                                </>
                            )}

                            {tab.name === "styles" && (
                                <>
                                    <PanelBody title={__("Slides Style", "essential-blocks")} initialOpen={true}>
                                        <PanelRow>Content Horizontal Align</PanelRow>
                                        <ButtonGroup>
                                            {HORIZONTAL_ALIGN.map((item, index) => (
                                                <Button
                                                    key={index}
                                                    isPrimary={horizontalAlign === item.value}
                                                    isSecondary={horizontalAlign !== item.value}
                                                    onClick={() =>
                                                        setAttributes({
                                                            horizontalAlign: item.value,
                                                        })
                                                    }
                                                >
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>

                                        <PanelRow>Content Vertical Align</PanelRow>
                                        <ButtonGroup className="eb-margin-bottom-20">
                                            {VERTICAL_ALIGN.map((item, index) => (
                                                <Button
                                                    key={index}
                                                    isPrimary={verticalAlign === item.value}
                                                    isSecondary={verticalAlign !== item.value}
                                                    onClick={() =>
                                                        setAttributes({
                                                            verticalAlign: item.value,
                                                        })
                                                    }
                                                >
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>

                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={CONTENTS_PADDING}
                                            baseLabel="Content Padding"
                                        />

                                        <ResponsiveRangeController
                                            baseLabel={__("Slide Border Radius", "essential-blocks")}
                                            controlName={SLIDE_BORDER_RADIUS}
                                            resRequiredProps={resRequiredProps}
                                            units={GAP_UNIT_TYPES}
                                            min={1}
                                            max={50}
                                            step={1}
                                        />
                                    </PanelBody>

                                    <PanelBody title={__("Title Style", "essential-blocks")} initialOpen={false}>
                                        <ColorControl
                                            label={__("Color", "essential-blocks")}
                                            color={titleColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    titleColor: color,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__("Background Color", "essential-blocks")}
                                            color={titleBackgroundColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    titleBackgroundColor: color,
                                                })
                                            }
                                        />

                                        <TypographyDropdown
                                            baseLabel={__("Typography", "essential-blocks")}
                                            typographyPrefixConstant={TITLE_TYPOGRAPHY}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={TITLE_MARGIN}
                                            baseLabel="Margin"
                                        />
                                    </PanelBody>

                                    <PanelBody title={__("Button Styles", "essential-blocks")} initialOpen={false}>
                                        <ButtonGroup className="eb-inspector-btn-group">
                                            {NORMAL_HOVER.map((item, index) => (
                                                <Button
                                                    key={index}
                                                    isPrimary={buttonColorType === item.value}
                                                    isSecondary={buttonColorType !== item.value}
                                                    onClick={() =>
                                                        setAttributes({
                                                            buttonColorType: item.value,
                                                        })
                                                    }
                                                >
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>

                                        {buttonColorType === "normal" && (
                                            <>
                                                <ColorControl
                                                    label={__("Color", "essential-blocks")}
                                                    color={buttonColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            buttonColor: color,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__("Background Color", "essential-blocks")}
                                                    color={buttonBackgroundColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            buttonBackgroundColor: color,
                                                        })
                                                    }
                                                />
                                            </>
                                        )}

                                        {buttonColorType === "hover" && (
                                            <>
                                                <ColorControl
                                                    label={__("Hover Color", "essential-blocks")}
                                                    color={buttonHoverColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            buttonHoverColor: color,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__("Hover Background Color", "essential-blocks")}
                                                    color={buttonHoverBackgroundColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            buttonHoverBackgroundColor: color,
                                                        })
                                                    }
                                                />
                                            </>
                                        )}
                                        <PanelRow>Button Border & Shadow</PanelRow>
                                        <BorderShadowControl
                                            controlName={BUTTON_BORDER_SHADOW}
                                            resRequiredProps={resRequiredProps}
                                            // noShadow
                                            // noBorder
                                        />
                                        <TypographyDropdown
                                            baseLabel={__("Typography", "essential-blocks")}
                                            typographyPrefixConstant={BUTTON_TYPOGRAPHY}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={BUTTON_MARGIN}
                                            baseLabel="Margin"
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={BUTTON_PADDING}
                                            baseLabel="Padding"
                                        />
                                    </PanelBody>
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
};

export default Inspector;
