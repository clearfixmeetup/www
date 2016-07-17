import React, {PropTypes} from 'react';

export default function Contributing({t}) {
    return (
        <div className="Contributing">
            <div className="Contributing-content">
                <div className="Contributing-card">
                    <div className="ContributingCard">
                        <h3 className="ContributingCard-title">{t._.contributing_speakers_title}</h3>
                        <p className="ContributingCard-desc">{t._.contributing_speakers_text}</p>
                    </div>
                </div>
                <div className="Contributing-card">
                    <div className="ContributingCard">
                        <h3 className="ContributingCard-title">{t._.contributing_topics_title}</h3>
                        <p className="ContributingCard-desc">{t._.contributing_topics_text}</p>
                    </div>
                </div>
                <div className="Contributing-card">
                    <div className="ContributingCard">
                        <h3 className="ContributingCard-title">{t._.contributing_partnerships_title}</h3>
                        <p className="ContributingCard-desc">{t._.contributing_partnerships_text}</p>
                    </div>
                </div>
                <div className="Contributing-card">
                    <div className="ContributingCard">
                        <h3 className="ContributingCard-title">{t._.contributing_challenge_test_title}</h3>
                        <p className="ContributingCard-desc">{t._.contributing_challenge_test_text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Contributing.propTypes = {
    t: PropTypes.object
};
