import ReactDOM from "react-dom";
import React, { useState } from "react";

import { __ } from "@wordpress/i18n";

import Header from "./components/Header";
import menuList from './menuList';

import "./scss/index.scss";

const EssentialAdmin = () => {
    let queryParams = new URLSearchParams(window.location.search);
    let tab = queryParams.get("tab") === null ? "general" : queryParams.get("tab");

    const [tabState, setTabState] = useState(tab);

    const handleClick = (param) => {
        window.history.replaceState(
            null,
            null,
            "?page=essential-blocks&tab=" + param
        );

        queryParams = new URLSearchParams(window.location.search);
        tab = queryParams.get("tab") ?? 'general';

        setTabState(tab);
    };

    return (
        <div className="eb-settings-container">
            <Header menuList={menuList} handleNavClick={handleClick} tabState={tabState} />


            {menuList.map((menu) => (
                <React.Fragment key={menu.id}>
                    {tabState === menu.id && menu.comp}
                </React.Fragment>
            ))}
        </div>
    );
};

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<EssentialAdmin />, document.getElementById("eb-settings"));
});
