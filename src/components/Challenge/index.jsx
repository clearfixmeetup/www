import React, {PropTypes} from 'react';

export default function Challenge(props) {
    let {t} = props;

    return (
        <div className="Challenge">
            <div className="Challenge-codepen"/>
            <h3>{t._.the_challenge_title}</h3>
            <p>{t._.the_challenge_description}</p>
        </div>
    );
}

Challenge.propTypes = {
    t: PropTypes.object
};
