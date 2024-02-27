/**
 * Helper Functions
 */
export const handleTitle = (text, id, images, setAttributes) => {
    let updatedImageArray = images.map((item) => {
        if (item.id == id) {
            return { ...item, title: text };
        }
        return item;
    });

    setAttributes({ images: updatedImageArray });
};

export const handleSubtitle = (text, id, images, setAttributes) => {
    let updatedImageArray = images.map((item) => {
        if (item.id == id) {
            return { ...item, subtitle: text };
        }
        return item;
    });

    setAttributes({ images: updatedImageArray });
};

export const handleShowButton = (showButton, id, images, setAttributes) => {
    let updatedImageArray = images.map((item) => {
        if (item.id == id) {
            return { ...item, showButton: showButton };
        }
        return item;
    });

    setAttributes({ images: updatedImageArray });
};

export const handleButtonText = (buttonText, id, images, setAttributes) => {
    let updatedImageArray = images.map((item) => {
        if (item.id == id) {
            return { ...item, buttonText: buttonText };
        }
        return item;
    });

    setAttributes({ images: updatedImageArray });
};

const validURL = (str) => {
    var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$",
        "i"
    ); // fragment locator
    return !!pattern.test(str);
};

export const handleButtonURL = (buttonUrl, id, images, setAttributes) => {
    const validUrl = buttonUrl.length > 0 && validURL(buttonUrl);
    let updatedImageArray = images.map((item) => {
        if (item.id == id) {
            return {
                ...item,
                buttonUrl: buttonUrl,
                isValidUrl: validUrl,
            };
        }
        return item;
    });

    setAttributes({ images: updatedImageArray });
};

export const handleOpenNewTab = (openNewTab, id, images, setAttributes) => {
    let updatedImageArray = images.map((item) => {
        if (item.id == id) {
            return { ...item, openNewTab: openNewTab === true ? true : false };
        }
        return item;
    });

    setAttributes({ images: updatedImageArray });
};

export const handleShowSecondButton = (
    showSecondButton,
    id,
    images,
    setAttributes
) => {
    let updatedImageArray = images.map((item) => {
        if (item.id == id) {
            return { ...item, showSecondButton: showSecondButton };
        }
        return item;
    });

    setAttributes({ images: updatedImageArray });
};
export const handleSecondButtonText = (
    secondButtonText,
    id,
    images,
    setAttributes
) => {
    let updatedImageArray = images.map((item) => {
        if (item.id == id) {
            return { ...item, secondButtonText: secondButtonText };
        }
        return item;
    });

    setAttributes({ images: updatedImageArray });
};

export const handleSecondButtonURL = (
    secondButtonUrl,
    id,
    images,
    setAttributes
) => {
    const validUrl = secondButtonUrl.length > 0 && validURL(secondButtonUrl);
    let updatedImageArray = images.map((item) => {
        if (item.id == id) {
            return {
                ...item,
                secondButtonUrl: secondButtonUrl,
                isValidUrl: validUrl,
            };
        }
        return item;
    });

    setAttributes({ images: updatedImageArray });
};

export const handleSecondButtonOpenNewTab = (
    secondButtonOpenNewTab,
    id,
    images,
    setAttributes
) => {
    let updatedImageArray = images.map((item) => {
        if (item.id == id) {
            return {
                ...item,
                secondButtonOpenNewTab:
                    secondButtonOpenNewTab === true ? true : false,
            };
        }
        return item;
    });

    setAttributes({ images: updatedImageArray });
};
