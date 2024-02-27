/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
import {
	PanelBody,
	Button,
	ButtonGroup,
	BaseControl,
	TextControl,
	TextareaControl,
	ToggleControl,
	SelectControl,
	TabPanel
} from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */
import {
	ALIGNMENT,
	EFFECTS_LIST,
	imageHeight,
	imageWidth,
	wrapperMargin,
	wrapperPadding,
	imageBorderShadow,
} from "./constants";
import {
	typoPrefix_header,
	typoPrefix_content,
} from "./constants/typographyPrefixConstants";

import objAttributes from "./attributes";

const {
	ImageAvatar,
	ColorControl,
	ResponsiveRangeController,
	TypographyDropdown,
	ResponsiveDimensionsControl,
	BorderShadowControl,
	GradientColorControl,
	AdvancedControls,
} = window.EBControls;

const Inspector = ({ attributes, setAttributes }) => {
	const {
		resOption,
		effectName,
		header,
		content,
		link,
		imageURL,
		imageAltTag,
		newWindow,
		headerColor,
		contentColor,
		imageAlignment,
		isBackgroundGradient,
		backgroundColor,
		backgroundGradient,
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
							name: "advance",
							title: __("Advanced", "essential-blocks"),
							className: "eb-tab advance",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls " + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody>
										<BaseControl label={__("Background Image", "essential-blocks")}>
											<MediaUpload
												onSelect={(media) =>
													setAttributes({
														imageURL: media.url,
													})
												}
												type="image"
												value={imageURL}
												render={({ open }) =>
													!imageURL && (
														<Button
															className="eb-cia-upload-button"
															label={__("Upload Image", "essential-blocks")}
															icon="format-image"
															onClick={open}
														/>
													)
												}
											/>
											{imageURL && (
												<ImageAvatar
													imageUrl={imageURL}
													onDeleteImage={() =>
														setAttributes({ imageURL: null })
													}
												/>
											)}
										</BaseControl>
										<ResponsiveRangeController
											baseLabel={__("Height", "essential-blocks")}
											controlName={imageHeight}
											resRequiredProps={resRequiredProps}
											min={200}
											max={1000}
											step={1}
											noUnits
										/>
										<ResponsiveRangeController
											baseLabel={__("Width", "essential-blocks")}
											controlName={imageWidth}
											resRequiredProps={resRequiredProps}
											min={0}
											max={1000}
											step={1}
											noUnits
										/>
										<TextControl
											label={__("Image alt tag", "essential-blocks")}
											value={imageAltTag}
											onChange={(newValue) =>
												setAttributes({ imageAltTag: newValue })
											}
										/>
										<TextControl
											label={__("Header", "essential-blocks")}
											value={header}
											onChange={(header) => setAttributes({ header })}
										/>
										<TextareaControl
											label={__("Content", "essential-blocks")}
											value={content}
											onChange={(content) => setAttributes({ content })}
										/>
										<TextControl
											label={__("Link", "essential-blocks")}
											value={link}
											onChange={(link) => setAttributes({ link })}
										/>
										<ToggleControl
											label={__("Open in New Tab", "essential-blocks")}
											checked={newWindow}
											onChange={() => setAttributes({ newWindow: !newWindow })}
										/>
										<BaseControl>
											<h3 className="eb-control-title">
												{__("Alignment", "essential-blocks")}
											</h3>
											<ButtonGroup>
												{ALIGNMENT.map((item, index) => (
													<Button
														key={index}
														isPrimary={imageAlignment === item.value}
														isSecondary={imageAlignment !== item.value}
														onClick={() =>
															setAttributes({
																imageAlignment: item.value,
															})
														}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>
										<SelectControl
											label={__("Promo Effect", "essential-blocks")}
											value={effectName}
											options={EFFECTS_LIST}
											onChange={(newEffect) =>
												setAttributes({ effectName: newEffect })
											}
										/>
									</PanelBody>
								</>
							)}
							{tab.name === "styles" && (
								<>
									<PanelBody>
										<BaseControl>
											<h3 className="eb-control-title">
												{__("Background Color", "essential-blocks")}
											</h3>
										</BaseControl>
										<ToggleControl
											label={__("Show Gradient Color", "essential-blocks")}
											checked={isBackgroundGradient}
											onChange={() => {
												setAttributes({
													isBackgroundGradient: !isBackgroundGradient,
												});
											}}
										/>
										{isBackgroundGradient || (
											<ColorControl
												label={__("Color", "essential-blocks")}
												color={backgroundColor}
												onChange={(backgroundColor) =>
													setAttributes({ backgroundColor })
												}
											/>
										)}
										{isBackgroundGradient && (
											<>
												<GradientColorControl
													label={__("Gradient Color", "essential-blocks")}
													gradientColor={backgroundGradient}
													onChange={(backgroundGradient) =>
														setAttributes({ backgroundGradient })
													}
												/>
											</>
										)}
									</PanelBody>
									<PanelBody
										title={__("Header", "essential-blocks")}
										initialOpen={false}
									>
										<>
											<TypographyDropdown
												baseLabel={__("Typography", "essential-blocks")}
												typographyPrefixConstant={typoPrefix_header}
												resRequiredProps={resRequiredProps}
											/>
											<ColorControl
												label={__("Color", "essential-blocks")}
												color={headerColor}
												onChange={(headerColor) =>
													setAttributes({ headerColor })
												}
											/>
										</>
									</PanelBody>
									<PanelBody
										title={__("Content", "essential-blocks")}
										initialOpen={false}
									>
										<>
											<TypographyDropdown
												baseLabel={__("Typography", "essential-blocks")}
												typographyPrefixConstant={typoPrefix_content}
												resRequiredProps={resRequiredProps}
											/>
											<ColorControl
												label={__("Color", "essential-blocks")}
												color={contentColor}
												onChange={(contentColor) =>
													setAttributes({ contentColor })
												}
											/>
										</>
									</PanelBody>
								</>
							)}
							{tab.name === "advance" && (
								<>
									<PanelBody>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={wrapperMargin}
											baseLabel={__("Margin", "essential-blocks")}
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={wrapperPadding}
											baseLabel={__("Padding", "essential-blocks")}
										/>
									</PanelBody>
									<PanelBody
										title={__("Border & Shadow", "essential-blocks")}
										initialOpen={false}
									>
										<BorderShadowControl
											controlName={imageBorderShadow}
											resRequiredProps={resRequiredProps}
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
