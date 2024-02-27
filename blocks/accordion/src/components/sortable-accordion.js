import {
	SortableContainer,
	SortableElement,
	SortableHandle,
} from "react-sortable-hoc";
import { BaseControl, TextControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

// const {
// 	//

// 	SortableContainer,
// 	SortableElement,
// 	SortableHandle,
// } = window.EBControls;

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

const TrashIcon = ({ position, onDeleteAccordion }) => (
	<span
		className="eb-social-delete-icon"
		style={trashStyle}
		onClick={() => onDeleteAccordion(position)}
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

const SortableItem = SortableElement(
	({
		accordion,
		position,
		onDeleteAccordion,
		clickedItem,
		onAccordionChange,
		onAccordionClick,
	}) => {
		return (
			<li className="drag-helper">
				<span className="eb-accordion-sortable-item">
					<span
						className="eb-accordion-sortable-title"
						onClick={() => onAccordionClick(position)}
					>
						{(accordion.title || "").replace(/\<br ?\/?\>/gi, " ")}
					</span>
					<DragHandle />
					<TrashIcon
						position={position}
						onDeleteAccordion={onDeleteAccordion}
					/>
				</span>
				{position === clickedItem && (
					<>
						<ToggleControl
							label={__("Default Open?", "essential-blocks")}
							checked={accordion.clickable === "true"}
							onChange={(value) =>
								onAccordionChange("clickable", value.toString(), position)
							}
						/>
					</>
				)}
			</li>
		);
	}
);

const SortableList = SortableContainer(
	({
		accordions,
		onDeleteAccordion,
		onAccordionClick,
		onAccordionChange,
		clickedItem,
	}) => {
		return (
			<ul className="eb-sortable-accordion-list">
				{accordions.map((accordion, index) => (
					<SortableItem
						key={`item-${index}`}
						index={index}
						position={index}
						accordion={accordion}
						clickedItem={clickedItem}
						onDeleteAccordion={onDeleteAccordion}
						onAccordionClick={onAccordionClick}
						onAccordionChange={onAccordionChange}
					/>
				))}
			</ul>
		);
	}
);

const SortableAccordions = ({
	accordions,
	onDeleteAccordion,
	onSortEnd,
	clickedItem,
	onAccordionClick,
	onAccordionChange,
}) => (
	<SortableList
		accordions={accordions}
		onDeleteAccordion={onDeleteAccordion}
		onSortEnd={onSortEnd}
		useDragHandle={true}
		onAccordionClick={onAccordionClick}
		clickedItem={clickedItem}
		onAccordionChange={onAccordionChange}
	/>
);

export default SortableAccordions;
