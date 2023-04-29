const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    preventInteractionOnTransition: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        direction: 'reverse'
      },
      slidesPerView:5,
      setTranslate:-344,
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
      
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });   