/* =====================================================
Template Name   : Constox
Description     : Construction HTML5 Template
Author          : Themesland
Version         : 1.2
=======================================================*/

(function ($) {
    "use strict";

    
    //Header Search
    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function () {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function () {
            $('body').removeClass('search-active');
        });
    }



    // data-background    
    $(document).on('ready', function () {
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    });


    // wow init
    new WOW().init();

    

    // hero slider
    $('.hero-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: -1,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        items: 1,
        navText: [
            "<i class='fal fa-long-arrow-left'></i>",
            "<i class='fal fa-long-arrow-right'></i>"
        ],
    });

    $('.hero-slider').on('change.owl.carousel', function (event) {
        new WOW().init();
    });


    // partner-slider
    $('.partner-slider').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        navText: [
            "<i class='icofont-long-arrow-left'></i>",
            "<i class='icofont-long-arrow-right'></i>"
        ],
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    // testimonial-slider
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        navText: [
            "<i class='icofont-long-arrow-left'></i>",
            "<i class='icofont-long-arrow-right'></i>"
        ],
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // case-slider
    $('.case-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: [
            "<i class='far fa-long-arrow-left'></i>",
            "<i class='far fa-long-arrow-right'></i>"
        ],
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });



    // preloader
    $(window).on('load', function () {
        $(".preloader").fadeOut("slow");
    });


    // fun fact counter
    $('.counter').countTo();
    $('.counter-box').appear(function () {
        $('.counter').countTo();
    }, {
        accY: -100
    });


    // progress bar
    $(document).ready(function () {
        var progressBar = $('.progress');
        if (progressBar.length) {
            progressBar.each(function () {
                var Self = $(this);
                Self.appear(function () {
                    var progressValue = Self.data('value');
                    Self.find('.progress-bar').animate({
                        width: progressValue + '%'
                    }, 1000);
                });
            })
        }
    });


    // magnific popup init
    $(".popup-gallery").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery2").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery3").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery4").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery5").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery6").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery7").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery7").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery8").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery9").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery10").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery11").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery12Home").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery12").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery13").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery14").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery15").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery16Home").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-gallery16").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



    // scroll to top
    $(window).on("scroll", function () {

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#scroll-top").fadeIn('slow');
        } else {
            $("#scroll-top").fadeOut('slow');
        }
    });

    $("#scroll-top").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });


    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass("fixed-top");
        } else {
            $('.navbar').removeClass("fixed-top");
        }
    });


    // countdown
    if ($('#countdown').length) {
        $('#countdown').countdown('2030/01/30', function (event) {
            $(this).html(event.strftime('' + '<div class="row">' + '<div class="col countdown-single">' + '<h2 class="mb-0">%-D</h2>' + '<h5 class="mb-0">Day%!d</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%H</h2>' + '<h5 class="mb-0">Hours</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%M</h2>' + '<h5 class="mb-0">Minutes</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%S</h2>' + '<h5 class="mb-0">Seconds</h5>' + '</div>' + '</div>'));
        });
    }

    // date

    let date= new Date().getFullYear();
    $("#date").html(date);


   // project filter
   $(window).on('load', function () {
    if( $(".filter-box").children().length > 0 ) {
            $(".filter-box").isotope({
            //The Filter Option Will Filter All The Images On The Initial Load Of The Page
                filter: '.cat1',
                itemSelector: '.filter-item',
                masonry: {
                columnWidth: 1
                },
            });

            $('.filter-btns').on( 'click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $(".filter-box").isotope({ filter: filterValue });
            });

            $(".filter-btns li").each(function(){
                $(this).on("click", function(){
                    $(this).siblings("li.active").removeClass("active"); 
                    $(this).addClass("active");
                });
            });
        }
    });


    // $(".initialMenuItem1").on("click", function(){
        //     $('.img-01-sm').attr("src", "img/projectImgs/project-1/01.jpg");
        //     $('.img-01-lg').attr("href", "img/projectImgs/project-1/01.jpg");
    
        //     $('.img-02-sm').attr("src", "img/projectImgs/project-1/02.jpg");
        //     $('.img-02-lg').attr("href", "img/projectImgs/project-1/02.jpg");
    
        //     $('.img-03-sm').attr("src", "img/projectImgs/project-1/03.jpg");
        //     $('.img-03-lg').attr("href", "img/projectImgs/project-1/03.jpg");
    
        //     const imgElement = document.createElement("img");
        //     const anchorElement = document.createElement("a");
        //     const listElement = document.createElement("li");
    
        //     imgElement.classList.add("test-x");
        //     anchorElement.classList.add("test-x2");
        //     listElement.classList.add("test-x3");
    
        //     document.querySelector('.c1').append(imgElement);
        //     document.querySelector('.c1').append(anchorElement);
        //     document.querySelector('.test-x2').append(listElement);
    
        //     document.querySelector('.test-x').classList.add("img-fluid");
        //     document.querySelector('.test-x').classList.add("img-06-sm");
        //     document.querySelector('.test-x').setAttribute("src", "img/projectImgs/project-1/06.jpg");
    
        //     document.querySelector('.test-x2').classList.add("popup-img");
        //     document.querySelector('.test-x2').classList.add("case-link");
        //     document.querySelector('.test-x2').classList.add("img-06-lg");
        //     document.querySelector('.test-x2').setAttribute("href", "img/projectImgs/project-1/06.jpg");
    
        //     document.querySelector('.test-x3').classList.add("far");
        //     document.querySelector('.test-x3').classList.add("fa-plus");
        //  });
    
        //  $(".initialMenuItem2").on("click", function(){
        //     $('.img-01-sm').attr("src", "img/projectImgs/project-2/01.jpg");
        //     $('.img-01-lg').attr("href", "img/projectImgs/project-2/01.jpg");
    
        //     $('.img-02-sm').attr("src", "img/projectImgs/project-2/02.jpg");
        //     $('.img-02-lg').attr("href", "img/projectImgs/project-2/02.jpg");
    
        //     $('.test-x').remove();
        //     $('.test-x2').remove();
        //     $('.test-x3').remove();
        //  });
    
        //  $(".initialMenuItem3").on("click", function(){
        //     $('.img-01-sm').attr("src", "img/projectImgs/project-3/01.jpg");
        //     $('.img-01-lg').attr("href", "img/projectImgs/project-3/01.jpg");
    
        //     $('.img-02-sm').attr("src", "img/projectImgs/project-3/02.jpg");
        //     $('.img-02-lg').attr("href", "img/projectImgs/project-3/02.jpg");
        //  });



})(jQuery);










