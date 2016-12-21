import {site, pages, languages} from '../data';

const ROUTES = Object.keys(pages);
const DEFAULT_LANGUAGE_KEY = site.default_lang;
// http://regexr.com/3dqqm
const pageKeyRegex = /^\/([\w\d-_\/]*?)(\/|\..*)?$/i;
const i18nRoutes = ROUTES.reduce((routes, routePath) => {
    const pageKey = routePath.match(pageKeyRegex)[1];
    const t = getTranslations(pageKey);

    routes.push({
        path: routePath,
        renderPath: toRenderPath(pageKey),
        pageKey: pageKey,
        slug: pageKey,
        lang: DEFAULT_LANGUAGE_KEY,
        t: t
    });

    return routes;
}, []);

function toRenderPath(path) {
    if (path.match(/index$/)) {
        path += '.html';
    }

    if (path.indexOf('.') < 0) {
        if (!path.match(/\/$/i)) {
            path += '/';
        }

        path += '/index.html';
    }

    return path.replace(/^(\\|\/)+/, '');
}

function getTranslations(pageKey, langKey = DEFAULT_LANGUAGE_KEY) {
    let defaultT = (languages[DEFAULT_LANGUAGE_KEY] && languages[DEFAULT_LANGUAGE_KEY][pageKey]) || {};
    let currentT = (languages[langKey] && languages[langKey][pageKey]) || {};

    let defaultGlobalT = languages[DEFAULT_LANGUAGE_KEY]._global_ || {};
    let currentGlobalT = languages[langKey]._global_ || {};

    let t = {
        _: {
            ...defaultGlobalT,
            ...currentGlobalT
        },
        ...defaultT,
        ...currentT
    };

    return t;
}

export default i18nRoutes;
