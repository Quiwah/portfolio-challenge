//Back to top arrow

// When the profile image is shown, add classes
$(window).on('load scroll', function() {
    add_class_in_scrolling($('#me'));
});
function add_class_in_scrolling(target) {
	var winScroll = $(window).scrollTop();
	var winHeight = $(window).height();
	var scrollPos = winScroll + winHeight;

	if(target.offset().top < scrollPos) {
		target.addClass('animated rubberBand show');
	}
}

//Contact form
$(function() {
    $('#contact-form').submit(function(e) {
      e.preventDefault();
      $(this).attr(
        'action',
        'mailto:quiwah@gmail.com');
      console.log($(this)[0].action);
      return true;
    });
});

//Write copyright
window.onload = function onLoad() {
    let year = (new Date()).getFullYear();
    document.getElementsByTagName("footer")[0].innerHTML = "&copy;" + year + " Quiwah";
    }