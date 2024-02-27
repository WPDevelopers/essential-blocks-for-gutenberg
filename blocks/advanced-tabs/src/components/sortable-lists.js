/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { MediaUpload } from "@wordpress/block-editor";
import {
    ToggleControl,
    ButtonGroup,
    Button,
    TextControl,
} from "@wordpress/components";
import { select, dispatch } from "@wordpress/data";

/**
 * External dependencies
 */
import {
    SortableContainer,
    SortableElement,
    SortableHandle,
} from "react-sortable-hoc";

const { ImageAvatar, EBIconPicker } = EBControls;

import { addTab } from "../helpers";

const TrashIcon = ({ deleteProps: { deleteProfile, index } }) => (
    <span
        className="eb-social-delete-icon"
        style={{
            fontSize: 14,
            borderLeft: "1px solid #b4b4cb",
            lineHeight: "2.5em",
            flex: 2,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
        }}
        onClick={() => deleteProfile(index)}
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

const SortableItem = SortableElement(
    ({
        tab,
        deleteProps,
        itemNeededProps: {
            toggleItemExpansion,
            handleIconChange,
            handleDefaultActive,
            handleMediaTypeChange,
            handleImageUpload,
            handleTabImageDelete,
            handleCustomIdChange,
        },
    }) => {
        return (
            <div>
                <li
                    className="drag-helper"
                    onClick={() => {
                        toggleItemExpansion(tab.id);
                    }}
                >
                    <span className="eb-pricebox-sortable-item">
                        <span className="eb-pricebox-sortable-title">
                            {tab.text}
                        </span>
                        <DragHandle />
                        <TrashIcon deleteProps={deleteProps} />
                    </span>
                </li>
                {tab.isExpanded && (
                    <>
                        <ToggleControl
                            label={__("Active Initially", "essential-blocks")}
                            checked={tab.isDefault || false}
                            onChange={() => {
                                handleDefaultActive(tab.id);
                            }}
                        />

                        <ButtonGroup>
                            {[
                                {
                                    label: __("None", "essential-blocks"),
                                    value: "none",
                                },
                                {
                                    label: __("Icon", "essential-blocks"),
                                    value: "icon",
                                },
                                {
                                    label: __("Image", "essential-blocks"),
                                    value: "image",
                                },
                            ].map((item, index) => (
                                <Button
                                    key={index}
                                    isSecondary={tab.media !== item.value}
                                    isPrimary={tab.media === item.value}
                                    onClick={() => {
                                        handleMediaTypeChange({
                                            id: tab.id,
                                            value: item.value,
                                        });
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </ButtonGroup>

                        {tab.media === "icon" && (
                            <div>
                                <label>Icon</label>
                                <EBIconPicker
                                    value={tab.icon}
                                    onChange={(icon) => {
                                        handleIconChange({ icon, id: tab.id });
                                    }}
                                    title={""}
                                />
                            </div>
                        )}

                        {tab.media === "image" && (
                            <>
                                {!tab.imgUrl && (
                                    <MediaUpload
                                        onSelect={({ id, url }) => {
                                            handleImageUpload({
                                                imgId: id,
                                                imgUrl: url,
                                                tabId: tab.id,
                                            });
                                        }}
                                        type="image"
                                        value={tab.imgId}
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

                                {tab.imgUrl && (
                                    <ImageAvatar
                                        imageUrl={tab.imgUrl}
                                        onDeleteImage={() => {
                                            handleTabImageDelete(tab.id);
                                        }}
                                    />
                                )}
                            </>
                        )}
                        <TextControl
                            label={__("Custom ID", "essential-blocks")}
                            value={tab.customId}
                            onChange={(value) =>
                                handleCustomIdChange(value, tab.id)
                            }
                            help={__(
                                "Custom ID will be added as an anchor tag. For example, if you add ‘test’ as your custom ID, the link will become like the following: https://www.example.com/#test and it will open the respective tab directly.",
                                "essential-blocks"
                            )}
                        />
                    </>
                )}
            </div>
        );
    }
);

const SortableList = SortableContainer(
    ({ tabTitles, addNewTab, deleteProfile, itemNeededProps }) => {
        return (
            <>
                <ul>
                    {tabTitles.map((item, index) => {
                        const deleteProps = { deleteProfile, index };

                        return (
                            <SortableItem
                                key={`item-${index}`}
                                index={index}
                                tab={item}
                                deleteProps={deleteProps}
                                itemNeededProps={itemNeededProps}
                            />
                        );
                    })}
                </ul>

                <Button
                    icon="plus"
                    className="button add-eb-tab-button"
                    onClick={addNewTab}
                >
                    {__("Add Tab")}
                </Button>
            </>
        );
    }
);

const SortableLists = ({
    tabTitles,
    setAttributes,
    tabChildCount,
    clientId,
    blockId,
    handleTabTitleClick,
}) => {
    const onSortEnd = ({ newIndex, oldIndex }) => {
        const newTabTitles = [...tabTitles];
        newTabTitles.splice(newIndex, 0, newTabTitles.splice(oldIndex, 1)[0]);

        const innerBlocks = select("core/block-editor").getBlocks(clientId);
        innerBlocks.splice(newIndex, 0, innerBlocks.splice(oldIndex, 1)[0]);
        dispatch("core/block-editor")
            .replaceInnerBlocks(clientId, innerBlocks)
            .then(() => {
                setAttributes({ tabTitles: newTabTitles });
                // resetTabsOrder({ clientId, setAttributes, tabTitles: newTabTitles });
            });
    };

    const addNewTab = () => {
        addTab({
            setAttributes,
            tabChildCount,
            clientId,
            tabTitles,
            blockId,
            handleTabTitleClick,
        });
    };

    const deleteProfile = (index) => {
        //
        const innerBlocks = select("core/block-editor").getBlocks(clientId);

        if (innerBlocks.length > 1) {
            innerBlocks.splice(index, 1);
            const newTabTitles = [...tabTitles];
            newTabTitles.splice(index, 1);

            dispatch("core/block-editor")
                .replaceInnerBlocks(clientId, innerBlocks)
                .then(() => {
                    // resetTabsOrder({ clientId, setAttributes, tabTitles: newTabTitles });
                    setAttributes({
                        tabTitles: newTabTitles,
                        tabChildCount: tabChildCount - 1,
                    });
                });
        }
    };

    const handleIconChange = ({ icon, id }) => {
        const newTabTitles = tabTitles.map((item) => {
            if (item.id === id) {
                item.icon = icon;
            }
            return item;
        });

        setAttributes({ tabTitles: newTabTitles });
    };

    const toggleItemExpansion = (id) => {
        const newTabTitles = tabTitles.map((item) => {
            if (item.id === id) {
                item.isExpanded = !item.isExpanded;
            }
            return item;
        });

        setAttributes({ tabTitles: newTabTitles });
    };

    const handleDefaultActive = (id) => {
        const newTabTitles = tabTitles.map((item) => {
            if (item.id === id) {
                item.isDefault = !item.isDefault;
            } else {
                item.isDefault = false;
            }
            return item;
        });

        setAttributes({ tabTitles: newTabTitles });
    };

    const handleMediaTypeChange = ({ id, value }) => {
        const newTabTitles = tabTitles.map((item) => {
            if (item.id === id) {
                item.media = value;
            }
            return item;
        });

        setAttributes({ tabTitles: newTabTitles });
    };

    const handleImageUpload = ({ imgId, imgUrl, tabId }) => {
        const newTabTitles = tabTitles.map((item) => {
            if (item.id === tabId) {
                item.imgUrl = imgUrl;
                item.imgId = imgId;
            }
            return item;
        });

        setAttributes({ tabTitles: newTabTitles });
    };

    const handleTabImageDelete = (id) => {
        const newTabTitles = tabTitles.map((item) => {
            if (item.id === id) {
                item.imgUrl = null;
                item.imgId = null;
            }
            return item;
        });

        setAttributes({ tabTitles: newTabTitles });
    };

    const handleCustomIdChange = (value, id) => {
        const newTabTitles = tabTitles.map((item) => {
            if (item.id === id) {
                item.customId = value;
            }
            return item;
        });

        setAttributes({ tabTitles: newTabTitles });
    };

    const itemNeededProps = {
        handleIconChange,
        toggleItemExpansion,
        handleDefaultActive,
        handleMediaTypeChange,
        handleImageUpload,
        handleTabImageDelete,
        handleCustomIdChange,
    };

    return (
        <>
            <h4
                style={{
                    fontSize: "12px",
                    color: "#999",
                    fontStyle: "italic",
                }}
            >
                Click on these tab bars to expand or collapse more options for
                each tab.
                <br></br>
                Drag & drop (using the drag icon) to reorder the tabs
            </h4>
            <SortableList
                tabTitles={tabTitles}
                onSortEnd={onSortEnd}
                useDragHandle
                addNewTab={addNewTab}
                deleteProfile={deleteProfile}
                itemNeededProps={itemNeededProps}
            />
        </>
    );
};

export default SortableLists;
