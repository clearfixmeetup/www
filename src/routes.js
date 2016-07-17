import {site, pages, languages} from '../data';

const ROUTES = Object.keys(pages);
const DEFAULT_LANGUAGE_KEY = site.default_lang;
const LANG_KEYS = Object.keys(languages);
// http://regexr.com/3dqqm
const pageKeyRegex = /^\/([\w\d-_\/]*?)(\/|\..*)?$/i;
const i18nRoutes = ROUTES.reduce((routes, routePath) => {
    routes = routes.concat(
        LANG_KEYS.map(langKey => {
            let pageKey = routePath.match(pageKeyRegex)[1];
            let t = getTranslations(langKey, pageKey);
            let slug = `${langKey}/${t.slug || pageKey}`;

            return {
                path: routePath,
                renderPath: toRenderPath(slug),
                pageKey: pageKey,
                slug: slug,
                lang: langKey,
                t: t
            };
        })
    );
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

function getTranslations(langKey, pageKey) {
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
