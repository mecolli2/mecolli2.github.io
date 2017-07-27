$(document).ready(function(){
	
	$('#home').hover(function(){
		$('.highlight-container-1').toggleClass('lengthen');
	});
	
	$('#newest').hover(function(){
		$('.highlight-container-2').toggleClass('lengthen-2');
	});
	
	$('#pastors').hover(function(){
		$('.highlight-container-3').toggleClass('lengthen-3');
	});
	
	$('#books').hover(function(){
		$('.highlight-container-4').toggleClass('lengthen-4');
	});
	
	$('.video-verse').hover(function(){
		$('.video-verse').toggleClass('underline');
	});
	
	$('.menu-icon').click(function(e){
		$('.menu-icon').toggleClass('active');
		e.preventDefault();
	});
	
	if ($(window).width() < 768) {
		$('#books').click(function(y) {
			y.preventDefault();
			$('.links').animate({'left':'-100%'},500);
			$('.all-books').animate({'left':'0'},500);
			$('.chap-title').toggleClass('hide');
			console.log('less than ipad')
		});
	} else {
		$('#books').click(function(n){
			$('.links').toggleClass('lefter');
			$('.major-links').toggleClass('fixed');
			$('.links li').toggleClass('smaller');
			$('.all-books, .all-books-list, .all-chapters').animate({width:'toggle'}, 550);
			$('.individual-books').toggle(10);
			n.preventDefault();
			console.log('more than ipad')
		});	
	}
	
	var ww = $(window).width();
	$('.temporary').html(ww);
	
	$('.chap-title').click(function(n) {
		y.preventDefault();
		$('.links').animate({'left':'0'},500);
		$('.all-books').animate({'left':'100%'},500);
		$('.chap-title').toggleClass('hide');
	});
	
	$('.individual-books').click(function(){
		var rawClasses = $(this).attr('class').split(' ')[1];
		var classes = "c" + rawClasses;
		$('.' + classes).animate({width:'toggle'});
		console.log(classes);
	});
	
	$('.menu-icon').click(function(e){
		$('.big-menu, .links').slideToggle('go');
		$('html').toggleClass('overflow-hidden');
	});
	
	$('.next, .back').click(function(nb){
		nb.preventDefault();
	});
	
});
