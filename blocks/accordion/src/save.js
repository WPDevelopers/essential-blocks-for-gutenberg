/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
    const {
        blockId,
        classHook,
        accordionType,
        displayIcon,
        tabIcon,
        expandedIcon,
        transitionDuration
    } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                <div
                    className={`eb-accordion-container ${blockId}`}
                    data-accordion-type={accordionType || "toggle"}
                    data-tab-icon={displayIcon ? tabIcon : ""}
                    data-expanded-icon={displayIcon ? expandedIcon : ""}
                    data-transition-duration={transitionDuration ? Number(transitionDuration) * 1000 : 500}
                >
                    <div className="eb-accordion-inner">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;
