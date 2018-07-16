const jsonResponse = require("../lib/jsonResponse");
const asyncConcatService = require("../lib/asyncConcatService");

module.exports.handler = async (event, context) => {
  let { a, b } = event.queryStringParameters;

  if (!a || !b) {
    return jsonResponse.error({
      message: "Please specify 2 strings a and b to concatenate"
    });
  }

  let result = await asyncConcatService.concat(a, b);

  return jsonResponse.ok({ result });
};

