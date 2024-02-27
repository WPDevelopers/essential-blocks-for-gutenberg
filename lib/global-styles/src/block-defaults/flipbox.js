/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { MediaUpload } from "@wordpress/block-editor";
import {
    PanelBody,
    PanelRow,
    SelectControl,
    Button,
    TextControl,
    RangeControl,
    ToggleControl,
    ButtonGroup,
    BaseControl,
    TabPanel,
} from "@wordpress/components";

/*
 * Internal dependencies
 */
const {
    ImageAvatar,
    BorderShadowControl,
    getButtonClasses,
    ResponsiveDimensionsControl,
    ResponsiveRangeController,
    TypographyDropdown,
    ColorControl,
    BackgroundControl,
    EBIconPicker,
} = window.EBControls;

import objAttributes from "../../../../blocks/flipbox/src/attributes";
import {
    BUTTON_STYLES,
    FLIPBOX_SIDES,
    FLIPBOX_TYPE,
    ICON_POSITIONS,
    ICON_TYPE,
    LINK_TYPE,
    FRONT_IMAGE_UNITS,
    CONTENT_POSITION,
} from "../../../../blocks/flipbox/src/constants";

import {
    flipboxFrontWrapper,
    flipboxBackWrapper,
} from "../../../../blocks/flipbox/src/constants/backgroundsConstants";
import {
    dimensionsMargin,
    dimensionsPadding,
    buttonPadding,
    frontIconMargin,
    frontIconPadding,
    backIconMargin,
    backIconPadding,
    frontTitlePadding,
    backTitlePadding,
    frontContentPadding,
    backContentPadding,
    frontImgPadding,
    backImgPadding,
    frontItemPadding,
    backItemPadding,
} from "../../../../blocks/flipbox/src/constants/dimensionsNames";
import {
    borderShadow,
    borderShadowBtn,
    borderShadowFrontIcon,
    borderShadowBackIcon,
} from "../../../../blocks/flipbox/src/constants/borderShadowConstants";
import {
    typoPrefix_title,
    typoPrefix_content,
} from "../../../../blocks/flipbox/src/constants/typographyPrefixConstants";
import {
    boxHeightAttr,
    boxWidthAttr,
    boxFrontIconSizeAttr,
    boxBackIconSizeAttr,
    buttonIconSizeAttr,
    frontImgSizeAttr,
    backImgSizeAttr,
    frontImgRadiusAttr,
    backImgRadiusAttr,
} from "../../../../blocks/flipbox/src/constants/rangeNames";

