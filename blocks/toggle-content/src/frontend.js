document.addEventListener("DOMContentLoaded", function (event) {
    let toggleBlocks = document.querySelectorAll(".eb-toggle-wrapper");

    if (!toggleBlocks) return;

    for (let block of toggleBlocks) {
        // Selectors
        let switcher = block.querySelector(".eb-toggle-switch > input");
        let primaryLabel = block.querySelector(".eb-toggle-primary-label");
        let secondaryLabel = block.querySelector(".eb-toggle-secondary-label");
        let textPrimaryLabel = block.querySelector(
            ".eb-toggle-primary-label-text"
        );
        let textSecondaryLabel = block.querySelector(
            ".eb-toggle-secondary-label-text"
        );
        let slider = block.querySelector(".eb-toggle-slider");
        let controller = block.querySelector(".eb-toggle-controller");
        let content = block.querySelector(".eb-toggle-content");
        let seperator = block.querySelector(".eb-toggle-seperator");

        // Data attributes
        let initContent = block.getAttribute("data-init-content");
        let size = block.getAttribute("data-size");
        let switchStyle = block.getAttribute("data-switch-style");
        let primaryColor = block.getAttribute("data-primary-color");
        let secondaryColor = block.getAttribute("data-secondary-color");
        let activeColor = block.getAttribute("data-active-color");
        let bgColor = block.getAttribute("data-bg-color");
        let activeBg = block.getAttribute("data-active-bg");

        const defaultBg = "inherit";
        const defaultActiveBg = "inherit";

        // Set initial display values, we'll use them to toggle content
        let primaryDisplay = window.getComputedStyle(content.children[0])
            .display;
        let secondaryDisplay = window.getComputedStyle(content.children[1])
            .display;

        // Move slider for different size
        let getTransform = () => {
            switch (size) {
                case "s":
                    return "translateX(22px)";
                case "m":
                    return "translateX(26px)";
                case "l":
                    return "translateX(36px)";
                case "xl":
                    return "translateX(42px)";
            }
        };

        let getRadius = () => {
            switch (size) {
                case "s":
                    return "10px";
                case "m":
                    return "13px";
                case "l":
                    return "18px";
                case "xl":
                    return "21px";
            }
        };

        // Toggle type switch
        let id = block
            .querySelector(".eb-text-switch-label")
            .getAttribute("for");
        let toggler = block.querySelector(`#${id}`);

        if (initContent === "primary") {
            showPrimary();
        } else {
            toggler.checked = true;
            showSecondary();
        }

        toggler.addEventListener("change", onTextToggleChange);

        function onTextToggleChange() {
            this.checked ? showSecondary() : showPrimary();
        }

        // Init text type label background
        if (switchStyle === "text") {
            primaryLabel.style.background = bgColor || defaultBg;
            secondaryLabel.style.background = bgColor || defaultBg;
            seperator.style.background = bgColor || defaultBg;
        }

        // Add click event for text type switch
        function activePrimary() {
            if (switchStyle !== "toggle") {
                primaryLabel.style.background = activeBg || defaultActiveBg;
                secondaryLabel.style.background = bgColor || defaultBg;
            }
            showPrimary();
        }

        function activeSecondary() {
            if (switchStyle !== "toggle") {
                secondaryLabel.style.background = activeBg || defaultActiveBg;
                primaryLabel.style.background = bgColor || defaultBg;
            }
            showSecondary();
        }

        primaryLabel.addEventListener("click", activePrimary);
        secondaryLabel.addEventListener("click", activeSecondary);

        if (switchStyle === "text") {
            initContent === "primary" ? activePrimary() : activeSecondary();
        }

        // Make controller round
        if (switchStyle == "rounded") {
            slider.style.borderRadius = "21px";
            controller.style.borderRadius = getRadius();
        }

        // Display initial content
        initContent === "primary" ? showPrimary() : showSecondary();

        switcher.addEventListener("change", onSwitch);

        function onSwitch() {
            this.checked ? showSecondary() : showPrimary();
        }

        function showPrimary() {
            switcher.checked = false;
            // content.children[0].style.opacity = 1;
            // content.children[0].style.transition =
            //     "opacity .3s cubic-bezier(.45,.05,.55,.95),visibility 0s";
            // content.children[0].style.transitionDelay = "0s,.3s";
            content.children[0].classList.add("active");
            content.children[0].classList.remove("inactive");
            content.children[1].classList.add("inactive");
            content.children[1].classList.remove("active");
            // content.children[1].style.opacity = 0;
            // content.children[1].style.pointerEvents = "none";
            // content.children[1].style.transition =
            //     "opacity .3s cubic-bezier(.45,.05,.55,.95),visibility 0s";
            // content.children[1].style.transitionDelay = "0s,.3s";
            secondaryLabel.style.color = secondaryColor;
            primaryLabel.style.color = activeColor || primaryColor;

            if (switchStyle === "toggle") {
                textSecondaryLabel.style.color = secondaryColor;
                textPrimaryLabel.style.color = activeColor || primaryColor;
            }

            if (switchStyle !== "text") {
                controller.style.transform = "translateX(0px)";
            }
        }

        function showSecondary() {
            switcher.checked = true;
            content.children[0].classList.add("inactive");
            content.children[0].classList.remove("active");
            content.children[1].classList.add("active");
            content.children[1].classList.remove("inactive");
            // content.children[1].style.opacity = 1;
            // content.children[1].style.transition =
            //     "opacity .3s cubic-bezier(.45,.05,.55,.95),visibility 0s";
            // content.children[1].style.transitionDelay = "0s,.3s";
            // content.children[0].style.opacity = 0;
            // content.children[0].style.pointerEvents = "none";
            // content.children[0].style.transition =
            //     "opacity .3s cubic-bezier(.45,.05,.55,.95),visibility 0s";
            // content.children[0].style.transitionDelay = "0s,.3s";
            primaryLabel.style.color = primaryColor;
            secondaryLabel.style.color = activeColor;

            if (switchStyle === "toggle") {
                textPrimaryLabel.style.color = primaryColor;
                textSecondaryLabel.style.color = activeColor || secondaryColor;
            }

            if (switchStyle !== "text") {
                controller.style.transform = getTransform();
            }
        }
    }
});
