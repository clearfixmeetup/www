import React, {PropTypes} from 'react';
import RsvpButton from '../RsvpButton';

export default function Rsvp(props) {
    let {info} = props;

    return (
        <article className="Rsvp">
            <div className="Rsvp-content">
                <h3>{info.rsvp_title}</h3>
                <div className="Rsvp-dateAndVenue">
                    <p className="Rsvp-date">
                        <time dateTime={info.upcoming_event_date_time_format}>
                            {info.upcoming_event_date_full}
                        </time>
                    </p>
                    <p className="Rsvp-venue">
                        {info.upcoming_event_venue_join_us}<br/>
                        {info.upcoming_event_venue_address}
                    </p>
                </div>
                <div className="Rsvp-button">
                    <RsvpButton {...props}/>
                </div>
            </div>
        </article>
    );
}

Rsvp.propTypes = {
    info: PropTypes.object
};
