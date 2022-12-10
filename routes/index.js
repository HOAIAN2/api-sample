const userRoute = require('./user')

function routers(app) {
    app.use('/users', userRoute)
}

module.exports = routers