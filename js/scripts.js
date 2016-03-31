var picList = [
	'http://www.palazzodiamanti.it/pix/fuoco_86.jpg',
	'http://www.palazzodiamanti.it/pix/fuoco_225.jpg',
	'http://www.palazzodiamanti.it/pix/fuoco_36.jpg',
	'http://www.palazzodiamanti.it/pix/fuoco_167.jpg'
];

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
	 $('#showcase').delay(250).fadeOut(1000)
	 $('.footer').fadeOut(1000)
	 $('.jumbotron').delay(1500).fadeIn(1000);
	 $('.footer').delay(2000).fadeIn(1000)
	});

$('#mail').click(function (event) {
	event.preventDefault();

	alert('email: ebenewood@yahoo.com');

	});

	var clickcount = 0;

	$('#look').click(function (event) {
		event.preventDefault();

		if (clickcount > 3) {
			  clickcount = 0
		};

		$('#showcase').empty();
		$('#showcase').fadeIn(500);
		$('.footer').fadeOut();

		var img = $("<img />").attr('src', picList[clickcount])
	    .on('load', function() {

	      $("#showcase").append(img);
				clickcount += 1;

	  });
	});
});
