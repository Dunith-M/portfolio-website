// body of the function executes when the document is ready
$(document).ready(function() {
    $('#slides').superslides({
        Animation: 'fade',
        play: 5000,
        pagination: false,
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 150,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });


    var skillsTopOffset = $('.skillsSection').offset().top;
    console.log(skillsTopOffset)

    $(window).scroll(function() {
       if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
        $('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 150,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        })

       }
    });
        
});