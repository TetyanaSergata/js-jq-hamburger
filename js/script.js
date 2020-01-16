// Creare un hamburger menu con l’utilizzo di
// Html, Css e JavaScript.

var iconMenu = $('.header-right > a');    //icona menu
var menuHamburger = $('.hamburger-menu');  //il menu interno
var close = $('.close');

iconMenu.click(
  function(){
    menuHamburger.show('slow');
  }
);

close.click(
  function(){
    menuHamburger.hide('fast');
  }
);
