$(window).scroll(function() {
    var x = document.getElementById("nav");
    if(this.scrollY <= 10){
        x.className = "";
    }
    else{
        x.className = "scrolled";
    }
});

$('#hamburger-menu').click(() => {
  $('#hamburger-menu').toggleClass('responsive');
  $('#myTopnav').toggleClass('responsive');
})

// var mybutton = document.getElementById("myBtn");
// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40) {
      $('#myBtn').fadeIn();

  }else{
    $('#myBtn').fadeOut();
  }
  });

  $('#myBtn').click(function(){
    $('html,body').animate({scrollTop : 0},100);
  });
});
