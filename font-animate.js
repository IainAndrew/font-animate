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

		$this.wrap('<div class="font-animate"/>');
		var $wrap = $('.font-animate');

		$wrap.css({
			position: 'relative'
		});

		$this.after('<span class="after"></span>');

		var $after = $this.siblings('.after');

		var attributes = $this.prop("attributes");

		// loop through attributes of $this and apply them to $after
		$.each(attributes, function() {
		    $after.attr(this.name, this.value);
		});

		$after.html( $this.html() );

		$after.css({
			position: 'absolute',
			top: 0,
			left: 0, 
			opacity: 0,
			'font-family': options.fontFamily || defaults.fontFamily,
			'font-size': options.fontSize || defaults.fontSize,
			'font-weight': options.fontWeight || defaults.fontWeight,
			'font-style': options.fontStyle || defaults.fontStyle
		});

		$this.stop().animate({opacity:0}, options.duration || defaults.duration);
		$after.stop().animate({opacity:1}, options.duration || defaults.duration, function() {
			$after.unwrap();
			$after.removeClass('after');
			$after.css({
				position: $this.css('position'),
				top: $this.css('top'),
				left: $this.css('left')
			});
			$this.remove();
		});

	}
}) (jQuery);