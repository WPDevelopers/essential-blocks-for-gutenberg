/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { PanelBody, Button, ButtonGroup, BaseControl, ToggleControl } from "@wordpress/components";

/**
 * External depencencies
 */

const {
    ColorControl,
    ResponsiveRangeController,
    TypographyDropdown,
    ResponsiveDimensionsControl,
    BorderShadowControl,
    GradientColorControl,
} = window.EBControls;

/**
 * Internal depencencies
 */
import {
    ALIGNMENT,
    imageHeight,
    imageWidth,
    wrapperMargin,
    wrapperPadding,
    imageBorderShadow,
} from "../../../../blocks/interactive-promo/src/constants";

import {
    typoPrefix_header,
    typoPrefix_content,
} from "../../../../blocks/interactive-promo/src/constants/typographyPrefixConstants";

import objAttributes from "../../../../blocks/interactive-promo/src/attributes";

function InteractivePromo(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        headerColor,
        contentColor,
        imageAlignment,
        isBackgroundGradient,
        backgroundColor,
        backgroundGradient,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                imageURL: "",
                imageID: null,
                imageAltTag: "image",
                newWindow: false,
                headerColor: "var(--eb-global-primary-color)",
                contentColor: "var(--eb-global-heading-color)",
                link: "",
                imageAlignment: "center",
                isBackgroundGradient: false,
                backgroundColor: "var(--eb-global-background-color)",
                backgroundGradient: "",

                [`${wrapperPadding}Unit`]: "px",
                [`${wrapperPadding}isLinked`]: true,

                [`${wrapperMargin}Top`]: 28,
                [`${wrapperMargin}Bottom`]: 28,
                [`${wrapperMargin}Right`]: 0,
                [`${wrapperMargin}Left`]: 0,
                [`${wrapperMargin}Unit`]: "px",
                [`${wrapperMargin}isLinked`]: false,

                [`${imageBorderShadow}Bdr_Unit`]: "px",
                [`${imageBorderShadow}Bdr_isLinked`]: true,
                [`${imageBorderShadow}Rds_Unit`]: "px",
                [`${imageBorderShadow}Rds_isLinked`]: true,
                [`${imageBorderShadow}BorderType`]: "normal",
                [`${imageBorderShadow}shadowType`]: "normal",
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
                    <PanelBody title={__("General ", "essential-blocks")} initialOpen={true}>
                        <ResponsiveRangeController
                            baseLabel={__("Height", "essential-blocks")}
                            controlName={imageHeight}
                            resRequiredProps={resRequiredProps}
                            min={200}
                            max={1000}
                            step={1}
                            noUnits
                        />
                        <ResponsiveRangeController
                            baseLabel={__("Width", "essential-blocks")}
                            controlName={imageWidth}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={1000}
                            step={1}
                            noUnits
                        />

                        <BaseControl>
                            <h3 className="eb-control-title">{__("Alignment", "essential-blocks")}</h3>
                            <ButtonGroup>
                                {ALIGNMENT.map((item, index) => (
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
                    </PanelBody>
                    {/* Styles */}
                    <PanelBody title={__("General Styles", "essential-blocks")} initialOpen={false}>
                        <BaseControl>
                            <h3 className="eb-control-title">{__("Background Color", "essential-blocks")}</h3>
                        </BaseControl>
                        <ToggleControl
                            label={__("Show Gradient Color", "essential-blocks")}
                            checked={isBackgroundGradient}
                            onChange={() => {
                                handleBlockDefault({
                                    isBackgroundGradient: !isBackgroundGradient,
                                });
                            }}
                        />
                        {isBackgroundGradient || (
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={backgroundColor}
                                onChange={(backgroundColor) => handleBlockDefault({ backgroundColor })}
                            />
                        )}
                        {isBackgroundGradient && (
                            <>
                                <GradientColorControl
                                    label={__("Gradient Color", "essential-blocks")}
                                    gradientColor={backgroundGradient}
                                    onChange={(backgroundGradient) =>
                                        handleBlockDefault({
                                            backgroundGradient,
                                        })
                                    }
                                />
                            </>
                        )}
                    </PanelBody>
                    <PanelBody title={__("Header Styles", "essential-blocks")} initialOpen={false}>
                        <>
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_header}
                                resRequiredProps={resRequiredProps}
                            />
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={headerColor}
                                onChange={(headerColor) => handleBlockDefault({ headerColor })}
                            />
                        </>
                    </PanelBody>
                    <PanelBody title={__("Content Styles", "essential-blocks")} initialOpen={false}>
                        <>
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_content}
                                resRequiredProps={resRequiredProps}
                            />
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={contentColor}
                                onChange={(contentColor) => handleBlockDefault({ contentColor })}
                            />
                        </>
                    </PanelBody>
                    {/* Advanced */}

                    <PanelBody title={__("Wrapper Margin & Padding", "essential-blocks")} initialOpen={false}>
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={wrapperMargin}
                            baseLabel={__("Margin", "essential-blocks")}
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={wrapperPadding}
                            baseLabel={__("Padding", "essential-blocks")}
                        />
                    </PanelBody>
                    <PanelBody title={__("Wrapper Border & Shadow", "essential-blocks")} initialOpen={false}>
                        <BorderShadowControl controlName={imageBorderShadow} resRequiredProps={resRequiredProps} />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default InteractivePromo;
