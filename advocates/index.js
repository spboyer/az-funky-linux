module.exports = function (context, request) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('Bindings', context.bindings);
    context.log('Request', request);

    const id = parseInt(context.bindingData.id);

    let advocateService = require('../services/advocates');
    let filters = require('../services/filters');
    let data = advocateService.getAdvocates();
    let response = {};

    if (id) {
      const advocate = filters.getMatch(data.results, id);
      response = {
        body: advocate
      };
    }
    else {
      response = {
        body: data
      };
    }
    context.done(null, response);
  };