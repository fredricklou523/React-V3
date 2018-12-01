const path = require("path");

module.exports = {
  context: __dirname, //running from root directory- __dirname refers to root
  entry: "./src/App.jsx",
  devtool: "cheap",
  devtool: "cheap-eval-source-map", //source maps allows showing of pre-transpiled code when erorrs.  REMOVE FOR PRODUCTION< CREATES MASSIVE FILES
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    publicPath: "/public/",
    historyApiFallback: true //required for browserrouter
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"] //when doing a require (./App), will check for file App cycling through the order of these extensions
  },
  stats: {
    //what errors to show
    colors: true,
    reasons: true, //better erorrs
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, //anything with js or jsx run through babel
        loader: "babel-loader"
      }
    ]
  }
};
