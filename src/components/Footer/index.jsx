/* eslint-disable react/jsx-no-target-blank */

import React, {PropTypes} from 'react';
import {site} from '../../../data';
import Icon from '../Icon';

export default function Footer(props) {
    const {t} = props;

    return (
        <footer className={'Footer'}>
            <div className={'Footer-content'}>
                <div className="Footer-brand">
                    <a href="/" className="Logo Logo--white">Clearfix</a>
                </div>
                <nav className={'Footer-navMain FooterNavGroup'}>
                    <strong className="FooterNavGroup-title">Clearfix</strong>
                    <ul>
                        <li><a className="Link" target="_blank" href={site.meetup_clearfix}>Meetup</a></li>
                        <li><a className="Link" target="_blank" href={site.meetup_clearfix_calendar}>{t._.link_meetup_calendar}</a></li>
                        <li><a className="Link" target="_blank" href="https://blog.codepen.io/legal/code-conduct/">{t._.link_code_of_conduct}</a></li>
                    </ul>
                </nav>
                <nav className={'Footer-navContributing FooterNavGroup'}>
                    <strong className="FooterNavGroup-title">Community</strong>
                    <ul>
                        <li><a className="Link" href="mailto:hello@clearfix.co">{t._.link_become_a_sponsor}</a></li>
                        <li><a className="Link" href="mailto:hello@clearfix.co">{t._.link_submit_talk}</a></li>
                        <li><a className="Link" href={site.form_topics_proposal}>{t._.link_propose_topic}</a></li>
                        <li><a className="Link" href={site.form_speaker_proposal}>{t._.link_propose_speaker}</a></li>
                        <li><a className="Link" href={site.form_challenge_proposal}>{t._.link_propose_challenge}</a></li>
                    </ul>
                </nav>
                <nav className="Footer-social">
                    {site.github_url ? <a href={site.github_url}><Icon name="github"/></a> : ''}
                    {site.twitter_url ? <a href={site.twitter_url}><Icon name="twitter"/></a> : ''}
                </nav>
                <p className="Footer-copyright">
                    {t._.footer_copyright}
                </p>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    t: PropTypes.object
};
