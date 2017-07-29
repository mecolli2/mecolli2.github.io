$(document).ready(function(){
	if ($(window).width() > 980){
		$('#home').hover(function(){
			$('.highlight-container-1').toggleClass('lengthen');
		});
		
		$('#newest').hover(function(){
			$('.highlight-container-3').toggleClass('lengthen-3');
		});
	
		$('#pastors').hover(function(){
			$('.highlight-container-4').toggleClass('lengthen-4');
		});
		
		$('#books').hover(function(){
			$('.highlight-container-2').toggleClass('lengthen-2');
		});
		
		$('.video-verse').hover(function(){
			$('.video-verse').toggleClass('underline');
		});
	}
	
	
	$('.menu-icon').click(function(e){
		$('.menu-icon').toggleClass('active');
		e.preventDefault();
	});
	
	if ($(window).width() < 981) {
		$('#books').click(function(y) {
			$('.links').animate({left:'-100%'},250);
			$('.all-books').animate({left:'0'},500);
			$('.chap-title').toggleClass('hide');
			y.preventDefault();
		});
		$('.chap-title1').click(function(y){
			$('.links').animate({left:'14%'},500);
			$('.all-books').animate({left:'100%'},500);
			$(this).toggleClass('hide');
		});
		$('.chap-title2').click(function(y){
			$('.all-chapters').animate({left:'100%'},500);
			$('.all-books').animate({left:'0'},500);
			$(this).toggleClass('hide');
		});
		$('.individual-books').click(function(){
			$('.all-books').animate({left:'-100%'},500);
			$('.all-chapters').animate({left:'0'},500);
			var rawClasses = $(this).attr('class').split(' ')[1];
			var classes = "c" + rawClasses;
			$('.' + classes).animate({width:'toggle'});
		});
	} else {
		$('#books').click(function(n){
			$('.links').toggleClass('lefter');
			$('.major-links').toggleClass('fixed');
			$('.links li').toggleClass('smaller');
			$('.all-books, .all-books-list, .all-chapters').animate({width:'toggle'}, 550);
			$('.individual-books').toggle(10);
			n.preventDefault();
		});
		$('.individual-books').click(function(){
			var rawClasses = $(this).attr('class').split(' ')[1];
			var classes = "c" + rawClasses;
			$('.' + classes).animate({width:'toggle'});
		});
	}
	
	var ww = $(window).width();
	$('.temporary').html(ww);
	
	$('.menu-icon').click(function(e){
		$('.big-menu, .links').slideToggle('go');
		$('html').toggleClass('overflow-hidden');
	});
	
	$('.next, .back').click(function(nb){
		nb.preventDefault();
	});
	
	$('.more-info h3').click(function(){
		$('.church-info').toggleClass('open', 500);
	});
	
});
