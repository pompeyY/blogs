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
    UserControllers.register = async ctx => {
        model.create({'username': 'lixianaaa', 'email': '132465dsf4@qq.com', 'password': 6874321}, function (err) {
            if (err){
                ctx.body = ({
                    status: 0,
                    data: err,
                    msg: '失败'
                })
                console.log(err)
            } else {
              ctx.body = ({
                  status: 0,
                  msg: '成功'
              })
            }
        })
    }
    UserControllers.update = async ctx => {
        await model.update({'username': 'pompeyy'},{'$set':{'password': 'pompey'}},function (err, doc) {
            if (err) console.log(err)
            let a = {msg: 'chenggong'}
            ctx.body = a
        })
    }
    return UserControllers
}
