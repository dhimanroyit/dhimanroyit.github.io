(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    // Navbar Scroll  
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 1) {
        $(".bootsnav").removeClass("scrollNav");
      } else {
        $(".bootsnav").addClass("scrollNav");
      }
    });

    // Scroll Spy
    $('body').scrollspy({
      target: '.navbar-collapse',
      offset: 45
    })

    // Smooth Scroll
    $(".nav-link").bind('click', function (event) {
      var $anchor = $(this);
      var headerH = $('.bootsnav').height();
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
      }, 1200, 'easeInOutExpo');
      event.preventDefault();
    });

    // Hamburger Mobile Menu
    $('.hamburger').click(function () {
      this.classList.toggle("is-active");
    });

    // Mobile Menu Fix
    $('.nav-link').click(function () {
      $(".navbar-collapse").removeClass("show")
      $(".navbar-toggler").removeClass("is-active")
    });

    // Hero Slider
    var slider__active = $('.hero__slider');
    slider__active.owlCarousel({
      loop: true,
      autoplay: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });

    slider__active.on('changed.owl.carousel', function (event) {
      var item = event.item.index;
      $('.hero__heading').removeClass('animated fadeInUp');
      $('.owl-item').eq(item).find('.hero__heading').addClass('animated fadeInUp').css('animation-delay', '200ms');

      $('.hero__txt').removeClass('animated fadeInUp');
      $('.owl-item').eq(item).find('.hero__txt').addClass('animated fadeInUp').css('animation-delay', '300ms');

      $('.tm-btn').removeClass('animated fadeInUp');
      $('.owl-item').eq(item).find('.tm-btn').addClass('animated fadeInUp').css('animation-delay', '500ms');
    })

    // Portfolio Isotop Masonry
    var $grid = $('.portfolio__active').isotope({
      itemSelector: '.portfolio__item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    })

    // Portfolio Filter Items on Button Click
    $('.portfolio__button').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });

    // Portfolio Menu active class
    $('.portfolio__button button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

    // Testimonial Carousel
    $('.testimonial__active').owlCarousel({
      loop: true,
      autoplay: true,
      nav: true,
      dots: false,
      navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });

    // Scroll up js
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

  });


  jQuery(window).load(function () {
    jQuery(".preloader").fadeOut(1000);
  });


}(jQuery));