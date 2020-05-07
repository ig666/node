// 获取机器信息
var os=require('os')

//用来操作路径
var path=require('path')

//获取当前cpu
console.log(os.cpus().length)


//获取拓展名

console.log(path.extname('c:/a/b/c/hello.txt'))



//node中的js
// 1.EcmaScripy  没有DOM,BOM
// 2.核心模块
// 3.第三方模块
// 4.用户自定义模块

//核心模块

//node为js提供了很多服务器级别的api，这些api都被封装到了一个具名的核心模块中了
// ，列入文件操作fs,http服务http模块，path文件路径模块，os系统信息模块

// 引入模块使用require引入   var os=require('os')