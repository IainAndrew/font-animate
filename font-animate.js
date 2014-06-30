(function($) {
	$.fn.changeFont = function(options) {

		defaults = $.extend ({
            fontFamily: 'sans-serif',
            fontSize: 'medium',
            fontWeight: 'normal',
            fontStyle: 'normal'
		}, options );
		
		var $this = $(this),
			$span = $this.children('span');

		$span.after('<span class="after" style="position:absolute; top:0; left:0; opacity:0;"></span>');

		var $after = $span.siblings('.after');

		$after.html( $span.html() );
		$after.css({
			'font-family': options.fontFamily,
			'font-size': options.fontSize,
			'font-weight': options.fontWeight,
			'font-style': options.fontStyle
		});

		$span.stop().animate({opacity:0}, {duration:1000});
		$after.stop().animate({opacity:1}, {duration:1000});	

	}
}) (jQuery);