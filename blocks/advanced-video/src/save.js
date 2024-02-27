import { useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
    // const { blockId, showAfterDismiss, title, text } = attributes;

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
        stickyVisibilityOption,
        TABstickyVisibilityOption,
        MOBstickyVisibilityOption,
        showDownload,
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
                                data-stickyVisibility={stickyVisibilityOption}
                                data-stickyVisibilityTAB={TABstickyVisibilityOption}
                                data-stickyVisibilityMOB={MOBstickyVisibilityOption}
                                data-download={showDownload}
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
                                        {lightboxPlayIconType == "icon" && <i className={lightboxPlayIconlib} />}
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
};

export default save;
