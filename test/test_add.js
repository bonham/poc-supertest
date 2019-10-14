const x = require('../app.js');
const addme = x.addme;

var assert = require('assert');
describe('Testgroup', function() {
  describe('testadd', function() {
    it('should return something', function() {
      assert.equal(addme(2, 3), 5);
    });
  });
});
