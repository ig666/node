//浏览器中的js没有文件操作的能力
//但是node中的js具有文件操作的能力

//fs是file-system的简写，就是文件系统的意思-提供了所以的文件操作api
var fs= require('fs')

// fs.readFile('../testbook/0.txt',(error,data)=>{
// console.log(data.toString())
// }
// )
fs.writeFile('./你好x.md','大家好，我是你爸爸',(error)=>{
  if(error){
    console.log('写入失败')
  }else{
    console.log('写入成功')
  }
})