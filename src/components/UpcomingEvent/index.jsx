import React, {PropTypes} from 'react';
import Challenge from '../Challenge';
import Rsvp from '../Rsvp';
import Talk from '../Talk';

export default function UpcomingEvent(props) {
    const {t} = props;

    return (
        <section id="upcoming-event" className="UpcomingEvent">
            <div className="UpcomingEvent-content">

                <h2 className="UpcomingEvent-title">{t._.upcoming_event_title}</h2>

                <section className="UpcomingEvent-section">
                    <Talk main info={t._.talks[0]} {...props}/>
                </section>

                <section className="UpcomingEvent-tbd">
                    <h2>More talks to be announced soon!</h2>
                </section>

                <section className="UpcomingEvent-Rsvp">
                    <Rsvp info={t._}/>
                </section>
            </div>
        </section>
    );
}

UpcomingEvent.propTypes = {
    t: PropTypes.object
};
