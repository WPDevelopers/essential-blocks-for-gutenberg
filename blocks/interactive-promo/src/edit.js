/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import {
    useBlockProps,
    BlockControls,
    MediaPlaceholder,
    MediaUpload,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarItem, ToolbarButton } from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */
import classnames from "classnames";

import Inspector from "./inspector";

import Style from "./style";

const {
    duplicateBlockIdFix,
} = window.EBControls;

const Edit = (props) => {
    const { isSelected, attributes, setAttributes, className, clientId, name } = props;
    const {
        blockMeta,
        blockId,
        resOption,
        header,
        content,
        effectName,
        imageURL,
        imageID,
        imageAltTag,
        newWindow,
        link,
        classHook,
    } = attributes;

    if (!imageURL) {
        return (
            <MediaPlaceholder
                onSelect={(media) =>
                    setAttributes({
                        imageURL: media.url,
                        imageID: media.id,
                    })
                }
                allowTypes={["image"]}
                labels={{
                    title: "Images",
                    instructions:
                        "Drag media file, upload or select files from your library.",
                }}
            />
        );
    }

    // this useEffect is for creating an unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = "eb-interactive-promo";
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
                                onSelect={(media) =>
                                    setAttributes({
                                        imageURL: media.url,
                                        imageID: media.id,
                                    })
                                }
                                allowedTypes={["image"]}
                                value={imageID}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__("Edit Image", "essential-blocks")}
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
                    <div className={`eb-interactive-promo-wrapper ${blockId}`}>
                        <div
                            className="eb-interactive-promo-container"
                            data-effect={effectName}
                        >
                            <div className="eb-interactive-promo hover-effect">
                                <figure className={`effect-${effectName}`}>
                                    <img src={imageURL} alt={imageAltTag} />
                                    <figcaption>
                                        <h2 className="eb-interactive-promo-header">{header}</h2>
                                        <p className="eb-interactive-promo-content">{content}</p>
                                        {link && (
                                            <a
                                                href={link}
                                                target={newWindow ? "_blank" : "_self"}
                                                rel="noopener noreferrer"
                                            />
                                        )}
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
