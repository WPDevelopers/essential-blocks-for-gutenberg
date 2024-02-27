/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import { useRef } from "@wordpress/element";
import { useEffect } from "@wordpress/element";
import { select } from "@wordpress/data";

import classnames from "classnames";
import Inspector from "./inspector";
import Style from "./style";

const { duplicateBlockIdFix, EBDisplayIcon, getIconClass } = window.EBControls;

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, clientId } = props;
    const {
        resOption,
        blockId,
        blockMeta,
        title,
        titleColor,
        clickable,
        iconColor,
        accordionColor,
        parentBlockId,
        inheritedTagName,
        inheritedDisplayIcon,
        inheritedTabIcon,
        inheritedExpandedIcon,
    } = attributes;

    // this useEffect is for creating a unique blockId for each block's unique className
    useEffect(() => {
        const BLOCK_PREFIX = "eb-accordion-item";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(
            className,
            `eb-guten-block-main-parent-wrapper eb-accordion-item`
        ),
    });

    const accordionTitle = useRef(null);
    const handleSlidingOfAccordion = () => {
        let contentWrapper = accordionTitle.current.nextElementSibling;
        let tabIcon = accordionTitle.current.getAttribute("data-tab-icon");
        let expandedIcon = accordionTitle.current.getAttribute("data-expanded-icon");
        let iconWrapper = accordionTitle.current.children[0].children[0];

        if (contentWrapper.style.display === "block") {
            contentWrapper.style.display = "none";
            iconWrapper.removeAttribute("class");
            tabIcon = getIconClass(tabIcon).split(" ");
            for (let i = 0;i < tabIcon.length;i++) {
                iconWrapper.classList.add(tabIcon[i]);
            }
            iconWrapper.classList.add("eb-accordion-icon");
        } else {
            contentWrapper.style.display = "block";
            contentWrapper.style.opacity = "1";
            iconWrapper.removeAttribute("class");
            expandedIcon = getIconClass(expandedIcon).split(" ");
            for (let i = 0;i < expandedIcon.length;i++) {
                iconWrapper.classList.add(expandedIcon[i]);
            }
            iconWrapper.classList.add("eb-accordion-icon");
        }
    };

    return (
        <>
            {isSelected && <Inspector {...props} />}
            <div {...blockProps}>
                <Style {...props} />

                <div
                    className={`${blockId} eb-accordion-wrapper for_edit_page`}
                    data-clickable={clickable}
                >
                    <div
                        className={`eb-accordion-title-wrapper`}
                        onClick={handleSlidingOfAccordion}
                        ref={accordionTitle}
                        data-tab-icon={inheritedTabIcon}
                        data-expanded-icon={inheritedExpandedIcon}
                    >
                        {inheritedDisplayIcon && (
                            <span className="eb-accordion-icon-wrapper">
                                <EBDisplayIcon icon={inheritedTabIcon} />
                            </span>
                        )}

                        <RichText
                            className="eb-accordion-title"
                            tagName={inheritedTagName}
                            placeholder={__("Add Title", "essential-blocks")}
                            onChange={(value) => setAttributes({ title: value })}
                            value={title}
                        />
                    </div>
                    <div
                        className="eb-accordion-content-wrapper"
                        style={{ display: "none" }}
                    >
                        <div className="eb-accordion-content">
                            <InnerBlocks templateLock={false} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
