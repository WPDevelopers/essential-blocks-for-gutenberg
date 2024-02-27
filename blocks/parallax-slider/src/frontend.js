document.addEventListener("DOMContentLoaded", function() {
	let sliders = document.querySelectorAll(".eb-parallax-container");

	sliders.forEach(function(slider) {
		let startIndex = parseInt(slider.getAttribute("data-start-index"), 10) || 1;
		let intensity = slider.getAttribute("data-intensity");
		let hasShadow = slider.getAttribute("data-shadow");
		let sliderWrapper = slider.querySelector(".eb-parallax-wrapper");
		let slides = slider.querySelectorAll(".slide");
		let buttons = slider.querySelectorAll(".slide__action");
		let previousBtn = slider.querySelector(".btn--previous");
		let nextBtn = slider.querySelector(".btn--next");
		let count = slides.length;
		let current = parseInt(startIndex, 10) || 0;

		/**
		 * Function definitions
		 */
		function onButtonClick(event) {
			event.preventDefault();
			let link = this.getAttribute("data-link");
			let openNewTab = this.getAttribute("data-new-tab");
			if (link) {
				if (openNewTab === "true") {
					window.open(link, "_blank");
				}
				else {
					window.open(link,"_self");
				}
			}
		}

		function wrapperTransform() {
			let translateX = `translateX(-${current * (100 / count)}%)`;
			sliderWrapper.style.setProperty("transform", translateX);
		}

		function removeAllClasses() {
			slides.forEach(function(slide) {
				slide.classList.remove(
					"slide--previous",
					"slide--current",
					"slide--next"
				);
			});
		}

		function addCssClasses(previous, current, next) {
			slides[current].classList.add("slide--current");

			if (slides[next]) {
				slides[next].classList.add("slide--next");
			}
			if (slides[previous]) {
				slides[previous].classList.add("slide--previous");
			}
		}

		function getNextPrevious(current) {
			return [current + 1, current - 1];
		}

		function updateNextPrevious(current) {
			return current === 0 ? [1, -1] : [current + 1, current - 1];
		}

		function onNextButtonClick() {
			let [next, previous] = getNextPrevious(current);
			current = next === slides.length ? 0 : next;
			[next, previous] = updateNextPrevious(current);

			wrapperTransform();
			removeAllClasses();
			addCssClasses(previous, current, next);
		}

		function onPreviousButtonClick() {
			let [next, previous] = getNextPrevious(current);
			current = previous === -1 ? slides.length - 1 : previous;
			[next, previous] = updateNextPrevious(current);

			wrapperTransform();
			removeAllClasses();
			addCssClasses(previous, current, next);
		}

		function onMouseLeave() {
			this.style.setProperty("--x", 0);
			this.style.setProperty("--y", 0);
		}

		function onMouseMove() {
			let r = this.getBoundingClientRect();
			this.style.setProperty(
				"--x",
				event.clientX - (r.left + Math.floor(r.width / 2))
			);
			this.style.setProperty(
				"--y",
				event.clientY - (r.top + Math.floor(r.height / 2))
			);
			this.style.setProperty("--d", intensity);
		}

		function onSlideClick() {
			let images = [...slides];
			current = images.indexOf(this);
			let [next, previous] = updateNextPrevious(current);

			wrapperTransform();
			removeAllClasses();
			addCssClasses(previous, current, next);
		}

		/**
		 * Dom manipulation
		 */

		slides.forEach(function(slide) {
			// Set current, next, previous classes
			addCssClasses(current - 1, current, current + 1);

			// Focus on starting image
			wrapperTransform();

			// Slider event listeners
			slide.addEventListener("click", onSlideClick);
			slide.addEventListener("mousemove", onMouseMove);
			slide.addEventListener("mouseleave", onMouseLeave);

			// Previous & Next button click event listeners
			previousBtn.addEventListener("click", onPreviousButtonClick);
			nextBtn.addEventListener("click", onNextButtonClick);
		});

		// Add button shadow class
		if (hasShadow == "true") {
			buttons.classList.add("btn-has-shadow");
		}

		// Button click event
		buttons.forEach(function(button) {
			button.addEventListener("click", onButtonClick);
		});
	});
});
