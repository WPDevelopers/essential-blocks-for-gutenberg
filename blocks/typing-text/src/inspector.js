/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	Button,
	BaseControl,
	ToggleControl,
	RangeControl,
	TextControl,
	TabPanel,
} from "@wordpress/components";
import { select } from "@wordpress/data";
/**
 * Internal dependencies
 */
import SortableText from "./sortable-text";
import objAttributes from "./attributes";

const {
	ResponsiveDimensionsControl,
	TypographyDropdown,
	ColorControl,
	BorderShadowControl,
	BackgroundControl,
	AdvancedControls,
} = window.EBControls;

import {
	dimensionsMargin,
	dimensionsPadding,
} from "./constants/dimensionsNames";
import {
	typoPrefix_prefixText,
	typoPrefix_suffixText,
	typoPrefix_typedText,
} from "./constants/typographyPrefixConstants";
import { WrpBdShadow } from "./constants/borderShadowConstants";
import { backgroundWrapper } from "./constants/backgroundsConstants";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		// responsive control attributes ⬇
		resOption,
		prefix,
		typedText,
		suffix,
		prefixColor,
		typedTextColor,
		suffixTextColor,
		typeSpeed,
		startDelay,
		smartBackspace,
		backSpeed,
		backDelay,
		fadeOut,
		fadeOutDelay,
		loop,
		showCursor,
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
							name: "advanced",
							title: __("Advanced", "essential-blocks"),
							className: "eb-tab styles",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody title={__("Content Settings", "essential-blocks")}>
										<TextControl
											label={__("Prefix Text", "essential-blocks")}
											placeholder={__("Add prefix text", "essential-blocks")}
											value={prefix}
											onChange={(prefix) => setAttributes({ prefix })}
										/>

										<BaseControl label={__("Typed Text", "essential-blocks")}>
											{typedText.length !== 0 && (
												<SortableText
													typedText={typedText}
													setAttributes={setAttributes}
												/>
											)}
											<Button
												className="is-default eb-typed-add-wrapper"
												label={__("Add Typed Item", "essential-blocks")}
												icon="plus-alt"
												onClick={() => {
													let updatedText = [
														...typedText,
														{
															text: `Typed text ${typedText.length + 1}`,
														},
													];

													setAttributes({ typedText: updatedText });
												}}
											>
												<span className="eb-typed-add-button">
													Add Typed Text
												</span>
											</Button>
										</BaseControl>

										<TextControl
											label={__("Suffix Text", "essential-blocks")}
											placeholder={__("Add suffix text", "essential-blocks")}
											value={suffix}
											onChange={(suffix) => setAttributes({ suffix })}
										/>

										<ToggleControl
											label={__("Loop", "essential-blocks")}
											checked={loop}
											onChange={() => setAttributes({ loop: !loop })}
										/>

										{!fadeOut && (
											<ToggleControl
												label={__("Smart Backspace", "essential-blocks")}
												checked={smartBackspace}
												onChange={() =>
													setAttributes({ smartBackspace: !smartBackspace })
												}
											/>
										)}

										<ToggleControl
											label={__("Show Cursor", "essential-blocks")}
											checked={showCursor}
											onChange={() =>
												setAttributes({ showCursor: !showCursor })
											}
										/>

										<ToggleControl
											label={__("Fade Out", "essential-blocks")}
											checked={fadeOut}
											onChange={() => setAttributes({ fadeOut: !fadeOut })}
										/>

										<RangeControl
											label={__("Type Speed", "essential-blocks")}
											value={typeSpeed}
											onChange={(typeSpeed) => setAttributes({ typeSpeed })}
											min={0}
											max={5000}
										/>

										<RangeControl
											label={__("Start Delay", "essential-blocks")}
											value={startDelay}
											onChange={(startDelay) => setAttributes({ startDelay })}
											min={0}
											max={1000}
										/>

										{!fadeOut && (
											<RangeControl
												label={__("Back Speed", "essential-blocks")}
												value={backSpeed}
												onChange={(backSpeed) => setAttributes({ backSpeed })}
												min={0}
												max={5000}
											/>
										)}

										{!fadeOut && (
											<RangeControl
												label={__("Back Delay", "essential-blocks")}
												value={backDelay}
												onChange={(backDelay) => setAttributes({ backDelay })}
												min={0}
												max={10000}
											/>
										)}

										{fadeOut && (
											<RangeControl
												label={__("Fade Delay", "essential-blocks")}
												value={fadeOutDelay}
												onChange={(fadeOutDelay) =>
													setAttributes({ fadeOutDelay })
												}
												min={0}
												max={5000}
											/>
										)}
									</PanelBody>
								</>
							)}
							{tab.name === "styles" && (
								<>
									{prefix && (
										<PanelBody
											title={__("Prefix", "essential-blocks")}
											initialOpen={false}
										>
											<ColorControl
												label={__("Prefix Color", "essential-blocks")}
												color={prefixColor}
												onChange={(prefixColor) =>
													setAttributes({ prefixColor })
												}
											/>

											<TypographyDropdown
												baseLabel={__("Typography", "essential-blocks")}
												typographyPrefixConstant={typoPrefix_prefixText}
												resRequiredProps={resRequiredProps}
											/>
										</PanelBody>
									)}

									{typedText.length > 0 && (
										<PanelBody
											title={__("Typed Text", "essential-blocks")}
											initialOpen={false}
										>
											<ColorControl
												label={__("Typed Text Color", "essential-blocks")}
												color={typedTextColor}
												onChange={(typedTextColor) =>
													setAttributes({ typedTextColor })
												}
											/>

											<TypographyDropdown
												baseLabel={__("Typography", "essential-blocks")}
												typographyPrefixConstant={typoPrefix_typedText}
												resRequiredProps={resRequiredProps}
											/>
										</PanelBody>
									)}

									{suffix && (
										<PanelBody
											title={__("Suffix", "essential-blocks")}
											initialOpen={false}
										>
											<ColorControl
												label={__("Suffix Color", "essential-blocks")}
												color={suffixTextColor}
												onChange={(suffixTextColor) =>
													setAttributes({ suffixTextColor })
												}
											/>

											<TypographyDropdown
												baseLabel={__("Typography", "essential-blocks")}
												typographyPrefixConstant={typoPrefix_suffixText}
												resRequiredProps={resRequiredProps}
											/>
										</PanelBody>
									)}
								</>
							)}
							{tab.name === "advanced" && (
								<>
									<PanelBody>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											className="forWrapperMargin"
											controlName={dimensionsMargin}
											baseLabel="Margin"
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											className="forWrapperPadding"
											controlName={dimensionsPadding}
											baseLabel="Padding"
										/>
										<BaseControl>
											<h3 className="eb-control-title">
												{__("Border & Shadow", "typing-text")}
											</h3>
										</BaseControl>
										<BorderShadowControl
											controlName={WrpBdShadow}
											resRequiredProps={resRequiredProps}
										/>
										<BaseControl>
											<h3 className="eb-control-title">
												{__("Background", "essential-blocks")}
											</h3>
										</BaseControl>
										<BackgroundControl
											controlName={backgroundWrapper}
											resRequiredProps={resRequiredProps}
											noOverlay={true}
											noMainBgi={true}
										/>
									</PanelBody>

									<AdvancedControls
										attributes={attributes}
										setAttributes={setAttributes}
									/>
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
