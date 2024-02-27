import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
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
        googleMapStyle,
        snazzyMapStyle,
        themeSource,
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
                        data-theme-source={themeSource}
                        data-google-style={googleMapStyle}
                        data-snazzy-style={snazzyMapStyle}
                        style={{ height: `${mapHeight}px` }}
                    ></div>
                </div>
            </div>
        </>
    );
};
export default Save;
