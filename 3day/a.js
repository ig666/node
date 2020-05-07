//require方法有两个作用,

//1.加载文件模块并执行里面代码
//2.拿到被加载文件模块导出的接口对象

//每个文件模块都提供一个对象：exports

console.log('a')

var ret=require('./b')

console.log(ret)

console.log('a')