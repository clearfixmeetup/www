/* eslint-disable react/forbid-component-props */

import React, {PropTypes} from 'react';
import Logo from '../Logo';
import UpcomingEventBadge from '../UpcomingEventBadge';

export default function Intro(props) {
    const {t} = props;

    return (
        <div className="Intro">
            <div className="Intro-event">
                <Logo className="Intro-logo" tagline={t._.logo_tagline}/>
                <div className="Intro-description TextBlock">
                    <p>{t._.event_description_1}</p>
                    <p>{t._.event_description_2}</p>
                </div>
            </div>
            <div className="Intro-nextDate">
                <UpcomingEventBadge {...props}/>
            </div>
        </div>
    );
}

Intro.propTypes = {
    t: PropTypes.string
};
