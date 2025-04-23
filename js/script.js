// body of the function executes when the document is ready
$(document).ready(function() {
    $('#slides').superslides({
        Animation: 'fade',
        play: 5000,
        pagination: false,
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});