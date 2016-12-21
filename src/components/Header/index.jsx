import React, {PropTypes} from 'react';

export default function Header(props) {
    let {t} = props;

    return (
        <header className="Header">
            <div className="Header-topics Topics">
                <span className="Topics-title">{t._.topics_lets_talk}</span>
                {' '}
                <span className="Topics-rotator TopicsRotator">
                    {t._.topics_words.map(topic => {
                        return ([<span key={topic}>{topic}</span>, ', ']);
                    })}
                </span>
            </div>
        </header>
    );
}

Header.propTypes = {
    t: PropTypes.object
};
