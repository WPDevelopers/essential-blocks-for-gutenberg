/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState, createRef } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import { select } from "@wordpress/data";
import { doAction, applyFilters } from "@wordpress/hooks";
import { dateI18n, format, getSettings } from "@wordpress/date";

/**
 * External depencencies
 */
import Slider from "react-slick";
import parse from "html-react-parser";

/**
 * Internal depencencies
 */
import classnames from "classnames";

import Inspector from "./inspector";
import Style from "./style";

const {
    duplicateBlockIdFix,
    ebJsonStringCheck,
    CustomQuery,
    DynamicInputValueHandler,
} = window.EBControls;

const SlickArrow = (props) => {
    const { className, style, onClick, faClass } = props;
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <i className={faClass}></i>
        </div>
    );
};

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected, name } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        preset,
        queryData,
        showThumbnail,
        showTitle,
        titleLength,
        titleTextAlign,
        titleTag,
        showContent,
        contentLength,
        expansionIndicator,
        showReadMore,
        readmoreText,
        showMeta,
        headerMeta,
        footerMeta,
        authorPrefix,
        datePrefix,
        classHook,
        arrows,
        adaptiveHeight,
        autoplay,
        autoplaySpeed,
        dots,
        infinite,
        pauseOnHover,
        speed,
        slideToShowRange,
        TABslideToShowRange,
        MOBslideToShowRange,
        dotPreset,
        leftArrowIcon,
        rightArrowIcon,
        cover,
    } = attributes;

    const [queryResults, setQueryResults] = useState(false);
    const [didMount, setDidMount] = useState(false);

    const dateFormat = getSettings().formats.date;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        setTimeout(() => {
            setDidMount(true)
        }, 1500)

        //Set Unique Id
        const BLOCK_PREFIX = "eb-post-carousel";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className),
    });

    const TABslideToShowRanges = TABslideToShowRange ? TABslideToShowRange : 2;
    const MOBslideToShowRanges = MOBslideToShowRange ? MOBslideToShowRange : 1;

    /**
     * func slideToShowCount
     * @param {number} range
     * @param {object} posts
     * @returns {number}
     */
    const slideToShowCount = (range, posts) => {
        if (typeof posts === 'object' && Object.keys(posts).length < range) {
            return Object.keys(posts).length
        }
        return range
    }

    const settings = {
        arrows,
        autoplay,
        autoplaySpeed,
        dots,
        infinite,
        pauseOnHover,
        slidesToShow: slideToShowCount(slideToShowRange, queryResults),
        speed,
        prevArrow: <SlickArrow faClass={leftArrowIcon} />,
        nextArrow: <SlickArrow faClass={rightArrowIcon} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: slideToShowCount(TABslideToShowRanges, queryResults),
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: slideToShowCount(MOBslideToShowRanges, queryResults),
                },
            },
        ],
    };

    const slider = createRef();

    return cover.length ? (
        <div>
            <img src={cover} alt="post carousel" style={{ maxWidth: "100%" }} />
        </div>
    ) : (
        <>
            {isSelected && <Inspector {...props} slider={slider} setQueryResults={setQueryResults} />}

            {didMount === false && (
                <>
                    {queryResults === false && (
                        <div className="eb-loading">
                            <img src={`${EssentialBlocksLocalize?.image_url}/ajax-loader.gif`} alt="Loading..." />
                        </div>
                    )}
                    <CustomQuery
                        isEdit={true}
                        attributes={attributes}
                        setAttributes={setAttributes}
                        setQueryResults={setQueryResults}
                    />
                </>
            )}
            <div {...blockProps}>
                <Style {...props} />

                {queryResults !== false && (
                    <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                        <div
                            className={`eb-post-carousel-wrapper ${blockId} ${dotPreset} ${preset} ${dots ? "eb-slider-dots" : ""
                                } ${adaptiveHeight ? "equal-height" : ""}`}
                            data-id={blockId}
                        >
                            <Slider {...settings} ref={slider}>
                                {typeof queryResults === "object" &&
                                    queryResults.length > 0 &&
                                    queryResults.map((post, index) => {
                                        //Generate Featured Image
                                        const {
                                            featuredImageInfo: { url: imageSourceUrl, alt: featuredImageAlt } = {},
                                        } = post;
                                        const featuredImage = showThumbnail && (
                                            <img key={index} src={imageSourceUrl} alt={featuredImageAlt} />
                                        );

                                        //Generate Title
                                        const title = post?.title?.rendered;
                                        const titleWithLimitWords =
                                            titleLength >= 0 ? title.trim().split(" ", titleLength).join(" ") : title;
                                        const titleHTML = `
						<${titleTag} class="ebpg-entry-title">
							<a class="ebpg-carousel-post-link" href="#" title="${titleWithLimitWords}">
								${titleWithLimitWords}
							</a>
						</${titleTag}>
					`;

                                        //Generate Excerpt & Read More
                                        let excerpt = post?.excerpt ? post?.excerpt?.rendered : post?.content?.rendered;

                                        const excerptElement = document.createElement("div");
                                        excerptElement.innerHTML = excerpt ? excerpt : "";
                                        excerpt = excerptElement.textContent || excerptElement.innerText || "";
                                        const excerptWithLimitWords =
                                            contentLength >= 0
                                                ? excerpt.trim().split(" ", contentLength).join(" ")
                                                : excerpt;

                                        const avatarUrl = (author) => {
                                            if (author.avatar_urls && author.avatar_urls[96]) {
                                                return author.avatar_urls[96];
                                            } else {
                                                return "http://1.gravatar.com/avatar/467ceabf70aaa0e555b7dd11c9729241?s=96&d=mm&r=g";
                                            }
                                        };
                                        const avatar =
                                            post._embedded && post._embedded.author ? (
                                                <div className="ebpg-author-avatar">
                                                    <a href={post._embedded.author[0].link}>
                                                        <img
                                                            alt={
                                                                post._embedded.author[0].name
                                                                    ? post._embedded.author[0].name
                                                                    : post._embedded.author[0].slug
                                                            }
                                                            src={avatarUrl(post._embedded.author[0])}
                                                        />
                                                    </a>
                                                </div>
                                            ) : (
                                                ""
                                            );

                                        const date = (
                                            <span className="ebpg-posted-on">
                                                <DynamicInputValueHandler
                                                    value={datePrefix}
                                                    tagName="span"
                                                    onChange={(datePrefix) =>
                                                        setAttributes({
                                                            datePrefix,
                                                        })
                                                    }
                                                    readOnly={true}
                                                />{" "}
                                                <time
                                                    dateTime={format(
                                                        "c",
                                                        post.date_gmt
                                                    )}
                                                >
                                                    {dateI18n(
                                                        dateFormat,
                                                        post.date_gmt
                                                    )}
                                                </time>
                                            </span>
                                        );

                                        const author =
                                            post._embedded && post._embedded.author ? (
                                                <span className="ebpg-posted-by">
                                                    <DynamicInputValueHandler
                                                        value={authorPrefix}
                                                        tagName="span"
                                                        onChange={(frontTitle) =>
                                                            setAttributes({
                                                                frontTitle,
                                                            })
                                                        }
                                                        readOnly={true}
                                                    />{" "}
                                                    <a
                                                        href="#"
                                                        title={
                                                            post._embedded.author[0].name
                                                                ? post._embedded.author[0].name
                                                                : post._embedded.author[0].slug
                                                        }
                                                        rel="author"
                                                    >
                                                        {post._embedded.author[0].name
                                                            ? post._embedded.author[0].name
                                                            : post._embedded.author[0].slug}
                                                    </a>
                                                </span>
                                            ) : (
                                                ""
                                            );

                                        const postTermsVal = {};
                                        post._embedded &&
                                            post._embedded["wp:term"] &&
                                            post._embedded["wp:term"].length > 0 &&
                                            post._embedded["wp:term"].map((item) => {
                                                let termObj = {};
                                                let termName = "";
                                                item.length > 0 &&
                                                    item.map((term) => {
                                                        termName = term.taxonomy;
                                                        termObj[term.slug] = {
                                                            name: term.name,
                                                            id: term.id,
                                                            link: term.link,
                                                            slug: term.slug,
                                                        };
                                                    });
                                                postTermsVal[termName] = termObj;
                                            });

                                        const postTermsHtml = {};
                                        if (Object.keys(postTermsVal).length > 0) {
                                            Object.keys(postTermsVal).map((term) => {
                                                let termClass = term;
                                                if (term === "category") {
                                                    termClass = "categories";
                                                } else if (term === "post_tag") {
                                                    termClass = "tags";
                                                }
                                                let markup = `<div className="ebpg-meta ebpg-${termClass}-meta">`;
                                                Object.keys(postTermsVal[term]).length > 0 &&
                                                    Object.keys(postTermsVal[term]).map((item, index) => {
                                                        markup += `
													<a
														key=${index}
														href=${postTermsVal[term][item].link}
														title=${postTermsVal[term][item].name}
													>
														${postTermsVal[term][item].name}
													</a>
												`;
                                                    });
                                                markup += `</div>`;
                                                postTermsHtml[term] = markup;
                                            });
                                        }

                                        const categories = postTermsVal.category ? (
                                            <div className="ebpg-meta ebpg-categories-meta">
                                                {Object.keys(postTermsVal.category).map((item, index) => (
                                                    <a
                                                        key={index}
                                                        href={postTermsVal.category[item].link}
                                                        title={postTermsVal.category[item].name}
                                                    >
                                                        {postTermsVal.category[item].name}
                                                    </a>
                                                ))}
                                            </div>
                                        ) : (
                                            ""
                                        );

                                        const tags = postTermsVal.post_tag ? (
                                            <div className="ebpg-meta ebpg-tags-meta">
                                                {Object.keys(postTermsVal.post_tag).map((item) => (
                                                    <a
                                                        href={postTermsVal.post_tag[item].link}
                                                        title={postTermsVal.post_tag[item].name}
                                                    >
                                                        {postTermsVal.post_tag[item].name}
                                                    </a>
                                                ))}
                                            </div>
                                        ) : (
                                            ""
                                        );

                                        const metaObject = {
                                            date,
                                            author,
                                            categories,
                                            tags,
                                        };

                                        const headerMetaItems = ebJsonStringCheck(headerMeta)
                                            ? JSON.parse(headerMeta).map((item) => item.value)
                                            : [];
                                        const headerMetaHtml = showMeta ? (
                                            <div className="ebpg-entry-meta ebpg-header-meta">
                                                {headerMetaItems.includes("avatar") && avatar}
                                                <div className="ebpg-entry-meta-items">
                                                    {headerMetaItems.map((item) => {
                                                        if (metaObject.hasOwnProperty(item)) {
                                                            return metaObject[item];
                                                        } else if (postTermsHtml.hasOwnProperty(item)) {
                                                            return parse(postTermsHtml[item]);
                                                        } else {
                                                            if (item === "avatar") {
                                                                return;
                                                            }
                                                            return applyFilters(
                                                                "essential_blocks_post_carousel_dynamic_fields_markup",
                                                                "",
                                                                item
                                                            );
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        ) : (
                                            ""
                                        );

                                        const footerMetaItems = ebJsonStringCheck(footerMeta)
                                            ? JSON.parse(footerMeta).map((item) => item.value)
                                            : [];
                                        const footerMetaHtml = showMeta ? (
                                            <div className="ebpg-entry-meta ebpg-footer-meta">
                                                {footerMetaItems.includes("avatar") && avatar}
                                                <div className="ebpg-entry-meta-items">
                                                    {footerMetaItems.map((item) => {
                                                        if (metaObject.hasOwnProperty(item)) {
                                                            return metaObject[item];
                                                        } else if (postTermsHtml.hasOwnProperty(item)) {
                                                            return parse(postTermsHtml[item]);
                                                        } else {
                                                            if (item === "avatar") {
                                                                return;
                                                            }
                                                            return applyFilters(
                                                                "essential_blocks_post_carousel_dynamic_fields_markup",
                                                                "",
                                                                item
                                                            );
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        ) : (
                                            ""
                                        );

                                        return (
                                            <article
                                                className="ebpg-carousel-post ebpg-post-carousel-column"
                                                data-id={post.id}
                                            >
                                                <div className="ebpg-carousel-post-holder">
                                                    {preset === "style-4" && (
                                                        <a className="ebpg-post-link-wrapper" href="#"></a>
                                                    )}
                                                    <div className="ebpg-entry-media">
                                                        {showThumbnail && (
                                                            <div className="ebpg-entry-thumbnail">
                                                                {preset !== "style-4" && (
                                                                    <a className="ebpg-post-link-wrapper" href="#"></a>
                                                                )}
                                                                {post._embedded &&
                                                                    post._embedded["wp:featuredmedia"] &&
                                                                    post._embedded["wp:featuredmedia"].length > 0 && (
                                                                        <img
                                                                            src={
                                                                                post._embedded["wp:featuredmedia"][0]
                                                                                    .source_url
                                                                            }
                                                                            alt={post?.title?.alt_text}
                                                                        />
                                                                    )}
                                                                {post._embedded && !post._embedded["wp:featuredmedia"] && (
                                                                    <img
                                                                        src={EssentialBlocksLocalize?.placeholder_image}
                                                                        alt="No Thumbnail Available"
                                                                    />
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="ebpg-entry-wrapper">
                                                        {/* Header Meta */}
                                                        {showMeta && headerMetaHtml}

                                                        {showTitle && (
                                                            <header
                                                                className="ebpg-entry-header"
                                                                dangerouslySetInnerHTML={{
                                                                    __html: titleHTML,
                                                                }}
                                                            ></header>
                                                        )}

                                                        <div className="ebpg-entry-content">
                                                            {showContent && excerptWithLimitWords && (
                                                                <div className="ebpg-carousel-post-excerpt">
                                                                    <p>
                                                                        {excerptWithLimitWords}
                                                                        {__(expansionIndicator)}
                                                                    </p>
                                                                </div>
                                                            )}
                                                            {showReadMore && (
                                                                <div className="ebpg-readmore-btn">
                                                                    <a href="#">{__(readmoreText)}</a>
                                                                </div>
                                                            )}
                                                        </div>
                                                        {/* Footer Meta */}
                                                        {showMeta && footerMetaHtml}
                                                    </div>
                                                </div>
                                            </article>
                                        );
                                    })}
                                {typeof queryResults != "undefined" && queryResults.length < 1 && <p>No Posts Found</p>}
                            </Slider>
                        </div>
                    </div>
                )}


            </div>
        </>
    );
}
