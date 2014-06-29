(function($) {
	$.fn.changeFont = function(font, fontSize) {
		
		var $this = $(this),
			$span = $this.children('span');

		$span.after('<span class="after" style="position:absolute; top:0; left:0; opacity:0;"></span>');

		var $after = $span.siblings('.after');

		$after.html( $span.html() );
		$after.css({
			'font-family': font,
			'font-size': fontSize
		});

		$span.stop().animate({opacity:0}, {duration:1000});
		$after.stop().animate({opacity:1}, {duration:1000});	

	}
}) (jQuery);