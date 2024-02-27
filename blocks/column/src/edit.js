/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { useEffect, useRef, useState } from "@wordpress/element";
import { select, useSelect, dispatch } from "@wordpress/data";

/**
 * Internal depenencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import Style from "./style";

//
const {
    duplicateBlockIdFix,
} = window.EBControls;

import {
    wrapperWidth,
    columnOrderPrefix,
} from "./constants/rangeNames";

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        [`${wrapperWidth}Range`]: desktopRange,
        [`TAB${wrapperWidth}Range`]: tabWidthRange,
        [`MOB${wrapperWidth}Range`]: mobileWidthRange,
        [`${columnOrderPrefix}Range`]: columnOrderDesktop,
        [`TAB${columnOrderPrefix}Range`]: columnOrderTab,
        [`MOB${columnOrderPrefix}Range`]: columnOrderMobile,
        colAli,
        rowOverFlow,
        classHook,
    } = attributes;

    //
    const [showWidthTooltip, setShowWidthTooltip] = useState(false);
    const [nextColWDhByUseState, setNextColWDhByUseState] = useState(0);

    const [
        initBlockInsertionPointIndex,
        setInitBlockInsertionPointIndex,
    ] = useState(0);
    const [initColWidth, setInitColWidth] = useState(0);
    const [initNextColWidth, setInitNextColWidth] = useState(0);
    const [initPrevColWidth, setInitPrevColWidth] = useState(0);
    const [nextBlockClientId, setNextBlockClientId] = useState(false);
    const [prevBlockClientId, setPrevBlockClientId] = useState(false);

    //
    const colWrap = useRef(null);
    const draggerRef = useRef(null);

    //
    useEffect(() => {
        const nextColClientId =
            select("core/block-editor").getAdjacentBlockClientId(clientId) || false;

        const nextColumnDesktopWidth = nextColClientId
            ? select("core/block-editor").getBlockAttributes(nextColClientId).cw_Range
            : 0;

        //
        const prevColClientId =
            select("core/block-editor").getPreviousBlockClientId(clientId) || false;

        const prevColumnDesktopWidth = prevColClientId
            ? select("core/block-editor").getBlockAttributes(prevColClientId).cw_Range
            : 0;

        //
        const blockInsertionPoint = select(
            "core/block-editor"
        ).getBlockInsertionPoint(clientId);

        const insertionIndex = blockInsertionPoint.index;

        setNextColWDhByUseState(nextColumnDesktopWidth);
        setInitBlockInsertionPointIndex(insertionIndex);
        setInitColWidth(desktopRange);
        setNextBlockClientId(nextColClientId);
        setPrevBlockClientId(prevColClientId);
        setInitNextColWidth(nextColumnDesktopWidth);
        setInitPrevColWidth(prevColumnDesktopWidth);
    }, [initBlockInsertionPointIndex]);

    const blockInsertionIndex = select(
        "core/block-editor"
    ).getBlockInsertionPoint(clientId).index;

    if (blockInsertionIndex !== initBlockInsertionPointIndex) {
        setInitBlockInsertionPointIndex(blockInsertionIndex);
    }

    const [isColumnOrder_Custom_Desktop, setIsParentColumnOrderDesktop] = useState(false);
    const [isColumnOrder_Custom_Tab, setIsParentColumnOrderTab] = useState(false);
    const [isColumnOrder_Custom_Mobile, setIsParentColumnOrderMobile] = useState(false);

    const [columnGap, setColumnGap] = useState({
        desktop: 0,
        tab: 0,
        mobile: 0,
    });

    const [columnNumber, setColumnNumber] = useState({
        desktop: 1,
        tab: 1,
        mobile: 1,
    });

    //Get Parent Block "Column Order" Settings
    const parentBlocks = select("core/block-editor").getBlockParents(clientId);
    const parentBlockData = useSelect((select) => select("core/block-editor").getBlock(parentBlocks[parentBlocks.length - 1]));

    useEffect(() => {
        if (!parentBlockData || !parentBlockData.attributes) {
            return false;
        }
        const {
            colOrder_Option,
            TABcolOrder_Option,
            MOBcolOrder_Option,
            clGp_Range,
            TABclGp_Range,
            MOBclGp_Range,
            clNum_Range,
            TABclNum_Range,
            MOBclNum_Range,
        } = parentBlockData.attributes;

        setIsParentColumnOrderDesktop(colOrder_Option === 'custom' ? true : false);
        setIsParentColumnOrderTab(TABcolOrder_Option === 'custom' ? true : false);
        setIsParentColumnOrderMobile(MOBcolOrder_Option === 'custom' ? true : false);

        //Get Parent Block "Column Gap" Settings
        setColumnGap({
            desktop: clGp_Range,
            tab: TABclGp_Range,
            mobile: MOBclGp_Range,
        });

        //Get Parent Block "Column Number" Settings
        setColumnNumber({
            desktop: clNum_Range,
            tab: TABclNum_Range || 2,
            mobile: MOBclNum_Range || 1,
        });
    }, [parentBlockData]);

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = "eb-column";
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
            `eb-guten-block-main-parent-wrapper eb-column-editor-wrap eb-column-editor-wrap-${blockId}`
        ),
    });

    //
    useEffect(() => {
        const elColWrap = colWrap.current;
        const elDragger = draggerRef.current;
        if (elDragger && elColWrap) {
            let colWidthInPx = 0;
            let pcent_px_ratio = 0;

            elDragger.addEventListener("mousedown", handleMouseDown);

            function handleMouseDown(e) {
                //
                const nearestRow = select("core/block-editor").getBlock(
                    select("core/block-editor").getBlockParents(clientId).slice(-1)[0]
                );

                const allSiblingsCol = nearestRow.innerBlocks;

                const totalWidth = allSiblingsCol.reduce(
                    (total, curr) => {
                        return {
                            attributes: {
                                cw_Range: total.attributes.cw_Range + curr.attributes.cw_Range,
                            },
                        };
                    },
                    { attributes: { cw_Range: 0 } }
                ).attributes.cw_Range;

                let nextColumnDesktopWidth = nextBlockClientId
                    ? select("core/block-editor").getBlockAttributes(nextBlockClientId)
                        .cw_Range
                    : 0;

                let desktopColW = desktopRange;
                let widestColClientId = "";

                if (totalWidth !== 100) {
                    const widestCol = {
                        ...allSiblingsCol.reduce(
                            (total, curr) => {
                                if (total.attributes.cw_Range < curr.attributes.cw_Range) {
                                    return curr;
                                } else {
                                    return total;
                                }
                            },
                            { attributes: { cw_Range: 0 } }
                        ),
                    };

                    widestColClientId = widestCol.clientId;

                    const updatedWidth = widestCol.attributes.cw_Range + 100 - totalWidth;

                    if (widestColClientId === clientId) {
                        setAttributes({ cw_Range: updatedWidth });
                        setInitColWidth(updatedWidth);
                        desktopColW = updatedWidth;
                    } else {
                        dispatch("core/block-editor").updateBlockAttributes(
                            widestColClientId,
                            {
                                cw_Range: updatedWidth,
                            }
                        );
                        if (widestColClientId === nextBlockClientId) {
                            nextColumnDesktopWidth = updatedWidth;
                            setInitNextColWidth(updatedWidth);
                        } else if (widestColClientId === prevBlockClientId) {
                            setInitPrevColWidth(updatedWidth);
                        }
                    }
                }

                setShowWidthTooltip(true);

                if (select("core/block-editor").getSelectedBlockCount() > 1)
                    return false;

                setNextColWDhByUseState(nextColumnDesktopWidth);

                const allDimensions = elColWrap.parentElement.getBoundingClientRect();
                colWidthInPx = allDimensions.width;
                pcent_px_ratio = desktopRange / colWidthInPx;

                if (eb_conditional_localize && eb_conditional_localize.editor_type === "edit-site") {
                    let iframe = document.querySelector('iframe.edit-site-visual-editor__editor-canvas');
                    let iframeDocument = iframe.contentWindow.document.body;
                    iframeDocument.addEventListener("mousemove", handleMouseMove);
                    iframeDocument.addEventListener("mouseup", handleMouseUp);
                }
                else {
                    window.addEventListener("mousemove", handleMouseMove);
                    window.addEventListener("mouseup", handleMouseUp);
                }

                let prevX = e.clientX;
                let newX = 0;
                let finalThisBlockWidth = 0;
                let finalNextBlockWidth = 0;

                function handleMouseUp(e) {
                    setShowWidthTooltip(false);

                    if (eb_conditional_localize && eb_conditional_localize.editor_type === "edit-site") {
                        let iframe = document.querySelector('iframe.edit-site-visual-editor__editor-canvas');
                        let iframeDocument = iframe.contentWindow.document.body;
                        iframeDocument.removeEventListener("mousemove", handleMouseMove);
                        iframeDocument.removeEventListener("mouseup", handleMouseUp);
                    }
                    else {
                        window.removeEventListener("mousemove", handleMouseMove);
                        window.removeEventListener("mouseup", handleMouseUp);
                    }
                }

                function handleMouseMove(e) {

                    newX = prevX - e.clientX;

                    const roundedX100ThisWitdh = Math.round(
                        (desktopColW - newX * pcent_px_ratio) * 100
                    );
                    const roundedX100NextWitdh = Math.round(
                        (nextColumnDesktopWidth + newX * pcent_px_ratio) * 100
                    );

                    let thisBlockWidth = roundedX100ThisWitdh / 100;
                    let diffForRounding = 0;

                    if (roundedX100ThisWitdh % 500 > 460) {
                        const newWidth = Math.ceil(thisBlockWidth);
                        diffForRounding = newWidth - thisBlockWidth;
                        thisBlockWidth = newWidth;
                    } else if (roundedX100ThisWitdh % 500 < 70) {
                        const newWidth = Math.floor(thisBlockWidth);
                        diffForRounding = newWidth - thisBlockWidth;
                        thisBlockWidth = newWidth;
                    }

                    // const newDIffForRounding = Math.round(diffForRounding * 100) / 100;
                    // const newDIffRounded = Math.round(diffForRounding * 100);

                    const nextBlockWidth =
                        (roundedX100NextWitdh - Math.round(diffForRounding * 100)) / 100;

                    if (nextBlockWidth < 4 || thisBlockWidth < 4) {
                        return false;
                    }

                    finalThisBlockWidth = thisBlockWidth;
                    finalNextBlockWidth = nextBlockWidth;

                    dispatch("core/block-editor").updateBlockAttributes(
                        nextBlockClientId,
                        {
                            cw_Range: finalNextBlockWidth,
                        }
                    );

                    setNextColWDhByUseState(finalNextBlockWidth);

                    setAttributes({
                        cw_Range: finalThisBlockWidth,
                    });
                }
            }

            return () => {
                elDragger.removeEventListener("mousedown", handleMouseDown);
            };
        }
    }, [
        draggerRef,
        desktopRange,
        colWrap,
        nextBlockClientId,
        prevBlockClientId,
        showWidthTooltip,
    ]);

    return (
        <>
            {isSelected && (
                <Inspector
                    {...props}
                    colWrap={colWrap}
                    initColWidth={initColWidth}
                    initNextColWidth={initNextColWidth}
                    initPrevColWidth={initPrevColWidth}
                    nextBlockClientId={nextBlockClientId}
                    prevBlockClientId={prevBlockClientId}
                    setInitColWidth={setInitColWidth}
                    setInitNextColWidth={setInitNextColWidth}
                    setInitPrevColWidth={setInitPrevColWidth}
                />
            )}

            <div {...blockProps}>
                <Style
                    {...props}
                    isColumnOrder_Custom_Desktop={isColumnOrder_Custom_Desktop}
                    isColumnOrder_Custom_Tab={isColumnOrder_Custom_Tab}
                    isColumnOrder_Custom_Mobile={isColumnOrder_Custom_Mobile}
                    columnGap={columnGap}
                    columnNumber={columnNumber}
                />

                {nextBlockClientId && (
                    <div className="width-dragger-change" ref={draggerRef}>
                        <div className="dragger-inner">
                            {/* <div className="circle"></div> */}

                            {showWidthTooltip ? (
                                // true ? (
                                <div className="cols-width-tooltip">
                                    {/* <span>{Math.round(desktopRange * 100) / 100}</span>/
								<span>{Math.round(nextColWDhByUseState * 100) / 100}</span> */}
                                    <span>{Math.round(desktopRange * 100) / 100}</span>
                                    <span className="dashicons dashicons-leftright"></span>
                                    <span>{Math.round(nextColWDhByUseState * 100) / 100}</span>
                                    {/* <i className="ovl_circle1 ovl_shapes"></i>
								<i className="ovl_circle2 ovl_shapes"></i> */}
                                </div>
                            ) : (
                                <span className="dashicons dashicons-leftright"></span>
                            )}
                        </div>
                    </div>
                )}

                <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                    <div className={`eb-column-wrapper ${blockId}`} ref={colWrap}>
                        <div className="eb-column-inner">
                            <InnerBlocks
                                orientation={
                                    // direction && direction[ 0 ] ? direction[ 0 ] :
                                    "vertical"
                                }
                                templateLock={
                                    // templateLock ? templateLock :
                                    false
                                }
                                renderAppender={
                                    select("core/block-editor").getBlockOrder(clientId).length > 0
                                        ? undefined
                                        : InnerBlocks.ButtonBlockAppender
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
