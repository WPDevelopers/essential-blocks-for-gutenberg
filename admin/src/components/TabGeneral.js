import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import { applyFilters } from "@wordpress/hooks";

import ReactPlayer from "react-player";

import fileGreen from "../icons/file-icon-green.svg";
import fileBlue from "../icons/file-icon-blue.svg";
import iconCommunity from "../icons/icon-community.svg";
import iconReveiw from "../icons/icon-review.svg";
import playIcon from "../icons/play-icon.svg";
import iconHelp from "../icons/icon-help.svg";
import iconMinus from "../icons/icon-minus.svg";
import iconPlus from "../icons/icon-plus.svg";

import eblogo from "../../../assets/images/eb-logo.svg";



export default function TabGeneral() {
    let videoPlayIcon = <img src={playIcon} />;

    const [changelogToggle, setChangelogToggle] = useState(false);

    const visibleStyle = { height: "auto", opacity: 1, overflow: "visible" };
    const hiddenStyle = { opacity: 0, height: 0, overflow: "hidden" };

    return (
        <>
            <div className="eb-admin-grid eb-block-md">
                <div className="eb-col-8">
                    {EssentialBlocksLocalize?.is_pro_active === "false" && (
                        <div className="eb-admin-block mb30 pro-teaser-block block-flex">
                            <div className="pro-teaser-icon">
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M31.6669 15.9666L27.3836 17.0332L22.0336 10.3666C21.7993 10.0746 21.5025 9.83895 21.165 9.67702C20.8275 9.5151 20.4579 9.43103 20.0836 9.43103C19.7092 9.43103 19.3397 9.5151 19.0022 9.67702C18.6647 9.83895 18.3678 10.0746 18.1336 10.3666L12.7836 17.0332L8.41691 15.9666C7.99843 15.8664 7.56125 15.8752 7.14715 15.9922C6.73304 16.1091 6.35584 16.3303 6.05157 16.6346C5.7473 16.9388 5.52613 17.316 5.40918 17.7302C5.29223 18.1443 5.28342 18.5814 5.38358 18.9999L8.33358 29.3666C8.43439 29.7271 8.65363 30.0432 8.95598 30.2639C9.25832 30.4846 9.62617 30.5971 10.0002 30.5833H30.0002C30.3743 30.5971 30.7422 30.4846 31.0445 30.2639C31.3469 30.0432 31.5661 29.7271 31.6669 29.3666L34.6336 18.9999C34.7293 18.5881 34.7198 18.1588 34.6058 17.7516C34.4919 17.3444 34.2772 16.9725 33.9815 16.6702C33.6859 16.368 33.3189 16.145 32.9143 16.022C32.5098 15.8991 32.0808 15.88 31.6669 15.9666Z"
                                        fill="#EFA83C"
                                    />
                                    <path
                                        d="M4.58333 14.1667C5.73393 14.1667 6.66667 13.2339 6.66667 12.0833C6.66667 10.9327 5.73393 10 4.58333 10C3.43274 10 2.5 10.9327 2.5 12.0833C2.5 13.2339 3.43274 14.1667 4.58333 14.1667Z"
                                        fill="#EFA83C"
                                    />
                                    <path
                                        d="M35.4163 14.1667C36.5669 14.1667 37.4997 13.2339 37.4997 12.0833C37.4997 10.9327 36.5669 10 35.4163 10C34.2657 10 33.333 10.9327 33.333 12.0833C33.333 13.2339 34.2657 14.1667 35.4163 14.1667Z"
                                        fill="#EFA83C"
                                    />
                                    <path
                                        d="M20.0003 7.08329C21.1509 7.08329 22.0837 6.15055 22.0837 4.99996C22.0837 3.84937 21.1509 2.91663 20.0003 2.91663C18.8497 2.91663 17.917 3.84937 17.917 4.99996C17.917 6.15055 18.8497 7.08329 20.0003 7.08329Z"
                                        fill="#EFA83C"
                                    />
                                    <path
                                        d="M29.9997 36.6666H9.99967C9.55765 36.6666 9.13372 36.491 8.82116 36.1784C8.5086 35.8659 8.33301 35.4419 8.33301 34.9999C8.33301 34.5579 8.5086 34.134 8.82116 33.8214C9.13372 33.5088 9.55765 33.3333 9.99967 33.3333H29.9997C30.4417 33.3333 30.8656 33.5088 31.1782 33.8214C31.4908 34.134 31.6663 34.5579 31.6663 34.9999C31.6663 35.4419 31.4908 35.8659 31.1782 36.1784C30.8656 36.491 30.4417 36.6666 29.9997 36.6666Z"
                                        fill="#EFA83C"
                                    />
                                </svg>
                            </div>
                            <div className="pro-teaser-content">
                                <h2 className="pro-teaser-title">
                                    {__(
                                        "Upgrade To PRO & Enjoy Advanced Features!",
                                        "essential-blocks"
                                    )}
                                </h2>

                                <p className="pro-teaser-description">
                                    {__(
                                        "Unleash premium blocks and features from Essential Blocks to power up your Gutenberg website today.",
                                        "essential-blocks"
                                    )}
                                </p>

                                <div className="teaser-box">
                                    <img
                                        src={`${EssentialBlocksLocalize.image_url}/admin/teaser-arrow.png`}
                                        alt={__(
                                            "Upgrade to pro",
                                            "essential-blocks"
                                        )}
                                    />

                                    <div className="teaser-cta">
                                        <img
                                            src={`${EssentialBlocksLocalize.image_url}/admin/teaser-arrow.png`}
                                            alt={__(
                                                "Upgrade to pro",
                                                "essential-blocks"
                                            )}
                                        />
                                        <a
                                            href={
                                                EssentialBlocksLocalize?.upgrade_pro_url
                                            }
                                            target="_blank"
                                            className="eb-btn eb-btn-primary eb-btn-md"
                                        >
                                            {__(
                                                "Upgrade To PRO",
                                                "essential-blocks"
                                            )}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {applyFilters("eb_manage_license")}

                    <div className="eb-admin-block eb-intro-block">
                        <h2>
                            {__(
                                "Welcome To Essential Blocks",
                                "essential-blocks"
                            )}
                        </h2>
                        <div className="eb-admin-video-block">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=9svZxQOIR2c"
                                loop={true}
                                muted={true}
                                playing={true}
                                controls={false}
                                light={`${EssentialBlocksLocalize.image_url}/admin/intro-video-thmb.jpg`}
                                playIcon={videoPlayIcon}
                                className="eb-react-player"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                </div>

                <div className="eb-col-4">
                    <div className="eb-admin-block mb30">
                        <h6 className="eb-admin-block__title">
                            <img src={fileBlue} alt="React Logo" />
                            <span>{__("Demo pages", "essential-blocks")}</span>
                        </h6>
                        <p className="eb-admin-block__text">
                            {__(
                                "Check out the detailed demo pages to learn about the super useful blocks at a glance.",
                                "essential-blocks"
                            )}
                        </p>
                        <a
                            target="_blank"
                            href="https://essential-blocks.com/demo/"
                            className="eb-admin-block__link"
                        >
                            {__("Preview Demos", "essential-blocks")}
                        </a>
                    </div>
                    <div className="eb-admin-block mb30">
                        <h6 className="eb-admin-block__title">
                            <img src={fileGreen} alt="React Logo" />
                            <span>
                                {__("View Knowledgebase", "essential-blocks")}
                            </span>
                        </h6>
                        <p className="eb-admin-block__text">
                            {__(
                                "Go through the easy documentation to get familiar with Essential Blocks for Gutenberg.",
                                "essential-blocks"
                            )}
                        </p>
                        <a
                            target="_blank"
                            href="https://essential-blocks.com/docs/"
                            className="eb-admin-block__link"
                        >
                            {__("Read Documentation", "essential-blocks")}
                        </a>
                    </div>

                    <div className="eb-admin-block mb30">
                        <h6 className="eb-admin-block__title">
                            <img src={iconHelp} alt="React Logo" />
                            <span>{__("Need Helps", "essential-blocks")}</span>
                        </h6>
                        <p className="eb-admin-block__text">
                            {__(
                                "Get in touch with our dedicated support team whenever you face an issue.",
                                "essential-blocks"
                            )}
                        </p>
                        <a
                            target="_blank"
                            href="https://wpdeveloper.com/support"
                            className="eb-admin-block__link"
                        >
                            {__("Contact us", "essential-blocks")}
                        </a>
                    </div>
                    <div className="eb-admin-block mb30">
                        <h6 className="eb-admin-block__title">
                            <img
                                src={iconCommunity}
                                alt="React Logo"
                                width="25"
                            />
                            <span>{__("Community", "essential-blocks")}</span>
                        </h6>

                        <p className="eb-admin-block__text">
                            {__(
                                "Join Essential Blocks' social media community and interact with other users and developers.",
                                "essential-blocks"
                            )}
                        </p>
                        <a
                            target="_blank"
                            href="https://www.facebook.com/groups/wpdeveloper.net/"
                            className="eb-admin-block__link"
                        >
                            {__("Get Connected", "essential-blocks")}
                        </a>
                    </div>
                    <div className="eb-admin-block">
                        <h6 className="eb-admin-block__title">
                            <img src={iconReveiw} alt="React Logo" width="25" />

                            <span>
                                {" "}
                                {__("Show Your Love", "essential-blocks")}
                            </span>
                        </h6>
                        <p className="eb-admin-block__text">
                            {__(
                                "Show your love for Essential Blocks by rating us and helping us grow more.",
                                "essential-blocks"
                            )}
                        </p>
                        <a
                            target="_blank"
                            href="https://wpdeveloper.com/review-essential-blocks"
                            className="eb-admin-block__link"
                        >
                            {__("Write a Review", "essential-blocks")}
                        </a>
                    </div>
                </div>
            </div>

            <div className="eb-admin-grid">
                <div className="eb-col-12">
                    <div className="eb-admin-block changelog-block">
                        <div
                            className="changelog-header"
                            onClick={() => setChangelogToggle(!changelogToggle)}
                        >
                            <h5>
                                {__(
                                    "Get updates on our new blocks and features by checking out the changelog",
                                    "essential-blocks"
                                )}
                            </h5>

                            <a className="eb-btn eb-btn-border eb-btn-md">
                                <img
                                    src={changelogToggle ? iconMinus : iconPlus}
                                />
                            </a>
                        </div>

                        {/* {changelogToggle && ( */}
                        <div
                            className="changelog-details"
                            style={changelogToggle ? visibleStyle : hiddenStyle}
                        >
                            <div className="changelog-wrapper">
                                <div className="changelog-title">
                                    {__("Version: 4.5.1", "essential-blocks")}
                                    <span className="changelog-date">
                                        {__("15/02/2024", "essential-blocks")}
                                    </span>
                                </div>
                                <ul className="changelog-content">
                                    <li>
                                        {__(
                                            "Fixed: ORG issues after release 4.5.0",
                                            "essential-blocks"
                                        )}
                                    </li>
                                    <li>
                                        {__(
                                            "Featured List icon not loading in frontend",
                                            "essential-blocks"
                                        )}
                                    </li>
                                </ul>
                            </div>
                            {applyFilters("eb_admin_general_changelog", "")}
                            <div className="eb_all_changelog_btn">
                                <a
                                    target="_blank"
                                    href="https://essential-blocks.com/changelog"
                                    className="eb-btn eb-btn-border eb-btn-md"
                                >
                                    {__("View All Change Log", "essential-blocks")}
                                </a>
                            </div>
                        </div>

                        {/* )} */}
                    </div>
                </div>
            </div>
            {/* <div className="eb-admin-grid">
                <div className="eb-col-6 eb-admin-block block-flex">
                    <img src={iconCommunity} alt="React Logo" />
                    <div>
                        <h6 className="eb-admin-block__title">
                            {__("Community", "essential-blocks")}
                        </h6>
                        <p className="eb-admin-block__text">
                            {__(
                                "Join Essential Blocks' social media community and interact with other users and developers.",
                                "essential-blocks"
                            )}
                        </p>
                        <a
                            target="_blank"
                            href="https://www.facebook.com/groups/wpdeveloper.net/"
                            className="eb-admin-block__link"
                        >
                            {__("Get Connected", "essential-blocks")}
                        </a>
                    </div>
                </div>
                <div className="eb-col-6 eb-admin-block block-flex">
                    <img src={iconReveiw} alt="React Logo" />
                    <div>
                        <h6 className="eb-admin-block__title">
                            {__("Show Your Love", "essential-blocks")}
                        </h6>
                        <p className="eb-admin-block__text">
                            {__(
                                "Show your love for Essential Blocks by rating us and helping us grow more.",
                                "essential-blocks"
                            )}
                        </p>
                        <a
                            target="_blank"
                            href="https://wpdeveloper.com/review-essential-blocks"
                            className="eb-admin-block__link"
                        >
                            {__("Write a Review", "essential-blocks")}
                        </a>
                    </div>
                </div>
            </div> */}

            {applyFilters("eb_bottom_manage_license", "", eblogo)}
        </>
    );
}
