/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
import { omit } from "lodash";

import attributes from "./attributes";

const deprecated = [
	{
		attributes: { ...attributes },
		supports: {
			align: ["wide", "full"],
		},
		save: ({ attributes }) => {
			const {
				blockId,
				id,
				initialContent,
				switchStyle,
				switchSize,
				seperatorType,
				activeColor,
				activeBg,
				primaryLabelText = "First",
				secondaryLabelText = "Second",
				alignment,
				primaryLabelColor,
				secondaryLabelColor,
				backgroundType,
				backgroundColor,
				backgroundGradient,
			} = attributes;

			const getMargin = () => {
				switch (alignment) {
					case "center":
						return {
							marginLeft: "auto",
							marginRight: "auto",
						};

					case "right":
						return {
							marginLeft: "auto",
							marginRight: "0px",
						};

					case "left":
						return {
							marginLeft: "0px",
							marginRight: "auto",
						};
				}

				return {
					marginLeft: "auto",
					marginRight: "auto",
				};
			};

			return (
				<div {...useBlockProps.save()}>
					<div
						className={`${blockId} eb-toggle-wrapper`}
						data-init-content={initialContent}
						data-size={switchSize}
						data-switch-style={switchStyle}
						data-bg-type={backgroundType}
						data-bg-color={backgroundColor}
						data-bg-gradient={backgroundGradient || "none"}
						data-primary-color={primaryLabelColor || "inherit"}
						data-secondary-color={secondaryLabelColor || "inherit"}
						data-active-color={activeColor || "inherit"}
						data-active-bg={activeBg}
					>
						<div
							className="eb-toggle-heading"
							style={{
								display: switchStyle === "toggle" ? "block" : "none",
							}}
						>
							<input
								type="checkbox"
								className="eb-text-switch-checkbox"
								id={`eb-${id}`}
								style={{ display: "none" }}
							/>
							<div className="eb-text-switch-wrapper">
								<div
									className="eb-text-switch-content"
									style={{ ...getMargin() }}
								>
									<label className="eb-text-switch-label" for={`eb-${id}`}>
										<div className="eb-text-switch-toggle"></div>
										<div className="eb-switch-names">
											<RichText.Content
												tagName="span"
												className="eb-toggle-primary-label-text"
												value={primaryLabelText}
											/>
											<RichText.Content
												tagName="span"
												className="eb-toggle-secondary-label-text"
												value={secondaryLabelText}
											/>
										</div>
									</label>
								</div>
							</div>
						</div>

						<div
							className="eb-toggle-heading"
							style={{
								display: switchStyle !== "toggle" ? "block" : "none",
							}}
						>
							<RichText.Content
								tagName="span"
								className="eb-toggle-primary-label"
								value={primaryLabelText}
							/>
							<label className={`eb-toggle-switch toggle-${switchSize}`}>
								<input className="eb-toggle-input" type="checkbox" />
								<span className="eb-toggle-controller" />
								<span className="eb-toggle-slider" />
							</label>

							<span
								className={`eb-toggle-${seperatorType} eb-toggle-seperator`}
							></span>

							<RichText.Content
								tagName="span"
								className="eb-toggle-secondary-label"
								value={secondaryLabelText}
							/>
						</div>
						<div className="eb-toggle-content">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			);
		},
	},
	{
		attributes: omit(
			{
				...attributes,

				buttonHeight: {
					type: "number",
				},
				buttonWidth: {
					type: "number",
				},
				headingSpace: {
					type: "number",
				},
				headingSpaceUnit: {
					type: "string",
					default: "px",
				},
			},
			[
				"MOBWrpBg_backgroundSize",
				"MOBWrpBg_bgImgCustomSize",
				"MOBWrpBg_bgImgCustomSizeUnit",
				"MOBWrpBg_bgImgPos",
				"MOBWrpBg_bgImgRepeat",
				"MOBWrpBg_bgImgcustomPosX",
				"MOBWrpBg_bgImgcustomPosXUnit",
				"MOBWrpBg_bgImgcustomPosY",
				"MOBWrpBg_bgImgcustomPosYUnit",
				"MOBWrpBg_ovl_backgroundSize",
				"MOBWrpBg_ovl_bgImgCustomSize",
				"MOBWrpBg_ovl_bgImgCustomSizeUnit",
				"MOBWrpBg_ovl_bgImgPos",
				"MOBWrpBg_ovl_bgImgRepeat",
				"MOBWrpBg_ovl_bgImgcustomPosX",
				"MOBWrpBg_ovl_bgImgcustomPosXUnit",
				"MOBWrpBg_ovl_bgImgcustomPosY",
				"MOBWrpBg_ovl_bgImgcustomPosYUnit",
				"MOBbtnH_Range",
				"MOBbtnW_Range",
				"MOBbtnW_Unit",
				"MOBhSpc_Range",
				"MOBhSpc_Unit",
				"MOBwrpBdSd_Bdr_Bottom",
				"MOBwrpBdSd_Bdr_Left",
				"MOBwrpBdSd_Bdr_Right",
				"MOBwrpBdSd_Bdr_Top",
				"MOBwrpBdSd_Bdr_Unit",
				"MOBwrpBdSd_HBdr_Bottom",
				"MOBwrpBdSd_HBdr_Left",
				"MOBwrpBdSd_HBdr_Right",
				"MOBwrpBdSd_HBdr_Top",
				"MOBwrpBdSd_HBdr_Unit",
				"MOBwrpBdSd_HRds_Bottom",
				"MOBwrpBdSd_HRds_Left",
				"MOBwrpBdSd_HRds_Right",
				"MOBwrpBdSd_HRds_Top",
				"MOBwrpBdSd_HRds_Unit",
				"MOBwrpBdSd_Rds_Bottom",
				"MOBwrpBdSd_Rds_Left",
				"MOBwrpBdSd_Rds_Right",
				"MOBwrpBdSd_Rds_Top",
				"MOBwrpBdSd_Rds_Unit",
				"TABWrpBg_backgroundSize",
				"TABWrpBg_bgImgCustomSize",
				"TABWrpBg_bgImgCustomSizeUnit",
				"TABWrpBg_bgImgPos",
				"TABWrpBg_bgImgRepeat",
				"TABWrpBg_bgImgcustomPosX",
				"TABWrpBg_bgImgcustomPosXUnit",
				"TABWrpBg_bgImgcustomPosY",
				"TABWrpBg_bgImgcustomPosYUnit",
				"TABWrpBg_ovl_backgroundSize",
				"TABWrpBg_ovl_bgImgCustomSize",
				"TABWrpBg_ovl_bgImgCustomSizeUnit",
				"TABWrpBg_ovl_bgImgPos",
				"TABWrpBg_ovl_bgImgRepeat",
				"TABWrpBg_ovl_bgImgcustomPosX",
				"TABWrpBg_ovl_bgImgcustomPosXUnit",
				"TABWrpBg_ovl_bgImgcustomPosY",
				"TABWrpBg_ovl_bgImgcustomPosYUnit",
				"TABbtnH_Range",
				"TABbtnW_Range",
				"TABbtnW_Unit",
				"TABhSpc_Range",
				"TABhSpc_Unit",
				"TABwrpBdSd_Bdr_Bottom",
				"TABwrpBdSd_Bdr_Left",
				"TABwrpBdSd_Bdr_Right",
				"TABwrpBdSd_Bdr_Top",
				"TABwrpBdSd_Bdr_Unit",
				"TABwrpBdSd_HBdr_Bottom",
				"TABwrpBdSd_HBdr_Left",
				"TABwrpBdSd_HBdr_Right",
				"TABwrpBdSd_HBdr_Top",
				"TABwrpBdSd_HBdr_Unit",
				"TABwrpBdSd_HRds_Bottom",
				"TABwrpBdSd_HRds_Left",
				"TABwrpBdSd_HRds_Right",
				"TABwrpBdSd_HRds_Top",
				"TABwrpBdSd_HRds_Unit",
				"TABwrpBdSd_Rds_Bottom",
				"TABwrpBdSd_Rds_Left",
				"TABwrpBdSd_Rds_Right",
				"TABwrpBdSd_Rds_Top",
				"TABwrpBdSd_Rds_Unit",
				"WrpBg_backgroundColor",
				"WrpBg_backgroundSize",
				"WrpBg_backgroundType",
				"WrpBg_bgImageID",
				"WrpBg_bgImageURL",
				"WrpBg_bgImgAttachment",
				"WrpBg_bgImgCustomSize",
				"WrpBg_bgImgCustomSizeUnit",
				"WrpBg_bgImgPos",
				"WrpBg_bgImgRepeat",
				"WrpBg_bgImgcustomPosX",
				"WrpBg_bgImgcustomPosXUnit",
				"WrpBg_bgImgcustomPosY",
				"WrpBg_bgImgcustomPosYUnit",
				"WrpBg_bg_hoverType",
				"WrpBg_bg_transition",
				"WrpBg_gradientColor",
				"WrpBg_isBgOverlay",
				"WrpBg_overlayColor",
				"WrpBg_overlayGradient",
				"WrpBg_overlayType",
				"WrpBg_ovl_allowFilters",
				"WrpBg_ovl_backgroundSize",
				"WrpBg_ovl_bgImageID",
				"WrpBg_ovl_bgImageURL",
				"WrpBg_ovl_bgImgAttachment",
				"WrpBg_ovl_bgImgCustomSize",
				"WrpBg_ovl_bgImgCustomSizeUnit",
				"WrpBg_ovl_bgImgPos",
				"WrpBg_ovl_bgImgRepeat",
				"WrpBg_ovl_bgImgcustomPosX",
				"WrpBg_ovl_bgImgcustomPosXUnit",
				"WrpBg_ovl_bgImgcustomPosY",
				"WrpBg_ovl_bgImgcustomPosYUnit",
				"WrpBg_ovl_bg_transition",
				"WrpBg_ovl_blendMode",
				"WrpBg_ovl_filtersTransition",
				"WrpBg_ovl_fltrBlur",
				"WrpBg_ovl_fltrBrightness",
				"WrpBg_ovl_fltrContrast",
				"WrpBg_ovl_fltrHue",
				"WrpBg_ovl_fltrSaturation",
				"WrpBg_ovl_hoverType",
				"WrpBg_ovl_opacity",
				"WrpBg_ovl_opacityTransition",
				"btnH_Range",
				"btnW_Range",
				"btnW_Unit",
				"hSpc_Range",
				"hSpc_Unit",
				"hov_MOBWrpBg_backgroundSize",
				"hov_MOBWrpBg_bgImgCustomSize",
				"hov_MOBWrpBg_bgImgCustomSizeUnit",
				"hov_MOBWrpBg_bgImgPos",
				"hov_MOBWrpBg_bgImgRepeat",
				"hov_MOBWrpBg_bgImgcustomPosX",
				"hov_MOBWrpBg_bgImgcustomPosXUnit",
				"hov_MOBWrpBg_bgImgcustomPosY",
				"hov_MOBWrpBg_bgImgcustomPosYUnit",
				"hov_MOBWrpBg_ovl_backgroundSize",
				"hov_MOBWrpBg_ovl_bgImgCustomSize",
				"hov_MOBWrpBg_ovl_bgImgCustomSizeUnit",
				"hov_MOBWrpBg_ovl_bgImgPos",
				"hov_MOBWrpBg_ovl_bgImgRepeat",
				"hov_MOBWrpBg_ovl_bgImgcustomPosX",
				"hov_MOBWrpBg_ovl_bgImgcustomPosXUnit",
				"hov_MOBWrpBg_ovl_bgImgcustomPosY",
				"hov_MOBWrpBg_ovl_bgImgcustomPosYUnit",
				"hov_TABWrpBg_backgroundSize",
				"hov_TABWrpBg_bgImgCustomSize",
				"hov_TABWrpBg_bgImgCustomSizeUnit",
				"hov_TABWrpBg_bgImgPos",
				"hov_TABWrpBg_bgImgRepeat",
				"hov_TABWrpBg_bgImgcustomPosX",
				"hov_TABWrpBg_bgImgcustomPosXUnit",
				"hov_TABWrpBg_bgImgcustomPosY",
				"hov_TABWrpBg_bgImgcustomPosYUnit",
				"hov_TABWrpBg_ovl_backgroundSize",
				"hov_TABWrpBg_ovl_bgImgCustomSize",
				"hov_TABWrpBg_ovl_bgImgCustomSizeUnit",
				"hov_TABWrpBg_ovl_bgImgPos",
				"hov_TABWrpBg_ovl_bgImgRepeat",
				"hov_TABWrpBg_ovl_bgImgcustomPosX",
				"hov_TABWrpBg_ovl_bgImgcustomPosXUnit",
				"hov_TABWrpBg_ovl_bgImgcustomPosY",
				"hov_TABWrpBg_ovl_bgImgcustomPosYUnit",
				"hov_WrpBg_backgroundColor",
				"hov_WrpBg_backgroundSize",
				"hov_WrpBg_backgroundType",
				"hov_WrpBg_bgImageID",
				"hov_WrpBg_bgImageURL",
				"hov_WrpBg_bgImgAttachment",
				"hov_WrpBg_bgImgCustomSize",
				"hov_WrpBg_bgImgCustomSizeUnit",
				"hov_WrpBg_bgImgPos",
				"hov_WrpBg_bgImgRepeat",
				"hov_WrpBg_bgImgcustomPosX",
				"hov_WrpBg_bgImgcustomPosXUnit",
				"hov_WrpBg_bgImgcustomPosY",
				"hov_WrpBg_bgImgcustomPosYUnit",
				"hov_WrpBg_gradientColor",
				"hov_WrpBg_overlayColor",
				"hov_WrpBg_overlayGradient",
				"hov_WrpBg_overlayType",
				"hov_WrpBg_ovl_allowFilters",
				"hov_WrpBg_ovl_backgroundSize",
				"hov_WrpBg_ovl_bgImageID",
				"hov_WrpBg_ovl_bgImageURL",
				"hov_WrpBg_ovl_bgImgAttachment",
				"hov_WrpBg_ovl_bgImgCustomSize",
				"hov_WrpBg_ovl_bgImgCustomSizeUnit",
				"hov_WrpBg_ovl_bgImgPos",
				"hov_WrpBg_ovl_bgImgRepeat",
				"hov_WrpBg_ovl_bgImgcustomPosX",
				"hov_WrpBg_ovl_bgImgcustomPosXUnit",
				"hov_WrpBg_ovl_bgImgcustomPosY",
				"hov_WrpBg_ovl_bgImgcustomPosYUnit",
				"hov_WrpBg_ovl_blendMode",
				"hov_WrpBg_ovl_fltrBlur",
				"hov_WrpBg_ovl_fltrBrightness",
				"hov_WrpBg_ovl_fltrContrast",
				"hov_WrpBg_ovl_fltrHue",
				"hov_WrpBg_ovl_fltrSaturation",
				"hov_WrpBg_ovl_opacity",
				"wrpBdSd_Bdr_Bottom",
				"wrpBdSd_Bdr_Left",
				"wrpBdSd_Bdr_Right",
				"wrpBdSd_Bdr_Top",
				"wrpBdSd_Bdr_Unit",
				"wrpBdSd_Bdr_isLinked",
				"wrpBdSd_BorderType",
				"wrpBdSd_HBdr_Bottom",
				"wrpBdSd_HBdr_Left",
				"wrpBdSd_HBdr_Right",
				"wrpBdSd_HBdr_Top",
				"wrpBdSd_HBdr_Unit",
				"wrpBdSd_HBdr_isLinked",
				"wrpBdSd_HRds_Bottom",
				"wrpBdSd_HRds_Left",
				"wrpBdSd_HRds_Right",
				"wrpBdSd_HRds_Top",
				"wrpBdSd_HRds_Unit",
				"wrpBdSd_HRds_isLinked",
				"wrpBdSd_HborderColor",
				"wrpBdSd_HborderStyle",
				"wrpBdSd_Rds_Bottom",
				"wrpBdSd_Rds_Left",
				"wrpBdSd_Rds_Right",
				"wrpBdSd_Rds_Top",
				"wrpBdSd_Rds_Unit",
				"wrpBdSd_Rds_isLinked",
				"wrpBdSd_blur",
				"wrpBdSd_borderColor",
				"wrpBdSd_borderStyle",
				"wrpBdSd_borderTransition",
				"wrpBdSd_hOffset",
				"wrpBdSd_hoverBlur",
				"wrpBdSd_hoverHOffset",
				"wrpBdSd_hoverInset",
				"wrpBdSd_hoverShadowColor",
				"wrpBdSd_hoverSpread",
				"wrpBdSd_hoverVOffset",
				"wrpBdSd_inset",
				"wrpBdSd_radiusTransition",
				"wrpBdSd_shadowColor",
				"wrpBdSd_shadowTransition",
				"wrpBdSd_shadowType",
				"wrpBdSd_spread",
				"wrpBdSd_vOffset",
			]
		),
		save: ({ attributes }) => {
			const {
				blockId,
				//
				id,
				initialContent,
				switchStyle,
				switchSize,
				buttonWidth,
				seperatorType,
				activeColor,
				activeBg,
				primaryLabelText,
				secondaryLabelText,
				alignment,
				primaryLabelColor,
				secondaryLabelColor,
				backgroundType,
				backgroundColor,
				backgroundGradient,
			} = attributes;

			const getMargin = () => {
				let width = buttonWidth || 30;

				switch (alignment) {
					case "center":
						return `${(100 - width) / 2}%`;
					case "right":
						return `${100 - width}%`;
					case "left":
						return `0%`;
				}
			};

			return (
				<div {...useBlockProps.save()}>
					<div
						className={`${blockId} eb-toggle-wrapper`}
						data-init-content={initialContent}
						data-size={switchSize}
						data-switch-style={switchStyle}
						data-bg-type={backgroundType}
						data-bg-color={backgroundColor}
						data-bg-gradient={backgroundGradient || "none"}
						data-primary-color={primaryLabelColor || "inherit"}
						data-secondary-color={secondaryLabelColor || "inherit"}
						data-active-color={activeColor || "inherit"}
						data-active-bg={activeBg}
					>
						<div
							className="eb-toggle-heading"
							style={{
								display: switchStyle === "toggle" ? "block" : "none",
							}}
						>
							<input
								type="checkbox"
								className="eb-text-switch-checkbox"
								id={`eb-${id}`}
								style={{ display: "none" }}
							/>
							<div className="eb-text-switch-wrapper">
								<div
									className="eb-text-switch-content"
									style={{ width: `${buttonWidth}%`, marginLeft: getMargin() }}
								>
									<label className="eb-text-switch-label" for={`eb-${id}`}>
										<div className="eb-text-switch-toggle"></div>
										<div className="eb-switch-names">
											<RichText.Content
												tagName="span"
												className="eb-toggle-primary-label-text"
												value={primaryLabelText}
											/>
											<RichText.Content
												tagName="span"
												className="eb-toggle-secondary-label-text"
												value={secondaryLabelText}
											/>
										</div>
									</label>
								</div>
							</div>
						</div>
						<div
							className="eb-toggle-heading"
							style={{
								display: switchStyle !== "toggle" ? "block" : "none",
							}}
						>
							<RichText.Content
								tagName="span"
								className="eb-toggle-primary-label"
								value={primaryLabelText}
							/>
							<label className={`eb-toggle-switch toggle-${switchSize}`}>
								<input className="eb-toggle-input" type="checkbox" />
								<span className="eb-toggle-controller" />
								<span className="eb-toggle-slider" />
							</label>
							<span
								className={`eb-toggle-${seperatorType} eb-toggle-seperator`}
							></span>
							<RichText.Content
								tagName="span"
								className="eb-toggle-secondary-label"
								value={secondaryLabelText}
							/>
						</div>
						<div className="eb-toggle-content">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			);
		},
	},
];

export default deprecated;
