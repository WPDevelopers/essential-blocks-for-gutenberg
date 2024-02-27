window.addEventListener("DOMContentLoaded", () => {
    const allTabsTitlesList = document.querySelectorAll(
        ".eb-advanced-tabs-wrapper > .eb-tabs-nav > ul.tabTitles"
    );

    if (allTabsTitlesList.length === 0) return false;

    var hashTag = window.location.hash.substring(1);

    for (const titleListsWrap of allTabsTitlesList) {
        // close all tabs initially
        let listWrap = titleListsWrap.closest(
            ".eb-advanced-tabs-wrapper"
        );
        const closeAllTabs = listWrap.getAttribute('data-close-all-tabs');

        // select active tab
        const activeTabElement = titleListsWrap.querySelector("li.active");
        if (activeTabElement) {
            const dataTitleTabId = activeTabElement.getAttribute(
                "data-title-tab-id"
            );

            const tabContentWrappers = titleListsWrap.closest(
                ".eb-advanced-tabs-wrapper"
            ).children[1].children;

            for (const tabContentWrap of tabContentWrappers) {
                if (tabContentWrap.dataset.tabId == dataTitleTabId) {
                    tabContentWrap.classList.add("active");
                } else {
                    tabContentWrap.classList.add("inactive");
                }
            }
        }

        // set min height for vertical tab
        let verticalTab = titleListsWrap.closest(
            ".eb-advanced-tabs-wrapper.vertical"
        );

        if (verticalTab) {
            const navHeight = titleListsWrap.offsetHeight;

            verticalTab.querySelector(
                ".eb-tabs-contents .eb-tab-wrapper.active"
            ).style.minHeight = navHeight + "px";
        }
        //
        const tabTitlesLiTags = titleListsWrap.children;
        var hashMatched = false;
        for (const titleLiTag of tabTitlesLiTags) {
            if (hashTag !== "") {
                const customId = titleLiTag.getAttribute(
                    "data-title-custom-id"
                );
                if (customId === hashTag) {
                    for (const titleLiTag of tabTitlesLiTags) {
                        titleLiTag.classList.add("inactive");
                        titleLiTag.classList.remove("active");
                    }
                    titleLiTag.classList.remove("inactive");
                    titleLiTag.classList.add("active");
                    hashMatched = true;
                    const tabContentWrappers = titleListsWrap.closest(
                        ".eb-advanced-tabs-wrapper"
                    ).children[1].children;

                    for (const tabContentWrap of tabContentWrappers) {
                        if (
                            tabContentWrap.dataset.tabId ===
                            titleLiTag.dataset.titleTabId
                        ) {
                            tabContentWrap.classList.add("active");
                            tabContentWrap.classList.remove("inactive");
                        } else {
                            tabContentWrap.classList.add("inactive");
                            tabContentWrap.classList.remove("active");
                        }
                    }
                }
            }

            titleLiTag.addEventListener("click", (e) => {
                //
                const thisLiTag = e.currentTarget;

                for (const singleLiTag of tabTitlesLiTags) {
                    if (singleLiTag !== thisLiTag) {
                        singleLiTag.classList.add("inactive");
                        singleLiTag.classList.remove("active");
                    } else {
                        singleLiTag.classList.add("active");
                        singleLiTag.classList.remove("inactive");
                    }
                }

                const tabContentWrappers = titleListsWrap.closest(
                    ".eb-advanced-tabs-wrapper"
                ).children[1].children;

                for (const tabContentWrap of tabContentWrappers) {
                    if (
                        tabContentWrap.dataset.tabId ===
                        thisLiTag.dataset.titleTabId
                    ) {
                        tabContentWrap.classList.add("active");
                        tabContentWrap.classList.remove("inactive");

                        const imageGalleres = tabContentWrap.querySelectorAll(
                            ".eb-img-gallery-filter-wrapper"
                        );

                        imageGalleres.forEach((imageGallery) => {
                            imageGallery
                                .querySelector(".eb-img-gallery-filter-item")
                                .click();
                        });
                        // add min height for vertical
                        const navHeight = titleLiTag.closest(".tabTitles")
                            .offsetHeight;
                        if (verticalTab) {
                            verticalTab.querySelector(
                                ".eb-tabs-contents .eb-tab-wrapper.active"
                            ).style.minHeight = navHeight + "px";
                        }
                    } else {
                        tabContentWrap.classList.add("inactive");
                        tabContentWrap.classList.remove("active");
                    }
                }
            });
        }
        if (
            hashMatched == false &&
            activeTabElement === null &&
            tabTitlesLiTags.length > 0
        ) {
            if (closeAllTabs === 'true') {
                tabTitlesLiTags[0].classList.add("inactive");
                tabTitlesLiTags[0].classList.remove("active");
            } else {
                tabTitlesLiTags[0].classList.add("active");
                tabTitlesLiTags[0].classList.remove("inactive");
            }

            const listWrap = titleListsWrap
                .closest(".eb-advanced-tabs-wrapper")
                .children[1].querySelectorAll(".eb-tab-wrapper");

            listWrap.forEach((item, index) => {
                if (index == 0) {
                    if (closeAllTabs === 'true') {
                        item.classList.add("inactive");
                        item.classList.remove("active");
                    } else {
                        item.classList.add("active");
                        item.classList.remove("inactive");
                    }
                } else {
                    item.classList.add("inactive");
                    item.classList.remove("active");
                }
            });
        }
    }
});
