var plugins = require('../index'),
    rework = require('rework'),
    should = require('chai').Should(),
    read = require('fs').readFileSync;

var css = {
  in: function (name) {
    return this._read(name, 'in');
  },
  out: function (name) {
    return this._read(name, 'out');
  },
  _read: function (name, type) {
    return read(__dirname + '/' + name + '.' + type + '.css', 'utf8');
  }
};

describe('klei-rework-plugins', function(){
  describe('calc()', function(){
    it('should add calculations support', function(){
      rework(css.in('calc'))
        .use(plugins.calc())
        .toString()
        .should.equal(css.out('calc'));
    });
  });

  describe('breakpoints()', function(){
    it('should add breakpoints support', function(){
      rework(css.in('breakpoints'))
        .use(plugins.breakpoints())
        .toString()
        .should.equal(css.out('breakpoints'));
    });
  });
});