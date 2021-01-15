(function($) {
    // Wow Animation
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window
    });
    wow.init();

    // Smooth Scroll
    scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true,
    });

    $('#team .slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        dots: true,
        prevArrow: `<button type="button" class="slick-prev text-black">
    <i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button>`,
        nextArrow: `<button type="button" class="slick-next text-black">
    <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>`,
        autoplaySpeed: 2000,
    });

    $('#testimonial .slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        dots: true,
        prevArrow: `<button type="button" class="slick-prev text-black">
    <i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button>`,
        nextArrow: `<button type="button" class="slick-next text-black">
    <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>`,
        autoplaySpeed: 2000,
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 74,
    });

    // Collapse Navbar
    navbarCollapse = function() {
        if ($('#mainNav').offset().top > 120) {
            $('#mainNav').addClass('navbar-shrink');
            $('.up-btn').removeClass('hide');
        } else {
            $('#mainNav').removeClass('navbar-shrink');
            $('.up-btn').addClass('hide');
        }
    };

    $('#collapsibleNavId .nav-item').click(function() {
        $(this).parent().parent().collapse('hide');
    });

    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    var slideIndex = 1;
    var millis = 2000;
    var interval;
    
    startSlides();
    
    function startSlides(){
      pauseSlides();
      nextSlide();
      interval = setInterval(nextSlide, millis);
    }
  
  
    function resumeSlides() {
      nextSlide();
    }
  
    function pauseSlides() {
      clearInterval(interval);
    }
  
    function nextSlide() {
      showSlide();
      slideIndex++;
    }
  
    function plusSlides(n) {
      clearInterval(interval);
      slideIndex += n;
      nextSlide();
      interval = setInterval(nextSlide, millis);
    }
  
    function currentSlide(n) {
      clearInterval(interval);
      slideIndex = n + 1;
      nextSlide();
      interval = setInterval(nextSlide, millis);
    }
  
    function showSlide() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      if (slideIndex < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  
  
})(jQuery);

