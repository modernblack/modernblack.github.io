var w = screen.width;
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
function forMobile() {
	w = screen.width;
	if (w <= 425) {
		$('.link_list').contents().unwrap();
		$('.img_list').contents().unwrap();
		$('.logos_container').contents().unwrap();
	}
	else {
		$('.new').contents().unwrap();
	}
}
forMobile();

$( window ).resize(function() {
    forMobile();
});