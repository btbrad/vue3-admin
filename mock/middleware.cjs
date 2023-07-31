module.exports = (req, res, next) => {
  console.log(req.path, req.method)
  if (req.path === '/auth/login' && req.method === 'POST') {
    const { username, password } = req.body
    console.log('登录', username, password)
    if (username === 'admin' && password === '123456') {
      return res.status(200).json({
        code: 200,
        token: 'w123hj1g23213iu213k21kj3h12',
        msg: '登录成功',
      })
    } else {
      return res.status(200).json({
        code: 400,
        msg: '用户名或者密码错误',
      })
    }
  }
  next()
}
