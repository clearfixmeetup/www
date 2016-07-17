/* eslint-disable camelcase, react/no-danger */

import React, {PropTypes} from 'react';

import {site} from '../../data';
import Header from '../components/Header';
import Footer from '../components/Footer';

function typekitCode(typekit_id) {
    return (
        `(function(d) {
          var config = {
            kitId: '${typekit_id}',
            scriptTimeout: 3000,
            async: false
          },
          h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document);`
    );
}

function analyticsCode(analytics_id) {
    return (
        `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', '${analytics_id}', 'auto');
        ga('send', 'pageview');`
    );
}

export default function Layout({children, metadata}) {
    let {t, path} = metadata;

    return (
        <html>
            <head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content={t._.meta_description}/>
                <meta name="google-site-verification" content="4Ql11BN3MqQRKKJVhNaoAWwwxeJqIOqbNhnkntZw23o"/>
                <link rel="canonical" href={site.url + site.baseurl + path}/>
                <title>{`${t.title ? `${t.title} - ` : ''}${site.title}`}</title>
                {site.typekit_id ? <script dangerouslySetInnerHTML={{__html: typekitCode(site.typekit_id)}}/> : null}
                {site.analytics_id ? <script dangerouslySetInnerHTML={{__html: analyticsCode(site.analytics_id)}}/> : null}
                <link href={site.baseurl + '/static.css'} rel="stylesheet" type="text/css"/>
            </head>
            <body>
                <Header {...metadata}/>
                {children}
                <Footer {...metadata}/>
            </body>
        </html>
    );
}

Layout.propTypes = {
    children: PropTypes.element,
    metadata: PropTypes.object
};
