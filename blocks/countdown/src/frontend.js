document.addEventListener("DOMContentLoaded", function () {
	const countdowns = document.querySelectorAll(".eb-cd-wrapper > .eb-cd-inner");

	// Return if there is no countdown block
	if (!countdowns) return;

	for (let i = 0; i < countdowns.length; i++) {
		const element = countdowns[i];

		const fakeElement = { textContent: "3e" };

		const daySpan =
			element.querySelector(".cd-box-day > .eb-cd-digit") || fakeElement;
		const hourSpan =
			element.querySelector(".cd-box-hour > .eb-cd-digit") || fakeElement;
		const minuteSpan =
			element.querySelector(".cd-box-minute > .eb-cd-digit") || fakeElement;
		const secondSpan =
			element.querySelector(".cd-box-second > .eb-cd-digit") || fakeElement;

		const MINUTE_IN_SECONDS = 60;
		const HOUR_IN_SECONDS = 60 * MINUTE_IN_SECONDS;
		const DAY_IN_SECONDS = 24 * HOUR_IN_SECONDS;
		const WEEK_IN_SECONDS = 7 * DAY_IN_SECONDS;
		const MONTH_IN_SECONDS = 30 * DAY_IN_SECONDS;
		const YEAR_IN_SECONDS = 365 * DAY_IN_SECONDS;
		const HOUR_IN_MILISECONDS = 60 * 60 * 1000;

		const blockId = element.getAttribute("blockId");
		const evergreenTimer = element.getAttribute("data-is-evergreen-time");
		const evergreenTimerHours = element.getAttribute(
			"data-evergreen-time-hours"
		);

		const evergreenTimerMinutes = element.getAttribute(
			"data-evergreen-time-minutes"
		);
		const evergreenTimerRecurring = element.getAttribute(
			"data-evergreen-recurring"
		);
		const evergreenTimerRestartTime = element.getAttribute(
			"data-evergreen-restart-time"
		);
		const evergreenTimerDeadlineTime = element.getAttribute(
			"data-evergreen-deadline-time"
		);

		const timeLeft = (deadlineTimeStamp, intervalId = null) => {
			const now = Date.now();

			const secondsLeft = Math.round((deadlineTimeStamp - now) / 1000);
			const seconds = secondsLeft % 60;
			const minutes = Math.floor(secondsLeft / 60) % 60;
			const hours = Math.floor(secondsLeft / 3600) % 24;
			const days = Math.floor(secondsLeft / 86400);

			if (secondsLeft < 0) {
				clearInterval(intervalId);
				daySpan.textContent = "00";
				hourSpan.textContent = "00";
				minuteSpan.textContent = "00";
				secondSpan.textContent = "00";
				return;
			}

			daySpan.textContent = days < 10 ? `0${days}` : `${days}`;
			hourSpan.textContent = hours < 10 ? `0${hours}` : `${hours}`;
			minuteSpan.textContent = minutes < 10 ? `0${minutes}` : `${minutes}`;
			secondSpan.textContent = seconds < 10 ? `0${seconds}` : `${seconds}`;
		};

		if ("true" === evergreenTimer) {
			let evergreenInterval = blockId + "_evergreen_interval",
				evergreenTimeKey = blockId + "_evergreen_time",
				interval = localStorage.getItem(evergreenInterval),
				date = localStorage.getItem(evergreenTimeKey),
				hours = parseInt(evergreenTimerHours || 0) * HOUR_IN_SECONDS,
				minutes = parseInt(evergreenTimerMinutes || 0) * MINUTE_IN_SECONDS,
				evergreenTime = parseInt(hours + minutes);

			if (date === null || interval === null || interval != evergreenTime) {
				date = Date.now() + parseInt(evergreenTime) * 1000;
				localStorage.setItem(evergreenInterval, evergreenTime);
				localStorage.setItem(evergreenTimeKey, date);
			}

			if ("false" !== evergreenTimerRecurring) {
				let recurringAfter =
					parseFloat(evergreenTimerRestartTime) * HOUR_IN_MILISECONDS;

				if (parseInt(date) + recurringAfter < Date.now()) {
					date = Date.now() + parseInt(evergreenTime) * 1000;
					localStorage.setItem(evergreenTimeKey, date);
				}

				if (evergreenTimerDeadlineTime < date) {
					date = evergreenTimerDeadlineTime;
				}
			}

			timeLeft(date || 0);
			const intervalIdEver = setInterval(() => {
				timeLeft(date || 0, intervalIdEver);
			}, 1000);
		}
		if (null == evergreenTimer || "false" == evergreenTimer) {
			let deadlineTimeStamp = parseInt(
				element.getAttribute("data-deadline-time")
			);
			timeLeft(deadlineTimeStamp || 0);

			const intervalId = setInterval(() => {
				timeLeft(deadlineTimeStamp || 0, intervalId);
			}, 1000);
		}
	}
});
