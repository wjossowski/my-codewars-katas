const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'production',
  entry: {
    lib: path.resolve(__dirname, '../src/lib.ts'),
    'lib.min': path.resolve(__dirname, '../src/lib.ts'),
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'TibiaCalculators',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              exclude: /node_modules/,
              query: {
                declaration: false,
              },
            },
          },
        ],
      },
    ],
  },
  // module: {
  //   loaders: [
  //     {
  //       test: /\.tsx?$/,
  //       loader: 'awesome-typescript-loader',
  //       exclude: /node_modules/,
  //       query: {
  //         declaration: false,
  //       },
  //     },
  //   ],
  // },

  externals: [nodeExternals()],
}
