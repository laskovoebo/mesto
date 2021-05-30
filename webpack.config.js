const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: __dirname + "/src/components/index.js", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'bundle.js',  // Name of generated bundle after build
    publicPath: '' // public URL of the output directory when referenced in a browser
  },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {  // where we defined file patterns and their loaders
    rules: [
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, {
                loader: 'css-loader',
                options: {
                    importLoaders: 1
                }
            },
                'postcss-loader'
            ]
        },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: '/node_modules/'
        }
    ]
  },
  plugins: [  // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
      inject: 'body'
    }),
      new MiniCssExtractPlugin()
  ],
  devServer: {  // configuration for webpack-dev-server
    contentBase: './src/public',  //source of static assets
    port: 3000, // port to run dev-server
       open: true
  }
};
