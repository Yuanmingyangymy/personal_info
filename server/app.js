// 该文件用于配置服务器相关信息
// 创建服务器
let express = require('express')
let app = express()
// 用于处理跨域问题
let cors = require('cors')

const joi = require('@hapi/joi')

let router = require('./router')

let bodyParser = require('body-parser')
// 配置解析json和urlencoded数据
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// 配置跨域
app.use(cors())
// 配置路由
app.use(router)

// 错误中间件
app.use(function (err, req, res, next) {
// 数据验证失败
if (err instanceof joi.ValidationError) return res.send(err)
// 未知错误
res.send(err)
})


app.listen(80, () => {
    console.log('服务器启动成功');
})