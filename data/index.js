import {Component} from 'react';
import site from './site.yml';

site.baseurl = site.baseurl || '';

const toPath = file => file.replace(/\.\/.*?\//, '/')
                           .replace(/\..*$/, '')
                           .replace(/index$/, '');

const langRegex = /(?:i18n\/)(\w+)(?:\.js)$/;

const pages = require.context('./', true, /\/pages\/.+\.(md|markdown|html|html\.jsx?|page\.jsx)$/)
    .keys()
    .reduce(function (obj, file) {
        let module = require(file);

        if (typeof module === 'function' || module instanceof Component) {
            module = {
                __isReactComponent: true,
                __content: module
            };
        }

        file = {path: toPath(file), ...module};

        return {...obj, [file.path]: file};
    }, {});

const posts = {};

const languages = require.context('./', true, /\/i18n\/.+\.js$/)
    .keys()
    .reduce((result, langPath) => {
        const lang = langPath.match(langRegex)[1];
        if (!lang) {
            return result;
        }

        result[lang] = require(langPath);
        return result;
    }, {});

export default {pages, posts, site, languages};
