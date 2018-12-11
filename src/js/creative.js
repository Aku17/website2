(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  // $('body').scrollspy({
  //   target: '#mainNav',
  //   offset: 57
  // });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();

  sr.reveal('.sr-icon-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-icon-2', {
    delay: 400,
    scale: 0
  });
  sr.reveal('.sr-icon-3', {
    delay: 600,
    scale: 0
  });
  sr.reveal('.sr-icon-4', {
    delay: 800,
    scale: 0
  });
  sr.reveal('.sr-button', {
    delay: 200,
    distance: '15px',
    origin: 'bottom',
    scale: 0.8
  });
  sr.reveal('.sr-contact-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-contact-2', {
    delay: 400,
    scale: 0
  });

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict

$(document).ready(function() {

  // biz slider

  $('.owl-carousel').owlCarousel({

      autoplay: true,
      loop: true,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              nav: true
          },
          600: {
              items: 2,
              nav: false
          },
          1000: {
              items: 2,
              nav: true,
              loop: true
          }
      }
  });

  // Includin header & footer

  //$('#header-new').load("include/header.html");    

  $('#header-new').load("include/header.html", function() {

      path_class();

  });

  $('#new-footer').load("include/footer.html", function() {

      form_validation();

  });


  // menu toggle

  $(".mb-nav").click(function() {

      $(".main-nav").toggle();

      $(this).toggleClass("rot");

      $("#main-menu-overlay").toggleClass("o-active");

  });

  // custom swipe section

  // swipe 1

  $('.swipe-1 .nav-tabs li').click(function() {

      $(this).addClass('active').siblings().removeClass('active');

      var attr = $(this).children('a').attr("data-roles");

      // var newAttr = attr.replace("#", "");

      $(".swipe-1 .tab-content .tab-pane").removeClass("active");

      $(".swipe-1 .tab-content").find('#' + attr).addClass("active");

  });

  $(".swipe-1 .card").swipe({

      swipeLeft: function(event, direction, distance, duration, fingerCount) {

          $(".swipe-1 .nav-tabs li.active").next('li').addClass("active");

          $(".swipe-1 .nav-tabs li.active").prev('li').removeClass("active");

          var newText = $('.nav-tabs li.active');

          var attr = newText.children('a').attr("data-roles");

          // var newAttr = attr.replace("#", "");

          $(".swipe-1 .tab-content .tab-pane").removeClass("active");

          $(".swipe-1 .tab-content").find('#' + attr).addClass("active");

      },

      swipeRight: function(event, direction, distance, duration, fingerCount) {

          $(".swipe-1 .nav-tabs li.active").prev('li').addClass("active");

          $(".swipe-1 .nav-tabs li.active").next('li').removeClass("active");

          var newText = $('.nav-tabs li.active');

          var attr = newText.children('a').attr("data-roles");

          // var newAttr = attr.replace("#", "");

          $(".swipe-1 .tab-content .tab-pane").removeClass("active");

          $(".swipe-1 .tab-content").find('#' + attr).addClass("active");

      }

  });

  // swipe-2

  $('.swipe-2 .nav-tabs li').click(function() {

      $(this).addClass('active').siblings().removeClass('active');

      var attr = $(this).children('a').attr("data-roles");

      // var newAttr = attr.replace("#", "");

      $(".swipe-2 .tab-content .tab-pane").removeClass("active");

      $(".swipe-2 .tab-content").find('#' + attr).addClass("active");

  });

  $(".swipe-2 .card").swipe({

      swipeLeft: function(event, direction, distance, duration, fingerCount) {

          $(".swipe-2 .nav-tabs li.active").next('li').addClass("active");

          $(".swipe-2 .nav-tabs li.active").prev('li').removeClass("active");

          var newText = $('.swipe-2 .nav-tabs li.active');

          var attr = newText.children('a').attr("data-roles");

          // var newAttr = attr.replace("#", "");

          $(".swipe-2 .tab-content .tab-pane").removeClass("active");

          $(".swipe-2 .tab-content").find('#' + attr).addClass("active");

      },

      swipeRight: function(event, direction, distance, duration, fingerCount) {

          $(".swipe-2 .nav-tabs li.active").prev('li').addClass("active");

          $(".swipe-2 .nav-tabs li.active").next('li').removeClass("active");

          var newText = $('.swipe-2 .nav-tabs li.active');

          var attr = newText.children('a').attr("data-roles");

          // var newAttr = attr.replace("#", "");

          $(".swipe-2 .tab-content .tab-pane").removeClass("active");

          $(".swipe-2 .tab-content").find('#' + attr).addClass("active");

      }

  });


  // pricing accordian mobile

  $('.detail-view').click(function() {

      $(this).toggleClass('detail-active');

      $(this).siblings().closest('.card-detail').fadeToggle('card-active');

  });

  // $('.form-sec a').click(function() {
  //   console.log('button clicked')
  //     $.ajax({
  //         type: "POST",
  //         url: 'https://biz.dev.coniferlabs.in:4001/service/contactUs',
  //         // headers: {
  //         //     "x-access-token": token,
  //         // },
  //           data: { 'name': 'nikhil',
  //                   'email': 'nikhils9it@gmail.com',
  //                   'message': 'Testing'
  //                 },
  //         success: function(res) {
  //             console.log(res)
  //         },
  //         error: function(error) {
  //             console.log(error)
  //         }
  //     });

  // });

}); // document ready function