/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";
const { omit } = lodash;

import attributes from "./attributes";

const deprecated = [
    {
        attributes: omit({ ...attributes }, [
            "googleMapStyle",
            "snazzyMapStyle",
            "themeSource",
        ]),
        save: ({ attributes }) => {
            const {
                blockId,
                classHook,
                mapType,
                mapZoom,
                mapHeight,
                latitude,
                longitude,
                searchAddress,
                imageSize,
                marker,
            } = attributes;

            return (
                <>
                    <div {...useBlockProps.save()}>
                        <div
                            className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                        >
                            <div
                                id={blockId}
                                className={`${blockId} eb-google-map-wrapper`}
                                data-map-type={mapType}
                                data-map-zoom={mapZoom}
                                data-latitude={latitude}
                                data-longitude={longitude}
                                data-search-address={searchAddress}
                                data-marker={JSON.stringify(marker)}
                                data-image-size={imageSize || 32}
                                style={{ height: `${mapHeight}px` }}
                            ></div>
                        </div>
                    </div>
                </>
            );
        },
    },
];

export default deprecated;
