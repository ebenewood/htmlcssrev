
var picList = [
	'http://www.palazzodiamanti.it/pix/fuoco_86.jpg', //0
	'http://www.palazzodiamanti.it/pix/fuoco_225.jpg',//1
	'http://www.palazzodiamanti.it/pix/fuoco_36.jpg', //2
	'http://www.palazzodiamanti.it/pix/fuoco_167.jpg' //3
];

var jumboList = [
	'?',        //0
	'bored',    //1
	'boxed',    //2
	'filtered', //3
	'bubbled',  //4
	'feeling'   //5
]

function grow (selector) {

	for (i = 0; i <= jumboList.length -1; i ++) {

		selector.prepend(
		'<p style=\'font-size:' +
		((i + 1) * 2) +
		'em\'>' +
		jumboList[i] +
		'</p>');

	};
};

$(function () {

	var soundbar = document.getElementById('soundbar');
	var sbCanvas = soundbar.getContext('2d');

	var r = 1;
	var g = 1;
	var b = 1;

	$('#soundbar').mousemove(function () {

		sbCanvas.fillStyle =
		'rgb('+
		r +
		',' +
		g +
		',' +
		b
		+ ')'

		sbCanvas.fillRect (event.layerX, event.layerY, 4, 4);

		r += 1;
		g += 3;
		b += 5;

	});


	grow($('.jumbotron'));

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
