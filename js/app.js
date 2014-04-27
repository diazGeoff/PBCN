$(document).ready(function(){
	$('.first-content').scrolly({bgParallax: true});
	$('.buttons').click(function(){
		var location = $(this).attr('id');
		if(location == "learn-why"){
			$('.second-content').animatescroll({scrollSpeed: 2500, easing: 'easeInOutBack'});
		}else if(location == "what"){
			$('.third-content').animatescroll({scrollSpeed: 2500, easing: 'easeInOutBack'});
		}
	});
});