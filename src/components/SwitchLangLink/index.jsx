/* eslint-disable import/no-extraneous-dependencies */

import React, {PropTypes} from 'react';
import cx from 'classnames';
import {linkTo} from 'utils';
import routes from '../../routes';

export default function SwitchLangLink(props) {
    let fromKey = props.metadata.pageKey;
    let toLang = props.to;

    let toPageMetadata = routes.find(r => r.pageKey === fromKey && r.lang === toLang);
    if (!toPageMetadata) {
        throw new Error(`Specified Link points to undefined route (${props.to})`);
    }

    let urlSlug = toPageMetadata.slug;
    let className = cx(props.className, 'SwitchLangLink');

    return (<a className={className} href={linkTo(urlSlug)}>{props.children || toLang || null}</a>);
}

SwitchLangLink.propTypes = {
    to: PropTypes.string.isRequired,
    metadata: PropTypes.object.isRequired,
    children: PropTypes.element,
    className: PropTypes.string
};
