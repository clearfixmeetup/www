import React from 'react';
import site from '../site.yml';

module.exports = {
    '_global_': {
        meta_description: 'El primer evento de CSS avanzado en Barcelona',
        topics_lets_talk: `Hablemos de`,
        topics_words: ['componentes', 'performance', 'arquitectura', 'estándares', 'animación', 'SVG', 'modularización', 'versionado', 'distribución', 'testing', 'preprocesadores', 'maquetación', 'efectos', 'metodologías', 'media queries', 'fuentes'],
        logo_tagline: `es el primer meetup de Barcelona centrado en técnicas avanzadas de CSS para el desarrollo de interfaces de usuario modernas.`,
        event_description_1: `En las charlas profundizaremos en temas como la componentización de interfaces de usuario, la animación, la maquetación, el manejo de SVG, los preprocesadores y mucho más, de la mano de los mejores desarroladores.`,
        event_description_2: `Este evento es una gran oportunidad para conocer gente nueva y charlar con los desarrolladores de front-end con más talento de Barcelona. Y por supuesto, en una buena conversación no pueden faltar ni la cerveza ni la pizza gratis!`,
        newsletter_signup_title: '¡No te pierdas nada!',
        newsletter_signup_subtitle: ['Suscríbete a nuestro', ' ', <span>{'newsletter'}</span>],
        newsletter_signup_email_placeholder: 'Escribe tu email aquí',
        newsletter_signup_button: 'Suscríbete',
        newsletter_signup_no_spam: 'No queremos molestar, como máximo recibirás un email al mes.',
        upcoming_event_title: 'Próxima edición',
        upcoming_event_date: ['18 Oct.', <br />, ' 2016'],
        upcoming_event_date_full: ['Martes 18 de octubre de 2016'],
        upcoming_event_date_time_format: '2016-10-18T19:00',
        upcoming_event_venue_join_us: ['Únete a nosotros en ', <a href="https://www.google.es/maps/place/New+Relic/@41.3892413,2.1603585,17z/data=!3m1!4b1!4m5!3m4!1s0x12a4a28d0f29c04d:0x955a803b2aaeeed6!8m2!3d41.3892373!4d2.1625472" target="_blank">la oficina de New Relic en Barcelona</a>, ' en '],
        upcoming_event_venue_address: 'Carrer de Balmes 49, 6a planta, 08007 Barcelona',
        contributing_speakers_title: 'Propón un Ponente',
        contributing_speakers_text: ['¿Quieres dar una charla? ¿Te gustaría escuchar a una persona en concreto? ¡Ayúdanos! En Clearfix estamos constantemente buscando nuevos ponentes.', <br />, <br />, <a href={site.form_speaker_proposal}>Propón un ponente</a>],
        contributing_topics_title: 'Propón un Tema',
        contributing_topics_text: ['¿Quieres que se hable sobre un tema específico? ¿Necesitas inspiracíon para una charla?', <br />, <br />, <a href={site.form_topics_proposal} target="_blank" >Propón un tema</a>, <br />, <a href={site.results_topics_proposal} target="_blank" >Ver temas propuestos</a>],
        contributing_partnerships_title: 'Patrocina Clearfix',
        contributing_partnerships_text: ['Eres una empresa y quieres patrocinar el Clearfix CSS meetup?, ponte en contacto con nosotros.', <br />, <br />, <a href="mailto:hello@clearfix.co">Patrocina Clearfix</a>],
        contributing_challenge_test_title: 'Envía un Code Challenge',
        contributing_challenge_test_text: ['¿Quieres retar a los asistentes de Clearfix? Propón un pequeño pero desafiante ejercicio de CSS.', <br />, <br />, <a href={site.form_challenge_proposal} target="_blank">Envía un Code Challenge</a>],
        'talks': [
            {
                'type': 'main',
                'title': 'CSS Globals: Problems and Solutions',
                'description': 'CSS improved a lot in the last years but for many, it\'s still one of the hardest parts to handle while developing big web applications. Pre-processed languages like Sass and Less added many new features, but we still have to rely on methodologies such as BEM and OOCSS to avoid name collisions. Component-based libraries like React and Polymer are giving us a new tool to manage large front-end applications. In this talk, Giorgio will explain how to use these approaches so you can benefit from them in your next project.',
                'speaker': 'Giorgio Polvara',
                'avatar': 'https://media.licdn.com/media/AAEAAQAAAAAAAAjWAAAAJGQzYzM1ZjJjLTZhNTMtNDM1Zi1hYzk3LTFlMDQ5ZDQxNzg4MA.jpg',
            },
            {
                'type': 'lightning',
                'title': 'A journey into CSS-in-JS',
                'description': 'There seems to be many misconceptions about what means writing “inline styles” in javascript applications. I spent some time investigating the different solutions for writing CSS in those environments and I want to share my conclusions and why I think it makes sense to set your styles directly in your JS files.',
                'speaker': 'Rude Ayelo',
                'avatar': 'https://www.xing.com/image/d_3_e_ecfd7f513_23189603_1/rude-ayelo-foto.1024x1024.jpg',
            },
            {
                'type': 'lightning',
                'title': 'SVG Icon Systems',
                'description': 'Building an Icon System in CSS might be challenging depending on the requirements you have. Let’s do a quick overview over different techniques and how to workaround the different drawbacks they have. See how different strategies can give us more flexibility in the development process.',
                'speaker': 'Javi Sánchez-Marín',
                'avatar': 'https://avatars1.githubusercontent.com/u/43971?v=3&s=466',
            },
        ],
        'talk_type_featured': 'Charla destacada',
        'talk_type_lightning': 'Lightning Talk',
        the_challenge_title: 'The Challenge - Patrocinado por CodePen',
        the_challenge_description: 'Tráe tu portátil y ayúdanos a resolver un breve pero desafiante reto en CSS! Compartiremos y discutiremos las mejores soluciones. Ah! Y habrá algún que otro premio!',
        rsvp_title: 'Próximo evento',
        rsvp_cta: 'RSVP Ahora',
        rsvp_extra: '¡Es gratis!',
        rsvp_url: 'https://www.meetup.com/es-ES/Clearfix/events/234566299/',
        footer_copyright: ['Clearfix está organizado por ', <a href="https://twitter.com/danielguillan" title="Daniel Guillan" target="_blank">@danielguillan</a>, ' y ', <a href="https://twitter.com/vieron" title="Javi Sánchez-Marín" target="_blank">@vieron</a>, '. Obviamente, este site usa el ', <a href="http://nicolasgallagher.com/micro-clearfix-hack/" target="_blank">clearfix CSS hack</a>, '.'],
        link_become_a_sponsor: 'Patrocina Clearfix',
        link_submit_talk: 'Quieres dar una charla?',
        link_propose_topic: 'Propón un tema',
        link_propose_speaker: 'Propón un ponente',
        link_propose_challenge: 'Propón un Code Challenge',
        link_code_of_conduct: 'Código de conducta',
        link_meetup_calendar: 'Calendario',
    },

    '': {
        title: ''
    },

    about: {
        title: 'Sobre nosotros',
        slug: 'sobre-nosotros'
    }
}
