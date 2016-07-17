var yaml = require('yaml-front-matter');
var markdown = require('markdown-it');
var hljs = require('highlight.js');

var path = require('path');
var attrParse = require('html-loader/lib/attributesParser');
var loaderUtils = require('loader-utils');
var url = require('url');
var assign = require('object-assign');

var extend = function (obj, source) {
    var prop;

    for (prop in source) {
        if (source.hasOwnProperty(prop)) {
            obj[prop] = source[prop];
        }
    }

    return obj;
};

function randomIdent() {
    return 'xxxHTMLLINKxxx' + Math.random() + Math.random() + 'xxx';
}

function getLoaderConfig(context) {
    var query = loaderUtils.parseQuery(context.query);
    var configKey = query.config;
    var config = context.options && context.options.hasOwnProperty(configKey) ? context.options[configKey] : {};

    delete query.config;

    return assign(query, config);
}

module.exports = function (source) {
    this.cacheable && this.cacheable();

    var fileData = yaml.parse(source);

    var opts = extend({
        preset: 'default',
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value;
                } catch (err) {}
            }

            try {
                return hljs.highlightAuto(str).value;
            } catch (err) {}

            return '';
        }
    }, this.options['markdown-it']);

    var plugins = opts.use;
    delete opts.use;

    var parser = markdown(opts.preset, opts);
    parser.linkify
          .tlds(require('tlds'))   // Reload with full tlds list
          .tlds('.onion', true)    // Add uniffocial `.onion` domain
          .add('git:', 'http:')    // Add `git:` ptotocol as "alias"
          .add('ftp:', null)       // Disable `ftp:` ptotocol
          .set({fuzzyIP: true}); // Enable IPs in fuzzy links (withour schema)

    if (plugins) {
        plugins.forEach(function (plugin) {
            plugin instanceof Array || (plugin = [plugin]);
            parser.use.apply(parser, plugin);
        });
    }

    var content = parser.render(fileData.__content);
    fileData.__content = '';

    // make require calls from specified attributes in HTML (taken from html-loader)
    var config = getLoaderConfig(this);
    var attributes = ['img:src', 'link:href'];
    if (config.attrs !== undefined) {
        if (typeof config.attrs === 'string')
            attributes = config.attrs.split(' ');
        else if (Array.isArray(config.attrs))
            attributes = config.attrs;
      else if (config.attrs === false)
          attributes = [];
      else
        throw new Error('Invalid value to config parameter attrs');
    }
    var root = config.root;
    var links = attrParse(content, function (tag, attr) {
        return attributes.indexOf(tag + ':' + attr) >= 0;
    });
    links.reverse();
    var data = {};
    content = [content];
    links.forEach(function (link) {
        if (!loaderUtils.isUrlRequest(link.value, root)) return;

        var uri = url.parse(link.value);
        if (uri.hash !== null && uri.hash !== undefined) {
            uri.hash = null;
            link.value = uri.format();
            link.length = link.value.length;
        }

        do {
            var ident = randomIdent();
        } while (data[ident]);
        data[ident] = link.value;
        var x = content.pop();
        content.push(x.substr(link.start + link.length));
        content.push(ident);
        content.push(x.substr(0, link.start));
    });

    content.reverse();
    content = content.join('');
    content = JSON.stringify(content, null, 0);
    content = content.replace(/xxxHTMLLINKxxx[0-9\.]+xxx/g, function (match) {
        if (!data[match]) return match;
        return '" + require(' + JSON.stringify(loaderUtils.urlToRequest(data[match], root)) + ') + "';
    }.bind(this));

    return 'module.exports = (function() { ' +
      'var fileData =' + JSON.stringify(fileData) + ';' +
      'var content =' + content + ';' +
      'fileData.__content = content;' +
      'return fileData;' +
    '})();';
};
