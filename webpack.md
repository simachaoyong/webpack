# webpack
webpack其实就是require.js的后端实现方案
webpack=require.js+gulp
webpack想做模块化和资源整理处理压缩

定义模块
```js
define()
module.exports//ES5
export default //ES6
```

引入模块
```js
require()
require()
import //ES6
```

全局安装webpack
```
npm install webpack webpack-cli -g
```
全局会有一个'webpack'的命令

## 编写配置文件
新建一份`webpack.config.js`配置文件，

四大概念

入口(entry)

出口(output)

loader //专门处理各种文件的插件

插件(plugins) //专门帮你压缩重命名

entry和output是我们webpack的必须选项

# 运行
在命令行里面执行`webpack`

webpack只能处理javaScript文件，想要处理其他的文件，这个就需要用到loader，loader可以将所有类型的文件转换为webpack能够处理的有效模块，然后你就可以利用webpack的打包能力

不同的内容的话，你安装不同的loader就行了

关于虚拟DOM的相关的内容

