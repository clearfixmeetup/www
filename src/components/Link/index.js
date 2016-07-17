/* eslint-disable import/no-extraneous-dependencies */

import React, {PropTypes} from 'react';
import cx from 'classnames';
import {linkTo} from 'utils';
import routes from '../../routes';

export default function Link(props) {
    let fromKey = props.metadata.pageKey;
    let lang = props.metadata.lang;

    let toPageMetadata = routes.find(r => r.pageKey === props.to && r.lang === lang);
    if (!toPageMetadata) {
        console.error(`ERROR: Specified Link points to undefined route (${props.to})`);
    }

    let urlSlug = toPageMetadata.slug;
    let className = cx(props.className, 'Link', {'is-current': fromKey === props.to});

    return (<a className={className} href={linkTo(urlSlug)}>{props.children}</a>);
}

Link.propTypes = {
    to: PropTypes.string.isRequired,
    metadata: PropTypes.object.isRequired,
    children: PropTypes.element,
    className: PropTypes.string
};
