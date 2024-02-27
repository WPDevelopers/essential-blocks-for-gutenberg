const { EBGetIconClass, EBGetIconType } = window.eb_frontend;
document.addEventListener("DOMContentLoaded", function (event) {
    let accordions = document.querySelectorAll(
        ".eb-accordion-container > .eb-accordion-inner"
    );

    // Return if there is no accoridion block
    if (!accordions) return;

    for (let x = 0;x < accordions.length;x++) {
        let accordion = accordions[x].parentElement;
        let transitionDuration = Number(accordion.getAttribute('data-transition-duration'));
        let accordionWrapper = accordion.children[0].children;

        let titleNodes = [];
        Array.from(accordionWrapper).forEach(function (item) {
            titleNodes.push(item.querySelector(".eb-accordion-title-wrapper"));
        });

        titleNodes.forEach(function (item, index) {
            let uniqueId = Math.random().toString(36).substr(2, 7);
            item.setAttribute("id", "eb-accordion-header-" + uniqueId);
            item.setAttribute(
                "aria-controls",
                "eb-accordion-panel-" + uniqueId
            );
            item.setAttribute("aria-expanded", false);
            item.setAttribute("role", "button");
            let contentWrapper = item.nextElementSibling;
            contentWrapper.setAttribute("id", "eb-accordion-panel-" + uniqueId);
            contentWrapper.setAttribute(
                "aria-labelledby",
                "eb-accordion-header-" + uniqueId
            );
            contentWrapper.setAttribute("role", "region");
            item.addEventListener("keydown", function (event) {
                let key = event.which.toString();
                let ctrlModifier = event.ctrlKey && key.match(/33|34/);
                if (key.match(/38|40/) || ctrlModifier) {
                    let direction = key.match(/34|40/) ? 1 : -1;
                    let length = titleNodes.length;
                    let newIndex = (index + length + direction) % length;
                    titleNodes[newIndex].focus();
                    event.preventDefault();
                } else if (key.match(/35|36/)) {
                    switch (key) {
                        case "36":
                            titleNodes[0].focus();
                            break;
                        case "35":
                            titleNodes[titleNodes.length - 1].focus();
                            break;
                    }
                    event.preventDefault();
                }
            });
        });

        let contentNodes = [];
        Array.from(accordionWrapper).forEach(function (item) {
            contentNodes.push(
                item.querySelector(".eb-accordion-content-wrapper")
            );
        });

        let hide = "eb-accordion-hidden";
        //  add a className after the domcontent has been loaded
        accordion.classList.add("eb_accdn_loaded");

        for (let i = 0;i < contentNodes.length;i++) {
            contentNodes[i].style.height = "0px";
        }
        const testEl = document.createElement("span");

        // Get all data attributes
        let accordionType = accordion.getAttribute("data-accordion-type");
        let tabIcon = accordion.getAttribute("data-tab-icon") || "_ _";
        let expandedIcon =
            accordion.getAttribute("data-expanded-icon") || "_ _";

        tabIcon = EBGetIconClass(tabIcon);
        expandedIcon = EBGetIconClass(expandedIcon);

        // Seperate fontawesome 5 prefix and postfix classes.
        let faTabPrefix = tabIcon.split(" ")[0];
        let faTabPostfix = "fontawesome" === EBGetIconType(tabIcon) ? tabIcon.split(" ")[1] : tabIcon.split(" ")[2];
        let faExpandPrefix = expandedIcon.split(" ")[0];
        let faExpandPostfix = "fontawesome" === EBGetIconType(expandedIcon) ? expandedIcon.split(" ")[1] : expandedIcon.split(" ")[2];

        function changeIcon(clickedTab) {
            // Replace tab icon with expanded or vice versa
            let iconNode =
                clickedTab.querySelector(".eb-accordion-icon") || testEl;
            let isExpanded = iconNode.classList.contains(faExpandPostfix);
            if (isExpanded) {
                if ("dashicon" === EBGetIconType(faExpandPostfix)) {
                    iconNode.classList.remove('dashicons');
                }
                iconNode.classList.remove(faExpandPrefix, faExpandPostfix);
                if ("dashicon" === EBGetIconType(faTabPostfix)) {
                    iconNode.classList.add('dashicons');
                }
                iconNode.classList.add(faTabPrefix, faTabPostfix);

            } else {
                if ("dashicon" === EBGetIconType(faTabPostfix)) {
                    iconNode.classList.remove('dashicons');
                }
                iconNode.classList.remove(faTabPrefix, faTabPostfix);
                if ("dashicon" === EBGetIconType(faExpandPostfix)) {
                    iconNode.classList.add('dashicons');
                }
                iconNode.classList.add(faExpandPrefix, faExpandPostfix);
            }
        }

        //
        for (let i = 0;i < accordionWrapper.length;i++) {
            let clickable = accordionWrapper[i].getAttribute("data-clickable");
            if (clickable == "true") {
                contentNodes[i].setAttribute("data-collapsed", "false");
                slideDown(contentNodes[i], transitionDuration);
                changeIcon(
                    contentNodes[i].parentElement.querySelector(
                        ".eb-accordion-title-wrapper"
                    )
                );
            } else {
                contentNodes[i].setAttribute("data-collapsed", "true");
                slideUp(contentNodes[i], transitionDuration);
                contentNodes[i].parentElement.classList.add(hide);
            }
        }

        function changeAllExpandIcons(accordion) {
            let iconNodes = accordion.querySelectorAll(".eb-accordion-icon");
            // Replace expand icon with tab icon & change color
            for (let i = 0;i < iconNodes.length;i++) {
                if (iconNodes[i].classList.contains(faExpandPostfix)) {
                    iconNodes[i].classList.remove(
                        faExpandPrefix,
                        faExpandPostfix
                    );
                    iconNodes[i].classList.add(faTabPrefix, faTabPostfix);
                }
            }
        }

        // Take action based on accordion type
        accordionType === "toggle"
            ? setToggleAction(titleNodes)
            : setAccordionAction(titleNodes);

        // Toggle action here
        function setToggleAction(titleNodes) {
            for (let i = 0;i < titleNodes.length;i++) {
                let selectedTab = titleNodes[i];

                (function (selectedTab) {
                    selectedTab.addEventListener("click", onToggleTabClick);
                    selectedTab.addEventListener("keydown", function (event) {
                        if (event.key === " " || event.key === "Enter") {
                            event.preventDefault();
                            onToggleTabClick.call(selectedTab);
                        }
                    });
                })(selectedTab);
            }
        }

        function onToggleTabClick(event) {
            let clickedTab = this;
            let contentNode = this.nextElementSibling;
            let isCollapsed =
                contentNode.getAttribute("data-collapsed") === "true";

            if (isCollapsed) {
                slideDown(contentNode, transitionDuration);
                contentNode.setAttribute("data-collapsed", "false");
                clickedTab.setAttribute("aria-expanded", "true");
                clickedTab.parentElement.classList.remove(hide);
            } else {
                slideUp(contentNode, transitionDuration);
                contentNode.setAttribute("data-collapsed", "true");
                clickedTab.setAttribute("aria-expanded", "false");
                clickedTab.parentElement.classList.add(hide);
            }
            // Change tab icon
            changeIcon(clickedTab);
        }

        // Accordion action here
        function setAccordionAction(titleNodes) {
            for (let i = 0;i < titleNodes.length;i++) {
                let selectedTab = titleNodes[i];
                (function (selectedTab) {
                    selectedTab.addEventListener("click", onAccordionTabClick);
                    selectedTab.addEventListener("keydown", function (event) {
                        if (event.key === " " || event.key === "Enter") {
                            event.preventDefault();
                            onAccordionTabClick.call(selectedTab);
                        }
                    });
                })(selectedTab);
            }
        }

        function onAccordionTabClick() {
            let clickedTab = this;
            Array.from(accordionWrapper).forEach((item) => {
                item.classList.add(hide);
            });
            let contentNode = clickedTab.nextElementSibling;
            let isCollapsed = contentNode.getAttribute("data-collapsed") === "true";

            changeAllExpandIcons(accordion);
            hideAccordionContents(accordion, transitionDuration);

            if (isCollapsed) {
                slideDown(contentNode, transitionDuration);
                contentNode.setAttribute("data-collapsed", "false");
                clickedTab.setAttribute("aria-expanded", "true");
                clickedTab.parentElement.classList.remove(hide);
            } else {
                slideUp(contentNode, transitionDuration);
                contentNode.setAttribute("data-collapsed", "true");
                clickedTab.setAttribute("aria-expanded", "false");
                changeIcon(clickedTab);
                clickedTab.parentElement.classList.add(hide);
            }
            //Change tab icon
            changeIcon(clickedTab);
        }
    }
});


const hideAccordionContents = (accordion, transitionDuration) => {
    let contentNodes = [];
    Array.from(accordion.children).forEach(function (item) {
        contentNodes = item.querySelectorAll(".eb-accordion-content-wrapper");
    });

    for (let i = 0;i < contentNodes.length;i++) {
        if (contentNodes[i].getAttribute("data-collapsed") === 'false') {
            slideUp(contentNodes[i], transitionDuration);
            contentNodes[i].setAttribute("data-collapsed", true);
            contentNodes[i].setAttribute("aria-expanded", "false");
        }
    }
}

/* SLIDE UP */
const slideUp = (target, duration = 500) => {

    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        //alert("!");
    }, duration);
}

/* SLIDE DOWN */
const slideDown = (target, duration = 500) => {

    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}

/* TOOGLE */
const slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}
