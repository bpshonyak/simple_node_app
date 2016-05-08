/**
 * Created by bogdan on 5/6/16.
 */
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

var server = require("../server");
var app;

chai.use(chaiHttp);

describe("server requests", function() {

  before(function () {
    app = server.listen(1337);
  });

  after(function () {
    app.close();
  });

  it("/index should have a status of 200", function (done) {
    chai.request("http://localhost:1337")
        .get("/index")
        .end(function(err, res){
            expect(res).to.have.status(200);
            done();
        });
  });

  it("/random should have a status of 404", function (done) {
    chai.request("http://localhost:1337")
        .get("/random")
        .end(function(err, res){
          expect(res).to.have.status(404);
          done();
        });
  });

  it("/users/bogdan should have a status of 200", function (done) {
    chai.request("http://localhost:1337")
        .get("/users/bogdan")
        .end(function(err, res){
          expect(res).to.have.status(200);
          done();
        });
  });

  it("/users/@!# should have a status of 404", function (done) {
    chai.request("http://localhost:1337")
        .get("/users/@!#")
        .end(function(err, res){
          expect(res).to.have.status(404);
          done();
        });
  });

});
