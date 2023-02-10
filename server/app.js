// 该文件用于配置服务器相关信息
// 创建服务器
let express = require('express')
let app = express()
// 用于处理跨域问题
let cors = require('cors')

let router = require('./router')

let bodyParser = require('body-parser')
// 配置解析json和urlencoded数据
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// 配置跨域
app.use(cors())
// 配置路由
app.use(router)




app.listen(80, () => {
    console.log('服务器启动成功');
})