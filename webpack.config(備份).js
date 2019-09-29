var path = require('path');
module.exports =   {
    //mode: 'development',
    entry: './src/index.js' ,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'  
    },
    devServer: {
        open: true,
        contentBase: path.join(__dirname, '.'),
        compress: true,
        port: 9000
        }
};
