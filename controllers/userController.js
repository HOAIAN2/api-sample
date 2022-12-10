const User = require('../models/user')
class UserController {
    index(req, res) {
        const user = new User('HOAI AN', true, 'VN')
        res.json(user)
    }
}

module.exports = new UserController