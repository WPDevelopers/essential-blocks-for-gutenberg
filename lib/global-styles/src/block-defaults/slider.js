/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
    PanelBody,
    PanelRow,
    SelectControl,
    ToggleControl,
    Button,
    ButtonGroup,
    TabPanel,
    RangeControl,
    TextControl,
    TextareaControl,
} from "@wordpress/components";

/*
 * Internal depencencies
 */
import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    TITLE_MARGIN,
    SUBTITLE_MARGIN,
    BUTTON_MARGIN,
    BUTTON_PADDING,
    BUTTON_BORDER_SHADOW,
    DOTS_GAP,
    ARROW_POSITION,
    DOTS_POSITION,
    ARROW_SIZE,
    DOTS_SIZE,
    SLIDES_GAP,
    SLIDE_TO_SHOW,
    CUSTOM_HEIGHT,
    NORMAL_HOVER,
    SLIDER_CONTENT_TYPE,
    SLIDER_TYPE,
    UNIT_TYPES,
    HEIGHT_UNIT_TYPES,
    FONT_UNIT_TYPES,
    COLORS,
    TEXT_ALIGN,
    VERTICAL_ALIGN,
} from "../../../../blocks/slider/src/constants/constants";

import objAttributes from "../../../../blocks/slider/src/attributes";

import {
    TITLE_TYPOGRAPHY,
    SUBTITLE_TYPOGRAPHY,
    BUTTON_TYPOGRAPHY,
} from "../../../../blocks/slider/src/constants/typography-constant";

const {
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BorderShadowControl,
    ResponsiveRangeController,
    BackgroundControl,
    ColorControl,
    AdvancedControls,
} = window.EBControls;

