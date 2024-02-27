/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { MediaUpload } from "@wordpress/block-editor";
import {
    BaseControl,
    TextControl,
    TextareaControl,
    Button,
    ButtonGroup,
} from "@wordpress/components";
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
// import faIcons from "../../../util/faIcons";
// import ColorControl from "../../../util/color-control";
// import ImageAvatar from "../../../util/image-avatar/";
import { MEDIA_TYPES } from "./constants";
import { ToggleControl } from "@wordpress/components";
const { ColorControl, ImageAvatar, EBIconPicker } = window.EBControls;

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
        inlineDesign,
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
                        {feature.title}
                    </span>
                    <DragHandle />
                    <TrashIcon
                        position={position}
                        onDeleteFeature={onDeleteFeature}
                    />
                </span>
                {position === clickedItem && (
                    <Fragment>
                        <TextControl
                            label={__("Text", "essential-blocks")}
                            value={feature.title}
                            onChange={(value) =>
                                onFeatureChange("title", value, position)
                            }
                        />
                        {!inlineDesign && (
                            <TextareaControl
                                label={__("Content", "essential-blocks")}
                                value={feature.content}
                                onChange={(value) =>
                                    onFeatureChange("content", value, position)
                                }
                            />
                        )}
                        <BaseControl
                            label={__("Icon Type", "essential-blocks")}
                        >
                            <ButtonGroup className="eb-featurelist-icon-type">
                                {MEDIA_TYPES.map((item, index) => (
                                    <Button
                                        key={index}
                                        isPrimary={
                                            feature.iconType === item.value
                                        }
                                        isSecondary={
                                            feature.iconType !== item.value
                                        }
                                        onClick={() =>
                                            onFeatureChange(
                                                "iconType",
                                                item.value,
                                                position
                                            )
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        {feature.iconType !== "none" && (
                            <>
                                {feature.iconType === "icon" && (
                                    <EBIconPicker
                                        value={feature.icon}
                                        onChange={(value) => onFeatureChange("icon", value, position)}
                                    />
                                )}
                                {feature.iconType === "image" &&
                                    !feature.featureImage && (
                                        <MediaUpload
                                            // onSelect={
                                            // 	(({ id, url }) =>
                                            // 		// setAttributes({ featureImage: url, imageId: id })

                                            // 		onFeatureChange("featureImageId", id, position),
                                            // 	// onFeatureChange("featureImage", id, position))
                                            // }
                                            onSelect={({
                                                id,
                                                url,
                                                alt,
                                                title,
                                            }) => {
                                                onFeatureChange(
                                                    [
                                                        "featureImageId",
                                                        "featureImage",
                                                        "featureImageAlt",
                                                        "featureImageTitle",
                                                    ],
                                                    [id, url, alt, title],
                                                    position
                                                );
                                            }}
                                            type="image"
                                            value={feature.featureImageId}
                                            render={({ open }) => {
                                                return (
                                                    <Button
                                                        className="eb-background-control-inspector-panel-img-btn components-button"
                                                        label={__(
                                                            "Upload Image",
                                                            "essential-blocks"
                                                        )}
                                                        icon="format-image"
                                                        onClick={open}
                                                    />
                                                );
                                            }}
                                        />
                                    )}
                                {feature.iconType === "image" &&
                                    feature.featureImage && (
                                        <ImageAvatar
                                            imageUrl={feature.featureImage}
                                            onDeleteImage={() => {
                                                onFeatureChange(
                                                    [
                                                        "featureImageId",
                                                        "featureImage",
                                                        "featureImageAlt",
                                                        "featureImageTitle",
                                                    ],
                                                    [null, null, null, null],
                                                    position
                                                );
                                            }}
                                        />
                                    )}
                                {feature.iconType === "icon" &&
                                    feature.icon && (
                                        <ColorControl
                                            label={__(
                                                "Icon Color",
                                                "essential-blocks"
                                            )}
                                            color={feature.iconColor}
                                            onChange={(value) =>
                                                onFeatureChange(
                                                    "iconColor",
                                                    value,
                                                    position
                                                )
                                            }
                                        />
                                    )}
                                <ColorControl
                                    label={__(
                                        "Background Color",
                                        "essential-blocks"
                                    )}
                                    color={feature.iconBackgroundColor}
                                    onChange={(value) =>
                                        onFeatureChange(
                                            "iconBackgroundColor",
                                            value,
                                            position
                                        )
                                    }
                                />
                            </>
                        )}
                        <TextControl
                            label={__("Link", "essential-blocks")}
                            value={feature.link}
                            onChange={(value) =>
                                onFeatureChange("link", value, position)
                            }
                        />
                        <ToggleControl
                            label={__("Open in New Tab", "essential-blocks")}
                            checked={
                                feature.linkOpenNewTab == "false" ? false : true
                            }
                            onChange={(value) =>
                                onFeatureChange(
                                    "linkOpenNewTab",
                                    value.toString(),
                                    position
                                )
                            }
                        />
                    </Fragment>
                )}
            </li>
        );
    }
);

const SortableList = SortableContainer(
    ({
        inlineDesign,
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
                        inlineDesign={inlineDesign}
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

class SortableFeatures extends Component {
    state = {
        clickedItem: null,
    };

    onSortEnd = ({ newIndex, oldIndex }) => {
        const { features, setAttributes } = this.props;
        setAttributes({ features: arrayMove(features, oldIndex, newIndex) });
    };

    onFeatureClick = (index) => {
        let clickedItem = this.state.clickedItem === index ? null : index;
        this.setState({ clickedItem });
    };

    onFeatureChange = (key, value, position) => {
        const newFeature = { ...this.props.features[position] };
        const newFeatureList = [...this.props.features];
        newFeatureList[position] = newFeature;
        if (Array.isArray(key)) {
            key.map((item, index) => {
                newFeatureList[position][item] = value[index];
            });
        } else {
            newFeatureList[position][key] = value;
        }

        this.props.setAttributes({ features: newFeatureList });
    };

    onDeleteFeature = (position) => {
        const { setAttributes } = this.props;
        let features = [...this.props.features];
        features.splice(position, 1);
        setAttributes({ features });
    };

    render = () => {
        return (
            <SortableList
                inlineDesign={this.props.inlineDesign}
                features={this.props.features}
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

export default SortableFeatures;
