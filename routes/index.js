const userRoute = require('./user')

function routes(app) {
    app.use('/user', userRoute)
}

module.exports = routes