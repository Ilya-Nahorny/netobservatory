const slider = document.querySelector('.swiper-container');
 
 let mySwiper = new Swiper (slider, {
    loop:true,

    breakpoints: {
        480: {
          slidesPerView: 1,
/*           spaceBetween: 30 */
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
/*           spaceBetween: 40 */
        },
        780:{
          slidesPerView:2
        },
        960:{
          slidesPerView: 2
        },
        1280: {
            slidesPerView: 3,
/*             spaceBetween:15 */
          },
        1440:{
        slidesPerView: 3,
/*         spaceBetween: 20 */
        },
        2560:{
          slidesPerView: 4,
/*           spaceBetween: 30, */
          }
      }
/*       effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      }, */
  })