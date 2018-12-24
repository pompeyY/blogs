const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    id: Number,
    username: {                        //用户名
        type: String,
        required: true,
        unique: true
    },
    password: {                        //密码
        type: String,
        required: true
    },
    email: {                           //邮箱
      type: String,
      required: true
    },
    lastLoginAt: {                     // 上次登录时间
        type: Date,
        default: new Date().getTime()
    },
    createAt: {                        // 注册日期
        type: Date,
        default: new Date().getTime()
    },
})
// userSchema.index({ id: 1 })

const User = mongoose.model('User', userSchema)

module.exports = User
