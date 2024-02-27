import { RichText, useBlockProps } from "@wordpress/block-editor";
const { EBDisplayIcon } = window.EBControls;

const Save = ({ attributes }) => {
    const {
        blockId,
        preset,
        tagName,
        titleText,
        subtitleTagName,
        displaySubtitle,
        subtitleText,
        seperatorType,
        displaySeperator,
        seperatorPosition,
        separatorIcon,
        classHook,
    } = attributes;


    return (
        <div {...useBlockProps.save()}>
            <div
                className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
            >
                <div
                    className={`eb-advance-heading-wrapper ${blockId} ${preset}`}
                    data-id={blockId}
                >
                    {displaySeperator && seperatorPosition === "top" && (
                        <div className={"eb-ah-separator " + seperatorType}>
                            {seperatorType === "icon" && (
                                // <i
                                //     className={`${separatorIcon
                                //         ? separatorIcon
                                //         : "fas fa-arrow-circle-down"
                                //         }`}
                                // ></i>
                                <EBDisplayIcon icon={separatorIcon} />
                            )}
                        </div>
                    )}
                    <RichText.Content
                        tagName={tagName}
                        className="eb-ah-title"
                        value={titleText}
                    />
                    {displaySubtitle && (
                        <RichText.Content
                            tagName={subtitleTagName}
                            className="eb-ah-subtitle"
                            value={subtitleText}
                        />
                    )}
                    {displaySeperator && seperatorPosition === "bottom" && (
                        <div className={"eb-ah-separator " + seperatorType}>
                            {seperatorType === "icon" && (
                                // <i
                                //     className={`${separatorIcon
                                //         ? separatorIcon
                                //         : "fas fa-arrow-circle-down"
                                //         }`}
                                // ></i>
                                <EBDisplayIcon icon={separatorIcon} />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Save;
