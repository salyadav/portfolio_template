const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin }= require('clean-webpack-plugin');   
const path = require('path');
// const isDevelopment = process.env.NODE_ENV === 'development';
module.exports = {
    entry: {
        index: './src/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, { 
            test: /\.s(a|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
        	]
        }, {
            test: /\.css$/,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader'
            ]
        }, {
            test: /\.(png|jpg|gif|svg|jpeg)$/,
            use: [
            {
                loader: 'file-loader'
            }]
        }, {
            test: /\.html$/i,
            loader: 'html-loader',
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Output",
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        }),
        new CleanWebpackPlugin()
    ], 
    devServer: {
        contentBase: './dist',
        open: true
    }
};