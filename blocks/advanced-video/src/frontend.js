import { render } from "@wordpress/element";
import ReactPlayer from "react-player";

const AdvancedVideo = (props) => {
    const { wrapper, _autoplay, _muted } = props;

    let url = wrapper.getAttribute("data-url");
    let option = wrapper.getAttribute("data-option");
    let controls = wrapper.getAttribute("data-controls") === "true" ? true : false;
    let loop = wrapper.getAttribute("data-loop") === "true" ? true : false;
    let muted = _muted ? _muted : wrapper.getAttribute("data-muted") === "true" ? true : false;
    let autoplay = _autoplay ? _autoplay : wrapper.getAttribute("data-playing") === "true" ? true : false;
    let imageOverlay = wrapper.getAttribute("data-overlay") === "true" ? true : false;
    let previewImage = wrapper.getAttribute("data-light");
    let customPlayIcon = wrapper.getAttribute("data-customPlayIcon") === "true" ? true : false;
    let customPlayIconURL = wrapper.getAttribute("data-playicon");
    let customPlayIconType = wrapper.getAttribute("data-customPlayIconType");
    let customPlayIconLib = wrapper.getAttribute("data-customPlayIconLib");
    let download = wrapper.getAttribute("data-download");

    let preview;
    if (imageOverlay === true && previewImage) {
        preview = previewImage;
    } else {
        preview = false;
    }

    let videoPlayIcon;
    if (imageOverlay == true && customPlayIcon == true && customPlayIconType == "image") {
        videoPlayIcon = <img src={customPlayIconURL} />;
    } else if (imageOverlay == true && customPlayIcon == true && customPlayIconType == "icon") {
        videoPlayIcon = <i class={customPlayIconLib}></i>;
    } else {
        videoPlayIcon = null;
    }

    return (
        <>
            <ReactPlayer
                className="eb-react-player"
                width="100%"
                height="100%"
                url={url}
                controls={controls}
                loop={loop}
                muted={muted}
                playing={autoplay}
                light={preview}
                playIcon={videoPlayIcon}
                volume={0.5}
                config={{
                    file: {
                        attributes: {
                            controlsList: download === "false" ? "nodownload" : "",
                        },
                    },
                }}
            />
        </>
    );
};

