const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'cube',

    autoplay: {
      delay: "3000",
      pauseOnMouseEnter: true,
    },
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.custom-button-next',
      prevEl: '.custom-button-prev',
    },
  
   
  });