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

import { WPFormsIcon } from "./icon";

const {
    softMinifyCssStrings,
    duplicateBlockIdFix,
    generateDimensionsControlStyles,
    generateBorderShadowStyles,
    generateTypographyStyles,
    generateResponsiveRangeStyles,
    NoticeComponent
} = EBControls;

import {
    FORM_LISTS,
} from "./constants";

import Style from "./style";

const edit = (props) => {
    const { attributes, setAttributes, className, clientId, isSelected, name } = props;

    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        formActive,
        formId,
        labelColor,
        inputBackgroundColor,
        inputTextColor,
        inputFocusBackgroundColor,
        placeHolderColor,
        btnAlignment,
        btnWidthType,
        btnBackgroundColor,
        btnColor,
        btnBackgroundHoverColor,
        btnHoverColor,
        successBackgroundColor,
        successColor,
        errorColor,
        customCheckboxStyle,
        checkboxColor,
        checkboxBorderColor,
        checkboxCheckedColor,
        formBackgroundColor,
        formAlignment,
        showLabels,
        showPlaceholder,
        showErrorMessage,
        classHook,
        cover
    } = attributes;

    useEffect(() => {
        // this useEffect is for creating an unique id for each block's unique className by a random unique number
        const BLOCK_PREFIX = "eb-wpforms";
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

    const is_wpforms_active =
        EssentialBlocksLocalize?.get_plugins["wpforms-lite/wpforms.php"]?.active ||
        EssentialBlocksLocalize?.get_plugins["wpforms/wpforms.php"]?.active;

    let wrapperClasses = ["eb-wpforms-wrapper"];
    // custom checkbox/radio button styles class
    if (customCheckboxStyle) {
        wrapperClasses.push("eb-wpforms-custom-radio-checkbox");
    }

    const alignment = {
        left: "eb-wpforms-alignment-left",
        center: "eb-wpforms-alignment-center",
        right: "eb-wpforms-alignment-right",
    };

    if (formAlignment in alignment) {
        wrapperClasses.push(alignment[formAlignment]);
    }

    if (!showLabels) {
        wrapperClasses.push("eb-wpforms-hide-labels");
    }

    if (!showPlaceholder) {
        wrapperClasses.push("eb-wpforms-hide-placeholder");
    }

    if (!showErrorMessage) {
        wrapperClasses.push("eb-wpforms-hide-errormessage");
    }

    return cover.length ? (
        <div>
            <img src={cover} alt="wpforms" style={{ maxWidth: "100%" }} />
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
                        {!is_wpforms_active && (
                            <NoticeComponent
                                Icon={WPFormsIcon}
                                title={"WPForms"}
                                description={
                                    <>
                                        <strong>WPForms</strong> is not installed/activated on your
                                        site. Please install and activate{" "}
                                        <a
                                            href={
                                                EssentialBlocksLocalize.eb_admin_url +
                                                `plugin-install.php?s=wpforms&tab=search&type=term`
                                            }
                                            target="_blank"
                                        >
                                            WPForms
                                        </a>{" "}
                                        first.
                                    </>
                                }
                            />
                        )}
                        {is_wpforms_active && !formId && (
                            <Placeholder
                                className={"eb-wpforms-choose-placeholder"}
                                label={__("WPForms", "essential-blocks")}
                            >
                                <SelectControl
                                    value={formId}
                                    options={FORM_LISTS}
                                    onChange={(newFormId) => setAttributes({ formId: newFormId })}
                                />
                            </Placeholder>
                        )}
                        {is_wpforms_active && formId && (
                            <ServerSideRender
                                className="eb-wpforms-rendered"
                                block="wpforms/form-selector"
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
