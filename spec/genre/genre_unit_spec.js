const request = require('request');
const server = require('../../server');

describe("get api/genres", () => {
  const endpoint = "http://localhost:3000/api/genres/";

  it("returns 200 status", (done) => {
    request.get(endpoint, function(err, res) {
      expect(res.statusCode).toEqual(200);
      done();
    });
  });

  it("returns all (5) genres in the datastore", (done) => {
    request.get(endpoint, function(err, res) {
      expect(JSON.parse(res.body).length).toEqual(5);
      done();
    });
  });

  it("returns header content-type application/json; charset=utf-8", (done) => {
    request.get(endpoint, function(err, res) {
      expect(res.headers['content-type']).toEqual("application/json; charset=utf-8"); 
      done();
    });
  });
});
