const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: '3000',
        open: true,
        hot: true,
        compress: true,
    },
};
