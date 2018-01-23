
function menudrop() {
  document.getElementsByClassName("mymenu")[0].classList.toggle("show");
  return false;
}


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
