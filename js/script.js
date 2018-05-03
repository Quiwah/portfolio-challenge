//Back to top arrow
scrollTop('arrow', 500);
function scrollTop(elem,duration) {
let target = document.getElementById(elem);
target.addEventListener('click', function() {
let currentY = window.pageYOffset; 
let step = duration/currentY > 1 ? 10 : 100;
let timeStep = duration/currentY * step;
let intervalID = setInterval(scrollUp, timeStep);
function scrollUp(){
currentY = window.pageYOffset;
if(currentY === 0) {
clearInterval(intervalID);
} else {
scrollBy( 0, -step );
}
}
});
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