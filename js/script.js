// Creare un hamburger menu con l’utilizzo di
// Html, Css e JavaScript.
var menuRight = $('.header-right');
var menuHamburger = $('.fas fa-times');

menuRight.click(
  function(){
    $('.header-right').hide();
  }
);

menuRight.dblclick(
  function(){
    $('.header-right').show();
  }
);

// menuHamburger.dblclick(
//   function(){
//     $('.close').show();
//   }
// );