function Slider(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        sliderType,
        sliderContentType,
        images,
        arrows,
        adaptiveHeight,
        autoplay,
        autoplaySpeed,
        dots,
        fade,
        infinite,
        vertical,
        pauseOnHover,
        isCustomHeight,
        speed,
        titleColor,
        subtitleColor,
        buttonColorType,
        buttonColor,
        buttonHoverColor,
        buttonBGColor,
        buttonHoverBGColor,
        overlayColor,
        arrowColorType,
        arrowColor,
        arrowHoverColor,
        dotsColor,
        dotsActiveColor,
        textAlign,
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
                sliderType: "image",
                sliderContentType: "content-1",
                images: [],
                arrows: true,
                adaptiveHeight: false,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,
                fade: false,
                infinite: true,
                vertical: false,
                pauseOnHover: true,
                isCustomHeight: true,
                slidesToShow: 1,
                speed: 500,
                initialSlide: 0,
                titleColor: "var(--eb-global-heading-color)",
                subtitleColor: "var(--eb-global-text-color)",
                buttonColorType: "normal",
                buttonColor: "var(--eb-global-button-text-color)",
                buttonHoverColor: "var(--eb-global-button-text-color)",
                buttonBGColor: "var(--eb-global-button-background-color)",
                buttonHoverBGColor: "var(--eb-global-tertiary-color)",
                overlayColor: "rgb(184 133 228 / 75%)",
                arrowColorType: "normal",
                arrowColor: "var(--eb-global-primary-color)",
                arrowHoverColor: "var(--eb-global-tertiary-color)",
                dotsColor: "var(--eb-global-secondary-color)",
                dotsActiveColor: "var(--eb-global-primary-color)",
                textAlign: "left",
                verticalAlign: "center",
                [`${CUSTOM_HEIGHT}Unit`]: "px",
                [`${ARROW_POSITION}Unit`]: "px",
                [`${ARROW_SIZE}Unit`]: "px",
                [`${DOTS_SIZE}Unit`]: "px",
                [`${DOTS_GAP}Unit`]: "px",
                [`${DOTS_SIZE}Unit`]: "px",
                [`${DOTS_SIZE}Unit`]: "px",
                [`${DOTS_SIZE}Unit`]: "px",
                [`${DOTS_POSITION}Unit`]: "px",

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
                        <SelectControl
                            label={__("Slider Type", "essential-blocks")}
                            value={sliderType}
                            options={SLIDER_TYPE}
                            onChange={(value) => handleBlockDefault({ sliderType: value })}
                        />

                        <ToggleControl
                            label={__("Show Arrows", "essential-blocks")}
                            checked={arrows}
                            onChange={() => {
                                handleBlockDefault({ arrows: !arrows });
                            }}
                        />
                        <ToggleControl
                            label={__("Adaptive Height", "essential-blocks")}
                            checked={adaptiveHeight}
                            onChange={() => {
                                handleBlockDefault({
                                    adaptiveHeight: !adaptiveHeight,
                                });
                            }}
                        />

                        <ToggleControl
                            label={__("Autoplay", "essential-blocks")}
                            checked={autoplay}
                            onChange={() => {
                                autoplay ? slider.current.slickPlay() : slider.current.slickPause();
                                handleBlockDefault({ autoplay: !autoplay });
                            }}
                        />

                        <ToggleControl
                            label={__("Dots", "essential-blocks")}
                            checked={dots}
                            onChange={() => handleBlockDefault({ dots: !dots })}
                        />

                        <ToggleControl
                            label={__("Fade", "essential-blocks")}
                            checked={fade}
                            onChange={() => handleBlockDefault({ fade: !fade })}
                        />

                        <ToggleControl
                            label={__("Infinite", "essential-blocks")}
                            checked={infinite}
                            onChange={() => handleBlockDefault({ infinite: !infinite })}
                        />

                        <ToggleControl
                            label={__("Vertical Slide", "essential-blocks")}
                            checked={vertical}
                            onChange={() => handleBlockDefault({ vertical: !vertical })}
                        />

                        <ToggleControl
                            label={__("Pause on Hover", "essential-blocks")}
                            checked={pauseOnHover}
                            onChange={() =>
                                handleBlockDefault({
                                    pauseOnHover: !pauseOnHover,
                                })
                            }
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
                                baseLabel={__("Image Height", "essential-blocks")}
                                controlName={CUSTOM_HEIGHT}
                                resRequiredProps={resRequiredProps}
                                units={HEIGHT_UNIT_TYPES}
                                min={1}
                                max={1200}
                                step={1}
                            />
                        )}

                        {!fade && (
                            <ResponsiveRangeController
                                baseLabel={__("Slides to Show", "essential-blocks")}
                                controlName={SLIDE_TO_SHOW}
                                resRequiredProps={resRequiredProps}
                                units={[]}
                                min={1}
                                max={8}
                                step={1}
                            />
                        )}

                        {autoplay && (
                            <RangeControl
                                label={__("Autoplay Speed", "essential-blocks")}
                                value={autoplaySpeed}
                                onChange={(autoplaySpeed) => handleBlockDefault({ autoplaySpeed })}
                                min={0}
                                max={8000}
                            />
                        )}

                        <RangeControl
                            label={__("Animation Speed", "essential-blocks")}
                            value={speed}
                            onChange={(speed) => handleBlockDefault({ speed })}
                            min={0}
                            max={3000}
                        />
                    </PanelBody>
                    <PanelBody title={__("Settings", "essential-blocks")} initialOpen={false}>
                        <ResponsiveRangeController
                            baseLabel={__("Slides Gap", "essential-blocks")}
                            controlName={SLIDES_GAP}
                            resRequiredProps={resRequiredProps}
                            units={[]}
                            min={0}
                            max={100}
                            step={1}
                        />

                        {sliderType === "content" && sliderContentType === "content-1" && (
                            <ColorControl
                                label={__("Overlay Color", "essential-blocks")}
                                color={overlayColor}
                                onChange={(color) =>
                                    handleBlockDefault({
                                        overlayColor: color,
                                    })
                                }
                            />
                        )}
                        {sliderType === "content" && (
                            <>
                                <PanelRow>Text Align</PanelRow>
                                <ButtonGroup>
                                    {TEXT_ALIGN.map((item, index) => (
                                        <Button
                                            key={index}
                                            isPrimary={textAlign === item.value}
                                            isSecondary={textAlign !== item.value}
                                            onClick={() =>
                                                handleBlockDefault({
                                                    textAlign: item.value,
                                                })
                                            }
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>

                                {sliderContentType != "content-2" && (
                                    <>
                                        <PanelRow>Vertical Align</PanelRow>
                                        <ButtonGroup>
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
                                    </>
                                )}
                            </>
                        )}
                    </PanelBody>

                    {sliderType === "content" && (
                        <>
                            <PanelBody title={__("Title Style", "essential-blocks")} initialOpen={false}>
                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={titleColor}
                                    onChange={(color) =>
                                        handleBlockDefault({
                                            titleColor: color,
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

                            <PanelBody title={__("Subtitle Style", "essential-blocks")} initialOpen={false}>
                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={subtitleColor}
                                    onChange={(color) =>
                                        handleBlockDefault({
                                            subtitleColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    baseLabel={__("Typography", "essential-blocks")}
                                    typographyPrefixConstant={SUBTITLE_TYPOGRAPHY}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={SUBTITLE_MARGIN}
                                    baseLabel="Margin"
                                />
                            </PanelBody>

                            <PanelBody title={__("Button Style", "essential-blocks")} initialOpen={false}>
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
                                            onChange={(newColor) =>
                                                handleBlockDefault({
                                                    buttonColor: newColor,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__("Background Color", "essential-blocks")}
                                            color={buttonBGColor}
                                            onChange={(newColor) =>
                                                handleBlockDefault({
                                                    buttonBGColor: newColor,
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
                                            onChange={(newColor) =>
                                                handleBlockDefault({
                                                    buttonHoverColor: newColor,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__("Background Color", "essential-blocks")}
                                            color={buttonHoverBGColor}
                                            onChange={(newColor) =>
                                                handleBlockDefault({
                                                    buttonHoverBGColor: newColor,
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

                    {arrows && (
                        <PanelBody title={__("Arrow Style", "essential-blocks")} initialOpen={false}>
                            <ButtonGroup className="eb-inspector-btn-group">
                                {NORMAL_HOVER.map((item, index) => (
                                    <Button
                                        key={index}
                                        isPrimary={arrowColorType === item.value}
                                        isSecondary={arrowColorType !== item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                arrowColorType: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>

                            {arrowColorType === "normal" && (
                                <ColorControl
                                    label={__("Arrow Color", "essential-blocks")}
                                    color={arrowColor}
                                    onChange={(newColor) =>
                                        handleBlockDefault({
                                            arrowColor: newColor,
                                        })
                                    }
                                />
                            )}

                            {arrowColorType === "hover" && (
                                <ColorControl
                                    label={__("Hover Color", "essential-blocks")}
                                    color={arrowHoverColor}
                                    onChange={(newColor) =>
                                        handleBlockDefault({
                                            arrowHoverColor: newColor,
                                        })
                                    }
                                />
                            )}

                            <ResponsiveRangeController
                                baseLabel={__("Arrow Size", "essential-blocks")}
                                controlName={ARROW_SIZE}
                                resRequiredProps={resRequiredProps}
                                units={FONT_UNIT_TYPES}
                                min={1}
                                max={50}
                                step={1}
                            />

                            <ResponsiveRangeController
                                baseLabel={__("Arrow Position", "essential-blocks")}
                                controlName={ARROW_POSITION}
                                resRequiredProps={resRequiredProps}
                                units={UNIT_TYPES}
                                min={-50}
                                max={100}
                                step={1}
                            />
                        </PanelBody>
                    )}

                    {dots && (
                        <PanelBody title={__("Dot Style", "essential-blocks")} initialOpen={false}>
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={dotsColor}
                                onChange={(color) => handleBlockDefault({ dotsColor: color })}
                            />
                            <ColorControl
                                label={__("Active Color", "essential-blocks")}
                                color={dotsActiveColor}
                                onChange={(color) =>
                                    handleBlockDefault({
                                        dotsActiveColor: color,
                                    })
                                }
                            />

                            <ResponsiveRangeController
                                baseLabel={__("Dots Size", "essential-blocks")}
                                controlName={DOTS_SIZE}
                                resRequiredProps={resRequiredProps}
                                units={FONT_UNIT_TYPES}
                                min={1}
                                max={50}
                                step={1}
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Dots Gap", "essential-blocks")}
                                controlName={DOTS_GAP}
                                resRequiredProps={resRequiredProps}
                                units={UNIT_TYPES}
                                min={0}
                                max={50}
                                step={1}
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Dots Position", "essential-blocks")}
                                controlName={DOTS_POSITION}
                                resRequiredProps={resRequiredProps}
                                units={UNIT_TYPES}
                                min={-50}
                                max={100}
                                step={1}
                            />
                        </PanelBody>
                    )}
                    <PanelBody title={__("Wrapper Margin & Padding")} initialOpen={false}>
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
                        <BorderShadowControl
                            controlName={WRAPPER_BORDER_SHADOW}
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

export default Slider;
