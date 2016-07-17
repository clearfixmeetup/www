import React, {PropTypes} from 'react';

export default function UpcomingEventBadge({t}) {
    return (
        <a href="#upcoming-event" className="UpcomingEventBadge">
            <strong className="UpcomingEventBadge-title">{t._.upcoming_event_title}</strong>
            <span className="UpcomingEventBadge-date">{t._.upcoming_event_date}</span>
        </a>
    );
}

UpcomingEventBadge.propTypes = {
    t: PropTypes.object
};
