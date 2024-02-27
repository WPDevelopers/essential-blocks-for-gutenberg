/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { PanelBody, PanelRow, ToggleControl, Button, ButtonGroup, RangeControl } from "@wordpress/components";

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
} from "../../../../blocks/parallax-slider/src/constants/constants";
import {
    TITLE_TYPOGRAPHY,
    BUTTON_TYPOGRAPHY,
} from "../../../../blocks/parallax-slider/src/constants/typography-constant";

import objAttributes from "../../../../blocks/parallax-slider/src/attributes";

const {
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BorderShadowControl,
    ResponsiveRangeController,
    BackgroundControl,
    ColorControl,
} = window.EBControls;

function ParallaxSlider(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
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
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                sliderStyle: "style-1",
                sliderData: [],
                intensity: 50,
                startIndex: 1,
                isCustomHeight: true,
                current: 1,
                titleColorType: "normal",
                titleColor: "var(--eb-global-heading-color)",
                titleBackgroundColor: "var(--eb-global-background-color)",
                buttonColorType: "normal",
                buttonBackgroundColor: "var(--eb-global-button-background-color)",
                buttonColor: "var(--eb-global-button-text-color)",
                buttonHoverBackgroundColor: "var(--eb-global-tertiary-color)",
                horizontalAlign: "center",
                verticalAlign: "center",
                [`${CUSTOM_HEIGHT}Unit`]: "px",
                [`${SLIDES_GAP}Unit`]: "px",
                [`${CONTENTS_PADDING}Unit`]: "px",
                [`${CONTENTS_PADDING}isLinked`]: true,
                [`${SLIDE_BORDER_RADIUS}Unit`]: "px",
                [`${TITLE_MARGIN}Unit`]: "px",
                [`${TITLE_MARGIN}isLinked`]: true,
                [`${BUTTON_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${BUTTON_BORDER_SHADOW}Bdr_isLinked`]: true,
                [`${BUTTON_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${BUTTON_BORDER_SHADOW}Rds_isLinked`]: true,
                [`${BUTTON_BORDER_SHADOW}BorderType`]: "normal",
                [`${BUTTON_BORDER_SHADOW}shadowType`]: "normal",
                [`${BUTTON_MARGIN}Unit`]: "px",
                [`${BUTTON_MARGIN}isLinked`]: true,
                [`${BUTTON_PADDING}Unit`]: "px",
                [`${BUTTON_PADDING}isLinked`]: true,
                [`${WRAPPER_MARGIN}Unit`]: "px",
                [`${WRAPPER_MARGIN}isLinked`]: true,
                [`${WRAPPER_PADDING}Unit`]: "px",
                [`${WRAPPER_PADDING}isLinked`]: true,
                [`${WRAPPER_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${WRAPPER_BORDER_SHADOW}Bdr_isLinked`]: true,
                [`${WRAPPER_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${WRAPPER_BORDER_SHADOW}Rds_isLinked`]: true,
                [`${WRAPPER_BORDER_SHADOW}BorderType`]: "normal",
                [`${WRAPPER_BORDER_SHADOW}shadowType`]: "normal",
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
                    <PanelBody title={__("General", "essential-blocks")}>
                        <RangeControl
                            label={__("Parallax Softness", "essential-blocks")}
                            value={intensity}
                            allowReset
                            onChange={(intensity) => handleBlockDefault({ intensity })}
                            min={0}
                            max={100}
                        />
                        <ToggleControl
                            label={__("Custom Height", "essential-blocks")}
                            checked={isCustomHeight}
                            onChange={() =>
                                handleBlockDefault({
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
                    <PanelBody title={__("Slides Style", "essential-blocks")} initialOpen={true}>
                        <PanelRow>Content Horizontal Align</PanelRow>
                        <ButtonGroup>
                            {HORIZONTAL_ALIGN.map((item, index) => (
                                <Button
                                    key={index}
                                    isPrimary={horizontalAlign === item.value}
                                    isSecondary={horizontalAlign !== item.value}
                                    onClick={() =>
                                        handleBlockDefault({
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
                                        handleBlockDefault({
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
                            onChange={(color) => handleBlockDefault({ titleColor: color })}
                        />

                        <ColorControl
                            label={__("Background Color", "essential-blocks")}
                            color={titleBackgroundColor}
                            onChange={(color) =>
                                handleBlockDefault({
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
                                        handleBlockDefault({
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
                                        handleBlockDefault({
                                            buttonColor: color,
                                        })
                                    }
                                />
                                <ColorControl
                                    label={__("Background Color", "essential-blocks")}
                                    color={buttonBackgroundColor}
                                    onChange={(color) =>
                                        handleBlockDefault({
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
                                        handleBlockDefault({
                                            buttonHoverColor: color,
                                        })
                                    }
                                />

                                <ColorControl
                                    label={__("Hover Background Color", "essential-blocks")}
                                    color={buttonHoverBackgroundColor}
                                    onChange={(color) =>
                                        handleBlockDefault({
                                            buttonHoverBackgroundColor: color,
                                        })
                                    }
                                />
                            </>
                        )}
                        <PanelRow>Button Border & Shadow</PanelRow>
                        <BorderShadowControl controlName={BUTTON_BORDER_SHADOW} resRequiredProps={resRequiredProps} />
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
                    <PanelBody title={__("Wrapper Margin & Padding", "essential-blocks")} initialOpen={false}>
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
                    <PanelBody title={__("Wrapper Background", "essential-blocks")} initialOpen={false}>
                        <BackgroundControl controlName={WRAPPER_BG} resRequiredProps={resRequiredProps} noOverlay />
                    </PanelBody>
                    <PanelBody title={__("Wrapper Border & Shadow")} initialOpen={false}>
                        <BorderShadowControl controlName={WRAPPER_BORDER_SHADOW} resRequiredProps={resRequiredProps} />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default ParallaxSlider;
