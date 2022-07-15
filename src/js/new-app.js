//= components/jquery.min.js
//= components/jquery.inputmask.min.js
//= components/jquery.mCustomScrollbar.js
$(function () {
	$('.mask-tell').inputmask("+375 (99)999-99-99", {

	});

	if (window.innerWidth >= 992) {
		$(".idea-head").mCustomScrollbar({});

	}
	window.addEventListener("resize", function () {
		if (window.innerWidth >= 992) {
			$(".idea-head").mCustomScrollbar({});
		} else {
			$(".idea-head").mCustomScrollbar("destroy");
		}
	});
})
