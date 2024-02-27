/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, createRef } from "@wordpress/element";
import {
    MediaUpload,
    MediaPlaceholder,
    BlockControls,
    useBlockProps,
    RichText,
} from "@wordpress/block-editor";
import {
    ToolbarGroup,
    ToolbarItem,
    ToolbarButton,
} from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";

import Style from "./style";

import {
    SLIDE_TO_SHOW,
} from "./constants/constants";

import {
    handleTitle,
    handleSubtitle,
    handleShowButton,
    handleButtonText,
    handleSecondButtonText,
    handleButtonURL,
    handleOpenNewTab,
} from "./helpers";

const {
    generateResponsiveRangeStyles,
    duplicateBlockIdFix,
    isValidHtml,
    EBDisplayIcon
} = window.EBControls;

/**
 * External dependencies
 */
import classnames from "classnames";
import Slider from "react-slick";

export default function Edit(props) {
    const {
        attributes,
        setAttributes,
        className,
        clientId,
        isSelected,
        name
    } = props;
    const {
        resOption,
        blockId,
        blockMeta,
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
        isRTLEnable,
        titleTag,
        contentTag
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = "eb-slider";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });
        const { isRTL } = select("core/editor").getEditorSettings();
        setAttributes({ isRTLEnable: isRTL });

        // Default value for old version
        if (titleTag == undefined) { setAttributes({ titleTag: 'h2' }) }
        if (contentTag == undefined) { setAttributes({ contentTag: 'p' }) }
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });

    // range controller Slides to Show
    const {
        rangeStylesDesktop: slideToShowDesktop,
        rangeStylesTab: slideToShowTab,
        rangeStylesMobile: slideToShowMobile,
    } = generateResponsiveRangeStyles({
        controlName: SLIDE_TO_SHOW,
        property: "",
        attributes,
    });


    function SampleNextArrow(props) {
        const { className, style, onClick, arrowNextIcon } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <EBDisplayIcon icon={arrowNextIcon} />
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
                <EBDisplayIcon icon={arrowPrevIcon} />
            </div>
        );
    }

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
        nextArrow: <SampleNextArrow arrowNextIcon={arrowNextIcon} />,
        prevArrow: <SamplePrevArrow arrowPrevIcon={arrowPrevIcon} />,
        slidesToShow: parseInt(slideToShowDesktop.replace(/[^0-9]/g, "")),
        speed,
        initialSlide,
        vertical,
        currentSlide: 0,
        rtl: isRTLEnable,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: slideToShowTab
                        ? parseInt(slideToShowTab.replace(/[^0-9]/g, ""))
                        : parseInt(slideToShowDesktop.replace(/[^0-9]/g, "")),
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: slideToShowMobile
                        ? parseInt(slideToShowMobile.replace(/[^0-9]/g, ""))
                        : parseInt(slideToShowDesktop.replace(/[^0-9]/g, "")),
                },
            },
        ],
    };

    const slider = createRef();
    const hasImages = !!images.length;

    useEffect(() => {
        if (images.length > 0) {
            slider.current.slickGoTo(initialSlide);
        }
    }, [initialSlide]);

    function onImageSelect(selectedImages, images) {
        let updatedImages = [];
        selectedImages.map((selectedImage, selectedIndex) => {
            let item = {
                url: selectedImage.url,
                alt: selectedImage.alt,
                id: selectedIndex,
                imageId: selectedImage.id,
                caption: selectedImage.caption,
            };

            if (images.length > 0) {
                const thisImage = images.filter(
                    (data, index) => data.imageId === selectedImage.id
                );

                if (thisImage.length > 0) {
                    item.title = thisImage[0].title
                        ? thisImage[0].title
                        : `Slider ${selectedIndex + 1}`;
                    item.subtitle = thisImage[0].subtitle
                        ? thisImage[0].subtitle
                        : "Essential Blocks Slider Subtitle";
                    item.showButton = thisImage[0].showButton
                        ? thisImage[0].showButton
                        : true;
                    item.buttonText = thisImage[0].buttonText
                        ? thisImage[0].buttonText
                        : "See More";
                    item.buttonUrl = thisImage[0].buttonUrl;
                    item.openNewTab = thisImage[0].openNewTab
                        ? thisImage[0].openNewTab
                        : false;
                    item.isValidUrl = thisImage[0].isValidUrl;

                    item.showSecondButton = thisImage[0].showSecondButton
                        ? thisImage[0].showSecondButton
                        : false;
                    item.secondButtonText = thisImage[0].secondButtonText
                        ? thisImage[0].secondButtonText
                        : "See More";
                    item.secondButtonUrl = thisImage[0].secondButtonUrl;
                    item.secondButtonOpenNewTab = thisImage[0]
                        .secondButtonOpenNewTab
                        ? thisImage[0].secondButtonOpenNewTab
                        : false;
                } else {
                    item.title = selectedImage.caption
                        ? selectedImage.caption
                        : `Slider ${selectedIndex + 1}`;
                    item.subtitle = "Essential Blocks Slider Subtitle";
                    item.showButton = true;
                    item.buttonText = "See More";
                    item.buttonUrl = "";
                    item.openNewTab = false;
                    item.isValidUrl = true;

                    item.showSecondButton = false;
                    item.secondButtonText = "See More";
                    item.secondButtonUrl = "";
                    item.secondButtonOpenNewTab = false;
                }
            } else {
                item.title = selectedImage.caption
                    ? selectedImage.caption
                    : `Slider ${selectedIndex + 1}`;
                item.subtitle = "Essential Blocks Slider Subtitle";
                item.showButton = true;
                item.buttonText = "See More";
                item.buttonUrl = "";
                item.openNewTab = false;
                item.isValidUrl = true;

                item.showSecondButton = false;
                item.secondButtonText = "See More";
                item.secondButtonUrl = "";
                item.secondButtonOpenNewTab = false;
            }
            updatedImages.push(item);
        });
        setAttributes({ images: updatedImages });
    }

    // Show image placeholder if there is no image
    if (!hasImages) {
        return (
            <MediaPlaceholder
                addToGallery={hasImages}
                isAppender={hasImages}
                dropZoneUIOnly={hasImages && !isSelected}
                labels={{
                    title: !hasImages && __("Images", "essential-blocks"),
                    instructions:
                        !hasImages &&
                        __(
                            "Drag images, upload new ones or select files from your library."
                        ),
                }}
                onSelect={(selectedImages) =>
                    onImageSelect(selectedImages, images)
                }
                accept="image/*"
                allowedTypes={["image"]}
                multiple
                value={hasImages ? images : undefined}
            />
        );
    }
    // Add Second Button Properties
    if (images.length > 0) {
        images.map((image) => {
            if (!image.hasOwnProperty("showSecondButton")) {
                image.showSecondButton = false;
                image.secondButtonText = "See More";
                image.secondButtonUrl = "";
                image.secondButtonOpenNewTab = false;
            }
            return images;
        });
    }

    const sliderTypeClass = sliderType === 'content' ? 'eb-slider-type-content' : 'eb-slider-type-image';

    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                    slider={slider}
                />
            )}
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarItem>
                        {() => (
                            <MediaUpload
                                onSelect={(selectedImages) =>
                                    onImageSelect(selectedImages, images)
                                }
                                allowedTypes={["image"]}
                                multiple
                                gallery
                                value={images.map((img) => img.imageId)}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__(
                                            "Edit gallery",
                                            "essential-blocks"
                                        )}
                                        icon="edit"
                                        onClick={open}
                                    />
                                )}
                            />
                        )}
                    </ToolbarItem>
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <Style {...props} />

                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div className={`eb-slider-wrapper ${blockId}`}>
                        <Slider
                            ref={slider}
                            {...settings}
                            key={`${autoplay}-${adaptiveHeight}`}
                            className={sliderTypeClass}
                        >
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
                                                    <>
                                                        <RichText
                                                            tagName={titleTag}
                                                            className="eb-slider-title"
                                                            value={
                                                                isValidHtml(
                                                                    image.title
                                                                )
                                                                    ? image.title
                                                                    : "Invalid HTML Tag"
                                                            }
                                                            allowedFormats={[
                                                                "core/bold",
                                                                "core/italic",
                                                                "core/text-color",
                                                                "core/underline",
                                                                "core/link",
                                                            ]}
                                                            onChange={(text) =>
                                                                handleTitle(
                                                                    text,
                                                                    index,
                                                                    images,
                                                                    setAttributes
                                                                )
                                                            }
                                                        />
                                                    </>
                                                )}
                                            {image.subtitle &&
                                                image.subtitle.length > 0 && (
                                                    <>
                                                        <RichText
                                                            tagName={contentTag}
                                                            className="eb-slider-subtitle"
                                                            value={
                                                                isValidHtml(
                                                                    image.subtitle
                                                                )
                                                                    ? image.subtitle
                                                                    : "Invalid HTML Tag"
                                                            }
                                                            allowedFormats={[
                                                                "core/bold",
                                                                "core/italic",
                                                                "core/text-color",
                                                                "core/underline",
                                                                "core/link",
                                                            ]}
                                                            onChange={(text) =>
                                                                handleSubtitle(
                                                                    text,
                                                                    index,
                                                                    images,
                                                                    setAttributes
                                                                )
                                                            }
                                                        />
                                                    </>
                                                )}

                                            <div className="eb-slider-button-wrapper">
                                                {image.showButton &&
                                                    image.buttonText &&
                                                    image.buttonText.length >
                                                    0 && (
                                                        <>
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
                                                                <RichText
                                                                    value={
                                                                        isValidHtml(
                                                                            image.buttonText
                                                                        )
                                                                            ? image.buttonText
                                                                            : "Invalid HTML Tag"
                                                                    }
                                                                    allowedFormats={[
                                                                        "core/bold",
                                                                        "core/italic",
                                                                        "core/text-color",
                                                                        "core/underline",
                                                                    ]}
                                                                    onChange={(
                                                                        text
                                                                    ) =>
                                                                        handleButtonText(
                                                                            text,
                                                                            index,
                                                                            images,
                                                                            setAttributes
                                                                        )
                                                                    }
                                                                />
                                                            </a>
                                                        </>
                                                    )}
                                                {image.showSecondButton &&
                                                    image.secondButtonText &&
                                                    image.secondButtonText
                                                        .length > 0 && (
                                                        <>
                                                            <a
                                                                href={
                                                                    image.secondButtonUrl &&
                                                                        image.isValidUrl
                                                                        ? image.secondButtonUrl
                                                                        : "#"
                                                                }
                                                                className="eb-slider-second-button"
                                                                target={
                                                                    image.secondButtonopenNewTab
                                                                        ? "_blank"
                                                                        : "_self"
                                                                }
                                                                rel="noopener"
                                                            >
                                                                <RichText
                                                                    value={
                                                                        isValidHtml(
                                                                            image.secondButtonText
                                                                        )
                                                                            ? image.secondButtonText
                                                                            : "Invalid HTML Tag"
                                                                    }
                                                                    allowedFormats={[
                                                                        "core/bold",
                                                                        "core/italic",
                                                                        "core/text-color",
                                                                        "core/underline",
                                                                    ]}
                                                                    onChange={(
                                                                        text
                                                                    ) =>
                                                                        handleSecondButtonText(
                                                                            text,
                                                                            index,
                                                                            images,
                                                                            setAttributes
                                                                        )
                                                                    }
                                                                />
                                                            </a>
                                                        </>
                                                    )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}
