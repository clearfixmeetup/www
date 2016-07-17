import React, {PropTypes} from 'react';
import cx from 'classnames';

export default function Icon({name}) {
    return (
        <span className={cx('Icon', `Icon--${name}`)}>
            {name}
        </span>
    );
}

Icon.propTypes = {
    name: PropTypes.string
};
