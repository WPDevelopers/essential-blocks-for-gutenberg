/**
 * WordPress dependencies
 */
import apiFetch from "@wordpress/api-fetch";
import { conPaddingConst } from "../../accordion/src/constants/dimensionsConstants";
const rootURL = EssentialBlocksLocalize
    ? EssentialBlocksLocalize.rest_rootURL
    : false;
apiFetch.use(apiFetch.createRootURLMiddleware(rootURL));

window.addEventListener("DOMContentLoaded", function () {
    ebPaginationFunc("");
});

function ebPaginationFunc(queryParamString) {
    const isPagination = document.getElementsByClassName("ebpg-pagination");

    if (isPagination.length > 0) {
        const paginationButton = document.querySelectorAll(
            ".ebpg-pagination button"
        );

        if (paginationButton.length > 0) {
            //
            document
                .querySelectorAll(".ebpostgrid-pagination")
                .forEach((item) => {
                    eb_paginationNumberHandler(item);
                });

            paginationButton.forEach((button) => {
                var pageNumber = 1;
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
                        pageNumber = parseInt(eb_handlePreviousNext(this)) - 1;
                    } else if (isNext) {
                        pageNumber = parseInt(eb_handlePreviousNext(this)) + 1;
                    } else {
                        pageNumber = parseInt(this.dataset.pagenumber); //Get Page Number
                    }

                    const queryStringSelector = this.closest(
                        ".eb-post-grid-wrapper"
                    );
                    if (queryStringSelector) {
                        const queryString = queryStringSelector.dataset;
                        const queryFilter = queryParamString
                            ? queryParamString
                            : "";

                        const attributes = JSON.parse(queryString.attributes);
                        const version = attributes?.version ? attributes?.version : '';

                        apiFetch({
                            path: `essential-blocks/v1/queries?query_data=${queryString.querydata}&attributes=${queryString.attributes}${queryFilter}&pageNumber=${pageNumber}`,
                        }).then((result) => {
                            if (isLoadMore) {
                                if (!result) {
                                    const noPostsMarkup =
                                        '<p class="eb-no-posts">No more Posts</p>';
                                    this.closest(
                                        ".ebpostgrid-pagination"
                                    ).insertAdjacentHTML(
                                        "beforebegin",
                                        noPostsMarkup
                                    );
                                    this.closest(
                                        ".ebpostgrid-pagination"
                                    ).innerHTML = "";
                                } else {
                                    if ('v2' === version) {
                                        const selector = this.closest(".eb-post-grid-wrapper").querySelector('.eb-post-grid-posts-wrapper');
                                        if (selector) {
                                            selector.insertAdjacentHTML("beforeend", result);
                                        }
                                    } else {
                                        this.closest(".ebpostgrid-pagination")
                                            ? this.closest(
                                                ".ebpostgrid-pagination"
                                            ).insertAdjacentHTML(
                                                "beforebegin",
                                                result
                                            )
                                            : "";
                                    }
                                }
                            } else {
                                this.closest(".eb-post-grid-wrapper")
                                    .querySelectorAll(".ebpg-grid-post")
                                    .forEach((post) => {
                                        post.remove();
                                    });
                                if ('v2' === version) {
                                    const selector = this.closest(".eb-post-grid-wrapper").querySelector('.eb-post-grid-posts-wrapper')
                                    if (selector) {
                                        selector.innerHTML = result;
                                    }
                                } else {
                                    this.closest(".ebpostgrid-pagination")
                                        ? this.closest(
                                            ".ebpostgrid-pagination"
                                        ).insertAdjacentHTML(
                                            "beforebegin",
                                            result
                                        )
                                        : "";
                                }
                                if (eb_hasClass(this, "ebpg-pagination-item")) {
                                    this.closest(".ebpostgrid-pagination")
                                        .querySelectorAll(
                                            ".ebpg-pagination-item"
                                        )
                                        .forEach((post) => {
                                            post.classList.remove("active");
                                        });
                                    this.classList.add("active");
                                }
                                eb_paginationNumberHandler(
                                    this.closest(".ebpostgrid-pagination")
                                );
                            }
                        });
                    }
                });
            });
        }
    }
}

function eb_hasClass(target, className) {
    return new RegExp("(\\s|^)" + className + "(\\s|$)").test(target.className);
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

function eb_handlePreviousNext(selector) {
    let pageNumber = 1;
    const active = selector
        .closest(".ebpostgrid-pagination")
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
        eb_paginationNumberHandler(selector.closest(".ebpostgrid-pagination"));
    }
    return pageNumber;
}

