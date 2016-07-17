import React, {PropTypes} from 'react';
import cx from 'classnames';

export default function Topics({t, className}) {
    return (
        <div className={cx(className, 'Topics')}>
            <span className="Topics-title">{t._.topics_lets_talk}</span>
            {' '}
            <span className="Topics-rotator TopicsRotator">
                {t._.topics_words.map(topic => {
                    return ([<span key={topic}>{topic}</span>, ', ']);
                })}
            </span>
        </div>
    );
}

Topics.propTypes = {
    className: PropTypes.string,
    t: PropTypes.object
};
