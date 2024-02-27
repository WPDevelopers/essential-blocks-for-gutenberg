/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { applyFilters } from "@wordpress/hooks";
import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
import {
    PanelBody,
    PanelRow,
    SelectControl,
    Button,
    TextControl,
    TextareaControl,
    RangeControl,
    ToggleControl,
    ButtonGroup,
    BaseControl,
    TabPanel,
} from "@wordpress/components";

/*
 * Internal dependencies
 */
import objAttributes from "./attributes";
import {
    BUTTON_STYLES,
    FLIPBOX_SIDES,
    FLIPBOX_TYPE,
    ICON_POSITIONS,
    ICON_TYPE,
    LINK_TYPE,
    FRONT_IMAGE_UNITS,
    CONTENT_POSITION,
    FLIP_MODE,
} from "./constants";

const {
    faIcons,
    ImageAvatar,
    BorderShadowControl,
    getButtonClasses,
    ResponsiveDimensionsControl,
    ResponsiveRangeController,
    TypographyDropdown,
    ColorControl,
    BackgroundControl,
    AdvancedControls,
    DynamicInputControl,
    EBIconPicker
} = window.EBControls;

import {
    flipboxFrontWrapper,
    flipboxBackWrapper,
} from "./constants/backgroundsConstants";
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
} from "./constants/dimensionsNames";
import {
    borderShadow,
    borderShadowBtn,
    borderShadowFrontIcon,
    borderShadowBackIcon,
} from "./constants/borderShadowConstants";
import {
    typoPrefix_title,
    typoPrefix_content,
} from "./constants/typographyPrefixConstants";
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
} from "./constants/rangeNames";

