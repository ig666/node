//在Nodez中使用模板引擎
//模板引擎最早诞生于服务器

//1.安装
//2.在需要使用的文件模块中加载art-temlate
//3.查看文档，使用模板引擎api
var temlate = require('art-template')
var fs = require('fs')
var http=require('http')



var serve=http.createServer()
var str = fs.readFileSync('./text.html', (err, data) => {
    if (err) {
        console.log('读取文件失败')
    } else {
        // console.log(data.toString())
        return data
    }
})
var ret = temlate.render(str.toString(), {
    name: "jack",
    age: "120",
    hobbies: [
        '写代码',
        '唱歌',
        '跑步'
    ]
})
serve.on('request',(req,res)=>{
    res.end(ret)
})

serve.listen(3000,()=>{
    console.log('服务启动成功')
})