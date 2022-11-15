function updateTime(event) {
	let berlinDateElement = document.querySelector(".berlin .date");
	berlinDateElement.innerHTML = moment
		.tz("Europe/Berlin")
		.format("Do MMM YYYY");

	let berlinTimeElement = document.querySelector(".berlin .time");
	berlinTimeElement.innerHTML = moment
		.tz("Europe/Berlin")
		.format("[<small>]ddd[</small>] HH:mm:ss");

	let istanbulDateElement = document.querySelector(".istanbul .date");
	istanbulDateElement.innerHTML = moment
		.tz("Europe/Istanbul")
		.format("Do MMM YYYY");

	let istanbulTimeElement = document.querySelector(".istanbul .time");
	istanbulTimeElement.innerHTML = moment
		.tz("Europe/Istanbul")
		.format("[<small>]ddd[</small>] HH:mm:ss");

	let maritiusDateElement = document.querySelector(".mauritius .date");
	maritiusDateElement.innerHTML = moment
		.tz("Indian/Mauritius")
		.format("Do MMM YYYY");

	let mauritiusTimeElement = document.querySelector(".mauritius .time");
	mauritiusTimeElement.innerHTML = moment
		.tz("Indian/Mauritius")
		.format("[<small>]ddd[</small>] HH:mm:ss");
}

function showTime(event) {
	clearInterval(refreshIntervalId);
	console.log(event.target.value);

	setInterval(() => {
		let newCity = document.querySelector(".default-city");
		let cityTimeZone = event.target.value;

		if (cityTimeZone === "current") {
			cityTimeZone = moment.tz.guess();
		}
		cityName = cityTimeZone.split("/")[1];

		newCity.innerHTML = `<div class="city-info">
				<div><h2 class="city-name">${cityName}</h2>
					<div class="date"> ${moment.tz(cityTimeZone).format("Do MMM YYYY")} </div>
				</div>
				<div class="time"> ${moment
					.tz(cityTimeZone)
					.format("[<small>]ddd[</small>] HH:mm:ss")} </div>
			</div>
      <a href="/">Default cities homepage</a>`;
	}, 1000);
}

let refreshIntervalId = setInterval(updateTime, 1000);

let countrySelection = document.querySelector("#country-select");
countrySelection.addEventListener("change", showTime);
