window.addEventListener("DOMContentLoaded", () => {
    const allFlipbox = document.querySelectorAll(".eb-flipbox-container");
    if (allFlipbox.length === 0) return false;

    allFlipbox.forEach((item, index) => {
        let flipMode = item.getAttribute("data-flip-mode");
        let flipType = item.getAttribute("data-flip-type");
        let flipMouseLeave = item.getAttribute("data-flip-mouseleave");
        let flipper = item.querySelector(".eb-flipper");

        // flip on click
        if (flipper && "click" === flipMode) {
            flipper.addEventListener("click", function (event) {
                if (flipper.classList.contains(flipType)) {
                    flipper.classList.remove(flipType);
                } else {
                    flipper.classList.add(flipType);
                }
            });

            // use mouse leave event
            if ("true" === flipMouseLeave) {
                flipper.addEventListener("mouseleave", function (event) {
                    if (flipper.classList.contains(flipType)) {
                        flipper.classList.remove(flipType);
                    }
                });
            }
        }
    });
});
