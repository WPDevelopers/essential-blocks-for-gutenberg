/**
 * WordPress dependencies
 */
import {
    useBlockProps,
    InnerBlocks,
    store as blockEditorStore,
} from "@wordpress/block-editor";
import {
    createBlock,
    createBlocksFromInnerBlocksTemplate,
    store as blocksStore,
} from "@wordpress/blocks";
import { useEffect, useState, useRef } from "@wordpress/element";
import { select, useSelect, useDispatch } from "@wordpress/data";
import { times, merge } from "lodash";

/**
 * Internal depenencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import Style from "./style";

import {
    rowOverflowPrefix,
    columnsOrderPrefix,
} from "./constants/selectControlPrefixs";

import { rMinHConst, rMaxWConst, rColsNumber } from "./constants/rangeNames";

const {
    duplicateBlockIdFix,
    Icon01z1x100,
    Icon02z2x50,
    Icon03z3x33_33,
    Icon04z4x25,
    Icon05z34y66,
    Icon06z66y34,
    Icon07z25y25y50,
    Icon08z50y25y25,
    Icon09z25y50y25,
    Icon10z5x20,
    Icon11z6x16_66,
    Icon12z16y66y16,
} = window.EBControls;

const getTemplates = (numCols, objs = {}) => {
    const { widthArr = [] } = objs;
    return times(numCols, (n) => {
        return ["essential-blocks/column", { cw_Range: widthArr[n] || 20 }];
    });
};

export default function Edit(props) {
    const {
        attributes,
        setAttributes,
        className,
        clientId,
        isSelected,
    } = props;
    const [colTemplate, setColTemplate] = useState([]);
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        isLayoutSelected,
        rowWidthName,
        rowHeightName,
        rowOverFlow,
        rowAli,
        clGp_Range,
        TABclGp_Range,
        MOBclGp_Range,
        [`${rColsNumber}Range`]: desktopColNumber,
        [`TAB${rColsNumber}Range`]: tabColNumber,
        [`MOB${rColsNumber}Range`]: mobileColNumber,
        [`${columnsOrderPrefix}Option`]: desktopColOrder,
        [`TAB${columnsOrderPrefix}Option`]: tabColOrder,
        [`MOB${columnsOrderPrefix}Option`]: mobileColOrder,
        classHook,
    } = attributes;

    /**
     * Get innerBlocks number when store updated
     */
    const thisBlock = useSelect(
        (select) => select("core/block-editor").getBlocksByClientId(clientId)[0]
    );
    const rowChildInnerBlocks = thisBlock.innerBlocks ? thisBlock.innerBlocks : [];
    const rowChildBlockNumber = thisBlock.innerBlocks ? thisBlock.innerBlocks.length : 0;
    const rowChildBlockRef = useRef(rowChildBlockNumber);
    const changeColNumberByDuplicate = useRef(false);

    const { replaceInnerBlocks } = useDispatch(blockEditorStore);

    //Update rowChildBlockRef ref current when template is selected
    useEffect(() => {
        rowChildBlockRef.current = rowChildBlockNumber;
    }, [colTemplate]);

    /**
     * @function mappedColumnWidths
     * @description set the column width attributes for given inner blocks
     * @param {Array} blocks
     * @param {number} width
     * @returns {Array}
     */
    const mappedColumnWidths = (
        blocks,
        width,
        widthTab,
        widthMobile,
        resize = false
    ) => {
        return blocks.map((block) => {
            return merge({}, block, {
                attributes: {
                    cw_Range:
                        !resize && block.attributes.cw_Range
                            ? block.attributes.cw_Range
                            : parseFloat(`${width}`),
                    TABcw_Range:
                        !resize && block.attributes.TABcw_Range
                            ? block.attributes.TABcw_Range
                            : parseFloat(`${widthTab}`),
                    MOBcw_Range:
                        !resize && block.attributes.MOBcw_Range
                            ? block.attributes.MOBcw_Range
                            : parseFloat(`${widthMobile}`),
                    resOption: resOption,
                },
            });
        });
    };

    /**
     * Add/Remove Columns based on Column Number Range Control
     */
    const tabColNumRef = useRef(tabColNumber);
    const mobileColNumRef = useRef(mobileColNumber);
    useEffect(() => {
        if (
            typeof desktopColNumber != "number" ||
            typeof rowChildBlockNumber != "number" ||
            typeof rowChildBlockRef.current != "number"
        ) {
            return;
        }

        const createBlockNumber = desktopColNumber - rowChildBlockRef.current;
        rowChildBlockRef.current = desktopColNumber;

        let widthPerChild = (100 / desktopColNumber).toFixed(2);
        let widthPerChildTab = (50).toFixed(2);
        let widthPerChildMobile = (100).toFixed(2);

        const getBlock = select("core/block-editor").getBlocksByClientId(
            clientId
        )[0];
        const getBlockInnerBlocks = getBlock && getBlock.innerBlocks ? getBlock.innerBlocks : [];
        let innerBlocks = [...getBlockInnerBlocks];

        // If total rows are more than 6, then remove the extra rows
        if (desktopColNumber > 6) {
            widthPerChild = (100 / 6).toFixed(2);
            innerBlocks = getBlockInnerBlocks.filter((block, index) => {
                if (index <= 5) {
                    return block;
                }
            });
        }

        if (typeof tabColNumber === "number" && tabColNumber <= desktopColNumber) {
            widthPerChildTab = (100 / tabColNumber).toFixed(2);
        }

        if (typeof mobileColNumber === "number" && mobileColNumber <= desktopColNumber) {
            widthPerChildMobile = (100 / mobileColNumber).toFixed(2);
        }

        if (createBlockNumber > 0) {
            let innerBlocksWidthUpdated;
            if (changeColNumberByDuplicate.current) {
                innerBlocksWidthUpdated = [
                    ...mappedColumnWidths(
                        innerBlocks,
                        widthPerChild,
                        widthPerChildTab,
                        widthPerChildMobile,
                        true
                    ),
                ];
                changeColNumberByDuplicate.current = false
            } else {
                innerBlocksWidthUpdated = [
                    ...mappedColumnWidths(
                        innerBlocks,
                        widthPerChild,
                        widthPerChildTab,
                        widthPerChildMobile,
                        true
                    ),
                    ...times(createBlockNumber, () => {
                        return createBlock("essential-blocks/column", {
                            cw_Range: parseFloat(`${widthPerChild}`),
                        });
                    }),
                ];
            }

            replaceInnerBlocks(clientId, innerBlocksWidthUpdated);

        } else if (createBlockNumber < 0) {
            const innerBlocksWidthUpdated = [
                ...mappedColumnWidths(
                    innerBlocks,
                    widthPerChild,
                    widthPerChildTab,
                    widthPerChildMobile,
                    true
                ),
            ];

            const innerBlocksAfterDelete = innerBlocksWidthUpdated.filter(
                (block, index) => {
                    const limit =
                        desktopColNumber - Math.abs(createBlockNumber);
                    if (index <= limit) {
                        return block;
                    }
                }
            );

            replaceInnerBlocks(clientId, innerBlocksAfterDelete);
        } else {
            const resizeBlock = () => {
                if (resOption !== "Desktop") {
                    if (tabColNumber != tabColNumRef.current) {
                        tabColNumRef.current = tabColNumber;
                        return true;
                    } else if (mobileColNumber != mobileColNumRef.current) {
                        mobileColNumRef.current = mobileColNumber;
                        return true;
                    } else {
                        return false;
                    }
                }
                return false;
            };
            // const resizeBlock = false;
            const innerBlocksWidthUpdated = [
                ...mappedColumnWidths(
                    innerBlocks,
                    widthPerChild,
                    widthPerChildTab,
                    widthPerChildMobile,
                    resizeBlock()
                ),
            ];

            replaceInnerBlocks(clientId, innerBlocksWidthUpdated);
        }
    }, [desktopColNumber, tabColNumber, mobileColNumber, resOption]);

    /**
     * Resize Columns when Duplicate/Delete Columns
     */
    useEffect(() => {
        if (typeof rowChildBlockNumber != "number") {
            return;
        }

        if (rowChildBlockNumber != desktopColNumber) {
            rowChildBlockRef.current = desktopColNumber;
            changeColNumberByDuplicate.current = true

            setAttributes({
                [`${rColsNumber}Range`]: rowChildBlockNumber,
            });
        }
    }, [rowChildBlockNumber]);

    //
    const rowWrap = useRef(null);

    /**
     * Create Unique ID for each row
     */
    useEffect(() => {
        // this codes is for creating a unique id for each block's unique className by a random unique number
        const BLOCK_PREFIX = "eb-row";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });

        //
        if (clGp_Range === undefined) {
            setAttributes({
                clGp_Range: 20,
            });
        }

        if (
            (mobileColNumber === undefined || mobileColNumber === 1) &&
            MOBclGp_Range === undefined
        ) {
            setAttributes({
                MOBclGp_Range: 0,
            });
        }

        if (desktopColOrder === undefined) {
            setAttributes({
                [`${columnsOrderPrefix}Option`]: "default",
            });
        }
    }, []);

    //
    useEffect(() => {
        const elRowWrap = rowWrap.current;
        if (elRowWrap) {
            const rowMainRoot = elRowWrap.closest(
                ".wp-block:not(.eb-guten-block-main-parent-wrapper)"
            ) || { classList: { add: () => { } } };
            rowMainRoot.classList.add("marginPaddingNaai");
        }
    }, [rowWrap]);

    //
    useEffect(() => {
        // the following codes (if/else) neede for row/columns blocks' dragger options
        if (resOption == "Desktop") {
            document.body.classList.add("eb-responsive-preview-option-Desktop");
        } else {
            document.body.classList.remove(
                "eb-responsive-preview-option-Desktop"
            );
        }
    }, [resOption]);

    const blockProps = useBlockProps({
        className: classnames(
            className,
            `eb-guten-block-main-parent-wrapper eb-row-editor-wrap eb-row-editor-wrap-${blockId}`
        ),
    });

    //
    const handleLayoutClick = (id) => {
        switch (id) {
            case "01":
                setColTemplate(getTemplates(1, { widthArr: [100] }));
                setAttributes({ [`${rColsNumber}Range`]: 1 });
                break;

            case "02":
                setColTemplate(getTemplates(2, { widthArr: [50, 50] }));
                setAttributes({ [`${rColsNumber}Range`]: 2 });
                break;

            case "03":
                setColTemplate(
                    getTemplates(3, { widthArr: [33.33, 33.33, 33.33] })
                );
                setAttributes({ [`${rColsNumber}Range`]: 3 });
                break;

            case "04":
                setColTemplate(getTemplates(4, { widthArr: [25, 25, 25, 25] }));
                setAttributes({ [`${rColsNumber}Range`]: 4 });
                break;

            case "05":
                setColTemplate(getTemplates(2, { widthArr: [34, 66] }));
                setAttributes({ [`${rColsNumber}Range`]: 2 });
                break;

            case "06":
                setColTemplate(getTemplates(2, { widthArr: [66, 34] }));
                setAttributes({ [`${rColsNumber}Range`]: 2 });
                break;

            case "07":
                setColTemplate(getTemplates(3, { widthArr: [25, 25, 50] }));
                setAttributes({ [`${rColsNumber}Range`]: 3 });
                break;

            case "08":
                setColTemplate(getTemplates(3, { widthArr: [50, 25, 25] }));
                setAttributes({ [`${rColsNumber}Range`]: 3 });
                break;

            case "09":
                setColTemplate(getTemplates(3, { widthArr: [25, 50, 25] }));
                setAttributes({ [`${rColsNumber}Range`]: 3 });
                break;

            case "10":
                setColTemplate(
                    getTemplates(5, { widthArr: [20, 20, 20, 20, 20] })
                );
                setAttributes({ [`${rColsNumber}Range`]: 5 });
                break;

            case "11":
                setColTemplate(
                    getTemplates(6, {
                        widthArr: [
                            16.666,
                            16.666,
                            16.666,
                            16.666,
                            16.666,
                            16.666,
                        ],
                    })
                );
                setAttributes({ [`${rColsNumber}Range`]: 6 });
                break;

            case "12":
                setColTemplate(getTemplates(3, { widthArr: [17, 66, 17] }));
                setAttributes({ [`${rColsNumber}Range`]: 3 });
                break;
        }

        setAttributes({ isLayoutSelected: true });
    };

    return (
        <>
            {isSelected && <Inspector {...props} />}

            <div {...blockProps}>
                <Style {...props} />

                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div
                        className={`eb-row-root-container ${blockId}`}
                        ref={rowWrap}
                    >
                        <div className={`eb-row-wrapper for-editor-page`}>
                            <div className="eb-row-inner">
                                {isLayoutSelected ? (
                                    <>
                                        <InnerBlocks
                                            templateLock={false}
                                            template={
                                                colTemplate || [
                                                    [
                                                        "essential-blocks/column",
                                                        { cw_Range: 20 },
                                                    ],
                                                    [
                                                        "essential-blocks/column",
                                                        { cw_Range: 80 },
                                                    ],
                                                ]
                                            }
                                            orientation="horizontal"
                                            allowedBlocks={[
                                                "essential-blocks/column",
                                            ]}
                                        // renderAppender={
                                        // 	colTemplate
                                        // }
                                        />
                                    </>
                                ) : (
                                    <>
                                        <style>
                                            {`

					.${blockId}.eb-row-root-container .layoutPicker{
						padding: 30px 0px;
						background: #fff;
						border: 1px dashed #ccc;
						border-radius: 10px;
					}

					.${blockId}.eb-row-root-container .layoutPicker h3{
						text-align:center;
						text-transform:uppercase;
						font-size:30px;
						font-size: 18px;
						color: #666;
						font-weight: 500;
					}

					.${blockId}.eb-row-root-container .layoutPicker ul.layouts{
						display:flex;
						justify-content: center;
						flex-wrap:wrap;
						max-width:650px;
						padding:0;
						margin:auto;
					}

					.${blockId}.eb-row-root-container .layoutPicker ul.layouts > li{
						width: 20%;
						padding:5px 10px;
						list-style: none;
						box-sizing: border-box;
						cursor:pointer;
						position:relative;
					}

					.${blockId}.eb-row-root-container .layoutPicker ul.layouts > li > h6{
						font-size: 16px;
						font-family:sans-sarif;
						position: absolute;
						top:90%;
						left: 50px;
						display:none;
						margin: 0 !important;
						padding: 5px 10px !important;
						z-index: 222;
						text-transform: uppercase;
						background-color: #444;
						color: #fff;
					}

					.${blockId}.eb-row-root-container .layoutPicker ul.layouts > li:nth-child(3) > h6{
						left: 25px;
					}

					.${blockId}.eb-row-root-container .layoutPicker ul.layouts > li:nth-child(4) > h6{
						left: 0px;
					}

					.${blockId}.eb-row-root-container .layoutPicker ul.layouts > li:nth-child(7) > h6,
					.${blockId}.eb-row-root-container .layoutPicker ul.layouts > li:nth-child(8) > h6,
					.${blockId}.eb-row-root-container .layoutPicker ul.layouts > li:nth-child(9) > h6,
					.${blockId}.eb-row-root-container .layoutPicker ul.layouts > li:nth-child(12) > h6,
					.${blockId}.eb-row-root-container .layoutPicker ul.layouts > li:nth-child(10) > h6
					{
						left: -25px;
					}

					.${blockId}.eb-row-root-container .layoutPicker ul.layouts > li:nth-child(11) > h6{
						left: -60px;
					}


					.${blockId}.eb-row-root-container .layoutPicker ul.layouts > li .colLayouts__st0{
						fill:#e5ebf3;
					}

					.${blockId}.eb-row-root-container .layoutPicker ul.layouts > li:hover .colLayouts__st0{
						fill:#cdd6e3;
					}


					.${blockId}.eb-row-root-container .layoutPicker ul.layouts > li:hover > h6{
						display:block;
					}

							`}
                                        </style>
                                        <div className="layoutPicker">
                                            <h3>Select Column layout</h3>
                                            <ul className="layouts">
                                                <li
                                                    onClick={() => {
                                                        handleLayoutClick("01");
                                                    }}
                                                >
                                                    <h6>1</h6>
                                                    <Icon01z1x100 />
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        handleLayoutClick("02");
                                                    }}
                                                >
                                                    <h6>1/2 1/2</h6>
                                                    <Icon02z2x50 />
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        handleLayoutClick("03");
                                                    }}
                                                >
                                                    <h6>1/3 1/3 1/3</h6>
                                                    <Icon03z3x33_33 />
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        handleLayoutClick("04");
                                                    }}
                                                >
                                                    <h6>1/4 1/4 1/4 1/4</h6>
                                                    <Icon04z4x25 />
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        handleLayoutClick("05");
                                                    }}
                                                >
                                                    <h6>1/3 2/3</h6>
                                                    <Icon05z34y66 />
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        handleLayoutClick("06");
                                                    }}
                                                >
                                                    <h6>2/3 1/3</h6>
                                                    <Icon06z66y34 />
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        handleLayoutClick("07");
                                                    }}
                                                >
                                                    <h6>1/4 1/4 2/4</h6>
                                                    <Icon07z25y25y50 />
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        handleLayoutClick("08");
                                                    }}
                                                >
                                                    <h6>2/4 1/4 1/4</h6>
                                                    <Icon08z50y25y25 />
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        handleLayoutClick("09");
                                                    }}
                                                >
                                                    <h6>1/4 2/4 1/4</h6>
                                                    <Icon09z25y50y25 />
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        handleLayoutClick("10");
                                                    }}
                                                >
                                                    <h6>1/5 1/5 1/5 1/5 1/5</h6>
                                                    <Icon10z5x20 />
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        handleLayoutClick("11");
                                                    }}
                                                >
                                                    <h6>
                                                        1/6 1/6 1/6 1/6 1/6 1/6
                                                    </h6>
                                                    <Icon11z6x16_66 />
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        handleLayoutClick("12");
                                                    }}
                                                >
                                                    <h6>1/6 4/6 1/6</h6>
                                                    <Icon12z16y66y16 />
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
