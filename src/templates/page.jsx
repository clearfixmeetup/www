/* eslint-disable react/no-danger */

import React from 'react';

export default ({page, metadata}) => {
    let content;
    if (page.__isReactComponent) {
        let Component = page.__content;
        content = <Component {...metadata}/>;
    } else {
        content = <div dangerouslySetInnerHTML={{__html: page.__content}}/>;
    }

    return content;
};
