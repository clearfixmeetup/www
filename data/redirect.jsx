/* eslint-disable react/no-danger */

import React from 'react';

const defaultURL = '/es';
const languages = ['es', 'en'];
const defaultLang = languages[0];

export default () => {
    return (
        <html lang="en-US">
            <meta charSet="utf-8"/>
            <title>{'Redirecting...'}</title>
            <link rel="canonical" href={defaultURL}/>

            <noscript>
                <meta httpEquiv="refresh" content={`0; url=${defaultURL}`}/>
            </noscript>
            <script
                dangerouslySetInnerHTML={{__html: `
                    var languages = ${JSON.stringify(languages)};
                    var lang = window.navigator.language || ${JSON.stringify(defaultLang)};
                    lang = lang.split('-')[0];

                    if (languages.indexOf(lang) === -1) {
                        lang = languages[0];
                    }
                    var url = '/' + lang;
                    window.location = url;`}}
                />

            <h1>Redirecting...</h1>
            <a href={defaultURL}>Click here if you are not redirected.</a>
        </html>
    );
};
