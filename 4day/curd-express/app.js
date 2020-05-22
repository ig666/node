var expresss=require('express')
var bodyParser = require('body-parser')
var router=require('./router')

var app=expresss()

app.engine('html',require('express-art-template'))
// 配置模板引擎和 body-parser 一定要在 app.use(router) 挂载路由之前
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/public/',expresss.static('public'))
app.use('/node_modules/',expresss.static('node_modules'))
app.use(router)

app.listen(3000,()=>{
    console.log('服务启动')
})