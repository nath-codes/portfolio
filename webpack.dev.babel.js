import merge from 'webpack-merge';
import common from './webpack.common.babel';

export default merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    hot: true,
  },
});
