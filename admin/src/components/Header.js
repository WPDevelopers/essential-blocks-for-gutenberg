import React from "react";

import { __ } from "@wordpress/i18n";
import eblogo from "../../../assets/images/eb-logo.svg";

// ESSENTIAL_BLOCKS_VERSION

export default function Header(props) {
    const { handleNavClick, tabState, menuList } = props;

    return (
        <div className="eb-admin-block eb-header-block mb30">
            <div className=" eb-admin-logo-inline">
                <img src={eblogo} />
            </div>
            <ul className="eb-header-nav">
                {
                    menuList.map((menu) => {
                        return (
                            <li key={menu.id}>
                                <a
                                    className={`${tabState === menu.id ? 'eb-nav-active' : ''}`}
                                    onClick={() => handleNavClick(menu.id)}>
                                    {menu.icon}
                                    {menu.label}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="eb-version">
                <div>{__("Free Version: ", "essential-blocks")}<span>{EssentialBlocksLocalize.eb_version}</span></div>
                {EssentialBlocksLocalize?.is_pro_active === "true" && EssentialBlocksProLocalize.eb_pro_version && (
                    <div>{__("Pro Version: ", "essential-blocks")}<span>{EssentialBlocksProLocalize.eb_pro_version}</span></div>
                )}
            </div>
        </div>
    );
}
