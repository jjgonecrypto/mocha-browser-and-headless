window.simple = (function ($) {
  'use strict';

  return {
    name: 'test',
    setName: function (name) {
      this.name = name;
    },
    appendToDOM: function (klazz) {
      $('body').append('<div class="' + klazz + '">' + this.name + '</div>');
    }
  };

})(jQuery);