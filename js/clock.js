$(document).on('ready', iniciarTemporizador);

function iniciarTemporizador(){
	var fechaFinal = new Date(2014, 09, 02, 12, 30, 00);
	var fechaHoy = new Date();

	var diferenciaMilisegundos = fechaFinal.getTime() - fechaHoy.getTime();
	var diferenciaSegundos = (diferenciaMilisegundos/1000);

	var clock = $("#mi-reloj").FlipClock({
		clockFace: 'DailyCounter'
	});

	clock.setTime(diferenciaSegundos);
	clock.setCountdown(true);
}