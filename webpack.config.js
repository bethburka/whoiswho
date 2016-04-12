/**
 * Created by bethelehem.burka on 19/02/16.
 */
module.exports = {
    entry: "./app/App.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader?'+ JSON.stringify(
                                {presets: ['es2015', 'react']}
                            ),
                        "eslint-loader"],
            }
        ]
    }
}