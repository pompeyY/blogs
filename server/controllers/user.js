module.exports = app => {
    const model = app.model.user
    const UserControllers = {}

    UserControllers.login = async ctx => {
        const user = await model.find()
        ctx.body = ({
            status: 0,
            data: user,
            msg: '成功'
        })
    }

    return UserControllers
}
