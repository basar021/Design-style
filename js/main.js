
$(document).ready(function(){


  $('.owl-carousel').owlCarousel({

    margin: 20,
    items:5,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0:{
        items:2
      },
      768:{
        items:3
      },
      1000:  {
        items:4
      },
      
      1200:  {
        items:5
      },
      1920:  {
        items:5
      }
      
    }


  });





  wow = new WOW();
  wow.init();


});