//Filter Category
window.addEventListener("DOMContentLoaded", (event) => {
    const filters = document.getElementsByClassName(
        `eb-post-grid-category-filter`
    );
    for (let filter of filters) {
        const taxonomy = filter.dataset.ebpgtaxonomy;
        const filterItems = filter.querySelectorAll(
            `.ebpg-category-filter-list li`
        );
        filterItems.forEach((item) => {
            item.addEventListener("click", function (event) {
                const category = event.target.getAttribute("data-ebpgCategory");
                let queryParamString = "";
                if (category === "all") {
                    queryParamString = `&query_type=filter`;
                } else {
                    queryParamString = `&taxonomy=${taxonomy}&category=${category}`;
                }

                const queryString = this.closest(".eb-post-grid-wrapper").dataset;
                const attributes = JSON.parse(queryString.attributes);
                const version = attributes?.version ? attributes?.version : '';

                apiFetch({
                    path: `essential-blocks/v1/queries?query_data=${queryString.querydata}&attributes=${queryString.attributes}${queryParamString}`,
                    parse: false,
                }).then(
                    (result) => {
                        let totalPosts = result.headers.get("X-WP-Total");
                        if (totalPosts) {
                            // pagination initiate
                            let data = new FormData();
                            data.append("action", "post_grid_block_pagination");
                            data.append(
                                "post_grid_pagination_nonce",
                                EssentialBlocksLocalize.post_grid_pagination_nonce
                            );
                            data.append("querydata", queryString?.querydata);
                            data.append("attributes", queryString?.attributes);
                            data.append("totalPosts", totalPosts);

                            fetch(EssentialBlocksLocalize.ajax_url, {
                                method: "POST",
                                body: data,
                            }) // wrapped
                                .then((res) => res.text())
                                .then((data) => {
                                    const paginationSelector = this.closest(".eb-post-grid-wrapper").querySelector(".ebpostgrid-pagination");
                                    if (paginationSelector) {
                                        paginationSelector.innerHTML = data;
                                    }
                                    else {
                                        const newPaginationDiv = document.createElement("div");
                                        newPaginationDiv.className = "ebpostgrid-pagination ebpg-pagination ";
                                        newPaginationDiv.innerHTML = data;

                                        // Insert the new div where you want it
                                        const gridWrapper = this.closest(".eb-post-grid-wrapper");
                                        gridWrapper.appendChild(newPaginationDiv);
                                    }
                                    ebPaginationFunc(queryParamString);
                                })
                                .catch((err) => console.log(err));

                            apiFetch({
                                path: `essential-blocks/v1/queries?query_data=${queryString.querydata}&attributes=${queryString.attributes}${queryParamString}`,
                            }).then((result) => {
                                this.closest(".eb-post-grid-wrapper").querySelectorAll(".ebpg-grid-post")
                                    .forEach((post) => {
                                        post.remove();
                                    });
                                if (
                                    this.closest(".eb-post-grid-wrapper").querySelector("p")
                                ) {
                                    this.closest(".eb-post-grid-wrapper").querySelector("p").remove();
                                }
                                // need to change for v2
                                if ('v2' === version) {
                                    const selector = this.closest(".eb-post-grid-wrapper").querySelector('.eb-post-grid-posts-wrapper')
                                    if (selector) {
                                        selector.innerHTML = result;
                                    }
                                    else {
                                        const newSelector = document.createElement("div");
                                        newSelector.className = "eb-post-grid-posts-wrapper";
                                        newSelector.innerHTML = result;
                                        this.closest(".eb-post-grid-category-filter").insertAdjacentHTML("afterend", newSelector.outerHTML);
                                    }
                                } else {
                                    this.closest(".eb-post-grid-category-filter").insertAdjacentHTML("afterend", result);
                                }

                                this.closest(".eb-post-grid-category-filter")
                                    .querySelectorAll(".ebpg-category-filter-list-item")
                                    .forEach((item) => {
                                        item.classList.remove("active");
                                    });
                                this.classList.add("active");
                            });
                        } else {
                            this.closest(".eb-post-grid-category-filter")
                                .querySelectorAll(
                                    ".ebpg-category-filter-list-item"
                                )
                                .forEach((item) => {
                                    item.classList.remove("active");
                                });
                            this.classList.add("active");
                            this.closest(".eb-post-grid-wrapper")
                                .querySelectorAll(".ebpg-grid-post")
                                .forEach((post) => {
                                    post.remove();
                                });
                            if (
                                this.closest(
                                    ".eb-post-grid-wrapper"
                                ).querySelector(".ebpostgrid-pagination")
                            ) {
                                this.closest(
                                    ".eb-post-grid-wrapper"
                                ).querySelector(
                                    ".ebpostgrid-pagination"
                                ).innerHTML = "";
                            }
                            if (
                                this.closest(
                                    ".eb-post-grid-wrapper"
                                ).querySelector("p")
                            ) {
                                this.closest(".eb-post-grid-wrapper")
                                    .querySelectorAll("p")
                                    .forEach((item) => {
                                        item.remove();
                                    });
                            }

                            this.closest(
                                ".eb-post-grid-wrapper"
                            ).insertAdjacentHTML(
                                "beforeend",
                                "<p>No Posts Found</p>"
                            );
                        }
                    },
                    (error) => {
                        console.log("error", error);
                    }
                );
            });
        });
    }
});
