$(document).ready(function(){
	$("#btn_open_menu_lateral").click(function(){
		$("#container_menu_esquerda").animate({width:'toggle'},200);
		$(".header_menu_lateral").animate({width:'toggle'},200);
		$(".section_menu_lateral").animate({width:'toggle'},200);
		$(".footer_menu_lateral").animate({width:'toggle'},200);
	});

	$("#container_menu_esquerda").mouseleave(function(){
		$("#container_menu_esquerda").animate({width:'toggle'},200);
		$(".header_menu_lateral").animate({width:'toggle'},200);
		$(".section_menu_lateral").animate({width:'toggle'},200);
		$(".footer_menu_lateral").animate({width:'toggle'},200);
	});	

});
