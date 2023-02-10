// 该文件用于配置路由
let express = require('express')
let router = express.Router()
let login = require('./API/login')

router.get('/login', login.login)
router.post('/register', login.register)

module.exports = router
