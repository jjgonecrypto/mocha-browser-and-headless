(function ($, sinon, chai, simple) {
  'use strict';

  var expect = chai.expect;

  describe('simple.js', function () {
    it('must test simple JS modules', function () {
      simple.setName('test');
      expect(simple.name).to.equal('test');
    });

    it('must also test DOM interactions', function () {
      simple.setName('thor');
      simple.appendToDOM('someClass');
      expect($('body .someClass').html()).to.equal('thor');
      $('body .someClass').remove();
    });

  });

})(jQuery, window.sinon, window.chai, window.simple);