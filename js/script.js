//Back to top arrow


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