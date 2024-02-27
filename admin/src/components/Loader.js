import { ThreeDots } from "react-loader-spinner";

const EBLoader = ({ settings }) => {
	const {
		loading,
		response,
		message
	} = settings

	return (
		<div className="eb-settings-loader">
			{loading && !response && (
				<ThreeDots
					height="80"
					width="80"
					radius="9"
					color="#2673ff"
					ariaLabel="three-dots-loading"
					wrapperStyle={{
						height: "100vh",
						width: "100vw",
						background: "rgb(255 255 255 / 70%)",
						position: "fixed",
						top: "0",
						left: "0",
						zIndex: "1111",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					wrapperClassName="eb-settings-loader"
				/>
			)}
			{loading && response && (
				<div className="eb-setting-saved">
					<span className="eb-message">{message}</span>
				</div>
			)}

		</div>
	);
};

export default EBLoader;
