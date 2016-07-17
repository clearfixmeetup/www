import React, {PropTypes} from 'react';
import SwitchLangLink from '../SwitchLangLink';

export default function Header(props) {
    let {lang, t} = props;

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
            <nav className="Header-langNav">
                <SwitchLangLink to={lang === 'es' ? 'en' : 'es'} metadata={props}/>
            </nav>
        </header>
    );
}

Header.propTypes = {
    lang: PropTypes.string,
    t: PropTypes.object
};
