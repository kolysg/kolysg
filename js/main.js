$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});


/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

	var bodyEl = document.body,
		//content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		/* close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
		*/
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();


/******************************************************************************************************************************
//project-buttons
*******************************************************************************************************************************/ 
$(function() {
    $('.proj-btn-1').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').animate({
            scrollTop: $(".projects-ui").offset().top},
        'slow');
        event.preventDefault();
    });
});


$(function() {
    $('.proj-btn-2').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').animate({
            scrollTop: $(".projects-fend").offset().top},
        'slow');
        event.preventDefault();
    });
});

$(function() {
    $('.proj-btn-3').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').animate({
            scrollTop: $(".projects-design").offset().top},
        'slow');
        event.preventDefault();
    });
});




