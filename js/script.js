$(document).ready(function(){
    $('.current__projects-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        autoplay: true,
        centerMode: true,
        pauseOnHover:true,
        autoplaySpeed: 1000,
        // infinite: true,
        // centerMode: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                autoplay: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
  });