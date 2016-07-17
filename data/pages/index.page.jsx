import React from 'react';

import Intro from '../../src/components/Intro';
import UpcomingEvent from '../../src/components/UpcomingEvent';
import Contributing from '../../src/components/Contributing';
import NewsletterSignup from '../../src/components/NewsletterSignup';

export default function Home(props) {
    return (
        <div className="Home">
            <div className="Home-intro">
                <Intro {...props}/>
            </div>
            <UpcomingEvent {...props}/>
            <Contributing {...props}/>
            <div className="Home-newsletter">
                <NewsletterSignup {...props}/>
            </div>
        </div>
    );
}
