!function(n){var e={};function l(i){if(e[i])return e[i].exports;var c=e[i]={i:i,l:!1,exports:{}};return n[i].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=n,l.c=e,l.d=function(n,e,i){l.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,e){if(1&e&&(n=l(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)l.d(i,c,function(e){return n[e]}.bind(null,c));return i},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="",l(l.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nconst slideShow = $('.slider__show--js');\nconst slideCount = $('.single-slide--js').length;\nlet slideHeight = 100 / slideCount;\nlet slideIndex = 0;\n\n// ustawiam dynamiczną wysokość kontenera ze slajdami, zależną od ilości slajdów\nslideShow.css({\n  height: slideCount + '00%'\n});\n\n// ustawienie wysokości i pozycjonowanie wewnętrznych kontenerów\nslideShow.find('.slide--js').each( (index) => {\n  $(this).css({\n    height: slideHeight + '%',\n    top: slideHeight * index + '%'\n  });\n});\n\n// przypisywanie zdarzeń do przycisków nawigacji\n$('.slider__arrows--next-js').on('click', () => {\n  //console.log('klik naprzód');\n  slide(slideIndex + 1);\n});\n\n$('.slider__arrows--prev-js').on('click', () => {\n  //console.log('klik wstecz');\n  slide(slideIndex - 1);\n});\n\n// funkcja przesuwająca slajdy\nconst slide = (newSlideIndex) => {\n  if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {\n    return;\n  }\n\n  const slideCaption = $('.single-slide__inner--js').eq(newSlideIndex);\n  const Top = newSlideIndex * -100 + '%';\n\n  slideCaption.hide();\n\n  slideShow.animate(\n    {\n      'top': Top\n    },\n    800,\n    () => {\n      slideIndex = newSlideIndex;\n      slideCaption.fadeIn();\n    }\n  );\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBzbGlkZVNob3cgPSAkKCcuc2xpZGVyX19zaG93LS1qcycpO1xuY29uc3Qgc2xpZGVDb3VudCA9ICQoJy5zaW5nbGUtc2xpZGUtLWpzJykubGVuZ3RoO1xubGV0IHNsaWRlSGVpZ2h0ID0gMTAwIC8gc2xpZGVDb3VudDtcbmxldCBzbGlkZUluZGV4ID0gMDtcblxuLy8gdXN0YXdpYW0gZHluYW1pY3puxIUgd3lzb2tvxZvEhyBrb250ZW5lcmEgemUgc2xhamRhbWksIHphbGXFvG7EhSBvZCBpbG/Fm2NpIHNsYWpkw7N3XG5zbGlkZVNob3cuY3NzKHtcbiAgaGVpZ2h0OiBzbGlkZUNvdW50ICsgJzAwJSdcbn0pO1xuXG4vLyB1c3Rhd2llbmllIHd5c29rb8WbY2kgaSBwb3p5Y2pvbm93YW5pZSB3ZXduxJl0cnpueWNoIGtvbnRlbmVyw7N3XG5zbGlkZVNob3cuZmluZCgnLnNsaWRlLS1qcycpLmVhY2goIChpbmRleCkgPT4ge1xuICAkKHRoaXMpLmNzcyh7XG4gICAgaGVpZ2h0OiBzbGlkZUhlaWdodCArICclJyxcbiAgICB0b3A6IHNsaWRlSGVpZ2h0ICogaW5kZXggKyAnJSdcbiAgfSk7XG59KTtcblxuLy8gcHJ6eXBpc3l3YW5pZSB6ZGFyemXFhCBkbyBwcnp5Y2lza8OzdyBuYXdpZ2FjamlcbiQoJy5zbGlkZXJfX2Fycm93cy0tbmV4dC1qcycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgLy9jb25zb2xlLmxvZygna2xpayBuYXByesOzZCcpO1xuICBzbGlkZShzbGlkZUluZGV4ICsgMSk7XG59KTtcblxuJCgnLnNsaWRlcl9fYXJyb3dzLS1wcmV2LWpzJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAvL2NvbnNvbGUubG9nKCdrbGlrIHdzdGVjeicpO1xuICBzbGlkZShzbGlkZUluZGV4IC0gMSk7XG59KTtcblxuLy8gZnVua2NqYSBwcnplc3V3YWrEhWNhIHNsYWpkeVxuY29uc3Qgc2xpZGUgPSAobmV3U2xpZGVJbmRleCkgPT4ge1xuICBpZiAobmV3U2xpZGVJbmRleCA8IDAgfHwgbmV3U2xpZGVJbmRleCA+IHNsaWRlQ291bnQgLSAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc2xpZGVDYXB0aW9uID0gJCgnLnNpbmdsZS1zbGlkZV9faW5uZXItLWpzJykuZXEobmV3U2xpZGVJbmRleCk7XG4gIGNvbnN0IFRvcCA9IG5ld1NsaWRlSW5kZXggKiAtMTAwICsgJyUnO1xuXG4gIHNsaWRlQ2FwdGlvbi5oaWRlKCk7XG5cbiAgc2xpZGVTaG93LmFuaW1hdGUoXG4gICAge1xuICAgICAgJ3RvcCc6IFRvcFxuICAgIH0sXG4gICAgODAwLFxuICAgICgpID0+IHtcbiAgICAgIHNsaWRlSW5kZXggPSBuZXdTbGlkZUluZGV4O1xuICAgICAgc2xpZGVDYXB0aW9uLmZhZGVJbigpO1xuICAgIH1cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);