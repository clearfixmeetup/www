/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import routes from './routes';
import App from './templates/App.jsx';
import './css';

import 'file?name=CNAME!../CNAME';
import 'file?name=favicon.ico&mimetype=image/x-icon!./images/favicon.ico';

function buildHTML(props, Component = App) {
    return '<!doctype html>' + renderToStaticMarkup(<Component metadata={props}/>);
}

export default function (render, done) {
    routes.forEach(route => {
        render(route.renderPath, buildHTML(route));
    });

    done();
}
