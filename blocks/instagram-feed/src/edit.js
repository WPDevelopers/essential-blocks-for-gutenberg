import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import {
    useBlockProps,
    BlockControls,
    MediaUpload,
} from "@wordpress/block-editor";
import {
    Spinner,
    ToolbarGroup,
    ToolbarButton,
    ExternalLink,
} from "@wordpress/components";
import { select } from "@wordpress/data";
/**
 * Internal Import
 */
import classnames from "classnames";
import Style from "./style";
import Inspector from "./inspector";

const {
    duplicateBlockIdFix,
} = window.EBControls;

const edit = (props) => {
    const {
        attributes,
        setAttributes,
        className,
        clientId,
        isSelected,
        name
    } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        token,
        layout,
        overlayStyle,
        cardStyle,
        thumbs,
        numberOfImages,
        hasEqualImages,
        showCaptions,
        showProfileImg,
        profileImg,
        imageID,
        showProfileName,
        profileName,
        sortBy,
        preview,
        showMeta,
        classHook,
        cover
    } = attributes;

    const [loading, setLoading] = useState(true);
    const [responseCode, setResponseCode] = useState(undefined);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        // this useEffect is for creating an unique id for each block's unique className by a random unique number
        const BLOCK_PREFIX = "eb-instagram-feed";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });

        // get default profileImg
        if (!profileImg) {
            setAttributes({
                profileImg: `${EssentialBlocksLocalize.eb_plugins_url}assets/images/user.png`,
            });
        }
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });

    if (preview) {
        return (
            <img
                style={{ width: "100%" }}
                src={`${EssentialBlocksLocalize?.image_url}/block-preview/instagram-preview.jpeg`}
            />
        );
    }
    const [instagramToken, setInstagramToken] = useState(token ?? "");
    const fetchAccessToken = () => {
        //Get Instagram Access Token
        let data = new FormData();
        data.append("action", "get_instagram_access_token");
        data.append("admin_nonce", EssentialBlocksLocalize.admin_nonce);
        fetch(EssentialBlocksLocalize.ajax_url, {
            method: "POST",
            body: data,
        }) // wrapped
            .then((res) => res.text())
            .then((data) => {
                const response = JSON.parse(data);
                if (response.success && response.data) {
                    setInstagramToken(response.data);
                } else {
                    setInstagramToken("");
                    setLoading(false);
                }
            })
            .catch((err) => console.log(err));
    };

    let container = "";
    //Initial UseEffect
    useEffect(() => {
        if (loading && instagramToken.length == 0) {
            container = (
                <p>
                    <Spinner />
                    {__("Loading feed", "essential-blocks")}
                </p>
            );
        }
        // set instagram token if save in attributes
        if (token && token.length > 0) {
            setInstagramToken(token);
            let data = new FormData();
            data.append("action", "save_eb_admin_options");
            data.append("type", "settings");
            data.append("key", "instagramToken");
            data.append("value", token);
            data.append("admin_nonce", EssentialBlocksLocalize.admin_nonce);
            fetch(EssentialBlocksLocalize.ajax_url, {
                method: "POST",
                body: data,
            }) // wrapped
                .then((res) => res.text())
                .catch((err) => console.log(err));
            setAttributes({ token: "" });
        } else {
            fetchAccessToken();
        }
    }, []);

    useEffect(() => {
        // start isotop
        if (thumbs.length > 0 && instagramToken.length > 0) {
            fetchInstagramDom();
        }
    }, [thumbs]);

    const fetchInstagramDom = () => {
        const instagrams = document.querySelectorAll(
            `.${blockId} .eb-instagram__gallery`
        );
        setTimeout(() => {
            for (let instagram of instagrams) {
                var iso;

                imagesLoaded(instagram, function () {
                    iso = new Isotope(instagram, {
                        itemSelector: ".instagram__gallery__col",
                        percentPosition: true,
                        masonry: {
                            columnWidth: ".instagram__gallery__col",
                        },
                    });
                });
            }
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        if (instagramToken.length > 0) {
            fetchPhotos();
        }
    }, [instagramToken]);

    useEffect(() => {
        if (thumbs.length > 0 && instagramToken.length > 0) {
            setLoading(true);
            fetchInstagramDom();
        }
    }, [
        layout,
        overlayStyle,
        cardStyle,
        sortBy,
        numberOfImages,
        hasEqualImages,
        showCaptions,
        showMeta,
        attributes.imgNumRange,
        attributes.TABimgNumRange,
        attributes.MOBimgNumRange,
        resOption,
    ]);

    const dateFormat = (date) => {
        const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const dateObj = new Date(date);
        const month = monthNames[dateObj.getMonth()];
        const day = String(dateObj.getDate()).padStart(2, "0");
        const year = dateObj.getFullYear();

        return day + " " + month + " " + year;
    };

    const fetchPhotos = () => {
        if (!instagramToken) {
            return false;
        }

        return fetch(
            `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&limit=500&access_token=${instagramToken}`
        )
            .then((res) => res.json())
            .then((json) => {
                if (json.error) {
                    setErrorMessage(json.error.message);
                    setResponseCode(json.error.code);
                }
                if (json.data) {
                    setResponseCode(200);

                    if (json.data.length > 0) {
                        setAttributes({ thumbs: json.data });
                    } else {
                        setAttributes({ thumbs: [] });
                        setResponseCode(500);
                    }
                }

                setLoading(false);
            });
    };

    switch (sortBy) {
        case "most_recent":
            thumbs.sort((a, b) => {
                let da = new Date(a.timestamp),
                    db = new Date(b.timestamp);
                return db - da;
            });
            break;
        case "least_recent":
            thumbs.sort((a, b) => {
                let da = new Date(a.timestamp),
                    db = new Date(b.timestamp);
                return da - db;
            });
            break;
    }

    // let container;
    let equalImage = hasEqualImages ? " has__equal__height" : "";
    let layoutClass = layout === "card" ? cardStyle : overlayStyle;

    if (instagramToken.length == 0 && !loading) {
        container = (
            <div>
                <p>
                    To get started please add an Instagram Access Token{" "}
                    <ExternalLink
                        href={`${EssentialBlocksLocalize.eb_admin_url}admin.php?page=essential-blocks&tab=options`}
                    >
                        {__("here.", "essential-blocks")}
                    </ExternalLink>
                </p>
            </div>
        );
    } else if (instagramToken.length > 0 && responseCode === 200) {
        if (loading && thumbs.length === 0) {
            container = (
                <p>
                    <Spinner />
                    {__("Loading feed", "essential-blocks")}
                </p>
            );
        } else {
            container = (
                <>
                    {thumbs &&
                        thumbs.slice(0, numberOfImages).map((photo, index) => {
                            return (
                                <div
                                    className="instagram__gallery__col"
                                    key={index}
                                >
                                    <div
                                        className={`instagram__gallery__item instagram__gallery__item--${layoutClass}${equalImage}`}
                                    >
                                        {layout === "card" && (
                                            <>
                                                {(showProfileName ||
                                                    showProfileImg) && (
                                                        <div className="author__info">
                                                            {showProfileImg &&
                                                                profileImg && (
                                                                    <div className="author__thumb">
                                                                        <img
                                                                            src={
                                                                                profileImg
                                                                            }
                                                                            alt={
                                                                                photo.username
                                                                            }
                                                                        />
                                                                    </div>
                                                                )}
                                                            {showProfileName && (
                                                                <h5 className="author__name">
                                                                    {profileName
                                                                        ? profileName
                                                                        : photo.username}
                                                                </h5>
                                                            )}
                                                        </div>
                                                    )}
                                            </>
                                        )}
                                        <div className="instagram__gallery__thumb">
                                            <div className="thumb__wrap">
                                                <img
                                                    src={
                                                        photo.media_type ===
                                                            "VIDEO"
                                                            ? photo.thumbnail_url
                                                            : photo.media_url
                                                    }
                                                    alt={
                                                        photo.caption
                                                            ? photo.caption
                                                            : ""
                                                    }
                                                />
                                            </div>
                                            {showCaptions && photo.caption && (
                                                <div className="eb-instagram-caption">
                                                    <p>{photo.caption}</p>
                                                </div>
                                            )}
                                        </div>
                                        {showMeta && (
                                            <div className="eb-instagram-meta">
                                                <span className="dashicons dashicons-clock"></span>
                                                <span className="eb-instagram-date">
                                                    {dateFormat(
                                                        photo.timestamp
                                                    )}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                </>
            );
        }
    } else if (undefined == responseCode || responseCode !== 200) {
        container = (
            <div>
                <i>
                    <strong>{errorMessage}</strong>
                </i>
            </div>
        );
    }

    // let isNotLoading = instagramToken.length == 0 && !loading

    return cover.length ? (
        <div>
            <img src={cover} alt="instagram feed" style={{ maxWidth: "100%" }} />
        </div>
    ) : (
        <>
            {isSelected && (
                <Inspector
                    key="inspector"
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}
            {layout === "card" && showProfileImg && (
                <BlockControls>
                    <>
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={(media) =>
                                    setAttributes({
                                        profileImg: media.url,
                                        imageID: media.id,
                                    })
                                }
                                allowedTypes={["image"]}
                                value={imageID}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__(
                                            "Edit Profile Image",
                                            "essential-blocks"
                                        )}
                                        icon="edit"
                                        onClick={open}
                                    />
                                )}
                            />
                        </ToolbarGroup>
                    </>
                </BlockControls>
            )}
            <div {...blockProps}>
                <Style {...props} />

                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div className={`eb-instagram-wrapper ${blockId}`}>
                        <div
                            className={`eb-instagram__gallery${loading ? " hide" : ""
                                }`}
                        >
                            {container}
                        </div>
                        {loading ? (
                            <>
                                <p>
                                    <Spinner />
                                    {__("Loading feed", "essential-blocks")}
                                </p>
                            </>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
export default edit;
