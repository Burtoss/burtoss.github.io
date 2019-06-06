$(function() {

	$(".header_top__menu").click(function() {
		$(this).toggleClass("hamburger--open");
	});

	$(".section_services_item_before button").click(function(){
		$(this).parent().siblings(".section_services_item_after").addClass("services_item_toggle");
	});
	$(".section_services_item_after button").click(function(){
		$(this).parent().removeClass("services_item_toggle");
	});

	$(".section_says_content").slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		fade: true,
		cssEase: 'ease',
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
	});

	$(".section_about_slider").slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		fade: true,
		cssEase: 'ease',
		autoplay: true,
		autoplaySpeed: 5000
	});
});
