/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
    PanelBody,
    SelectControl,
    RangeControl,
    __experimentalDivider as Divider,
} from "@wordpress/components";

import objAttributes from "../../../../blocks/google-map/src/attributes";
import {
    wrapMarginConst,
    wrapPaddingConst,
    WrpBgConst,
    WrpBdShadowConst,
} from "../../../../blocks/google-map/src/constants";
import {
    typoPrefix_title,
    typoPrefix_desc,
} from "../../../../blocks/google-map/src/constants/typographyConstants";

const {
    ColorControl,
    ResponsiveDimensionsControl,
    BorderShadowControl,
    TypographyDropdown,
    BackgroundControl,
} = EBControls;

function GoogleMap(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType } = props;

    const [defaultValues, setDefaultValues] = useState({});
    const [isDefaultSet, setDefaultSet] = useState(false);

    const {
        mapType,
        mapZoom,
        mapHeight,
        titleColor,
        titleHoverColor,
        descColor,
    } = defaultValues;

    /**
     * Update block defaults
     */
    useEffect(() => {
        if (blockDefaults[name]) {
            setDefaultValues({ ...blockDefaults[name] });
        } else {
            setDefaultValues({
                searchAddress: "WPDeveloper, Mirpur DOHS, Dhaka",
                latitude: "23.8370859",
                longitude: "90.37048010000001",
                mapType: "roadmap",
                mapZoom: "13",
                mapHeight: "400",
                marker: [],
                imageSize: 32,
                [`${wrapMarginConst}Unit`]: "px",
                [`${wrapMarginConst}isLinked`]: true,
                [`${wrapPaddingConst}Unit`]: "px",
                [`${wrapPaddingConst}isLinked`]: true,
                [`${WrpBdShadowConst}Bdr_Unit`]: "px",
                [`${WrpBdShadowConst}Bdr_isLinked`]: true,
                [`${WrpBdShadowConst}Rds_Unit`]: "px",
                [`${WrpBdShadowConst}Rds_isLinked`]: true,
                [`${WrpBdShadowConst}BorderType`]: "normal",
                [`${WrpBdShadowConst}shadowType`]: "normal",
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

    const changeMapType = (value) => {
        if (value) {
            handleBlockDefault({ mapType: value });
        }
    };
    const changeZoom = (value) => {
        if (value) {
            handleBlockDefault({ mapZoom: value.toString() });
        } else {
            handleBlockDefault({ mapZoom: "13" });
        }
    };

    return (
        <>
            {isDefaultSet && (
                <div className="eb-panel-control">
                    <PanelBody title={__("Height & Zoom", "essential-blocks")}>
                        <SelectControl
                            label={__("Map Type", "essential-blocks")}
                            value={mapType}
                            options={[
                                {
                                    label: __("Road Map", "essential-blocks"),
                                    value: "roadmap",
                                },
                                {
                                    label: __(
                                        "Satellite View",
                                        "essential-blocks"
                                    ),
                                    value: "satellite",
                                },
                                {
                                    label: __("Hybrid", "essential-blocks"),
                                    value: "hybrid",
                                },
                                {
                                    label: __("Terrain", "essential-blocks"),
                                    value: "terrain",
                                },
                            ]}
                            onChange={(value) => changeMapType(value)}
                        />

                        <RangeControl
                            label={__("Map Zoom Level", "essential-blocks")}
                            value={parseInt(mapZoom)}
                            onChange={(value) => changeZoom(value)}
                            min={0}
                            max={20}
                            allowReset={true}
                        />

                        <RangeControl
                            label={__("Map Height", "essential-blocks")}
                            value={parseInt(mapHeight)}
                            onChange={(value) => {
                                handleBlockDefault({
                                    mapHeight: value ? value.toString() : "400",
                                });
                            }}
                            min={100}
                            max={1400}
                            allowReset={true}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Info Card", "essential-blocks")}
                        initialOpen={true}
                    >
                        <>
                            <ColorControl
                                label={__("Title Color", "essential-blocks")}
                                color={titleColor}
                                onChange={(titleColor) =>
                                    handleBlockDefault({ titleColor })
                                }
                            />
                            <ColorControl
                                label={__(
                                    "Title Hover Color",
                                    "essential-blocks"
                                )}
                                color={titleHoverColor}
                                onChange={(titleHoverColor) =>
                                    handleBlockDefault({ titleHoverColor })
                                }
                            />
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_title}
                                resRequiredProps={resRequiredProps}
                            />
                            <Divider />
                            <ColorControl
                                label={__(
                                    "Description Color",
                                    "essential-blocks"
                                )}
                                color={descColor}
                                onChange={(descColor) =>
                                    handleBlockDefault({ descColor })
                                }
                            />
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_desc}
                                resRequiredProps={resRequiredProps}
                            />
                        </>
                    </PanelBody>
                    <PanelBody
                        title={__("Margin & Padding", "essential-blocks")}
                    >
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={wrapMarginConst}
                            baseLabel="Margin"
                        />
                        <ResponsiveDimensionsControl
                            resRequiredProps={resRequiredProps}
                            controlName={wrapPaddingConst}
                            baseLabel="Padding"
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Background ", "essential-blocks")}
                        initialOpen={false}
                    >
                        <BackgroundControl
                            controlName={WrpBgConst}
                            resRequiredProps={resRequiredProps}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Border & Shadow")}
                        initialOpen={false}
                    >
                        <BorderShadowControl
                            controlName={WrpBdShadowConst}
                            resRequiredProps={resRequiredProps}
                        />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default GoogleMap;
