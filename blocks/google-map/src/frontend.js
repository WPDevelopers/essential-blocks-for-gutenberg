import { GOOGLE_MAP_STYLES, SNAZZY_MAP_STYLES } from "./constants";
document.addEventListener("DOMContentLoaded", function (event) {
    let mapContainers = document.querySelectorAll(".eb-google-map-wrapper");

    if (mapContainers.length <= 0) {
        return;
    }

    if (!window.google) {
        return;
    }

    for (let i = 0; i < mapContainers.length; i++) {
        let map = mapContainers[i];

        let mapType = map.getAttribute("data-map-type");
        let mapZoom = map.getAttribute("data-map-zoom");
        let latitude = map.getAttribute("data-latitude") || "0";
        let longitude = map.getAttribute("data-longitude") || "0";
        let imageSize = map.getAttribute("data-image-size");
        let themeSource = map.getAttribute("data-theme-source");
        let googleMapStyle = map.getAttribute("data-google-style");
        let snazzyMapStyle = map.getAttribute("data-snazzy-style");
        let markers = JSON.parse(map.getAttribute("data-marker"));

        const googleMap = new window.google.maps.Map(map, {
            center: {
                lat: Number(markers[0].latitude) || Number(latitude),
                lng: Number(markers[0].longitude) || Number(longitude),
            },
            gestureHandling: "cooperative",
            zoom: markers.length === 1 ? parseInt(mapZoom) : 0,
            mapTypeId: mapType,
            zoomControl: mapZoom,
            styles:
                "google_theme" === themeSource
                    ? GOOGLE_MAP_STYLES[googleMapStyle]
                    : SNAZZY_MAP_STYLES[snazzyMapStyle],
        });

        if (markers && 0 < markers.length) {
            let bounds = new google.maps.LatLngBounds();
            markers.forEach((marker, index) => {
                const position = new window.google.maps.LatLng(
                    marker.latitude,
                    marker.longitude
                );
                let iconUrl =
                    "true" == marker.showCustomIcon
                        ? marker.imageUrl
                        : marker.icon;

                let icon =
                    iconUrl ||
                    "https://maps.google.com/mapfiles/ms/icons/red-dot.png";
                const mark = new window.google.maps.Marker({
                    position,
                    map: googleMap,
                    title: marker.title,
                    icon: {
                        url: icon,
                        scaledSize: new google.maps.Size(imageSize, imageSize),
                    },
                });

                if (marker.title || marker.content) {
                    const contentString = `<div class="eb-google-map-overview"><h6 class="eb-google-map-overview-title">${
                        marker.title
                    }</h6><div class="eb-google-map-overview-content">${
                        marker.content ? `<p>${marker.content}</p>` : ""
                    }</div></div>`;

                    bounds.extend(position);
                    const infowindow = new window.google.maps.InfoWindow({
                        content: contentString,
                    });

                    if (index == 0) {
                        infowindow.open(googleMap, mark);
                    }
                    mark.addListener("click", () => {
                        infowindow.open(googleMap, mark);
                    });
                    if (markers.length > 1) {
                        googleMap.fitBounds(bounds);
                    }
                }
            });
        }
    }
});
