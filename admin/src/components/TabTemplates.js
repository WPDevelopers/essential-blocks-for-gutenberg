import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { getTemplates } from "./helpers/getTemplates";

import ReactPlayer from "react-player";

import templatelyLogo from "../icons/templately-logo.svg";
import iconMan from "../icons/iconMan.svg";
import iconBlueCheck from "../icons/iconBlueCheck.svg";
import { LayerRedIcon } from "../icons/layer-red-icon.js";
import playIcon from "../icons/play-icon.svg";

const { installPlugin, ebJsonStringCheck } = window.EBControls;

export default function TabTemplates() {
    let videoPlayIcon = <img src={playIcon} />;

    /**
     * 0 = 'not installed', 1 = 'Not activated', 2 = 'Activated'
     */
    const [templateCount, setTemplateCount] = useState(0);
    const [templates, setTemplates] = useState();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(0);
    const [buttonText, setButtonText] = useState("Install Templately");
    const plugin_file = "templately/templately.php";

    useEffect(() => {
        // getTemplateCount().then((res) => {
        //     if (res.body && ebJsonStringCheck(res.body)) {
        //         const result = JSON.parse(res.body);
        //         const counts = result?.data?.getCounts;
        //         const itemCounts = counts.filter((item, index) => item.key === 'items')
        //         if (typeof itemCounts === "object" && itemCounts[0].value) {
        //             setTemplateCount(itemCounts[0].value)
        //         }
        //     }
        // })
        getTemplates().then((res) => {
            if (res?.body && ebJsonStringCheck(res?.body)) {
                const result = JSON.parse(res.body);
                const packs = result?.data?.packs.data;
                if (typeof packs === "object" && packs.length > 0) {
                    setTemplates(packs);
                }
            }
        });

        const templately = EssentialBlocksLocalize.get_plugins[plugin_file];
        if (templately) {
            if (templately.active) {
                setStatus(2);
                setButtonText("Activated");
            } else {
                setStatus(1);
                setButtonText("Active Templately");
            }
        }
    }, []);

    const installTemplately = () => {
        if (status === 2) {
            return;
        }
        setLoading(true);
        installPlugin("templately", plugin_file).then((data) => {
            const res = JSON.parse(data);
            if (res.success) {
                setStatus(2);
                setButtonText("Installed and Activated");
                setLoading(false);
            } else {
                setStatus(0);
                setButtonText("Couldn't Activated the plugin!");
                setLoading(false);
            }
        });
    };

    const handleTemplateUrl = (slug) => {
        if (status === 2) {
            return (
                EssentialBlocksLocalize.eb_admin_url +
                "admin.php?page=templately&path=gutenberg%2Fpacks"
            );
        } else {
            return "https://templately.com/pack/" + slug;
        }
    };

    const browseTemplates = () => {
        if (status === 2) {
            return (
                EssentialBlocksLocalize.eb_admin_url +
                "admin.php?page=templately&path=gutenberg%2Fpacks"
            );
        } else {
            return "https://templately.com/platform/gutenberg";
        }
    };

    const displayDownloadCount = (number) => {
        if (typeof number !== 'number') {
            number = Number(number)
        }
        if (number >= 1000) {
            return (Math.floor(number / 1000)) + 'k+';
        }
        return number.toString();
    }

    return (
        <>
            <div className="eb-admin-grid">
                <div className="eb-col-12">
                    <div className="eb-admin-block eb-templates-intro-block mb30">
                        <div className="eb-admin-grid">
                            <div className="eb-col-5">
                                <img
                                    src={templatelyLogo}
                                    className="temlately-logo"
                                />
                                <h2>
                                    <span>
                                        {/* {__(templateCount+"+", "essential-blocks")} */}
                                        {__("5000+", "essential-blocks")}
                                    </span>

                                    {__(
                                        " Stunning Templates for WordPress",
                                        "essential-blocks"
                                    )}
                                </h2>
                                <ul>
                                    <li>
                                        <LayerRedIcon></LayerRedIcon>
                                        {__(
                                            "Access Thousands Of Stunning, Ready Website Templates",
                                            "essential-blocks"
                                        )}
                                    </li>
                                    <li>
                                        <img src={iconBlueCheck} />
                                        {__(
                                            "Save Your Design Anywhere With MyCloud Storage Space",
                                            "essential-blocks"
                                        )}
                                    </li>
                                    <li>
                                        <img src={iconMan} />
                                        {__(
                                            "Add Team Members & Collaborate On Cloud With Templately WorkSpace",
                                            "essential-blocks"
                                        )}
                                    </li>
                                </ul>
                                <button
                                    className="eb-btn eb-btn-primary eb-install-button"
                                    onClick={() => installTemplately()}
                                >
                                    {loading && (
                                        <img
                                            className="eb-install-loader"
                                            src={`${EssentialBlocksLocalize.eb_plugins_url}/assets/images/loading.svg`}
                                        />
                                    )}

                                    {buttonText}
                                </button>
                            </div>
                            <div className="eb-col-7">
                                <div className="eb-admin-video-block">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=mdPrcpR46GI"
                                        loop={true}
                                        muted={true}
                                        playing={true}
                                        controls={false}
                                        light={`${EssentialBlocksLocalize.image_url}/admin/templately-overlay.jpeg`}
                                        playIcon={videoPlayIcon}
                                        className="eb-react-player"
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {typeof templates === "object" && (
                        <>
                            <div className="eb-admin-block">
                                <div className="templates-heading-wrapper eb-block-xs">
                                    <h3>
                                        {__(
                                            "Popular Templates",
                                            "essential-blocks"
                                        )}
                                    </h3>
                                </div>

                                <div className="eb-admin-grid eb-templates-wrapper">
                                    {templates.map((item, index) => (
                                        <div
                                            key={index}
                                            className="eb-templates-block"
                                        >
                                            <span
                                                className={`label ${item.price == "0"
                                                    ? "starter"
                                                    : "pro"
                                                    } `}
                                            >
                                                {item.price != "0" && (
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_435_1480)">
                                                            <path
                                                                d="M8 4L10.6667 8L14 5.33333L12.6667 12H3.33333L2 5.33333L5.33333 8L8 4Z"
                                                                stroke="white"
                                                                stroke-width="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_435_1480">
                                                                <rect
                                                                    width="16"
                                                                    height="16"
                                                                    fill="white"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                )}
                                                {item.price == "0"
                                                    ? "Starter"
                                                    : "Pro"}
                                            </span>
                                            <a
                                                href={handleTemplateUrl(
                                                    item.slug
                                                )}
                                                target="_blank"
                                            >
                                                <img src={item.thumbnail} />
                                                <h4>{item.name}</h4>
                                            </a>

                                            <div className="eb-templates-meta">
                                                <div className="rating">
                                                    <svg
                                                        width="12"
                                                        height="12"
                                                        viewBox="0 0 12 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_435_1413)">
                                                            <path
                                                                d="M4.12151 3.66996L0.931505 4.13246L0.875005 4.14396C0.789475 4.16667 0.711503 4.21167 0.649051 4.27436C0.5866 4.33706 0.541907 4.41521 0.519536 4.50082C0.497165 4.58644 0.497919 4.67647 0.521719 4.7617C0.545519 4.84693 0.591513 4.92432 0.655005 4.98596L2.96601 7.23546L2.42101 10.413L2.41451 10.468C2.40927 10.5564 2.42764 10.6447 2.46773 10.7237C2.50782 10.8027 2.5682 10.8697 2.64267 10.9177C2.71715 10.9657 2.80305 10.9931 2.89158 10.997C2.98011 11.0009 3.06809 10.9812 3.14651 10.94L5.99951 9.43996L8.84601 10.94L8.89601 10.963C8.97854 10.9955 9.06823 11.0054 9.15588 10.9918C9.24354 10.9782 9.326 10.9416 9.3948 10.8856C9.46361 10.8296 9.51628 10.7563 9.54742 10.6733C9.57856 10.5902 9.58705 10.5004 9.57201 10.413L9.02651 7.23546L11.3385 4.98546L11.3775 4.94296C11.4332 4.87435 11.4697 4.79219 11.4834 4.70486C11.497 4.61753 11.4872 4.52815 11.4551 4.44583C11.4229 4.3635 11.3695 4.29118 11.3002 4.23622C11.231 4.18126 11.1485 4.14563 11.061 4.13296L7.87101 3.66996L6.44501 0.779961C6.40374 0.696229 6.33986 0.625719 6.2606 0.576414C6.18134 0.527108 6.08985 0.500977 5.99651 0.500977C5.90316 0.500977 5.81168 0.527108 5.73241 0.576414C5.65315 0.625719 5.58927 0.696229 5.54801 0.779961L4.12151 3.66996Z"
                                                                fill="#F1AF44"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_435_1413">
                                                                <rect
                                                                    width="12"
                                                                    height="12"
                                                                    fill="white"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                    {item?.rating || 5}
                                                </div>
                                                <div className="download">
                                                    <svg
                                                        width="12"
                                                        height="12"
                                                        viewBox="0 0 12 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_435_1418)">
                                                            <path
                                                                d="M9.49999 9.0001C9.96412 9.0001 10.4092 8.81572 10.7374 8.48753C11.0656 8.15935 11.25 7.71423 11.25 7.2501C11.25 6.78597 11.0656 6.34085 10.7374 6.01266C10.4092 5.68447 9.96412 5.5001 9.49999 5.5001H8.99999C9.07295 5.17508 9.07406 4.8403 9.00326 4.5149C8.93247 4.18949 8.79115 3.87982 8.58738 3.60356C8.3836 3.32731 8.12137 3.08988 7.81564 2.90484C7.50991 2.71979 7.16669 2.59076 6.80555 2.5251C6.44441 2.45944 6.07245 2.45844 5.71088 2.52215C5.34932 2.58587 5.00524 2.71306 4.69829 2.89645C4.07838 3.26684 3.64734 3.84369 3.49999 4.5001C2.96697 4.47875 2.44276 4.6353 2.01713 4.94295C1.5915 5.2506 1.29091 5.69021 1.16683 6.18651C1.04276 6.68281 1.10291 7.20494 1.33699 7.66349C1.57108 8.12204 1.96454 8.48849 2.44999 8.7001"
                                                                stroke="#EE8290"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M6 6.5V11"
                                                                stroke="#EE8290"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M4.5 9.5L6 11L7.5 9.5"
                                                                stroke="#EE8290"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_435_1418">
                                                                <rect
                                                                    width="12"
                                                                    height="12"
                                                                    fill="white"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    {displayDownloadCount(item?.downloads || 0)}
                                                </div>
                                                {/* <div className="template-download">
                                                    <svg
                                                        width="12"
                                                        height="12"
                                                        viewBox="0 0 12 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_435_1425)">
                                                            <path
                                                                d="M8.9663 5.46975C8.90555 5.3355 8.77205 5.25 8.62505 5.25H7.12505V0.375C7.12505 0.168 6.95705 0 6.75005 0H5.25005C5.04305 0 4.87505 0.168 4.87505 0.375V5.25H3.37505C3.22805 5.25 3.09455 5.33625 3.0338 5.46975C2.9723 5.604 2.9963 5.76075 3.09305 5.87175L5.71805 8.87175C5.7893 8.9535 5.89205 9 6.00005 9C6.10805 9 6.2108 8.95275 6.28205 8.87175L8.90705 5.87175C9.00455 5.7615 9.02705 5.604 8.9663 5.46975Z"
                                                                fill="#5453F4"
                                                            />
                                                            <path
                                                                d="M10.125 8.25V10.5H1.875V8.25H0.375V11.25C0.375 11.6648 0.711 12 1.125 12H10.875C11.2898 12 11.625 11.6648 11.625 11.25V8.25H10.125Z"
                                                                fill="#5453F4"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_435_1425">
                                                                <rect
                                                                    width="12"
                                                                    height="12"
                                                                    fill="white"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    Insert Template
                                                </div> */}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={browseTemplates()}
                                    target={status === 2 ? "_self" : "_blank"}
                                    className="eb-btn eb-btn-primary eb-btn-center"
                                >
                                    {__(
                                        "Browse More Templates",
                                        "essential-blocks"
                                    )}
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
