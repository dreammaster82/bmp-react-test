/**
 * Created by Denis on 19.05.2017.
 */
const path = require('path');

module.exports = {
    entry: {
        main: './src/MainTable.js',
        editor: './src/Editor.js'
    },
    output:{
        path: path.resolve(__dirname, "test/dist"),
        filename: "[name].js"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};