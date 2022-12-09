const User = require('../models/user')
class NewsController {
    index(req, res) {
        const user = new User('HOAI AN', true, 'VN')
        res.json(user)
    }
}
module.exports = new NewsController