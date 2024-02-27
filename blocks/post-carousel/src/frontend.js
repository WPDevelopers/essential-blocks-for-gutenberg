/**
 * WordPress dependencies
 */
import apiFetch from "@wordpress/api-fetch";
const rootURL = EssentialBlocksLocalize
    ? EssentialBlocksLocalize.rest_rootURL
    : false;
apiFetch.use(apiFetch.createRootURLMiddleware(rootURL));

/**
 * External dependencies
 */
// import Slider from "react-slick";

window.addEventListener("DOMContentLoaded", (event) => {
    const wrappers = document.getElementsByClassName(
        `eb-post-carousel-wrapper`
    );

    for (let wrapper of wrappers) {
        const dataset = wrapper.dataset;
        let slider = dataset?.id;
        let settings = JSON.parse(dataset.slidersettings);
        let attributes = JSON.parse(dataset.attributes);

        let arrows = settings.arrows;
        let autoplay = settings.autoplay;
        let dots = settings.dots;
        let infinite = settings.infinite;
        let pauseOnHover = settings.pauseOnHover;
        let slideToShowRange = settings.slideToShowRange;
        let MOBslideToShowRange = settings.MOBslideToShowRange;
        let TABslideToShowRange = settings.TABslideToShowRange;
        let autoplaySpeed = settings.autoplaySpeed;
        let speed = settings.speed;

        (function ($) {
            $(".init-" + slider).slick({
                arrows,
                autoplay,
                dots,
                infinite,
                pauseOnHover,
                slidesToShow: slideToShowRange,
                autoplaySpeed,
                speed,
                prevArrow: `<div class='slick-arrow slick-prev'><i class='${attributes.leftArrowIcon}'></i></div>`,
                nextArrow: `<div class='slick-arrow slick-next'><i class='${attributes.rightArrowIcon}'></i></div>`,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: TABslideToShowRange,
                        },
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: MOBslideToShowRange,
                        },
                    },
                ],
            });
        })(jQuery);
    }
});
