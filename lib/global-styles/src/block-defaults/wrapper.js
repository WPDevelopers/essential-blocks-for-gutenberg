/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { PanelBody, ToggleControl } from "@wordpress/components";
/**
 * Internal dependencies
 */
import {
    WRAPPER_WIDTH,
    WRAPPER_BACKGROUND,
    WRAPPER_BORDER,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
} from "../../../../blocks/wrapper/src/constants";
import objAttributes from "../../../../blocks/wrapper/src/attributes";

const {
    ResponsiveRangeController,
    BackgroundControl,
    BorderShadowControl,
    ResponsiveDimensionsControl,
} = window.EBControls;

function Wrapper(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);
    const { isWrapperWidth } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                isWrapperWidth: false,
                [`${WRAPPER_MARGIN}Unit`]: "px",
                [`${WRAPPER_MARGIN}isLinked`]: false,
                [`${WRAPPER_MARGIN}Top`]: 28,
                [`${WRAPPER_MARGIN}Right`]: 0,
                [`${WRAPPER_MARGIN}Bottom`]: 28,
                [`${WRAPPER_MARGIN}Left`]: 0,
                [`${WRAPPER_PADDING}Unit`]: "px",
                [`${WRAPPER_PADDING}isLinked`]: false,
                [`${WRAPPER_PADDING}Top`]: 20,
                [`${WRAPPER_PADDING}Right`]: 20,
                [`${WRAPPER_PADDING}Bottom`]: 20,
                [`${WRAPPER_PADDING}Left`]: 20,
                [`${WRAPPER_BORDER}Bdr_Unit`]: "%",
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
                    <PanelBody
                        title={__("General", "essential-blocks")}
                        initialOpen={true}
                    >
                        <ResponsiveRangeController
                            baseLabel={__("Content Width", "essential-blocks")}
                            controlName={WRAPPER_WIDTH}
                            resRequiredProps={resRequiredProps}
                            min={0}
                            max={2560}
                            step={1}
                            noUnits
                        />
                        <ToggleControl
                            label={__(
                                "Use Width In Wrapper",
                                "essential-blocks"
                            )}
                            checked={isWrapperWidth}
                            onChange={() => {
                                handleBlockDefault({
                                    isWrapperWidth: !isWrapperWidth,
                                });
                            }}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Margin & Padding", "essential-blocks")}
                        initialOpen={false}
                    >
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
                    <PanelBody
                        title={__("Background", "essential-blocks")}
                        initialOpen={false}
                    >
                        <BackgroundControl
                            controlName={WRAPPER_BACKGROUND}
                            resRequiredProps={resRequiredProps}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Border & Shadow", "essential-blocks")}
                        initialOpen={false}
                    >
                        <BorderShadowControl
                            controlName={WRAPPER_BORDER}
                            resRequiredProps={resRequiredProps}
                        />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default Wrapper;
