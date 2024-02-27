/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";

import attributes from "./attributes";

const deprecated = [
    {
        attributes: { ...attributes },
        supports: {
            anchor: true,
        },
        save: (props) => {
            const { attributes } = props;
            const {
                resOption,
                blockId,
                blockMeta,
                videoConfig,
                showBar,
                videoURL,
                videoOptions,
                placeholderImage,
                placeholderPlayIconURL,
                stickyPosition,
                imageOverlay,
                previewImage,
                lightboxPlayIcon,
                customPlayIcon,
                customPlayIconURL,
                classHook,
                lightboxPlayIconType,
                lightboxPlayIconlib,
                customPlayIconlib,
                placeholderCustomPlayIconType,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                        <div className={`eb-advanced-video-wrapper ${blockId} ${videoOptions}`} data-id={blockId}>
                            {videoOptions != "lightbox" && (
                                <div className={`eb-player-wrapper ${blockId}`}>
                                    <div
                                        className={`eb-player-option ${videoOptions} ${stickyPosition}`}
                                        data-id={blockId}
                                        data-url={videoURL}
                                        data-option={videoOptions}
                                        data-controls={showBar}
                                        data-loop={videoConfig.loop}
                                        data-muted={videoConfig.muted}
                                        data-playing={videoConfig.autoplay}
                                        data-overlay={imageOverlay}
                                        data-light={previewImage && previewImage.length > 0 ? previewImage : false}
                                        data-customPlayIconType={placeholderCustomPlayIconType}
                                        data-customPlayIconLib={customPlayIconlib}
                                        data-customPlayIcon={customPlayIcon}
                                        data-playicon={
                                            customPlayIconURL && customPlayIconURL.length > 0 ? customPlayIconURL : null
                                        }
                                    ></div>
                                </div>
                            )}

                            {videoOptions === "lightbox" && (
                                <>
                                    <div
                                        id={`myBtn-${blockId}`}
                                        className="player-placeholder"
                                        style={{
                                            backgroundImage: "url( " + placeholderImage + ")",
                                        }}
                                    >
                                        {lightboxPlayIcon && (
                                            <>
                                                {lightboxPlayIconType == "icon" && (
                                                    <i className={lightboxPlayIconlib} />
                                                )}
                                                {lightboxPlayIconType == "image" && placeholderPlayIconURL && (
                                                    <img src={placeholderPlayIconURL} alt="" />
                                                )}
                                            </>
                                        )}
                                    </div>

                                    <div id={`eb-modal-${blockId}`} className="eb-modal-player">
                                        <div className="eb-player-wrapper">
                                            <span id={`close-${blockId}`} className="eb-modal-close">
                                                &times;
                                            </span>
                                            <div
                                                className={`eb-player-option ${videoOptions}`}
                                                data-id={blockId}
                                                data-url={videoURL}
                                                data-option={videoOptions}
                                                data-loop={videoConfig.loop}
                                                data-muted={videoConfig.muted}
                                                data-playing={false}
                                                data-overlay={imageOverlay}
                                                data-controls={showBar}
                                                data-autoplay="true"
                                            ></div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: {
            ...attributes,
        },
        supports: {
            anchor: true,
        },
        save: (props) => {
            const { attributes } = props;

            const {
                resOption,
                blockId,
                blockMeta,
                videoConfig,
                showBar,
                videoURL,
                videoOptions,
                placeholderImage,
                placeholderPlayIconURL,
                stickyPosition,
                imageOverlay,
                previewImage,
                lightboxPlayIcon,
                customPlayIcon,
                customPlayIconURL,
                classHook,
                lightboxPlayIconType,
                lightboxPlayIconlib,
                customPlayIconlib,
                placeholderCustomPlayIconType,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                        <div className={`eb-advanced-video-wrapper ${blockId} ${videoOptions}`} data-id={blockId}>
                            {videoOptions != "lightbox" && (
                                <div className={`eb-player-wrapper ${blockId}`}>
                                    <div
                                        className={`eb-player-option ${videoOptions} ${stickyPosition}`}
                                        data-id={blockId}
                                        data-url={videoURL}
                                        data-option={videoOptions}
                                        data-controls={showBar}
                                        data-loop={videoConfig.loop}
                                        data-muted={videoConfig.muted}
                                        data-playing={videoConfig.autoplay}
                                        data-overlay={imageOverlay}
                                        data-light={previewImage && previewImage.length > 0 ? previewImage : false}
                                        data-customPlayIconType={placeholderCustomPlayIconType}
                                        data-customPlayIconLib={customPlayIconlib}
                                        data-customPlayIcon={customPlayIcon}
                                        data-playicon={
                                            customPlayIconURL && customPlayIconURL.length > 0 ? customPlayIconURL : null
                                        }
                                    ></div>
                                </div>
                            )}

                            {videoOptions === "lightbox" && (
                                <>
                                    <div
                                        id={`myBtn-${blockId}`}
                                        className="player-placeholder"
                                        style={{
                                            backgroundImage: "url( " + placeholderImage + ")",
                                        }}
                                    >
                                        {lightboxPlayIcon && (
                                            <>
                                                {lightboxPlayIconType == "icon" && (
                                                    <i className={lightboxPlayIconlib} />
                                                )}
                                                {lightboxPlayIconType == "image" && placeholderPlayIconURL && (
                                                    <img src={placeholderPlayIconURL} alt="" />
                                                )}
                                            </>
                                        )}
                                    </div>

                                    <div id={`eb-modal-${blockId}`} className="eb-modal-player">
                                        <div className="eb-player-wrapper">
                                            <span id={`close-${blockId}`} className="eb-modal-close">
                                                &times;
                                            </span>
                                            <div
                                                className={`eb-player-option ${videoOptions}`}
                                                data-id={blockId}
                                                data-url={videoURL}
                                                data-option={videoOptions}
                                                data-loop={videoConfig.loop}
                                                data-muted={videoConfig.muted}
                                                data-playing={false}
                                                data-overlay={imageOverlay}
                                                data-controls={showBar}
                                                data-autoplay="true"
                                            ></div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: {
            ...attributes,
            videoURL: {
                type: "string",
                default: "http://www.youtube.com/watch?v=PnZx4ZOMyzI",
            },
            previewImage: {
                type: "string",
                default: "https://essential-blocks.com/wp-content/uploads/2022/05/adv-video-placeholder.png",
            },
            placeholderImage: {
                type: "string",
                default: "https://essential-blocks.com/wp-content/uploads/2022/05/adv-video-placeholder.png",
            },
            customPlayIconURL: {
                type: "string",
                default: "https://essential-blocks.com/wp-content/uploads/2022/05/adv-video-playicon.svg",
            },
            placeholderPlayIconURL: {
                type: "string",
                default: "https://essential-blocks.com/wp-content/uploads/2022/05/adv-video-playicon.svg",
            },
        },
        supports: {
            anchor: true,
        },
        save: (props) => {
            const { attributes } = props;
            const {
                resOption,
                blockId,
                blockMeta,
                videoConfig,
                showBar,
                videoURL,
                videoOptions,
                placeholderImage,
                placeholderPlayIconURL,
                stickyPosition,
                imageOverlay,
                previewImage,
                lightboxPlayIcon,
                customPlayIcon,
                customPlayIconURL,
                classHook,
                lightboxPlayIconType,
                lightboxPlayIconlib,
                customPlayIconlib,
                placeholderCustomPlayIconType,
            } = attributes;

            return (
                <div {...useBlockProps.save()}>
                    <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                        <div className={`eb-advanced-video-wrapper ${blockId} ${videoOptions}`} data-id={blockId}>
                            {videoOptions != "lightbox" && (
                                <div className={`eb-player-wrapper ${blockId}`}>
                                    <div
                                        className={`eb-player-option ${videoOptions} ${stickyPosition}`}
                                        data-id={blockId}
                                        data-url={videoURL}
                                        data-option={videoOptions}
                                        data-controls={showBar}
                                        data-loop={videoConfig.loop}
                                        data-muted={videoConfig.muted}
                                        data-playing={videoConfig.autoplay}
                                        data-overlay={imageOverlay}
                                        data-light={previewImage && previewImage.length > 0 ? previewImage : false}
                                        data-customPlayIconType={placeholderCustomPlayIconType}
                                        data-customPlayIconLib={customPlayIconlib}
                                        data-customPlayIcon={customPlayIcon}
                                        data-playicon={
                                            customPlayIconURL && customPlayIconURL.length > 0 ? customPlayIconURL : null
                                        }
                                    ></div>
                                </div>
                            )}

                            {videoOptions === "lightbox" && (
                                <>
                                    <div
                                        id={`myBtn-${blockId}`}
                                        className="player-placeholder"
                                        style={{
                                            backgroundImage: "url( " + placeholderImage + ")",
                                        }}
                                    >
                                        {lightboxPlayIcon && (
                                            <>
                                                {lightboxPlayIconType == "icon" && (
                                                    <i className={lightboxPlayIconlib} />
                                                )}
                                                {lightboxPlayIconType == "image" && placeholderPlayIconURL && (
                                                    <img src={placeholderPlayIconURL} alt="" />
                                                )}
                                            </>
                                        )}
                                    </div>

                                    <div id={`eb-modal-${blockId}`} className="eb-modal-player">
                                        <div className="eb-player-wrapper">
                                            <span id={`close-${blockId}`} className="eb-modal-close">
                                                &times;
                                            </span>
                                            <div
                                                className={`eb-player-option ${videoOptions}`}
                                                data-id={blockId}
                                                data-url={videoURL}
                                                data-option={videoOptions}
                                                data-loop={videoConfig.loop}
                                                data-muted={videoConfig.muted}
                                                data-playing={false}
                                                data-overlay={imageOverlay}
                                                data-controls={showBar}
                                                data-autoplay="true"
                                            ></div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            );
        },
    },
];

export default deprecated;
