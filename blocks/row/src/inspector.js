/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {
	SelectControl,
	PanelBody,
	BaseControl,
	TabPanel,
} from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */

import objAttributes from "./attributes";

import {
	CONTENT_WIDTH_OPTIONS,
	ROW_HEIGHTS,
	ROW_OVERFLOWS,
	COLUMNS_ALIGN,
	COLUMNS_ORDER,
	// JUSTIFY_CONTENTS,
} from "./constants";

//
const {
	ResponsiveDimensionsControl,
	ResponsiveRangeController,
	// TypographyDropdown,
	BorderShadowControl,
	// ColorControl,
	BackgroundControl,
	// ResetControl,
	ResponsiveSelectController,
	AdvancedControls,
} = window.EBControls;

import {
	rWrapMarginConst,
	rWrapPaddingConst,
} from "./constants/dimensionsNames";

import {
	rMinHConst,
	rMaxWConst,
	rColsGapConst,
	rColsNumber,
	// boxsSpaceConst,
	// separatorPosTop,
	// separatorPosRight,
} from "./constants/rangeNames";

import { WrpBgConst } from "./constants/backgroundsConstants";
import { WrpBdShadowConst } from "./constants/borderShadowConstants";
import { rowOverflowPrefix, columnsOrderPrefix } from "./constants/selectControlPrefixs";

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		// responsive control attributes ⬇
		resOption,
		//
		isLayoutSelected,
		rowWidthName,
		rowHeightName,
		rowOverFlow,
		// rowCusWidth,
		// colGap,
		rowAli,
	} = attributes;

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
		objAttributes,
	};

	return (
		<InspectorControls key="controls">
			{isLayoutSelected && (
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
									<div key={tab.name}>
										<PanelBody title={__("Row settings", "essential-blocks")}>
											<BaseControl label={__("Layout", "essential-blocks")}>
												<SelectControl
													// label={__("Design Preset", "essential-blocks")}
													value={rowWidthName}
													options={CONTENT_WIDTH_OPTIONS}
													onChange={(rowWidthName) =>
														setAttributes({ rowWidthName })
													}
												/>
											</BaseControl>
											{rowWidthName === "boxed" && (
												<ResponsiveRangeController
													noUnits
													baseLabel={__("Max Width (px)", "essential-blocks")}
													controlName={rMaxWConst}
													resRequiredProps={resRequiredProps}
													min={0}
													max={1800}
													step={1}
												/>
											)}

											<ResponsiveRangeController
												noUnits
												baseLabel={__("Columns Number", "essential-blocks")}
												controlName={rColsNumber}
												resRequiredProps={resRequiredProps}
												min={1}
												max={6}
												step={1}
											/>

											<ResponsiveRangeController
												noUnits
												baseLabel={__("Columns Gap", "essential-blocks")}
												controlName={rColsGapConst}
												resRequiredProps={resRequiredProps}
												min={0}
												max={100}
												step={1}
											/>

											<BaseControl label={__("Height", "essential-blocks")}>
												<SelectControl
													// label={__("Design Preset", "essential-blocks")}
													value={rowHeightName}
													options={ROW_HEIGHTS}
													onChange={(rowHeightName) =>
														setAttributes({ rowHeightName })
													}
												/>
											</BaseControl>
											{rowHeightName === "minH" && (
												<ResponsiveRangeController
													units={[
														{ label: "px", value: "px" },
														{ label: "vh", value: "vh" },
														{ label: "vw", value: "vw" },
													]}
													baseLabel={__("Minimum height", "essential-blocks")}
													controlName={rMinHConst}
													resRequiredProps={resRequiredProps}
													min={0}
													max={1500}
													step={1}
												/>
											)}
											<BaseControl
												label={__("Columns Vertical Align", "essential-blocks")}
											>
												<SelectControl
													// label={__("Design Preset", "essential-blocks")}
													value={rowAli}
													options={COLUMNS_ALIGN}
													// onChange={(preset) => setAttributes({ preset })}
													onChange={(rowAli) => {
														setAttributes({ rowAli });
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

											<ResponsiveSelectController
												baseLabel={"Columns Order"}
												controlName={columnsOrderPrefix}
												resRequiredProps={resRequiredProps}
												options={COLUMNS_ORDER}
												resOption={resOption}
											/>

											<ResponsiveSelectController
												baseLabel={"Overflow"}
												controlName={rowOverflowPrefix}
												resRequiredProps={resRequiredProps}
												options={ROW_OVERFLOWS}
												resOption={resOption}
											/>
										</PanelBody>
									</div>
								)}
								{tab.name === "advance" && (
									<div key={tab.name}>
										<PanelBody
											title={__("Margin & Padding")}
										// initialOpen={true}
										>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={rWrapMarginConst}
												baseLabel="Margin"
												disableLeftRight
											/>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={rWrapPaddingConst}
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

										<PanelBody
											title={__("Border & Shadow")}
											initialOpen={false}
										>
											<BorderShadowControl
												controlName={WrpBdShadowConst}
												resRequiredProps={resRequiredProps}
											// noShadow
											// noBorder
											/>
										</PanelBody>

										<AdvancedControls attributes={attributes} setAttributes={setAttributes} />
									</div>
								)}
								{/* {tab.name === "styles" && (
								<>
									<PanelBody title={__("Title", "essential-blocks")}></PanelBody>
								</>
							)} */}
							</div>
						)}
					</TabPanel>
				</div>
			)}
		</InspectorControls>
	);
}

export default Inspector;
