/**
 * WordPress dependencies
 */

/**
 * External dependencies
 */
import {
    SortableContainer,
    SortableElement,
    SortableHandle,
} from "react-sortable-hoc";
import arrayMove from "array-move";

const DragHandle = SortableHandle(() => {
    return (
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
    );
});

const SortableItem = SortableElement(({ feature, position, ucFirst }) => {
    return (
        <li className="drag-helper" key={position}>
            <span className="eb-sortable-item">
                <span className="eb-sortable-title">{ucFirst(feature)}</span>
                <DragHandle />
            </span>
        </li>
    );
});

const SortableList = SortableContainer(({ contentLists, ucFirst }) => {
    return (
        <ul>
            {contentLists.map((item, index) => {
                return (
                    <SortableItem
                        key={`item-${index}`}
                        index={index}
                        position={index}
                        feature={item}
                        ucFirst={ucFirst}
                    />
                );
            })}
        </ul>
    );
});

export default function SortableContents({
    setAttributes,
    contentLists,
    ucFirst,
}) {
    const onSortEnd = ({ newIndex, oldIndex }) => {
        setAttributes({
            enableContents: arrayMove(contentLists, oldIndex, newIndex),
        });
    };

    return (
        <SortableList
            contentLists={contentLists}
            onSortEnd={onSortEnd}
            ucFirst={ucFirst}
            useDragHandle
        />
    );
}
