/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";

/**
 * External dependencies
 */
import {
	SortableContainer,
	SortableElement,
	SortableHandle,
} from "react-sortable-hoc";
import arrayMove from "array-move";

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

const SortableItem = SortableElement(({ feature, position }) => {
	return (
		<li className="drag-helper">
			<span className="eb-sortable-item">
				<span className="eb-sortable-title">{feature.label}</span>
				<DragHandle />
			</span>
		</li>
	);
});

const SortableList = SortableContainer(({ features, onFeatureChange }) => {
	return (
		<ul>
			{features.map((item, index) => (
				<SortableItem
					key={`item-${index}`}
					index={index}
					position={index}
					feature={item}
					onFeatureChange={onFeatureChange}
				/>
			))}
		</ul>
	);
});

class SortableLists extends Component {
	onSortEnd = ({ newIndex, oldIndex }) => {
		const { features, setAttributes } = this.props;
		setAttributes({ sortableLists: arrayMove(features, oldIndex, newIndex) });
	};

	onFeatureChange = (key, value, position) => {
		let features = [...this.props.features];
		features[position][key] = value;

		this.props.setAttributes({ features });
	};

	render = () => {
		return (
			<SortableList
				features={this.props.features}
				onFeatureChange={this.onFeatureChange}
				onSortEnd={this.onSortEnd}
				useDragHandle
			/>
		);
	};
}

export default SortableLists;
