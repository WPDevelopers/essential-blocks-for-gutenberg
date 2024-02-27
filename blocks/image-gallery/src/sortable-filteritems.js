/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { TextControl } from "@wordpress/components";
import { Component, Fragment } from "@wordpress/element";

/**
 * External dependencies
 */
import {
	SortableContainer,
	SortableElement,
	SortableHandle,
} from "react-sortable-hoc";
import arrayMove from "array-move";

/**
 * Internal dependencies
 */

// Style objects
const trashStyle = {
	fontSize: 14,
	borderLeft: "1px solid #b4b4cb",
	lineHeight: "2.5em",
	flex: 2,
	textAlign: "center",
	display: "flex",
	justifyContent: "center",
};

const DragHandle = SortableHandle(() => (
	<span className="drag-handle">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0"
			y="0"
			enableBackground="new 0 0 512 512"
			version="1.1"
			viewBox="0 0 512 512"
			xmlSpace="preserve"
			style={{ height: 14 }}
		>
			<path
				d="M512 256L402.6 146.6 402.6 210.3 301 210.3 301 109.4 365.4 109.4 256 0 146.6 109.4 211 109.4 211 210.3 109.4 210.3 109.4 146.6 0 256 109.4 365.4 109.4 300.3 211 300.3 211 402.6 146.6 402.6 256 512 365.4 402.6 301 402.6 301 300.3 402.6 300.3 402.6 365.4z"
				style={{ fill: "#a9a9a9" }}
			></path>
		</svg>
	</span>
));

// const DragHandle = SortableHandle(() => (
// 	<span className="fa fa-ellipsis-v drag-handle" />
// ));

const TrashIcon = ({ position, onDeleteFeature }) => (
	<span
		className="eb-social-delete-icon"
		style={trashStyle}
		onClick={() => onDeleteFeature(position)}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0"
			y="0"
			enableBackground="new 0 0 512 512"
			version="1.1"
			viewBox="0 0 512 512"
			xmlSpace="preserve"
			style={{ width: 14 }}
		>
			<path
				d="M423.3 86.6H89c-16.8.1-32.2 9.3-40.1 24.1-7.9 14.8-7.1 32.7 2.2 46.8l37.2 55.6V456c0 30.9 25.1 56 56 56h223.9c30.9 0 56-25.1 56-56V213.1l37.2-56c9.1-14 9.8-31.8 1.9-46.5-8.1-14.7-23.4-23.9-40-24zm-198 347c0 13.9-11.3 25.2-25.2 25.2-13.9 0-25.2-11.3-25.2-25.2V220.9c0-13.9 11.3-25.2 25.2-25.2 13.9 0 25.2 11.3 25.2 25.2v212.7zm112 0c0 13.9-11.3 25.2-25.2 25.2-13.9 0-25.2-11.3-25.2-25.2V220.9c0-13.9 11.3-25.2 25.2-25.2 13.9 0 25.2 11.3 25.2 25.2v212.7zM325.8 19.4C309.9 7.1 290.2 0 269.3 0h-26.4c-20.9 0-40.6 7.1-56.5 19.4-11.2 8.7-20.5 20.1-26.9 33.4h193.1c-6.3-13.3-15.6-24.7-26.8-33.4z"
				style={{ fill: "#FF6464" }}
			></path>
		</svg>
	</span>
);

// const TrashIcon = ({ position, onDeleteFeature }) => (
// 	<span
// 		className="fa fa-trash eb-pricebox-sortable-trash"
// 		onClick={() => onDeleteFeature(position)}
// 	/>
// );

const SortableItem = SortableElement(
	({
		feature,
		position,
		onFeatureClick,
		onFeatureChange,
		onDeleteFeature,
		clickedItem,
	}) => {
		return (
			<li className="drag-helper">
				<span className="eb-sortable-item">
					<span
						className="eb-sortable-title"
						onClick={() => onFeatureClick(position)}
					>
						{feature.label}
					</span>
					<DragHandle />
					<TrashIcon position={position} onDeleteFeature={onDeleteFeature} />
				</span>
				{position === clickedItem && (
					<Fragment>
						<TextControl
							label={__("Text", "essential-blocks")}
							value={feature.label}
							onChange={(value) => onFeatureChange("label", value, position)}
						/>
					</Fragment>
				)}
			</li>
		);
	}
);

