var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =   {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/index.js' ,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'  
    },
    module: {
        rules: [
            {
              test: /\.(jpe?g|png|gif|svg)$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 40000
                  }
                }
              ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'src/sprite'),
                glob: '**/*.png'
            },
            target: {
                image: path.resolve(__dirname, 'src/image/sprite.png'),
                css: path.resolve(__dirname, 'src/styles/_sprites.scss'),
            },
            apiOptions: {
                cssImageRef: "../image/sprite.png"
            }
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: false,
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        open: true,
        contentBase: path.join(__dirname, '.'),
        compress: true,
        port: 9000
        }
};
