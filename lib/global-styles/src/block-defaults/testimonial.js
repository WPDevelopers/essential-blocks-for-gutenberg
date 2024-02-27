/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { PanelBody, ToggleControl, RangeControl, Button, BaseControl, ButtonGroup } from "@wordpress/components";
/**
 * Internal dependencies
 */
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
} from "../../../../blocks/testimonial/src/constants";
import objAttributes from "../../../../blocks/testimonial/src/attributes";

const {
    ColorControl,
    ImageAvatar,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    ToggleButton,
    BorderShadowControl,
    BackgroundControl,
    ResponsiveRangeController,
    AdvancedControls,
} = window.EBControls;

function Testimonial(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
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
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                avaterContainerFontSize: 16,
                displayAvatar: true,
                avatarInline: true,
                avatarPosition: "flex-start",
                avatarAlign: "center",
                borderRadius: 50,
                avatarOrder: 1,
                userName: "John Doe",
                companyName: "Company Name",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                descTextAlign: "center",
                textAlign: "center",
                userInfoPos: "flex-start",
                imagePosition: 0,
                userNameColor: "var(--eb-global-primary-color)",
                descriptionColor: "var(--eb-global-text-color)",
                enableQuote: true,
                quoteColor: "#edf1f7",
                quoteSize: 60,
                quoteHorizontalPosition: "flex-start",
                quoteVerticalPosition: 1,
                userInfoAlign: "center",
                linkedMargin: false,
                linkedPadding: false,
                marginUnit: "px",
                tabMarginUnit: "px",
                mobMarginUnit: "px",
                paddingUnit: "px",
                tabPaddingUnit: "px",
                mobPaddingUnit: "px",
                nameSizeUnit: "px",
                companySizeUnit: "px",
                descriptionSizeUnit: "px",
                quoteSizeUnit: "px",
                companyColor: "var(--eb-global-heading-color)",
                [`marginUnit`]: "px",
                [`marginisLinked`]: true,
                [`marginTop`]: 10,
                [`marginRight`]: 10,
                [`marginBottom`]: 10,
                [`marginLeft`]: 10,
                [`paddingUnit`]: "px",
                [`paddingisLinked`]: true,
                [`paddingTop`]: 10,
                [`paddingRight`]: 10,
                [`paddingBottom`]: 10,
                [`paddingLeft`]: 10,
                [`${WrpBdShadow}Bdr_Unit`]: "%",
                [`${WrpBdShadow}Bdr_isLinked`]: true,
                [`${WrpBdShadow}Rds_Unit`]: "px",
                [`${WrpBdShadow}Rds_isLinked`]: true,
                [`${WrpBdShadow}BorderType`]: "normal",
                [`${WrpBdShadow}shadowType`]: "normal",
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
                    <PanelBody title={__("Layout Settings", "essential-blocks")} initialOpen={true}>
                        {avatarInline && (
                            <BaseControl label={__("User Info Position", "essential-blocks")}>
                                <ButtonGroup>
                                    {ALIGN_ITEMS.map((item, index) => (
                                        <Button
                                            key={index}
                                            isSecondary={avatarPosition !== item.value}
                                            isPrimary={avatarPosition === item.value}
                                            onClick={() =>
                                                handleBlockDefault({
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
                                                handleBlockDefault({
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
                                            handleBlockDefault({
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
                                            handleBlockDefault({
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
                                            handleBlockDefault({
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
                                            handleBlockDefault({
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
                                handleBlockDefault({
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
                                                    handleBlockDefault({
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
                                    <BaseControl label={__("Quote Vertical Position", "essential-blocks")}>
                                        <ButtonGroup>
                                            {DESC_POSITIONS.map((item, index) => (
                                                <Button
                                                    key={index}
                                                    isSecondary={quoteVerticalPosition !== item.value}
                                                    isPrimary={quoteVerticalPosition === item.value}
                                                    onClick={() =>
                                                        handleBlockDefault({
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
                    </PanelBody>

                    <PanelBody title={__("Avatar", "essential-blocks")} initialOpen={false}>
                        <ToggleControl
                            label="Display Avatar"
                            checked={displayAvatar}
                            onChange={() =>
                                handleBlockDefault({
                                    displayAvatar: !displayAvatar,
                                })
                            }
                        />

                        {displayAvatar && (
                            <ToggleControl
                                label={__("Avatar Inline", "essential-blocks")}
                                checked={avatarInline}
                                onChange={() =>
                                    handleBlockDefault({
                                        avatarInline: !avatarInline,
                                    })
                                }
                            />
                        )}

                        {displayAvatar && (
                            <BaseControl id="eb-testimonial-image-pos" label={__("Image Position", "essential-blocks")}>
                                <ToggleButton
                                    options={IMG_POSITIONS}
                                    onChange={(value) =>
                                        handleBlockDefault({
                                            imagePosition: value,
                                        })
                                    }
                                />
                            </BaseControl>
                        )}

                        {displayAvatar && imageUrl && (
                            <PanelBody title={__("Image Setting", "essential-blocks")}>
                                {imageUrl && (
                                    <ImageAvatar
                                        imageUrl={imageUrl}
                                        onDeleteImage={() =>
                                            handleBlockDefault({
                                                imageUrl: null,
                                            })
                                        }
                                    />
                                )}

                                <ToggleControl
                                    label={__("Round Avatar", "essential-blocks")}
                                    checked={borderRadius === 50}
                                    onChange={() =>
                                        handleBlockDefault({
                                            borderRadius: borderRadius === 50 ? 0 : 50,
                                        })
                                    }
                                />

                                <RangeControl
                                    label={__("Border Radius", "essential-blocks")}
                                    value={borderRadius}
                                    onChange={(newValue) =>
                                        handleBlockDefault({
                                            borderRadius: newValue,
                                        })
                                    }
                                    min={0}
                                    max={50}
                                />
                            </PanelBody>
                        )}
                    </PanelBody>
                    <PanelBody title={__("Colors", "essential-blocks")} initialOpen={false}>
                        <ColorControl
                            label={__("Username", "essential-blocks")}
                            color={userNameColor}
                            onChange={(userNameColor) => handleBlockDefault({ userNameColor })}
                        />
                        <ColorControl
                            label={__("Company", "essential-blocks")}
                            color={companyColor}
                            onChange={(companyColor) => handleBlockDefault({ companyColor })}
                        />
                        <ColorControl
                            label={__("Description", "essential-blocks")}
                            color={descriptionColor}
                            onChange={(descriptionColor) => handleBlockDefault({ descriptionColor })}
                        />
                        <ColorControl
                            label={__("Quote", "essential-blocks")}
                            color={quoteColor}
                            onChange={(quoteColor) => handleBlockDefault({ quoteColor })}
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
                    </PanelBody>
                    <PanelBody title={__("Wrapper Margin & Padding")} initialOpen={false}>
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

                    <PanelBody title={__("Wrapper Background ", "essential-blocks")} initialOpen={false}>
                        <BackgroundControl controlName={TestimonialWrapBg} resRequiredProps={resRequiredProps} />
                    </PanelBody>

                    <PanelBody title={__("Wrapper Border & Shadow")} initialOpen={false}>
                        <BorderShadowControl controlName={WrpBdShadow} resRequiredProps={resRequiredProps} />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default Testimonial;
