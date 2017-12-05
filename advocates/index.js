module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('Bindings', context.bindings);
    context.log('Request', req);

  context.log('JavaScript HTTP trigger function processed a request.');

  const id = parseInt(context.bindingData.id);
  let advocateService = require('../services/advocates');
  let filters = require('../services/filters');
  let data = advocateService.getAdvocates();

  if (id) {
      const advocate = filters.getMatch(data.results, id)
        context.res = {
            // status: 200, /* Defaults to 200 */
          body: advocate
        };
    }
    else {
        context.res = {
            body: data
        };
    }
    context.done();
  };