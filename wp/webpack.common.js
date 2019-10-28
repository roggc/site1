import {CleanWebpackPlugin} from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default
{
  entry: './src/index.js',
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
        test: /\.(png|jpe?g|gif|ico)$/i,
        use:
        [
          {
            loader: 'file-loader',
            options:
            {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins:
  [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin
    (
      {
        template:'./src/public/index.html'
      }
    )
  ]
}
