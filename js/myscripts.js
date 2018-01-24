( function() {
	var button = document.querySelector( '.menu-icon' );

	button.addEventListener( 'click', function( evt ) {
		var menu = document.querySelector( '.nav-menu-closed' );

		menu.classList.toggle( 'nav-menu-open' );
		button.setAttribute( 'aria-expanded', String( menu.classList.contains( 'nav-menu-open' ) ) );
	}, false );
}() );


$(".smooth-scroll").click(function() {
	var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 800);
    });


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
