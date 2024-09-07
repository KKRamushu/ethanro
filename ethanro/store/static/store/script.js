document.addEventListener('DOMContentLoaded', ()=>{

  const prevButton = document.querySelector('.prev');
  const nxtButton = document.querySelector('.nxt');
  const sliderTrack = document.querySelector('.slide-track');
  const cards = document.querySelectorAll('.product-card');

  let indexCard = 0;
  const cardWidth = cards[0].offsetWidth;
  const totalProducts = cards.length;

  function sliderScroll(){
    sliderTrack.style.transition = 'transform 0.6s ease-in-out';
    sliderTrack.style.transform =`translateX(-${indexCard*cardWidth}px)`;
  }

  nxtButton.addEventListener('click',()=>{
    if (indexCard >= totalProducts-4){
      sliderTrack.style.transition = 'none';
      indexCard = 0;
      sliderTrack.style.transform =`translateX(-${indexCard*cardWidth}px)`;
      setTimeout(() => {
        sliderTrack.style.transition = 'transform 0.6s ease-in-out';
        indexCard=0;
        sliderScroll();
      }, 0);
    }
    else{
      indexCard++;
      sliderScroll();
    }
  });
  prevButton.addEventListener('click',()=>{
    if(indexCard > 0){
      indexCard--;
      sliderScroll();
    }
  });
});