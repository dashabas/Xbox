$(document).ready(function(){

    $('.slide-one').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });

    $('.slide-two').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            768:{
                items:2
            },

            992:{
                items:3
            },

            1200:{
                items:3.85
            }
        }
    });
});

