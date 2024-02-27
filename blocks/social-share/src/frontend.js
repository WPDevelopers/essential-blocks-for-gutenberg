document.addEventListener("DOMContentLoaded", function (event) {
	const socialShareLinks = document.querySelectorAll(
		".eb-social-share-wrapper"
	);

	if (!socialShareLinks) return;

	socialShareLinks.forEach(function (socialShareLink) {
		const links = socialShareLink.querySelectorAll("ul.eb-social-shares li a");
		for (let i = 0; i < links.length; i++) {
			links[i].addEventListener("click", function (e) {
				e.preventDefault();
				let link = this.getAttribute("href");
				window.open(
					link,
					"",
					" scrollbars=yes,menubar=no,width=500,height=400,resizable=yes,toolbar=no,location=no,status=no"
				);
			});

			links[i].addEventListener("mouseenter", function (e) {
				e.preventDefault();
				links[i].classList.add("eb-slide-out");
			});

			links[i].addEventListener("mouseleave", function (e) {
				e.preventDefault();
				links[i].classList.remove("eb-slide-out");
			});
		}
	});
});
