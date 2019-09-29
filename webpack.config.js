var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports =   {
    //mode: 'development',
    entry: './src/index.js' ,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'  
    },
    module: {
        rules: [
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
        })
    ],
    devServer: {
        open: true,
        contentBase: path.join(__dirname, '.'),
        compress: true,
        port: 9000
        }
};
