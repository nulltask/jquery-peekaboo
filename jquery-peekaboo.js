
/*!
 * jQuery Peekaboo 0.0.1
 *
 * @dependency jQuery 1.7+
 * @author Uniba Inc.
 * @license MIT License
 */

(function(window, document, $) {

  var $window = $(window)
    , els = [];

  $.fn.peekaboo = function(options) {
    return this.each(function() {
      els.push(this);
    });
  };
  
  $window.on('scroll resize', function(e) {
    $.each(els, function() {
      var $elem = $(this);
      if ($window.scrollTop() < $elem.offset().top + $elem.height()
        && $elem.offset().top < $window.scrollTop() + $window.height()) {
        $elem.trigger('appear', e);
      }
      else {
        $elem.trigger('disappear', e);
      }
    });
  });

}).call(this, window, document, jQuery);