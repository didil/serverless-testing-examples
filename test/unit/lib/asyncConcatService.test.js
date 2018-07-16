const expect = require('chai').expect;

const asyncConcatService = require('../../../lib/asyncConcatService');

describe('asyncConcatService', function () {
  it('concats', async () => {
    let a = "Serverless";
    let b = "is awesome";

    let result = await asyncConcatService.concat(a, b);

    expect(result).to.eq("Serverless is awesome");
  });

});

