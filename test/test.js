const request = require("supertest");
const app = require("../server.js");

describe("Testing default route", function () {
  it("GET / ", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .end(done);
  });

  it("GET /test ", (done) => {
    request(app)
      .get("/test")
      .expect(200)
      .end(done);
  });
});