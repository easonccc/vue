const path = require('path')
module.exports={
    mode:'development',
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'./list'),//输出文件存放路径
        filename:'bundle.js'  //输出文件名称
    }
}