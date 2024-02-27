/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
    MediaUpload,
    MediaPlaceholder,
    RichText,
    BlockControls,
    useBlockProps,
    BlockAlignmentToolbar,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarItem, ToolbarButton, Button } from "@wordpress/components";
import { Fragment, useEffect, useState, useRef, createRef } from "@wordpress/element";
import { select } from "@wordpress/data";
import ReactPlayer from "react-player";

/**
 * Internal depencencies
 */
import classnames from "classnames";

import Inspector from "./inspector";

import { isEmpty } from "lodash";

const {
    duplicateBlockIdFix,
    EBDisplayIcon
} = window.EBControls;

import Style from "./style";

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected, name } = props;
    const {
        resOption,
        blockId,
        blockMeta,
        videoConfig,
        showBar,
        videoURL,
        previewImage,
        imageOverlay,
        customPlayIcon,
        customPlayIconURL,
        videoOptions,
        placeholderImage,
        placeholderPlayIconURL,
        stickyPosition,
        classHook,
        lightboxPlayIcon,
        placeholderCustomPlayIconType,
        customPlayIconlib,
        lightboxPlayIconType,
        lightboxPlayIconlib,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = "eb-advanced-video";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });

    // show controls
    useEffect(() => {
        const url = videoURL;
        setAttributes({
            videoURL: "",
            showBar: showBar,
        });
        setTimeout(() => {
            setAttributes({
                videoURL: url,
                // showBar: showBar,
            });
        }, 10);
    }, [showBar]);

    const [preview, setPreview] = useState(false);
    useEffect(() => {
        if (imageOverlay && previewImage) {
            setPreview(previewImage);
        } else {
            setPreview(false);
        }
    }, [imageOverlay, previewImage]);

    const [videoPlayIcon, setVideoPlayIcon] = useState(null);
    useEffect(() => {
        if (customPlayIcon) {
            if (placeholderCustomPlayIconType == "image") {
                setVideoPlayIcon(<img src={customPlayIconURL} />);
            } else {
                setVideoPlayIcon(<EBDisplayIcon icon={customPlayIconlib} />);
            }
        } else {
            setVideoPlayIcon(null);
        }
    }, [customPlayIcon, customPlayIconURL, placeholderCustomPlayIconType, customPlayIconlib]);

    useEffect(() => {
        var element = document.querySelector(`#block-${clientId} .eb-selector-overlay`);
        if (element) {
            if (isSelected) {
                element.classList.add("selected");
            } else {
                element.classList.remove("selected");
            }
        }
    }, [isSelected]);

    useEffect(() => {
        if (videoConfig.autoplay && preview === false) {
            setAttributes({
                videoConfig: {
                    ...videoConfig,
                    muted: videoConfig.autoplay,
                },
            });
        }
    }, [videoConfig.autoplay]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <div {...blockProps}>
                <div className="eb-selector-overlay"></div> {/* Only for Editor */}
                <Style {...props} />
                <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                    <div className={`eb-advanced-video-wrapper ${blockId} ${videoOptions}`} data-id={blockId}>
                        {videoOptions != "lightbox" && (
                            <div className="eb-player-wrapper">
                                <div className={`eb-player-option ${videoOptions} ${stickyPosition}`}>
                                    <ReactPlayer
                                        url={videoURL}
                                        loop={videoConfig.loop}
                                        muted={videoConfig.muted}
                                        playing={videoConfig.autoplay}
                                        controls={showBar}
                                        light={preview}
                                        playIcon={videoPlayIcon}
                                        onClickPreview={() => {
                                            setAttributes({
                                                videoConfig: {
                                                    ...videoConfig,
                                                    autoplay: true,
                                                },
                                            });
                                        }}
                                        className="eb-react-player"
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                            </div>
                        )}

                        {videoOptions === "lightbox" && (
                            <>
                                <div
                                    id="myBtn"
                                    className="player-placeholder"
                                    style={{
                                        backgroundImage: "url( " + placeholderImage + ")",
                                    }}
                                >
                                    {lightboxPlayIcon && (
                                        <>
                                            {lightboxPlayIconType == "icon" && <EBDisplayIcon icon={lightboxPlayIconlib} />}
                                            {lightboxPlayIconType == "image" && placeholderPlayIconURL && (
                                                <img src={placeholderPlayIconURL} alt="" />
                                            )}
                                        </>
                                    )}
                                </div>

                                <div id="eb-modal" className="eb-modal-player">
                                    <span className="eb-modal-close">&times;</span>
                                    <div className="eb-player-wrapper">
                                        <div
                                            className={`eb-player-option ${videoOptions}`}
                                            data-url={videoURL}
                                            data-option={videoOptions}
                                            data-loop={videoConfig.loop}
                                            data-muted={videoConfig.muted}
                                            data-playing={videoConfig.autoplay}
                                            data-overlay={imageOverlay}
                                            data-light={preview}
                                            data-customPlayIcon={customPlayIcon}
                                            data-playicon={customPlayIconURL}
                                        ></div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
