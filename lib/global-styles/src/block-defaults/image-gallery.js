/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { PanelBody, ToggleControl, Button, ButtonGroup, BaseControl, PanelRow } from "@wordpress/components";

/**
 * External depencencies
 */

const {
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BorderShadowControl,
    ResponsiveRangeController,
    BackgroundControl,
    ColorControl,
} = window.EBControls;

/**
 * Internal depencencies
 */
import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    GRID_COLUMNS,
    IMAGE_GAP,
    IMAGE_BORDER_SHADOW,
    CAPTION_MARGIN,
    CAPTION_PADDING,
    CAPTION_TYPOGRAPHY,
    CAPTION_WIDTH,
    TEXT_ALIGN,
    HORIZONTAL_ALIGN,
    VERTICAL_ALIGN,
    UNIT_TYPES,
    IMAGE_UNIT_TYPES,
    IMAGE_WIDTH,
    IMAGE_HEIGHT,
    IMAGE_MAX_WIDTH,
    IMAGE_MAX_HEIGHT,
    IMAGE_SIZE_TYPE,
    FLEX_ALIGN,
    FILTER_PADDING,
    FILTER_MARGIN,
    NORMAL_HOVER,
    FILTER_BORDER_SHADOW,
} from "../../../../blocks/image-gallery/src/constants";

import { FILTER_TYPOGRAPHY } from "../../../../blocks/image-gallery/src/typoConstants";

import objAttributes from "../../../../blocks/image-gallery/src/attributes";

