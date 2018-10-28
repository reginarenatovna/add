$(window).ready(function(){
	$('.main_btn').on('click', function(){
		$('.modal').animate(
			{ height: "show"},3000);
		$('.overlay').animate({
			opacity: "show"
		}, 3000);
	});
	$('.close').on('click', function () {
		$('.modal').animate(
			{ height: "hide" }, 1000);
		$('.overlay').animate({
			opacity: "hide"
		}, 1000);
	});
 $(".main_mobmenu_field:eq(0) ul li:eq(1) a").on('click', function () {
		$('.modal').animate(
			{ height: "show" }, 3000);
		$('.overlay').animate({
			opacity: "show"
		}, 3000);
	});
	$('.main_btna').on('click', function () {
		$('.modal').animate(
			{ height: "show" }, 3000);
		$('.overlay').animate({
			opacity: "show"
		}, 3000);
	});
});