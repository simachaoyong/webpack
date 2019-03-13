const path=require('path');
const webpack =require('webpack');
module.exports = {
    // 设置开发环境
    mode:'development',
    // 入口 你需要拿来做处理的文件
    // 读取src文件夹的index.js文件，把它交给webpack处理
    // 相当于gulp.src('xxx')
    // 入口的文件，处理入口文件
    entry: './src/index.js',
    // 出口，压缩后的文件的地方
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 压缩后的文件
        filename: 'bundle.js'
    }
};