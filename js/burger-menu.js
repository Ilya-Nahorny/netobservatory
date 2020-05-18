$(function() {
  let link = $('.m-menu-link');
  let close = $('.close-menu');
  let menu = $('.m-menu');
  let explainBtn = $('.mobileBtn');
  link.on('click', function(event) {
      event.preventDefault();
      menu.toggleClass('m-menu-active');
  });
  close.on('click', function(event) {
      event.preventDefault();
      menu.toggleClass('m-menu-active');
  });
  explainBtn.on('click', function(event){
    event.preventDefault();
    menu.toggleClass('m-menu-active');
  })

});
