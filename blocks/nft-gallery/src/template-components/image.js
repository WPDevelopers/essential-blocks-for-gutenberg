import { useEffect, useState } from "@wordpress/element";

import { PlaceholderImage } from "./icons/placeholder-image"

export default function Image(props) {
    const {
        item,
    } = props;

    const {
        name,
        token_id,
        image_url,
        image_thumbnail_url,
        image_preview_url,
        image_original_url
    } = item;

    const imageUrl = image_url || image_thumbnail_url || image_preview_url || image_original_url;

    return (
        <>
            {imageUrl && (
                <img src={imageUrl} alt={name || token_id} />
            )}
            {!imageUrl && (
                <PlaceholderImage />
            )}
        </>
    )
}