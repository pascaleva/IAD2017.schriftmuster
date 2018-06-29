document.addEventListener("DOMContentLoaded", function() {
  var menu = document.querySelector('.navigation--toggle');
  var body = document.querySelector('body');

  menu.addEventListener('click', function(){
      body.classList.toggle('nav-open');
  })
});
