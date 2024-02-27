/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	RangeControl,
	BaseControl,
	TabPanel,
	PanelRow,
} from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import { select, dispatch } from "@wordpress/data";

/**
 * Internal dependencies
 */

import objAttributes from "./attributes";

const {
	ResponsiveDimensionsControl,
	WithResBtns,
	BorderShadowControl,
	BackgroundControl,
	ResponsiveSelectController,
	AdvancedControls,
	ResponsiveRangeController,
} = window.EBControls;

import { COLUMNS_ALIGN, ROW_OVERFLOWS } from "./constants";

import {
	wrapperWidth,
	columnOrderPrefix,
} from "./constants/rangeNames";

import {
	cWrapMarginConst,
	cWrapPaddingConst,
} from "./constants/dimensionsNames";

import { WrpBgConst } from "./constants/backgroundsConstants";
import { WrpBdShadowConst } from "./constants/borderShadowConstants";
import { rowOverflowPrefix } from "./constants/selectControlPrefixs";

function Inspector(props) {
	const {
		attributes,
		setAttributes,
		clientId,
		initColWidth,
		initNextColWidth,
		initPrevColWidth,
		nextBlockClientId,
		prevBlockClientId,
		setInitColWidth,
		setInitNextColWidth,
		setInitPrevColWidth,
	} = props;
	const {
		// responsive control attributes ⬇
		resOption,

		//
		blockId,

		//
		[`${wrapperWidth}Range`]: desktopRange,
		[`TAB${wrapperWidth}Range`]: TABrange,
		[`MOB${wrapperWidth}Range`]: MOBrange,

		//
		colAli,

		//
		rowOverFlow,
	} = attributes;

	useEffect(() => {
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

			const widestColClientId = widestCol.clientId;
			const updatedWidth =
				Math.round((widestCol.attributes.cw_Range + 100 - totalWidth) * 100) /
				100;

			if (widestColClientId === clientId) {
				setAttributes({
					cw_Range: updatedWidth,
				});
				setInitColWidth(updatedWidth);
			} else {
				dispatch("core/block-editor").updateBlockAttributes(widestColClientId, {
					cw_Range: updatedWidth,
				});
				if (widestColClientId === nextBlockClientId) {
					setInitNextColWidth(updatedWidth);
				} else if (widestColClientId === prevBlockClientId) {
					setInitPrevColWidth(updatedWidth);
				}
			}
		}
		//

		return () => {
			const InnerBlocksCount = select("core/block-editor").getBlock(clientId)?.innerBlocks.length;
			if (InnerBlocksCount > 0) return false;
		};
	}, []);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
		objAttributes,
	};

	return (
		<InspectorControls key="controls">
			<div className="eb-panel-control">
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{
							name: "general",
							title: "General",
							className: "eb-tab general",
						},
						// {
						// 	name: "styles",
						// 	title: "Style",
						// 	className: "eb-tab styles",
						// },
						{
							name: "advance",
							title: "Advanced",
							className: "eb-tab advance",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody title={__("General", "essential-blocks")}>
										<div
											className={`responsiveRangeControllerWrapper rrcwrap-${blockId}`}
										>
											<>
												{resOption == "Desktop" && (
													<>
														<WithResBtns
															noUnits={true}
															label={__("Column Width (%)")}
															resRequiredProps={resRequiredProps}
															controlName={wrapperWidth}
														>
															<RangeControl
																value={desktopRange}
																onChange={(value) => {
																	const diff = value - initColWidth;
																	const newNextColWidth =
																		initNextColWidth - diff;
																	const newPrevColWidth =
																		initPrevColWidth - diff;

																	if (
																		nextBlockClientId &&
																		(value < attributes.cw_Range ||
																			newNextColWidth > 3)
																	) {
																		dispatch(
																			"core/block-editor"
																		).updateBlockAttributes(nextBlockClientId, {
																			cw_Range: newNextColWidth,
																		});

																		setAttributes({
																			[`${wrapperWidth}Range`]: value,
																		});
																	} else if (
																		!nextBlockClientId &&
																		prevBlockClientId &&
																		(value < attributes.cw_Range ||
																			newPrevColWidth > 3)
																	) {
																		dispatch(
																			"core/block-editor"
																		).updateBlockAttributes(prevBlockClientId, {
																			cw_Range: newPrevColWidth,
																		});

																		setAttributes({
																			[`${wrapperWidth}Range`]: value,
																		});
																	}
																}}
																step={0.1}
																min={1}
																max={100}
															/>
														</WithResBtns>
													</>
												)}
												{resOption == "Tablet" && (
													<WithResBtns
														noUnits={true}
														label={__("Column Width (%)")}
														resRequiredProps={resRequiredProps}
														controlName={wrapperWidth}
													>
														<RangeControl
															value={TABrange}
															onChange={(TABrange) =>
																setAttributes({
																	[`TAB${wrapperWidth}Range`]: TABrange,
																})
															}
															step={0.1}
															min={1}
															max={100}
														/>
													</WithResBtns>
												)}
												{resOption == "Mobile" && (
													<WithResBtns
														noUnits={true}
														label={__("Column Width (%)")}
														resRequiredProps={resRequiredProps}
														controlName={wrapperWidth}
													>
														<RangeControl
															value={MOBrange}
															onChange={(MOBrange) =>
																setAttributes({
																	[`MOB${wrapperWidth}Range`]: MOBrange,
																})
															}
															step={0.1}
															min={1}
															max={100}
														/>
													</WithResBtns>
												)}
											</>
										</div>

										<BaseControl
											label={__("Vertical Align", "essential-blocks")}
										>
											<SelectControl
												// label={__("Design Preset", "essential-blocks")}
												value={colAli}
												options={COLUMNS_ALIGN}
												// onChange={(preset) => setAttributes({ preset })}
												onChange={(colAli) => {
													setAttributes({ colAli });
												}}
											/>
										</BaseControl>

										{/* <BaseControl label={__("Overflow", "essential-blocks")}>
											<SelectControl
												// label={__("Design Preset", "essential-blocks")}
												value={rowOverFlow}
												options={ROW_OVERFLOWS}
												// onChange={(preset) => setAttributes({ preset })}
												onChange={(rowOverFlow) => {
													setAttributes({ rowOverFlow });
												}}
											/>
										</BaseControl> */}

										<ResponsiveRangeController
											noUnits
											baseLabel={__("Column Order", "essential-blocks")}
											controlName={columnOrderPrefix}
											resRequiredProps={resRequiredProps}
											min={0}
											max={6}
											step={1}
										/>
										{/* <PanelRow>{'Please Select "Custom Order" from "Row Block Controls -> Columns Order" to make this work'}  </PanelRow> */}

										<ResponsiveSelectController
											baseLabel={"Overflow"}
											controlName={rowOverflowPrefix}
											resRequiredProps={resRequiredProps}
											options={ROW_OVERFLOWS}
											resOption={resOption}
										/>
									</PanelBody>
								</>
							)}
							{/* {tab.name === "styles" && (
								<>
									<PanelBody title={__("Styles", "essential-blocks")}></PanelBody>
								</>
							)} */}
							{tab.name === "advance" && (
								<>
									<PanelBody
										title={__("Margin & Padding")}
									// initialOpen={true}
									>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={cWrapMarginConst}
											baseLabel="Margin"
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={cWrapPaddingConst}
											baseLabel="Padding"
										/>
									</PanelBody>

									<PanelBody
										title={__("Background ", "essential-blocks")}
										initialOpen={false}
									>
										<BackgroundControl
											controlName={WrpBgConst}
											resRequiredProps={resRequiredProps}
										/>
									</PanelBody>

									<PanelBody title={__("Border & Shadow")} initialOpen={false}>
										<BorderShadowControl
											controlName={WrpBdShadowConst}
											resRequiredProps={resRequiredProps}
										// noShadow
										// noBorder
										/>
									</PanelBody>

									<AdvancedControls attributes={attributes} setAttributes={setAttributes} />
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
}

export default Inspector;
