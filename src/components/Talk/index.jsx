import React, {PropTypes} from 'react';
import cx from 'classnames';
import Avatar from '../Avatar';

export default function Talk(props) {
    const {main, secondary, info, t} = props;

    const classes = cx('Talk', {
        'Talk--main': main,
        'Talk--lightning': secondary
    });

    const talkTypeEmoji = main ? '✌️' : '✨';
    const TalkTypeTitle = main ? t._.talk_type_featured : t._.talk_type_lightning;

    return (
        <article className={classes}>
            <div className="Talk-avatar">
                <Avatar url={info.avatar} name={info.speaker}/>
            </div>
            <div className="Talk-info">
                <header className="Talk-header">
                    <p>
                        <strong>
                            <span className="Talk-typeEmoji" style={{fontSize: '1.5em'}}>{talkTypeEmoji} </span>
                            <span className="Talk-typeTitle">{TalkTypeTitle}</span>
                        </strong>
                    </p>
                    <h2 className="Talk-title">{info.title}</h2>
                </header>
                <p className="Talk-author">{info.speaker}</p>
                <div className="Talk-description">
                    <p>{info.description}</p>
                </div>
            </div>
        </article>
    );
}

Talk.propTypes = {
    main: PropTypes.string,
    secondary: PropTypes.string,
    info: PropTypes.object,
    t: PropTypes.object
};
