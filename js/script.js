
(function($)
{
	"use strict";
	
	
	jQuery(window).on('load', function() {
		preloader();
		
		
		if(jQuery('.gallery-items').length > 0){
			jQuery('.gallery-items').filterizr();
		}
		jQuery('#filter-list li').on("click", function(){
			jQuery('#filter-list li').removeClass('active');
			jQuery(this).addClass('active');
		});
	});
	
	
	
	
	function preloader(){
		jQuery(".preloaderimg").fadeOut();
		jQuery(".preloader").delay(50).fadeOut("slow").delay(50, function(){
			jQuery(this).remove();
		});
	}
	
	
	
})(jQuery);	