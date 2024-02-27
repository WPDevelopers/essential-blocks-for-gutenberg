window.addEventListener("DOMContentLoaded", () => {
    const advNavs = document.querySelectorAll(
        ".eb-advanced-navigation-wrapper"
    );

    for (let advNav of advNavs) {
        let anchors = advNav.querySelectorAll(
            ".wp-block-navigation-item__content"
        );

        const mediaQuery = window.matchMedia("(max-width: 767px)");
        if (mediaQuery.matches) {
            anchors.forEach((anchor) => {
                anchor.addEventListener("click", function (e) {
                    if (anchor.hash !== "") {
                        e.preventDefault();
                        advNav
                            .querySelector(
                                ".wp-block-navigation__responsive-container"
                            )
                            .classList.remove("is-menu-open", "has-modal-open");

                        const href = this.getAttribute("href");
                        window.open(href, "_self");
                    }
                });
            });
        }

        // anchor nav active class
        anchors.forEach((anchor) => {
            anchor
                .closest(".wp-block-navigation-item")
                .classList.remove("active");
            anchor.addEventListener("click", function (e) {
                anchors.forEach((a) => {
                    a.closest(".wp-block-navigation-item").classList.remove(
                        "current-menu-item"
                    );
                });

                if (anchor.hash !== "") {
                    anchor
                        .closest(".wp-block-navigation-item")
                        .classList.add("current-menu-item");
                }
            });
        });
    }
});
