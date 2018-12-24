const router = require('koa-router')()
const user = require('./user');


module.exports = function withRouter(app) {
    user(app, router)
    app.use(router.routes())
        .use(router.allowedMethods())
}
