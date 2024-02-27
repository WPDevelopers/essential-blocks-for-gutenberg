/**
 * Helper Functions
 */

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

export const handleCustomURL = (customLink, id, images, setAttributes) => {
    const validUrl = customLink.length > 0 && validURL(customLink);
    let updatedImageArray = images.map((item) => {
        if (item.id == id) {
            return {
                ...item,
                customLink: customLink,
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
