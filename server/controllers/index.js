const user = require('./user')

module.exports = app => ({
    user: user(app)
})
