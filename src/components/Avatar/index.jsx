import React, {PropTypes} from 'react';

export default function Avatar(props) {
    let {url, name} = props;

    return (
        <figure className="Avatar">
            <img className="Avatar-image" src={url} alt={name}/>
        </figure>
    );
}

Avatar.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string
};
