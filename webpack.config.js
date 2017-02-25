module.exports = {
    context: __dirname,

    devtool: "source-map",

    entry: "./js/profile.js",

    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                //Here first apply css loader to convert text file to css, then style loader to apply for page
                loader: 'style-loader!css-loader!'
            }
        ]
    }
}