function ImageGallery(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        layouts,
        displayCaption,
        captionOnHover,
        captionColor,
        overlayColor,
        captionBGColor,
        horizontalAlign,
        verticalAlign,
        textAlign,
        styleNumber,
        disableLightBox,
        imageSizeType,
        imageAlignment,
        enableFilter,
        filterColorType,
        filterColor,
        filterHoverColor,
        filterBGColor,
        filterHoverBGColor,
        filterActColor,
        filterActBGColor,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                images: [],
                sources: [],
                imageSize: "",
                selectedImgIndex: "number",
                layouts: "grid",
                displayCaption: false,
                captionOnHover: false,
                newImage: "",
                captionColor: "#ffffff",
                captionBGColor: "rgba(195 195 195 / 0.7)",
                overlayColor: "rgba(0 0 0 / 0.7)",
                horizontalAlign: "center",
                verticalAlign: "bottom",
                textAlign: "center",
                styleNumber: "0",
                overlayStyle: "overlay-bottom",
                disableLightBox: false,
                imageSizeType: "fixed",
                imageAlignment: "flex-start",
                enableFilter: false,
                enableFilterAll: true,
                filterAllTitle: "All",
                filterColorType: "normal",
                filterColor: "#555555",
                filterActColor: "#ffffff",
                filterHoverColor: "#ffffff",
                filterBGColor: "#EEEDF0",
                filterActBGColor: "#7967ff",
                filterHoverBGColor: "#333333",
                select2Options: "",

                [`${CAPTION_WIDTH}Unit`]: "px",
                [`${CAPTION_PADDING}Unit`]: "px",
                [`${CAPTION_PADDING}isLinked`]: true,
                [`${CAPTION_MARGIN}Unit`]: "px",
                [`${CAPTION_MARGIN}isLinked`]: true,

                [`${IMAGE_WIDTH}Unit`]: "%",
                [`${IMAGE_HEIGHT}Unit`]: "px",
                [`${IMAGE_MAX_WIDTH}Unit`]: "px",
                [`${IMAGE_MAX_HEIGHT}Unit`]: "px",

                [`${IMAGE_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${IMAGE_BORDER_SHADOW}Bdr_isLinked`]: true,
                [`${IMAGE_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${IMAGE_BORDER_SHADOW}Rds_isLinked`]: true,
                [`${IMAGE_BORDER_SHADOW}BorderType`]: "normal",

                [`${FILTER_PADDING}Top`]: 5,
                [`${FILTER_PADDING}Right`]: 10,
                [`${FILTER_PADDING}Bottom`]: 5,
                [`${FILTER_PADDING}Left`]: 10,
                [`${FILTER_PADDING}Unit`]: "px",
                [`${FILTER_PADDING}isLinked`]: false,

                [`${FILTER_MARGIN}Unit`]: "px",
                [`${FILTER_MARGIN}isLinked`]: false,
                [`${FILTER_MARGIN}Top`]: 0,
                [`${FILTER_MARGIN}Bottom`]: 0,
                [`${FILTER_MARGIN}Left`]: 5,
                [`${FILTER_MARGIN}Right`]: 5,

                [`${FILTER_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${FILTER_BORDER_SHADOW}Bdr_isLinked`]: true,
                [`${FILTER_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${FILTER_BORDER_SHADOW}Rds_isLinked`]: true,
                [`${FILTER_BORDER_SHADOW}BorderType`]: "normal",

                [`${WRAPPER_PADDING}Unit`]: "px",
                [`${WRAPPER_PADDING}isLinked`]: true,

                [`${WRAPPER_MARGIN}Unit`]: "px",
                [`${WRAPPER_MARGIN}isLinked`]: true,

                [`${WRAPPER_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${WRAPPER_BORDER_SHADOW}Bdr_isLinked`]: true,
                [`${WRAPPER_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${WRAPPER_BORDER_SHADOW}Rds_isLinked`]: true,
                [`${WRAPPER_BORDER_SHADOW}BorderType`]: "normal",
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
                    <PanelBody title={__("General", "essential-blocks")} initialOpen={true}>
                        <ToggleControl
                            label={__("Display Caption", "essential-blocks")}
                            checked={displayCaption}
                            onChange={() =>
                                handleBlockDefault({
                                    displayCaption: !displayCaption,
                                })
                            }
                        />

                        {displayCaption && styleNumber === "0" && (
                            <ToggleControl
                                label={__("Display Caption on Hover", "essential-blocks")}
                                checked={captionOnHover}
                                onChange={() =>
                                    handleBlockDefault({
                                        captionOnHover: !captionOnHover,
                                    })
                                }
                            />
                        )}

                        <ResponsiveRangeController
                            baseLabel={__("Columns", "essential-blocks")}
                            controlName={GRID_COLUMNS}
                            resRequiredProps={resRequiredProps}
                            units={[]}
                            min={1}
                            max={8}
                            step={1}
                        />

                        <ResponsiveRangeController
                            baseLabel={__("Image Gap (px)", "essential-blocks")}
                            controlName={IMAGE_GAP}
                            resRequiredProps={resRequiredProps}
                            units={[]}
                            min={0}
                            max={100}
                            step={1}
                        />

                        <ToggleControl
                            label={__("Disable Light Box", "essential-blocks")}
                            checked={disableLightBox}
                            onChange={() =>
                                handleBlockDefault({
                                    disableLightBox: !disableLightBox,
                                })
                            }
                        />
                    </PanelBody>
                    <PanelBody title={__("Filter", "essential-blocks")} initialOpen={false}>
                        <ToggleControl
                            label={__("Enable Filter", "essential-blocks")}
                            checked={enableFilter}
                            onChange={() =>
                                handleBlockDefault({
                                    enableFilter: !enableFilter,
                                })
                            }
                        />
                    </PanelBody>
                    {/* Styles */}
                    <PanelBody title={__("Image Styles", "essential-blocks")} initialOpen={false}>
                        {layouts === "grid" && (
                            <>
                                {!enableFilter && (
                                    <BaseControl label={__("Alignment", "essential-blocks")}>
                                        <ButtonGroup>
                                            {FLEX_ALIGN.map((item, index) => (
                                                <Button
                                                    key={index}
                                                    isPrimary={imageAlignment === item.value}
                                                    isSecondary={imageAlignment !== item.value}
                                                    onClick={() =>
                                                        handleBlockDefault({
                                                            imageAlignment: item.value,
                                                        })
                                                    }
                                                >
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>
                                    </BaseControl>
                                )}

                                <BaseControl label={__("Image Size", "essential-blocks")}>
                                    <ButtonGroup>
                                        {IMAGE_SIZE_TYPE.map((item, index) => (
                                            <Button
                                                key={index}
                                                isPrimary={imageSizeType === item.value}
                                                isSecondary={imageSizeType !== item.value}
                                                onClick={() =>
                                                    handleBlockDefault({
                                                        imageSizeType: item.value,
                                                    })
                                                }
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>

                                {imageSizeType === "fixed" && (
                                    <>
                                        <ResponsiveRangeController
                                            baseLabel={__("Image Height", "essential-blocks")}
                                            controlName={IMAGE_HEIGHT}
                                            resRequiredProps={resRequiredProps}
                                            units={IMAGE_UNIT_TYPES}
                                            min={0}
                                            max={500}
                                            step={1}
                                        />
                                        <ResponsiveRangeController
                                            baseLabel={__("Image Width", "essential-blocks")}
                                            controlName={IMAGE_WIDTH}
                                            resRequiredProps={resRequiredProps}
                                            units={IMAGE_UNIT_TYPES}
                                            min={0}
                                            max={500}
                                            step={1}
                                        />
                                    </>
                                )}

                                {imageSizeType === "adaptive" && (
                                    <>
                                        <ResponsiveRangeController
                                            baseLabel={__("Image Max Height", "essential-blocks")}
                                            controlName={IMAGE_MAX_HEIGHT}
                                            resRequiredProps={resRequiredProps}
                                            units={IMAGE_UNIT_TYPES}
                                            min={0}
                                            max={500}
                                            step={1}
                                        />
                                        <ResponsiveRangeController
                                            baseLabel={__("Image Max Width", "essential-blocks")}
                                            controlName={IMAGE_MAX_WIDTH}
                                            resRequiredProps={resRequiredProps}
                                            units={IMAGE_UNIT_TYPES}
                                            min={0}
                                            max={500}
                                            step={1}
                                        />
                                    </>
                                )}
                            </>
                        )}

                        <PanelBody title={__("Border", "essential-blocks")} initialOpen={true}>
                            <BorderShadowControl
                                controlName={IMAGE_BORDER_SHADOW}
                                resRequiredProps={resRequiredProps}
                                noShadow
                                // noBorder
                            />
                        </PanelBody>
                    </PanelBody>

                    {styleNumber === "2" && (
                        <PanelBody title={__("Overlay Styles", "essential-blocks")} initialOpen={false}>
                            <ColorControl
                                label={__("Overlay Color", "essential-blocks")}
                                color={overlayColor}
                                onChange={(color) => handleBlockDefault({ overlayColor: color })}
                            />
                        </PanelBody>
                    )}
                    {displayCaption && (
                        <PanelBody title={__("Caption Styles", "essential-blocks")}>
                            <ColorControl
                                label={__("Text Color", "essential-blocks")}
                                color={captionColor}
                                onChange={(newColor) =>
                                    handleBlockDefault({
                                        captionColor: newColor,
                                    })
                                }
                            />

                            <ColorControl
                                label={__("Background Color", "essential-blocks")}
                                color={captionBGColor}
                                onChange={(backgroundColor) =>
                                    handleBlockDefault({
                                        captionBGColor: backgroundColor,
                                    })
                                }
                            />

                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={CAPTION_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
                            />

                            <ResponsiveRangeController
                                baseLabel={__("Width", "essential-blocks")}
                                controlName={CAPTION_WIDTH}
                                resRequiredProps={resRequiredProps}
                                units={UNIT_TYPES}
                                min={0}
                                max={300}
                                step={1}
                            />

                            {displayCaption && (
                                <>
                                    <BaseControl label={__("Text Align", "essential-blocks")}>
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
                                    </BaseControl>

                                    <BaseControl label={__("Horizontal Align", "essential-blocks")}>
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
                                    </BaseControl>

                                    <BaseControl label={__("Vertical Align", "essential-blocks")}>
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
                                    </BaseControl>

                                    <ResponsiveDimensionsControl
                                        resRequiredProps={resRequiredProps}
                                        controlName={CAPTION_MARGIN}
                                        baseLabel="Margin"
                                    />

                                    <ResponsiveDimensionsControl
                                        resRequiredProps={resRequiredProps}
                                        controlName={CAPTION_PADDING}
                                        baseLabel="Padding"
                                    />
                                </>
                            )}
                        </PanelBody>
                    )}

                    {enableFilter && (
                        <PanelBody title={__("Filter", "essential-blocks")} initialOpen={false}>
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={FILTER_MARGIN}
                                baseLabel="Margin"
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={FILTER_PADDING}
                                baseLabel="Padding"
                            />
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={FILTER_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
                            />
                            <BaseControl>
                                <ButtonGroup>
                                    {NORMAL_HOVER.map((item, index) => (
                                        <Button
                                            key={index}
                                            isPrimary={filterColorType === item.value}
                                            isSecondary={filterColorType !== item.value}
                                            onClick={() =>
                                                handleBlockDefault({
                                                    filterColorType: item.value,
                                                })
                                            }
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>

                                {filterColorType === "normal" && (
                                    <>
                                        <ColorControl
                                            label={__("Color", "essential-blocks")}
                                            color={filterColor}
                                            onChange={(newColor) =>
                                                handleBlockDefault({
                                                    filterColor: newColor,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__("Background Color", "essential-blocks")}
                                            color={filterBGColor}
                                            onChange={(newColor) =>
                                                handleBlockDefault({
                                                    filterBGColor: newColor,
                                                })
                                            }
                                        />
                                    </>
                                )}

                                {filterColorType === "hover" && (
                                    <>
                                        <ColorControl
                                            label={__("Color", "essential-blocks")}
                                            color={filterHoverColor}
                                            onChange={(newColor) =>
                                                handleBlockDefault({
                                                    filterHoverColor: newColor,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__("Background Color", "essential-blocks")}
                                            color={filterHoverBGColor}
                                            onChange={(newColor) =>
                                                handleBlockDefault({
                                                    filterHoverBGColor: newColor,
                                                })
                                            }
                                        />
                                    </>
                                )}

                                {filterColorType === "active" && (
                                    <>
                                        <ColorControl
                                            label={__("Color", "essential-blocks")}
                                            color={filterActColor}
                                            onChange={(newColor) =>
                                                handleBlockDefault({
                                                    filterActColor: newColor,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__("Background Color", "essential-blocks")}
                                            color={filterActBGColor}
                                            onChange={(newColor) =>
                                                handleBlockDefault({
                                                    filterActBGColor: newColor,
                                                })
                                            }
                                        />
                                    </>
                                )}
                            </BaseControl>

                            <PanelRow>Button Border & Shadow</PanelRow>
                            <BorderShadowControl
                                controlName={FILTER_BORDER_SHADOW}
                                resRequiredProps={resRequiredProps}
                                // noShadow
                                // noBorder
                            />
                        </PanelBody>
                    )}

                    {/* Advanced */}
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

export default ImageGallery;
