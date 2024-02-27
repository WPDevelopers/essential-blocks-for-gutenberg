import { useBlockProps } from "@wordpress/block-editor";
const { EBDisplayIcon } = window.EBControls;
const Save = ({ attributes }) => {
    const { blockId, icon, iconView, iconShape, classHook } = attributes;
    const viewClass = iconView !== "default" ? " eb-icon-view-" + iconView : "";
    const shapeClass =
        iconView !== "default" ? " eb-icon-shape-" + iconShape : "";

    return (
        <div {...useBlockProps.save()}>
            <div
                className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
            >
                <div
                    className={`eb-icon-wrapper ${blockId}${` eb-icon-view-${iconView}`}${shapeClass}`}
                    data-id={blockId}
                >
                    <div className="eb-icon-container">
                        <EBDisplayIcon icon={icon} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;
