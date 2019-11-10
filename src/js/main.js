"use strict";

const slideShow = $('.slider__show--js');
const slideCount = $('.single-slide--js').length;
let slideHeight = 100 / slideCount;
let slideIndex = 0;

// ustawiam dynamiczną wysokość kontenera ze slajdami, zależną od ilości slajdów
slideShow.css({
  height: slideCount + '00%'
});

// ustawienie wysokości i pozycjonowanie wewnętrznych kontenerów
slideShow.find('.slide--js').each( (index) => {
  $(this).css({
    height: slideHeight + '%',
    top: slideHeight * index + '%'
  });
});

// przypisywanie zdarzeń do przycisków nawigacji
$('.slider__arrows--next-js').on('click', () => {
  //console.log('klik naprzód');
  slide(slideIndex + 1);
});

$('.slider__arrows--prev-js').on('click', () => {
  //console.log('klik wstecz');
  slide(slideIndex - 1);
});

// funkcja przesuwająca slajdy
const slide = (newSlideIndex) => {
  if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
    return;
  }

  const slideCaption = $('.single-slide__inner--js').eq(newSlideIndex);
  const Top = newSlideIndex * -100 + '%';

  slideCaption.hide();

  slideShow.animate(
    {
      'top': Top
    },
    800,
    () => {
      slideIndex = newSlideIndex;
      slideCaption.fadeIn();
    }
  );
};
