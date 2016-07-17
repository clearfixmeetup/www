var loaderUtils = require('loader-utils');
var babel = require('babel-core');

module.exports = function (source) {
    this.cacheable && this.cacheable();

    var sourceFilename = loaderUtils.getRemainingRequest(this);
    var current = loaderUtils.getCurrentRequest(this);

    var query = loaderUtils.parseQuery(this.query);
    if (query.insertPragma) {
        source = '/** @jsx ' + query.insertPragma + ' */' + source;
    }

    source = `
  import React from 'react';
  module.exports = function ___HTMLJSXComponent___(props) { return (${source}); }
  `;

    var transform = babel.transform(source, {
        presets: ['react', 'es2015', 'stage-0']
    });

    if (transform.map) {
        transform.map.sources = [sourceFilename];
        transform.map.file = current;
        transform.map.sourcesContent = [source];
    }

    this.callback(null, transform.code, transform.map);
};
