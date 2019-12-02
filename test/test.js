const request = require("supertest");
const app = require("../server.js");

describe("Testing default route", function() {
  it("GET / ", function(done) {
    request(app)
      .get("/")
      .expect(200, done);
  });

  it("GET /test ", function(done) {
    request(app)
      .get("/test")
      .expect(200, done);
  });
});

describe("Testing service route", function() {
  it("GET /tasks ", function(done) {
    request(app)
      .get("/tasks")
      .expect(200, done);
  });
});
