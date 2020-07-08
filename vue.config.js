const path = require('path');
const IS_PROD = ['production'].includes(process.env.NODE_ENV);
// function resolve (dir) {
//   return path.join(__dirname, dir)
// }
module.exports = {
  // entry: './examples/main.js', // 项目demo运行入口文件
  // entry: './packages/index.js', // 项目打包文件入口
  // publicPath: process.env.NODE_ENV === 'production' ? '/portal/' : '/',
  publicPath: '/',
  devServer: {
    open: true
  },
  productionSourceMap: false, // 打包时不生成.map文件
  css: {
    extract: IS_PROD
  },
  lintOnSave: process.env.NODE_ENV !== 'production', //在生产构建时禁用 eslint-loader
  chainWebpack: config => {
    config.name = 'my-ui-library';
    // config.resolve.alias
    //   .set('@', resolve('src'))
    // 对新增文件packages文件夹进行编译
    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options;
      });
  },
  configureWebpack: {
    entry: './examples/main.js', // 项目demo运行入口文件
    output: {
      // outputDir: path.resolve(__dirname, './lib'),
      filename: 'my-ui-library.js',
      library: 'vue-custom-ui', // 指定import/require时，使用的模块名称
      // 可以指定生成不同的umd的代码，可以只是commonjs标准的，也可以是amd标准的，也可以是只能通过script标签引入的
      libraryTarget: 'umd',
      // 会对umd的构建过程中的 amd 模块进行命名，否则就使用 匿名的 define
      umdNamedDefine: true
    }
  }
}

