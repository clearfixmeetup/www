/* eslint-disable quote-props */

var qs = require('qs');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var StaticWebpackPlugin = require('static-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');
var _ = require('lodash');

function imagesLoaderConfig(basePath, options) {
    var test;
    var urlLoader;

    if (!options) {
        options = {};
    }

    if (options.svg) {
        test = new RegExp(basePath + '.+.(svg)$', 'i');
        urlLoader = 'svg-url-loader';
    } else {
        test = new RegExp(basePath + '.+.(jpe?g|png|gif)$', 'i');
        urlLoader = 'url-loader';
    }

    return {
        test: test,
        loaders: [
            // inline base64 URLs for <=8k images. If the file is greater than
            // the limit the file-loader is used and all query parameters are passed to it.
            // To disable replace 'url-loader?' by 'file-loader?'
            urlLoader + '?' + qs.stringify(_.assign({
                limit: 8192,
                hash: 'sha512',
                digest: 'hex',
                context: basePath,
                name: '[path][name].[ext]'
            }, options)),
            'image-webpack?' + JSON.stringify({
                bypassOnDebug: true,
                progressive: true,
                optimizationLevel: 8,
                interlaced: false,
                pngquant: {quality: '65-90', speed: 4}
            })
        ]
    };
}

function devServerConfig() {
    return {
        host: '0.0.0.0',
        historyApiFallback: true,
        // hot: true,
        progress: true,
        stats: 'errors-only'
    };
}

var extractMainCSS = new ExtractTextPlugin('[name].css', {
    allChunks: true
});

function baseConfig() {
    var c = {
        entry: {
            'static': './src/static.js'
        },
        output: {
            path: './public',
            libraryTarget: 'umd',
            filename: '[name].js',
            publicPath: '/'
        },
        module: {
            loaders: [
        {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/},
        {test: /\.yml$/, loader: 'json!yaml'},
        {test: /\.html\.jsx?$/, loader: require.resolve('./lib/html-jsx-loader.js'), include: [/data\/pages/]},
        {test: /\.(md|html)$/, loader: require.resolve('./lib/markdown-loader.js')},
        {test: /\.scss$/, loader: [
            'file-loader?' + qs.stringify({name: 'css/[name].css', mimetype: 'text/css'}),
            'extract-loader',
            'css-loader?sourceMap',
            'postcss-loader',
            'sass-loader?sourceMap'
        ].join('!'),
          include: /data/
        },
        {test: /\.css$/, loader: [
            'file-loader?' + qs.stringify({name: 'css/[name].css', mimetype: 'text/css'}),
            'extract-loader',
            'css-loader?' + qs.stringify({sourceMap: 1, importLoaders: 1}),
            'postcss-loader'
        ].join('!'),
          include: /data/
        },
                imagesLoaderConfig('data/pages'),
                imagesLoaderConfig('data/pages', {svg: true}),

                {
                    test: /\.scss$/,
                    loader: extractMainCSS.extract('style-loader', [
                        'css-loader?sourceMap',
                        'postcss-loader',
                        'sass-loader'
                    ].join('!')),
                    exclude: /data/
                },
                {
                    test: /\.css$/,
                    loader: extractMainCSS.extract('style-loader', [
                        'css-loader?' + qs.stringify({sourceMap: 1, importLoaders: 1}),
                        'postcss-loader'
                    ].join('!')),
                    exclude: /data/
                },
                imagesLoaderConfig('src/images', {name: 'images/[name].[ext]'}),
                imagesLoaderConfig('src/images', {svg: true, name: 'images/[name].[ext]'})
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx', '.json', '.scss', '.css', '.md'],
            modulesDirectories: ['node_modules', 'src']
        },
        postcss: [autoprefixer],
        plugins: [
            extractMainCSS,
            new StaticWebpackPlugin('static.js'),
            new Clean(['public'])
        ],
        'markdown-it': {
            html: true,
            typographer: true,
            linkify: true,
            breaks: true,
            use: [
        [require('markdown-it-anchor'), {
            permalink: true,
            permalinkBefore: true
        }],
        [require('markdown-it-table-of-contents'), {
            includeLevel: [2, 3, 4]
        }],
                require('markdown-it-video')
            ]
        },
        stats: {
            colors: true,
            reasons: true,
            hash: false,
            modulesSort: 'name'
        }
    };

    return c;
}

function devConfig() {
    return webpackMerge(baseConfig(), {
        debug: true,
        devtool: 'source-map',
        devServer: devServerConfig(),
        plugins: [
            new webpack.NoErrorsPlugin()
        ]
    });
}

function prodConfig() {
    return webpackMerge(baseConfig(), {
        plugins: [
            // optimize
            new webpack.optimize.UglifyJsPlugin({minimize: true}),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    });
}

var registry = {
    'base': baseConfig,
    'dev': devConfig,
    'prod': prodConfig
};

function getConfig(options) {
    if (!options) {
        options = {};
    }

    var env = options.env || process.env.WEBPACK_TARGET || 'prod';

    if (!registry[env]) {
        throw new Error('No webpack config found for webpack environment: ' + env);
    }

    return registry[env]();
}

module.exports = getConfig();
