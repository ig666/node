var http = require('http')

var serve = http.createServer()

serve.on('request', (res, req) => {
  //在服务器默认发送的数据，其实是utf8编码的内容
  //但是浏览器不知道你是utf8编码的内容
  //浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
  //中文操作系统默认是gbk
  //解决方法就是正确告诉浏览器我给你发送的内容是什么编码的
  //在http协议中，Content-Type就是告诉对面我给你发送的数据内容是什么类型
  // req.setHeader('Content-Type','text/plain; charset=utf-8')
  // req.end('hello 世界')

  var url = res.url
  if (url === '/plain') {
    //text/plain 就是普通文本
    req.setHeader('Content-Type', 'text/plain; charset=utf-8')
    req.end('hello 世界')
  }else if(url==='/html'){
    //如果发送的是html，要加上text/html
    req.setHeader('Content-Type', 'text/html; charset=utf-8')
    req.end('<p>hello html<a href="">点我</a></p>')
  }
})
serve.listen('5000', () => {
  console.log('服务启动')
})