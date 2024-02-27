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
    ColorControl,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BorderShadowControl,
    ResponsiveRangeController,
    BackgroundControl,
} = window.EBControls;

/**
 * Internal depencencies
 */
import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    IMAGE_WIDTH,
    IMAGE_HEIGHT,
    SIZE_UNIT_TYPES,
    IMAGE_BORDER_SHADOW,
    ATTRIBUTION_MARGIN,
    ATTRIBUTION_PADDING,
    ATTRIBUTION_TYPOGRAPHY,
    ATTRIBUTION_WIDTH,
    STYLES,
    TEXT_ALIGN,
    HORIZONTAL_ALIGN,
    UNIT_TYPES,
} from "../../../../blocks/openverse/src/constants";

import objAttributes from "../../../../blocks/openverse/src/attributes";

function Openverse(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const { displayAttribution, attributionColor, textAlign, stylePreset, complexStyle, autoFit } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                searchQ: "",
                apiKey: "",
                apiInfo: {
                    email: "",
                    name: "",
                },
                imageurl: "",
                imageAttr: {
                    title: "",
                    foreignUrl: "",
                    creator: "",
                    creatorUrl: "",
                    license: "",
                    licenseUrl: "",
                    licenseVersion: "",
                },
                selectedImgIndex: "number",
                displayAttribution: true,
                attributionColor: "#211C70",
                attributionBGColor: "",
                horizontalAlign: "center",
                verticalAlign: "bottom",
                imageAlign: "0 auto",
                textAlign: "left",
                hoverEffect: "no-effect",
                stylePreset: "rounded",
                complexStyle: false,
                attributionStyle: "attribution-style-1",
                autoFit: true,
                enableLink: false,
                imageLink: "",

                [`${ATTRIBUTION_WIDTH}Unit`]: "px",

                [`${ATTRIBUTION_MARGIN}Top`]: 0,
                [`${ATTRIBUTION_MARGIN}Bottom`]: 0,
                [`${ATTRIBUTION_MARGIN}Right`]: 0,
                [`${ATTRIBUTION_MARGIN}Left`]: 0,
                [`${ATTRIBUTION_MARGIN}Unit`]: "px",
                [`${ATTRIBUTION_MARGIN}isLinked`]: false,

                [`${ATTRIBUTION_PADDING}Top`]: 20,
                [`${ATTRIBUTION_PADDING}Bottom`]: 0,
                [`${ATTRIBUTION_PADDING}Right`]: 10,
                [`${ATTRIBUTION_PADDING}Left`]: 10,
                [`${ATTRIBUTION_PADDING}Unit`]: "px",
                [`${ATTRIBUTION_PADDING}isLinked`]: false,

                [`${IMAGE_WIDTH}Unit`]: "px",
                [`${IMAGE_HEIGHT}Unit`]: "px",

                [`${IMAGE_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${IMAGE_BORDER_SHADOW}Bdr_isLinked`]: true,

                [`${IMAGE_BORDER_SHADOW}Rds_Top`]: 15,
                [`${IMAGE_BORDER_SHADOW}Rds_Bottom`]: 15,
                [`${IMAGE_BORDER_SHADOW}Rds_Right`]: 15,
                [`${IMAGE_BORDER_SHADOW}Rds_Left`]: 15,
                [`${IMAGE_BORDER_SHADOW}Rds_Unit`]: "px",
                [`${IMAGE_BORDER_SHADOW}Rds_isLinked`]: true,
                [`${IMAGE_BORDER_SHADOW}BorderType`]: "normal",
                [`${IMAGE_BORDER_SHADOW}shadowType`]: "normal",

                [`${WRAPPER_PADDING}Top`]: 15,
                [`${WRAPPER_PADDING}Bottom`]: 15,
                [`${WRAPPER_PADDING}Right`]: 15,
                [`${WRAPPER_PADDING}Left`]: 15,
                [`${WRAPPER_PADDING}Unit`]: "px",
                [`${WRAPPER_PADDING}isLinked`]: false,

                [`${WRAPPER_MARGIN}Unit`]: "px",
                [`${WRAPPER_MARGIN}isLinked`]: true,

                [`${WRAPPER_BORDER_SHADOW}Bdr_Unit`]: "px",
                [`${WRAPPER_BORDER_SHADOW}Bdr_isLinked`]: true,

                [`${WRAPPER_BORDER_SHADOW}Rds_Top`]: 15,
                [`${WRAPPER_BORDER_SHADOW}Rds_Bottom`]: 15,
                [`${WRAPPER_BORDER_SHADOW}Rds_Right`]: 15,
                [`${WRAPPER_BORDER_SHADOW}Rds_Left`]: 15,
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
                    <PanelBody title={__("General", "essential-blocks")} initialOpen={true}>
                        {stylePreset === "circle" && (
                            <PanelRow>
                                <em>Please use equal "Height" &#38; "Width" for perfect Circle shape.</em>
                            </PanelRow>
                        )}

                        <ResponsiveRangeController
                            baseLabel={__("Width", "essential-blocks")}
                            controlName={IMAGE_WIDTH}
                            resRequiredProps={resRequiredProps}
                            min={1}
                            max={1000}
                            step={1}
                            units={SIZE_UNIT_TYPES}
                        />

                        <ResponsiveRangeController
                            baseLabel={__("Height", "essential-blocks")}
                            controlName={IMAGE_HEIGHT}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={1000}
                            step={1}
                            units={SIZE_UNIT_TYPES}
                        />

                        <ToggleControl
                            label={__("Auto Fit Image?", "essential-blocks")}
                            checked={autoFit}
                            onChange={(autoFit) => handleBlockDefault({ autoFit })}
                        />

                        <ToggleControl
                            label={__("Display Attribution", "essential-blocks")}
                            checked={displayAttribution}
                            onChange={() => checkAttribution(!displayAttribution)}
                        />
                    </PanelBody>

                    <PanelBody title={__("Image Settings", "essential-blocks")} initialOpen={false}>
                        {!complexStyle && (
                            <>
                                <BaseControl>
                                    <h3 className="eb-control-title">{__("Border", "essential-blocks")}</h3>
                                </BaseControl>
                                <BorderShadowControl
                                    controlName={IMAGE_BORDER_SHADOW}
                                    resRequiredProps={resRequiredProps}
                                    // noShadow
                                    // noBorder
                                />
                            </>
                        )}
                        {complexStyle && (
                            <PanelRow>
                                <em>Border Style doesn't support for "{stylePreset} style".</em>
                            </PanelRow>
                        )}
                    </PanelBody>

                    {displayAttribution && (
                        <PanelBody title={__("Caption Styles", "essential-blocks")} initialOpen={false}>
                            <ColorControl
                                label={__("Color Controls", "essential-blocks")}
                                color={attributionColor}
                                onChange={(newColor) =>
                                    handleBlockDefault({
                                        attributionColor: newColor,
                                    })
                                }
                            />

                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={ATTRIBUTION_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
                            />

                            <ResponsiveRangeController
                                baseLabel={__("Width", "essential-blocks")}
                                controlName={ATTRIBUTION_WIDTH}
                                resRequiredProps={resRequiredProps}
                                units={UNIT_TYPES}
                                min={0}
                                max={300}
                                step={1}
                            />

                            {displayAttribution && (
                                <>
                                    <BaseControl label={__("Text Align", "essential-blocks")}>
                                        <ButtonGroup>
                                            {TEXT_ALIGN.map((item) => (
                                                <Button
                                                    // isLarge
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

                                    <ResponsiveDimensionsControl
                                        resRequiredProps={resRequiredProps}
                                        controlName={ATTRIBUTION_MARGIN}
                                        baseLabel="Margin"
                                    />

                                    <ResponsiveDimensionsControl
                                        resRequiredProps={resRequiredProps}
                                        controlName={ATTRIBUTION_PADDING}
                                        baseLabel="Padding"
                                    />
                                </>
                            )}
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

export default Openverse;
