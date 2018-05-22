$(document).ready(function(){
	
	$('.r4-1-2v').click(function(e){
		$('#r4-1-2p').slideToggle(500);
		e.preventDefault();
	});
	
	$('.r4-4-6v').click(function(e){
		$('#r3-7p').slideToggle(500);
		e.preventDefault();
	});
	
});
