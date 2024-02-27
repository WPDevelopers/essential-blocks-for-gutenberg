export default function Items(props) {
	const { data, selectItem, setSelectItem } = props;

	return (
		<div className="eb-openverse-grid">
			{typeof data === "object" &&
				data.map((item) => (
					<div
						className={`eb-openverse-grid-item ${
							selectItem == item ? "selected" : ""
						}`}
						onClick={() => setSelectItem(item)}
					>
						<div className="eb_openverse_item_thumbnail">
							<img src={item.url} />
						</div>
					</div>
				))}
		</div>
	);
}
