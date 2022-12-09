const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.use('/', userController.index)

module.exports = router