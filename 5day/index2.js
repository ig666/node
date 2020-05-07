  var http=require('http')
  var fs=require('fs')
  var server=http.createServer()

  var defaultPath='D:node'
  server.on('request',(req,res)=>{
    var url=req.url
    var filePath='/index.html'
    res.setHeader('Content-type','text/plain','charset=utf-8')
    if(url!==filePath){
      fs.readFile(defaultPath+url,(err,data)=>{
        if(err){
          res.end('404 not found')
        }else{
          res.end(data)
        }
      })
    }
  })

  server.listen('3000',()=>{
    console.log('3000端口启动')
  })
