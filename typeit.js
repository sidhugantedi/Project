
    (function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navbar-nav").hide();
    $(".navbar-brand").show();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 5) {
                $('.navbar-nav').fadeIn();
            } else {
                $('.navbar-nav').fadeOut();
            }
        });
    });
        //Typeit script
        $('#name').typeIt({
                 strings: ["Designer", "Maker", "Developer"],
                 speed: 150,
                 breakLines: false,
                 autoStart: true,
                 loop: true
            });
});
  }(jQuery));