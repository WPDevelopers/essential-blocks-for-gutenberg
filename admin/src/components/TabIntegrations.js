import React, { useState, useEffect } from "react";
import { __ } from "@wordpress/i18n";

import betterDocs from "../icons/intregrations/bd.svg";
import betterlinks from "../icons/intregrations/btl.svg";
import easyjobs from "../icons/intregrations/ej.svg";
import embedpress from "../icons/intregrations/ep.svg";
import notificationx from "../icons/intregrations/nx.svg";
import reviewx from "../icons/intregrations/rx.svg";
import scheduledPress from "../icons/intregrations/wscp.svg";
import essentialAddons from "../icons/intregrations/ea.svg";

const {installPlugin} = window.EBControls;

const integrations = [
    {
        slug: "betterdocs",
        basename: "betterdocs/betterdocs.php",
        logo: betterDocs,
        title: "BetterDocs",
        desc: __(
            "BetterDocs will help you to create & organize your documentation page in a beautiful way that will make your visitors find any help article easily.",
            "essential-blocks"
        ),
    },
    {
        slug: "embedpress",
        basename: "embedpress/embedpress.php",
        logo: embedpress,
        title: "EmbedPress",
        desc: __(
            "EmbedPress lets you embed videos, images, posts, audio, maps and upload PDF, DOC, PPT & all other types of content into your WordPress site.",
            "essential-blocks"
        ),
    },
    {
        slug: "reviewx",
        basename: "reviewx/reviewx.php",
        logo: reviewx,
        title: "ReviewX",
        desc: __(
            "ReviewX lets you get instant customer ratings and multi criteria reviews to add credibility to your WooCommerce Store and increase conversion rates.",
            "essential-blocks"
        ),
    },
    {
        slug: "notificationx",
        basename: "notificationx/notificationx.php",
        logo: notificationx,
        title: "NotificationX",
        desc: __(
            "Best FOMO Social Proof Plugin to boost your sales conversion. Create stunning Sales Popup & Notification Bar With Elementor Support.",
            "essential-blocks"
        ),
    },
    {
        slug: "easyjobs",
        basename: "easyjobs/easyjobs.php",
        logo: easyjobs,
        title: "easy.jobs",
        desc: __(
            "Easy solution for the job recruitment to attract, manage & hire right talent faster. The Best Talent Recruitment Suite which lets you manage jobs & career page in Elementor.",
            "essential-blocks"
        ),
    },
    {
        slug: "wp-scheduled-posts",
        basename: "wp-scheduled-posts/wp-scheduled-posts.php",
        logo: scheduledPress,
        title: "SchedulePress",
        desc: __(
            "Best Content Marketing Tool For WordPress – Schedule, Organize, & Auto Share Blog Posts. Take a quick glance at your content planning with Schedule Calendar, Auto & Manual Scheduler and  more.",
            "essential-blocks"
        ),
    },
    {
        slug: "betterlinks",
        basename: "betterlinks/betterlinks.php",
        logo: betterlinks,
        title: "BetterLinks",
        desc: __(
            "Best Link Shortening tool to create, shorten and manage any URL to help you cross-promote your brands & products. Gather analytics reports, run successfully marketing campaigns easily & many more.",
            "essential-blocks"
        ),
    },
    {
        slug: "essential-addons-for-elementor-lite",
        basename:
            "essential-addons-for-elementor-lite/essential_adons_elementor.php",
        logo: essentialAddons,
        title: "Essential Addons for Elementor",
        desc: __(
            "Powerful Elementor widgets library with 90+ advanced, fully customizable elements & extensions to enhance your website designing experience.",
            "essential-blocks"
        ),
    },
];

export default function TabIntegrations() {
    const [status, setStatus] = useState({});

    useEffect(() => {
        const data = { ...status };
        integrations.map((item, index) => {
            const pluginData =
                EssentialBlocksLocalize.get_plugins[item.basename];
            let text = "Install";
            if (pluginData) {
                if (pluginData.active) {
                    text = "Activated";
                } else {
                    text = "Active";
                }
            }
            data[item.basename] = {
                btnText: text,
                isLoading: false,
            };
        });
        setStatus({ ...data });
    }, []);

    const installIntegration = (index, integrationName, plugin_file) => {
        const pluginData = EssentialBlocksLocalize.get_plugins[plugin_file];

        if (pluginData === "object") {
            if (pluginData.active || status[plugin_file].btnText !== "Active")
                return;
        } else {
            if (status[plugin_file].btnText == "Active") {
                setStatus({
                    ...status,
                    [plugin_file]: {
                        btnText: "Activating...",
                        isLoading: true,
                    },
                });
            } else {
                setStatus({
                    ...status,
                    [plugin_file]: {
                        btnText: "Installing...",
                        isLoading: true,
                    },
                });
            }
        }
        installPlugin(integrationName, plugin_file).then((data) => {
            const res = JSON.parse(data);

            if (res.success) {
                setStatus({
                    ...status,
                    [plugin_file]: {
                        btnText: "Activated",
                        isLoading: false,
                    },
                });
            }
            else {
                setStatus({
                    ...status,
                    [plugin_file]: {
                        btnText: "Couldn\'t Activated the plugin!",
                        isLoading: false,
                    },
                });
            }
        });
    };

    return (
        <>
            <div className="eb-admin-grid">
                {integrations.map((item, index) => (
                    <div
                        key={index}
                        className="eb-col-3 eb-col-4-md eb-integration-block"
                    >
                        {/* <div className="eb-integration-block-wrapper"> */}
                        {/* <div className="eb-integration-block"> */}
                        <div className="icon">
                            <img src={item.logo} alt="" />
                        </div>
                        <h3 className="eb-integration-block__title">
                            {item.title}
                        </h3>
                        <p className="eb-integration-block__text">
                            {item.desc}
                        </p>

                        <button
                            className={`eb-integration-block__link eb-btn eb-btn-md ${
                                status[item.basename]?.btnText == "Activated"
                                    ? "eb-btn-border"
                                    : "eb-btn-primary"
                            }`}
                            onClick={() =>
                                installIntegration(
                                    index,
                                    item.slug,
                                    item.basename
                                )
                            }
                            disabled={
                                status[item.basename]?.btnText == "Activated"
                            }
                        >
                            {status[item.basename]?.isLoading && (
                                <img
                                    className="eb-install-loader"
                                    src={`${EssentialBlocksLocalize.eb_plugins_url}/assets/images/loading.svg`}
                                />
                            )}

                            {status[item.basename]?.btnText}
                        </button>
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                ))}
            </div>
        </>
    );
}
