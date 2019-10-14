const assert = require('assert');
const request = require('supertest');
const x = require('../app.js');
const app = x.app;
describe('GET /', function() {
  it('Expecting Hello World', function(done) {
    request(app)
      .get('/')
      .expect(200, "Hello World!", done)
  });
});

