/**
 * Internal dependencies
 */
import Slide from "./slide";
import SliderControl from "./slide-control";

const Slider = ({ slides, attributes, setAttributes }) => {
	const { current, prevIcon, nextIcon, iconColor } = attributes;

	const handleSlideClick = (current) => setAttributes({ current });

	const handlePreviousClick = () => {
		const previous = current - 1;
		const updateCurrent = previous < 0 ? slides.length - 1 : previous;
		handleSlideClick(updateCurrent);
	};

	const handleNextClick = () => {
		const next = current + 1;
		const updateCurrent = next === slides.length ? 0 : next;
		handleSlideClick(updateCurrent);
	};

	const wrapperTransform = {
		transform: `translateX(-${current * (100 / slides.length)}%)`,
	};

	return (
		<div className="eb-parallax-container">
			<div className="eb-parallax-slider">
				<ul className="eb-parallax-wrapper" style={wrapperTransform}>
					{slides.map((slide, index) => (
						<Slide
							key={index}
							position={index}
							slide={slide}
							handleSlideClick={handleSlideClick}
							attributes={attributes}
						/>
					))}
				</ul>

				<div className="eb-slider__controls">
					<SliderControl
						type="previous"
						icon={prevIcon}
						handleClick={handlePreviousClick}
					/>

					<SliderControl
						type="next"
						icon={nextIcon}
						handleClick={handleNextClick}
					/>
				</div>
			</div>
		</div>
	);
};

export default Slider;