const SortableList = SortableContainer(
	({
		features,
		onFeatureClick,
		onFeatureChange,
		onDeleteFeature,
		clickedItem,
	}) => {
		return (
			<ul>
				{features.map((item, index) => (
					<SortableItem
						key={`item-${index}`}
						index={index}
						position={index}
						feature={item}
						clickedItem={clickedItem}
						onFeatureClick={onFeatureClick}
						onFeatureChange={onFeatureChange}
						onDeleteFeature={onDeleteFeature}
					/>
				))}
			</ul>
		);
	}
);

class SortableFilterItems extends Component {
	state = {
		clickedItem: null,
	};

	onSortEnd = ({ newIndex, oldIndex }) => {
		const { filterItems, setAttributes } = this.props;
		setAttributes({ filterItems: arrayMove(filterItems, oldIndex, newIndex) });
	};

	onFeatureClick = (index) => {
		let clickedItem = this.state.clickedItem === index ? null : index;
		this.setState({ clickedItem });
	};

	onFeatureChange = (key, value, position) => {
		let filterItems = [...this.props.filterItems];

		filterItems[position][key] = value;

		//sort
		let newValue = value.toLowerCase();
		newValue = newValue.replaceAll(" ", "-");
		newValue = newValue.replaceAll(",-", " eb-filter-img-");
		newValue = newValue.replaceAll(",", "comma");
		newValue = newValue.replaceAll("&", "and");
		newValue = newValue.replaceAll("+", "plus");
		newValue = newValue.replaceAll("amp;", "");
		newValue = newValue.replaceAll("/", "slash");
		newValue = newValue.replaceAll("'", "apostrophe");
		newValue = newValue.replaceAll('"', "apostrophe");
		newValue = newValue.replaceAll(".", "-");
		newValue = newValue.replaceAll("~", "tilde");
		newValue = newValue.replaceAll("!", "exclamation");
		newValue = newValue.replaceAll("@", "at");
		newValue = newValue.replaceAll("#", "hash");
		newValue = newValue.replaceAll("(", "parenthesis");
		newValue = newValue.replaceAll(")", "parenthesis");
		newValue = newValue.replaceAll("=", "equal");
		newValue = newValue.replaceAll(";", "semicolon");
		newValue = newValue.replaceAll(":", "colon");
		newValue = newValue.replaceAll("<", "lessthan");
		newValue = newValue.replaceAll(">", "greaterthan");
		newValue = newValue.replaceAll("|", "pipe");
		newValue = newValue.replaceAll("\\", "backslash");
		newValue = newValue.replaceAll("^", "caret");
		newValue = newValue.replaceAll("*", "asterisk");
		newValue = newValue.replaceAll("$", "dollar");
		newValue = newValue.replaceAll("`", "backtick");
		newValue = newValue.replaceAll("[", "bracket");
		newValue = newValue.replaceAll("]", "bracket");
		newValue = newValue.replaceAll("{", "curlybracket");
		newValue = newValue.replaceAll("}", "curlybracket");
		newValue = newValue.replaceAll("?", "questionmark");

		filterItems[position]["value"] = newValue;

		this.props.setAttributes({ filterItems });
	};

	onDeleteFeature = (position) => {
		const { setAttributes } = this.props;
		let filterItems = [...this.props.filterItems];
		filterItems.splice(position, 1);
		setAttributes({ filterItems });
	};

	render = () => {
		return (
			<SortableList
				features={this.props.filterItems}
				onFeatureClick={this.onFeatureClick}
				onFeatureChange={this.onFeatureChange}
				onDeleteFeature={this.onDeleteFeature}
				onSortEnd={this.onSortEnd}
				clickedItem={this.state.clickedItem}
				useDragHandle
			/>
		);
	};
}

export default SortableFilterItems;
