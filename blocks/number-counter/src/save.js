/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
const { EBDisplayIcon } = window.EBControls;
/**
 * Internal dependencies
 */

const Save = ({ attributes }) => {
    const {
        // blockId attribute for making unique className and other uniqueness ⬇
        blockId,

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
        titleLevel,
        classHook,
    } = attributes;

    return (
        <div {...useBlockProps.save()}>
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
                                <img
                                    className="eb-counter-image"
                                    src={imageUrl}
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
                                className="eb-counter eb-counter-number"
                                data-duration={
                                    duration
                                        ? Math.floor(Math.abs(duration))
                                        : 0
                                }
                                data-startValue={
                                    startValue
                                        ? Math.floor(Math.abs(startValue))
                                        : 0
                                }
                                data-target={
                                    target ? Math.floor(Math.abs(target)) : 0
                                }
                                data-separator={separator}
                                data-isShowSeparator={isShowSeparator}
                            >
                                0
                            </span>
                            <span className="eb-counter-suffix">
                                {counterSuffix}
                            </span>
                        </attributes.counterTitleLevel>

                        <RichText.Content
                            tagName={titleLevel}
                            className="eb-counter-title"
                            value={counterTitle}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;
