window.addEventListener("DOMContentLoaded", (event) => {
    var keySelector = ".eb___animated";
    waitForElement(keySelector).then((elm) => {
        var findAnimationClass = document.querySelectorAll(keySelector);
        replaceAnimationClasses(findAnimationClass);

        window.addEventListener(
            "scroll",
            function (event) {
                replaceAnimationClasses(findAnimationClass);
            },
            true
        );

        //For Admin
        const config = { attributes: true, childList: true, subtree: true };
        const adminObserver = new MutationObserver(function (mutationsList) {
            for (let mutation of mutationsList) {
                if (mutation.type === "attributes") {
                    const adminChangeSelector = document.getElementById("eb-animation-style");

                    if (adminChangeSelector) {
                        adminChangeSelector.addEventListener(
                            "change",
                            function (event) {
                                setTimeout(function () {
                                    replaceAnimationClasses(
                                        document.querySelectorAll(keySelector)
                                    );
                                }, 100);
                            }
                        );
                    }
                }
            }
        });

        adminObserver.observe(document.body, config);
    });
});

var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.bottom > 0 &&
        distance.top < (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right > 0 &&
        distance.left < (window.innerWidth || document.documentElement.clientWidth)
    );
};

var replaceAnimationClasses = function (selector) {
    selector.forEach((element) => {
        if (isInViewport(element)) {
            let toRemoveClasses = [];
            let toAddClasses = [];
            element.classList.forEach((classname) => {
                if (classname.includes("eb___")) {
                    toRemoveClasses.push(classname);
                    toAddClasses.push(classname.replace("eb___", "eb__"));
                }
            });
            element.classList.add(...toAddClasses);
            element.classList.remove(...toRemoveClasses);
        }
    });
};

//
var waitForElement = function (selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            attributes: true,
            subtree: true,
        });
    });
};
