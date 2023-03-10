const request = require('supertest');
// app is supposed to point to the app.js file
const app = require('../app');

describe('http://localhost:7000/', function () {
    it('respond with valid HTTP status code and description and message', async function (done) {
      // Make POST Request
      const response = await supertest(app).post('/crud').send({
        title: 'How to write a shot',
        description: "Access the Edpresso tutorial"
      });

      // Compare response with expectations
      expect(response.status).toBe(200);
      expect(response.body.status).toBe('success');
      expect(response.body.message).toBe('Shot Saved Successfully.');
      done()
    });
});

 //for get api
request('http://localhost:7000/')
  .get('crud')
  .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
  });