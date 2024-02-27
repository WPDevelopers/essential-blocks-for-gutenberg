import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
    const {
        blockId,
        layouts,
        sources,
        displayCaption,
        captionOnHover,
        styleNumber,
        overlayStyle,
        horizontalAlign,
        verticalAlign,
        disableLightBox,
        classHook,
        filterItems,
        enableFilter,
        enableFilterAll,
        filterAllTitle,
        addCustomLink,
        defaultFilter,
        enableIsotope,
        enableLoadMore,
        loadmoreBtnText,
        imagesPerPage,
    } = attributes;

    if (sources.length === 0) return null;

    let lightBoxHtml = {
        id: "eb-gallery-img-content",
    };
    if (!disableLightBox) {
        lightBoxHtml = {
            ...lightBoxHtml,
            ["data-fslightbox"]: "gallery",
            ["data-type"]: "image",
        };
    }

    return (
        <div {...useBlockProps.save()}>
            <div
                className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
            >
                {enableFilter && (
                    <ul
                        className={`eb-img-gallery-filter-wrapper filter-wrapper-${blockId}`}
                        data-id={blockId}
                    >
                        {enableFilterAll && (
                            <li
                                className="eb-img-gallery-filter-item"
                                data-filter={"*"}
                                data-id={blockId}
                            >
                                {filterAllTitle !== "" ? filterAllTitle : "All"}
                            </li>
                        )}
                        {filterItems.map(({ value, label }, index) => {
                            return (
                                <li
                                    key={index}
                                    className="eb-img-gallery-filter-item"
                                    data-filter={`.eb-filter-img-${value}`}
                                    data-id={blockId}
                                >
                                    {label}
                                </li>
                            );
                        })}
                    </ul>
                )}
                <div
                    className={`eb-gallery-img-wrapper ${blockId} ${layouts} ${overlayStyle} caption-style-${styleNumber} ${captionOnHover ? "caption-on-hover" : ""
                        } ${enableFilter ? "eb-filterable-img-gallery" : ""} ${enableIsotope ? 'enable-isotope' : 'no-isotope'} ${enableLoadMore ? 'show-loadmore' : ''}`}
                    data-id={blockId}
                    data-default-filter={defaultFilter}
                >
                    {sources.map((source, index) => {
                        let filters;

                        if (
                            source.hasOwnProperty("filter") &&
                            source.filter.length > 0
                        ) {
                            filters = JSON.parse(source.filter);

                            filters = filters.map((filter) => filter.value);

                            filters = filters.toString();

                            filters = filters.replaceAll(
                                ",",
                                " eb-filter-img-"
                            );
                        } else {
                            filters = "";
                        }

                        let innerHtml = (
                            <span className="eb-gallery-link-wrapper">
                                <img
                                    className="eb-gallery-img"
                                    src={source.url}
                                    image-index={index}
                                    alt={source.alt}
                                />
                                {displayCaption &&
                                    source.caption &&
                                    source.caption.length > 0 && (
                                        <span
                                            className={`eb-gallery-img-caption ${horizontalAlign} ${verticalAlign}`}
                                        >
                                            {source.caption}
                                        </span>
                                    )}
                            </span>
                        );

                        if (!addCustomLink) {
                            return (
                                <a
                                    key={index}
                                    href={
                                        !disableLightBox
                                            ? source.url
                                            : "javascript:void(0)"
                                    }
                                    {...lightBoxHtml}
                                    className={`eb-gallery-img-content eb-filter-img-${filters}`}
                                    rel="noopener"
                                >
                                    {innerHtml}
                                </a>
                            );
                        }

                        if (addCustomLink) {
                            return (
                                <a
                                    key={index}
                                    href={
                                        !disableLightBox
                                            ? source.url
                                            : addCustomLink &&
                                                source.customLink &&
                                                source.isValidUrl
                                                ? source.customLink
                                                : "#"
                                    }
                                    {...lightBoxHtml}
                                    target={
                                        disableLightBox &&
                                            addCustomLink &&
                                            source.openNewTab
                                            ? "_blank"
                                            : "_self"
                                    }
                                    className={`eb-gallery-img-content eb-filter-img-${filters}`}
                                    rel="noopener"
                                >
                                    {innerHtml}
                                </a>
                            );
                        }
                    })}
                </div>

                {enableLoadMore && (
                    <button data-images-per-page={imagesPerPage} data-loadmore={enableLoadMore} className="eb-img-gallery-loadmore">{loadmoreBtnText}</button>
                )}
            </div>
        </div>
    );
};

export default Save;
