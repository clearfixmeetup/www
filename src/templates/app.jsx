import React, {PropTypes} from 'react';
import {pages} from '../../data';
import Layout from './Layout.jsx';
import Page from './Page.jsx';

export default function App(props) {
    let {path} = props.metadata;
    let page = pages[path] ?
        <Page path={path} page={pages[path]} metadata={props.metadata}/> :
        null;

    return (
        <Layout {...props} >{page}</Layout>
    );
}

App.propTypes = {
    metadata: PropTypes.object
};
