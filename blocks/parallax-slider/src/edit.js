/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import {
    MediaUpload,
    MediaPlaceholder,
    BlockControls,
    useBlockProps,
} from "@wordpress/block-editor";
import {
    ToolbarGroup,
    ToolbarItem,
    ToolbarButton,
} from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */
import Slider from "./slider";
import classnames from "classnames";

import Inspector from "./inspector";

import Style from "./style";

const {
    duplicateBlockIdFix,
} = window.EBControls;

function getPreviousImgData(previousData, image) {
    let prevTitle, prevBtnText, prevLink;
    previousData.map((item) => {
        if (item.id === image.id) {
            prevTitle = item.title;
            prevBtnText = item.btnText;
            prevLink = item.link;
        }
    });

    return [prevTitle, prevBtnText, prevLink];
}

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected, name } = props;
    const {
        resOption,
        blockId,
        blockMeta,
        sliderData,
        startIndex,
        classHook,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = "eb-slider";
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

    // Change start index if image is removed from gallery
    useEffect(() => {
        if (startIndex > sliderData.length) {
            setAttributes({ startIndex: sliderData.length });
        }
    }, [startIndex, sliderData]);

    const onImageSelect = (images) => {
        if (!images.length) {
            return null;
        }

        // Store images with slider data
        let sliderData = [];
        let previousData = [...attributes.sliderData];

        images.map((image, index) => {
            let item = {};

            // Get previous image info after updating gallary
            let [prevTitle, prevBtnText, prevLink] = getPreviousImgData(
                previousData,
                image
            );

            item.id = image.id;
            item.src = image.url;
            item.alt = image.alt;
            item.title = prevTitle || `Slider ${index + 1}`;
            item.btnText = prevBtnText || "Button";
            item.link = prevLink || "";
            item.openNewTab = image.openNewTab || true;

            sliderData.push(item);
        });
        setAttributes({ sliderData });
    };

    if (!sliderData.length) {
        // Show placeholder at the beginning
        return (
            <MediaPlaceholder
                labels={{
                    title: __("Images", "essential-blocks"),
                    instructions: __(
                        "Drag images, upload new ones or select files from your library. Upload minimum 3 images for better design."
                    ),
                }}
                onSelect={(images) => onImageSelect(images)}
                accept="image/*"
                allowedTypes={["image"]}
                multiple
            />
        );
    }

    return (
        <>
            {isSelected && (
                <Inspector attributes={attributes} setAttributes={setAttributes} />
            )}
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarItem>
                        {() => (
                            <MediaUpload
                                onSelect={(images) => onImageSelect(images)}
                                allowedTypes={["image"]}
                                multiple
                                gallery
                                value={sliderData.map((img) => img.id)}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__("Edit gallery", "essential-blocks")}
                                        icon="edit"
                                        onClick={open}
                                    />
                                )}
                            />
                        )}
                    </ToolbarItem>
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <Style {...props} />
                <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                    <div className={`eb-parallax-slider-wrapper ${blockId}`}>
                        <Slider
                            slides={sliderData}
                            attributes={attributes}
                            setAttributes={setAttributes}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
