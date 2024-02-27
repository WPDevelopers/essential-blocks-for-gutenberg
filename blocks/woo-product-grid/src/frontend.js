/**
 * WordPress dependencies
 */
import apiFetch from "@wordpress/api-fetch";
document.addEventListener("DOMContentLoaded", function () {
    const wooProductGrids = document.querySelectorAll(
        ".eb-woo-products-wrapper"
    );

    if (!wooProductGrids) return;

    for (let i = 0; i < wooProductGrids.length; i++) {
        let currentWooProducts = wooProductGrids[i];
        let wooPagination = currentWooProducts.querySelector(
            ".ebproductgrid-pagination"
        );

        if (wooPagination) {
            let wooPaginationButton = wooPagination.querySelectorAll(
                ".ebpg-pagination button"
            );

            // Pagination Button
            if (wooPaginationButton.length > 0) {
                document
                    .querySelectorAll(".ebproductgrid-pagination")
                    .forEach((item) => {
                        eb_paginationNumberHandler(item);
                    });
                wooPaginationButton.forEach((button) => {
                    let pageNumber = 1;
                    button.addEventListener("click", function () {
                        const isLoadMore = eb_hasClass(
                            this,
                            "ebpg-pagination-button"
                        ); //Is Pagination Type Load More True
                        const isPrevious = eb_hasClass(
                            this,
                            "ebpg-pagination-item-previous"
                        ); //Is Pagination Type Previous
                        const isNext = eb_hasClass(
                            this,
                            "ebpg-pagination-item-next"
                        ); //Is Pagination Type Previous
                        if (isLoadMore) {
                            pageNumber = parseInt(pageNumber) + 1; //Get Page Number
                        } else if (isPrevious) {
                            pageNumber =
                                parseInt(eb_handlePreviousNext(this)) - 1;
                        } else if (isNext) {
                            pageNumber =
                                parseInt(eb_handlePreviousNext(this)) + 1;
                        } else {
                            pageNumber = parseInt(this.dataset.pagenumber); //Get Page Number
                        }

                        const queryStringSelector = this.closest(
                            ".eb-woo-products-wrapper"
                        );

                        if (queryStringSelector) {
                            const queryString = queryStringSelector.dataset;
                            apiFetch({
                                path: `essential-blocks/v1/products?query_data=${encodeURIComponent(
                                    queryString.querydata
                                )}&attributes=${encodeURIComponent(
                                    queryString.attributes
                                )}&pageNumber=${pageNumber}&is_frontend=true`,
                            }).then((result) => {
                                if (isLoadMore) {
                                    if (!result) {
                                        const noPostsMarkup =
                                            '<p class="eb-no-posts">No more products</p>';
                                        this.closest(
                                            ".ebproductgrid-pagination"
                                        ).insertAdjacentHTML(
                                            "beforebegin",
                                            noPostsMarkup
                                        );
                                        this.closest(
                                            ".ebproductgrid-pagination"
                                        ).remove();
                                    } else {
                                        this.closest(
                                            ".ebproductgrid-pagination"
                                        )
                                            .parentElement.querySelector(
                                                ".eb-woo-products-gallery"
                                            )
                                            .insertAdjacentHTML(
                                                "beforeend",
                                                result
                                            );
                                    }
                                } else {
                                    //Remove current posts
                                    this.closest(".eb-woo-products-wrapper")
                                        .querySelectorAll(
                                            ".eb-woo-products-col"
                                        )
                                        .forEach((post) => {
                                            post.remove();
                                        });
                                    //Insert new posts from api response
                                    this.closest(".ebproductgrid-pagination")
                                        .parentElement.querySelector(
                                            ".eb-woo-products-gallery"
                                        )
                                        .insertAdjacentHTML(
                                            "beforeend",
                                            result
                                        );
                                    //Handle pagination number buttons
                                    if (
                                        eb_hasClass(
                                            this,
                                            "ebpg-pagination-item"
                                        )
                                    ) {
                                        this.closest(
                                            ".ebproductgrid-pagination"
                                        )
                                            .querySelectorAll(
                                                ".ebpg-pagination-item"
                                            )
                                            .forEach((post) => {
                                                post.classList.remove("active");
                                            });
                                        this.classList.add("active");
                                    }
                                    //handle all pagination number button
                                    eb_paginationNumberHandler(
                                        this.closest(
                                            ".ebproductgrid-pagination"
                                        )
                                    );
                                }
                            });
                        }
                    });
                });
            }
        }
    }
});

