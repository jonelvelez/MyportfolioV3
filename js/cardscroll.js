let scrollcard = function(){

    let cards = document.querySelectorAll('.section-recentproject .card');
  

    Array.from(cards).forEach((card) => {
        let cardsPosition = card.getBoundingClientRect().top
        let screenPosition = window.innerHeight / 1;
  
       
        if(cardsPosition < screenPosition){
            card.classList.add('cardaddclass');
        } else {
            card.classList.remove('cardaddclass')
        }

    });
}

window.addEventListener('scroll', scrollcard);