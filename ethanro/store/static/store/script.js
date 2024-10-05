document.addEventListener('DOMContentLoaded', ()=>{

  const prevButton = document.querySelector('.prev-product');
  const nxtButton = document.querySelector('.nxt-product');
  const sliderTrack = document.querySelector('.slide-track');
  const cards = document.querySelectorAll('.product-card');

  const prevButtonNew = document.querySelector('.prev-new');
  const nxtButtonNew = document.querySelector('.nxt-new');
  const newSlide = document.querySelector('.new-slide-track');
  const newCards = document.querySelectorAll('.new-product-card');

  const prevButtonSpecial = document.querySelector('.prev-special');
  const nxttButtonSpecial = document.querySelector('.nxt-special');
  const specialSlide = document.querySelector('.special-slide-track');
  const specialCards = document.querySelectorAll('.special-product-card');

  const menuOption = document.querySelectorAll('.menu-clear');
  const homePage = document.querySelector('.pages');
  const menu = document.querySelector(".menu-div");
  const hamMenu = document.querySelector('.menu');

  menu.style.display ='none';

  function showMenu(){
    if(menu.style.display !='none'){
      menu.style.display ='none';
    }
    else{
      menu.style.display ='block';
    }
  }

  hamMenu.addEventListener('click',showMenu);
    menuOption.forEach(menuLink =>{
      menuLink.addEventListener('click',(event)=>{
        
        menu.style.display ='none';
      })
  });

  if(homePage){
    let indexCard = 0;
    const cardWidth = cards[0].offsetWidth;
    const totalProducts = cards.length;

    //--------product slide--------

    function sliderScroll(){
      sliderTrack.style.transition = 'transform 0.6s ease-in-out';
      sliderTrack.style.transform =`translateX(-${indexCard*cardWidth}px)`;
    }

    nxtButton.addEventListener('click',()=>{
      if (indexCard >= totalProducts){
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

      //-------new slide--------
      const newCardWidth = newCards[0].offsetWidth;
      const newTotalProducts = newCards.length;
      let newIndex =0;

    function newSliderScroll(){
      newSlide.style.transition = 'transform 0.6s ease-in-out';
      newSlide.style.transform =`translateX(-${newIndex*newCardWidth}px)`;
    }

    nxtButtonNew.addEventListener('click',()=>{

      if (newIndex >= newTotalProducts){
        newSlide.style.transition = 'none';
        newIndex = 0;
        newSlide.style.transform =`translateX(-${newIndex*newCardWidth}px)`;
        setTimeout(() => {
          newSlide.style.transition = 'transform 0.6s ease-in-out';
          newIndex=0;
          newSliderScroll();
          alert(newTotalProducts);
        }, 0);
      }
      else{
        newIndex++;
        newSliderScroll();
      }
    });

    prevButtonNew.addEventListener('click',()=>{
      if(newIndex > 0){
        newIndex--;
        newSliderScroll();
      }
    });

     //-------Special slide--------
     const specialCardWidth = specialCards[0].offsetWidth;
     const specialTotalProducts = specialCards.length;
     let specialIndex =0;

   function specialSliderScroll(){
     specialSlide.style.transition = 'transform 0.6s ease-in-out';
     specialSlide.style.transform =`translateX(-${newIndex*newCardWidth}px)`;
   }

   nxttButtonSpecial.addEventListener('click',()=>{

     if (specialIndex >= newTotalProducts){
       specialSlideSlide.style.transition = 'none';
       specialIndex = 0;
       specialSlide.style.transform =`translateX(-${specialIndex*specialCardWidth}px)`;
       setTimeout(() => {
         specialSlide.style.transition = 'transform 0.6s ease-in-out';
         specialIndex=0;
         specialSliderScroll();
         alert(specialTotalProducts);
       }, 0);
     }
     else{
       specialIndex++;
       specialSliderScroll();
     }
   });

   prevButtonSpecial.addEventListener('click',()=>{
     if(specialIndex > 0){
       specialIndex--;
       specialSliderScroll();
     }
   });
  }

});