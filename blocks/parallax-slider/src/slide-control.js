const SliderControl = ({ type, style, icon, handleClick }) => {
	return (
		<div
			className={`btn btn--${type} ${icon}`}
			onClick={handleClick}
			style={style}
		/>
	);
};

export default SliderControl;
