/**
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一，不要乱写
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */
var express = require('express')
var students=require('./students')

// 1. 创建一个路由容器
var router = express.Router()

router.get('/students', (req, res) => {
    students.find((err,data)=>{
        if(err){
            res.status(500).send('server err')
        }else{
            res.render('index.html',
            {
                fruits: ['苹果', '香蕉', '橘子'],
                students:data
            })
        }
    })
})
router.get('/students/new', (req, res) => { 
    res.render('news.html')
})
router.post('/students/new', (req, res) => {
    students.add((err,data)=>{
        if(err){
            res.status(500).send('server err')
        }else{
            res.redirect('/students')
        }
    },req.body)
 })
router.get('/students/edit', (req, res) => { 
    students.findById((err,data)=>{
        if(err){
            res.status(500).send('server err')
        }else{
            res.render('edit.html',{
                student:data
            })
        }
    },req.query.id)
})
router.post('/students/edit', (req, res) => { 
    students.update((err)=>{
        if(err){
            res.status(500).send('serve err')
        }else{
            res.redirect('/students')
        }
    },req.body)
})
router.get('/students/delete', (req, res) => { 
    students.detele((err,data)=>{
        if(err){
            res.status(500).send('serve err')
        }else{
            res.redirect('/students')
        }
    },req.query.id)
})


module.exports = router