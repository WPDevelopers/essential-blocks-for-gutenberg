import { RichText, useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
    const {
        blockId,
        sliderType,
        sliderContentType,
        images,
        arrows,
        adaptiveHeight,
        autoplay,
        autoplaySpeed,
        dots,
        fade,
        infinite,
        vertical,
        pauseOnHover,
        speed,
        initialSlide,
        textAlign,
        classHook,
        arrowNextIcon,
        arrowPrevIcon,
        dotPreset,
        isRTLEnable,
        titleTag,
        contentTag
    } = attributes;

    //Slider Settings
    const settings = {
        arrows,
        adaptiveHeight,
        autoplay,
        autoplaySpeed,
        dots,
        fade,
        infinite,
        pauseOnHover,
        slidesToShow: attributes.slideToShowRange,
        speed,
        vertical,
        currentSlide: 0,
        rtl: isRTLEnable,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow:
                        attributes.TABslideToShowRange ||
                        attributes.slideToShowRange,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow:
                        attributes.MOBslideToShowRange ||
                        attributes.slideToShowRange,
                },
            },
        ],
    };

    const sliderTypeClass = sliderType === 'content' ? 'eb-slider-type-content' : 'eb-slider-type-image';

    return (
        <div {...useBlockProps.save()}>
            <div
                className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
            >
                <div
                    className={`eb-slider-wrapper ${blockId}`}
                    data-settings={JSON.stringify(settings)}
                    data-images={JSON.stringify(images)}
                    data-sliderContentType={sliderContentType}
                    data-sliderType={sliderType}
                    data-textAlign={textAlign}
                    data-arrowNextIcon={arrowNextIcon}
                    data-arrowPrevIcon={arrowPrevIcon}
                    data-titleTag={titleTag}
                    data-contentTag={contentTag}
                >
                    <div className={sliderTypeClass}>
                        {images.map((image, index) => (
                            <div
                                className={`eb-slider-item ${sliderContentType}`}
                                key={index}
                            >
                                <img
                                    className="eb-slider-image"
                                    src={image.url}
                                />
                                {sliderType === "content" && (
                                    <div
                                        className={`eb-slider-content align-${textAlign}`}
                                    >
                                        {image.title &&
                                            image.title.length > 0 && (
                                                <RichText.Content
                                                    tagName={"h2"}
                                                    className="eb-slider-title"
                                                    value={image.title}
                                                />
                                            )}
                                        {image.subtitle &&
                                            image.subtitle.length > 0 && (
                                                <RichText.Content
                                                    tagName={"p"}
                                                    className="eb-slider-subtitle"
                                                    value={image.subtitle}
                                                />
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
                                                    >
                                                        <RichText.Content
                                                            value={
                                                                image.buttonText
                                                            }
                                                        />
                                                    </a>
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
                                                        className="eb-slider-button"
                                                        target={
                                                            image.secondButtonOpenNewTab
                                                                ? "_blank"
                                                                : "_self"
                                                        }
                                                        rel="noopener"
                                                    >
                                                        <RichText.Content
                                                            value={
                                                                image.secondButtonText
                                                            }
                                                        />
                                                    </a>
                                                )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;
