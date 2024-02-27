import { useEffect, useState } from "@wordpress/element";
import { applyFilters } from "@wordpress/hooks";
import Switch from "rc-switch";
import "../../../assets/css/switch.css";
import { __ } from "@wordpress/i18n";

import { EditIcon } from "../icons/icon-edit";
import EBLoader from "./Loader";

const { fetchEBSettingsData, saveEBSettingsData } = window.EBControls;
import GoogleMaps from "./modal/googleMaps";
import Instagram from "./modal/instagram";
import OpenseaNft from "./modal/openseaNft";
import Openverse from "./modal/openverse";
import ResponsiveBreakPoints from "./modal/responsiveBreakPoints";

/**
 * TabOptions Components
 * @returns
 */
export default function TabOptions() {
    const [responsiveModal, setResponsiveModal] = useState(false);
    const [optionModal, setOptionModal] = useState(false);
    const [clickedItem, setClickedItem] = useState("");
    const [settingsData, setSettingsData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [loaderData, setLoaderData] = useState({
        loading: false,
        response: false,
        message: "",
    });

    useEffect(() => {
        /**
         * fetch eb_settings data using AJAX
         */
        fetchEBSettingsData("eb_settings").then((data) => {
            setSettingsData(data ?? {});
        });

    }, []);

    const optimizations = {
        googleFont: {
            logo: `${EssentialBlocksLocalize.image_url}/admin/logo-google-font.png`,
            title: "Google Fonts",
            description: __(
                "Enable Google Fonts to get access to 1400+ exclusive fonts for all the fully customizable blocks of Essential Blocks.",
                "essential-blocks"
            ),
            doc: "https://essential-blocks.com/docs/configure-google-fonts/",
        },
        enableFontawesome: {
            logo: `${EssentialBlocksLocalize.image_url}/admin/logo-fontawesome.png`,
            title: "Font Awesome",
            description: __("Enable Font Awesome to get access to 2,000+ exclusive icon library and toolkit for all the fully customizable blocks of Essential Blocks.", "essential-blocks"),
        },
    };

    const apiIntegrations = applyFilters('eb_admin_option_integrations', {
        googleMapApi: {
            logo: `${EssentialBlocksLocalize.image_url}/admin/logo-google-map.png`,
            title: __("Google Maps", "essential-blocks"),
            description: __(
                __(
                    "You have to retrieve API key to use Google Maps from Essential Blocks.",
                    "essential-blocks"
                ),
                "essential-blocks"
            ),
            doc: "https://essential-blocks.com/docs/retrieve-google-maps-api/",
            component: GoogleMaps,
        },
        instagramToken: {
            logo: `${EssentialBlocksLocalize.image_url}/admin/logo-instagram.png`,
            title: __("Instagram", "essential-blocks"),
            description: __(
                "To showcase your Instagram feed on your website, collect Instagram access tokens.",
                "essential-blocks"
            ),
            doc:
                "https://essential-blocks.com/docs/retrieve-instagram-access-token/",
            component: Instagram,
        },
        openseaApi: {
            logo: `${EssentialBlocksLocalize.image_url}/admin/logo-opensea.png`,
            title: "Opensea NFT",
            description: __(
                "To display your OpenSea NFT items, collections, wallets, etc. connect the API key here.",
                "essential-blocks"
            ),
            doc: "https://essential-blocks.com/docs/retrieve-opensea-nft-api/",
            component: OpenseaNft,
        },
        openverseApi: {
            logo: `${EssentialBlocksLocalize.image_url}/admin/logo-openverse.png`,
            title: "Openverse",
            description: __(
                "To get unlimited access to Openverse images, provide your email & project name to generate API keys.",
                "essential-blocks"
            ),
            doc: "https://essential-blocks.com/docs/generate-openverse-api/",
            component: Openverse,
        },
    });

    /**
     * handleEditBtnClick
     * @param {*} item
     */
    const handleEditBtnClick = (item) => {
        setOptionModal(true);
        setClickedItem(item);
    };

    const handelResponsiveBreakPoints = () => {
        setResponsiveModal(true);
    };

    /**
     * handleOptimizationSwitch
     * @param {*} item
     * @param {*} value
     */
    const handleOptimizationSwitch = (item, value) => {
        setLoaderData({
            loading: true,
            response: false,
            message: "",
        });

        //Save Function
        saveEBSettingsData(item, value).then((data) => {
            const res = JSON.parse(data);
            if (res.success) {
                setLoaderData({
                    loading: true,
                    response: true,
                    message: __("Updated", "essential-blocks"),
                });
                setSettingsData({
                    ...settingsData,
                    [item]: Boolean(value).toString(),
                });
                setIsLoading(false);
            } else {
                setLoaderData({
                    loading: true,
                    response: true,
                    message: "Something went wrong! Please tyr again.",
                });
            }
            setTimeout(() => {
                setLoaderData({
                    loading: false,
                    response: false,
                    message: "",
                });
            }, [500]);
        });
    };

    const ClickedComponent = apiIntegrations[clickedItem]?.component;

    const regenerateAssets = () => {
        setLoaderData({
            loading: true,
            response: false,
            message: "",
        });
        const formData = new window.FormData();
        formData.append("action", "eb_regenerate_assets");
        formData.append("admin_nonce", EssentialBlocksLocalize.admin_nonce);
        formData.append("security", EssentialBlocksLocalize.regenerate_assets_nonce);
        formData.append("value", true);

        fetch(EssentialBlocksLocalize.ajax_url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.text())
            .then((data) => {
                const res = JSON.parse(data);
                if (res.success) {
                    setLoaderData({
                        loading: true,
                        response: true,
                        message: __(
                            "Assets Regenerated!",
                            "essential-blocks"
                        ),
                    });
                }
                setTimeout(() => {
                    setLoaderData({
                        loading: false,
                        response: false,
                        message: "",
                    });
                }, [1000]);
            });
    };

    return (
        <>
            {/* {isLoading && <EBLoader />} */}
            <EBLoader settings={loaderData} />
            <div>
                <h2 className="eb-admin-block-title">API Integrations</h2>
                <div className="eb-admin-grid">
                    {Object.keys(apiIntegrations).map((item, index) => (
                        <div
                            className="eb-col-3 eb-admin-block eb-option-block"
                            key={index}
                        >
                            {/* <div className="eb-admin-block eb-option-block"> */}
                            <div className="option-block-header">
                                <img src={apiIntegrations[item].logo} />
                                <div className="block-content">
                                    <a
                                        target="_blank"
                                        className="element__icon"
                                        onClick={() => handleEditBtnClick(item)}
                                    >
                                        <EditIcon></EditIcon>

                                        <span className="tooltip-text">
                                            Edit
                                        </span>
                                    </a>

                                    {/* <label
											className="eb-admin-checkbox-label"
										>
											<Switch
												checked={true}
												defaultChecked={true}
												disabled={false}
												checkedChildren="ON"
												unCheckedChildren="OFF"
											/>
										</label> */}
                                </div>
                            </div>
                            <h6 className="eb-admin-block__title">
                                {apiIntegrations[item].title}
                            </h6>
                            <p className="eb-admin-block__text">
                                {__(apiIntegrations[item].description)}
                            </p>
                            <a
                                target="_blank"
                                href={apiIntegrations[item].doc}
                                className="eb-admin-block__link"
                            >
                                {__("API Documentation", "essential-blocks")}
                            </a>
                            {/* </div> */}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="eb-admin-block-title">
                    {__("Optimization Options", "essential-blocks")}
                </h2>
                <div className="eb-admin-grid">
                    {Object.keys(optimizations).map((item, index) => (
                        <div className="eb-col-4" key={index}>
                            <div className="eb-admin-block eb-option-block ">
                                <div className="option-block-header">
                                    <img
                                        src={optimizations[item].logo}
                                        className="block-icon"
                                    />
                                    <div className="block-content">
                                        <label className="eb-admin-checkbox-label">
                                            <Switch
                                                checked={
                                                    settingsData[item] ===
                                                        "false"
                                                        ? false
                                                        : true
                                                }
                                                onChange={(checked) =>
                                                    handleOptimizationSwitch(
                                                        item,
                                                        checked
                                                    )
                                                }
                                                defaultChecked={true}
                                                disabled={false}
                                                checkedChildren="ON"
                                                unCheckedChildren="OFF"
                                            />
                                        </label>
                                    </div>
                                </div>

                                <h4 className="eb-admin-block__title">
                                    {optimizations[item].title}
                                </h4>
                                <p className="eb-admin-block__text mp0">
                                    {optimizations[item].description}
                                </p>
                                {optimizations[item]?.doc && (
                                    <a
                                        target="_blank"
                                        href={optimizations[item].doc}
                                        className="eb-admin-block__link"
                                    >
                                        {__(
                                            "API Documentation",
                                            "essential-blocks"
                                        )}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="eb-admin-grid">
                <div className="eb-col-12">
                    <h2 className="eb-admin-block-title">
                        {__("Assets Generation", "essential-blocks")}
                    </h2>
                    <div className="eb-admin-block regenerate-asset-block eb-block-xs">
                        <div className="content">
                            <h5 className="eb-admin-block__title">
                                {__("Asset Regeneration", "essential-blocks")}
                            </h5>
                            <p>
                                {__(
                                    "Essential Blocks styles & scripts are saved in Uploads folder. This option will clear all those generated files.",
                                    "essential-blocks"
                                )}
                            </p>
                        </div>

                        <button
                            className="eb-btn eb-btn-border"
                            onClick={() => regenerateAssets()}
                        >
                            {__("Regenerate Assets", "essential-blocks")}
                        </button>
                    </div>
                </div>
            </div>

            <div className="eb-admin-grid">
                <div className="eb-col-12">
                    <h2 className="eb-admin-block-title">
                        {__("Responsive Breakpoints", "essential-blocks")}
                    </h2>
                    <div className="eb-admin-block regenerate-asset-block eb-block-xs">
                        <div className="content">
                            <h5 className="eb-admin-block__title">
                                {__("Responsive Breakpoints", "essential-blocks")}
                            </h5>
                            <p>
                                {__(
                                    "Adjust the “Responsive Breakpoint” settings to define the screen widths at which your site will adapt for optimal viewing on tablets and mobile devices.",
                                    "essential-blocks"
                                )}
                            </p>
                        </div>

                        <button
                            className="eb-btn eb-btn-border"
                            onClick={() => handelResponsiveBreakPoints()}
                        >
                            {__("Configure Breakpoints", "essential-blocks")}
                        </button>
                    </div>
                </div>
            </div>

            {optionModal && (
                <div className="option-modal">
                    <div className="option-modal__inner">
                        <button
                            className="close-btn"
                            onClick={() => setOptionModal(false)}
                        >
                            <span className="dashicons dashicons-no"></span>
                        </button>
                        <ClickedComponent
                            setTrigger={setOptionModal}
                            settingsKey={clickedItem}
                            settingsData={settingsData}
                            setSettingsData={setSettingsData}
                        />
                    </div>
                </div>
            )}

            {responsiveModal && (
                <div className="option-modal">
                    <div className="option-modal__inner">
                        <button
                            className="close-btn"
                            onClick={() => setResponsiveModal(false)}
                        >
                            <span className="dashicons dashicons-no"></span>
                        </button>

                        <ResponsiveBreakPoints
                            setTrigger={setResponsiveModal}
                            settingsData={settingsData}
                            setSettingsData={setSettingsData}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
