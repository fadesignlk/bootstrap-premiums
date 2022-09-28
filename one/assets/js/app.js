$(document).ready(function(){
    // hero slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        navText:['PREV', 'NEXT'],
        smartSpeed:1000,
        responsive:{
            0:{
              nav: false
            },
            768:{
                nav: true
            }
        }
    });
    // PROJECT SLIDER
    $('#project-slider').owlCarousel({
        loop:true,
        margin:24,
        nav:true,
        dots: true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1,
        nav:false,
        margin:0
              
            },
            768:{
                items:2,
             
            },
            1140:{
                items:2,
                center:true
            }
        }
    })
    $('#reviews-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        items:1,
        smartSpeed:850,

    })
})