console.log(1);
// 引入jquery
let $=require('jquery');
console.log($);
// 自定义模块
let libs=require('../libs/util.js');
console.log(libs.num());
// 这里写的内容，后续都会被打包到bundle.js中