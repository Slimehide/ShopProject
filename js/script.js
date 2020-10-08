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
	$(".payment__form .head__payment input").on("change" ,function(e){
		e.preventDefault();
		if ($(this).closest(".elem__payment").find(".card__payment").length) {
			$(this).closest(".elem__payment").find(".card__payment").slideDown(400);
		} else{
			$(".card__payment").slideUp(400);
		}
	});
	$(".elem__billing input").on("change" , function(e){
		e.preventDefault();
		if ($(this).closest(".elem__billing").find(".content__billing").length) {
			$(this).closest(".elem__billing").find(".content__billing").slideDown(400);
		} else{
			$(".content__billing").slideUp(400);
		}
	})
});