var http = require('http')

var fs=require('fs')

var serve = http.createServer()


//url:统一资源定位符
serve.on('request', (req, res) => {
  var url=req.url
  switch(url){
    case '/':
      //读取出来时二进制文件,通过tosTring转换成字符串
       fs.readFile('../testbook/13233332303846258.jpg',(err,data)=>{
         if(err){
           res.setHeader('Content-type','text/plain','charset=utf-8')
           res.end('读取失败')
         }else{
           //图片不需要指定编码,因为我们常说的编码一般指的是：字符编码
          res.setHeader('Content-type','image/jpeg')
           res.end(data)
         }
       })
      break;
  }
})
serve.listen('3000', () => {
  console.log('服务启动')
})