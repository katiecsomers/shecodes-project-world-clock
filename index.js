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
setInterval(updateTime, 1000);
