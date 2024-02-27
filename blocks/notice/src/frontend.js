document.addEventListener("DOMContentLoaded", function(event) {
	let notices = document.querySelectorAll(".eb-notice-wrapper");

	for (let i = 0; i < notices.length; i++) {
		let dismissButton = notices[i].querySelector(".eb-notice-dismiss");

		// Return if there is no dismiss button
		if (!dismissButton) {
			return;
		}

		notices[i].style.position = "relative";
		dismissButton.style.position = "absolute";
		dismissButton.style.right = "0px";
		dismissButton.style.top = "0px";

		// Hide notice if it's already closed
		let noticeId = notices[i].getAttribute("data-id");
		let showAgain = notices[i].getAttribute("data-show-again");
		let alreadyHidden = localStorage.getItem(
			`eb-notice-hidden-${noticeId}`
		);

		showAgain === "true" && showNoticeAgain(noticeId);
		showAgain === "false" &&
			alreadyHidden === "1" &&
			removeNotice(notices[i]);

		// Add click listener
		(function(i) {
			dismissButton.addEventListener("click", function() {
				onButtonClick(notices[i]);
			});
		})(i);
	}
});

function hidePermanently(noticeId) {
	localStorage.setItem(`eb-notice-hidden-${noticeId}`, "1");
}

function showNoticeAgain(noticeId) {
	localStorage.hasOwnProperty(`eb-notice-hidden-${noticeId}`) &&
		localStorage.removeItem(`eb-notice-hidden-${noticeId}`);
}

function removeNotice(notice) {
	notice.remove();
}

// Dismiss button click handler. Hide notice when clicked, hide permanently if
// 'Show After Dismiss' toggle is enabled
function onButtonClick(notice) {
	let noticeId = notice.getAttribute("data-id");
	let showAgain = notice.getAttribute("data-show-again");

	showAgain === "true" && showNoticeAgain(noticeId);
	showAgain === "false" && hidePermanently(noticeId);
	removeNotice(notice);
}
