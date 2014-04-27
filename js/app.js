$(document).ready(function(){
	$('.first-content').scrolly({bgParallax: true});
	$('.buttons').click(function(){
		var location = $(this).attr('id');
		if(location == "learn-why"){
			$('.second-content').animatescroll({scrollSpeed: 2000, easing: 'easeInOutBack'});
		}else if(location == "what"){
			$('.third-content').animatescroll({scrollSpeed: 2000, easing: 'easeInOutBack'});
		}
	});
	$('.second-content').waypoint(function(){
		$('#showbar').fadeIn('slow');				
	});
	$('.first-content').waypoint(function(){
		$('#showbar').fadeOut();
	}, {offset: 'bottom-in-view'});
	$.scrollUp();
});