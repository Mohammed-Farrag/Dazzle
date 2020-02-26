$(function(){
    'use strict';


    // FakeLoader Preloader 
    $("#fakeLoader").fakeLoader(
        {
            timeToHide:4000,   //Time in milliseconds for fakeLoader disappear
            zIndex:999, // Default zIndex
            spinner:"spinner5",
            bgColor:"#39b54b", //Hex, RGB or RGBA colors    
          }
    );



    // Cusomise Navbar Dropdown Toggler

    $('.navbar-toggler').click(function(){
        $('.navbar-toggler span').toggleClass('transform')
    })

    // Scroll Screen Down
    $(".scroll-show").click(function(){
        $("html, body").animate({
            scrollTop: $("body").height()
        },8000)
    })

    // Scroll Screen Up
    $(window).scroll(function(){
        if($(window).scrollTop() >= 100){
            $(".scroll-up").fadeIn(500)
        } else {
            $(".scroll-up").fadeOut(500)
        }
    })
    
    $(".scroll-up").click(function(){
        $("html, body").animate({
            scrollTop: 0
        },2000)
    })




    // Go To Section
    $(".nav-link").click(function(){
        $(this).offset().top;

        var secOff = $("."+$(this).data("class")).offset().top;
        $("html, body").animate({
            scrollTop: secOff
        }, 1000)
    })

    // Owl Slider
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            }
        }
    })
})