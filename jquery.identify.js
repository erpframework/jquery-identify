/**
 * A modified port of Prototype's identify()
 * Modifications from:
 * @link http://stackoverflow.com/a/470818/372654
 */

(function($) {
jQuery.fn.identify = function(options) {
    var i  = 0,
        id = null,
        o  = $.extend(true, {}, $.fn.identify.defaults, options);
    this.each(function() {
        var $el = $(this);

        id = $el.attr("id");
        if (id) {
            return id;
        }

        var prefix      = prefix || o.prefix,
            pfSeparator = pfSeparator || o.pfSeparator,
            fullPf      = prefix + pfSeparator;

        do {
            id = fullPf + i++;
        } while ($("#" + id).length > 0);

        $el.attr("id", id);
    });
    return id;
};

$.fn.identify.defaults = {
    prefix      : "anonymous_element",
    pfSeparator : "_"
};
})(jQuery);