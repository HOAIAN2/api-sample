const newsRoute = require('./user')

function routers(app) {
    app.use('/users', newsRoute)
}

module.exports = routers