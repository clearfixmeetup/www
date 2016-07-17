import React, {PropTypes} from 'react';

export default function NewsletterSignup({t}) {
    return (
        <div className="NewsletterSignup">
            <div className="NewsletterSignup-content">
                <h2 className="NewsletterSignup-title">{t._.newsletter_signup_title}</h2>
                <h2 className="NewsletterSignup-subtitle">{t._.newsletter_signup_subtitle}</h2>
                <p className="NewsletterSignup-text">{t._.newsletter_signup_no_spam}</p>
                <form className="NewsletterSignup-form" action="//clearfix.us13.list-manage.com/subscribe/post?u=14641997becd34d51cc70e6e9&amp;id=979cd80ae1" method="post" name="mc-embedded-subscribe-form" target="_blank">
                    <label htmlFor="mce-EMAIL">Email <span className="asterisk">*</span></label>
                    <input className="NewsletterSignup-input" placeholder={t._.newsletter_signup_email_placeholder} type="email" value="" name="EMAIL"/>
                    <button className="NewsletterSignup-button" name="subscribe">{t._.newsletter_signup_button}</button>
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                    <div style={{position: 'absolute', left: -5000}} aria-hidden="true">
                        <input type="text" name="b_14641997becd34d51cc70e6e9_979cd80ae1" tabIndex="-1" value=""/>
                    </div>
                </form>
            </div>
        </div>
    );
}

NewsletterSignup.propTypes = {
    t: PropTypes.object
};
