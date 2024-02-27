import { render, createRef } from "@wordpress/element";
/**
 * External dependencies
 */
import Slider from "react-slick";

window.addEventListener("DOMContentLoaded", (event) => {
    const wrappers = document.getElementsByClassName(`eb-slider-wrapper`);

    for (let wrapper of wrappers) {
        let settings = JSON.parse(wrapper.getAttribute("data-settings"));
        let images = JSON.parse(wrapper.getAttribute("data-images"));
        let sliderContentType = wrapper.getAttribute("data-sliderContentType");
        let sliderType = wrapper.getAttribute("data-sliderType");
        let textAlign = wrapper.getAttribute("data-textAlign");
        let arrowNextIcon = wrapper.getAttribute("data-arrowNextIcon");
        let arrowPrevIcon = wrapper.getAttribute("data-arrowPrevIcon");
        let TitleTag = wrapper.getAttribute("data-titleTag") || 'h2';
        let ContentTag = wrapper.getAttribute("data-contentTag") || 'p';

        const slider = createRef();

        function SampleNextArrow(props) {
            const { className, style, onClick, arrowNextIcon } = props;
            return (
                <div
                    className={className}
                    style={{ ...style, display: "block" }}
                    onClick={onClick}
                >
                    <i aria-hidden="true" className={arrowNextIcon}></i>
                </div>
            );
        }

        function SamplePrevArrow(props) {
            const { className, style, onClick, arrowPrevIcon } = props;
            return (
                <div
                    className={className}
                    style={{ ...style, display: "block" }}
                    onClick={onClick}
                >
                    <i aria-hidden="true" className={arrowPrevIcon}></i>
                </div>
            );
        }

        settings.nextArrow = <SampleNextArrow arrowNextIcon={arrowNextIcon} />;
        settings.prevArrow = <SamplePrevArrow arrowPrevIcon={arrowPrevIcon} />;

        const sliderTypeClass = sliderType === 'content' ? 'eb-slider-type-content' : 'eb-slider-type-image';

        render(
            <Slider
                ref={slider}
                {...settings}
                key={`${settings.autoplay}-${settings.adaptiveHeight}`}
                className={sliderTypeClass}
            >
                {images.map((image) => (
                    <div className={`eb-slider-item ${sliderContentType}`}>
                        {sliderType === "image" &&
                            image.buttonUrl &&
                            image.isValidUrl && (
                                <>
                                    <a
                                        href={
                                            image.buttonUrl && image.isValidUrl
                                                ? image.buttonUrl
                                                : "#"
                                        }
                                        target={
                                            image.openNewTab
                                                ? "_blank"
                                                : "_self"
                                        }
                                        rel="noopener"
                                    >
                                        <img
                                            className="eb-slider-image"
                                            src={image.url}
                                            alt={
                                                image.alt
                                                    ? image.alt
                                                    : image.title
                                            }
                                        />
                                    </a>
                                </>
                            )}
                        {sliderType === "image" &&
                            !image.buttonUrl &&
                            !image.isValidUrlf && (
                                <img
                                    className="eb-slider-image"
                                    src={image.url}
                                    alt={image.alt ? image.alt : image.title}
                                />
                            )}
                        {sliderType === "content" && (
                            <>
                                <img
                                    className="eb-slider-image"
                                    src={image.url}
                                    alt={image.alt ? image.alt : image.title}
                                />
                                <div
                                    className={`eb-slider-content align-${textAlign}`}
                                >
                                    {image.title && image.title.length > 0 && (
                                        <>
                                            <TitleTag
                                                className="eb-slider-title"
                                                dangerouslySetInnerHTML={{
                                                    __html: image.title,
                                                }}
                                            ></TitleTag>
                                        </>

                                    )}
                                    {image.subtitle &&
                                        image.subtitle.length > 0 && (
                                            <ContentTag
                                                className="eb-slider-subtitle"
                                                dangerouslySetInnerHTML={{
                                                    __html: image.subtitle,
                                                }}
                                            ></ContentTag>
                                        )}
                                    <div className="eb-slider-button-wrapper">
                                        {image.showButton &&
                                            image.buttonText &&
                                            image.buttonText.length > 0 && (
                                                <a
                                                    href={
                                                        image.buttonUrl &&
                                                            image.isValidUrl
                                                            ? image.buttonUrl
                                                            : "#"
                                                    }
                                                    className="eb-slider-button"
                                                    target={
                                                        image.openNewTab
                                                            ? "_blank"
                                                            : "_self"
                                                    }
                                                    rel="noopener"
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            image.buttonText,
                                                    }}
                                                ></a>
                                            )}

                                        {image.showSecondButton &&
                                            image.secondButtonText &&
                                            image.secondButtonText.length >
                                            0 && (
                                                <a
                                                    href={
                                                        image.secondButtonUrl &&
                                                            image.isValidUrl
                                                            ? image.secondButtonUrl
                                                            : "#"
                                                    }
                                                    className="eb-slider-second-button"
                                                    target={
                                                        image.secondButtonOpenNewTab
                                                            ? "_blank"
                                                            : "_self"
                                                    }
                                                    rel="noopener"
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            image.secondButtonText,
                                                    }}
                                                ></a>
                                            )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </Slider>,
            wrapper
        );
    }
});
