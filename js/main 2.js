console.log("test");

var win = $(window).width();
console.log(win);

$("a.toForm").click(function (e) {
    e.preventDefault();
    $(".popUp").scrollTop(4000);
});

if (win >= 1800) {
    $(".banner").css("height","700px");
}

if (win >= 1700) {
    $(".woman-banner").css("height","600px");
    $(".man-banner").css("height","600px");
}

var $root = $('html, body');
$('a.toMan, a.toWoman, a.toWork, a.toTop').click(function () {
    var href = $.attr(this, 'href');
    if (win <= 767) {
        $(".header__menu-mob .line").css({
            "position":"static",
            "top":"0"
        });
        $(".header__menu").removeClass("active");
        $(".header__menu-mob .line:nth-child(2)").css("display","block");
        $(".header__menu-mob .line:nth-child(1)").css({
            "transform":"rotate(0)",
            "-webkit-transform":"rotate(0)",
            "transition":"0.5s"
        });
        $(".header__menu-mob .line:nth-child(3)").css({
            "transform":"rotate(0)",
            "-webkit-transform":"rotate(0)",
            "transition":"0.5s"
        });
        if( win < 576) {
            $(".header__menu-mob .line").css("right","0");
        }
        $(".header__menu").css("display","none");
    }
    $root.animate({
        scrollTop: $(href).offset().top
    }, 800, function () {
        window.location.hash = href;
    });
    return false;
});

$('.top__block').owlCarousel({
    loop: true,
    dots: false,
    responsive :{
        0: {
            items: 1,
            dots: true
        },

        576: {
            items: 2,
            nav: true
        },
        768: {
            items: 2,
            nav: true
        },

        980: {
            items: 3,
            nav: true
        },

        1200: {
            items: 4,
            nav: true
        }
    }
});

$('.new__block').owlCarousel({
    loop: true,
    responsive :{
        0: {
            items: 1,
            dots: true
        },

        576: {
            items: 2,
            nav: true
        },

        768: {
            items: 2,
            nav: true
        },

        980: {
            items: 3,
            nav: true
        },

        1200: {
            items: 4,
            nav: true
        }
    }
});

$(".header__menu-mob").click(function () {
    if ($(".header__menu").hasClass("active")) {
        $(".header__menu-mob .line").css({
            "position":"static",
            "top":"0"
        });
        $(".header__menu").removeClass("active");
        $(".header__menu-mob .line:nth-child(2)").css("display","block");
        $(".header__menu-mob .line:nth-child(1)").css({
            "transform":"rotate(0)",
            "-webkit-transform":"rotate(0)",
            "transition":"0.5s"
        });
        $(".header__menu-mob .line:nth-child(3)").css({
            "transform":"rotate(0)",
            "-webkit-transform":"rotate(0)",
            "transition":"0.5s"
        });
        if( win < 576) {
            $(".header__menu-mob .line").css("right","0");
        }
        $(".header__menu").css("display","none");
    } else {
        $(".header__menu").addClass("active");
        $(".header__menu-mob .line").css({
            "position":"absolute",
            "top":"5%",
        });
        $(".header__menu-mob .line:nth-child(2)").css("display","none");
        $(".header__menu-mob .line:nth-child(1)").css({
            "transform":"rotate(-45deg)",
            "-webkit-transform":"rotate(-45deg)",
            "transition":"0.5s"
        });
        if( win < 576) {
            $(".header__menu-mob .line").css("right","0.5rem");
        }
        $(".header__menu-mob .line:nth-child(3)").css({
            "transform":"rotate(45deg)",
            "-webkit-transform":"rotate(45deg)",
            "transition":"0.5s"
        });
        $(".header__menu").css("display","flex");
    }
});

$("button.all-woman").click(function () {
    $(".woman-parf__block").css("height","100%");
    $("button.all-woman").css("display","none");
});

$("button.all-man").click(function () {
    $(".man-parf__block").css("height","100%");
    $("button.all-man").css("display","none");
});
$(".body__filter, img.close").click(function () {
    $(".popUp").css("left","-150%");
    $(".body__filter").css("display","none");
    $("body").css("overflow-y","scroll");
});

