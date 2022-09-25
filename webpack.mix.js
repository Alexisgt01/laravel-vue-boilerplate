const mix = require('laravel-mix');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
Mix.listen('configReady', config => {
    const scssRule = config.module.rules.find(r => r.test.toString() === /\.scss$/.toString())
    //scssRule.exclude.push(path.resolve(__dirname, 'node_modules/vuetify'))
    const scssOptions = scssRule.loaders.find(l => l.loader === 'sass-loader').options
    scssOptions.prependData = "@import './resources/sass/styles.scss';"

    const sassRule = config.module.rules.find(r => r.test.toString() === /\.sass$/.toString())
    //  sassRule.exclude.push(path.resolve(__dirname, 'node_modules/vuetify'))
    const sassOptions = sassRule.loaders.find(l => l.loader === 'sass-loader').options
    sassOptions.prependData = "@import './resources/sass/styles.scss'"

});

mix.webpackConfig({
    output: {
        chunkFilename: 'js/[name].js',
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'resources/js')
        ],
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': __dirname + '/resources/js/common',
            '&': __dirname + '/resources/js/auth',
            '#': __dirname + '/resources/js/guest',
            '~': path.resolve('resources/sass')
        },
    }
}).options({
    //extractVueStyles: true,
    //globalVueStyles: 'resources/sass/app.scss',
}).webpackConfig({
    plugins: [
        new VuetifyLoaderPlugin()
    ]
})
    .js('resources/js/guest/app.js', 'public/js/guest')
    // .js('resources/js/auth/app.js', `public/js/${process.env.MIX_JS_AUTH_TOKEN}`)
    //.js('resources/js/admin/app.js', `public/js/${process.env.MIX_JS_ADMIN_TOKEN}`)
    .sass('resources/sass/styles.scss', 'public/css/app.css');
