const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin }= require('clean-webpack-plugin');  
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const path = require('path');
// const isDevelopment = process.env.NODE_ENV === 'development';
module.exports = {
    entry: {
        index: './src/app.js'
    },
    output: {
        chunkFilename: '[name].bundle.js',
        filename: '[name].[contenthash].js', //contenthash for caching- unique hash based on js file content
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: { //to split out vendor code from main. Issue- Not splitting now
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        }
    },
    module: {
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
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
                // {
                //     loader: MiniCssExtractPlugin.loader, //but i dont have css files, not scss - hence not effective now
                //     //how to minify scss into a separate css file in dist? 
                //     options: {
                //         publicPath: 'dist/css/',
                //     },
                // }, //But i dont have css files. Just sass- purpose?
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader'
            ]
        }, {
            test: /\.(png|jp(e*)g|gif|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'assets/[hash]-[name].[ext]'
                }
            }]
        }, {
            test: /\.html$/i,
            loader: 'html-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: "My Portfolio",
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets'}
        ],
        new UglifyJsPlugin({
            sourceMap: true
        })
        // new MiniCssExtractPlugin({
        //     filename: '[name].css',
        //     chunkFilename: '[id].css',
        // })
        )
    ], 
    devServer: {
        contentBase: './dist',
        open: true
    }
};