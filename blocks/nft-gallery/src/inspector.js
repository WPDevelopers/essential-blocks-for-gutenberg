/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	SelectControl,
	TabPanel,
	TextControl,
	RangeControl,
	BaseControl,
	ButtonGroup,
	Button,
	Card,
	CardBody,
	ExternalLink,
} from "@wordpress/components";

/**
 * Internal dependencies
 */

import objAttributes from "./attributes";
import {
	dimensionsMargin,
	dimensionsPadding,
	wrapBg,
	wrpBdShadow,
	rowNumber,
	columnGap,
	rowGap,
	imageMargin,
	imageRadius,
	imageHeight,
	imageWidth,
	titleMargin,
	creatorMargin,
	creatorImageHeight,
	creatorImageWidth,
	creatorImageBorder,
	priceMargin,
	buttonMargin,
	buttonPadding,
	buttonBdrSdw,
	itemBg,
	itemBdrSdw,
	itemPadding,
	LAYOUT_TYPE,
	GAP_UNIT,
	GRID_PRESET,
	LIST_PRESET,
	HORIZONTAL_ALIGNMENT,
	VERTICAL_ALIGNMENT,
} from "./constants/constants";

import {
	typoPrefix_title,
	typoPrefix_owner,
	typoPrefix_price,
	typoPrefix_button,
} from "./constants/typographyPrefixConstants";
import { useState } from "react";

const {
	ResponsiveDimensionsControl,
	TypographyDropdown,
	BorderShadowControl,
	ColorControl,
	BackgroundControl,
	AdvancedControls,
	ResponsiveRangeController,
} = window.EBControls;

