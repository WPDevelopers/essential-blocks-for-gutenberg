/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useBlockProps, RichText, MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */
import classnames from "classnames";

import Inspector from "./inspector";

const {
    duplicateBlockIdFix,
} = window.EBControls;

import Style from "./style";

import QuoteSVG from "./quoteIconSVG";

const Edit = (props) => {
    const { attributes, setAttributes, className, clientId, isSelected, name } = props;
    const {
        resOption,
        blockId,
        blockMeta,
        imageId,
        imageUrl,
        userName,
        companyName,
        description,
        enableQuote,
        classHook,
        layoutPreset,
        showRating,
        rating,
        ratingIndivisual,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = "eb-testimonial";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });

    const replaceString = (str, find, replace) => {
        return str.replace(new RegExp(find, "g"), replace);
    };

    blockProps.className = replaceString(blockProps.className, "eb-testimonial-wrapper", "");
    blockProps.className = replaceString(blockProps.className, blockId, "");

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <div {...blockProps}>
                <Style {...props} />

                <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                    <div className={`eb-testimonial-wrapper ${blockId} ${layoutPreset}`} data-id={blockId}>
                        <div className="eb-testimonial-container">
                            <div className="eb-avatar-container">
                                <div className="image-container">
                                    <div className="eb-avatar-style" />
                                    <MediaUpload
                                        onSelect={(media) =>
                                            setAttributes({
                                                imageUrl: media.url,
                                                imageId: media.id,
                                            })
                                        }
                                        type="image"
                                        value={imageId}
                                        render={({ open }) =>
                                            !imageUrl && (
                                                <Button
                                                    className="eb-testimonial-image components-button"
                                                    label={__("Upload Image", "essential-blocks")}
                                                    icon="format-image"
                                                    onClick={open}
                                                />
                                            )
                                        }
                                    />
                                </div>

                                {layoutPreset !== "layout-preset-3" && (
                                    <div className="eb-userinfo-container">
                                        <RichText
                                            tagName="p"
                                            className="eb-testimonial-username"
                                            value={userName}
                                            onChange={(newName) =>
                                                setAttributes({
                                                    userName: newName,
                                                })
                                            }
                                        />

                                        <RichText
                                            tagName="p"
                                            className="eb-testimonial-company"
                                            value={companyName}
                                            onChange={(newName) =>
                                                setAttributes({
                                                    companyName: newName,
                                                })
                                            }
                                        />

                                        {showRating && !ratingIndivisual && rating != 0 && (
                                            <div className={`eb-testimonial-rating rating-${rating}`}>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="eb-description-container">
                                {enableQuote && (
                                    <div className="eb-testimonial-quote-style">
                                        <QuoteSVG />
                                    </div>
                                )}

                                <RichText
                                    tagName="p"
                                    className="eb-testimonial-description"
                                    value={description}
                                    onChange={(newText) => setAttributes({ description: newText })}
                                />
                                {showRating && ratingIndivisual && rating != 0 && (
                                    <div className={`eb-testimonial-rating rating-${rating}`}>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                )}
                            </div>

                            {layoutPreset == "layout-preset-3" && (
                                <div className="eb-userinfo-container">
                                    <RichText
                                        tagName="p"
                                        className="eb-testimonial-username"
                                        value={userName}
                                        onChange={(newName) => setAttributes({ userName: newName })}
                                    />

                                    <RichText
                                        tagName="p"
                                        className="eb-testimonial-company"
                                        value={companyName}
                                        onChange={(newName) =>
                                            setAttributes({
                                                companyName: newName,
                                            })
                                        }
                                    />

                                    {showRating && !ratingIndivisual && rating != 0 && (
                                        <div className={`eb-testimonial-rating rating-${rating}`}>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
