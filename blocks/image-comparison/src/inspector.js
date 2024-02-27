/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	BaseControl,
	ToggleControl,
	RangeControl,
	TextControl,
	TabPanel,
	ButtonGroup,
	Button,
} from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */
import objAttributes from "./attributes";

const {
	ImageAvatar,
	ResetControl,
	ColorControl,
	ResponsiveRangeController,
	ResponsiveDimensionsControl,
	TypographyDropdown,
	AdvancedControls,
} = window.EBControls;

import {
	CONTENT_POSITION,
	IMAGE_WIDTH,
	WRAPPER_PADDING,
	WRAPPER_MARGIN,
	LABEL_PADDING,
	HORIZONTAL_LABEL_POSITION,
	VERTICAL_LABEL_POSITION,
} from "./constants";
import { typoPrefix_label } from "./constants/typographyConstants";

const Inspector = ({ attributes, setAttributes, onImageSwap }) => {
	const {
		resOption,
		leftImageURL,
		rightImageURL,
		hover,
		verticalMode,
		showLabels,
		beforeLabel,
		afterLabel,
		fullWidth,
		position,
		swap,
		lineWidth,
		lineColor,
		contentPosition,
		horizontalLabelPosition,
		verticalLabelPosition,
		noHandle,
		labelColor,
		labelBackgroundColor,
	} = attributes;

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
					tabs={[
						{
							name: "general",
							title: __("General", "essential-blocks"),
							className: "eb-tab general",
						},
						{
							name: "styles",
							title: __("Style", "essential-blocks"),
							className: "eb-tab styles",
						},
						{
							name: 'advance',
							title: __("Advanced", "essential-blocks"),
							className: 'eb-tab advance',
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls " + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody
										title={__("General Settings", "essential-blocks")}
										initialOpen={true}
									>
										<>
											{leftImageURL && (
												<BaseControl
													label={__("Left Image", "essential-blocks")}
												>
													<ImageAvatar
														imageUrl={leftImageURL}
														onDeleteImage={() =>
															setAttributes({ leftImageURL: null })
														}
													/>
												</BaseControl>
											)}

											{rightImageURL && (
												<BaseControl
													label={__("Right Image", "essential-blocks")}
												>
													<ImageAvatar
														imageUrl={rightImageURL}
														onDeleteImage={() =>
															setAttributes({ rightImageURL: null })
														}
													/>
												</BaseControl>
											)}
										</>
										<BaseControl
											label={__("Alignment", "essential-blocks")}
											id="eb-button-group-alignment"
										>
											<ButtonGroup id="eb-button-group-alignment">
												{CONTENT_POSITION.map((item, index) => (
													<Button
														key={index}
														isPrimary={contentPosition === item.value}
														isSecondary={contentPosition !== item.value}
														onClick={() =>
															setAttributes({
																contentPosition: item.value,
															})
														}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>
										<ToggleControl
											label={__("Full Width", "essential-blocks")}
											checked={fullWidth}
											onChange={() => setAttributes({ fullWidth: !fullWidth })}
										/>
										{!fullWidth && (
											<>
												<ResponsiveRangeController
													baseLabel={__("Image Width", "essential-blocks")}
													controlName={IMAGE_WIDTH}
													resRequiredProps={resRequiredProps}
													min={0}
													max={1000}
													step={1}
													noUnits
												/>
											</>
										)}
										<ToggleControl
											label={__("Move on Hover", "essential-blocks")}
											checked={hover}
											onChange={() => setAttributes({ hover: !hover })}
										/>
										<ToggleControl
											label={__("Vertical Mode", "essential-blocks")}
											checked={verticalMode}
											onChange={() =>
												setAttributes({ verticalMode: !verticalMode })
											}
										/>
										<ToggleControl
											label={__("Show Labels", "essential-blocks")}
											checked={showLabels}
											onChange={() =>
												setAttributes({ showLabels: !showLabels })
											}
										/>
										{showLabels && (
											<>
												<TextControl
													label={__("Before Label", "essential-blocks")}
													value={beforeLabel}
													onChange={(beforeLabel) =>
														setAttributes({ beforeLabel })
													}
												/>
												<TextControl
													label={__("After Label", "essential-blocks")}
													value={afterLabel}
													onChange={(afterLabel) =>
														setAttributes({ afterLabel })
													}
												/>
												{verticalMode && (
													<BaseControl
														label={__("Label Position", "essential-blocks")}
													>
														<ButtonGroup>
															{VERTICAL_LABEL_POSITION.map((item, index) => (
																<Button
																	key={index}
																	isPrimary={
																		verticalLabelPosition === item.value
																	}
																	isSecondary={
																		verticalLabelPosition !== item.value
																	}
																	onClick={() =>
																		setAttributes({
																			verticalLabelPosition: item.value,
																		})
																	}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
													</BaseControl>
												)}
												{!verticalMode && (
													<BaseControl
														label={__("Label Position", "essential-blocks")}
													>
														<ButtonGroup>
															{HORIZONTAL_LABEL_POSITION.map((item, index) => (
																<Button
																	key={index}
																	isPrimary={
																		horizontalLabelPosition === item.value
																	}
																	isSecondary={
																		horizontalLabelPosition !== item.value
																	}
																	onClick={() =>
																		setAttributes({
																			horizontalLabelPosition: item.value,
																		})
																	}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
													</BaseControl>
												)}
											</>
										)}
										<ToggleControl
											label={__("Swap Images", "essential-blocks")}
											checked={swap}
											onChange={() => onImageSwap()}
										/>
										<ToggleControl
											label={__("No Handle", "essential-blocks")}
											checked={noHandle}
											onChange={() => setAttributes({ noHandle: !noHandle })}
										/>
										<ResetControl
											onReset={() =>
												setAttributes({
													position: objAttributes.position.default,
												})
											}
										>
											<RangeControl
												label={__("Slider Position", "essential-blocks")}
												value={position}
												onChange={(position) => setAttributes({ position })}
												min={0}
												max={100}
												help={__(
													"Update & reload to see effect in backend",
													"image-comparison"
												)}
											/>
										</ResetControl>
										<ResetControl
											onReset={() =>
												setAttributes({
													lineWidth: objAttributes.lineWidth.default,
												})
											}
										>
											<RangeControl
												label={__("Slider Line Width", "essential-blocks")}
												value={lineWidth}
												onChange={(lineWidth) => setAttributes({ lineWidth })}
												min={0}
												max={10}
											/>
										</ResetControl>
									</PanelBody>
								</>
							)}
							{tab.name === "styles" && (
								<>
									<PanelBody>
										<ColorControl
											label={__("Line Color", "essential-blocks")}
											color={lineColor}
											onChange={(lineColor) => setAttributes({ lineColor })}
										/>
									</PanelBody>
									{showLabels && (
										<PanelBody title={__("Labels", "essential-blocks")}>
											<TypographyDropdown
												baseLabel={__("Typography", "essential-blocks")}
												typographyPrefixConstant={typoPrefix_label}
												resRequiredProps={resRequiredProps}
											/>
											<ColorControl
												label={__("Color", "essential-blocks")}
												color={labelColor}
												onChange={(labelColor) => setAttributes({ labelColor })}
											/>
											<ColorControl
												label={__("Background Color", "essential-blocks")}
												color={labelBackgroundColor}
												onChange={(labelBackgroundColor) =>
													setAttributes({ labelBackgroundColor })
												}
											/>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={LABEL_PADDING}
												baseLabel={__("Padding", "essential-blocks")}
											/>
										</PanelBody>
									)}
								</>
							)}
							{tab.name === "advance" && (
								<>
									<PanelBody>

										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={WRAPPER_MARGIN}
											baseLabel={__("Margin", "essential-blocks")}
											disableLeftRight={true}
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={WRAPPER_PADDING}
											baseLabel={__("Padding", "essential-blocks")}
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
};

export default Inspector;
