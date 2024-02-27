import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { Button, Modal } from "@wordpress/components";
import Switch from "rc-switch";
import "../../../assets/css/switch.css";
import SaveButton from "./SaveButton";

// icons
import { IconDoc } from "../icons/blocks/icon-doc";
import { IconDemo } from "../icons/blocks/icon-demo";
import { IconTemplate } from "../icons/blocks/icon-template";

//helper functions
const { saveEBSettingsData } = window.EBControls;
import EBLoader from "./Loader";
// import EBSaveConfirm from "./save-confirm"

/**
 * function to order object
 * @param {object} unordered
 * @returns object
 */
const sortObject = (unordered) => {
    if (Object.keys(unordered).length === 0) {
        return unordered
    }
    const ordered = Object.keys(unordered).sort().reduce(
        (obj, key) => {
            obj[key] = unordered[key];
            return obj;
        },
        {}
    );
    return ordered
}

export default function Checkbox() {
    const {
        all_blocks,
        all_blocks_default,
        is_pro_active,
        upgrade_pro_url
    } = EssentialBlocksLocalize;
    const [blocks, setBlocks] = useState(sortObject(all_blocks));
    const [groupBlocks, setGroupBlocks] = useState({});
    const [enableDisable, setEnableDisable] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loaderData, setLoaderData] = useState({
        loading: false,
        response: false,
        message: "",
    });
    const pro_active = is_pro_active && is_pro_active === "true" ? true : false;

    useEffect(() => {
        const updatedBlocks = { ...blocks };
        if (!pro_active && typeof blocks === "object") {
            Object.keys(updatedBlocks).map((item) => {
                if (updatedBlocks[item].is_pro) {
                    updatedBlocks[item] = {
                        ...updatedBlocks[item],
                        visibility: false,
                    };
                }
            });
            setBlocks(updatedBlocks);
        }

        //Blocks by Group
        const groupedData = {};
        // Loop through the data and group items by category
        for (const key in updatedBlocks) {
            const item = updatedBlocks[key];
            const category = item.category;

            // Add the item to the corresponding category
            groupedData[category] = {
                ...groupedData[category],
                [item.value]: item
            };
        }

        //Set State
        setGroupBlocks(sortObject(groupedData));
    }, []);

    const onChangeSwitch = (checked, blockName) => {
        let newblocks = { ...blocks };
        if (!pro_active && newblocks[blockName].is_pro) {
            setShowModal(true);
        } else {
            setLoaderData({
                loading: true,
                response: false,
                message: "",
            }); //Show Loader

            Object.keys(newblocks).map(
                (block) =>
                    newblocks[block].value === blockName &&
                    (newblocks[block].visibility = String(checked))
            );

            //Save to EB Settings
            saveToEbSettings(blocks);
        }
    };

    const saveToEbSettings = (blocks) => {
        setLoaderData({
            loading: true,
            response: true,
            message: "Saving...",
        });
        saveEBSettingsData("", JSON.stringify(blocks), "enable_disable").then(
            (data) => {
                const res = JSON.parse(data);
                if (res.success) {
                    setLoaderData({
                        loading: true,
                        response: true,
                        message: "Saved",
                    });
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
                }, [1500]);
            }
        );
    };

    const handelEnableDisable = (checked) => {
        setEnableDisable(checked);

        let newblocks = { ...blocks };

        if (checked) {
            Object.keys(newblocks).map((block) => {
                if (is_pro_active === 'false' && newblocks[block].is_pro) {
                    newblocks[block].visibility = "false"
                }
                else {
                    newblocks[block].visibility = "true"
                }
            });
        } else {
            Object.keys(newblocks).map(
                (block) => (newblocks[block].visibility = "false")
            );
        }

        saveToEbSettings(newblocks);
        setBlocks(newblocks);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const groupNames = {
        content: 'Content Blocks',
        creative: 'Creative Blocks',
        dynamic: 'Dynamic Blocks',
        form: 'Form Blocks',
        marketing: 'Marketing Blocks',
        social: 'Social Blocks',
        woocommerce: 'WooCommerce Blocks',
        layout: 'Layout Blocks',
    }

    return (
        <>
            <div className="eb-admin-grid">
                <div className="eb-col-12">
                    <div className="eb-admin-block eb-global-controls-block eb-block-xs">
                        <div className="content">
                            <h4>{__("Global Control", "essential-blocks")}</h4>
                            <p>
                                {__(
                                    "Use the toggle button to activate or deactivate all the blocks of Essential Blocks at once.",
                                    "essential-blocks"
                                )}
                            </p>
                        </div>

                        <div className="eb-global-btn-wrapper">
                            <button
                                className="eb-btn eb-btn-border eb-btn-md"
                                onClick={() => handelEnableDisable(false)}
                            >
                                {__("Disable All", "essential-blocks")}
                            </button>
                            <button
                                className="eb-btn eb-btn-primary eb-btn-md"
                                onClick={() => handelEnableDisable(true)}
                            >
                                {__("Enable All", "essential-blocks")}
                            </button>
                        </div>

                        {/* <div className="controls">
							<span className="switch-status">Inactive All</span>
							<label htmlFor="enable" className="eb-admin-checkbox-label">
								<Switch
									checked={enableDisable}
									onChange={(checked) => handelEnableDisable(checked)}
									defaultChecked={enableDisable}
									disabled={false}
									checkedChildren="ON"
									unCheckedChildren="OFF"
								/>
							</label>
							<span className="switch-status">Active All</span>
						</div> */}
                    </div>
                </div>
            </div>
            {showModal && (
                <>
                    <div className="eb_pro_modal">
                        <div className="eb_pro_modal_content">
                            <div
                                className="eb_pro_modal_close"
                                onClick={() => closeModal()}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.0006 8.82208L14.1253 4.69727L15.3038 5.87577L11.1791 10.0006L15.3038 14.1253L14.1253 15.3038L10.0006 11.1791L5.87577 15.3038L4.69727 14.1253L8.82208 10.0006L4.69727 5.87577L5.87577 4.69727L10.0006 8.82208Z"
                                        fill="#6A72A5"
                                    />
                                </svg>
                            </div>
                            <div className="eb_pro_modal_icon">
                                <svg
                                    width="56"
                                    height="56"
                                    viewBox="0 0 56 56"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M44.3339 22.3531L38.3372 23.8465L30.8472 14.5131C30.5193 14.1044 30.1037 13.7745 29.6312 13.5478C29.1587 13.3211 28.6413 13.2034 28.1172 13.2034C27.5931 13.2034 27.0757 13.3211 26.6032 13.5478C26.1307 13.7745 25.7152 14.1044 25.3872 14.5131L17.8972 23.8465L11.7839 22.3531C11.198 22.2129 10.5859 22.2253 10.0062 22.389C9.42645 22.5527 8.89837 22.8623 8.47239 23.2883C8.04641 23.7143 7.73677 24.2424 7.57305 24.8221C7.40932 25.4019 7.39698 26.0139 7.53721 26.5998L11.6672 41.1131C11.8083 41.6178 12.1153 42.0603 12.5386 42.3693C12.9618 42.6783 13.4768 42.8358 14.0005 42.8165H42.0005C42.5243 42.8358 43.0392 42.6783 43.4625 42.3693C43.8858 42.0603 44.1927 41.6178 44.3339 41.1131L48.4872 26.5998C48.6213 26.0232 48.6079 25.4222 48.4484 24.8521C48.2888 24.2821 47.9882 23.7615 47.5743 23.3383C47.1604 22.9151 46.6466 22.603 46.0802 22.4308C45.5139 22.2586 44.9133 22.2319 44.3339 22.3531Z"
                                        fill="#EFA83C"
                                    />
                                    <path
                                        d="M6.41667 19.8333C8.0275 19.8333 9.33333 18.5275 9.33333 16.9167C9.33333 15.3058 8.0275 14 6.41667 14C4.80584 14 3.5 15.3058 3.5 16.9167C3.5 18.5275 4.80584 19.8333 6.41667 19.8333Z"
                                        fill="#EFA83C"
                                    />
                                    <path
                                        d="M49.5827 19.8333C51.1935 19.8333 52.4993 18.5275 52.4993 16.9167C52.4993 15.3058 51.1935 14 49.5827 14C47.9719 14 46.666 15.3058 46.666 16.9167C46.666 18.5275 47.9719 19.8333 49.5827 19.8333Z"
                                        fill="#EFA83C"
                                    />
                                    <path
                                        d="M28.0007 9.91659C29.6115 9.91659 30.9173 8.61075 30.9173 6.99992C30.9173 5.38909 29.6115 4.08325 28.0007 4.08325C26.3898 4.08325 25.084 5.38909 25.084 6.99992C25.084 8.61075 26.3898 9.91659 28.0007 9.91659Z"
                                        fill="#EFA83C"
                                    />
                                    <path
                                        d="M41.9994 51.3332H13.9993C13.3805 51.3332 12.787 51.0873 12.3494 50.6498C11.9118 50.2122 11.666 49.6187 11.666 48.9998C11.666 48.381 11.9118 47.7875 12.3494 47.3499C12.787 46.9123 13.3805 46.6665 13.9993 46.6665H41.9994C42.6182 46.6665 43.2117 46.9123 43.6493 47.3499C44.0869 47.7875 44.3327 48.381 44.3327 48.9998C44.3327 49.6187 44.0869 50.2122 43.6493 50.6498C43.2117 51.0873 42.6182 51.3332 41.9994 51.3332Z"
                                        fill="#EFA83C"
                                    />
                                </svg>
                            </div>
                            <h4>Please Upgrade to pro to enable this block</h4>
                            <p>
                                You have already activated Essential Blocks Pro.
                                You will able to update the plugin right from
                                your WP dashboard.
                            </p>
                            <a
                                className="eb-btn eb-btn-primary eb-btn-md"
                                variant="secondary"
                                href={upgrade_pro_url}
                                target="_blank"
                            >
                                Upgrade to pro
                            </a>
                        </div>
                    </div>
                </>
            )}
            <div className="eb-admin-checkboxes-group-wrapper">

                {Object.keys(groupBlocks).map((group) => (
                    <>
                        <div className="eb-col-12 eb-group-title-wrapper">
                            {groupNames[group] && (
                                <h2 className="eb-block-group-title">{groupNames[group]}</h2>
                            )}
                        </div>
                        <div className="eb-admin-checkboxes-wrapper eb-admin-grid">
                            {groupBlocks[group] && Object.keys(groupBlocks[group]).length > 0 && Object.keys(groupBlocks[group]).map((block, index) => (
                                <>
                                    <div
                                        key={index}
                                        className={`eb-col-4 eb-admin-checkbox eb-block-box ${all_blocks_default[block]?.hasOwnProperty("status")
                                            ? "eb-block-label " +
                                            all_blocks_default[block].status
                                            : ""
                                            } ${all_blocks_default[block]?.is_pro ? "pro" : ""}`}
                                    >
                                        <div className="block-title">
                                            <img
                                                src={all_blocks_default[block]?.icon}
                                                className="block-icon"
                                            />
                                            <h4>{all_blocks_default[block]?.label}</h4>
                                        </div>

                                        <div className="block-content">
                                            <a
                                                target="_blank"
                                                href={all_blocks_default[block]?.demo}
                                                className="element__icon"
                                            >
                                                <IconDemo></IconDemo>

                                                <span className="tooltip-text">Live Demo</span>
                                            </a>
                                            <a
                                                target="_blank"
                                                href={all_blocks_default[block]?.doc}
                                                className="element__icon"
                                            >
                                                <IconDoc></IconDoc>

                                                <span className="tooltip-text">
                                                    Documentation
                                                </span>
                                            </a>

                                            <label
                                                htmlFor={blocks[block]?.value}
                                                className="eb-admin-checkbox-label"
                                            >
                                                <Switch
                                                    checked={blocks[block]?.visibility == "true"}
                                                    onChange={(checked) =>
                                                        onChangeSwitch(
                                                            checked,
                                                            blocks[block]?.value
                                                        )
                                                    }
                                                    defaultChecked={
                                                        blocks[block]?.visibility == "true"
                                                    }
                                                    disabled={false}
                                                    checkedChildren="ON"
                                                    unCheckedChildren="OFF"
                                                />
                                            </label>
                                        </div>
                                        {is_pro_active === "false" && all_blocks_default[block]?.is_pro && (
                                            <div className="eb-pro">Pro</div>
                                        )}
                                    </div>
                                </>
                            ))}
                        </div>
                    </>
                ))}

            </div >

            <EBLoader settings={loaderData} />
        </>
    );
}
