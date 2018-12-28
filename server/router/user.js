module.exports = (app, router) => {
    const controller = app.controller.user

    router.get('/user/login', controller.login)
    router.get('/user/register', controller.register)
    router.get('/user/update', controller.update)
}
