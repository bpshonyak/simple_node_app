/**
 * Created by bogdan on 5/6/16.
 */
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);


describe("server", function() {

  it("should have a status of 404", function () {
    chai.request('http://localhost:1337')
        .get("/")
        .end(function(res){
          expect(res).to.have.status(404);
        });
  });

  // it("should return 'Hello, World!'", function () {
  //   chai.request('http://localhost:1337')
  //       .get("/")
  //       .end(function(err, res){
  //         res.body.should.be("Hello, Wold!");
  //       });
  // });

});
