const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    entry: {
        fetch: './src/fetch.js',
        router: './src/router.js',
        action: './src/action.js',
        main: './src/main.js',
        button: './src/button.js',
        table: './src/table.js',
        pagination: './src/pagination.js',
        icon: './src/icon.js',
        input: './src/input.js',
        select: './src/select.js',
        form: './src/form.js',
        row: './src/row.js',
        col: './src/col.js',
        modal: './src/modal.js',
        card: './src/card.js',
        vender: ['react', 'react-dom', 'babel-standalone']
    },
    output: {
        filename: './dist/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: require.resolve('react'),
                loader: "expose-loader?$!expose-loader?React"
            },
            {
                test: require.resolve('react-dom'),
                loader: "expose-loader?$!expose-loader?ReactDOM"
            },
            {
                test: require.resolve('babel-standalone'),
                loader: "expose-loader?$!expose-loader?Babel"
            }
        ]
    },
    plugins: [
        new CommonsChunkPlugin({
            name: 'vender',
            filename: './dist/[name].js'
        }),
        // new UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
};