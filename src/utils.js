import {site} from '../data';

export const prettyDate = date => new Date(date).toDateString();
export const stripHTML = str => str.replace(/<(?:.|\n)*?>/gm, '');
export const values = obj => Object.keys(obj).map(k => obj[k]);

export function linkTo(path = '/') {
    if (path[0] !== '/') {
        path = `/${path}`;
    }

    return `${site.baseurl}${path}`;
}

export function isCurrent(path = '/') {
    if (path[0] !== '/') {
        path = `/${path}`;
    }

    return `${site.baseurl}${path}`;
}
