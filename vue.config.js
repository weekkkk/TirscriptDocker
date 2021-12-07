const path = require('path');
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const glob = require('glob');
const PATHS = {
    src: path.join(__dirname, 'src')
}
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const isProduction = process.env.NODE_ENV === "production";

const plugins = [];
if (isProduction) {
    // plugins.push(
    //   new PurgeCSSPlugin({
    //     paths: glob.sync(`${PATHS.src}/**/*`,{nodir: true})
    //   }));
    plugins.push(
        new UglifyJsPlugin({
            uglifyOptions: {
                output: {
                    comments: false
                }
            }
        }));
}
// //console.log('__dirname', __dirname);
// Используйте настройку configureWebpack для того чтобы переопределить настройки вебпака.
// Дефолтные настройки вебпака, которые использует vue-cli можно посмотреть по пути "\node_modules\@vue\cli-service\webpack.config.js"
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/teacherLanding/' : '/',
    assetsDir: "assets/",
    configureWebpack: {
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.js',
                "@": path.resolve(__dirname, "./src"),
                "@pages": path.resolve(__dirname, "./src/components/pages"),
                "@plugins": path.resolve(__dirname, "./src/components/plugins"),
                "@layouts": path.resolve(__dirname, "./src/components/layouts"),
                "@components": path.resolve(__dirname, "./src/components"),
                "@api": path.resolve(__dirname, "./src/api/dataSource/api"),
                "@assets": path.resolve(__dirname, "./src/assets"),

                //"@assets": path.resolve(__dirname, "./src/assets"),            
                //'jquery': path.resolve(__dirname, "./src/assets/js/jquery.min.js"),      
                //'bootstrap': path.resolve(__dirname, "./src/assets/js/bootstrap.min.js"),
                //'Modernizr':path.resolve(__dirname, "./src/assets/js/modernizr.custom.js"),
            },
        },
        optimization: {
            minimize: isProduction
        },
        plugins: plugins
    },
};