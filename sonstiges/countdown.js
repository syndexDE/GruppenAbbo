var dateToReach = "07/28/2018 11:00:00"; /* Das Datum/die Uhrzeit für den Countdown */

function showTime() {
	/* Datums Differenz ausrechnen */
	var diff = new Date(dateToReach).getTime() - new Date().getTime();
	var days = Math.floor(diff / 1000 / 60 / 60 / 24);
	var hours = Math.floor(diff / 1000 / 60 / 60 % 24);
	var minutes = Math.floor(diff / 1000 / 60 % 60);
	var seconds = Math.floor(diff / 1000 % 60);

	/* Ergegbnisse in die Elemente reinschreiben */
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
}

function updateTime() { /* Diese Funktion wird nach dem Laden aufgerufen */
	showTime(); /* Zeit auf der Website aktualisieren */
	setTimeout("updateTime()", 1000) /* Eine Sekunde warten und Funktion erneut aufrufen */
}
