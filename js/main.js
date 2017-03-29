$(document).ready(function() {
	init();

	function init() {
		console.log('initializing');
		//$('.parallax-window').parallax();
		initEventHandlers();
		$('#calendar').fullCalendar({
        // put your options and callbacks here
    });
	}

	function initEventHandlers() {
		$(window).resize(resizeParallax);
	}

	function resizeParallax(event) {
		console.log(event);
		console.log($(document).width());
		$('.parallax-window').each(function() {
			console.log(this);
		});
	}




})