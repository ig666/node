//文件操作模块，只关心文件操作

var fs=require('fs')

var readFile=(path)=>{
   return new Promise((resolve,reject)=>{
        fs.readFile(path,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data.toString())
            }
        })
    })
}

exports.find=async (callback)=>{
    let res=await readFile('./db.json').catch((err)=>{callback(err)})
    callback(null,JSON.parse(res.toString()).students)
}

exports.findById=async(callback,id)=>{
    let res=await readFile('./db.json').catch((err)=>{callback(err)})
    let students=JSON.parse(res.toString()).students
    let person=students.filter(item=>item.id==id)
    callback(null,person[0])
}

exports.add=async (callback,person)=>{
    let res=await readFile('./db.json').catch((err)=>{callback(err)})
    var students=JSON.parse(res.toString()).students
    person.id=students[students.length-1].id+1
    students.push(person)
    fs.writeFile('./db.json',JSON.stringify({students}),(err)=>{
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}

exports.update=async(callback,person)=>{
    let res=await readFile('./db.json').catch((err)=>{callback(err)})
    let students=JSON.parse(res.toString()).students
    students=students.map(item=>{
        if(item.id==person.id){
            item=person
        }
        return item
    })
    fs.writeFile('./db.json',JSON.stringify({students}),(err)=>{
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}
exports.detele=async(callback,id)=>{
    let res=await readFile('./db.json').catch((err)=>{callback(err)})
    let students=JSON.parse(res.toString()).students
    students=students.filter(item=>item.id !=id)
    fs.writeFile('./db.json',JSON.stringify({students}),(err)=>{
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}