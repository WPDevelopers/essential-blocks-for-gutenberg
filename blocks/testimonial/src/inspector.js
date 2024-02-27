/**
 * WordPress dependencies
 */

import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {
    PanelBody,
    ToggleControl,
    RangeControl,
    Button,
    BaseControl,
    ButtonGroup,
    TabPanel,
    SelectControl,
} from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */

import objAttributes from "./attributes";

import {
    DESC_POSITIONS,
    TEXT_ALIGN,
    ALIGN_ITEMS,
    ALIGN_ITEMS_VERTICAL,
    IMG_POSITIONS,
    WrpBdShadow,
    TestimonialWrapBg,
    QUOTE_SIZE,
    UNIT_TYPES,
    LAYOUT_PRESETS,
    ImgBdShadow,
    IMG_WIDTH,
    RATING_SIZE,
    RATING_POSITION,
    IMG_GAP,
} from "./constants";

const {
    ImageAvatar,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    ToggleButton,
    BorderShadowControl,
    BackgroundControl,
    ResponsiveRangeController,
    AdvancedControls,
    ColorControl
} = window.EBControls;

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resOption,
        displayAvatar,
        avatarInline,
        avatarPosition,
        avatarAlign,
        borderRadius,
        avatarOrder,
        imageUrl,
        userInfoAlign,
        textAlign,
        userNameColor,
        descriptionColor,
        enableQuote,
        quoteColor,
        companyColor,
        quoteHorizontalPosition,
        quoteVerticalPosition,
        descTextAlign,
        layoutPreset,
        imageOverlayColor,
        showRating,
        rating,
        ratingColor,
        ratingIndivisual,
        ratingPosition,
    } = attributes;

    const resRequiredProps = {
        attributes,
        setAttributes,
        resOption,
        objAttributes,
    };

    const handlePresetChange = (preset) => {
        switch (preset) {
            case "layout-preset-1":
                setAttributes({
                    avatarAlign: "left",
                    avatarPosition: "flex-start",
                    avatarOrder: 1,
                    textAlign: "center",
                    descTextAlign: "center",
                    enableQuote: true,

                    imgWidth_Range: "",
                    imagePosition: 0,

                    img_borderStyle: "none",
                    img_borderColor: "",
                    img_Bdr_Bottom: "0",
                    img_Bdr_Left: "0",
                    img_Bdr_Right: "0",
                    img_Bdr_Top: "0",
                    img_Bdr_Unit: "px",
                    img_Bdr_isLinked: true,

                    img_blur: 33,
                    img_shadowColor: "",
                    img_shadowTransition: 0.5,
                    img_shadowType: "normal",
                    img_spread: 7,
                    img_vOffset: 0,

                    paddingBottom: "10",
                    paddingLeft: "10",
                    paddingRight: "10",
                    paddingTop: "10",
                    paddingUnit: "px",
                    paddingisLinked: true,

                    MOBpaddingBottom: "10",
                    MOBpaddingLeft: "10",
                    MOBpaddingRight: "10",
                    MOBpaddingTop: "10",
                    MOBpaddingUnit: "px",
                    MOBpaddingisLinked: true,

                    wrp_Bdr_Bottom: "1",
                    wrp_Bdr_Left: "1",
                    wrp_Bdr_Right: "1",
                    wrp_Bdr_Top: "1",
                    wrp_Bdr_Unit: "px",
                    wrp_Bdr_isLinked: true,
                    wrp_BorderType: "normal",
                    wrp_borderColor: "#000",
                    wrp_borderStyle: "none",

                    wrp_Rds_Bottom: "0",
                    wrp_Rds_Left: "0",
                    wrp_Rds_Right: "0",
                    wrp_Rds_Top: "0",
                    wrp_Rds_Unit: "px",
                    wrp_bg_hoverType: "normal",
                    wrp_backgroundType: "classic",
                    wrp_backgroundColor: "#fff",
                });
                break;

            case "layout-preset-2":
                setAttributes({
                    avatarAlign: "left",
                    avatarPosition: "flex-start",
                    avatarOrder: 0,
                    textAlign: "left",
                    descTextAlign: "left",
                    enableQuote: false,

                    imgWidth_Range: 60,
                    imagePosition: 0,
                    img_borderStyle: "solid",
                    img_borderColor: "#fff",
                    img_Bdr_Bottom: "3",
                    img_Bdr_Left: "3",
                    img_Bdr_Right: "3",
                    img_Bdr_Top: "3",
                    img_Bdr_Unit: "px",
                    img_Bdr_isLinked: true,

                    img_blur: 81,
                    img_shadowColor: "",
                    img_shadowTransition: 0.5,
                    img_shadowType: "normal",
                    img_spread: 33,
                    img_vOffset: 0,

                    paddingBottom: "6",
                    paddingLeft: "20",
                    paddingRight: "20",
                    paddingTop: "6",
                    paddingUnit: "%",
                    paddingisLinked: false,

                    MOBpaddingBottom: "20",
                    MOBpaddingLeft: "20",
                    MOBpaddingRight: "20",
                    MOBpaddingTop: "20",
                    MOBpaddingUnit: "px",
                    MOBpaddingisLinked: true,

                    wrp_Bdr_Bottom: "1",
                    wrp_Bdr_Left: "1",
                    wrp_Bdr_Right: "1",
                    wrp_Bdr_Top: "1",
                    wrp_Bdr_Unit: "px",
                    wrp_Bdr_isLinked: true,
                    wrp_BorderType: "normal",
                    wrp_borderColor: "#000",
                    wrp_borderStyle: "solid",

                    wrp_Rds_Bottom: "25",
                    wrp_Rds_Left: "25",
                    wrp_Rds_Right: "25",
                    wrp_Rds_Top: "25",
                    wrp_Rds_Unit: "px",
                    wrp_bg_hoverType: "normal",
                    wrp_backgroundType: "classic",
                    wrp_backgroundColor: "#fff",
                });
                break;
            case "layout-preset-3":
                setAttributes({
                    avatarAlign: "center",
                    avatarPosition: "center",
                    avatarInline: true,
                    avatarOrder: 0,
                    textAlign: "center",
                    descTextAlign: "center",
                    enableQuote: false,

                    imgWidth_Range: 90,
                    img_blur: 81,
                    img_shadowColor: "#9B9B9B38",
                    img_shadowTransition: 0.5,
                    img_shadowType: "normal",
                    img_spread: 33,
                    img_vOffset: 0,

                    img_borderStyle: "solid",
                    img_borderColor: "#fff",
                    img_Bdr_Bottom: "3",
                    img_Bdr_Left: "3",
                    img_Bdr_Right: "3",
                    img_Bdr_Top: "3",
                    img_Bdr_Unit: "px",
                    img_Bdr_isLinked: true,

                    paddingBottom: "6",
                    paddingLeft: "20",
                    paddingRight: "20",
                    paddingTop: "6",
                    paddingUnit: "%",
                    paddingisLinked: false,

                    MOBpaddingBottom: "20",
                    MOBpaddingLeft: "20",
                    MOBpaddingRight: "20",
                    MOBpaddingTop: "20",
                    MOBpaddingUnit: "px",
                    MOBpaddingisLinked: true,

                    wrp_Bdr_Bottom: "1",
                    wrp_Bdr_Left: "1",
                    wrp_Bdr_Right: "1",
                    wrp_Bdr_Top: "1",
                    wrp_Bdr_Unit: "px",
                    wrp_Bdr_isLinked: true,
                    wrp_BorderType: "normal",
                    wrp_borderColor: "#000",
                    wrp_borderStyle: "none",

                    wrp_Rds_Bottom: "25",
                    wrp_Rds_Left: "25",
                    wrp_Rds_Right: "25",
                    wrp_Rds_Top: "25",
                    wrp_Rds_Unit: "px",
                    wrp_bg_hoverType: "normal",
                    wrp_backgroundType: "classic",
                    wrp_backgroundColor: "#FAEFDB",
                });
                break;
        }

        setAttributes({ layoutPreset: preset });
    };

    const handleRating = (ratingIndivisual) => {
        if (ratingIndivisual) {
            setAttributes({
                quoteHorizontalPosition: "center",
            });
        } else {
            setAttributes({
                quoteHorizontalPosition: "flex-start",
            });
        }

        setAttributes({
            ratingIndivisual: ratingIndivisual,
        });
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
                                    <PanelBody title={__("Layout Settings", "essential-blocks")} initialOpen={true}>
                                        <SelectControl
                                            label={__("Preset", "essential-blocks")}
                                            value={layoutPreset}
                                            options={LAYOUT_PRESETS}
                                            onChange={(layoutPreset) => handlePresetChange(layoutPreset)}
                                        />
                                        {avatarInline && (
                                            <BaseControl label={__("User Info Position", "essential-blocks")}>
                                                <ButtonGroup>
                                                    {ALIGN_ITEMS.map((item, index) => (
                                                        <Button
                                                            key={index}
                                                            isSecondary={avatarPosition !== item.value}
                                                            isPrimary={avatarPosition === item.value}
                                                            onClick={() =>
                                                                setAttributes({
                                                                    avatarPosition: item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>
                                        )}

                                        {!avatarInline && displayAvatar && (
                                            <BaseControl
                                                label={
                                                    avatarInline
                                                        ? __("User Info Align", "essential-blocks")
                                                        : __("Image Align", "essential-blocks")
                                                }
                                            >
                                                <ButtonGroup>
                                                    {ALIGN_ITEMS.map((item, index) => (
                                                        <Button
                                                            key={index}
                                                            isSecondary={avatarAlign !== item.value}
                                                            isPrimary={avatarAlign === item.value}
                                                            onClick={() =>
                                                                setAttributes({
                                                                    avatarAlign: item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>
                                        )}

                                        <BaseControl label={__("Description Position", "essential-blocks")}>
                                            <ButtonGroup>
                                                {DESC_POSITIONS.map((item, index) => (
                                                    <Button
                                                        key={index}
                                                        isSecondary={avatarOrder !== item.value}
                                                        isPrimary={avatarOrder === item.value}
                                                        onClick={() =>
                                                            setAttributes({
                                                                avatarOrder: item.value,
                                                            })
                                                        }
                                                    >
                                                        {item.label}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        </BaseControl>

                                        <BaseControl label={__("Description Align", "essential-blocks")}>
                                            <ButtonGroup>
                                                {TEXT_ALIGN.map((option, index) => (
                                                    <Button
                                                        key={index}
                                                        isSecondary={descTextAlign !== option.value}
                                                        isPrimary={descTextAlign === option.value}
                                                        onClick={() =>
                                                            setAttributes({
                                                                descTextAlign: option.value,
                                                            })
                                                        }
                                                    >
                                                        {option.label}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        </BaseControl>

                                        <BaseControl label={__("User Name Align", "essential-blocks")}>
                                            <ButtonGroup>
                                                {TEXT_ALIGN.map((option, index) => (
                                                    <Button
                                                        key={index}
                                                        isSecondary={textAlign !== option.value}
                                                        isPrimary={textAlign === option.value}
                                                        onClick={() =>
                                                            setAttributes({
                                                                textAlign: option.value,
                                                            })
                                                        }
                                                    >
                                                        {option.label}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        </BaseControl>

                                        <BaseControl label={__("User Info Align", "essential-blocks")}>
                                            <ButtonGroup>
                                                {ALIGN_ITEMS_VERTICAL.map((item, index) => (
                                                    <Button
                                                        key={index}
                                                        isSecondary={userInfoAlign !== item.value}
                                                        isPrimary={userInfoAlign === item.value}
                                                        onClick={() =>
                                                            setAttributes({
                                                                userInfoAlign: item.value,
                                                            })
                                                        }
                                                    >
                                                        {item.label}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        </BaseControl>

                                        <ToggleControl
                                            label="Enable Quote"
                                            checked={enableQuote}
                                            onChange={() =>
                                                setAttributes({
                                                    enableQuote: !enableQuote,
                                                })
                                            }
                                        />

                                        {enableQuote && (
                                            <>
                                                <BaseControl label={__("Quote Horizontal Align", "essential-blocks")}>
                                                    <ButtonGroup>
                                                        {ALIGN_ITEMS.map((item, index) => (
                                                            <Button
                                                                key={index}
                                                                isSecondary={quoteHorizontalPosition !== item.value}
                                                                isPrimary={quoteHorizontalPosition === item.value}
                                                                onClick={() =>
                                                                    setAttributes({
                                                                        quoteHorizontalPosition: item.value,
                                                                    })
                                                                }
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                {quoteHorizontalPosition === "center" && (
                                                    <BaseControl
                                                        label={__("Quote Vertical Position", "essential-blocks")}
                                                    >
                                                        <ButtonGroup>
                                                            {DESC_POSITIONS.map((item, index) => (
                                                                <Button
                                                                    key={index}
                                                                    isSecondary={quoteVerticalPosition !== item.value}
                                                                    isPrimary={quoteVerticalPosition === item.value}
                                                                    onClick={() =>
                                                                        setAttributes({
                                                                            quoteVerticalPosition: item.value,
                                                                        })
                                                                    }
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </BaseControl>
                                                )}
                                            </>
                                        )}

                                        <ToggleControl
                                            label="Show Rating"
                                            checked={showRating}
                                            onChange={() =>
                                                setAttributes({
                                                    showRating: !showRating,
                                                })
                                            }
                                        />

                                        {showRating && (
                                            <>
                                                <RangeControl
                                                    label={__("Rating", "essential-blocks-pro")}
                                                    value={rating}
                                                    onChange={(newValue) =>
                                                        setAttributes({
                                                            rating: newValue,
                                                        })
                                                    }
                                                    min={0}
                                                    max={5}
                                                    step={1}
                                                    allowReset={true}
                                                />

                                                <ToggleControl
                                                    label="Rating With Description"
                                                    checked={ratingIndivisual}
                                                    onChange={(ratingIndivisual) => handleRating(ratingIndivisual)}
                                                />
                                                {ratingIndivisual && (
                                                    <>
                                                        <BaseControl label={__("Rating Position", "essential-blocks")}>
                                                            <ButtonGroup>
                                                                {RATING_POSITION.map((item, index) => (
                                                                    <Button
                                                                        key={index}
                                                                        isSecondary={ratingPosition !== item.value}
                                                                        isPrimary={ratingPosition === item.value}
                                                                        onClick={() =>
                                                                            setAttributes({
                                                                                ratingPosition: item.value,
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
                                            </>
                                        )}
                                    </PanelBody>

                                    <PanelBody title={__("Avatar", "essential-blocks")} initialOpen={false}>
                                        <ToggleControl
                                            label="Display Avatar"
                                            checked={displayAvatar}
                                            onChange={() =>
                                                setAttributes({
                                                    displayAvatar: !displayAvatar,
                                                })
                                            }
                                        />

                                        {layoutPreset == "layout-preset-1" && (
                                            <>
                                                {displayAvatar && (
                                                    <ToggleControl
                                                        label={__("Avatar Inline", "essential-blocks")}
                                                        checked={avatarInline}
                                                        onChange={() =>
                                                            setAttributes({
                                                                avatarInline: !avatarInline,
                                                            })
                                                        }
                                                    />
                                                )}

                                                {displayAvatar && (
                                                    <BaseControl
                                                        id="eb-testimonial-image-pos"
                                                        label={__("Image Position", "essential-blocks")}
                                                    >
                                                        <ToggleButton
                                                            options={IMG_POSITIONS}
                                                            onChange={(value) =>
                                                                setAttributes({
                                                                    imagePosition: value,
                                                                })
                                                            }
                                                        />
                                                    </BaseControl>
                                                )}
                                            </>
                                        )}

                                        {displayAvatar && imageUrl && (
                                            <PanelBody title={__("Image Setting", "essential-blocks")}>
                                                {imageUrl && (
                                                    <ImageAvatar
                                                        imageUrl={imageUrl}
                                                        onDeleteImage={() =>
                                                            setAttributes({
                                                                imageUrl: null,
                                                            })
                                                        }
                                                    />
                                                )}

                                                <ToggleControl
                                                    label={__("Round Avatar", "essential-blocks")}
                                                    checked={borderRadius === 50}
                                                    onChange={() =>
                                                        setAttributes({
                                                            borderRadius: borderRadius === 50 ? 0 : 50,
                                                        })
                                                    }
                                                />

                                                <RangeControl
                                                    label={__("Border Radius", "essential-blocks")}
                                                    value={borderRadius}
                                                    onChange={(newValue) =>
                                                        setAttributes({
                                                            borderRadius: newValue,
                                                        })
                                                    }
                                                    min={0}
                                                    max={50}
                                                />
                                            </PanelBody>
                                        )}
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody title={__("Color", "essential-blocks")} initialOpen={true}>
                                        <ColorControl
                                            label={__("Username Color", "essential-blocks")}
                                            color={userNameColor}
                                            onChange={(userNameColor) => setAttributes({
                                                userNameColor,
                                            })}
                                        />
                                        <ColorControl
                                            label={__("Company Color", "essential-blocks")}
                                            color={companyColor}
                                            onChange={(companyColor) => setAttributes({
                                                companyColor,
                                            })}
                                        />
                                        <ColorControl
                                            label={__("Description Color", "essential-blocks")}
                                            color={descriptionColor}
                                            onChange={(descriptionColor) => setAttributes({
                                                descriptionColor,
                                            })}
                                        />
                                        <ColorControl
                                            label={__("Quote Color", "essential-blocks")}
                                            color={quoteColor}
                                            onChange={(quoteColor) => setAttributes({
                                                quoteColor,
                                            })}
                                        />
                                        <ColorControl
                                            label={__("Rating Color", "essential-blocks")}
                                            color={ratingColor}
                                            onChange={(ratingColor) => setAttributes({
                                                ratingColor,
                                            })}
                                        />
                                    </PanelBody>

                                    <PanelBody title={__("Typography", "essential-blocks")} initialOpen={false}>
                                        <TypographyDropdown
                                            baseLabel="Username"
                                            typographyPrefixConstant={"username"}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <TypographyDropdown
                                            baseLabel="Company"
                                            typographyPrefixConstant={"company"}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <TypographyDropdown
                                            baseLabel="Description"
                                            typographyPrefixConstant={"description"}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        {enableQuote && (
                                            <ResponsiveRangeController
                                                baseLabel={__("Quote Size", "essential-blocks")}
                                                controlName={QUOTE_SIZE}
                                                resRequiredProps={resRequiredProps}
                                                units={UNIT_TYPES}
                                                min={1}
                                                max={200}
                                                step={1}
                                            />
                                        )}
                                        {showRating && (
                                            <ResponsiveRangeController
                                                baseLabel={__("Rating Size", "essential-blocks")}
                                                controlName={RATING_SIZE}
                                                resRequiredProps={resRequiredProps}
                                                units={UNIT_TYPES}
                                                min={1}
                                                max={100}
                                                step={1}
                                            />
                                        )}
                                    </PanelBody>

                                    <PanelBody title={__("Image", "essential-blocks")} initialOpen={false}>
                                        {layoutPreset == "layout-preset-2" && (
                                            <ColorControl
                                                label={__("Overlay Color", "essential-blocks")}
                                                color={imageOverlayColor}
                                                onChange={(newColor) => setAttributes({
                                                    imageOverlayColor: newColor,
                                                })}
                                            />

                                        )}
                                        <ResponsiveRangeController
                                            baseLabel={__("Width", "essential-blocks")}
                                            controlName={IMG_WIDTH}
                                            resRequiredProps={resRequiredProps}
                                            units={UNIT_TYPES}
                                            min={1}
                                            max={200}
                                            step={1}
                                        />
                                        <ResponsiveRangeController
                                            baseLabel={__("Gap", "essential-blocks")}
                                            controlName={IMG_GAP}
                                            resRequiredProps={resRequiredProps}
                                            units={UNIT_TYPES}
                                            min={1}
                                            max={200}
                                            step={1}
                                        />
                                        <PanelBody title={__("Border & Shadow")} initialOpen={true}>
                                            <BorderShadowControl
                                                controlName={ImgBdShadow}
                                                resRequiredProps={resRequiredProps}
                                                // noShadow
                                                // noBorder
                                                noBorderRadius
                                                noBorderRadiusHover
                                            />
                                        </PanelBody>
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "advance" && (
                                <>
                                    <PanelBody title={__("Margin & Padding")} initialOpen={true}>
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={"margin"}
                                            baseLabel="Margin"
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={"padding"}
                                            baseLabel="Padding"
                                        />
                                    </PanelBody>

                                    <PanelBody title={__("Background ", "essential-blocks")} initialOpen={false}>
                                        <BackgroundControl
                                            controlName={TestimonialWrapBg}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>

                                    <PanelBody title={__("Border & Shadow")} initialOpen={false}>
                                        <BorderShadowControl
                                            controlName={WrpBdShadow}
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
