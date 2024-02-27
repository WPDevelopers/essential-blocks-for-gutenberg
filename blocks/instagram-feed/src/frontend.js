window.addEventListener("DOMContentLoaded", (event) => {
	const instagrams = document.getElementsByClassName(`eb-instagram__gallery`);

	setTimeout(() => {
		for (let instagram of instagrams) {
			var iso;

			imagesLoaded(instagram, function () {
				iso = new Isotope(instagram, {
					itemSelector: ".instagram__gallery__col",
					percentPosition: true,
					masonry: {
						columnWidth: ".instagram__gallery__col",
					},
				});
			});
		}
	}, 1000);
});
