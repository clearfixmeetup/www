import React, {PropTypes} from 'react';

export default function RsvpButton(props) {
    let {info} = props;

    return (
        <a href={info.rsvp_url} className="RsvpButton" target="_blank" rel="noopener noreferrer">
            <span className="RsvpButton-cta">{info.rsvp_cta}</span>
            <span className="RsvpButton-extra">{info.rsvp_extra}</span>
        </a>
    );
}

RsvpButton.propTypes = {
    info: PropTypes.object
};
