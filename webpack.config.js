const path = require('path');

const webpack = require('webpack');
const workboxPlugin = require('workbox-webpack-plugin');

const SRC_DIR = 'src';
const DIST_DIR = 'build';
const STATIC_EXTENSIONS = '{html,js,css,svg,json,png,jpg,gif,fnt,ogg,mp3,wav,mp4,woff,woff2,dae,gltf,map}';

let PLUGINS = [];
if (process.env.NODE_ENV === 'production') {
  PLUGINS.push(new webpack.optimize.UglifyJsPlugin());
  PLUGINS.push(new workboxPlugin({
    globDirectory: path.resolve(__dirname),
    globPatterns: [
      '{assets,css,build,vendor}/**/*.' + STATIC_EXTENSIONS
    ],
    globIgnores: [
      'assets/rawfiles/**'
    ],
    swDest: path.join(__dirname, 'sw.js')
  }));
}

module.exports = {
  entry: `./${SRC_DIR}/index.js`,
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, DIST_DIR)
  },
  plugins: PLUGINS
};
