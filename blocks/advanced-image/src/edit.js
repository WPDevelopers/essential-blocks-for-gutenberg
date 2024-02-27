/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
    MediaUpload,
    MediaPlaceholder,
    RichText,
    BlockControls,
    useBlockProps,
    BlockAlignmentToolbar,
} from "@wordpress/block-editor";
import {
    ToolbarGroup,
    ToolbarItem,
    ToolbarButton,
} from "@wordpress/components";
import { edit } from "@wordpress/icons";
import { Fragment, useEffect, useRef } from "@wordpress/element";
import { select } from "@wordpress/data";

/**
 * Internal depencencies
 */
import classnames from "classnames";

import Inspector from "./inspector";

const {
    duplicateBlockIdFix,
} = window.EBControls;

import Style from "./style";

export default function Edit(props) {
    const {
        attributes,
        setAttributes,
        className,
        clientId,
        isSelected,
        name
    } = props;
    const {
        resOption,
        blockId,
        blockMeta,
        image,
        imageCaption,
        displayCaption,
        horizontalAlign,
        verticalAlign,
        verticalAlignCap2,
        stylePreset,
        captionStyle,
        hoverEffect,
        classHook,
        imageSize,
        widthRange,
        heightRange,
        fitStyles,
        autoHeight,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = "eb-advanced-image";
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

    // const setimageAlign = (newAlign) => {
    //     switch (newAlign) {
    //         case "left":
    //             setAttributes({ imageAlign: "0" });
    //             break;
    //         case "right":
    //             setAttributes({ imageAlign: "0 0 0 auto" });
    //             break;
    //         default:
    //             setAttributes({ imageAlign: "0 auto" });
    //     }
    // };


    // Get only urls for Lightbox
    let urls = image.url;

    const oldImageData = wp.data.select("core").getMedia(image.id);

    const prevImageSize = useRef(imageSize);
    useEffect(() => {
        if (image.sizes && imageSize && imageSize.length > 0) {
            let newWidth;
            let newHeight;
            if (image.sizes[imageSize]) {
                image.url = image.sizes[imageSize]
                    ? image.sizes[imageSize].url
                    : image.url;

                newWidth = image.sizes[imageSize].width
                    ? image.sizes[imageSize].width
                    : image.width;
                newHeight = image.sizes[imageSize].height
                    ? image.sizes[imageSize].height
                    : image.height;
            } else {
                image.url = image.sizes.full.url;
                newWidth = image.width;
                newHeight = image.height;
            }

            image["url"] = image.url;

            setAttributes({
                image,
                widthRange:
                    prevImageSize.current === imageSize && widthRange
                        ? widthRange
                        : newWidth
                            ? newWidth
                            : "",
                widthUnit:
                    prevImageSize.current === imageSize &&
                        attributes["widthUnit"]
                        ? attributes["widthUnit"]
                        : "px",
                heightRange:
                    prevImageSize.current === imageSize && heightRange
                        ? heightRange
                        : newHeight
                            ? newHeight
                            : "",
                heightUnit:
                    prevImageSize.current === imageSize &&
                        attributes["heightUnit"]
                        ? attributes["heightUnit"]
                        : "px",
            });
        } else {
            let newWidth = "";
            let newHeight = "";
            if (image && !imageSize) {
                newWidth = widthRange
                    ? widthRange
                    : image?.width
                        ? image.width
                        : "";
                newHeight = !autoHeight && image?.height ? image.height : "";
            } else if (oldImageData?.media_details?.sizes) {
                if (oldImageData.media_details.sizes?.[imageSize]) {
                    image.url = oldImageData.media_details.sizes?.[imageSize]
                        ?.source_url
                        ? oldImageData.media_details.sizes?.[imageSize]
                            ?.source_url
                        : oldImageData.source_url;
                } else {
                    image.url = oldImageData.source_url;
                }
                image["url"] = image.url;

                newWidth = oldImageData.media_details.sizes?.[imageSize]?.width
                    ? oldImageData.media_details.sizes?.[imageSize]?.width
                    : oldImageData.width;
                newHeight = oldImageData.media_details.sizes?.[imageSize]
                    ?.height
                    ? oldImageData.media_details.sizes?.[imageSize]?.height
                    : oldImageData.height;
            }
            setAttributes({
                image,
                widthRange: newWidth ? newWidth : "",
                // widthUnit: "px",
                widthUnit: attributes["widthUnit"]
                    ? attributes["widthUnit"]
                    : "px",
                heightRange: newHeight ? newHeight : "",
                // heightUnit: "px",
                heightUnit: attributes["heightUnit"]
                    ? attributes["heightUnit"]
                    : "px",
            });
        }

        prevImageSize.current = imageSize;
    }, [imageSize]);

    return (
        <>
            {isSelected && urls && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}
            {/* <BlockControls>
                <BlockAlignmentToolbar
                    value={imageAlign}
                    onChange={(newAlign) => setimageAlign(newAlign)}
                    controls={["left", "center", "right"]}
                />
            </BlockControls> */}
            <Fragment>
                {image.url === "" && (
                    <MediaPlaceholder
                        onSelect={(image) => {
                            setAttributes({
                                image,
                                imageCaption: image.caption,
                            });
                        }}
                        accept="image/*"
                        allowedTypes={["image"]}
                        // multiple
                        labels={{
                            title: "Upload Image",
                            instructions:
                                "Drag media file, upload or select image from your library.",
                        }}
                    />
                )}
            </Fragment>
            <div {...blockProps}>
                <Style {...props} />
                {urls && (
                    <Fragment>
                        <BlockControls>
                            <ToolbarGroup>
                                <ToolbarItem>
                                    {() => (
                                        <MediaUpload
                                            value={image.id}
                                            onSelect={(media) => {
                                                setAttributes({
                                                    image: {
                                                        id: media.id,
                                                        url: media.url,
                                                        alt: media.alt,
                                                    },
                                                });
                                            }}
                                            accept="image/*"
                                            allowedTypes={["image"]}
                                            render={({ open }) => (
                                                <ToolbarButton
                                                    className="components-toolbar__control"
                                                    label={__(
                                                        "Replace Image",
                                                        "essential-blocks"
                                                    )}
                                                    icon={edit}
                                                    onClick={open}
                                                />
                                            )}
                                        />
                                    )}
                                </ToolbarItem>
                            </ToolbarGroup>
                        </BlockControls>

                        <div
                            className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                        >
                            <figure
                                className={`eb-advanced-image-wrapper ${blockId} img-style-${stylePreset} ${captionStyle} caption-horizontal-${horizontalAlign} caption-vertical-${verticalAlign} ${verticalAlignCap2} ${hoverEffect}`}
                                data-id={blockId}
                            >
                                <div className="image-wrapper">
                                    <img src={urls} alt={image.alt} />

                                    {(!RichText.isEmpty(imageCaption) ||
                                        isSelected) &&
                                        displayCaption &&
                                        captionStyle != "caption-style-2" && (
                                            <RichText
                                                // ref={captionRef}
                                                tagName="figcaption"
                                                aria-label={__(
                                                    "Image Caption Text"
                                                )}
                                                placeholder={__("Add Caption")}
                                                value={imageCaption}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        imageCaption: value,
                                                    })
                                                }
                                                inlineToolbar
                                                __unstableOnSplitAtEnd={() =>
                                                    insertBlocksAfter(
                                                        createBlock(
                                                            "core/paragraph"
                                                        )
                                                    )
                                                }
                                            />
                                        )}
                                </div>

                                {(!RichText.isEmpty(imageCaption) ||
                                    isSelected) &&
                                    displayCaption &&
                                    captionStyle == "caption-style-2" && (
                                        <RichText
                                            // ref={captionRef}
                                            tagName="figcaption"
                                            aria-label={__(
                                                "Image Caption Text"
                                            )}
                                            placeholder={__("Add Caption")}
                                            value={imageCaption}
                                            onChange={(value) =>
                                                setAttributes({
                                                    imageCaption: value,
                                                })
                                            }
                                            inlineToolbar
                                            __unstableOnSplitAtEnd={() =>
                                                insertBlocksAfter(
                                                    createBlock(
                                                        "core/paragraph"
                                                    )
                                                )
                                            }
                                        />
                                    )}
                            </figure>
                        </div>
                    </Fragment>
                )}
            </div>
        </>
    );
}
