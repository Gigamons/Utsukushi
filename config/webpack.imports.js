const paths = require('./paths')

module.exports = {
  FileLoader: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.(sass|scss)$/],
  Modules:
  [
    {
      test: /\.(sass|scss)$/,
      include: paths.appSrc,
      loaders: ["style-loader", "css-loader", "sass-loader"]
    },
  ]
}