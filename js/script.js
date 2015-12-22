$(document).ready(function(){ 
	var window_height = $(window).height(); 
	var window_width = $(window).width();
	var header_height = parseInt($(".main_header").css("height"));
		if(window_height<window_width){
			$(".main_section").css("height",window_height - header_height+"px");
			$(".section1, .section2, .section3").css("height",window_height - 60+"px");
		}
		else{
			$(".main_section, .section1, .section2, .section3").css("height",window_width *0.5 +"px");
		}

	$(window).resize(function(){
		window_height = $(window).height();
		window_width = $(window).width();
		header_height = parseInt($(".main_header").css("height"));
		if(window_height<window_width){
			$(".main_section").css("height",window_height - header_height+"px");
			$(".section1, .section2, .section3").css("height",window_height - 60+"px");
		}
		else{
			$(".main_section, .section1, .section2, .section3").css("height",window_width *0.5 +"px");
		}
	})
	$(window).scroll(function(){
		if($(window).scrollTop()>=120){  
			$(".main_header").addClass("navFixed");
		}
		else{
			$(".main_header").removeClass("navFixed");
		}

		// if($(window).scrollTop()>window_height/3){
		// 	$(window).scrollTop( window_height);
		// }
	}) 
}); 
new WOW().init();