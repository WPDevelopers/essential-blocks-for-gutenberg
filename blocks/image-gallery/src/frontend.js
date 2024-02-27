window.addEventListener("DOMContentLoaded", (event) => {
    const imageGalleries = document.querySelectorAll(
        `.eb-gallery-img-wrapper.eb-filterable-img-gallery, .eb-gallery-img-wrapper.enable-isotope`
    );

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function (itemElem) {
            var number = itemElem.querySelector(".number").textContent;
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function (itemElem) {
            var name = itemElem.querySelector(".name").textContent;
            return name.match(/ium$/);
        },
    };

    for (let imageGallery of imageGalleries) {
        let wrapperid = imageGallery.getAttribute("data-id");
        let defaultFilter = imageGallery.getAttribute("data-default-filter");

        const loadMoreBtn = imageGallery.closest(".eb-parent-wrapper").querySelectorAll('.eb-img-gallery-loadmore')[0];
        const enableLoadmore = loadMoreBtn?.getAttribute("data-loadmore");;
        const initShow = Number(loadMoreBtn?.getAttribute("data-images-per-page")); //number of images loaded on init & onclick load more button
        let counter = initShow;

        // add class is-checked
        const selectFilters = imageGallery.closest(".eb-parent-wrapper").querySelectorAll('.eb-img-gallery-filter-item')
        if (selectFilters) {
            if (defaultFilter) {
                for (let selectFilter of selectFilters) {
                    const dataFilter = selectFilter.getAttribute("data-filter")
                    if (dataFilter === `.eb-filter-img-${defaultFilter}` || dataFilter === defaultFilter) {
                        selectFilter.classList.add("is-checked");
                    }
                }
            }
            else {
                selectFilters[0]?.classList.add("is-checked");
            }
        }

        var iso = "";

        imagesLoaded(imageGallery, function () {
            if (imageGallery.classList.contains("grid")) {
                iso = new Isotope(`.${wrapperid}`, {
                    itemSelector: ".eb-gallery-img-content",
                    layoutMode: "fitRows",
                    transitionDuration: '0.5s',
                });
            } else {
                iso = new Isotope(`.${wrapperid}`, {
                    itemSelector: ".eb-gallery-img-content",
                    percentPosition: true,
                    masonry: {
                        columnWidth: ".eb-gallery-img-content",
                    },
                });
            }
            if (defaultFilter) {
                iso.arrange({ filter: defaultFilter === '*' ? '*' : `.eb-filter-img-${defaultFilter}` });
            }
            else {
                iso.arrange();
            }

            if (enableLoadmore) loadMore(iso, initShow);
        });

        // bind filter button click
        var filtersElem = imageGallery.closest(".eb-parent-wrapper").querySelectorAll(`.filter-wrapper-${wrapperid} li`);

        filtersElem.length > 0 && filtersElem.forEach((item) => {
            item.addEventListener("click", function (event) {
                let imageGallery = item
                    .closest(".eb-parent-wrapper")
                    .querySelector(`.${wrapperid}`);

                filterValue = event.target.getAttribute("data-filter");
                // use matching filter function
                filterValue = filterFns[filterValue] || filterValue;

                iso = Isotope.data(imageGallery);

                iso.arrange({ filter: filterValue });
                // iso.destroy();
            });
        });

        // change is-checked class on buttons
        var buttonGroups = document.querySelectorAll(
            `.filter-wrapper-${wrapperid}`
        );
        for (var i = 0, len = buttonGroups.length; i < len; i++) {
            var buttonGroup = buttonGroups[i];
            radioButtonGroup(buttonGroup);
        }

        function radioButtonGroup(buttonGroup) {
            buttonGroup.addEventListener("click", function (event) {
                // only work with buttons
                if (!matchesSelector(event.target, "li")) {
                    return;
                }
                buttonGroup.querySelector(".is-checked").classList.remove("is-checked");
                event.target.classList.add("is-checked");
            });
        }


        // loadmore function
        function loadMore(isotopInstance, toShow) {
            const hiddenElements = imageGallery.querySelectorAll('.hidden');
            hiddenElements.forEach(function (element) {
                element.classList.remove('hidden');
            });

            const hiddenElems = isotopInstance.filteredItems?.slice(toShow, isotopInstance.filteredItems.length).map(function (item) {
                return item.element;
            });

            hiddenElems?.forEach(function (element) {
                element.classList.add('hidden');
            });

            iso.arrange({ layoutMode: 'fitRows' });

            // isotopInstance.isotope('layout');

            //when no more to load, hide show more button
            if (hiddenElems?.length == 0) {
                loadMoreBtn.style.display = "none";
            }
            else {
                loadMoreBtn.style.display = 'block';
            };

        }

        // Loadmore Btn
        if (enableLoadmore) {
            const filtersWrapper = imageGallery.closest(".eb-parent-wrapper").querySelector('.eb-img-gallery-filter-wrapper');

            if (filtersWrapper) { filtersWrapper.dataset.clicked = 'true' };

            loadMoreBtn.addEventListener("click", function (event) {
                iso = Isotope.data(`.${wrapperid}`);

                if (filtersWrapper?.dataset.clicked === 'true') {
                    // When filter button clicked, set the initial value for counter
                    counter = initShow;
                    filtersWrapper.dataset.clicked = 'false';
                } else {
                    counter = counter;
                }

                counter = counter + initShow;
                loadMore(iso, counter);
            });

            filtersWrapper?.addEventListener('click', function () {
                iso = Isotope.data(`.${wrapperid}`);
                this.dataset.clicked = 'true'; // Set data-clicked attribute to 'true'

                loadMore(iso, initShow);
            });
        }

    }
});
