

(function($) {

$('.testimonials').slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    pauseOnFocus: false,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                arrows: false,
                dots: true
            }
        }
    ]
});

})();