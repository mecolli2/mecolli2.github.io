$(document).ready(function(){
	
	$('.r1-1-5v').click(function(e){
		$('#r1-1-5p').slideToggle(500);
		$('footer').slideToggle(500);
		$('.thisnext').toggleClass('higher');
		e.preventDefault();
	});
	
	$('.r1-22v').click(function(e){
		$('#r1-22p').slideToggle(500);
		$('footer').slideToggle(500);
		e.preventDefault();
	});
	
});
