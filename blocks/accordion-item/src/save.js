import { InnerBlocks, RichText } from "@wordpress/block-editor";
const { getIconClass } = window.EBControls;
const save = ({ attributes }) => {
    const {
        title,
        clickable,
        blockId,
        inheritedTagName,
        inheritedDisplayIcon,
        inheritedTabIcon,
    } = attributes;

    return (
        <>
            <div
                className={`${blockId} eb-accordion-wrapper`}
                data-clickable={clickable}
            >
                <div className={`eb-accordion-title-wrapper`} tabIndex={0}>
                    {inheritedDisplayIcon && (
                        <span className="eb-accordion-icon-wrapper">
                            <span
                                className={`${getIconClass(inheritedTabIcon)} eb-accordion-icon`}
                            ></span>
                        </span>
                    )}
                    <RichText.Content
                        className={"eb-accordion-title"}
                        tagName={inheritedTagName}
                        value={title}
                    />
                </div>
                <div className="eb-accordion-content-wrapper">
                    <div className="eb-accordion-content">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        </>
    );
};

export default save;
