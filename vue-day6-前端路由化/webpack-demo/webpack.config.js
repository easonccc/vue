const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template:'./src/index.html',
    filename:'index.html'
}
)
module.exports={
    mode:'development',
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'./dist'),//输出文件存放路径
        filename:'bundle.js'  //输出文件名称
    },
    plugins:[htmlPlugin],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader','postcss-loader']},
            //test表示匹配的文件类型 use表示对应要调用的loader
            //use  数组中指定的loader顺序是固定的
            //多个loader的调用顺序是：从后往前调用
            //$表示以...结尾 在这里表示以css结尾的文件
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.jpg|png|gif|bmp|ttf|svg|woff|woff2$/,use:'url-loader?limit=16940'}
            //'？'后面的是loader的参数项 
            //limit 用来指定图片的大小 单位是字节(bit) 只有小于limit大小的图片才会转为base64图片
           
        ] 
    }
}