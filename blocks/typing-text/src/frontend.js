jQuery(document).ready(function ($) {
	$(".eb-typed-wrapper").each(function () {
		let typeSpeed = $(this).find('.eb-typed-content').data("type-speed"),
			startDelay = $(this).find('.eb-typed-content').data("start-delay"),
			smartBackspace = $(this).find('.eb-typed-content').data("smart-backspace"),
			backSpeed = $(this).find('.eb-typed-content').data("back-speed"),
			backDelay = $(this).find('.eb-typed-content').data("back-delay"),
			fade = $(this).find('.eb-typed-content').data("fade"),
			fadeDelay = $(this).find('.eb-typed-content').data("fade-delay"),
			loop = $(this).find('.eb-typed-content').data("loop"),
			showCursor = $(this).find('.eb-typed-content').data("cursor");

		// Generate array of strings for TypedJs
		let strings = [];
		$(this)
			.find(".eb-typed-text")
			.each(function () {
				strings.push(this.innerHTML);
			});

		$(this)
			.find(".eb-typed-view")
			.each(function () {
				new Typed(this, {
					strings: strings,
					typeSpeed: typeSpeed,
					startDelay: startDelay,
					smartBackspace: smartBackspace,
					backSpeed: backSpeed,
					backDelay: backDelay,
					fadeOut: fade,
					fadeOutDelay: fadeDelay,
					loop: loop,
					showCursor: showCursor,
				});
			});
	});
});
