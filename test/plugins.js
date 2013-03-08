var calc = require('../lib/calc'),
    rework = require('rework'),
    should = require('chai').Should(),
    read = require('fs').readFileSync,
    cssIn = read(__dirname + '/calc.in.css', 'utf8'),
    cssOut = read(__dirname + '/calc.out.css', 'utf8');

describe('calc()', function(){
  it('should add calculations support', function(){
    rework(cssIn)
      .use(calc())
      .toString()
      .should.equal(cssOut);
  });
});
