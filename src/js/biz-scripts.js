$(document).ready(function () {

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

    $('#header-new').load("include/header.html", function () {

        path_class();

    });

    $('#new-footer').load("include/footer.html", function () {

        form_validation();

    });


    // menu toggle

    $(".mb-nav").click(function () {

        $(".main-nav").toggle();

        $(this).toggleClass("rot");

        $("#main-menu-overlay").toggleClass("o-active");

    });

    // custom swipe section

    // swipe 1

    $('.swipe-1 .nav-tabs li').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

        var attr = $(this).children('a').attr("data-roles");

        // var newAttr = attr.replace("#", "");

        $(".swipe-1 .tab-content .tab-pane").removeClass("active");

        $(".swipe-1 .tab-content").find('#' + attr).addClass("active");

    });

    $(".swipe-1 .card").swipe({

        swipeLeft: function (event, direction, distance, duration, fingerCount) {

            $(".swipe-1 .nav-tabs li.active").next('li').addClass("active");

            $(".swipe-1 .nav-tabs li.active").prev('li').removeClass("active");

            var newText = $('.nav-tabs li.active');

            var attr = newText.children('a').attr("data-roles");

            // var newAttr = attr.replace("#", "");

            $(".swipe-1 .tab-content .tab-pane").removeClass("active");

            $(".swipe-1 .tab-content").find('#' + attr).addClass("active");

        },

        swipeRight: function (event, direction, distance, duration, fingerCount) {

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

    $('.swipe-2 .nav-tabs li').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

        var attr = $(this).children('a').attr("data-roles");

        // var newAttr = attr.replace("#", "");

        $(".swipe-2 .tab-content .tab-pane").removeClass("active");

        $(".swipe-2 .tab-content").find('#' + attr).addClass("active");

    });

    $(".swipe-2 .card").swipe({

        swipeLeft: function (event, direction, distance, duration, fingerCount) {

            $(".swipe-2 .nav-tabs li.active").next('li').addClass("active");

            $(".swipe-2 .nav-tabs li.active").prev('li').removeClass("active");

            var newText = $('.swipe-2 .nav-tabs li.active');

            var attr = newText.children('a').attr("data-roles");

            // var newAttr = attr.replace("#", "");

            $(".swipe-2 .tab-content .tab-pane").removeClass("active");

            $(".swipe-2 .tab-content").find('#' + attr).addClass("active");

        },

        swipeRight: function (event, direction, distance, duration, fingerCount) {

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

    $('.detail-view').click(function () {

        $(this).toggleClass('detail-active');

        $(this).siblings().closest('.card-detail').fadeToggle('card-active');

    });


}); // document ready function

function clicked() {
     
        $.ajax({
            type: "POST",
            url: 'https://biz.dev.coniferlabs.in:4001/service/contactUs',
           
        data: {
            'name': $(".fullname").val(),
                      'email': $(".email").val(),
                      'message': $(".shortmsg").val()
                    },

        success: function (res) {
                $('.form-sec input[type="text"],texatrea').val('');
                $('<div class="success">Your Details has been submitted successfully</div>').insertAfter('.shortmsg').delay(4000).fadeOut();
            },
        error: function (error) {
                $('<div class="form-error">Your Details could not be submitted</div>').insertAfter('.shortmsg').delay(4000).fadeOut();
            }
        })
      };


// functions

function path_class() {

    var path = window.location.pathname.split("/").pop();

    // Account for home page with empty path
    if (path == '') {
        path = 'index.php';
    }

    var target = $('nav a[href="' + path + '"]');
    // Add active class to target link
    target.addClass('active');
}

function assign_class(value) {

    console.log(value);
        var target = $('nav a[href="#' + value + '"]');
        // Add active class to target link
        console.log(target);
        target.addClass('active-menu');
    
}


function form_validation() {

    $(".submit-btn").on("click", function () {

        $('input').each(function () {
            if ($(this).attr('isrequired') == 'yes') {
                var inputName = $(this).attr('class');
                var inputVal = $(this).val();
                var errorMsg = $(this).attr('data-msg');
                if (inputVal == '' && !$('.error').hasClass(inputName + 'error')) {
                    $('<div class="error ' + inputName + 'error">' + errorMsg + '</div>').insertAfter(this);
                } else {
                    $('.' + inputName + 'error').remove();
                }
            }
        })

    });
}