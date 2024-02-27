import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    VIDEO_WIDTH,
    VIDEO_BORDER_SHADOW,
    PLAY_ICON_WIDTH,
    STICKY_VIDEO_HEIGHT,
    STICKY_VIDEO_WIDTH,
    PLACEHOLDER_IMAGE_WIDTH,
    PLACEHOLDER_IMAGE_HEIGHT,
    PLACEHOLDER_PLAY_ICON_WIDTH,
    LIGHTBOX_WIDTH,
    LIGHTBOX_HEIGHT,
    LIGHTBOX_BORDER_SHADOW,
    CLOSE_ICON_WIDTH,
    STICKY_POSITION,
    stickyVisibility,
} from "./constants";

const {
    generateDimensionsAttributes,
    generateTypographyAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateResponsiveRangeAttributes,
    generateResponsiveSelectControlAttributes,
} = window.EBControls;

const attributes = {
    resOption: {
        type: "string",
        default: "Desktop",
    },

    // blockId attribute for making unique className and other uniqueness
    blockId: {
        type: "string",
    },
    blockRoot: {
        type: "string",
        default: "essential_block",
    },
    blockMeta: {
        type: "object",
    },
    videoURL: {
        type: "string",
        default: "https://www.youtube.com/watch?v=PnZx4ZOMyzI",
    },
    videoLinkYoutube: {
        type: "string",
        default: "",
    },
    videoLinkVimeo: {
        type: "string",
        default: "",
    },
    videoLinkHtml: {
        type: "string",
        default: "",
    },
    showBar: {
        type: "boolean",
        default: false,
    },
    showDownload: {
        type: "boolean",
        default: false,
    },
    videoConfig: {
        type: "object",
        default: {
            autoplay: false,
            muted: false,
            loop: false,
        },
    },
    imageOverlay: {
        type: "boolean",
        default: false,
    },

    previewImage: {
        type: "string",
        default: `${EssentialBlocksLocalize?.image_url}/adv-video-placeholder.png`,
    },
    previewImageId: {
        type: "string",
        default: null,
    },

    placeholderImage: {
        type: "string",
        default: `${EssentialBlocksLocalize?.image_url}/adv-video-placeholder.png`,
    },
    placeholderImageId: {
        type: "string",
        default: null,
    },

    customPlayIcon: {
        type: "boolean",
        default: true,
    },

    placeholderCustomPlayIconType: {
        type: "string",
        default: "image",
    },

    customPlayIconlib: {
        type: "string",
        default: "fas fa-play-circle",
    },
    customPlayIconlibColor: {
        type: "string",
        default: "#fff",
    },
    customPlayIconURL: {
        type: "string",
        default: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/adv-video-playicon.svg",
    },
    customPlayIconId: {
        type: "string",
        default: null,
    },

    placeholderPlayIconURL: {
        type: "string",
        default: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/adv-video-playicon.svg",
    },
    lightboxPlayIcon: {
        type: "boolean",
        default: true,
    },

    lightboxPlayIconType: {
        type: "string",
        default: "image",
    },

    lightboxPlayIconlib: {
        type: "string",
        default: "fas fa-play-circle",
    },
    lightboxPlayIconlibColor: {
        type: "string",
        default: "#fff",
    },
    placeholderPlayIconId: {
        type: "string",
        default: "",
    },

    videoOptions: {
        type: "string",
        default: "none",
    },

    image: {
        type: "object",
        default: {
            id: "",
            url: "",
            alt: "",
        },
    },

    selectedImgIndex: {
        type: "number",
    },

    closeIconColor: {
        type: "string",
        default: "#000000",
    },
    closeIconBgColor: {
        type: "string",
        default: "#ffffff",
    },

    lightboxBGColor: {
        type: "string",
        default: "rgba(0 0 0 / 0.4)",
    },

    textAlign: {
        type: "string",
        default: "center",
    },

    stickyPosition: {
        type: "string",
        default: "right",
    },
    videoAlignment: {
        type: "string",
        default: "center",
    },

    // margin padding attributes ⬇
    ...generateDimensionsAttributes(WRAPPER_MARGIN),
    ...generateDimensionsAttributes(WRAPPER_PADDING),

    // border shadow attributes ⬇
    ...generateBorderShadowAttributes(WRAPPER_BORDER_SHADOW, {
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
        // noShadow: true,
        // noBorder: true,
    }),
    ...generateBorderShadowAttributes(VIDEO_BORDER_SHADOW, {
        defaultBdrColor: "#AE62D1",
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
        rdsDefaults: {
            top: 10,
            bottom: 10,
            right: 10,
            left: 10,
        },
        // noShadow: true,
        // noBorder: true,
    }),

    ...generateBorderShadowAttributes(LIGHTBOX_BORDER_SHADOW, {
        defaultBdrColor: "#AE62D1",
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
        rdsDefaults: {
            top: 10,
            bottom: 10,
            right: 10,
            left: 10,
        },
        // noShadow: true,
        // noBorder: true,
    }),

    // background attributes ⬇
    ...generateBackgroundAttributes(WRAPPER_BG, {
        defaultBgGradient: "linear-gradient(45deg,#ffffff,#ffffff)",
        noOverlay: true,
    }),

    // range controller Separator Line Grid Column
    ...generateResponsiveRangeAttributes(VIDEO_WIDTH, {
        // defaultRange: 300,
    }),
    // range controller Separator Image Gap
    ...generateResponsiveRangeAttributes(PLAY_ICON_WIDTH, {
        defaultRange: 60,
    }),
    // range controller Separator Sticky Video Width
    ...generateResponsiveRangeAttributes(STICKY_VIDEO_WIDTH, {
        // defaultRange: 300,
    }),
    // range controller Separator Sticky Video Width
    ...generateResponsiveRangeAttributes(STICKY_VIDEO_HEIGHT, {
        // defaultRange: 300,
    }),

    // range controller Separator Placeholder image width
    ...generateResponsiveRangeAttributes(PLACEHOLDER_IMAGE_WIDTH, {
        // defaultRange: 300,
    }),

    // range controller Separator Placeholder image height
    ...generateResponsiveRangeAttributes(PLACEHOLDER_IMAGE_HEIGHT, {
        defaultRange: 400,
    }),
    // range controller Separator Placeholder play icons width
    ...generateResponsiveRangeAttributes(PLACEHOLDER_PLAY_ICON_WIDTH, {
        defaultRange: 60,
    }),

    // range controller Separator Placeholder play icons width
    ...generateResponsiveRangeAttributes(LIGHTBOX_WIDTH, {
        defaultRange: 60,
        defaultUnit: "%",
    }),

    // range controller Separator Placeholder play icons width
    ...generateResponsiveRangeAttributes(LIGHTBOX_HEIGHT, {
        defaultRange: 70,
        defaultUnit: "vh",
    }),

    // range controller Separator Placeholder play icons width
    ...generateResponsiveRangeAttributes(CLOSE_ICON_WIDTH, {
        defaultRange: 30,
    }),

    ...generateResponsiveSelectControlAttributes(stickyVisibility),
};

export default attributes;
