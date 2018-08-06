
$(document).ready(function(){

  // biz slider

   $('.owl-carousel').owlCarousel({

        autoplay: true,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:2,
                nav:true,
                loop:true
            }
        }
    });

   // Includin header & footer

   $('#header-new').load("include/header.html");

   $('#new-footer').load("include/footer.html");	

   // menu toggle

   $(".mb-nav").click(function(){

      $(".main-nav").toggle();

      $(this).toggleClass("rot");

      $("#main-menu-overlay").toggleClass("o-active");
      
   });

   // custom swipe section

   // swipe 1

     $('.swipe-1 .nav-tabs li').click( function() {

        $(this).addClass('active').siblings().removeClass('active');  

        var attr = $(this).children('a').attr("data-roles");

        // var newAttr = attr.replace("#", "");

        $(".swipe-1 .tab-content .tab-pane").removeClass("active");

        $(".swipe-1 .tab-content").find('#' + attr).addClass("active");  

    });

     $(".swipe-1 .card").swipe( {

       swipeLeft:function(event, direction, distance, duration, fingerCount) {

            $(".swipe-1 .nav-tabs li.active").next('li').addClass("active");

            $(".swipe-1 .nav-tabs li.active").prev('li').removeClass("active");

            var newText = $('.nav-tabs li.active');  

            var attr = newText.children('a').attr("data-roles");

            // var newAttr = attr.replace("#", "");

            $(".swipe-1 .tab-content .tab-pane").removeClass("active");

            $(".swipe-1 .tab-content").find('#' + attr).addClass("active");  
          
          },

       swipeRight:function(event, direction, distance, duration, fingerCount) {

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

      $('.swipe-2 .nav-tabs li').click( function() {

        $(this).addClass('active').siblings().removeClass('active');  

        var attr = $(this).children('a').attr("data-roles");

        // var newAttr = attr.replace("#", "");

        $(".swipe-2 .tab-content .tab-pane").removeClass("active");

        $(".swipe-2 .tab-content").find('#' + attr).addClass("active");  

    });

     $(".swipe-2 .card").swipe( {

       swipeLeft:function(event, direction, distance, duration, fingerCount) {

            $(".swipe-2 .nav-tabs li.active").next('li').addClass("active");

            $(".swipe-2 .nav-tabs li.active").prev('li').removeClass("active");

            var newText = $('.swipe-2 .nav-tabs li.active');  

            var attr = newText.children('a').attr("data-roles");

            // var newAttr = attr.replace("#", "");

            $(".swipe-2 .tab-content .tab-pane").removeClass("active");

            $(".swipe-2 .tab-content").find('#' + attr).addClass("active");  
          
          },

       swipeRight:function(event, direction, distance, duration, fingerCount) {

          $(".swipe-2 .nav-tabs li.active").prev('li').addClass("active");

            $(".swipe-2 .nav-tabs li.active").next('li').removeClass("active");

            var newText = $('.swipe-2 .nav-tabs li.active');  

            var attr = newText.children('a').attr("data-roles");

            // var newAttr = attr.replace("#", "");

            $(".swipe-2 .tab-content .tab-pane").removeClass("active");

            $(".swipe-2 .tab-content").find('#' + attr).addClass("active");  
       
        }

    });



    // active menu active class

    setTimeout(function(){

      // $(".main-nav").addClass("active");
      
      var path = window.location.pathname.split("/").pop();
  
      // Account for home page with empty path
      if ( path == '' ) {
        path = 'index.php';
      }
          
      var target = $('nav a[href="'+path+'"]');
      // Add active class to target link
      target.addClass('active-menu');

      }, 1000 );


    // pricing accordian mobile

    $('.detail-view').click(function(){

        $(this).toggleClass('detail-active');

        $(this).siblings().closest('.card-detail').fadeToggle('card-active');
        
    });


    // contact form valiadtion

    setTimeout(function(){

    $(".submit-btn").on("click", function(){
      
      $('input').each(function(){
          if($(this).attr('isrequired') == 'yes'){
          var inputName = $(this).attr('class');
          var inputVal = $(this).val();
          var errorMsg = $(this).attr('data-msg');
          if(inputVal == '' && !$('.error').hasClass(inputName+'error')){
          $('<div class="error '+inputName+'error">'+errorMsg+'</div>').insertAfter(this);
          }else{
          $('.'+inputName+'error').remove();
          }
          }
      })

    });


    $('input').blur(function(){
        var inputName = $(this).attr('class');
        var inputVal = $(this).val();
        var errorMsg = $(this).attr('data-msg');
        if(inputVal == ''){
        $('<div class="error '+inputName+'error">'+errorMsg+'</div>').insertAfter(this);
        }else{
        $('.'+inputName+'error').remove();
        }
      });

    }, 1000 );



      

      

 
    

}); // document ready function




