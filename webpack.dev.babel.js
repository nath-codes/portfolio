import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common.babel';

export default merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      CDN: JSON.stringify('https://cdn.nath.codes/src'),
    }),
  ],
});
