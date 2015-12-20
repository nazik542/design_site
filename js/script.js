$(document).ready(function(){ 
	var window_height = $(window).height();
	console.log(window_height)
	var window_width = $(window).width();
	var header_height = parseInt($(".main_header").css("height"));
		if(window_height<window_width)
			$(".main_section").css("height",window_height - header_height+"px");
		else{
			$(".main_section").css("height",window_width *0.5 +"px");
		}

	$(window).resize(function(){
		window_height = $(window).height();
		window_width = $(window).width();
		header_height = parseInt($(".main_header").css("height"));
		if(window_height<window_width)
			$(".main_section").css("height",window_height - header_height+"px");
		else{
			$(".main_section").css("height",window_width *0.5 +"px");
		}
	})
}); 