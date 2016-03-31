$(function () {
	$('.btn-blk').click(function (event) {
		event.preventDefault();

		$('.jumbotron').fadeOut(1000);
		$('.hid').delay(1000).slideDown(500);
		$('.hidlate').delay(1500).slideDown(500);
	});

 $('.reset').click(function (event) {
	 event.preventDefault();

	 $('.hidlate').slideUp(500);
	 $('.hid').delay(500).slideUp();
	 $('.footer').fadeOut(1000)
	 $('.jumbotron').delay(1500).fadeIn(1000);
	 $('.footer').delay(2000).fadeIn(1000)
	});

$('#mail').click(function (event) {
	event.preventDefault();

	alert('email: ebenewood@yahoo.com');

	});
});
