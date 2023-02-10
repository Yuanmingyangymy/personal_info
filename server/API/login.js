let db = require('../db/index')

exports.login = (req, res) => {
  let sql = 'select * from user where name = ? and tel = ? and qq = ?'
  db.query(sql, [req.query.name, req.query.tel, req.query.qq], (err, data) => {
      if(err) {
          return res.send({
            status: 400,
            message: "报名失败"
          })
      }
      
      if(data.length > 0) {
        res.send({
          status: 200,
          message: "报名成功"
        })
      }else{
        res.send({
          status: 202,
          message: '用户名或密码错误'
        })
      }
  })
}

exports.register = (req, res) => {
  const sql1 = 'select * from user where tel = ?'
  const sql2 = 'insert into user (name, tel, qq) value (?, ?, ?)'
  db.query(sql1, [req.body.params.tel], (err, data) => {
    if(err) {
      return res.send({
        status: 400,
        message: "操作失败"
      })
    }
    if(data.length > 0) {
      return res.send({
        status: 202,
        message: '电话号码已存在'
      })
    }else{
      db.query(sql2, [req.body.name, req.body.tel, req.body.qq], (err, data) => {
        if(err) {
            return res.send({
              status: 400,
              message: "注册失败"
            })
        }
        res.send({
          status: 200,
          message: "注册成功"
        })
      })
    }
  })
}

