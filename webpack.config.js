const path = require("path");

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                loader: 'babel-loader',
                exclude: /(node_modules)/,
            }
        ]
    }
}