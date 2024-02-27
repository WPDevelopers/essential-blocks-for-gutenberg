import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const {
		blockId,
		sliderData,
		intensity,
		startIndex,
		hasBtnShadow,
		classHook
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
				<div className={`eb-parallax-slider-wrapper ${blockId}`}>
					<div
						className="eb-parallax-container"
						data-start-index={startIndex}
						data-intensity={intensity}
						data-shadow={hasBtnShadow}
					>
						<div className="eb-parallax-slider">
							<ul className="eb-parallax-wrapper">
								{sliderData.map((slide, index) => (
									<li key={index} className="slide">
										<div className="slide__image-wrapper">
											<img
												className="slide__image"
												src={slide.src}
												alt={slide.alt}
												style={{ opacity: 1 }}
											/>
										</div>
										<article className="slide__content">
											<h2 className="slide__headline">{slide.title}</h2>
											<button
												className="slide__action btn"
												data-link={slide.link}
												data-new-tab={slide.openNewTab}
											>
												{slide.btnText}
											</button>
										</article>
									</li>
								))}
							</ul>
							<div className="eb-slider__controls">
								<div className={`btn btn--previous`} />
								<div className={`btn btn--next`} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Save;