function Inspector(props) {
	const { attributes, setAttributes, setLoading } = props;
	const {
		// responsive control attributes ⬇
		resOption,
		source,
		settings,
		layout,
		displayImage,
		displayTitle,
		displayCreator,
		displayOwner,
		displayPrice,
		displayLastSale,
		displayButton,
		titleColor,
		ownerTextColor,
		ownerLinkColor,
		showOwnerImage,
		showOwnerText,
		creatorLabel,
		ownerLabel,
		priceColor,
		buttonTextColor,
		buttonBgColor,
		buttonHoverTextColor,
		buttonHoverBgColor,
		buttonText,
		gridPreset,
		listPreset,
		gridOverlayBg,
		listHorizontalAlignment,
		listVerticalAlignment,
	} = attributes;

	const [openseaApi, setOpenseaApi] = useState("");

	//Initial UseEffect
	useEffect(() => {
		if (!settings) {
			setAttributes({
				settings: {
					opensea: {
						apiKey: "",
						type: "items",
						filterBy: "",
						itemLimit: 6,
						collectionLimit: 6,
						orderBy: "desc",
					},
				},
			});
		}

		//Get Opensea API
		let data = new FormData();
		data.append("action", "opensea_api_key");
		data.append("admin_nonce", EssentialBlocksLocalize.admin_nonce);
		fetch(EssentialBlocksLocalize.ajax_url, {
			method: "POST",
			body: data,
		}) // wrapped
			.then((res) => res.text())
			.then((data) => {
				const response = JSON.parse(data);
				if (response.success && response.data) {
					setOpenseaApi(response.data);
					// setOpenseaDbApi(response.data);
				}
			})
			.catch((err) => console.log(err));
	}, []);

	//Change Type
	const updateSettings = (source, field, value) => {
		let newSouceData = { ...settings[source] };
		newSouceData[field] = value;
		setAttributes({
			settings: {
				...settings,
				[source]: newSouceData,
			},
		});
		setLoading(true);
	};

	const changeLayout = (selected) => {
		setAttributes({ layout: selected });
		switch (selected) {
			case "grid":
				setAttributes({
					rowNumRange: 3,
					imgMaxWidthRange: 100,
					imgMaxWidthUnit: "%",
					imgMarginBottom: 15,
				});
				break;
			case "list":
				setAttributes({
					rowNumRange: 1,
					imgMaxWidthRange: 250,
					imgMaxWidthUnit: "px",
					imgMarginBottom: 0,
				});
				break;
			default:
				return false;
		}
	};

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
						{
							name: "styles",
							title: "Style",
							className: "eb-tab styles",
						},
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
									<PanelBody
										title={__("General", "essential-blocks")}
										initialOpen={true}
									>
										{source === "opensea" && (
											<>
												{!openseaApi && (
													<Card>
														<CardBody>
															<p>
																{__(
																	"Please add your own Opensea API ",
																	"essential-blocks"
																)}{" "}
																<ExternalLink
																	href={`${EssentialBlocksLocalize.eb_admin_url}admin.php?page=essential-blocks&tab=options`}
																>
																	{__("here.")}
																</ExternalLink>
															</p>
														</CardBody>
													</Card>
												)}
												<SelectControl
													label={__("Type", "essential-blocks")}
													value={settings.opensea.type}
													options={[
														{
															label: __("Items", "essential-blocks"),
															value: "items",
														},
														{
															label: __("Collections", "essential-blocks"),
															value: "collections",
														},
													]}
													onChange={(value) =>
														updateSettings("opensea", "type", value)
													}
												/>
												{settings.opensea.type === "items" && (
													<>
														<SelectControl
															label={__("Filter By", "essential-blocks")}
															value={settings.opensea.filterBy}
															options={[
																{
																	label: __("None", "essential-blocks"),
																	value: "",
																},
																{
																	label: __(
																		"Collection Slug",
																		"essential-blocks"
																	),
																	value: "slug",
																},
																{
																	label: __(
																		"Wallet Address",
																		"essential-blocks"
																	),
																	value: "wallet",
																},
															]}
															onChange={(value) =>
																updateSettings("opensea", "filterBy", value)
															}
														/>
														{settings.opensea.filterBy === "slug" && (
															<TextControl
																label={__(
																	"Collection Slug",
																	"essential-blocks"
																)}
																placeholder={__(
																	"cryptopunks",
																	"essential-blocks"
																)}
																value={settings.opensea.collectionSlug}
																onChange={(value) =>
																	updateSettings(
																		"opensea",
																		"collectionSlug",
																		value
																	)
																}
															/>
														)}
														{settings.opensea.filterBy === "wallet" && (
															<TextControl
																label={__("Wallet Address", "essential-blocks")}
																placeholder={__(
																	"0x1......",
																	"essential-blocks"
																)}
																value={settings.opensea.itemWalletId}
																onChange={(value) =>
																	updateSettings(
																		"opensea",
																		"itemWalletId",
																		value
																	)
																}
															/>
														)}
														<RangeControl
															label="Limit"
															value={settings.opensea.itemLimit}
															onChange={(value) =>
																updateSettings("opensea", "itemLimit", value)
															}
															min={1}
															max={100}
															step={1}
															allowReset={true}
														/>
														<SelectControl
															label={__("Order By", "essential-blocks")}
															value={settings.opensea.orderBy}
															options={[
																{
																	label: __("DESC", "essential-blocks"),
																	value: "desc",
																},
																{
																	label: __("ASC", "essential-blocks"),
																	value: "asc",
																},
															]}
															onChange={(value) =>
																updateSettings("opensea", "orderBy", value)
															}
														/>
													</>
												)}
												{settings.opensea.type === "collections" && (
													<>
														<TextControl
															label={__("Wallet Address", "essential-blocks")}
															value={settings.opensea.collectionWalletId}
															onChange={(value) =>
																updateSettings(
																	"opensea",
																	"collectionWalletId",
																	value
																)
															}
														/>
														<RangeControl
															label="Limit"
															value={settings.opensea.collectionLimit}
															onChange={(value) =>
																updateSettings(
																	"opensea",
																	"collectionLimit",
																	value
																)
															}
															min={1}
															max={100}
															step={1}
															allowReset={true}
														/>
													</>
												)}
											</>
										)}
									</PanelBody>
									<PanelBody
										title={__("Layout", "essential-blocks")}
										initialOpen={true}
									>
										<SelectControl
											label={__("Layout Type", "essential-blocks")}
											value={layout}
											options={LAYOUT_TYPE}
											onChange={(value) => changeLayout(value)}
										/>

										{layout === "grid" && (
											<SelectControl
												label={__("Grid Preset", "essential-blocks")}
												value={gridPreset}
												options={GRID_PRESET}
												onChange={(value) =>
													setAttributes({ gridPreset: value })
												}
											/>
										)}

										{layout === "list" && (
											<SelectControl
												label={__("List Preset", "essential-blocks")}
												value={listPreset}
												options={LIST_PRESET}
												onChange={(value) =>
													setAttributes({ listPreset: value })
												}
											/>
										)}
										<ResponsiveRangeController
											baseLabel={__("Items per row", "essential-blocks")}
											controlName={rowNumber}
											resRequiredProps={resRequiredProps}
											min={1}
											max={10}
											step={1}
											noUnits
										/>
										<ToggleControl
											label={__("Show NFT Image?", "essential-blocks")}
											checked={displayImage}
											onChange={() =>
												setAttributes({ displayImage: !displayImage })
											}
										/>
										<ToggleControl
											label={__("Show Title?", "essential-blocks")}
											checked={displayTitle}
											onChange={() =>
												setAttributes({ displayTitle: !displayTitle })
											}
										/>

										{settings.opensea.type === "items" && (
											<>
												<ToggleControl
													label={__("Show Current Owner?", "essential-blocks")}
													checked={displayOwner}
													onChange={() =>
														setAttributes({ displayOwner: !displayOwner })
													}
												/>
												<ToggleControl
													label={__("Show Creator?", "essential-blocks")}
													checked={displayCreator}
													onChange={() =>
														setAttributes({ displayCreator: !displayCreator })
													}
												/>
												<ToggleControl
													label={__("Show Price?", "essential-blocks")}
													checked={displayPrice}
													onChange={() =>
														setAttributes({ displayPrice: !displayPrice })
													}
												/>
												<ToggleControl
													label={__("Show Last Sale?", "essential-blocks")}
													checked={displayLastSale}
													onChange={() =>
														setAttributes({ displayLastSale: !displayLastSale })
													}
												/>
												<ToggleControl
													label={__("Show Button?", "essential-blocks")}
													checked={displayButton}
													onChange={() =>
														setAttributes({ displayButton: !displayButton })
													}
												/>
											</>
										)}
									</PanelBody>
								</>
							)}
							{tab.name === "styles" && (
								<>
									<PanelBody
										title={__("Layout Styles", "essential-blocks")}
										initialOpen={true}
									>
										<ResponsiveRangeController
											baseLabel={__("Columns Gap", "essential-blocks")}
											controlName={columnGap}
											resRequiredProps={resRequiredProps}
											min={0}
											max={100}
											step={1}
											units={GAP_UNIT}
										/>
										<ResponsiveRangeController
											baseLabel={__("Row Gap", "essential-blocks")}
											controlName={rowGap}
											resRequiredProps={resRequiredProps}
											min={0}
											max={100}
											step={1}
											units={GAP_UNIT}
										/>
									</PanelBody>

									<PanelBody
										title={__("Item Box Styles", "essential-blocks")}
										initialOpen={false}
									>
										{layout === "list" && (
											<>
												{/* <BaseControl
													label={__("Horizontal Alignment", "essential-blocks")}
													id="eb-button-group-alignment"
												>
													<ButtonGroup id="eb-button-group-alignment">
														{HORIZONTAL_ALIGNMENT.map((item, index) => (
															<Button
																key={index}
																isPrimary={listHorizontalAlignment === item.value}
																isSecondary={listHorizontalAlignment !== item.value}
																onClick={() =>
																	setAttributes({
																		listHorizontalAlignment: item.value,
																	})
																}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl> */}
												<BaseControl
													label={__("Vertical Alignment", "essential-blocks")}
													id="eb-button-group-alignment"
												>
													<ButtonGroup id="eb-button-group-alignment">
														{VERTICAL_ALIGNMENT.map((item, index) => (
															<Button
																key={index}
																isPrimary={listVerticalAlignment === item.value}
																isSecondary={
																	listVerticalAlignment !== item.value
																}
																onClick={() =>
																	setAttributes({
																		listVerticalAlignment: item.value,
																	})
																}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>
											</>
										)}
										<PanelBody title={__("Background")} initialOpen={true}>
											<BackgroundControl
												controlName={itemBg}
												resRequiredProps={resRequiredProps}
												noOverlay
												noOverlayBgi
											/>
										</PanelBody>
										{layout === "grid" && gridPreset === "preset-3" && (
											<>
												<ColorControl
													label={__("Overlay Color", "essential-blocks")}
													color={gridOverlayBg}
													onChange={(color) =>
														setAttributes({ gridOverlayBg: color })
													}
												/>
											</>
										)}
										<PanelBody title={__("Border & Shadow")} initialOpen={true}>
											<BorderShadowControl
												controlName={itemBdrSdw}
												resRequiredProps={resRequiredProps}
											/>
										</PanelBody>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={itemPadding}
											baseLabel="Padding"
										/>
									</PanelBody>

									{displayImage && (
										<PanelBody
											title={__("Image", "essential-blocks")}
											initialOpen={false}
										>
											<ResponsiveRangeController
												baseLabel={__("Height", "essential-blocks")}
												controlName={imageHeight}
												resRequiredProps={resRequiredProps}
												min={0}
												max={500}
												step={1}
												units={GAP_UNIT}
											/>
											<ResponsiveRangeController
												baseLabel={__("Width", "essential-blocks")}
												controlName={imageWidth}
												resRequiredProps={resRequiredProps}
												min={0}
												max={500}
												step={1}
												units={GAP_UNIT}
											/>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={imageMargin}
												baseLabel="Margin"
											/>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={imageRadius}
												baseLabel="Border Radius"
											/>
										</PanelBody>
									)}

									<PanelBody
										title={__("Title", "essential-blocks")}
										initialOpen={false}
									>
										<TypographyDropdown
											baseLabel="Typography"
											typographyPrefixConstant={typoPrefix_title}
											resRequiredProps={resRequiredProps}
										/>
										<ColorControl
											label={__("Color", "essential-blocks")}
											color={titleColor}
											onChange={(titleColor) => setAttributes({ titleColor })}
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={titleMargin}
											baseLabel="Margin"
										/>
									</PanelBody>

									<PanelBody
										title={__("Creator/Owner", "essential-blocks")}
										initialOpen={false}
									>
										<ToggleControl
											label={__("Show Name?", "essential-blocks")}
											checked={showOwnerText}
											onChange={() =>
												setAttributes({ showOwnerText: !showOwnerText })
											}
										/>
										<ToggleControl
											label={__("Show Image?", "essential-blocks")}
											checked={showOwnerImage}
											onChange={() =>
												setAttributes({ showOwnerImage: !showOwnerImage })
											}
										/>
										<TypographyDropdown
											baseLabel="Typography"
											typographyPrefixConstant={typoPrefix_owner}
											resRequiredProps={resRequiredProps}
										/>
										{displayCreator && (
											<TextControl
												label={__("Creator Label", "essential-blocks")}
												value={creatorLabel}
												onChange={(text) =>
													setAttributes({ creatorLabel: text })
												}
											/>
										)}
										{displayOwner && (
											<TextControl
												label={__("Owner Label", "essential-blocks")}
												value={ownerLabel}
												onChange={(text) => setAttributes({ ownerLabel: text })}
											/>
										)}
										<ColorControl
											label={__("Label Color", "essential-blocks")}
											color={ownerTextColor}
											onChange={(color) =>
												setAttributes({ ownerTextColor: color })
											}
										/>
										<ColorControl
											label={__("Link Color", "essential-blocks")}
											color={ownerLinkColor}
											onChange={(color) =>
												setAttributes({ ownerLinkColor: color })
											}
										/>
										<ResponsiveRangeController
											baseLabel={__("Image Height", "essential-blocks")}
											controlName={creatorImageHeight}
											resRequiredProps={resRequiredProps}
											min={0}
											max={500}
											step={1}
											units={GAP_UNIT}
										/>
										<ResponsiveRangeController
											baseLabel={__("Image Width", "essential-blocks")}
											controlName={creatorImageWidth}
											resRequiredProps={resRequiredProps}
											min={0}
											max={500}
											step={1}
											units={GAP_UNIT}
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={creatorImageBorder}
											baseLabel="Image Border Radius"
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={creatorMargin}
											baseLabel="Margin"
										/>
									</PanelBody>

									<PanelBody
										title={__("Price", "essential-blocks")}
										initialOpen={false}
									>
										<TypographyDropdown
											baseLabel="Typography"
											typographyPrefixConstant={typoPrefix_price}
											resRequiredProps={resRequiredProps}
										/>
										<ColorControl
											label={__("Color", "essential-blocks")}
											color={priceColor}
											onChange={(color) => setAttributes({ priceColor: color })}
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={priceMargin}
											baseLabel="Margin"
										/>
									</PanelBody>

									<PanelBody
										title={__("Button", "essential-blocks")}
										initialOpen={false}
									>
										<TextControl
											label={__("Button Text", "essential-blocks")}
											value={buttonText}
											onChange={(text) => setAttributes({ buttonText: text })}
										/>
										<TypographyDropdown
											baseLabel="Typography"
											typographyPrefixConstant={typoPrefix_button}
											resRequiredProps={resRequiredProps}
										/>
										<ColorControl
											label={__("Text Color", "essential-blocks")}
											color={buttonTextColor}
											onChange={(color) =>
												setAttributes({ buttonTextColor: color })
											}
										/>
										<ColorControl
											label={__("Background Color", "essential-blocks")}
											color={buttonBgColor}
											onChange={(color) =>
												setAttributes({ buttonBgColor: color })
											}
										/>
										<ColorControl
											label={__("Hover Text Color", "essential-blocks")}
											color={buttonHoverTextColor}
											onChange={(color) =>
												setAttributes({ buttonHoverTextColor: color })
											}
										/>
										<ColorControl
											label={__("Hover Background Color", "essential-blocks")}
											color={buttonHoverBgColor}
											onChange={(color) =>
												setAttributes({ buttonHoverBgColor: color })
											}
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={buttonMargin}
											baseLabel="Margin"
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={buttonPadding}
											baseLabel="Padding"
										/>
										<PanelBody title={__("Border & Shadow")} initialOpen={true}>
											<BorderShadowControl
												controlName={buttonBdrSdw}
												resRequiredProps={resRequiredProps}
											/>
										</PanelBody>
									</PanelBody>
								</>
							)}
							{tab.name === "advance" && (
								<>
									<PanelBody title={__("Margin & Padding")}>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={dimensionsMargin}
											baseLabel="Margin"
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={dimensionsPadding}
											baseLabel="Padding"
										/>
									</PanelBody>

									<PanelBody
										title={__("Background", "essential-blocks")}
										initialOpen={false}
									>
										<BackgroundControl
											controlName={wrapBg}
											resRequiredProps={resRequiredProps}
											noOverlay
											noOverlayBgi
										/>
									</PanelBody>

									<PanelBody title={__("Border & Shadow")} initialOpen={false}>
										<BorderShadowControl
											controlName={wrpBdShadow}
											resRequiredProps={resRequiredProps}
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
}

export default Inspector;
