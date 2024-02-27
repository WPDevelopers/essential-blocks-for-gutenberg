/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { PanelBody, ToggleControl } from "@wordpress/components";

const {
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BorderShadowControl,
    ColorControl,
    BackgroundControl,
} = window.EBControls;

import {
    typoPrefix_text,
    typoPrefix_title,
} from "../../../../blocks/notice/src/constants/typographyPrefixConstants";

import {
    dimensionsMargin,
    dimensionsPadding,
} from "../../../../blocks/notice/src/constants/dimensionsNames";

import { wrapBg } from "../../../../blocks/notice/src/constants/backgroundsConstants";
import { wrpBdShadow } from "../../../../blocks/notice/src/constants/borderShadowConstants";

import objAttributes from "../../../../blocks/notice/src/attributes";

function Notice(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        dismissible,
        titleColor,
        textColor,
        showAfterDismiss,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                dismissible: false,
                noticeType: "default",
                titleFontSize: "number",
                textFontSize: "number",
                title: "Save 20%",
                text: "Free shipping on all orders",
                backgroundColor: "",
                titleColor: "",
                textColor: "",
                noticeId: "",
                showAfterDismiss: false,

                [`${dimensionsMargin}Unit`]: "px",
                [`${dimensionsMargin}isLinked`]: true,

                [`${dimensionsPadding}Top`]: 65,
                [`${dimensionsPadding}Bottom`]: 65,
                [`${dimensionsPadding}Right`]: 60,
                [`${dimensionsPadding}Left`]: 60,
                [`${dimensionsPadding}Unit`]: "px",
                [`${dimensionsPadding}isLinked`]: false,

                [`${wrpBdShadow}Bdr_Unit`]: "px",
                [`${wrpBdShadow}Bdr_isLinked`]: true,
                [`${wrpBdShadow}Rds_Unit`]: "px",
                [`${wrpBdShadow}Rds_isLinked`]: true,
                [`${wrpBdShadow}BorderType`]: "normal",
                [`${wrpBdShadow}shadowType`]: "normal",
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
                    <PanelBody
                        title={__("Notice Settings", "essential-blocks")}
                    >
                        <ToggleControl
                            label={__("Dismissible", "essential-blocks")}
                            checked={dismissible}
                            onChange={() =>
                                handleBlockDefault({
                                    dismissible: !dismissible,
                                })
                            }
                        />

                        <ToggleControl
                            label={__("Show After Dismiss", "essential-blocks")}
                            checked={showAfterDismiss}
                            onChange={() =>
                                handleBlockDefault({
                                    showAfterDismiss: !showAfterDismiss,
                                })
                            }
                        />
                    </PanelBody>
                    {/* Style */}
                    <PanelBody
                        title={__("Title Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefix_title}
                            resRequiredProps={resRequiredProps}
                        />

                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={titleColor}
                            onChange={(titleColor) =>
                                handleBlockDefault({ titleColor })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Text Style", "essential-blocks")}
                        initialOpen={false}
                    >
                        <TypographyDropdown
                            baseLabel="Typography"
                            typographyPrefixConstant={typoPrefix_text}
                            resRequiredProps={resRequiredProps}
                        />

                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={textColor}
                            onChange={(textColor) =>
                                handleBlockDefault({ textColor })
                            }
                        />
                    </PanelBody>
                    {/* Advance */}
                    <PanelBody
                        title={__(
                            "Wrapper Margin & Padding",
                            "essential-blocks"
                        )}
                        initialOpen={false}
                    >
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={dimensionsMargin}
                            baseLabel="Margin"
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={dimensionsPadding}
                            baseLabel="Padding"
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Wrapper Background ", "essential-blocks")}
                        initialOpen={false}
                    >
                        <BackgroundControl
                            controlName={wrapBg}
                            resRequiredProps={resRequiredProps}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Wrapper Border & Shadow")}
                        initialOpen={false}
                    >
                        <BorderShadowControl
                            controlName={wrpBdShadow}
                            resRequiredProps={resRequiredProps}
                        />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default Notice;