document.addEventListener("DOMContentLoaded", (event) => {
    const advVideoWrappers = document.getElementsByClassName(`eb-advanced-video-wrapper`);
    for (let advVideoWrapper of advVideoWrappers) {
        let playerOptions = advVideoWrapper.getElementsByClassName("eb-player-option");
        let playerOption = playerOptions[0];
        let imageOverlay = playerOption.getAttribute("data-overlay") === "true" ? true : false;
        let videoId = playerOption.getAttribute("data-id");

        // sticky
        let option = playerOption.getAttribute("data-option");

        if (imageOverlay) {
            playerOption.addEventListener("click", (event) => {
                render(<AdvancedVideo wrapper={playerOption} _autoplay={true} _muted={false} />, playerOption);
            });
        }

        render(<AdvancedVideo wrapper={playerOption} />, playerOption);

        if (option === "eb-sticky") {
            var videoWrap = videoId;
            var $video = document.querySelector(".eb-player-option.eb-sticky");
            var videoHeight = $video.innerHeight;
            var height = document.querySelector(".eb-react-player").offsetHeight;
            var parent = playerOption.closest(".eb-sticky").closest(".wp-block-essential-blocks-advanced-video")
                .offsetTop;

            // close button
            var closeBtnEl = playerOption.querySelector(".eb-sticky-video-close");
            var closeSpan = document.createElement("span");
            closeSpan.innerHTML = "&times;";
            closeSpan.setAttribute("class", "eb-sticky-video-close");

            const scrollUp = "stuck-out";
            const scrollDown = "scroll-down";
            let lastScroll = 0;

            const stickyVisibility = playerOption.getAttribute("data-stickyVisibility");
            const stickyVisibilityTAB = playerOption.getAttribute("data-stickyVisibilityTAB");
            const stickyVisibilityMOB = playerOption.getAttribute("data-stickyVisibilityMOB");

            if (window.matchMedia("(min-width: 1025px)").matches && stickyVisibility != "hidden") {
                document.addEventListener("scroll", function () {
                    var videoBottomU = height + parent + 200;
                    var videoBottom = height + parent + 320;

                    const currentScroll = window.pageYOffset;
                    if (currentScroll <= videoBottomU) {
                        $video.classList.remove(scrollUp);
                        return;
                    }

                    if (window.scrollY > videoBottomU) {
                        if (window.scrollY > videoBottom) {
                            $video.classList.remove("stuck-out");
                            $video.classList.add("stuck");

                            if (closeBtnEl == null) {
                                $video.prepend(closeSpan);
                            }
                            closeSpan.style.display = "inline";

                            closeSpan.addEventListener("click", function () {
                                $video.classList.remove("eb-sticky");
                            });
                        } else {
                            if (currentScroll < lastScroll && $video.classList.contains("stuck")) {
                                // up
                                $video.classList.remove("stuck");
                                $video.classList.add(scrollUp);
                                // closeSpan.style.display = "none";
                            }
                            lastScroll = currentScroll;
                        }
                    } else {
                        $video.classList.remove("stuck-out");
                    }
                });
            }

            if (
                window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches &&
                stickyVisibilityTAB != "hidden"
            ) {
                document.addEventListener("scroll", function () {
                    var videoBottomU = height + parent + 200;
                    var videoBottom = height + parent + 320;

                    const currentScroll = window.pageYOffset;
                    if (currentScroll <= videoBottomU) {
                        $video.classList.remove(scrollUp);
                        return;
                    }

                    if (window.scrollY > videoBottomU) {
                        if (window.scrollY > videoBottom) {
                            $video.classList.remove("stuck-out");
                            $video.classList.add("stuck");

                            if (closeBtnEl == null) {
                                $video.prepend(closeSpan);
                            }
                            closeSpan.style.display = "inline";

                            closeSpan.addEventListener("click", function () {
                                $video.classList.remove("eb-sticky");
                            });
                        } else {
                            if (currentScroll < lastScroll && $video.classList.contains("stuck")) {
                                // up
                                $video.classList.remove("stuck");
                                $video.classList.add(scrollUp);
                                // closeSpan.style.display = "none";
                            }
                            lastScroll = currentScroll;
                        }
                    } else {
                        $video.classList.remove("stuck-out");
                    }
                });
            }
            if (window.matchMedia("(max-width: 767px)").matches && stickyVisibilityMOB != "hidden") {
                document.addEventListener("scroll", function () {
                    var videoBottomU = height + parent + 200;
                    var videoBottom = height + parent + 320;

                    const currentScroll = window.pageYOffset;
                    if (currentScroll <= videoBottomU) {
                        $video.classList.remove(scrollUp);
                        return;
                    }

                    if (window.scrollY > videoBottomU) {
                        if (window.scrollY > videoBottom) {
                            $video.classList.remove("stuck-out");
                            $video.classList.add("stuck");

                            if (closeBtnEl == null) {
                                $video.prepend(closeSpan);
                            }
                            closeSpan.style.display = "inline";

                            closeSpan.addEventListener("click", function () {
                                $video.classList.remove("eb-sticky");
                            });
                        } else {
                            if (currentScroll < lastScroll && $video.classList.contains("stuck")) {
                                // up
                                $video.classList.remove("stuck");
                                $video.classList.add(scrollUp);
                                // closeSpan.style.display = "none";
                            }
                            lastScroll = currentScroll;
                        }
                    } else {
                        $video.classList.remove("stuck-out");
                    }
                });
            }
        }

        if (advVideoWrapper.classList.contains("lightbox")) {
            const lightbox = advVideoWrapper.getAttribute("data-id");
            const lightboxWrapper = document.querySelector(`[data-id="${lightbox}"]`);

            let modalId = "#eb-modal-" + lightbox;
            let btnId = "#myBtn-" + lightbox;

            // Get the modal
            var modal = lightboxWrapper.querySelector(modalId);

            // Get the button that opens the modal
            var btn = lightboxWrapper.querySelector(btnId);

            // Get the <span> element that closes the modal
            var span = lightboxWrapper.getElementsByClassName("eb-modal-close")[0];

            // When the user clicks the button, open the modal
            btn.onclick = function () {
                const btnId = this.id;
                const wrapperId = btnId.substring(6);
                const wrapperModalId = "#eb-modal-" + wrapperId;
                const wrapperModal = document.querySelector(wrapperModalId);
                const modalLightbox = wrapperModal.getElementsByClassName("lightbox")[0];
                const modalAutoplay = modalLightbox.getAttribute("data-autoplay");

                wrapperModal.style.display = "block";

                if (modalAutoplay === "true") {
                    render(<AdvancedVideo wrapper={playerOption} _autoplay={true} _muted={false} />, playerOption);
                }
            };

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                const spanId = this.id;
                const wrapperId = spanId.substring(6);
                const wrapperModalId = "#eb-modal-" + wrapperId;

                var wrapperModal = document.querySelector(wrapperModalId);

                wrapperModal.style.display = "none";
                render(<AdvancedVideo wrapper={playerOption} _autoplay={false} />, playerOption);
            };

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target.classList.contains("eb-modal-player")) {
                    var wrapperModal = document.getElementById(event.target.id);
                    wrapperModal.style.display = "none";
                    render(<AdvancedVideo wrapper={playerOption} _autoplay={false} />, playerOption);
                }
            };
        }
    }
});
