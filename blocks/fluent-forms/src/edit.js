import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { Placeholder, SelectControl } from "@wordpress/components";
import { useBlockProps } from "@wordpress/block-editor";
import { select } from "@wordpress/data";
import ServerSideRender from "@wordpress/server-side-render";

/**
 * Internal Import
 */
import classnames from "classnames";

import Inspector from "./inspector";

import { FluentFormIcon } from "./icon";

import Style from "./style";

import {
    FORM_LISTS,
    FORM_FULL_LISTS,
} from "./constants";
const {
    duplicateBlockIdFix,
    NoticeComponent
} = EBControls;

const edit = (props) => {
    const { attributes, setAttributes, className, clientId, isSelected, name } = props;

    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        formId,
        customCheckboxStyle,
        formAlignment,
        showLabels,
        showPlaceholder,
        showErrorMessage,
        classHook,
        cover
    } = attributes;

    const is_fluent_form_active = EssentialBlocksLocalize?.get_plugins['fluentform/fluentform.php']?.active

    useEffect(() => {
        // this useEffect is for creating an unique id for each block's unique className by a random unique number
        const BLOCK_PREFIX = "eb-fluent-form";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });

        // // this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
        // mimmikCssForPreviewBtnClick({
        // 	domObj: document,
        // 	select,
        // });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });

    // get template name for default form
    let template_name =
        FORM_FULL_LISTS &&
        FORM_FULL_LISTS.map((obj) => {
            return {
                attr: obj.attr,
            };
        });

    let wrapperClasses = ["eb-fluent-form-wrapper"];
    // custom checkbox/radio button styles class
    if (customCheckboxStyle) {
        wrapperClasses.push("eb-fluent-custom-radio-checkbox");
    }

    const alignment = {
        left: "eb-fluentform-alignment-left",
        center: "eb-fluentform-alignment-center",
        right: "eb-fluentform-alignment-right",
    };

    if (formAlignment in alignment) {
        wrapperClasses.push(alignment[formAlignment]);
    }

    if (!showLabels) {
        wrapperClasses.push("eb-fluentform-hide-labels");
    }

    if (!showPlaceholder) {
        wrapperClasses.push("eb-fluentform-hide-placeholder");
    }

    if (!showErrorMessage) {
        wrapperClasses.push("eb-fluentform-hide-errormessage");
    }

    if (
        template_name &&
        formId in template_name &&
        template_name[formId].attr === "inline_subscription"
    ) {
        wrapperClasses.push("eb-fluentform-default-subscription");
    }

    return cover.length ? (
        <div>
            <img src={cover} alt="Fluent Forms" style={{ maxWidth: "100%" }} />
        </div>
    ) : (
        <>
            {isSelected && (
                <Inspector
                    key="inspector"
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}
            <div {...blockProps}>
                <Style {...props} />
                <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                    <div className={`${blockId} ${wrapperClasses.join(" ")}`}>
                        {!is_fluent_form_active && (

                            <NoticeComponent
                                Icon={FluentFormIcon}
                                title={"Fluent Forms"}
                                description={
                                    <>
                                        <strong>Fluent Form</strong> is not installed/activated on
                                        your site. Please install and activate{" "}
                                        <a
                                            href={
                                                EssentialBlocksLocalize.eb_admin_url +
                                                `plugin-install.php?s=fluentform&tab=search&type=term`
                                            }
                                            target="_blank"
                                        >
                                            Fluent Form
                                        </a>{" "}
                                        first.
                                    </>
                                }
                            />

                        )}
                        {is_fluent_form_active && !formId && (
                            <Placeholder
                                className={"eb-fluent-form-choose-placeholder"}
                                label={__("Fluent Form", "essential-blocks")}
                            >
                                <SelectControl
                                    value={formId}
                                    options={FORM_LISTS}
                                    onChange={(newFormId) =>
                                        setAttributes({ formId: newFormId })
                                    }
                                />
                            </Placeholder>
                        )}
                        {is_fluent_form_active && formId && (
                            <ServerSideRender
                                className="eb-fluent-form-rendered"
                                block="fluentfom/guten-block"
                                attributes={{ formId: formId }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
export default edit;
