/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
    PanelBody,
    SelectControl,
    ButtonGroup,
    Button,
    BaseControl,
    TextControl,
    ToggleControl,
} from "@wordpress/components";

const {
    ColorControl,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BackgroundControl,
    BorderShadowControl,
    ResponsiveRangeController,
    EBIconPicker
} = window.EBControls;

/**
 * Internal depencencies
 */
import {
    HEADER_TAGS,
    BUTTON_SIZES,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    TITLE_MARGIN,
    SUBTITLE_MARGIN,
    WRAPPER_BACK,
    WRAPPER_BORDER,
    BUTTON_BORDER,
    ICON_SIZE,
    BUTTON_PADDING,
    ICON_PADDING,
    DESC_PADDING,
    BUTTON_POSITION,
    HOVER_EFFECT,
} from "../../../../blocks/call-to-action/src/components/constants";

import {
    typoPrefix_title,
    typoPrefix_subtitle,
    typoPrefix_desc,
    typoPrefix_btn,
} from "../../../../blocks/call-to-action/src/components/typographyPrefixConstants";

import objAttributes from "../../../../blocks/call-to-action/src/components/attributes";

function CallToAction(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        showIcon,
        icon,
        iconColor,
        titleTag,
        titleColor,
        showSubtitle,
        subtitleColor,
        descriptionColor,
        showButton,
        buttonSize,
        buttonBackgroundColor,
        buttonTextColor,
        buttonHoverTextColor,
        buttonHoverBackgroundColor,
        buttonURL,
        linkNewTab,
        buttonPosition,
        btnHoverEffect,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                titleTag: "h3",
                titleColor: "var(--eb-global-heading-color)",
                showSubtitle: false,
                subtitleTag: "h3",
                subtitleColor: "var(--eb-global-text-color)",
                descriptionColor: "var(--eb-global-text-color)",
                showIcon: true,
                icon: "fas fa-glass-martini",
                showButton: true,
                buttonSize: "large",
                buttonBackgroundColor: "var(--eb-global-button-background-color)",
                buttonHoverBackgroundColor: "var(--eb-global-tertiary-color)",
                buttonTextColor: "var(--eb-global-button-text-color)",
                buttonHoverTextColor: "var(--eb-global-button-text-color)",
                buttonPosition: "center",
                btnHoverEffect: "",
                buttonURL: "",

                [`${DESC_PADDING}Unit`]: "px",
                [`${DESC_PADDING}isLinked`]: true,

                [`${ICON_PADDING}Unit`]: "px",
                [`${ICON_PADDING}isLinked`]: true,

                [`${BUTTON_PADDING}Unit`]: "px",
                [`${BUTTON_PADDING}isLinked`]: true,

                [`${BUTTON_BORDER}Bdr_Unit`]: "px",
                [`${BUTTON_BORDER}Bdr_isLinked`]: true,
                [`${BUTTON_BORDER}Rds_Unit`]: "px",
                [`${BUTTON_BORDER}Rds_isLinked`]: true,
                [`${BUTTON_BORDER}BorderType`]: "normal",
                [`${BUTTON_BORDER}shadowType`]: "normal",

                [`${TITLE_MARGIN}Unit`]: "px",
                [`${TITLE_MARGIN}isLinked`]: true,

                [`${SUBTITLE_MARGIN}Unit`]: "px",
                [`${SUBTITLE_MARGIN}isLinked`]: true,

                [`${WRAPPER_PADDING}Unit`]: "px",
                [`${WRAPPER_PADDING}isLinked`]: true,

                [`${WRAPPER_MARGIN}Top`]: 28,
                [`${WRAPPER_MARGIN}Bottom`]: 28,
                [`${WRAPPER_MARGIN}Right`]: 0,
                [`${WRAPPER_MARGIN}Left`]: 0,
                [`${WRAPPER_MARGIN}Unit`]: "px",
                [`${WRAPPER_MARGIN}isLinked`]: false,

                [`${WRAPPER_BORDER}Bdr_Unit`]: "px",
                [`${WRAPPER_BORDER}Bdr_isLinked`]: true,
                [`${WRAPPER_BORDER}Rds_Unit`]: "px",
                [`${WRAPPER_BORDER}Rds_isLinked`]: true,
                [`${WRAPPER_BORDER}BorderType`]: "normal",
                [`${WRAPPER_BORDER}shadowType`]: "normal",
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
                    {showIcon && (
                        <PanelBody title={__("Icon Settings", "essential-blocks")} initialOpen={true}>
                            <EBIconPicker
                                value={icon}
                                onChange={(icon) => handleBlockDefault({ icon })}
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Size", "essential-blocks")}
                                controlName={ICON_SIZE}
                                resRequiredProps={resRequiredProps}
                                min={0}
                                max={100}
                                step={1}
                                noUnits
                            />
                        </PanelBody>
                    )}

                    <PanelBody title={__("Button Settings", "essential-blocks")} initialOpen={false}>
                        <BaseControl label={__("Alignment", "essential-blocks")} id="eb-button-group-alignment">
                            <ButtonGroup id="eb-button-group-alignment">
                                {BUTTON_POSITION.map((item, index) => (
                                    <Button
                                        key={index}
                                        isPrimary={buttonPosition === item.value}
                                        isSecondary={buttonPosition !== item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                buttonPosition: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <SelectControl
                            label={__("Button Size", "essential-blocks")}
                            value={buttonSize}
                            options={BUTTON_SIZES}
                            onChange={(newButtonSize) =>
                                handleBlockDefault({
                                    buttonSize: newButtonSize,
                                })
                            }
                        />
                        {buttonSize === "custom" && (
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={BUTTON_PADDING}
                                baseLabel={__("Padding", "essential-blocks")}
                            />
                        )}
                        <TextControl
                            label={__("Button Link", "essential-blocks")}
                            value={buttonURL}
                            help={__("Use https or http", "essential-blocks")}
                            onChange={(link) => handleBlockDefault({ buttonURL: link })}
                        />
                        {buttonURL && (
                            <ToggleControl
                                label={__("Open in New Tab", "essential-blocks")}
                                checked={linkNewTab}
                                onChange={() =>
                                    handleBlockDefault({
                                        linkNewTab: !linkNewTab,
                                    })
                                }
                            />
                        )}

                        <SelectControl
                            label={__("Hover Effect", "essential-blocks")}
                            value={btnHoverEffect}
                            options={HOVER_EFFECT}
                            onChange={(newHoverEffect) =>
                                handleBlockDefault({
                                    btnHoverEffect: newHoverEffect,
                                })
                            }
                        />
                    </PanelBody>
                    <PanelBody title={__("Title Style", "essential-blocks")} initialOpen={false}>
                        <BaseControl label={__("Title Tag", "essential-blocks")}>
                            <ButtonGroup>
                                {HEADER_TAGS.map((header, index) => (
                                    <Button
                                        key={index}
                                        isSecondary={titleTag !== header.value}
                                        isPrimary={titleTag === header.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                titleTag: header.value,
                                            })
                                        }
                                    >
                                        {header.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <TypographyDropdown
                            baseLabel={__("Typography", "essential-blocks")}
                            typographyPrefixConstant={typoPrefix_title}
                            resRequiredProps={resRequiredProps}
                        />
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={titleColor}
                            onChange={(titleColor) => handleBlockDefault({ titleColor })}
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={TITLE_MARGIN}
                            baseLabel={__("Space", "essential-blocks")}
                        />
                    </PanelBody>
                    {showSubtitle && (
                        <PanelBody title={__("Subtitle Style", "essential-blocks")} initialOpen={false}>
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_subtitle}
                                resRequiredProps={resRequiredProps}
                            />
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={subtitleColor}
                                onChange={(subtitleColor) => handleBlockDefault({ subtitleColor })}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={SUBTITLE_MARGIN}
                                baseLabel={__("Space", "essential-blocks")}
                            />
                        </PanelBody>
                    )}
                    <PanelBody title={__("Description Style", "essential-blocks")} initialOpen={false}>
                        <TypographyDropdown
                            baseLabel={__("Typography", "essential-blocks")}
                            typographyPrefixConstant={typoPrefix_desc}
                            resRequiredProps={resRequiredProps}
                        />
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={descriptionColor}
                            onChange={(descriptionColor) => handleBlockDefault({ descriptionColor })}
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={DESC_PADDING}
                            baseLabel={__("Space", "essential-blocks")}
                        />
                    </PanelBody>
                    {showIcon && (
                        <PanelBody title={__("Icon Style", "essential-blocks")} initialOpen={false}>
                            <ColorControl
                                label={__("Icon Color", "essential-blocks")}
                                color={iconColor}
                                onChange={(iconColor) => handleBlockDefault({ iconColor })}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={ICON_PADDING}
                                baseLabel={__("Space", "essential-blocks")}
                            />
                        </PanelBody>
                    )}
                    {showButton && (
                        <PanelBody title={__("Button Style", "essential-blocks")} initialOpen={false}>
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_btn}
                                resRequiredProps={resRequiredProps}
                            />
                            <ColorControl
                                label={__("Button Text Color", "essential-blocks")}
                                color={buttonTextColor}
                                onChange={(buttonTextColor) => handleBlockDefault({ buttonTextColor })}
                            />
                            <ColorControl
                                label={__("Button Hover Text Color", "essential-blocks")}
                                color={buttonHoverTextColor}
                                onChange={(buttonHoverTextColor) => handleBlockDefault({ buttonHoverTextColor })}
                            />
                            <ColorControl
                                label={__("Button Background", "essential-blocks")}
                                color={buttonBackgroundColor}
                                onChange={(buttonBackgroundColor) =>
                                    handleBlockDefault({
                                        buttonBackgroundColor,
                                    })
                                }
                            />
                            <ColorControl
                                label={__("Button Hover Background", "essential-blocks")}
                                color={buttonHoverBackgroundColor}
                                onChange={(buttonHoverBackgroundColor) =>
                                    handleBlockDefault({
                                        buttonHoverBackgroundColor,
                                    })
                                }
                            />
                            <BaseControl>
                                <h3 className="eb-control-title">{__("Border", "essential-blocks")}</h3>
                            </BaseControl>
                            <BorderShadowControl controlName={BUTTON_BORDER} resRequiredProps={resRequiredProps} />
                        </PanelBody>
                    )}

                    <PanelBody title={__("Advanced", "essential-blocks")} initialOpen={true}>
                        <PanelBody>
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={WRAPPER_MARGIN}
                                baseLabel={__("Margin", "essential-blocks")}
                            />
                            <ResponsiveDimensionsControl
                                resRequiredProps={resRequiredProps}
                                controlName={WRAPPER_PADDING}
                                baseLabel={__("Padding", "essential-blocks")}
                            />
                        </PanelBody>
                        <PanelBody title={__("Background", "essential-blocks")} initialOpen={false}>
                            <BackgroundControl controlName={WRAPPER_BACK} resRequiredProps={resRequiredProps} />
                        </PanelBody>
                        <PanelBody title={__("Border", "essential-blocks")} initialOpen={false}>
                            <BorderShadowControl controlName={WRAPPER_BORDER} resRequiredProps={resRequiredProps} />
                        </PanelBody>
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default CallToAction;
