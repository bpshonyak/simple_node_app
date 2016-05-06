/**
 * Created by bogdan on 5/6/16.
 */
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);


describe("server", function() {

  it("should have a status of 200", function (done) {
    chai.request('http://localhost:1337')
        .get("/")
        .end(function(err, res){
            expect(res).to.have.status(200);
            done();
        });
  });

  it("should return text/plain", function (done) {
    chai.request('http://localhost:1337')
        .get("/")
        .end(function(err, res){
          expect(res).to.have.header('content-type', 'text/plain');
          done();
        });
  });

});
