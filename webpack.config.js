const path = require('path');

module.exports = function(env){
    let config = {
        entry: './src/app.js',
        output:{
            path: path.resolve(__dirname),
            filename: 'app.js'
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
    }

    return config;
};