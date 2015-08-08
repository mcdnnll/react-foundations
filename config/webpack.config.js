
var path = require('path');

module.exports = {
    
    devServer: {
        // contentBase: "dist/",
        // host: "0.0.0.0",
        // port: 8000,
        noInfo: true,
    },

    context: path.join(__dirname, "../"),
    entry: {
        js:  "./src/app/entry.js",
        html: "./src/app/index.html",
    },

    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "../") + "/dist",
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"] },
            { test: /\.html$/, loader: "file?name=[name].[ext]" }   
        ],
    },
}
