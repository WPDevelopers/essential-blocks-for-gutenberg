/**
 * WordPress dependencies
 */
import { Component, useRef } from "@wordpress/element";
import { MediaUpload } from "@wordpress/block-editor";
import {
    TextControl,
    TextareaControl,
    SelectControl,
    ToggleControl,
    Button,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
/**
 * External dependencies
 */
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const { ImageAvatar } = window.EBControls;

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

const TrashIcon = ({ position, onDeleteItem }) => (
    <span
        className="eb-social-delete-icon"
        style={trashStyle}
        onClick={() => onDeleteItem(position)}
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
        marker,
        map,
        position,
        onTitleClick,
        clickedIndex,
        onDeleteItem,
        onMarkerChange,
    }) => {
        const searchRef = useRef(null);

        const initSearch = () => {
            const searchBox = new window.google.maps.places.SearchBox(
                searchRef.current
            );

            searchBox.addListener("places_changed", () => {
                const places = searchBox.getPlaces();

                if (places && 0 < places.length) {
                    places.forEach((place) => {
                        const latitude = place.geometry.location.lat();
                        const longitude = place.geometry.location.lng();
                        const latLng = new window.google.maps.LatLng(
                            latitude,
                            longitude
                        );
                        map.setCenter(latLng);
                        onMarkerChange(
                            "location",
                            place.formatted_address || place.name,
                            position
                        );
                        onMarkerChange(
                            "latitude",
                            latitude.toString(),
                            position
                        );
                        onMarkerChange(
                            "longitude",
                            longitude.toString(),
                            position
                        );
                    });
                }
            });
        };

        return (
            <li className="drag-helper">
                <span className="eb-sortable-item">
                    <span
                        className="eb-sortable-title"
                        onClick={() => onTitleClick(position)}
                    >
                        {marker.title}
                    </span>
                    <TrashIcon
                        position={position}
                        onDeleteItem={onDeleteItem}
                    />
                </span>
                {clickedIndex === position && (
                    <div className="eb-google-map-marker-wrapper">
                        <TextControl
                            label={__("Location", "essential-blocks")}
                            value={marker.location}
                            onChange={(value) =>
                                onMarkerChange("location", value, position)
                            }
                            ref={searchRef}
                            onFocus={initSearch}
                        />
                        <TextControl
                            label={__("Latitude", "essential-blocks")}
                            value={marker.latitude}
                            onChange={(value) =>
                                onMarkerChange("latitude", value, position)
                            }
                        />
                        <TextControl
                            label={__("Longitude", "essential-blocks")}
                            value={marker.longitude}
                            onChange={(value) =>
                                onMarkerChange("longitude", value, position)
                            }
                        />
                        <TextControl
                            label={__("Title", "essential-blocks")}
                            value={marker.title}
                            onChange={(value) =>
                                onMarkerChange("title", value, position)
                            }
                        />
                        <TextareaControl
                            label={__("Description", "essential-blocks")}
                            value={marker.content}
                            onChange={(value) =>
                                onMarkerChange("content", value, position)
                            }
                        />
                        <ToggleControl
                            label={__(
                                "Use Custom Marker Image",
                                "essentail-blocks"
                            )}
                            checked={marker.showCustomIcon === "true"}
                            onChange={(value) => {
                                onMarkerChange(
                                    "showCustomIcon",
                                    value.toString(),
                                    position
                                );
                            }}
                        />
                        {marker.showCustomIcon === "true" && (
                            <>
                                <MediaUpload
                                    onSelect={({ id, url }) =>
                                        // setAttributes({ icon: url, imageId: id })
                                        // onMarkerChange("imageId", id, position),
                                        onMarkerChange(
                                            "imageUrl",
                                            url,
                                            position
                                        )
                                    }
                                    type="image"
                                    value={marker.url}
                                    render={({ open }) => {
                                        if (!marker.imageUrl) {
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
                                        } else {
                                            return (
                                                <ImageAvatar
                                                    imageUrl={marker.imageUrl}
                                                    onDeleteImage={(value) =>
                                                        onMarkerChange(
                                                            "imageUrl",
                                                            null,
                                                            position
                                                        )
                                                    }
                                                />
                                            );
                                        }
                                    }}
                                />
                            </>
                        )}
                        {marker.showCustomIcon !== "true" && (
                            <SelectControl
                                label={__("Map Marker", "essential-blocks")}
                                value={
                                    marker.icon ||
                                    "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
                                }
                                options={[
                                    {
                                        label: __("Red", "essential-blocks"),
                                        value:
                                            "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                                    },
                                    {
                                        label: __("Blue", "essential-blocks"),
                                        value:
                                            "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                                    },
                                    {
                                        label: __("Yellow", "essential-blocks"),
                                        value:
                                            "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
                                    },
                                    {
                                        label: __("Green", "essential-blocks"),
                                        value:
                                            "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
                                    },
                                    {
                                        label: __("Orange", "essential-blocks"),
                                        value:
                                            "https://maps.google.com/mapfiles/ms/icons/orange-dot.png",
                                    },
                                ]}
                                onChange={(value) =>
                                    onMarkerChange("icon", value, position)
                                }
                            />
                        )}
                    </div>
                )}
            </li>
        );
    }
);

const SortableList = SortableContainer(
    ({
        marker,
        clickedIndex,
        onDeleteItem,
        onTitleClick,
        onMarkerChange,
        map,
    }) => {
        return (
            <>
                <ul className="eb-sortable-google-map-marker">
                    {marker.map((item, index) => (
                        <SortableItem
                            key={`item-${index}`}
                            map={map}
                            index={index}
                            position={index}
                            onTitleClick={onTitleClick}
                            onMarkerChange={onMarkerChange}
                            marker={item}
                            // onTextChange={onTextChange}
                            clickedIndex={clickedIndex}
                            onDeleteItem={onDeleteItem}
                        />
                    ))}
                </ul>
            </>
        );
    }
);

class SortableMarker extends Component {
    state = {
        clickedIndex: 0, // Tracks index of clicked text
    };

    // Expand title when clicked
    onTitleClick = (position) => {
        let clickedIndex =
            this.state.clickedIndex === position ? null : position;
        this.setState({ clickedIndex });
    };

    onMarkerChange = (key, value, position) => {
        const newMarker = { ...this.props.marker[position] };
        const newMarkerList = [...this.props.marker];
        newMarkerList[position] = newMarker;
        newMarkerList[position][key] = value;
        this.props.setAttributes({ marker: newMarkerList });
    };

    // Marker delete callback
    onDeleteItem = (position) => {
        let marker = [...this.props.marker].filter(
            (_, index) => position !== index
        );
        this.props.setAttributes({ marker });
    };

    render() {
        return (
            <SortableList
                marker={this.props.marker}
                map={this.props.map}
                clickedIndex={this.state.clickedIndex}
                onTitleClick={this.onTitleClick}
                onMarkerChange={this.onMarkerChange}
                onDeleteItem={this.onDeleteItem}
                useDragHandle
            />
        );
    }
}

export default SortableMarker;
