import merge from 'webpack-merge';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import common from './webpack.common.babel';

export default merge(common, {
  plugins: [
    new UglifyJSPlugin(),
  ],
});
