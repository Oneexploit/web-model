/*
  [JS Index]
*/


/*
  1. preloader
  2. fadeIn.element
  3. slick slider
    3.1. slick services slider
	3.2. slick fullscreen slideshow ZOOM/FADE
  4. owl carousel
    4.1. owl testimonials carousel
	4.2. owl works carousel
	4.3. owl news carousel
  5. magnificPopup
    5.1. magnificPopup single
	5.2. magnificPopup gallery
  6. navigation
  7. fullPage
  8. YouTube player
  9. toggle panels
  10. forms
    10.1. contact form
  11. clone function
    11.1. horizontal lines
  12. social icons launcher
    12.1. social icons launcher additional CLOSER
  13. skills bar
  14. facts counter
  15. google maps zoom ON/OFF
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. fadeIn.element
        setTimeout(function() {
            $(".fadeIn-element").delay(600).css({
                display: "none"
            }).fadeIn(800);
        }, 0);
    });
	
    // 3. slick slider
    // 3.1. slick services slider
    $(".slick-services").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: true,
        autoplay: false,
        autoplaySpeed: 5000,
        cssEase: "ease",
        speed: 1000
    });
    // 3.2. slick fullscreen slideshow ZOOM/FADE
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
    // 4. owl carousel
    // 4.1. owl testimonials carousel
    $("#testimonials-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 10,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false
    });
    // 4.2. owl works carousel
    $("#works-page-img-carousel").owlCarousel({
        loop: false,
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
				items: 1
			},
			768: {
				items: 1
			},
			980: {
				items: 2
			},
			1240: {
				items: 2
			},
			2560: {
				items: 3
			}
        }
    });
    // 4.3. owl news carousel
    $("#news-page-img-carousel").owlCarousel({
        loop: false,
        center: false,
        items: 2,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
				items: 1
			},
			768: {
				items: 1
			},
			980: {
				items: 2
			},
			1240: {
				items: 2
			},
			2560: {
				items: 2
			}
        }
    });
	
    // 5. magnificPopup
    // 5.1. magnificPopup single
    $(".popup-photo-single").magnificPopup({
        type: "image",
        gallery: {
            enabled: false
        },
        removalDelay: 100,
        mainClass: "mfp-fade"
    });
    // 5.2. magnificPopup gallery
    $(".popup-photo-gallery").each(function() {
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade"
            // fixedContentPos: false
        });
    });
	
    // 6. navigation
    // navigation active links
    $("a.navigation-state").on("click", function() {
        $("a.navigation-state").removeClass("active");
        $(this).addClass("active");
    });
    // navigation fire
    $(".navigation-fire").on("click", function() {
        if ($(".panel-from-left-nav, .panel-from-right-nav, .panel-overlay-from-left-nav, .panel-overlay-from-right-nav").hasClass("open")) {
            $(".panel-from-left-nav, .panel-from-right-nav, .panel-overlay-from-left-nav, .panel-overlay-from-right-nav").removeClass("open");
        } else {
            $(".panel-from-left-nav, .panel-from-right-nav, .panel-overlay-from-left-nav, .panel-overlay-from-right-nav").addClass("open");
        }
    });
    $("nav.navigation-menu a.state-hide").on("click", function() {
        $(".panel-from-left-nav, .panel-from-right-nav, .panel-overlay-from-left-nav, .panel-overlay-from-right-nav").removeClass("open");
    });
	// navigation dropdown
    $(".menu-item-has-children ul").hide();
    $(".menu-item-has-children").on("click", function() {
        var submenu = $(this).children(".sub-menu");
        if ($(submenu).is(":hidden")) {
            $(submenu).slideDown(400);
        } else {
            $(submenu).slideUp(400);
        }
    });
	
    // 7. fullPage
    $("#fullpage").fullpage({
        anchors: ["home", "about", "services", "works", "news", "contact"],
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ["Home", "About", "Services", "Works", "News", "Contact"],
        responsiveWidth: 1024,
        autoScrolling: true,
        scrollBar: false,
        afterResponsive: function(isResponsive) {}
    });
	
    // 8. YouTube player
    $("#bgndVideo").YTPlayer();
	
    // 9. toggle panels
    $(".c-btn-about, .c-btn-services, .c-btn-news").on("click", function() {
        $(".logo, .navigation-icon-wrapper").addClass("off").removeClass("on");
		var divClass = $(this).attr("data-id");
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $("." + divClass).addClass("open");
        } else {
            $(this).addClass("open");
            $("." + divClass).addClass("open");
        }
    });
    $(".about-more-launch, .navigation-icon").on("click", function() {
        $(".panel-from-left-about, .panel-from-right-about, .panel-overlay-from-left-about, .panel-overlay-from-right-about").removeClass("open");
		$(".logo, .navigation-icon-wrapper").removeClass("off").addClass("on");
    });
    $(".services-more-launch, .navigation-icon").on("click", function() {
        $(".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right").removeClass("open");
		$(".logo, .navigation-icon-wrapper").removeClass("off").addClass("on");
    });
    $(".news-more-launch, .navigation-icon").on("click", function() {
        $(".panel-left, .panel-right").removeClass("open");
		$(".logo, .navigation-icon-wrapper").removeClass("off").addClass("on");
    });
	
    // 10. forms
    // 10.1. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    // 11. clone function
    $.fn.duplicate = function(count, cloneEvents, callback) {
        var stack = [],
            el;
        while (count--) {
            el = this.clone(cloneEvents);
            callback && callback.call(el);
            stack.push(el.get()[0]);
        }
        return this.pushStack(stack);
    };
    // 11.1. horizontal lines
    $("<div class='upper-page'></div>").appendTo(".horizontal-lines-wrapper");
    $("<div class='horizontal-lines'></div>").duplicate(4).appendTo(".upper-page");
	$("<div class='upper-page-effect'></div>").appendTo(".horizontal-lines-wrapper-effect");
	$("<div class='running-teardrop'></div>").duplicate(4).appendTo(".upper-page-effect");
	
    // 12. social icons launcher
    $(".social-icons-launcher").on("click", function() {
        if ($(".social-icons-wrapper").hasClass("social-icons-wrapper-reveal-show")) {
            $(".social-icons-wrapper").removeClass("social-icons-wrapper-reveal-show").addClass("social-icons-wrapper-reveal-hide");
            $(".welcome-message").removeClass("welcome-message-reveal-hide").addClass("welcome-message-reveal-show");
        } else {
            $(".social-icons-wrapper").removeClass("social-icons-wrapper-reveal-hide").addClass("social-icons-wrapper-reveal-show");
            $(".welcome-message").addClass("welcome-message-reveal-hide").removeClass("welcome-message-reveal-show");
        }
    });
    // 12.1. social icons launcher additional CLOSER
    $(".navigation-fire, .logo").on("click", function() {
        $(".social-icons-wrapper").removeClass("social-icons-wrapper-reveal-show").addClass("social-icons-wrapper-reveal-hide");
        $(".welcome-message").removeClass("welcome-message-reveal-hide").addClass("welcome-message-reveal-show");
    });
	
    // 13. skills bar
    $(".show-skillbar").appear(function() {
        $(".skillbar").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });
	
    // 14. facts counter
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });
	
    // 15. google maps zoom ON/OFF
    $(".google-maps").on("click", function() {
        $('.google-maps iframe').css("pointer-events", "auto");
    });
    $(".google-maps").on("mouseleave", function() {
        $('.google-maps iframe').css("pointer-events", "none");
    });
	
	
});