/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useRef } from "@wordpress/element";
import { useBlockProps, RichText, MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */
import classnames from "classnames";

import Inspector from "./inspector";

import Style from "./style";

const {
    textInsideForEdit,
    duplicateBlockIdFix,
    EBDisplayIcon
} = window.EBControls;

const Edit = (props) => {
    const {
        isSelected,
        attributes,
        setAttributes,
        className,
        clientId,
        name
    } = props;

    const {
        // responsive control attributes ⬇
        resOption,

        // blockId attribute for making unique className and other uniqueness ⬇
        blockId,

        // blockMeta is for keeping all the styles ⬇
        blockMeta,
        classHook,

        // counter settings attributes ⬇
        target,
        duration,
        counterTitle,
        counterSuffix,
        counterPrefix,
        startValue,
        isShowSeparator,
        separator,

        //
        media,
        selectedIcon,
        imageUrl,
        imageId,
        counterTitleLevel,
        titleLevel,
    } = attributes;

    const counterRef = useRef(null);

    const CounterAnimation = () => {
        const time =
            duration && Math.floor(Math.abs(duration)) > 499
                ? Math.floor(Math.abs(duration)) - 200
                : 300;
        const endTarget = target ? Math.floor(Math.abs(target)) : 0;
        let cleanStartValue =
            startValue && Math.floor(Math.abs(startValue)) < endTarget
                ? Math.floor(Math.abs(startValue))
                : 0;
        const increaseBy = ((endTarget - cleanStartValue) / time) * 53;
        let timeoutIdInside;
        const timeoutId = setTimeout(() => {
            function updateCount() {
                cleanStartValue += increaseBy;
                counterRef.current.innerText = textInsideForEdit(
                    Math.floor(cleanStartValue),
                    isShowSeparator,
                    separator
                );
                if (cleanStartValue < endTarget) {
                    timeoutIdInside = setTimeout(() => {
                        updateCount();
                    }, 53);
                } else {
                    counterRef.current.innerText = textInsideForEdit(
                        endTarget,
                        isShowSeparator,
                        separator
                    );
                }
            }
            updateCount();
        }, 200);
        return () => {
            clearTimeout(timeoutId);
            clearTimeout(timeoutIdInside);
        };
    };

    useEffect(() => CounterAnimation(), [
        target,
        duration,
        startValue,
        separator,
        isShowSeparator,
        counterTitleLevel,
    ]);

    // this useEffect is for creating a unique blockId for each block's unique className
    useEffect(() => {
        const BLOCK_PREFIX = "eb-counter";
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
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}

            <div {...blockProps}>
                <Style {...props} />
                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div className={`${blockId} eb-counter-wrapper`}>
                        {media === "icon" ? (
                            <div className="icon-img-wrapper">
                                <div className="eb-icon ">
                                    <EBDisplayIcon icon={selectedIcon} className={`eb-counter-icon-data-selector`} />
                                </div>
                            </div>
                        ) : null}

                        {media === "image" ? (
                            <div className="icon-img-wrapper">
                                <div className="eb-counter-image-wrapper">
                                    <MediaUpload
                                        onSelect={({ id, url }) =>
                                            setAttributes({
                                                imageUrl: url,
                                                imageId: id,
                                            })
                                        }
                                        type="image"
                                        value={imageId}
                                        render={({ open }) => {
                                            if (!imageUrl) {
                                                return (
                                                    <Button
                                                        className="eb-infobox-img-btn components-button"
                                                        label={__(
                                                            "Upload Image",
                                                            "essential-blocks"
                                                        )}
                                                        icon="format-image"
                                                        onClick={open}
                                                    />
                                                );
                                            } else {
                                                return (
                                                    <img
                                                        className="eb-counter-image"
                                                        src={imageUrl}
                                                    />
                                                );
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        ) : null}

                        <div className="counter-contents-wrapper">
                            <attributes.counterTitleLevel className="eb-counter-number">
                                <span className="eb-counter-prefix">
                                    {counterPrefix}
                                </span>
                                <span
                                    ref={counterRef}
                                    className="eb-counter eb-counter-number"
                                >
                                    0
                                </span>
                                <span className="eb-counter-suffix">
                                    {counterSuffix}
                                </span>
                            </attributes.counterTitleLevel>
                            <RichText
                                tagName={titleLevel}
                                className="eb-counter-title"
                                value={counterTitle}
                                allowedFormats={[
                                    "core/bold",
                                    "core/italic",
                                    "core/link",
                                    "core/strikethrough",
                                    "core/underline",
                                    "core/text-color",
                                ]}
                                onChange={(counterTitle) =>
                                    setAttributes({ counterTitle })
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