// $("body").on('click', 'a.chanelN5', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.chanelN5").css("left","50%");
// });
//
// $("body").on('click', 'a.versacebright', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.versacebright").css("left","50%");
// });
//
// $("body").on('click', 'a.diorjadore', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.diorjadore").css("left","50%");
// });
//
// $("body").on('click', 'a.pacorabanne', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.pacorabanne").css("left","50%");
// });
//
// $("body").on('click', 'a.lanvineclat', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.lanvineclat").css("left","50%");
// });
//
// $("body").on('click', 'a.chanelcoco', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.chanelcoco").css("left","50%");
// });
//
// $("body").on('click', 'a.versacenoir', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.versacenoir").css("left","50%");
// });
//
// $("body").on('click', 'a.dolcelight', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.dolcelight").css("left","50%");
// });
//
// $("body").on('click', 'a.givenchyange', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.givenchyange").css("left","50%");
// });
//
// $("body").on('click', 'a.diorcherie', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.diorcherie").css("left","50%");
// });
//
// $("body").on('click', 'a.dolce3', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.dolce3").css("left","50%");
// });
//
// $("body").on('click', 'a.chaneleau', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.chaneleau").css("left","50%");
// });
//
// $("body").on('click', 'a.chaneltendre', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.chaneltendre").css("left","50%");
// });
//
// $("body").on('click', 'a.kenzofemme', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.kenzofemme").css("left","50%");
// });
//
// $("body").on('click', 'a.diorsauvage', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.diorsauvage").css("left","50%");
// });
//
// $("body").on('click', 'a.chanelbleu', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.chanelbleu").css("left","50%");
// });
//
// $("body").on('click', 'a.versaceeau', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.versaceeau").css("left","50%");
// });
//
// $("body").on('click', 'a.diorfahrenheit', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.diorfahrenheit").css("left","50%");
// });
//
// $("body").on('click', 'a.bvlgariaqva', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.bvlgariaqva").css("left","50%");
// });
//
// $("body").on('click', 'a.pacomillion', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.pacomillion").css("left","50%");
// });
//
// $("body").on('click', 'a.versacehomme', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.versacehomme").css("left","50%");
// });
//
// $("body").on('click', 'a.kenzohomme', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.kenzohomme").css("left","50%");
// });
//
// $("body").on('click', 'a.armanidi', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.armanidi").css("left","50%");
// });
//
// $("body").on('click', 'a.chanelallure', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.chanelallure").css("left","50%");
// });
//
// $("body").on('click', 'a.dolceone', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.dolceone").css("left","50%");
// });
//
// $("body").on('click', 'a.givenchylabel', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.givenchylabel").css("left","50%");
// });
//
// $("body").on('click', 'a.pacoinvictus', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.pacoinvictus").css("left","50%");
// });
//
// $("body").on('click', 'a.hererramen', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.hererramen").css("left","50%");
// });
//
// $("body").on('click', 'a.diorhomme', function (e) {
//     e.preventDefault();
//     $("body").css("overflow-y","hidden");
//     $(".body__filter").css("display","block");
//     $(".popUp.diorhomme").css("left","50%");
// });

if (win >= 980) {
    $(window).scroll(function () {
        $(".man-woman__block").each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(".man-woman__block-man").css({
                    "opacity": "1",
                    "left": "0"
                });
                $(".man-woman__block-woman").css({
                    "opacity": "1",
                    "right": "0"
                });
            }
        });
        $(".work .container").each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(".work__block").css({
                    "opacity": "1",
                    "left": "0"
                });
            }
        });
        $(".woman-banner").each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(".woman-banner .container").css({
                    "opacity": "1"
                });
            }
        });
        $(".man-banner").each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(".man-banner .container").css({
                    "opacity": "1"
                });
            }
        });
        $(".clients__block").each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(".clients__block-block p").css({
                    "opacity": "1",
                    "left":"0"
                });
                $(".clients__block-block img").css({
                    "opacity": "1",
                    "right":"0"
                });
            }
        });
    });
    $(document).ready(function () {
        setTimeout(function () {
            $('.header .container').css({
                opacity: 1
            });
        }, 1500);
    });
}

$(".top-filter a").mouseenter(function (e) {
    e.preventDefault();
    var c = $(this).attr("class");
    var h = "a."+c;
    console.log(c);
    $("body").on('click', h, function (e) {
//     $(h).click(function (e) {
        e.preventDefault();
        $(".body__filter").css("display","block");
        $(".popUp."+c).css("left","50%");
    });
});
