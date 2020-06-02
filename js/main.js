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
    /* активные кнопки фильтра графиков */
    const place = document.querySelectorAll('.place-dis');
    const time = document.querySelectorAll('.time-dis');

for (let i = 0; i < place.length; i++) {
    place[i].addEventListener('click',(e)=>{
        e.preventDefault();
        place.forEach((el)=>{
            if(el.classList.contains('place-active')) el.classList.remove('place-active');
        })
        place[i].classList.add('place-active');
    })
}

for (let i = 0; i < time.length; i++) {
    time[i].addEventListener('click',(e)=>{
        e.preventDefault();
        time.forEach((el)=>{
            if(el.classList.contains('time-active')) el.classList.remove('time-active');
        })
        time[i].classList.add('time-active');
    })
}


            
            
        }

