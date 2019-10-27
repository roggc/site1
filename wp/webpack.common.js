import {CleanWebpackPlugin} from 'clean-webpack-plugin'

export default
{
  entry: './src/index.js',
  output:
  {
    filename: './bundle.js'
  },
  module:
  {
    rules:
    [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.(html)$/,
        use:
        {
          loader: 'file-loader',
          options:
          {
            name: './[name].html',
          }
        }
      }
    ]
  },
  plugins:
  [
    new CleanWebpackPlugin()
  ]
}
