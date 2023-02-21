// 该文件用于配置路由
let express = require('express')
let router = express.Router()
let login = require('./API/login')

// 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
// 2. 导入需要的验证规则对象
const { reg_login_schema } = require('./schema/user')
router.post('/register', expressJoi(reg_login_schema), login.register)
router.post('/login', expressJoi(reg_login_schema), login.login)
module.exports = router