function Flipbox(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        flipType,
        selectedSide,
        frontIconOrImage,
        frontIcon,
        frontImageUrl,
        frontImageId,
        backIconOrImage,
        backIcon,
        backImageUrl,
        backImageId,
        showFrontTitle,
        showFrontContent,
        showBackTitle,
        showBackContent,
        linkType,
        buttonText,
        buttonIcon,
        buttonIconPos,
        link,
        frontTitleColor,
        backTitleColor,
        frontContentColor,
        backContentColor,
        frontIconColor,
        backIconColor,
        buttonStyle,
        buttonBackground,
        buttonColor,
        frontIconBackground,
        backIconBackground,
        transitionSpeed,
        displayButtonIcon,
        contentPosition,
        linkOpenNewTab,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                flipboxStyle: "default",
                isHover: false,
                flipType: "flip-left",
                selectedSide: "front",
                frontIconOrImage: "icon",
                frontIcon: "fab fa-rev",
                frontImageId: null,
                backIconOrImage: "icon",
                backIcon: "fab fa-rev",
                backImageId: null,
                showFrontTitle: true,
                frontTitle: "Front Title Here",
                showFrontContent: true,
                frontContent: "Front Content Here",
                showBackTitle: true,
                backTitle: "Back Title Here",
                showBackContent: true,
                backContent: "Back Content Here",
                linkType: "box",
                buttonText: "Click Here",
                buttonIconPos: "before",
                buttonStyle: "styleOne",
                buttonClasses: "",
                backIconBackground: "",
                transitionSpeed: "",
                displayButtonIcon: false,
                align: "center",
                contentPosition: "center",
                linkOpenNewTab: false,
                [`${frontTitlePadding}Unit`]: "px",
                [`${frontTitlePadding}isLinked`]: true,
                [`${frontContentPadding}Unit`]: "px",
                [`${frontContentPadding}isLinked`]: true,
                [`${frontItemPadding}Unit`]: "px",
                [`${frontItemPadding}isLinked`]: true,
                [`${backTitlePadding}Unit`]: "px",
                [`${backTitlePadding}isLinked`]: true,
                [`${backContentPadding}Unit`]: "px",
                [`${backContentPadding}isLinked`]: true,
                [`${backItemPadding}Unit`]: "px",
                [`${backItemPadding}isLinked`]: true,
                [`${frontIconMargin}Unit`]: "px",
                [`${frontIconMargin}isLinked`]: true,
                [`${frontIconPadding}Unit`]: "px",
                [`${frontIconPadding}isLinked`]: true,
                [`${backIconMargin}Unit`]: "px",
                [`${backIconMargin}isLinked`]: true,
                [`${backIconPadding}Unit`]: "px",
                [`${backIconPadding}isLinked`]: true,
                [`${borderShadowFrontIcon}Bdr_Unit`]: "px",
                [`${borderShadowFrontIcon}Bdr_isLinked`]: true,
                [`${borderShadowFrontIcon}Rds_Unit`]: "px",
                [`${borderShadowFrontIcon}Rds_isLinked`]: true,
                [`${borderShadowFrontIcon}BorderType`]: "normal",
                [`${borderShadowFrontIcon}shadowType`]: "normal",
                [`${borderShadowBackIcon}Bdr_Unit`]: "px",
                [`${borderShadowBackIcon}Bdr_isLinked`]: true,
                [`${borderShadowBackIcon}Rds_Unit`]: "px",
                [`${borderShadowBackIcon}Rds_isLinked`]: true,
                [`${borderShadowBackIcon}BorderType`]: "normal",
                [`${borderShadowBackIcon}shadowType`]: "normal",
                [`${dimensionsMargin}Unit`]: "px",
                [`${dimensionsMargin}isLinked`]: true,
                [`${dimensionsPadding}Unit`]: "px",
                [`${dimensionsPadding}isLinked`]: true,
                [`${borderShadow}Bdr_Unit`]: "px",
                [`${borderShadow}Bdr_isLinked`]: true,
                [`${borderShadow}Rds_Unit`]: "px",
                [`${borderShadow}Rds_isLinked`]: true,
                [`${borderShadow}BorderType`]: "normal",
                [`${borderShadow}shadowType`]: "normal",
                [`${boxFrontIconSizeAttr}Unit`]: "px",
                [`${boxBackIconSizeAttr}Unit`]: "px",
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

    // Genereate different button styles
    const handleButtonStyle = (newStyle) => {
        const buttonStyle = newStyle;
        const buttonClasses = getButtonClasses(newStyle);

        handleBlockDefault({ buttonStyle, buttonClasses });
    };

    return (
        <>
            {isDefaultSet && (
                <div className="eb-panel-control">
                    <PanelBody
                        title={__("Flibbox Side", "essential-blocks")}
                        initialOpen={true}
                    >
                        <BaseControl
                            label={__("Selected Side", "essential-blocks")}
                        >
                            <ButtonGroup id="eb-flipbox-sides">
                                {FLIPBOX_SIDES.map((item, index) => (
                                    <Button
                                        key={index}
                                        isPrimary={selectedSide === item.value}
                                        isSecondary={
                                            selectedSide !== item.value
                                        }
                                        onClick={() =>
                                            handleBlockDefault({
                                                selectedSide: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                    </PanelBody>
                    <PanelBody
                        title={__("Flipbox Settings", "essential-blocks")}
                        initialOpen={true}
                    >
                        <BaseControl
                            label={__("Alignment", "essential-blocks")}
                            id="eb-button-group-alignment"
                        >
                            <ButtonGroup id="eb-button-group-alignment">
                                {CONTENT_POSITION.map((item, index) => (
                                    <Button
                                        key={index}
                                        isPrimary={
                                            contentPosition === item.value
                                        }
                                        isSecondary={
                                            contentPosition !== item.value
                                        }
                                        onClick={() =>
                                            handleBlockDefault({
                                                contentPosition: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <ResponsiveRangeController
                            baseLabel={__("Box Height", "essential-blocks")}
                            controlName={boxHeightAttr}
                            resRequiredProps={resRequiredProps}
                            min={310}
                            max={600}
                            step={1}
                            noUnits
                        />

                        <ResponsiveRangeController
                            baseLabel={__("Box Width", "essential-blocks")}
                            controlName={boxWidthAttr}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={600}
                            step={1}
                            noUnits
                        />

                        <SelectControl
                            label={__("Flipbox Type", "essential-blocks")}
                            value={flipType}
                            options={FLIPBOX_TYPE}
                            onChange={(newStyle) =>
                                handleBlockDefault({ flipType: newStyle })
                            }
                        />

                        <RangeControl
                            label={__(
                                "Transition Speed(millisecond)",
                                "essential-blocks"
                            )}
                            value={transitionSpeed}
                            onChange={(newValue) => {
                                let transitionSpeed = newValue;
                                handleBlockDefault({ transitionSpeed });
                            }}
                            min={0}
                            max={5000}
                            step={500}
                        />

                        {selectedSide === "front" && (
                            <>
                                <BaseControl
                                    label={__("Icon Type", "essential-blocks")}
                                    id="eb-flipbox-icon-type"
                                >
                                    <ButtonGroup id="eb-flipbox-icon-type">
                                        {ICON_TYPE.map((item, index) => (
                                            <Button
                                                key={index}
                                                isPrimary={
                                                    frontIconOrImage ===
                                                    item.value
                                                }
                                                isSecondary={
                                                    frontIconOrImage !==
                                                    item.value
                                                }
                                                onClick={() =>
                                                    handleBlockDefault({
                                                        frontIconOrImage:
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

                        {selectedSide === "back" && (
                            <>
                                <BaseControl
                                    label={__("Icon Type", "essential-blocks")}
                                    id="eb-flipbox-icon-type"
                                >
                                    <ButtonGroup id="eb-flipbox-icon-type">
                                        {ICON_TYPE.map((item, index) => (
                                            <Button
                                                key={index}
                                                isPrimary={
                                                    backIconOrImage ===
                                                    item.value
                                                }
                                                isSecondary={
                                                    backIconOrImage !==
                                                    item.value
                                                }
                                                onClick={() =>
                                                    handleBlockDefault({
                                                        backIconOrImage:
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
                    </PanelBody>
                    {selectedSide === "front" && frontIconOrImage === "icon" && (
                        <PanelBody
                            title={__(
                                "Front Icon Settings",
                                "essential-blocks"
                            )}
                            initialOpen={false}
                        >
                            <>
                                <EBIconPicker
                                    value={frontIcon}
                                    onChange={(frontIcon) =>
                                        handleBlockDefault({ frontIcon })
                                    }
                                    title={__("Select Front Icon", "essential-blocks")}
                                />
                                {frontIcon && (
                                    <ResponsiveRangeController
                                        baseLabel={__(
                                            "Icon Size",
                                            "essential-blocks"
                                        )}
                                        controlName={boxFrontIconSizeAttr}
                                        resRequiredProps={resRequiredProps}
                                        min={8}
                                        max={100}
                                    />
                                )}
                            </>
                        </PanelBody>
                    )}
                    {selectedSide === "front" && frontIconOrImage === "image" && (
                        <PanelBody
                            title={__(
                                "Front Image Settings",
                                "essential-blocks"
                            )}
                            initialOpen={false}
                        >
                            <BaseControl
                                label={__("Flipbox Image", "essential-blocks")}
                                id="eb-flipbox-front-image"
                            >
                                {frontImageUrl ? (
                                    <>
                                        <ImageAvatar
                                            imageUrl={frontImageUrl}
                                            onDeleteImage={() =>
                                                handleBlockDefault({
                                                    frontImageUrl: null,
                                                })
                                            }
                                        />

                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Image Size",
                                                "essential-blocks"
                                            )}
                                            controlName={frontImgSizeAttr}
                                            resRequiredProps={resRequiredProps}
                                            units={FRONT_IMAGE_UNITS}
                                            min={0}
                                            max={300}
                                            step={1}
                                        />

                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Image Radius",
                                                "essential-blocks"
                                            )}
                                            controlName={frontImgRadiusAttr}
                                            resRequiredProps={resRequiredProps}
                                            units={FRONT_IMAGE_UNITS}
                                            min={0}
                                            max={100}
                                        />
                                    </>
                                ) : (
                                    <MediaUpload
                                        onSelect={(media) =>
                                            handleBlockDefault({
                                                frontImageId: media.id,
                                                frontImageUrl: media.url,
                                            })
                                        }
                                        type="image"
                                        value={frontImageId}
                                        render={({ open }) =>
                                            !frontImageUrl && (
                                                <Button
                                                    className="eb-flipbox-upload-button"
                                                    label={__(
                                                        "Upload Image",
                                                        "essential-blocks"
                                                    )}
                                                    icon="format-image"
                                                    onClick={open}
                                                />
                                            )
                                        }
                                    />
                                )}
                            </BaseControl>
                        </PanelBody>
                    )}
                    {selectedSide === "back" && backIconOrImage === "icon" && (
                        <PanelBody
                            title={__("Back Icon Settings", "essential-blocks")}
                            initialOpen={false}
                        >
                            <>
                                <EBIconPicker
                                    value={backIcon}
                                    onChange={(backIcon) =>
                                        handleBlockDefault({ backIcon })
                                    }
                                    title={__("Select Back Icon", "essential-blocks")}
                                />
                                {backIcon && (
                                    <ResponsiveRangeController
                                        baseLabel={__(
                                            "Icon Size",
                                            "essential-blocks"
                                        )}
                                        controlName={boxBackIconSizeAttr}
                                        resRequiredProps={resRequiredProps}
                                        min={8}
                                        max={100}
                                    />
                                )}
                            </>
                        </PanelBody>
                    )}
                    {selectedSide === "back" && backIconOrImage === "image" && (
                        <PanelBody
                            title={__(
                                "Back Image Settings",
                                "essential-blocks"
                            )}
                            initialOpen={false}
                        >
                            <BaseControl
                                label={__("Flipbox Image", "essential-blocks")}
                            >
                                {backImageUrl ? (
                                    <>
                                        <ImageAvatar
                                            imageUrl={backImageUrl}
                                            onDeleteImage={() =>
                                                handleBlockDefault({
                                                    backImageUrl: null,
                                                })
                                            }
                                        />
                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Image Size",
                                                "essential-blocks"
                                            )}
                                            controlName={backImgSizeAttr}
                                            resRequiredProps={resRequiredProps}
                                            units={FRONT_IMAGE_UNITS}
                                            min={0}
                                            max={300}
                                        />

                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Image Radius",
                                                "essential-blocks"
                                            )}
                                            controlName={backImgRadiusAttr}
                                            resRequiredProps={resRequiredProps}
                                            units={FRONT_IMAGE_UNITS}
                                            min={0}
                                            max={100}
                                        />
                                    </>
                                ) : (
                                    <MediaUpload
                                        onSelect={(media) =>
                                            handleBlockDefault({
                                                backImageId: media.id,
                                                backImageUrl: media.url,
                                            })
                                        }
                                        type="image"
                                        value={backImageId}
                                        render={({ open }) =>
                                            !backImageUrl && (
                                                <Button
                                                    className="eb-flipbox-upload-button"
                                                    label={__(
                                                        "Upload Image",
                                                        "essential-blocks"
                                                    )}
                                                    icon="format-image"
                                                    onClick={open}
                                                />
                                            )
                                        }
                                    />
                                )}
                            </BaseControl>
                        </PanelBody>
                    )}
                    <PanelBody
                        title={__("Flipbox Content", "essential-blocks")}
                        initialOpen={false}
                    >
                        {selectedSide === "front" && (
                            <>
                                <ToggleControl
                                    label={__(
                                        "Show Title?",
                                        "essential-blocks"
                                    )}
                                    checked={showFrontTitle}
                                    onChange={() => {
                                        handleBlockDefault({
                                            showFrontTitle: !showFrontTitle,
                                        });
                                    }}
                                />
                                <ToggleControl
                                    label={__(
                                        "Show Content?",
                                        "essential-blocks"
                                    )}
                                    checked={showFrontContent}
                                    onChange={() => {
                                        handleBlockDefault({
                                            showFrontContent: !showFrontContent,
                                        });
                                    }}
                                />
                            </>
                        )}
                        {selectedSide === "back" && (
                            <>
                                <ToggleControl
                                    label={__(
                                        "Show Title?",
                                        "essential-blocks"
                                    )}
                                    checked={showBackTitle}
                                    onChange={() => {
                                        handleBlockDefault({
                                            showBackTitle: !showBackTitle,
                                        });
                                    }}
                                />
                                <ToggleControl
                                    label={__(
                                        "Show Content?",
                                        "essential-blocks"
                                    )}
                                    checked={showBackContent}
                                    onChange={() => {
                                        handleBlockDefault({
                                            showBackContent: !showBackContent,
                                        });
                                    }}
                                />
                            </>
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Link Settings", "essential-blocks")}
                        initialOpen={false}
                    >
                        <PanelRow>
                            <em>
                                {__(
                                    "Note: Link settings will only work on back side.",
                                    "essential-blocks"
                                )}
                            </em>
                        </PanelRow>
                        <BaseControl
                            label={__("Link Type", "essential-blocks")}
                            id="eb-flipbox-link-type"
                        >
                            <ButtonGroup id="eb-flipbox-link-type">
                                {LINK_TYPE.map((item, index) => (
                                    <Button
                                        key={index}
                                        isPrimary={linkType === item.value}
                                        isSecondary={linkType !== item.value}
                                        onClick={() => {
                                            handleBlockDefault({
                                                linkType: item.value,
                                            }),
                                                handleButtonStyle(buttonStyle);
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>

                        <TextControl
                            label={__("Link", "essential-blocks")}
                            value={link}
                            placeholder="https://your-link.com"
                            onChange={(newLink) =>
                                handleBlockDefault({ link: newLink })
                            }
                        />
                        <ToggleControl
                            label={__("Open in New Tab", "essential-blocks")}
                            checked={linkOpenNewTab}
                            onChange={() =>
                                handleBlockDefault({
                                    linkOpenNewTab: !linkOpenNewTab,
                                })
                            }
                        />

                        {linkType === "button" && (
                            <>
                                <TextControl
                                    label={__(
                                        "Button Text",
                                        "essential-blocks"
                                    )}
                                    value={buttonText}
                                    onChange={(newText) =>
                                        handleBlockDefault({
                                            buttonText: newText,
                                        })
                                    }
                                />
                                <SelectControl
                                    label={__(
                                        "Button Style",
                                        "essential-blocks"
                                    )}
                                    value={buttonStyle}
                                    options={BUTTON_STYLES}
                                    onChange={(newStyle) =>
                                        handleButtonStyle(newStyle)
                                    }
                                />
                            </>
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("Flipbox Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        {selectedSide === "front" && (
                            <>
                                <ColorControl
                                    label={__(
                                        "Front Title",
                                        "essential-blocks"
                                    )}
                                    color={frontTitleColor}
                                    onChange={(frontTitleColor) =>
                                        handleBlockDefault({ frontTitleColor })
                                    }
                                />
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={frontTitlePadding}
                                    baseLabel="Front Title Padding"
                                />
                                <ColorControl
                                    label={__(
                                        "Front Content",
                                        "essential-blocks"
                                    )}
                                    color={frontContentColor}
                                    onChange={(frontContentColor) =>
                                        handleBlockDefault({
                                            frontContentColor,
                                        })
                                    }
                                />
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={frontContentPadding}
                                    baseLabel="Padding"
                                />
                                <BaseControl>
                                    <h3 className="eb-control-title">
                                        {__(
                                            "Front Side Background",
                                            "essential-blocks"
                                        )}
                                    </h3>
                                </BaseControl>
                                <BackgroundControl
                                    controlName={flipboxFrontWrapper}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={frontItemPadding}
                                    baseLabel="Items Padding"
                                />
                            </>
                        )}

                        {selectedSide === "back" && (
                            <>
                                <ColorControl
                                    label={__(
                                        "Back Title Color",
                                        "essential-blocks"
                                    )}
                                    color={backTitleColor}
                                    onChange={(backTitleColor) =>
                                        handleBlockDefault({ backTitleColor })
                                    }
                                />
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={backTitlePadding}
                                    baseLabel="Back Title Padding"
                                />
                                <ColorControl
                                    label={__(
                                        "Back Content Color",
                                        "essential-blocks"
                                    )}
                                    color={backContentColor}
                                    onChange={(backContentColor) =>
                                        handleBlockDefault({ backContentColor })
                                    }
                                />
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={backContentPadding}
                                    baseLabel="Padding"
                                />
                                <BaseControl>
                                    <h3 className="eb-control-title">
                                        {__(
                                            "Back Side Background",
                                            "essential-blocks"
                                        )}
                                    </h3>
                                </BaseControl>
                                <BackgroundControl
                                    controlName={flipboxBackWrapper}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={backItemPadding}
                                    baseLabel="Items Padding"
                                />
                            </>
                        )}
                    </PanelBody>
                    {selectedSide === "front" && frontIconOrImage === "icon" && (
                        <PanelBody
                            title={__("Front Icon Style", "essential-blocks")}
                            initialOpen={false}
                        >
                            <>
                                {frontIcon && (
                                    <>
                                        <ColorControl
                                            label={__(
                                                "Icon Color",
                                                "essential-blocks"
                                            )}
                                            color={frontIconColor}
                                            onChange={(frontIconColor) =>
                                                handleBlockDefault({
                                                    frontIconColor,
                                                })
                                            }
                                        />

                                        <ColorControl
                                            label={__(
                                                "Icon Background",
                                                "essential-blocks"
                                            )}
                                            color={frontIconBackground}
                                            onChange={(frontIconBackground) =>
                                                handleBlockDefault({
                                                    frontIconBackground,
                                                })
                                            }
                                        />

                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Margin & Padding",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            className="frontIconMargin"
                                            controlName={frontIconMargin}
                                            baseLabel="Margin"
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            className="frontIconPadding"
                                            controlName={frontIconPadding}
                                            baseLabel="Padding"
                                        />
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Border",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <BorderShadowControl
                                            controlName={borderShadowFrontIcon}
                                            resRequiredProps={resRequiredProps}
                                            noShadow
                                        />
                                    </>
                                )}
                            </>
                        </PanelBody>
                    )}
                    {selectedSide === "front" && frontIconOrImage === "image" && (
                        <PanelBody
                            title={__("Front Image Style", "essential-blocks")}
                            initialOpen={false}
                        >
                            <>
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={frontImgPadding}
                                    baseLabel="Padding"
                                />
                            </>
                        </PanelBody>
                    )}
                    {selectedSide === "back" && backIconOrImage === "icon" && (
                        <PanelBody
                            title={__("Back Icon Style", "essential-blocks")}
                            initialOpen={false}
                        >
                            <>
                                {backIcon && (
                                    <>
                                        <ColorControl
                                            label={__(
                                                "Icon Color",
                                                "essential-blocks"
                                            )}
                                            color={backIconColor}
                                            onChange={(backIconColor) =>
                                                handleBlockDefault({
                                                    backIconColor,
                                                })
                                            }
                                        />

                                        <ColorControl
                                            label={__(
                                                "Icon Background",
                                                "essential-blocks"
                                            )}
                                            color={backIconBackground}
                                            onChange={(backIconBackground) =>
                                                handleBlockDefault({
                                                    backIconBackground,
                                                })
                                            }
                                        />

                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Margin & Padding",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            className="backIconMargin"
                                            controlName={backIconMargin}
                                            baseLabel="Margin"
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            className="backIconPadding"
                                            controlName={backIconPadding}
                                            baseLabel="Padding"
                                        />
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Border",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <BorderShadowControl
                                            controlName={borderShadowBackIcon}
                                            resRequiredProps={resRequiredProps}
                                            noShadow
                                        />
                                    </>
                                )}
                            </>
                        </PanelBody>
                    )}
                    {selectedSide === "back" && backIconOrImage === "image" && (
                        <PanelBody
                            title={__("Back Image Style", "essential-blocks")}
                            initialOpen={false}
                        >
                            <>
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    controlName={backImgPadding}
                                    baseLabel="Padding"
                                />
                            </>
                        </PanelBody>
                    )}
                    <PanelBody
                        title={__("Typography", "essential-blocks")}
                        initialOpen={false}
                    >
                        <TypographyDropdown
                            baseLabel={__("Title", "essential-blocks")}
                            typographyPrefixConstant={typoPrefix_title}
                            resRequiredProps={resRequiredProps}
                        />

                        <TypographyDropdown
                            baseLabel={__("Content", "essential-blocks")}
                            typographyPrefixConstant={typoPrefix_content}
                            resRequiredProps={resRequiredProps}
                        />
                    </PanelBody>
                    {linkType === "button" && buttonStyle === "custom" && (
                        <PanelBody
                            title={__("Button Style", "essential-blocks")}
                        >
                            <>
                                <ColorControl
                                    label={__("Background", "essential-blocks")}
                                    color={buttonBackground}
                                    onChange={(buttonBackground) =>
                                        handleBlockDefault({ buttonBackground })
                                    }
                                />
                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={buttonColor}
                                    onChange={(buttonColor) =>
                                        handleBlockDefault({ buttonColor })
                                    }
                                />
                                <ResponsiveRangeController
                                    baseLabel={__(
                                        "Button Size",
                                        "essential-blocks"
                                    )}
                                    controlName={buttonIconSizeAttr}
                                    resRequiredProps={resRequiredProps}
                                    min={20}
                                    max={600}
                                />
                                <BaseControl>
                                    <h3 className="eb-control-title">
                                        {__("Padding", "essential-blocks")}
                                    </h3>
                                </BaseControl>
                                <ResponsiveDimensionsControl
                                    resRequiredProps={resRequiredProps}
                                    className="forWrapperPadding"
                                    controlName={buttonPadding}
                                    baseLabel="Padding"
                                />
                                <BaseControl>
                                    <h3 className="eb-control-title">
                                        {__(
                                            "Border & Shadow",
                                            "essential-blocks"
                                        )}
                                    </h3>
                                </BaseControl>
                                <BorderShadowControl
                                    controlName={borderShadowBtn}
                                    resRequiredProps={resRequiredProps}
                                />
                                <BaseControl>
                                    <h3 className="eb-control-title">
                                        {__("Button Icon", "essential-blocks")}
                                    </h3>
                                </BaseControl>
                                <ToggleControl
                                    label={__(
                                        "Display Button Icon",
                                        "essential-blocks"
                                    )}
                                    checked={displayButtonIcon}
                                    onChange={() =>
                                        handleBlockDefault({
                                            displayButtonIcon: !displayButtonIcon,
                                        })
                                    }
                                />
                                {displayButtonIcon && (
                                    <EBIconPicker
                                        value={buttonIcon}
                                        onChange={(buttonIcon) =>
                                            handleBlockDefault({ buttonIcon })
                                        }
                                        title={__("Select Icon", "essential-blocks")}
                                    />
                                )}
                                {displayButtonIcon && buttonIcon && (
                                    <>
                                        <BaseControl
                                            label={__(
                                                "Icon Position",
                                                "essential-blocks"
                                            )}
                                            id="eb-flipbox-icon-pos"
                                        >
                                            <ButtonGroup id="eb-flipbox-icon-pos">
                                                {ICON_POSITIONS.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            style={{
                                                                zIndex: 0,
                                                            }} // ? Add this style to fix icon list and primary button issue
                                                            // isLarge
                                                            isSecondary={
                                                                buttonIconPos !==
                                                                item.value
                                                            }
                                                            isPrimary={
                                                                buttonIconPos ===
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                handleBlockDefault(
                                                                    {
                                                                        buttonIconPos:
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
                            </>
                        </PanelBody>
                    )}
                    <PanelBody
                        title={__(
                            "Wrapper Margin & Padding",
                            "essential-blocks"
                        )}
                        initialOpen={false}
                    >
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            className="forWrapperMargin"
                            controlName={dimensionsMargin}
                            baseLabel="Margin"
                            disableLeftRight={true}
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            className="forWrapperPadding"
                            controlName={dimensionsPadding}
                            baseLabel="Padding"
                        />
                    </PanelBody>
                    <PanelBody
                        title={__(
                            "Wrapper Border & Shadow",
                            "essential-blocks"
                        )}
                        initialOpen={false}
                    >
                        <BorderShadowControl
                            controlName={borderShadow}
                            resRequiredProps={resRequiredProps}
                        />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default Flipbox;