function eb_hasClass(target, className) {
    return new RegExp("(\\s|^)" + className + "(\\s|$)").test(target.className);
}

function eb_handlePreviousNext(selector) {
    let pageNumber = 1;
    const active = selector
        .closest(".ebproductgrid-pagination")
        ?.querySelector(".ebpg-pagination-item.active");
    if (active) {
        pageNumber = active.dataset ? active.dataset.pagenumber : 1;

        if (eb_hasClass(selector, "ebpg-pagination-item-next")) {
            let nextSelector = active.nextElementSibling;
            while (nextSelector) {
                if (nextSelector.classList.contains("ebpg-pagination-item")) {
                    break;
                }
                nextSelector = nextSelector.nextElementSibling;
            }

            nextSelector.classList.add("active");
            active.classList.remove("active");
        } else if (eb_hasClass(selector, "ebpg-pagination-item-previous")) {
            let prevSelector = active.previousElementSibling;
            while (prevSelector) {
                if (prevSelector.classList.contains("ebpg-pagination-item")) {
                    break;
                }
                prevSelector = prevSelector.previousElementSibling;
            }

            prevSelector.classList.add("active");
            active.classList.remove("active");
        }
        eb_paginationNumberHandler(
            selector.closest(".ebproductgrid-pagination")
        );
    }
    return pageNumber;
}

function eb_paginationNumberHandler(selected) {
    const active = selected.querySelector(".ebpg-pagination-item.active");
    if (active) {
        const active_page_number = parseInt(active.dataset.pagenumber);
        const allPagination = selected.querySelectorAll(
            ".ebpg-pagination-item"
        );
        const totalPages = allPagination.length;

        let thisPageNumber = 1;

        allPagination.forEach((item) => {
            thisPageNumber = parseInt(item.dataset.pagenumber);

            eb_paginationHide(item);

            if (active_page_number === 1 && thisPageNumber <= 3) {
                eb_paginationShow(item);
            } else if (
                thisPageNumber >= active_page_number &&
                thisPageNumber <= active_page_number + 2
            ) {
                eb_paginationShow(item);
            } else if (thisPageNumber === totalPages) {
                eb_paginationShow(item);
            } else if (
                thisPageNumber === 1 &&
                (active_page_number >= totalPages - 2 ||
                    active_page_number >= 4)
            ) {
                eb_paginationShow(item);
            }
        });

        //Remove All Separator HTML and Separator Markup
        const selectSeparator = selected.querySelectorAll(
            ".ebpg-pagination-item-separator"
        );
        if (selectSeparator.length > 0) {
            selectSeparator.forEach((item) => {
                item.remove();
            });
        }
        const sepHtml =
            '<button class="ebpg-pagination-item-separator">...</button>';

        if (active_page_number < allPagination.length - 2) {
            allPagination[allPagination.length - 1].insertAdjacentHTML(
                "beforebegin",
                sepHtml
            );
        }

        if (
            active_page_number >= totalPages - 2 ||
            (totalPages > 4 && active_page_number >= 4)
        ) {
            allPagination[1].insertAdjacentHTML("afterend", sepHtml);
        }

        //Previous Next Sow Hide
        if (active_page_number === 1) {
            selected.querySelector(
                ".ebpg-pagination-item-previous"
            ).disabled = true;
            selected.querySelector(
                ".ebpg-pagination-item-next"
            ).disabled = false;
        } else if (active_page_number === totalPages) {
            selected.querySelector(
                ".ebpg-pagination-item-previous"
            ).disabled = false;
            selected.querySelector(
                ".ebpg-pagination-item-next"
            ).disabled = true;
        } else {
            selected.querySelector(
                ".ebpg-pagination-item-previous"
            ).disabled = false;
            selected.querySelector(
                ".ebpg-pagination-item-next"
            ).disabled = false;
        }
    }
}

function eb_paginationShow(item) {
    item.classList.remove("hide");
    item.classList.add("show");
}

function eb_paginationHide(item) {
    item.classList.remove("show");
    item.classList.add("hide");
}
