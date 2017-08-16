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
		// openbtn.addEventListener( 'click', toggleMenu );
		// if( closebtn ) {
		// 	closebtn.addEventListener( 'click', toggleMenu );
		// }

		/* close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
		*/
	}

	// function toggleMenu() {
	// 	if( isOpen ) {
	// 		classie.remove( bodyEl, 'show-menu' );
	// 	}
	// 	else {
	// 		classie.add( bodyEl, 'show-menu' );
	// 	}
	// 	isOpen = !isOpen;
	// }

	// init();

})();


/******************************************************************************************************************************
//project-buttons
*******************************************************************************************************************************/ 
$(function() {
    $('.proj-btn-ui').bind('click', function(event) {
        var $anchor = $(this);
        var $url = $anchor.attr("url");
        window.open($url, 'new_window');
        event.preventDefault();
    });
});


$(function() {
    $('.proj-btn-app').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').animate({
            scrollTop: $(".projects-ui").offset().top},
        'slow');
        event.preventDefault();
    });
});

$(function() {
    $('.proj-btn-design').bind('click', function(event) {
        var $anchor = $(this);

        $('html, body').animate({
            scrollTop: $(".projects-design").offset().top},
        'slow');
        event.preventDefault();
    });
});


//read more button
// $(function() {
// 	$(.weight-outline-btn).bind('click', function(event) {
// 		var $anchor = $(this);
// 		$('readMore_project1').text("Creating Zaps: Integrated application’s (AccountingSuite) API to receive and send data to other  applications using ‘Zapier’ web platform. ")
// 		event.preventDefault();
// 	}); 
// });





