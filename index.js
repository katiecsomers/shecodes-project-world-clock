function updateTime() {
	let berlinDateElement = document.querySelector(".berlin .date");
	berlinDateElement.innerHTML = moment
		.tz("Europe/Berlin")
		.format("Do MMM YYYY");

	let istanbulTimeElement = document.querySelector(".istanbul .time");
	istanbulTimeElement.innerHTML = moment
		.tz("Europe/Istanbul")
		.format("[<small>]ddd[</small>] HH:mm:ss");

	let istanbulDateElement = document.querySelector(".istanbul .date");
	istanbulDateElement.innerHTML = moment
		.tz("Europe/Istanbul")
		.format("Do MMM YYYY");

	let berlinTimeElement = document.querySelector(".berlin .time");
	berlinTimeElement.innerHTML = moment
		.tz("Europe/Berlin")
		.format("[<small>]ddd[</small>] HH:mm:ss");
}

function showTime(event) {
	if (event.target.value.length > 0)
		setInterval(() => {
			let newCity = document.querySelector(".default-city");
			let cityTimeZone = event.target.value;

			if (cityTimeZone === "current") {
				cityTimeZone = moment.tz.guess();
			}

			cityName = cityTimeZone.split("/")[1];

			newCity.innerHTML = `<div class="city-info">
				<div><h2 class="city-name">${cityName}</h2>
					<div class="date"> ${moment.tz(event.target.value).format("Do MMM YYYY")} </div>
				</div>
				<div class="time"> ${moment
					.tz(event.target.value)
					.format("[<small>]ddd[</small>] HH:mm:ss")} </div>
			</div>`;

			clearInterval(refreshIntervalId);
		}, 1000);
}

let refreshIntervalId = setInterval(updateTime, 1000);

let countrySelection = document.querySelector("#country-select");
countrySelection.addEventListener("change", showTime);