const Inspector = ({ attributes, setAttributes }) => {
    const {
        resOption,
        flipType,
        selectedSide,
        frontIconOrImage,
        frontIcon,
        frontImageUrl,
        frontImageAlt,
        frontImageId,
        backIconOrImage,
        backIcon,
        backImageUrl,
        backImageAlt,
        backImageId,
        showFrontTitle,
        frontTitle,
        showFrontContent,
        frontContent,
        showBackTitle,
        backTitle,
        showBackContent,
        backContent,
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
        flipMode,
        isMouseLeaveOn,
    } = attributes;

    // Genereate different button styles
    const handleButtonStyle = (newStyle) => {
        const buttonStyle = newStyle;
        const buttonClasses = getButtonClasses(newStyle);

        setAttributes({ buttonStyle, buttonClasses });
    };

    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
    };

    return (
        <InspectorControls keys="controls">
            <div className="eb-panel-control">
                <TabPanel
                    className="eb-parent-tab-panel"
                    activeClass="active-tab"
                    tabs={[
                        {
                            name: "general",
                            title: __("General", "essential-blocks"),
                            className: "eb-tab general",
                        },
                        {
                            name: "styles",
                            title: __("Style", "essential-blocks"),
                            className: "eb-tab styles",
                        },
                        {
                            name: "advanced",
                            title: __("Advanced", "essential-blocks"),
                            className: "eb-tab advanced",
                        },
                    ]}
                >
                    {(tab) => (
                        <div className={"eb-tab-controls" + tab.name}>
                            {tab.name === "general" && (
                                <>
                                    <PanelBody>
                                        <BaseControl
                                            label={__(
                                                "Selected Side",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup id="eb-flipbox-sides">
                                                {FLIPBOX_SIDES.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                selectedSide ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                selectedSide !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    selectedSide:
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
                                    <PanelBody
                                        title={__(
                                            "Flipbox Settings",
                                            "essential-blocks"
                                        )}
                                        initialOpen={true}
                                    >
                                        <SelectControl
                                            label={__(
                                                "Flip Mode",
                                                "essential-blocks"
                                            )}
                                            value={flipMode}
                                            options={applyFilters(
                                                "eb_flipbox_modes",
                                                FLIP_MODE
                                            )}
                                            onChange={(selected) =>
                                                setAttributes({
                                                    flipMode: selected,
                                                })
                                            }
                                            help={
                                                flipMode === "click"
                                                    ? __(
                                                        "Click mode only available in frontend.",
                                                        "essential-blocks"
                                                    )
                                                    : ""
                                            }
                                        />
                                        {"click" === flipMode && (
                                            <ToggleControl
                                                label={__(
                                                    "Use Mouse Leave when click mode on",
                                                    "essential-blocks"
                                                )}
                                                checked={isMouseLeaveOn}
                                                onChange={() => {
                                                    setAttributes({
                                                        isMouseLeaveOn: !isMouseLeaveOn,
                                                    });
                                                }}
                                            />
                                        )}
                                        <BaseControl
                                            label={__(
                                                "Alignment",
                                                "essential-blocks"
                                            )}
                                            id="eb-button-group-alignment"
                                        >
                                            <ButtonGroup id="eb-button-group-alignment">
                                                {CONTENT_POSITION.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                contentPosition ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                contentPosition !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    contentPosition:
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
                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Box Height",
                                                "essential-blocks"
                                            )}
                                            controlName={boxHeightAttr}
                                            resRequiredProps={resRequiredProps}
                                            min={0}
                                            max={1000}
                                            step={1}
                                            noUnits
                                        />
                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Box Width",
                                                "essential-blocks"
                                            )}
                                            controlName={boxWidthAttr}
                                            resRequiredProps={resRequiredProps}
                                            min={0}
                                            max={600}
                                            step={1}
                                            noUnits
                                        />
                                        <SelectControl
                                            label={__(
                                                "Flipbox Type",
                                                "essential-blocks"
                                            )}
                                            value={flipType}
                                            options={FLIPBOX_TYPE}
                                            onChange={(newStyle) =>
                                                setAttributes({
                                                    flipType: newStyle,
                                                })
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
                                                setAttributes({
                                                    transitionSpeed,
                                                });
                                            }}
                                            min={0}
                                            max={5000}
                                            step={500}
                                        />

                                        {selectedSide === "front" && (
                                            <>
                                                <BaseControl
                                                    label={__(
                                                        "Icon Type",
                                                        "essential-blocks"
                                                    )}
                                                    id="eb-flipbox-icon-type"
                                                >
                                                    <ButtonGroup id="eb-flipbox-icon-type">
                                                        {ICON_TYPE.map(
                                                            (item, index) => (
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
                                                                        setAttributes(
                                                                            {
                                                                                frontIconOrImage:
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

                                        {selectedSide === "back" && (
                                            <>
                                                <BaseControl
                                                    label={__(
                                                        "Icon Type",
                                                        "essential-blocks"
                                                    )}
                                                    id="eb-flipbox-icon-type"
                                                >
                                                    <ButtonGroup id="eb-flipbox-icon-type">
                                                        {ICON_TYPE.map(
                                                            (item, index) => (
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
                                                                        setAttributes(
                                                                            {
                                                                                backIconOrImage:
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
                                    </PanelBody>

                                    {selectedSide === "front" &&
                                        frontIconOrImage === "icon" && (
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
                                                            setAttributes({
                                                                frontIcon,
                                                            })
                                                        }
                                                        title={__("Select Front Icon", "essential-blocks")}
                                                    />
                                                    {frontIcon && (
                                                        <ResponsiveRangeController
                                                            baseLabel={__(
                                                                "Icon Size",
                                                                "essential-blocks"
                                                            )}
                                                            controlName={
                                                                boxFrontIconSizeAttr
                                                            }
                                                            resRequiredProps={
                                                                resRequiredProps
                                                            }
                                                            min={8}
                                                            max={100}
                                                        />
                                                    )}
                                                </>
                                            </PanelBody>
                                        )}

                                    {selectedSide === "front" &&
                                        frontIconOrImage === "image" && (
                                            <PanelBody
                                                title={__(
                                                    "Front Image Settings",
                                                    "essential-blocks"
                                                )}
                                                initialOpen={false}
                                            >
                                                <BaseControl
                                                    label={__(
                                                        "Flipbox Image",
                                                        "essential-blocks"
                                                    )}
                                                    id="eb-flipbox-front-image"
                                                >
                                                    {frontImageUrl ? (
                                                        <>
                                                            <ImageAvatar
                                                                imageUrl={
                                                                    frontImageUrl
                                                                }
                                                                onDeleteImage={() =>
                                                                    setAttributes(
                                                                        {
                                                                            frontImageUrl: null,
                                                                        }
                                                                    )
                                                                }
                                                            />

                                                            <ResponsiveRangeController
                                                                baseLabel={__(
                                                                    "Image Size",
                                                                    "essential-blocks"
                                                                )}
                                                                controlName={
                                                                    frontImgSizeAttr
                                                                }
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                units={
                                                                    FRONT_IMAGE_UNITS
                                                                }
                                                                min={0}
                                                                max={300}
                                                                step={1}
                                                            />

                                                            <ResponsiveRangeController
                                                                baseLabel={__(
                                                                    "Image Radius",
                                                                    "essential-blocks"
                                                                )}
                                                                controlName={
                                                                    frontImgRadiusAttr
                                                                }
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                units={
                                                                    FRONT_IMAGE_UNITS
                                                                }
                                                                min={0}
                                                                max={100}
                                                            />
                                                        </>
                                                    ) : (
                                                        <MediaUpload
                                                            onSelect={(media) =>
                                                                setAttributes({
                                                                    frontImageId:
                                                                        media.id,
                                                                    frontImageUrl:
                                                                        media.url,
                                                                    frontImageAlt: media?.alt
                                                                        ? media.alt
                                                                        : media.caption,
                                                                })
                                                            }
                                                            type="image"
                                                            value={frontImageId}
                                                            render={({
                                                                open,
                                                            }) =>
                                                                !frontImageUrl && (
                                                                    <Button
                                                                        className="eb-flipbox-upload-button"
                                                                        label={__(
                                                                            "Upload Image",
                                                                            "essential-blocks"
                                                                        )}
                                                                        icon="format-image"
                                                                        onClick={
                                                                            open
                                                                        }
                                                                    />
                                                                )
                                                            }
                                                        />
                                                    )}
                                                </BaseControl>
                                            </PanelBody>
                                        )}

                                    {selectedSide === "back" &&
                                        backIconOrImage === "icon" && (
                                            <PanelBody
                                                title={__(
                                                    "Back Icon Settings",
                                                    "essential-blocks"
                                                )}
                                                initialOpen={false}
                                            >
                                                <>
                                                    <EBIconPicker
                                                        value={backIcon}
                                                        onChange={(backIcon) =>
                                                            setAttributes({
                                                                backIcon,
                                                            })
                                                        }
                                                        title={__("Select Back Icon", "essential-blocks")}
                                                    />
                                                    {backIcon && (
                                                        <ResponsiveRangeController
                                                            baseLabel={__(
                                                                "Icon Size",
                                                                "essential-blocks"
                                                            )}
                                                            controlName={
                                                                boxBackIconSizeAttr
                                                            }
                                                            resRequiredProps={
                                                                resRequiredProps
                                                            }
                                                            min={8}
                                                            max={100}
                                                        />
                                                    )}
                                                </>
                                            </PanelBody>
                                        )}

                                    {selectedSide === "back" &&
                                        backIconOrImage === "image" && (
                                            <PanelBody
                                                title={__(
                                                    "Back Image Settings",
                                                    "essential-blocks"
                                                )}
                                                initialOpen={false}
                                            >
                                                <BaseControl
                                                    label={__(
                                                        "Flipbox Image",
                                                        "essential-blocks"
                                                    )}
                                                >
                                                    {backImageUrl ? (
                                                        <>
                                                            <ImageAvatar
                                                                imageUrl={
                                                                    backImageUrl
                                                                }
                                                                onDeleteImage={() =>
                                                                    setAttributes(
                                                                        {
                                                                            backImageUrl: null,
                                                                        }
                                                                    )
                                                                }
                                                            />
                                                            <ResponsiveRangeController
                                                                baseLabel={__(
                                                                    "Image Size",
                                                                    "essential-blocks"
                                                                )}
                                                                controlName={
                                                                    backImgSizeAttr
                                                                }
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                units={
                                                                    FRONT_IMAGE_UNITS
                                                                }
                                                                min={0}
                                                                max={300}
                                                            />

                                                            <ResponsiveRangeController
                                                                baseLabel={__(
                                                                    "Image Radius",
                                                                    "essential-blocks"
                                                                )}
                                                                controlName={
                                                                    backImgRadiusAttr
                                                                }
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                units={
                                                                    FRONT_IMAGE_UNITS
                                                                }
                                                                min={0}
                                                                max={100}
                                                            />
                                                        </>
                                                    ) : (
                                                        <MediaUpload
                                                            onSelect={(media) =>
                                                                setAttributes({
                                                                    backImageId:
                                                                        media.id,
                                                                    backImageUrl:
                                                                        media.url,
                                                                    backImageAlt: media?.alt
                                                                        ? media.alt
                                                                        : media.caption,
                                                                })
                                                            }
                                                            type="image"
                                                            value={backImageId}
                                                            render={({
                                                                open,
                                                            }) =>
                                                                !backImageUrl && (
                                                                    <Button
                                                                        className="eb-flipbox-upload-button"
                                                                        label={__(
                                                                            "Upload Image",
                                                                            "essential-blocks"
                                                                        )}
                                                                        icon="format-image"
                                                                        onClick={
                                                                            open
                                                                        }
                                                                    />
                                                                )
                                                            }
                                                        />
                                                    )}
                                                </BaseControl>
                                            </PanelBody>
                                        )}

                                    <PanelBody
                                        title={__(
                                            "Flipbox Content",
                                            "essential-blocks"
                                        )}
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
                                                        setAttributes({
                                                            showFrontTitle: !showFrontTitle,
                                                        });
                                                    }}
                                                />
                                                {showFrontTitle && (
                                                    <>
                                                        <DynamicInputControl
                                                            label={__(
                                                                "Front Title",
                                                                "essential-blocks"
                                                            )}
                                                            attrName="frontTitle"
                                                            inputValue={
                                                                frontTitle
                                                            }
                                                            setAttributes={
                                                                setAttributes
                                                            }
                                                            onChange={(text) =>
                                                                setAttributes({
                                                                    frontTitle: text,
                                                                })
                                                            }
                                                        />
                                                    </>
                                                )}
                                                <ToggleControl
                                                    label={__(
                                                        "Show Content?",
                                                        "essential-blocks"
                                                    )}
                                                    checked={showFrontContent}
                                                    onChange={() => {
                                                        setAttributes({
                                                            showFrontContent: !showFrontContent,
                                                        });
                                                    }}
                                                />
                                                {showFrontContent && (
                                                    <DynamicInputControl
                                                        label={__("Front Content", "essential-blocks")}
                                                        attrName="frontContent"
                                                        inputValue={frontContent}
                                                        setAttributes={setAttributes}
                                                        onChange={(text) => setAttributes({ frontContent: text })}
                                                        isTextarea={true}
                                                    />
                                                )}
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
                                                        setAttributes({
                                                            showBackTitle: !showBackTitle,
                                                        });
                                                    }}
                                                />
                                                {showBackTitle && (
                                                    <DynamicInputControl
                                                        label={__(
                                                            "Back Title",
                                                            "essential-blocks"
                                                        )}
                                                        attrName="backTitle"
                                                        inputValue={backTitle}
                                                        setAttributes={
                                                            setAttributes
                                                        }
                                                        onChange={(text) =>
                                                            setAttributes({
                                                                backTitle: text,
                                                            })
                                                        }
                                                    />
                                                )}
                                                <ToggleControl
                                                    label={__(
                                                        "Show Content?",
                                                        "essential-blocks"
                                                    )}
                                                    checked={showBackContent}
                                                    onChange={() => {
                                                        setAttributes({
                                                            showBackContent: !showBackContent,
                                                        });
                                                    }}
                                                />
                                                {showBackContent && (
                                                    <DynamicInputControl
                                                        label={__("Back Content", "essential-blocks")}
                                                        attrName="backContent"
                                                        inputValue={backContent}
                                                        setAttributes={setAttributes}
                                                        onChange={(text) => setAttributes({ backContent: text })}
                                                        isTextarea={true}
                                                    />
                                                )}
                                            </>
                                        )}
                                    </PanelBody>

                                    <PanelBody
                                        title={__(
                                            "Link Settings",
                                            "essential-blocks"
                                        )}
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
                                            label={__(
                                                "Link Type",
                                                "essential-blocks"
                                            )}
                                            id="eb-flipbox-link-type"
                                        >
                                            <ButtonGroup id="eb-flipbox-link-type">
                                                {LINK_TYPE.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                linkType ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                linkType !==
                                                                item.value
                                                            }
                                                            onClick={() => {
                                                                setAttributes({
                                                                    linkType:
                                                                        item.value,
                                                                }),
                                                                    handleButtonStyle(
                                                                        buttonStyle
                                                                    );
                                                            }}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>
                                        </BaseControl>

                                        {/* <TextControl
                                            label={__(
                                                "Link",
                                                "essential-blocks"
                                            )}
                                            value={link}
                                            placeholder="https://your-link.com"
                                            onChange={(newLink) =>
                                                setAttributes({ link: newLink })
                                            }
                                        /> */}
                                        <DynamicInputControl
                                            label={__(
                                                "Link",
                                                "essential-blocks"
                                            )}
                                            attrName="link"
                                            inputValue={link}
                                            setAttributes={setAttributes}
                                            onChange={(text) =>
                                                setAttributes({
                                                    link: text,
                                                })
                                            }
                                        />
                                        <ToggleControl
                                            label={__(
                                                "Open in New Tab",
                                                "essential-blocks"
                                            )}
                                            checked={linkOpenNewTab}
                                            onChange={() =>
                                                setAttributes({
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
                                                        setAttributes({
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
                                                        handleButtonStyle(
                                                            newStyle
                                                        )
                                                    }
                                                />
                                            </>
                                        )}
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody>
                                        <BaseControl
                                            label={__(
                                                "Selected Side",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup id="eb-flipbox-sides">
                                                {FLIPBOX_SIDES.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                selectedSide ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                selectedSide !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    selectedSide:
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
                                    <PanelBody
                                        title={__(
                                            "Flipbox Style",
                                            "essential-blocks"
                                        )}
                                        initialOpen={true}
                                    >
                                        {selectedSide === "front" && (
                                            <>
                                                <ColorControl
                                                    label={__(
                                                        "Front Title",
                                                        "essential-blocks"
                                                    )}
                                                    color={frontTitleColor}
                                                    onChange={(
                                                        frontTitleColor
                                                    ) =>
                                                        setAttributes({
                                                            frontTitleColor,
                                                        })
                                                    }
                                                />
                                                <ResponsiveDimensionsControl
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    controlName={
                                                        frontTitlePadding
                                                    }
                                                    baseLabel="Front Title Padding"
                                                />
                                                <ColorControl
                                                    label={__(
                                                        "Front Content",
                                                        "essential-blocks"
                                                    )}
                                                    color={frontContentColor}
                                                    onChange={(
                                                        frontContentColor
                                                    ) =>
                                                        setAttributes({
                                                            frontContentColor,
                                                        })
                                                    }
                                                />
                                                <ResponsiveDimensionsControl
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    controlName={
                                                        frontContentPadding
                                                    }
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
                                                    controlName={
                                                        flipboxFrontWrapper
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
                                                        frontItemPadding
                                                    }
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
                                                    onChange={(
                                                        backTitleColor
                                                    ) =>
                                                        setAttributes({
                                                            backTitleColor,
                                                        })
                                                    }
                                                />
                                                <ResponsiveDimensionsControl
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    controlName={
                                                        backTitlePadding
                                                    }
                                                    baseLabel="Back Title Padding"
                                                />
                                                <ColorControl
                                                    label={__(
                                                        "Back Content Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={backContentColor}
                                                    onChange={(
                                                        backContentColor
                                                    ) =>
                                                        setAttributes({
                                                            backContentColor,
                                                        })
                                                    }
                                                />
                                                <ResponsiveDimensionsControl
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    controlName={
                                                        backContentPadding
                                                    }
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
                                                    controlName={
                                                        flipboxBackWrapper
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
                                                        backItemPadding
                                                    }
                                                    baseLabel="Items Padding"
                                                />
                                            </>
                                        )}
                                    </PanelBody>
                                    {selectedSide === "front" &&
                                        frontIconOrImage === "icon" && (
                                            <PanelBody
                                                title={__(
                                                    "Front Icon Style",
                                                    "essential-blocks"
                                                )}
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
                                                                color={
                                                                    frontIconColor
                                                                }
                                                                onChange={(
                                                                    frontIconColor
                                                                ) =>
                                                                    setAttributes(
                                                                        {
                                                                            frontIconColor,
                                                                        }
                                                                    )
                                                                }
                                                            />

                                                            <ColorControl
                                                                label={__(
                                                                    "Icon Background",
                                                                    "essential-blocks"
                                                                )}
                                                                color={
                                                                    frontIconBackground
                                                                }
                                                                onChange={(
                                                                    frontIconBackground
                                                                ) =>
                                                                    setAttributes(
                                                                        {
                                                                            frontIconBackground,
                                                                        }
                                                                    )
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
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                className="frontIconMargin"
                                                                controlName={
                                                                    frontIconMargin
                                                                }
                                                                baseLabel="Margin"
                                                            />
                                                            <ResponsiveDimensionsControl
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                className="frontIconPadding"
                                                                controlName={
                                                                    frontIconPadding
                                                                }
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
                                                                controlName={
                                                                    borderShadowFrontIcon
                                                                }
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                noShadow
                                                            />
                                                        </>
                                                    )}
                                                </>
                                            </PanelBody>
                                        )}
                                    {selectedSide === "front" &&
                                        frontIconOrImage === "image" && (
                                            <PanelBody
                                                title={__(
                                                    "Front Image Style",
                                                    "essential-blocks"
                                                )}
                                                initialOpen={false}
                                            >
                                                <>
                                                    <ResponsiveDimensionsControl
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                        controlName={
                                                            frontImgPadding
                                                        }
                                                        baseLabel="Padding"
                                                    />
                                                </>
                                            </PanelBody>
                                        )}
                                    {selectedSide === "back" &&
                                        backIconOrImage === "icon" && (
                                            <PanelBody
                                                title={__(
                                                    "Back Icon Style",
                                                    "essential-blocks"
                                                )}
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
                                                                color={
                                                                    backIconColor
                                                                }
                                                                onChange={(
                                                                    backIconColor
                                                                ) =>
                                                                    setAttributes(
                                                                        {
                                                                            backIconColor,
                                                                        }
                                                                    )
                                                                }
                                                            />

                                                            <ColorControl
                                                                label={__(
                                                                    "Icon Background",
                                                                    "essential-blocks"
                                                                )}
                                                                color={
                                                                    backIconBackground
                                                                }
                                                                onChange={(
                                                                    backIconBackground
                                                                ) =>
                                                                    setAttributes(
                                                                        {
                                                                            backIconBackground,
                                                                        }
                                                                    )
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
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                className="backIconMargin"
                                                                controlName={
                                                                    backIconMargin
                                                                }
                                                                baseLabel="Margin"
                                                            />
                                                            <ResponsiveDimensionsControl
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                className="backIconPadding"
                                                                controlName={
                                                                    backIconPadding
                                                                }
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
                                                                controlName={
                                                                    borderShadowBackIcon
                                                                }
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                noShadow
                                                            />
                                                        </>
                                                    )}
                                                </>
                                            </PanelBody>
                                        )}
                                    {selectedSide === "back" &&
                                        backIconOrImage === "image" && (
                                            <PanelBody
                                                title={__(
                                                    "Back Image Style",
                                                    "essential-blocks"
                                                )}
                                                initialOpen={false}
                                            >
                                                <>
                                                    <ResponsiveDimensionsControl
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                        controlName={
                                                            backImgPadding
                                                        }
                                                        baseLabel="Padding"
                                                    />
                                                </>
                                            </PanelBody>
                                        )}
                                    <PanelBody
                                        title={__(
                                            "Typography",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <TypographyDropdown
                                            baseLabel={__(
                                                "Title",
                                                "essential-blocks"
                                            )}
                                            typographyPrefixConstant={
                                                typoPrefix_title
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />

                                        <TypographyDropdown
                                            baseLabel={__(
                                                "Content",
                                                "essential-blocks"
                                            )}
                                            typographyPrefixConstant={
                                                typoPrefix_content
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>
                                    {linkType === "button" &&
                                        buttonStyle === "custom" && (
                                            <PanelBody
                                                title={__(
                                                    "Button Style",
                                                    "essential-blocks"
                                                )}
                                            >
                                                <>
                                                    <ColorControl
                                                        label={__(
                                                            "Background",
                                                            "essential-blocks"
                                                        )}
                                                        color={buttonBackground}
                                                        onChange={(
                                                            buttonBackground
                                                        ) =>
                                                            setAttributes({
                                                                buttonBackground,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={buttonColor}
                                                        onChange={(
                                                            buttonColor
                                                        ) =>
                                                            setAttributes({
                                                                buttonColor,
                                                            })
                                                        }
                                                    />
                                                    <ResponsiveRangeController
                                                        baseLabel={__(
                                                            "Button Size",
                                                            "essential-blocks"
                                                        )}
                                                        controlName={
                                                            buttonIconSizeAttr
                                                        }
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                        min={20}
                                                        max={600}
                                                    />
                                                    <BaseControl>
                                                        <h3 className="eb-control-title">
                                                            {__(
                                                                "Padding",
                                                                "essential-blocks"
                                                            )}
                                                        </h3>
                                                    </BaseControl>
                                                    <ResponsiveDimensionsControl
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                        className="forWrapperPadding"
                                                        controlName={
                                                            buttonPadding
                                                        }
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
                                                        controlName={
                                                            borderShadowBtn
                                                        }
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                    />
                                                    <BaseControl>
                                                        <h3 className="eb-control-title">
                                                            {__(
                                                                "Button Icon",
                                                                "essential-blocks"
                                                            )}
                                                        </h3>
                                                    </BaseControl>
                                                    <ToggleControl
                                                        label={__(
                                                            "Display Button Icon",
                                                            "essential-blocks"
                                                        )}
                                                        checked={
                                                            displayButtonIcon
                                                        }
                                                        onChange={() =>
                                                            setAttributes({
                                                                displayButtonIcon: !displayButtonIcon,
                                                            })
                                                        }
                                                    />
                                                    {displayButtonIcon && (
                                                        <EBIconPicker
                                                            value={buttonIcon}
                                                            onChange={(buttonIcon) =>
                                                                setAttributes({
                                                                    buttonIcon,
                                                                })
                                                            }
                                                            title={__("Select Icon", "essential-blocks")}
                                                        />
                                                    )}
                                                    {displayButtonIcon &&
                                                        buttonIcon && (
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
                                                                            (
                                                                                item,
                                                                                index
                                                                            ) => (
                                                                                <Button
                                                                                    key={
                                                                                        index
                                                                                    }
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
                                                                                        setAttributes(
                                                                                            {
                                                                                                buttonIconPos:
                                                                                                    item.value,
                                                                                            }
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        item.label
                                                                                    }
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
                                </>
                            )}
                            {tab.name === "advanced" && (
                                <>
                                    <PanelBody>
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
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Border & Shadow",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <BorderShadowControl
                                            controlName={borderShadow}
                                            resRequiredProps={resRequiredProps}
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
};

export default Inspector;
