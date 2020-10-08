$(document).ready(function(){
	$(".head__faq").on("click" ,function(e){
		e.preventDefault();
		if ($(this).hasClass("active__faq")) {
			$(this).removeClass('active__faq');
			$(this).closest('.elem__faq').find(".content__faq").slideUp(400);
		} else {
			$(this).addClass('active__faq');
			$(this).closest('.elem__faq').find(".content__faq").slideDown(400);
		}
	});
});