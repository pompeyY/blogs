const Koa = require('koa')
const app = new Koa()

app.model = require('./models')
app.controller = require('./controllers')(app);

const withConnect = require('./connection')
const withRouter = require('./router')

withConnect(app)
withRouter(app)

app.listen(3030, () => {
    console.log('运行在3030端口')
})
