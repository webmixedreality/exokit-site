var urljoin = require('urljoin.js');

var utils = require('../node_scripts/utils');

hexo.extend.generator.register('examples', function (locals) {
  var routes = [];

  function addRoute (path, data, layout) {
    routes.push({
      path: path,
      data: data,
      layout: layout
    });
  }

  addRoute('docs/', utils.createRedirectResponse(hexo, 'docs/engine/'));
  addRoute('faq/', utils.createRedirectResponse(hexo, 'docs/engine/faq.html'));


  return routes;
});
