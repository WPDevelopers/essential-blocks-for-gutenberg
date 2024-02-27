const isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <=
			(window.innerWidth || document.documentElement.clientWidth)
	);
};

const animate = function ({ duration, draw, timing }) {
	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		let progress = timing(timeFraction);

		draw(progress);

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	});
};

window.addEventListener("DOMContentLoaded", function (event) {
	var progressbars = document.querySelectorAll(".eb-progressbar");
	if (!progressbars) return;

	// function 'debounce' is used here for better performance when scroll event fires
	function debounce(func) {
		var wait =
			arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
		var immediate =
			arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
		var timeout;
		return function () {
			var context = this,
				args = arguments;

			function later() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}

			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}

	progressbars.forEach(function (progressbar) {
		var showedElement = false;
		var layout = progressbar.getAttribute("data-layout");
		var count = progressbar.getAttribute("data-count");
		var duration = progressbar.getAttribute("data-duration");

		function handleAnimationOnScroll() {
			setTimeout(function () {
				if (!showedElement && isInViewport(progressbar)) {
					animate({
						duration: duration,
						timing: function (timeFraction) {
							return timeFraction;
						},
						draw: function (progress) {
							var counter = Math.floor(progress * 100);
							if (counter <= count) {
								if (layout === "line" || layout === "line_rainbow") {
									progressbar.querySelector(
										".eb-progressbar-line-fill"
									).style.width = counter + "%";
								} else if (layout === "circle" || layout === "circle_fill") {
									var rotate = counter * 3.6;
									progressbar.querySelector(
										".eb-progressbar-circle-half-left"
									).style.transform = "rotate(" + rotate + "deg)";
									if (rotate > 180) {
										progressbar.querySelector(
											".eb-progressbar-circle-pie"
										).style.clipPath = "inset(0)";
										progressbar.querySelector(
											".eb-progressbar-circle-half-right"
										).style.visibility = "visible";
									}
								} else if (
									layout === "half_circle" ||
									layout === "half_circle_fill"
								) {
									var rotate = counter * 1.8;
									progressbar.querySelector(
										".eb-progressbar-circle-half"
									).style.transform = "rotate(" + rotate + "deg)";
								} else if (layout === "box") {
									progressbar.querySelector(
										".eb-progressbar-box-fill"
									).style.height = counter + "%";
								}
								if (progressbar.querySelector(".eb-progressbar-count")) {
									progressbar.querySelector(".eb-progressbar-count").innerText =
										counter;
								}
							}
						},
					});
					showedElement = true;
				}
			}, 20);
		}

		if (isInViewport(progressbar)) {
			handleAnimationOnScroll();
		}

		window.addEventListener("scroll", debounce(handleAnimationOnScroll));
	});
});
