// Creare un hamburger menu con l’utilizzo di
// Html, Css e JavaScript.

var menuHamburger = $('hamburger-menu');

menuHamburger.click(
  function(){
    $('hamburger-menu').show('fast');
  }
);
console.log(menuHamburger);
