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
                test: /\.svg$/i,
                include: path.resolve(__dirname, 'src/icons'),
                type: 'asset/resource',
                generator: {
                    filename: 'icons/[name][ext]', // Specify the output folder within the "dist" directory
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};