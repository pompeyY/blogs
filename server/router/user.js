module.exports = (app, router) => {
    const controller = app.controller.user

    router.get('/user/login', controller.login)
}
