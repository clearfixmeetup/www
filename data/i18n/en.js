import React from 'react';
import site from '../site.yml';

module.exports = {
    '_global_': {
        meta_description: 'The first advance CSS meetup in Barcelona',
        topics_lets_talk: `Let's talk about`,
        topics_words: ['components', 'performance', 'architecture', 'standards', 'animation', 'SVG', 'modularization', 'versioning', 'distribution', 'testing', 'preprocessors', 'layouts', 'effects', 'methodologies', 'media queries', 'fonts'],
        logo_tagline: `is the first ever meetup event in Barcelona fully focused on advanced CSS techniques for modern UI development.`,
        event_description_1: `In these in-depth talks you'll learn from an amazing line-up of CSS wizards. All talks are deeply technical and will give you unique insights into topics like UI componentization, animations, complex layouts, SVG, preprocessors and much more.`,
        event_description_2: `The meetup is a great oportunity to meet new people and talk to the greatest front-end developers in Barcelona. And of course, networking is always better with free beer and pizza!`,
        newsletter_signup_title: 'Stay in touch!',
        newsletter_signup_subtitle: ['Subscribe to the', ' ', <span>{'newsletter'}</span>],
        newsletter_signup_email_placeholder: 'Type your email here',
        newsletter_signup_button: 'Subscribe',
        newsletter_signup_no_spam: 'Expect no more than one mail per month.',
        upcoming_event_title: 'Upcoming Event',
        upcoming_event_date: ['October', <br />, '18', <sub>th</sub>, ' 2016'],
        upcoming_event_date_full: ['Tuesday October 18th 2016'],
        upcoming_event_date_time_format: '2016-10-18T19:00',
        upcoming_event_venue_join_us: ['Join us at the ', <a href="https://www.google.es/maps/place/New+Relic/@41.3892413,2.1603585,17z/data=!3m1!4b1!4m5!3m4!1s0x12a4a28d0f29c04d:0x955a803b2aaeeed6!8m2!3d41.3892373!4d2.1625472" target="_blank">New Relic Barcelona office</a>, '.'],
        upcoming_event_venue_address: 'Carrer de Balmes, 49, 6th floor, 08007 Barcelona',
        contributing_speakers_title: 'Propose a Speaker',
        contributing_speakers_text: ['Want to give a talk or know someone that might be interested? We are constantly seeking new speakers.', <br />, <br />, <a href={site.form_speaker_proposal}>Propose a Speaker</a>],
        contributing_topics_title: 'Propose a Topic',
        contributing_topics_text: ['Would like to hear about an specific topic or need inspiration for a talk?', <br />, <br />, <a href={site.form_topics_proposal}  target="_blank" >Propose a topic</a>, <br />, <a href={site.results_topics_proposal} target="_blank" >See proposed topics</a>],
        contributing_partnerships_title: 'Become a Sponsor',
        contributing_partnerships_text: ['If your company is interested in sponsoring the Clearfix CSS meetup, reach us directly for more details.', <br />, <br />, <a href="mailto:hello@clearfix.co">Become a sponsor</a>],
        contributing_challenge_test_title: 'Propose a Challenge',
        contributing_challenge_test_text: ['Want to challenge Clearfix attendees? Propose a small but challenging CSS exercise.', <br />, <br />, <a href={site.form_challenge_proposal}>Send challenge</a>],
        'talks': [
            {
                'type': 'main',
                'title': ['CSS Globals:', <br/>, ' Problems and Solutions'],
                'description': 'CSS improved a lot in the last years but for many, it\'s still one of the hardest parts to handle while developing big web applications. Pre-processed languages like Sass and Less added many new features, but we still have to rely on methodologies such as BEM and OOCSS to avoid name collisions. Component-based libraries like React and Polymer are giving us a new tool to manage large front-end applications. In this talk, Giorgio will explain how to use these approaches so you can benefit from them in your next project.',
                'speaker': 'Giorgio Polvara',
                'avatar': require('../../src/images/giorgio-polvara.jpg'),
            },
            {
                'type': 'lightning',
                'title': ['A journey into', <br/>, 'CSS-in-JS'],
                'description': 'There seems to be many misconceptions about what means writing “inline styles” in javascript applications. I spent some time investigating the different solutions for writing CSS in those environments and I want to share my conclusions and why I think it makes sense to set your styles directly in your JS files.',
                'speaker': 'Rude Ayelo',
                'avatar': require('../../src/images/rude-ayelo.jpg'),
            },
            {
                'type': 'lightning',
                'title': 'SVG Icon Systems',
                'description': 'Building an Icon System in CSS might be challenging depending on the requirements you have. Let’s do a quick overview of the different techniques and how to workaround their drawbacks and limitations. See how these strategies give us more flexibility in the development process.',
                'speaker': 'Javi Sánchez-Marín',
                'avatar': require('../../src/images/javi-sanchez.jpg'),
            },
        ],
        'talk_type_featured': 'Featured Talk',
        'talk_type_lightning': 'Lightning Talk',
        the_challenge_title: 'The CodePen Challenge',
        the_challenge_description: 'Bring your laptop and help us solve a quick, fun and challenging CSS code exercise! We will share and discuss the best solutions. Oh! And we\'ll have some nice prizes too!',
        rsvp_title: 'Save the date',
        rsvp_cta: 'RSVP Now',
        rsvp_extra: 'it\s free!',
        rsvp_url: 'https://www.meetup.com/es-ES/Clearfix/events/234566299/',
        footer_copyright: ['Clearfix is organized by ', <a href="https://twitter.com/danielguillan" target="_blank">@danielguillan</a>, ' and ', <a href="https://twitter.com/vieron" target="_blank">@vieron</a>, '. Obviously, this site uses the ', <a href="http://nicolasgallagher.com/micro-clearfix-hack/" target="_blank">clearfix CSS hack</a>, '.'],
        link_become_a_sponsor: 'Become a sponsor',
        link_submit_talk: 'Want to give a talk?',
        link_propose_topic: 'Propose a topic',
        link_propose_speaker: 'Propose a speaker',
        link_propose_challenge: 'Send a code challenge',
        link_code_of_conduct: 'Code of conduct',
        link_meetup_calendar: 'Calendar',
    },

    '': {
        title: ''
    },

    about: {
        title: 'About'
    }
}
