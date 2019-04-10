// const app = require('../app.js'); 
const request = require('request');
const server = require('../../server');

const base_url = "http://localhost:3000";

describe("genre_route", () => {
  describe("get api/genres", function() {
    it("returns 200 status", function(done) {
      const endpoint = "http://localhost:3000/api/genres/";

      request.get(endpoint, function(err, response) {
	expect(response.statusCode).toEqual(200);
	// console.log(response);
	done();
      });
    });
  });

});
