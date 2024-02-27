/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

import attributes from "./attributes";

import { CONTAINER_CLASS, WRAPPER_CLASS, STRIPE_CLASS } from "./constants";

const deprecated = [
	{
		attributes: { ...attributes },
		supports: {
			align: ["wide", "full"],
		},
		save: ({ attributes }) => {
			const {
				blockId,
				layout,
				wrapperAlign,
				titleTag,
				progress,
				displayProgress,
				animationDuration,
				title,
				showStripe,
				stripeAnimation,
				prefix,
				suffix,
			} = attributes;

			const stripeClass = showStripe ? " " + STRIPE_CLASS[stripeAnimation] : "";

			return (
				<div {...useBlockProps.save()}>
					<div className={`eb-progressbar-wrapper ${blockId}`}>
						<div
							className={`eb-progressbar-${CONTAINER_CLASS[layout]}-container ${wrapperAlign}`}
						>
							{(layout === "line" || layout === "line_rainbow") && title && (
								<attributes.titleTag className="eb-progressbar-title">
									{title}
								</attributes.titleTag>
							)}

							<div
								className={`eb-progressbar ${WRAPPER_CLASS[layout]}${stripeClass}`}
								data-layout={layout}
								data-count={progress}
								data-duration={animationDuration}
							>
								{(layout === "circle" || layout === "circle_fill") && (
									<>
										<div className="eb-progressbar-circle-pie">
											<div className="eb-progressbar-circle-half-left eb-progressbar-circle-half"></div>
											<div className="eb-progressbar-circle-half-right eb-progressbar-circle-half"></div>
										</div>
										<div className="eb-progressbar-circle-inner"></div>
										<div className="eb-progressbar-circle-inner-content">
											{title && (
												<attributes.titleTag className="eb-progressbar-title">
													{title}
												</attributes.titleTag>
											)}
											{displayProgress && (
												<span className="eb-progressbar-count-wrap">
													<span className="eb-progressbar-count">{progress}</span>
													<span className="postfix">%</span>
												</span>
											)}
										</div>
									</>
								)}

								{(layout === "half_circle" || layout === "half_circle_fill") && (
									<>
										<div className="eb-progressbar-circle">
											<div className="eb-progressbar-circle-pie">
												<div className="eb-progressbar-circle-half"></div>
											</div>
											<div className="eb-progressbar-circle-inner"></div>
										</div>
										<div className="eb-progressbar-circle-inner-content">
											<attributes.titleTag className="eb-progressbar-title">
												{title}
											</attributes.titleTag>
											{displayProgress && (
												<span className="eb-progressbar-count-wrap">
													<span className="eb-progressbar-count">{progress}</span>
													<span className="postfix">%</span>
												</span>
											)}
										</div>
									</>
								)}

								{(layout === "line" || layout === "line_rainbow") && (
									<>
										{displayProgress && (
											<span className="eb-progressbar-count-wrap">
												<span className="eb-progressbar-count">{progress}</span>
												<span className="postfix">%</span>
											</span>
										)}
										<span className="eb-progressbar-line-fill"></span>
									</>
								)}

								{layout === "box" && (
									<>
										<div className="eb-progressbar-box-inner-content">
											<attributes.titleTag className="eb-progressbar-title">
												{title}
											</attributes.titleTag>
											{displayProgress && (
												<span className="eb-progressbar-count-wrap">
													<span className="eb-progressbar-count">{progress}</span>
													<span className="postfix">%</span>
												</span>
											)}
										</div>
										<div className="eb-progressbar-box-fill"></div>
									</>
								)}
							</div>
							{(layout === "half_circle" || layout === "half_circle_fill") && (
								<>
									<div className="eb-progressbar-half-circle-after">
										<span className="eb-progressbar-prefix-label">{prefix}</span>
										<span className="eb-progressbar-postfix-label">{suffix}</span>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			);
		},
	},
];

export default deprecated;
