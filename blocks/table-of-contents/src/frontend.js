window.addEventListener("DOMContentLoaded", function () {
    const parseTocSlug = function (slug) {
        // If not have the element then return false!
        if (!slug) {
            return slug;
        }

        let parsedSlug = slug
            .toString()
            .toLowerCase()
            .replace(/&(amp;)/g, "") // Remove &
            .replace(/&(mdash;)/g, "") // Remove long dash
            .replace(/\u2013|\u2014/g, "") // Remove long dash
            .replace(/[&]nbsp[;]/gi, "-") // Replace inseccable spaces
            .replace(/\s+/g, "-") // Replace spaces with -
            .replace(/[&\/\\#,^!+()$~%.'":*?<>{}@‘’”“]/g, "") // Remove special chars
            .replace(/\-\-+/g, "-") // Replace multiple - with single -
            .replace(/^-+/, "") // Trim - from start of text
            .replace(/-+$/, ""); // Trim - from end of text

        return decodeURIComponent(encodeURIComponent(parsedSlug));
    };

    let ebGetIconType = (value) => {
        if (value.includes('fa-')) {
            return 'fontawesome';
        }
        return 'dashicon';
    }

    let ebRenderIcon = (iconType, className, icon) => {
        if (iconType === 'dashicon') {
            // Render Dashicon
            return '<span class="dashicon dashicons ' + icon + ' ' + className + '"></span>';
        } else if (iconType === 'fontawesome') {
            // Render FontAwesome icon
            return '<i class="' + icon + ' ' + className + '"></i>';
        }

        // Handle other icon types or return an error message if needed.
        return 'Invalid icon type';
    }

    const EBTableOfContents = {
        init: function () {
            this._run();
            this._scroll();
            this._toggleCollapse();
            this._scrollToTop();
            this._hide();
            this._show();
            this._hideOnMobileView();
            this._hideOnDevice();
            this._tooltip();
            this._itemCollapsed();
        },

        _tooltip: function () {
            let containers = document.querySelectorAll(".eb-toc-container");
            for (let container of containers) {
                let enableCopyLink =
                    container &&
                    container.getAttribute("data-copy-link") == "true";

                if (enableCopyLink) {
                    let headingAnchors = document.querySelectorAll(
                        ".eb-tooltip"
                    );

                    for (let headingAnchor of headingAnchors) {
                        if (headingAnchor) {
                            headingAnchor.parentNode.parentNode.addEventListener(
                                "mouseenter",
                                function (event) {
                                    headingAnchor.style.display =
                                        "inline-block";
                                }
                            );
                            headingAnchor.parentNode.parentNode.addEventListener(
                                "mouseleave",
                                function (event) {
                                    headingAnchor.style.display = "none";
                                    this.getElementsByClassName(
                                        "eb-tooltiptext"
                                    )[0].style.visibility = "hidden";
                                }
                            );
                        }
                    }

                    let tooltips = document.querySelectorAll(".eb-tooltip");
                    for (let tooltip of tooltips) {
                        if (tooltip) {
                            tooltip.addEventListener("click", function (e) {
                                this.children[0].style.visibility = "visible";
                            });
                        }
                    }
                }
            }
        },

        _toggleCollapse: function () {
            let containers = document.querySelectorAll(".eb-toc-container");

            for (let container of containers) {
                const isSticky =
                    container.getAttribute("data-sticky") === "true";
                const collapsible =
                    container.getAttribute("data-collapsible") === "true";

                if (collapsible) {
                    const title = container.querySelector(".eb-toc-title");
                    const content = container.querySelector(".eb-toc-wrapper");

                    if (!isSticky) {
                        title.addEventListener("click", function () {
                            content.classList.toggle("hide-content");
                        });
                    }
                }
            }
        },
        _itemCollapsed: function () {
            let containers = document.querySelectorAll(".eb-toc-container");

            for (let container of containers) {
                const isItemCollapsed =
                    container.getAttribute("data-itemCollapsed") === "true";

                if (isItemCollapsed) {
                    const items = container.querySelectorAll(".eb-toc-wrapper .eb-toc__list-wrap > .eb-toc__list > li");

                    for (let item of items) {
                        const selector = item.querySelector("a");
                        const selectorIcon = item.querySelector("svg");
                        const collapsedItem = item.querySelector(".eb-toc__list");

                        if (collapsedItem !== null) {
                            selectorIcon.addEventListener("click", function () {
                                item.classList.toggle("hide-items");
                            });
                        }
                    }

                }
            }
        },

        _scrollToTop: function () {
            let container = document.querySelector(".eb-toc-container");
            let hasScrollTop =
                container &&
                container.getAttribute("data-scroll-top") == "true";
            let hasSticky =
                container && container.getAttribute("data-sticky") == "true";
            let scrollTarget = container.getAttribute("data-scroll-target");
            let wrapper = document.querySelector(".eb-toc-wrapper");
            let offsetTop = wrapper.getAttribute("data-top-offset");
            let scrollIcon = container.getAttribute("data-scroll-top-icon");

            if (hasScrollTop) {
                // Create go to top element
                const goTop = document.createElement("span");
                goTop.setAttribute("class", "eb-toc-go-top");
                goTop.innerHTML = ebRenderIcon(ebGetIconType(scrollIcon), '', scrollIcon);
                document.body.insertBefore(goTop, document.body.lastChild);

                // Add click event
                goTop.addEventListener("click", function () {
                    if (!hasSticky && "scroll_to_toc" === scrollTarget) {
                        const yOffset = offsetTop ? -Math.abs(offsetTop) : 0;
                        const finalOffset =
                            container.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset;

                        window.scroll({
                            top: finalOffset,
                            behavior: "smooth",
                        });
                    } else {
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                    }
                });

                function hideScroll() {
                    goTop.classList.remove("show-scroll");
                    goTop.classList.add("hide-scroll");
                }

                function showScroll() {
                    goTop.classList.remove("hide-scroll");
                    goTop.classList.add("show-scroll");
                }

                function onScrollPage() {
                    document.body.scrollTop > 30 ||
                        document.documentElement.scrollTop > 20
                        ? showScroll()
                        : hideScroll();
                }

                const containers = document.querySelectorAll(
                    ".eb-toc-container"
                );

                for (let container of containers) {
                    const goToTop =
                        container.getAttribute("data-scroll-top") === "true";

                    if (goToTop) {
                        // Add scroll event
                        window.addEventListener("scroll", onScrollPage);

                        hideScroll();
                    } else {
                        hideScroll();
                    }
                }
            }
        },

        /**
         * Smooth Scroll.
         */
        _scroll: function () {
            let nodes = document.querySelectorAll(".eb-toc-wrapper");

            for (let node of nodes) {
                const isSmooth = node.getAttribute("data-smooth") === "true";
                const wrapperOffset = parseFloat(
                    node.getAttribute("data-top-offset")
                );
                if (isSmooth) {
                    const listItems = node.querySelectorAll('a[href^="#"]');
                    listItems.forEach((anchor) => {
                        anchor.addEventListener("click", function (event) {
                            let selector = this.getAttribute("href").replace(
                                "#",
                                ""
                            );
                            event.preventDefault();
                            if (
                                typeof wrapperOffset === "number" &&
                                wrapperOffset
                            ) {
                                const yOffset = wrapperOffset
                                    ? -Math.abs(wrapperOffset)
                                    : 0;
                                const element = document.getElementById(
                                    selector
                                );
                                const finalOffset =
                                    element.getBoundingClientRect().top +
                                    window.pageYOffset +
                                    yOffset;
                                window.scrollTo({
                                    top: finalOffset,
                                    behavior: "smooth",
                                });
                            } else {
                                document
                                    .getElementById(selector)
                                    .scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }

                            // Remove active class from all list items
                            listItems.forEach(function (li) {
                                li.parentNode.classList.remove('eb-toc-active', 'recent');
                            });

                            this.parentNode.classList.add('recent');

                            let currentListItem = event.target.closest('li');
                            while (currentListItem) {
                                currentListItem.classList.add('eb-toc-active');
                                currentListItem = currentListItem.parentElement.closest('li');
                            }
                        });
                    });

                    // add offset when go to url with hash id
                    const urlHash = window.location.hash;
                    // Remove the "#" symbol from the hash to get the ID
                    const id = urlHash.slice(1);

                    if (
                        urlHash &&
                        typeof wrapperOffset === "number" &&
                        wrapperOffset
                    ) {
                        const yOffset = wrapperOffset
                            ? Math.abs(wrapperOffset)
                            : 0;
                        const element = document.getElementById(id);
                        element.style.scrollMarginTop = yOffset + "px";
                    }
                }
            }
        },

        /**
         * Close contents
         */
        _hide: function () {
            const crossButtons = document.querySelectorAll(".eb-toc-close");

            for (let crossButton of crossButtons) {
                crossButton.addEventListener("click", function () {
                    const container = crossButton.closest(".eb-toc-container");

                    container.classList.add("eb-toc-content-hidden");
                    container.classList.remove("eb-toc-content-visible");
                });
            }
        },

        _show: function () {
            const headerButtons = document.querySelectorAll(".eb-toc-button");

            for (let headerButton of headerButtons) {
                headerButton.addEventListener("click", function () {
                    const container = headerButton.closest(".eb-toc-container");

                    container.classList.remove("eb-toc-content-hidden");
                    container.classList.add("eb-toc-content-visible");
                });
            }
        },

        /**
         * Alter the_content.
         */
        _run: function () {
            let containers = document.querySelectorAll(".eb-toc-container");

            for (let container of containers) {
                if (container) {
                    // Save container border
                    const tocBorder = container.style.border;
                    window.ebTocBorder = tocBorder;
                }
                let enableCopyLink =
                    container &&
                    container.getAttribute("data-copy-link") == "true";

                let copyLinkHtml = enableCopyLink
                    ? `<span class="eb-tooltip dashicons dashicons-clipboard"><span class="eb-tooltiptext">Copied!</span></span></span>`
                    : "";

                let node = document.querySelector(".eb-toc-wrapper");

                if (node) {
                    let headers = JSON.parse(node.getAttribute("data-headers"));

                    let visibleHeaders = JSON.parse(
                        node.getAttribute("data-visible")
                    );
                    let deleteHeaderLists = JSON.parse(
                        node.getAttribute("data-delete-headers")
                    );

                    let allowed_h_tags = [];
                    if (visibleHeaders !== undefined) {
                        visibleHeaders.forEach((h_tag, index) =>
                            h_tag === true
                                ? allowed_h_tags.push("h" + (index + 1))
                                : null
                        );
                    }

                    let allowed_h_tags_str =
                        null !== allowed_h_tags ? allowed_h_tags.join(",") : "";

                    let all_header =
                        undefined !== allowed_h_tags_str &&
                            "" !== allowed_h_tags_str
                            ? document.body.querySelectorAll(allowed_h_tags_str)
                            : document.body.querySelectorAll(
                                "h1, h2, h3, h4, h5, h6"
                            );

                    if (undefined !== headers && 0 !== all_header.length) {
                        headers.forEach((element, headerIndex) => {
                            const element_text = parseTocSlug(element.text);
                            if (
                                deleteHeaderLists &&
                                !deleteHeaderLists[headerIndex]?.isDelete
                            ) {
                                all_header.forEach((item, index) => {
                                    const header_text = parseTocSlug(
                                        item.textContent
                                    );

                                    if (
                                        element_text.localeCompare(
                                            header_text
                                        ) === 0
                                    ) {
                                        if (isValidHtmlId(element.link)) {
                                            new ClipboardJS(`#${element.link}`);
                                        }
                                        item.innerHTML = `${item.innerHTML
                                            }<span id="${element.link}"
                                    class="eb-toc__heading-anchor" data-clipboard-text="${location.protocol +
                                            "//" +
                                            location.host +
                                            location.pathname +
                                            (location.search ? location.search : "")
                                            }#${element.link}">${copyLinkHtml}</span>`;
                                    }
                                });
                            } else {
                                all_header.forEach((item) => {
                                    const header_text = parseTocSlug(
                                        item.textContent
                                    );

                                    if (
                                        element_text.localeCompare(
                                            header_text
                                        ) === 0
                                    ) {
                                        item.innerHTML = `<span id="${element.link}" class="eb-toc__heading-anchor"></span>${item.innerHTML}`;
                                    }
                                });
                            }
                        });
                    }
                }
            }
        },

        /**
         * Hide sticky content on mobile
         */
        _hideOnMobileView: function () {
            const container = document.querySelector(".eb-toc-container");

            if (container) {
                const isSticky =
                    container.getAttribute("data-sticky") === "true";
                const stickyHideOnMobile =
                    container.getAttribute("data-sticky-hide-mobile") == "true";

                if (
                    isSticky &&
                    stickyHideOnMobile &&
                    window.screen.width < 420
                ) {
                    container.style.display = "none";
                }
            }
        },
        /**
         * Hide scroll to top
         */
        _hideOnDevice: function () {
            const container = document.querySelector(".eb-toc-container");

            if (container) {
                const hideOnDesktop =
                    container.getAttribute("data-hide-desktop") === "true";
                const hideOnTab =
                    container.getAttribute("data-hide-tab") === "true";
                const hideOnMobile =
                    container.getAttribute("data-hide-mobile") == "true";
                const goToTop = document.querySelector(".eb-toc-go-top");

                if (hideOnDesktop && window.screen.width > 1024) {
                    goToTop.style.display = "none";
                }

                if (
                    hideOnTab &&
                    window.screen.width < 1024 &&
                    window.screen.width > 420
                ) {
                    goToTop.style.display = "none";
                }

                if (hideOnMobile && window.screen.width < 420) {
                    goToTop.style.display = "none";
                }
            }
        },
    };

    EBTableOfContents.init();
});

function isValidHtmlId(text) {
    if (/^[A-Za-z][-A-Za-z0-9_:.]*$/.test(text)) {
        return text;
    }
    return false;
}
