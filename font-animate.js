(function($) {
	$.fn.changeFont = function(options) {

		var $this = $(this);

		defaults = $.extend ({
            fontFamily: 'sans-serif',
            fontSize: $this.css('font-size'),
            fontWeight: $this.css('font-weight'),
            fontStyle: $this.css('font-style'),
            duration: 1000
		}, options );
		
			/*$span = $this.children('span');

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
		$after.stop().animate({opacity:1}, {duration:1000});*/

		$this.wrap('<div class="font-animate"/>');
		var $wrap = $('.font-animate');

		$wrap.css({
			position: 'relative'
		});

		$this.after('<span class="after" style="position:absolute; top:0; left:0; opacity:0;"></span>');

		var $after = $this.siblings('.after');

		$after.html( $this.html() );

		var attributes = $this.prop("attributes");

		// loop through attributes of $this and apply them to $after
		$.each(attributes, function() {
		    $after.attr(this.name, this.value);
		});

		$after.css({
			'font-family': options.fontFamily || defaults.fontFamily,
			'font-size': options.fontSize || defaults.fontSize,
			'font-weight': options.fontWeight || defaults.fontWeight,
			'font-style': options.fontStyle || defaults.fontStyle
		});

		$this.stop().animate({opacity:0}, {duration:options.duration || defaults.duration});
		$after.stop().animate({opacity:1}, {duration:options.duration || defaults.duration});

	}
}) (jQuery);