window.onload = function(){
    const header = document.querySelector('.header');
    document.addEventListener('scroll', function(event){
        event.preventDefault();
        if(pageYOffset != 0){
            header.classList.add('header-sticky');
            header.classList.remove('header');
        }
        else{
            header.classList.remove('header-sticky');
            header.classList.add('header');
        }
        
    })

    /* плавная прокрутка по якорям */
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function(event){
            event.preventDefault();
            const blockID = anchor.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior:"smooth",
                block:"start"
            })
        })
    }
}





/* window.onload = function(){
    var scrolled;
    var timer;

    this.document.getElementById("top").onclick = function(){
        scrolled = window.pageYOffset;
        scrollToTop();
    }
    function scrollToTop(){
        if(scrolled > 0){
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 25; //скорость прокрутки
            timer = setTimeout(scrollToTop, 1);
        }
        else{
            clearTimeout(timer);
            window.scrollTo(0,0);
        }
    }
} */
