//http核心模块,帮助编写服务器
var http=require('http')
var myapi={
  foo:"/foo"
}
//使用http.createServe()方法创建一个web服务器
var server=http.createServer()
//注册请求事件，web请求触发该函数回调(request,response)
//response对象有一个方法:write可以用来给客户端发送响应数据
//write可以使用多次，但是最后一定要使用end来结束响应,否则客户端会一直等待响应
server.on('request',(res,req)=>{
  console.log('收到请求,请求的端口是:'+res.socket.remotePort+res.socket.remoteAddress)
  switch(res.url){
    case myapi.foo:console.log('进入fooapi')
    req.write('hello! xiaolong-father ')
    req.write('my-love-family')
    req.end('/')
    break
    case '/a':console.log('进入其他api')
    req.end('/a')
    break 
  }
  //响应内容只能是二进制数据或者字符串
  //数字
  //对象
  //数组
  //布尔值 
  let cq={
    name:'chenqi',
    age:23,
    height:175
  }
  req.end(JSON.stringify(cq))
})


//绑定端口号,启动服务器
server.listen(3000,()=>{
  console.log('服务器启动成功了,可以访问啦,http://192.168.0.108:3000')
})