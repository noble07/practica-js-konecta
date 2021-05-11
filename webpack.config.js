const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  // mode: devMode ? 'development' : 'production',
  devtool: 'source-map',
  entry: './assets/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js'
  },
  devServer: {
    hot: true,
    inline: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    contentBase: path.resolve(__dirname, 'assets/js/app'),
    historyApiFallback: {
        index: '/maqueta-konecta/index.html'
    },
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false
          }
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new LiveReloadPlugin()
  ],
  
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
        MiniCssExtractPlugin.loader,
        {loader: 'css-loader', options: {url: false, sourceMap: true}}, 
        {loader: 'postcss-loader'}, 
        {loader: 'sass-loader', options: { sourceMap: true }}
        ],
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};

