const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
   
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]', // Specify the output folder within the "dist" directory for images
                },
            },
            {
                test: /\.svg$/i,
                type: 'asset/inline', // Embed SVG images as data URIs
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};