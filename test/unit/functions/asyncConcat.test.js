const expect = require('chai').expect;
const sinon = require('sinon');

const asyncConcatService = require("../../../lib/asyncConcatService");

let asyncConcat = require("../../../functions/asyncConcat");

describe('asyncConcat', function asyncConcatTest() {
  let concatStub;

  context('input ok', function () {
    let queryStringParameters = { a: "a string", b: "b string" };
    let result = "result stub";

    before(function beforeTest() {
      concatStub = sinon.stub(asyncConcatService, "concat");
      concatStub.callsFake(function (a, b) {
        expect(a).to.eq(queryStringParameters.a);
        expect(b).to.eq(queryStringParameters.b);

        return Promise.resolve(result);
      });
    });

    it('success', async function () {
      let event = { queryStringParameters };
      let context = {};

      let response = await asyncConcat.handler(event, context);

      expect(response.statusCode).to.eq(200);
      expect(response.body).to.eq(`{"result":"${result}"}`);
    });

    after(function afterTest() {
      concatStub.restore();
    });
  });

  context('input missing', function () {
    let queryStringParameters = { a: "a string" };

    it('failure', async function () {
      let event = { queryStringParameters };
      let context = {};

      let response = await asyncConcat.handler(event, context);

      expect(response.statusCode).to.eq(400);
      expect(response.body).to.eq('{"message":"Please specify 2 strings a and b to concatenate"}');
    });

    after(function afterTest() {
      concatStub.restore();
    });
  });

});
