import React, {PropTypes} from 'react';
import cx from 'classnames';

export default function Logo(props) {
    let {tagline, className} = props;

    return (
        <div className={cx('Logo', className)}>
            <h1 className="Logo-brand">Clearfix</h1>
            {''}
            {tagline && <p className="Logo-tagline">{tagline}</p>}
        </div>
    );
}

Logo.propTypes = {
    tagline: PropTypes.string,
    className: PropTypes.string
};
