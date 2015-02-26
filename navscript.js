var link = document.querySelector('#navLoc');
var menu = document.querySelector('#navBar');
var nav1 = document.querySelector('#nav1');
var nav2 = document.querySelector('#nav2');
var nav3 = document.querySelector('#nav3');
var nav4 = document.querySelector('#nav4');

link.addEventListener('click', function(e) {
  if(nav1.classList.contains('hideNav')){
    //show
    nav1.classList.toggle('hideNav');
    nav2.classList.toggle('hideNav');
    nav3.classList.toggle('hideNav');
    nav4.classList.toggle('hideNav');
    menu.classList.toggle('hideNav');
  }
  else {
    //hide
    menu.classList.toggle('hideNav');
    setTimeout(function() {
      nav1.classList.toggle('hideNav');
      nav2.classList.toggle('hideNav');
      nav3.classList.toggle('hideNav');
      nav4.classList.toggle('hideNav');
    }, 300);
  }
  e.stopPropagation();
});
