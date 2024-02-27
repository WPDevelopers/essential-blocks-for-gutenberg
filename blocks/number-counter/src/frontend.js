"use strict";
// converted to es5 for browser support reasons

window.addEventListener("DOMContentLoaded", function () {
	var counters = document.querySelectorAll(".eb-counter-wrapper  .eb-counter");
	if (!counters) return;

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

	// function 'textInsideFrontEnd' is for setting the innertext depending on whether separator should be shown and which separator should be shown
	function textInsideFrontEnd(value, isShowSeparator, separator) {
		return isShowSeparator === "true"
			? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
			: value.toString();
	}

	counters.forEach(function (counter) {
		var shoundAnimate = false;
		var target = +counter.getAttribute("data-target");
		var duration = +counter.getAttribute("data-duration");
		var startValue = +counter.getAttribute("data-startValue");
		var isShowSeparator = counter.getAttribute("data-isShowSeparator");
		var separator = counter.getAttribute("data-separator");

		var x = startValue < target ? startValue : 0;
		var increaseBy = ((target - x) / duration) * 53;

		var boundingClientRect = counter.getBoundingClientRect();
		var halfHeight = boundingClientRect.height / 2;
		var top = boundingClientRect.top;

		function updateCount() {
			x += increaseBy;
			counter.innerText = textInsideFrontEnd(
				Math.floor(x),
				isShowSeparator,
				separator
			);

			if (x < target) {
				setTimeout(function () {
					updateCount();
				}, 53);
			} else {
				counter.innerText = textInsideFrontEnd(
					target,
					isShowSeparator,
					separator
				);
			}
		}

		if (!shoundAnimate && top + halfHeight < innerHeight) {
			shoundAnimate = true;
			updateCount();
		}

		function handleAnimationOnScroll() {
			boundingClientRect = counter.getBoundingClientRect();
			top = boundingClientRect.top;

			if (!shoundAnimate && top + halfHeight < innerHeight) {
				shoundAnimate = true;
				updateCount();
			}
		}

		window.addEventListener("scroll", debounce(handleAnimationOnScroll));
	});
});
