(function($) {
	$.fn.fontAnimate = function(options) {

		var $this = $(this);

		defaults = $.extend ({
            fontFamily: 'sans-serif',
            fontSize: $this.css('font-size'),
            fontWeight: $this.css('font-weight'),
            fontStyle: $this.css('font-style'),
            lineHeight: $this.css('line-height'),
            letterSpacing: $this.css('letter-spacing'),
            duration: 1000
		}, options );

		$this.wrap('<div class="font-animate"/>');
		var $wrap = $('.font-animate');

		$wrap.css({
			position: 'relative'
		});

		//$this.after('<span class="font-animate-after"></span>');
		$this.after( '<' + $this.prop('tagName') + ' class="font-animate-after"' + '></' + $this.prop('tagName') + '>' );

		var $after = $this.siblings('.font-animate-after'),
			attributes = $this.prop("attributes");

		// loop through attributes of $this and apply them to $after
		$.each(attributes, function() {
		    $after.attr(this.name, this.value);
		});

		$after.html($this.html()); // copy text from original element to new element
		$after.css({
			position: 'absolute',
			top: 0,
			left: 0, 
			opacity: 0,
			'font-family': options.fontFamily || defaults.fontFamily,
			'font-size': options.fontSize || defaults.fontSize,
			'font-weight': options.fontWeight || defaults.fontWeight,
			'font-style': options.fontStyle || defaults.fontStyle,
			'line-height': options.lineHeight || defaults.lineHeight,
			'letter-spacing': options.letterSpacing || defaults.letterSpacing
		});

		$this.stop().animate({opacity:0}, options.duration || defaults.duration);
		$after.stop().animate({opacity:1}, options.duration || defaults.duration, function() {
			$after.unwrap(); // remove temporary wrapper ($wrap)
			$after.removeClass('font-animate-after');
			$after.css({
				position: $this.css('position'), // restore original position, top and left values
				top: $this.css('top'),
				left: $this.css('left')
			});
			$this.remove();
		});

	}
}) (jQuery);