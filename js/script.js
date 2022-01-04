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
        margin:16,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },


            1000:{
                items:3.75
            }
        }
    });
});

