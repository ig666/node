// app application 应用程序
// 把当前模块的依赖项生命在最上面
var http=require('http')
var fs=require('fs')

http
.createServer((req,res)=>{
    res.end('hello')
})
.listen(3000,()=>{
    '服务启动'
})