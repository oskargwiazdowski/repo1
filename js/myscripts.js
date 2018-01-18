
function menudrop() {
  document.getElementsByClassName("mymenu")[0].classList.toggle("show");
  return false;
}

function progressBar() {
  var windowTop = window.scrollY,
    documentHeight = document.documentElement.scrollHeight,
    windowHeight = screen.height;

  var totalScroll = (windowTop / (documentHeight - windowHeight)) * 100;

  document.querySelector('.progress-bar__filling').style.width = totalScroll + '%';
}

window.addEventListener('scroll', progressBar);








setInterval(function() {
function r(el, deg) {
  el.setAttribute('transform', 'rotate('+ deg +' 504.2 247.5)')
}
var d = new Date()
r(sec, 6*d.getSeconds())
r(min, 6*d.getMinutes())
r(hour, 30*(d.getHours()%12) + d.getMinutes()/2)
}, 1000)











$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2
    },
    700: {
      items: 4
    },
    1000: {
      items: 8
    }
  }
})
