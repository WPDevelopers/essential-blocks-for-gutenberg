/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
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
    ColorPalette,
    BaseControl,
    __experimentalDivider as Divider,
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
    BUTTON2_MARGIN,
    BUTTON2_PADDING,
    BUTTON2_BORDER_SHADOW,
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
    TAGS_TYPE,
} from "./constants/constants";

import objAttributes from "./attributes";

import { TITLE_TYPOGRAPHY, SUBTITLE_TYPOGRAPHY, BUTTON_TYPOGRAPHY, BUTTON2_TYPOGRAPHY } from "./constants/typography-constant";

import {
    handleTitle,
    handleSubtitle,
    handleShowButton,
    handleButtonText,
    handleButtonURL,
    handleOpenNewTab,
    handleShowSecondButton,
    handleSecondButtonText,
    handleSecondButtonURL,
    handleSecondButtonOpenNewTab,
} from "./helpers";

const {
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BorderShadowControl,
    ResponsiveRangeController,
    BackgroundControl,
    ColorControl,
    AdvancedControls,
    stripHtmlTags,
    faArrowIcons,
    EBIconPicker
} = window.EBControls;

function Inspector(props) {
    const { attributes, setAttributes, slider } = props;
    const {
        resOption,
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
        secondButtonColorType,
        secondButtonColor,
        secondButtonHoverColor,
        secondButtonBGColor,
        secondButtonHoverBGColor,
        overlayColor,
        arrowColorType,
        arrowColor,
        arrowHoverColor,
        dotsColor,
        dotsActiveColor,
        textAlign,
        verticalAlign,
        arrowPrevIcon,
        arrowNextIcon,
        titleTag,
        contentTag
    } = attributes;

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
                                    <PanelBody title={__("General", "essential-blocks")}>
                                        <SelectControl
                                            label={__("Slider Type", "essential-blocks")}
                                            value={sliderType}
                                            options={SLIDER_TYPE}
                                            onChange={(value) =>
                                                setAttributes({
                                                    sliderType: value,
                                                })
                                            }
                                        />

                                        <ToggleControl
                                            label={__("Show Arrows", "essential-blocks")}
                                            checked={arrows}
                                            onChange={() => {
                                                setAttributes({
                                                    arrows: !arrows,
                                                });
                                            }}
                                        />
                                        <ToggleControl
                                            label={__("Adaptive Height", "essential-blocks")}
                                            checked={adaptiveHeight}
                                            onChange={() => {
                                                setAttributes({
                                                    adaptiveHeight: !adaptiveHeight,
                                                });
                                            }}
                                        />

                                        <ToggleControl
                                            label={__("Autoplay", "essential-blocks")}
                                            checked={autoplay}
                                            onChange={() => {
                                                autoplay ? slider.current.slickPlay() : slider.current.slickPause();
                                                setAttributes({
                                                    autoplay: !autoplay,
                                                });
                                            }}
                                        />

                                        <ToggleControl
                                            label={__("Dots", "essential-blocks")}
                                            checked={dots}
                                            onChange={() => setAttributes({ dots: !dots })}
                                        />

                                        <ToggleControl
                                            label={__("Fade", "essential-blocks")}
                                            checked={fade}
                                            onChange={() => setAttributes({ fade: !fade })}
                                        />

                                        <ToggleControl
                                            label={__("Infinite", "essential-blocks")}
                                            checked={infinite}
                                            onChange={() =>
                                                setAttributes({
                                                    infinite: !infinite,
                                                })
                                            }
                                        />

                                        <ToggleControl
                                            label={__("Vertical Slide", "essential-blocks")}
                                            checked={vertical}
                                            onChange={() =>
                                                setAttributes({
                                                    vertical: !vertical,
                                                })
                                            }
                                        />

                                        <ToggleControl
                                            label={__("Pause on Hover", "essential-blocks")}
                                            checked={pauseOnHover}
                                            onChange={() =>
                                                setAttributes({
                                                    pauseOnHover: !pauseOnHover,
                                                })
                                            }
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
                                                onChange={(autoplaySpeed) =>
                                                    setAttributes({
                                                        autoplaySpeed,
                                                    })
                                                }
                                                min={0}
                                                max={8000}
                                            />
                                        )}

                                        <RangeControl
                                            label={__("Animation Speed", "essential-blocks")}
                                            value={speed}
                                            onChange={(speed) => setAttributes({ speed })}
                                            min={0}
                                            max={3000}
                                        />

                                        {arrows && (
                                            <>
                                                <EBIconPicker
                                                    value={arrowPrevIcon}
                                                    onChange={(arrowPrevIcon) =>
                                                        setAttributes({
                                                            arrowPrevIcon,
                                                        })
                                                    }
                                                    title={__("Arrow Prev Icon", "essential-blocks")}
                                                    icons={{ fontAwesome: faArrowIcons }}
                                                    disableDashicon={true}
                                                />
                                                <EBIconPicker
                                                    value={arrowNextIcon}
                                                    onChange={(arrowNextIcon) =>
                                                        setAttributes({
                                                            arrowNextIcon,
                                                        })
                                                    }
                                                    title={__("Arrow Next Icon", "essential-blocks")}
                                                    icons={{ fontAwesome: faArrowIcons }}
                                                    disableDashicon={true}
                                                />
                                            </>
                                        )}
                                    </PanelBody>

                                    <PanelBody title={__("Slides", "essential-blocks")}>
                                        {sliderType === "content" && (
                                            <>
                                                <SelectControl
                                                    label={__("Content Styles", "essential-blocks")}
                                                    value={sliderContentType}
                                                    options={SLIDER_CONTENT_TYPE}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            sliderContentType: value,
                                                        })
                                                    }
                                                />

                                                <SelectControl
                                                    label={__("Title Tag", "essential-blocks")}
                                                    value={titleTag}
                                                    options={TAGS_TYPE}
                                                    onChange={(titleTag) => {
                                                        setAttributes({
                                                            titleTag
                                                        });
                                                    }}
                                                />
                                                <SelectControl
                                                    label={__("Content Tag", "essential-blocks")}
                                                    value={contentTag}
                                                    options={TAGS_TYPE}
                                                    onChange={(contentTag) => {
                                                        setAttributes({
                                                            contentTag,
                                                        });
                                                    }}
                                                />

                                                <Divider />
                                            </>
                                        )}
                                        {images.map((item, index) => {
                                            return (
                                                <PanelBody
                                                    title={
                                                        item.title && item.title.length > 0
                                                            ? stripHtmlTags(item.title)
                                                            : "Slider " + (index + 1)
                                                    }
                                                    initialOpen={false}
                                                    onToggle={() =>
                                                        setAttributes({
                                                            initialSlide: index,
                                                        })
                                                    }
                                                    className="eb-slider-item-single-panel"
                                                    key={index}
                                                >
                                                    {sliderType === "content" && (
                                                        <>
                                                            <TextControl
                                                                label={__("Title Text", "essential-blocks")}
                                                                value={item.title}
                                                                onChange={(text) =>
                                                                    handleTitle(text, index, images, setAttributes)
                                                                }
                                                            />
                                                            <TextareaControl
                                                                label={__("Subtitle", "essential-blocks")}
                                                                value={item.subtitle}
                                                                onChange={(text) =>
                                                                    handleSubtitle(text, index, images, setAttributes)
                                                                }
                                                            />
                                                            <ToggleControl
                                                                label={__("Show Button", "essential-blocks")}
                                                                checked={item.showButton}
                                                                onChange={() =>
                                                                    handleShowButton(
                                                                        !item.showButton,
                                                                        index,
                                                                        images,
                                                                        setAttributes
                                                                    )
                                                                }
                                                            />
                                                            {item.showButton && (
                                                                <>
                                                                    <TextControl
                                                                        label={__("Button Text", "essential-blocks")}
                                                                        value={item.buttonText}
                                                                        onChange={(text) =>
                                                                            handleButtonText(
                                                                                text,
                                                                                index,
                                                                                images,
                                                                                setAttributes
                                                                            )
                                                                        }
                                                                    />
                                                                    <TextControl
                                                                        label={__("Button URL", "essential-blocks")}
                                                                        value={item.buttonUrl}
                                                                        onChange={(text) =>
                                                                            handleButtonURL(
                                                                                text,
                                                                                index,
                                                                                images,
                                                                                setAttributes
                                                                            )
                                                                        }
                                                                    />
                                                                    {item.buttonUrl &&
                                                                        item.buttonUrl.length > 0 &&
                                                                        !item.isValidUrl && (
                                                                            <span className="error">
                                                                                URL is not valid
                                                                            </span>
                                                                        )}
                                                                    <ToggleControl
                                                                        label={__(
                                                                            "Open in New Tab",
                                                                            "essential-blocks"
                                                                        )}
                                                                        checked={item.openNewTab}
                                                                        onChange={() =>
                                                                            handleOpenNewTab(
                                                                                !item.openNewTab,
                                                                                index,
                                                                                images,
                                                                                setAttributes
                                                                            )
                                                                        }
                                                                    />

                                                                    <ToggleControl
                                                                        label={__(
                                                                            "Add Second Button",
                                                                            "essential-blocks"
                                                                        )}
                                                                        checked={
                                                                            item.showSecondButton
                                                                        }
                                                                        onChange={() =>
                                                                            handleShowSecondButton(
                                                                                !item.showSecondButton,
                                                                                index,
                                                                                images,
                                                                                setAttributes
                                                                            )
                                                                        }
                                                                    />

                                                                    {item.showSecondButton && (
                                                                        <>
                                                                            <TextControl
                                                                                label={__(
                                                                                    "Second Button Text",
                                                                                    "essential-blocks"
                                                                                )}
                                                                                value={
                                                                                    item.secondButtonText
                                                                                }
                                                                                onChange={(
                                                                                    text
                                                                                ) =>
                                                                                    handleSecondButtonText(
                                                                                        text,
                                                                                        index,
                                                                                        images,
                                                                                        setAttributes
                                                                                    )
                                                                                }
                                                                            />
                                                                            <TextControl
                                                                                label={__(
                                                                                    "Second Button URL",
                                                                                    "essential-blocks"
                                                                                )}
                                                                                value={
                                                                                    item.secondButtonUrl
                                                                                }
                                                                                onChange={(
                                                                                    text
                                                                                ) =>
                                                                                    handleSecondButtonURL(
                                                                                        text,
                                                                                        index,
                                                                                        images,
                                                                                        setAttributes
                                                                                    )
                                                                                }
                                                                            />
                                                                            {item.secondButtonUrl &&
                                                                                item
                                                                                    .secondButtonUrl
                                                                                    .length >
                                                                                0 &&
                                                                                !item.isValidUrl && (
                                                                                    <span className="error">
                                                                                        URL
                                                                                        is
                                                                                        not
                                                                                        valid
                                                                                    </span>
                                                                                )}
                                                                            <ToggleControl
                                                                                label={__(
                                                                                    "Open in New Tab",
                                                                                    "essential-blocks"
                                                                                )}
                                                                                checked={
                                                                                    item.secondButtonOpenNewTab
                                                                                }
                                                                                onChange={() =>
                                                                                    handleSecondButtonOpenNewTab(
                                                                                        !item.secondButtonOpenNewTab,
                                                                                        index,
                                                                                        images,
                                                                                        setAttributes
                                                                                    )
                                                                                }
                                                                            />
                                                                        </>
                                                                    )}
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                    {sliderType === "image" && (
                                                        <>
                                                            <TextControl
                                                                label={__("URL", "essential-blocks")}
                                                                value={item.buttonUrl}
                                                                onChange={(text) =>
                                                                    handleButtonURL(text, index, images, setAttributes)
                                                                }
                                                            />
                                                            {item.buttonUrl &&
                                                                item.buttonUrl.length > 0 &&
                                                                !item.isValidUrl && (
                                                                    <span className="error">URL is not valid</span>
                                                                )}
                                                            <ToggleControl
                                                                label={__("Open in New Tab", "essential-blocks")}
                                                                checked={item.openNewTab}
                                                                onChange={() =>
                                                                    handleOpenNewTab(
                                                                        !item.openNewTab,
                                                                        index,
                                                                        images,
                                                                        setAttributes
                                                                    )
                                                                }
                                                            />
                                                        </>
                                                    )}
                                                </PanelBody>
                                            );
                                        })}
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody title={__("Settings", "essential-blocks")} initialOpen={true}>
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
                                                    setAttributes({
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
                                                                setAttributes({
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
                                                                        setAttributes({
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
                                            <PanelBody title={__("Title", "essential-blocks")} initialOpen={false}>
                                                <ColorControl
                                                    label={__("Color", "essential-blocks")}
                                                    color={titleColor}
                                                    onChange={(color) =>
                                                        setAttributes({
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

                                            <PanelBody title={__("Subtitle", "essential-blocks")} initialOpen={false}>
                                                <ColorControl
                                                    label={__("Color", "essential-blocks")}
                                                    color={subtitleColor}
                                                    onChange={(color) =>
                                                        setAttributes({
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

                                            <PanelBody title={__("Button", "essential-blocks")} initialOpen={false}>
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
                                                            onChange={(newColor) =>
                                                                setAttributes({
                                                                    buttonColor: newColor,
                                                                })
                                                            }
                                                        />
                                                        <ColorControl
                                                            label={__("Background Color", "essential-blocks")}
                                                            color={buttonBGColor}
                                                            onChange={(newColor) =>
                                                                setAttributes({
                                                                    buttonBGColor: newColor,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                )}

                                                {buttonColorType === "hover" && (
                                                    <>
                                                        <ColorControl
                                                            label={__("Color", "essential-blocks")}
                                                            color={buttonHoverColor}
                                                            onChange={(newColor) =>
                                                                setAttributes({
                                                                    buttonHoverColor: newColor,
                                                                })
                                                            }
                                                        />
                                                        <ColorControl
                                                            label={__("Background Color", "essential-blocks")}
                                                            color={buttonHoverBGColor}
                                                            onChange={(newColor) =>
                                                                setAttributes({
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

                                                <PanelBody
                                                    title={__(
                                                        "Second Button",
                                                        "essential-blocks"
                                                    )}
                                                    initialOpen={false}
                                                >
                                                    <ButtonGroup className="eb-inspector-btn-group">
                                                        {NORMAL_HOVER.map(
                                                            (item, index) => (
                                                                <Button
                                                                    key={index}
                                                                    isPrimary={
                                                                        secondButtonColorType ===
                                                                        item.value
                                                                    }
                                                                    isSecondary={
                                                                        secondButtonColorType !==
                                                                        item.value
                                                                    }
                                                                    onClick={() =>
                                                                        setAttributes(
                                                                            {
                                                                                secondButtonColorType:
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


                                                    {secondButtonColorType === "normal" && (
                                                        <>
                                                            <ColorControl
                                                                label={__("Color", "essential-blocks")}
                                                                color={secondButtonColor}
                                                                onChange={(newColor) =>
                                                                    setAttributes({
                                                                        secondButtonColor: newColor,
                                                                    })
                                                                }
                                                            />
                                                            <ColorControl
                                                                label={__("Background Color", "essential-blocks")}
                                                                color={secondButtonBGColor}
                                                                onChange={(newColor) =>
                                                                    setAttributes({
                                                                        secondButtonBGColor: newColor,
                                                                    })
                                                                }
                                                            />
                                                        </>
                                                    )}

                                                    {secondButtonColorType === "hover" && (
                                                        <>
                                                            <ColorControl
                                                                label={__("Color", "essential-blocks")}
                                                                color={secondButtonHoverColor}
                                                                onChange={(newColor) =>
                                                                    setAttributes({
                                                                        secondButtonHoverColor: newColor,
                                                                    })
                                                                }
                                                            />
                                                            <ColorControl
                                                                label={__("Background Color", "essential-blocks")}
                                                                color={secondButtonHoverBGColor}
                                                                onChange={(newColor) =>
                                                                    setAttributes({
                                                                        secondButtonHoverBGColor: newColor,
                                                                    })
                                                                }
                                                            />
                                                        </>
                                                    )}
                                                    <PanelRow>
                                                        Button Border & Shadow
                                                    </PanelRow>
                                                    <BorderShadowControl
                                                        controlName={
                                                            BUTTON2_BORDER_SHADOW
                                                        }
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                    // noShadow
                                                    // noBorder
                                                    />
                                                    <TypographyDropdown
                                                        baseLabel={__(
                                                            "Typography",
                                                            "essential-blocks"
                                                        )}
                                                        typographyPrefixConstant={
                                                            BUTTON2_TYPOGRAPHY
                                                        }
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                    />
                                                    <ResponsiveDimensionsControl
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                        controlName={
                                                            BUTTON2_MARGIN
                                                        }
                                                        baseLabel="Margin"
                                                    />
                                                    <ResponsiveDimensionsControl
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                        controlName={
                                                            BUTTON2_PADDING
                                                        }
                                                        baseLabel="Padding"
                                                    />
                                                </PanelBody>
                                            </PanelBody>
                                        </>
                                    )}

                                    {arrows && (
                                        <PanelBody title={__("Arrow", "essential-blocks")} initialOpen={false}>
                                            <ButtonGroup className="eb-inspector-btn-group">
                                                {NORMAL_HOVER.map((item, index) => (
                                                    <Button
                                                        key={index}
                                                        isPrimary={arrowColorType === item.value}
                                                        isSecondary={arrowColorType !== item.value}
                                                        onClick={() =>
                                                            setAttributes({
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
                                                    label={__("Color", "essential-blocks")}
                                                    color={arrowColor}
                                                    onChange={(newColor) =>
                                                        setAttributes({
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
                                                        setAttributes({
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
                                        <PanelBody title={__("Dot", "essential-blocks")} initialOpen={false}>
                                            <ColorControl
                                                label={__("Color", "essential-blocks")}
                                                color={dotsColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        dotsColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__("Active Color", "essential-blocks")}
                                                color={dotsActiveColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        dotsActiveColor: color,
                                                    })
                                                }
                                            />

                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Dots Size",
                                                    "essential-blocks"
                                                )}
                                                controlName={DOTS_SIZE}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                units={FONT_UNIT_TYPES}
                                                min={1}
                                                max={50}
                                                step={1}
                                            />
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Dots Gap",
                                                    "essential-blocks"
                                                )}
                                                controlName={DOTS_GAP}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
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
