/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState, useRef } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import { applyFilters } from "@wordpress/hooks";
import {
    PanelBody,
    SelectControl,
    BaseControl,
    ButtonGroup,
    Button,
    TabPanel,
    RangeControl,
    Card,
    CardBody,
    ExternalLink,
    __experimentalDivider as Divider,
} from "@wordpress/components";

import objAttributes from "./attributes";
import SortableMarker from "./marker";
import {
    wrapMarginConst,
    wrapPaddingConst,
    WrpBgConst,
    WrpBdShadowConst,
    GOOGLE_MAP_STYLES_NAMES,
    SNAZZY_MAP_STYLES_NAMES,
    THEME_SOURCES,
} from "./constants";
import {
    typoPrefix_title,
    typoPrefix_desc,
} from "./constants/typographyConstants";

const {
    ColorControl,
    ResponsiveDimensionsControl,
    BorderShadowControl,
    TypographyDropdown,
    BackgroundControl,
    AdvancedControls,
} = EBControls;

const Inspector = ({ attributes, setAttributes, map }) => {
    const {
        resOption,
        mapType,
        mapZoom,
        mapHeight,
        marker,
        titleColor,
        titleHoverColor,
        descColor,
        imageSize,
        googleMapStyle,
        snazzyMapStyle,
        themeSource,
    } = attributes;

    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
    };

    const [googleMapApi, setGoogleMapApi] = useState("");
    //Initial UseEffect
    useEffect(() => {
        //Get Google Map API
        let data = new FormData();
        data.append("action", "google_map_api_key");
        data.append("admin_nonce", EssentialBlocksLocalize.admin_nonce);
        fetch(EssentialBlocksLocalize.ajax_url, {
            method: "POST",
            body: data,
        }) // wrapped
            .then((res) => res.text())
            .then((data) => {
                const response = JSON.parse(data);
                if (response.success && response.data) {
                    setGoogleMapApi(response.data);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const searchRef = useRef(null);

    const initSearch = () => {
        const searchBox = new window.google.maps.places.SearchBox(
            searchRef.current
        );

        searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces();

            if (places && 0 < places.length) {
                places.forEach((place) => {
                    const latitude = place.geometry.location.lat();
                    const longitude = place.geometry.location.lng();
                    const latLng = new window.google.maps.LatLng(
                        latitude,
                        longitude
                    );
                    map.setCenter(latLng);
                    setAttributes({
                        searchAddress: place.formatted_address || place.name,
                        latitude: latitude.toString(),
                        longitude: longitude.toString(),
                    });
                });
            }
        });
    };

    const changeLatitude = (value) => {
        setAttributes({ latitude: value.toString() || 0 });
        const latitude = Number(value);
        const { longitude } = attributes;
        const latLng = new window.google.maps.LatLng(latitude, longitude);
        map.setCenter(latLng);
    };

    const changeLongitude = (value) => {
        setAttributes({ longitude: value.toString() || 0 });
        const { latitude } = attributes;
        const longitude = Number(value);
        const latLng = new window.google.maps.LatLng(latitude, longitude);
        map.setCenter(latLng);
    };

    const changeMapType = (value) => {
        if (value) {
            setAttributes({ mapType: value });
            map.setMapTypeId(
                window.google.maps.MapTypeId[mapType.toUpperCase()]
            );
        }
    };

    const changeZoom = (value) => {
        if (value) {
            setAttributes({ mapZoom: value.toString() });
            map.setZoom(parseInt(mapZoom));
        } else {
            setAttributes({ mapZoom: "13" });
        }
    };

    return (
        <InspectorControls key="controls">
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
                            name: "advance",
                            title: __("Advanced", "essential-blocks"),
                            className: "eb-tab advance",
                        },
                    ]}
                >
                    {(tab) => (
                        <div className={"eb-tab-controls " + tab.name}>
                            {tab.name === "general" && (
                                <>
                                    {!googleMapApi && (
                                        <PanelBody
                                            title={__(
                                                "Google Map",
                                                "essential-blocks"
                                            )}
                                            initialOpen={true}
                                        >
                                            <Card>
                                                <CardBody>
                                                    <p>
                                                        {__(
                                                            "Please add your own Google Map API ",
                                                            "essential-blocks"
                                                        )}{" "}
                                                        <ExternalLink
                                                            href={`${EssentialBlocksLocalize.eb_admin_url}admin.php?page=essential-blocks&tab=options`}
                                                        >
                                                            {__("here.")}
                                                        </ExternalLink>
                                                    </p>
                                                </CardBody>
                                            </Card>
                                        </PanelBody>
                                    )}
                                    <PanelBody
                                        title={__(
                                            "Addresses",
                                            "essential-blocks"
                                        )}
                                    >
                                        <SortableMarker
                                            marker={marker}
                                            setAttributes={setAttributes}
                                            map={map}
                                        />
                                        <hr />
                                        <Button
                                            className="is-default eb-google-map-marker-add-wrapper"
                                            label={__(
                                                "Add Address",
                                                "essential-blocks"
                                            )}
                                            icon="plus-alt"
                                            onClick={() => {
                                                let updatedMarker = [
                                                    ...marker,
                                                    {
                                                        title: `Address ${
                                                            marker.length + 1
                                                        }`,
                                                    },
                                                ];

                                                setAttributes({
                                                    marker: updatedMarker,
                                                });
                                            }}
                                        >
                                            <span className="eb-google-map-marker-button">
                                                Add Address
                                            </span>
                                        </Button>
                                    </PanelBody>
                                    <PanelBody
                                        title={__(
                                            "Map Settings",
                                            "essential-blocks"
                                        )}
                                    >
                                        <SelectControl
                                            label={__(
                                                "Map Type",
                                                "essential-blocks"
                                            )}
                                            value={mapType}
                                            options={[
                                                {
                                                    label: __(
                                                        "Road Map",
                                                        "essential-blocks"
                                                    ),
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
                                                    label: __(
                                                        "Hybrid",
                                                        "essential-blocks"
                                                    ),
                                                    value: "hybrid",
                                                },
                                                {
                                                    label: __(
                                                        "Terrain",
                                                        "essential-blocks"
                                                    ),
                                                    value: "terrain",
                                                },
                                            ]}
                                            onChange={(value) =>
                                                changeMapType(value)
                                            }
                                        />
                                        {marker.length <= 1 && (
                                            <RangeControl
                                                label={__(
                                                    "Map Zoom Level",
                                                    "essential-blocks"
                                                )}
                                                value={parseInt(mapZoom)}
                                                onChange={(value) =>
                                                    changeZoom(value)
                                                }
                                                min={0}
                                                max={20}
                                                allowReset={true}
                                            />
                                        )}

                                        <RangeControl
                                            label={__(
                                                "Map Height",
                                                "essential-blocks"
                                            )}
                                            value={parseInt(mapHeight)}
                                            onChange={(value) => {
                                                setAttributes({
                                                    mapHeight: value
                                                        ? value.toString()
                                                        : "400",
                                                });
                                            }}
                                            min={100}
                                            max={1400}
                                            allowReset={true}
                                        />
                                        <RangeControl
                                            label={__(
                                                "Marker Size",
                                                "essential-blocks"
                                            )}
                                            value={imageSize}
                                            onChange={(value) => {
                                                setAttributes({
                                                    imageSize: value,
                                                });
                                            }}
                                            min={0}
                                            max={200}
                                            allowReset={true}
                                        />
                                        <Divider />

                                        <BaseControl
                                            label={__(
                                                "Theme Source",
                                                "essential-blocks"
                                            )}
                                            id="eb-advance-heading-alignment"
                                        >
                                            <ButtonGroup id="eb-advance-heading-alignment">
                                                {THEME_SOURCES.map(
                                                    (item, key) => (
                                                        <Button
                                                            key={key}
                                                            // isLarge
                                                            isPrimary={
                                                                themeSource ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                themeSource !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    themeSource:
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
                                        {"google_theme" === themeSource && (
                                            <SelectControl
                                                label={__(
                                                    "Google Themes",
                                                    "essential-blocks"
                                                )}
                                                value={googleMapStyle}
                                                options={applyFilters(
                                                    "eb_google_theme_style",
                                                    GOOGLE_MAP_STYLES_NAMES
                                                )}
                                                onChange={(newGoogleMapStyle) =>
                                                    setAttributes({
                                                        googleMapStyle: newGoogleMapStyle,
                                                    })
                                                }
                                            />
                                        )}
                                        {"snazzy_theme" === themeSource && (
                                            <SelectControl
                                                label={__(
                                                    "Snazzy Themes",
                                                    "essential-blocks"
                                                )}
                                                value={snazzyMapStyle}
                                                options={applyFilters(
                                                    "eb_snazzy_theme_style",
                                                    SNAZZY_MAP_STYLES_NAMES
                                                )}
                                                onChange={(newSnazzyMapStyle) =>
                                                    setAttributes({
                                                        snazzyMapStyle: newSnazzyMapStyle,
                                                    })
                                                }
                                            />
                                        )}
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "Info Card",
                                            "essential-blocks"
                                        )}
                                        initialOpen={true}
                                    >
                                        <>
                                            <ColorControl
                                                label={__(
                                                    "Title Color",
                                                    "essential-blocks"
                                                )}
                                                color={titleColor}
                                                onChange={(titleColor) =>
                                                    setAttributes({
                                                        titleColor,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Title Hover Color",
                                                    "essential-blocks"
                                                )}
                                                color={titleHoverColor}
                                                onChange={(titleHoverColor) =>
                                                    setAttributes({
                                                        titleHoverColor,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                baseLabel={__(
                                                    "Typography",
                                                    "essential-blocks"
                                                )}
                                                typographyPrefixConstant={
                                                    typoPrefix_title
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                            <Divider />
                                            <ColorControl
                                                label={__(
                                                    "Description Color",
                                                    "essential-blocks"
                                                )}
                                                color={descColor}
                                                onChange={(descColor) =>
                                                    setAttributes({ descColor })
                                                }
                                            />
                                            <TypographyDropdown
                                                baseLabel={__(
                                                    "Typography",
                                                    "essential-blocks"
                                                )}
                                                typographyPrefixConstant={
                                                    typoPrefix_desc
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />
                                        </>
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "advance" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "Margin & Padding",
                                            "essential-blocks"
                                        )}
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
                                        title={__(
                                            "Background ",
                                            "essential-blocks"
                                        )}
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
