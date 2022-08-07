$(function(){
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class=" arrow arrow-left" src="icons/Arrow-left.svg" alt="">',
        nextArrow: '<img class=" arrow arrow-rigth" src="icons/Arrow-rigth.svg" alt="">',
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
});