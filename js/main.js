window.onload = function(){
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
}
