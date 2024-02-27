import { __ } from "@wordpress/i18n";

export default function Search(props) {
	const {
		// setQ,
		// q,
		setOpenverseModal,
		componentClassName,
		openverseDataFetch,
		openverseDataCount,
		loading,
		searchQ,
		setAttributes,
	} = props;

	const handleKeyPress = (event) => {
		if (event.key === "Enter" && event.target.value.length != 0) {
			setAttributes({
				searchQ: event.target.value,
			});
			// setQ(event.target.value);
			openverseDataFetch(true);
			setOpenverseModal(true);
		}
	};

	const handleSearch = (event) => {
		if (searchQ.length != 0) {
			openverseDataFetch(true);
			setOpenverseModal(true);
		}
	};

	return (
		<div className={componentClassName}>
			<input
				type="search"
				name="search-form"
				id="search-form"
				class="openverse-search-input"
				placeholder={__("Search for content", "eb-openverse-block")}
				value={searchQ}
				onChange={(e) =>
					setAttributes({
						searchQ: e.target.value,
					})
				}
				onKeyPress={handleKeyPress}
			/>
			{!loading && openverseDataCount > 0 && (
				<span className="search-result-count">
					Over {openverseDataCount} restults
				</span>
			)}
			{loading && openverseDataCount > 0 && (
				<span className="search-result-count">Loading ...</span>
			)}
			<button className="openverse-search-btn" onClick={handleSearch}>
				{__("Search", "eb-openverse-block")}
			</button>
		</div>
	);
}
