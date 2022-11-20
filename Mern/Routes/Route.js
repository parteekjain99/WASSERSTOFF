const express = require('express')

const router = express.Router()
const userController = require('../controller/user')

router.post('/signup' , userController.signup)
router.post('/signin', userController.loginUser)
router.get('/logout', userController.logout)
router.post('/product/add', userController.add)
router.get('/get', userController.get)
router.put('/get/:id', userController.updateOrderDetail)



module.exports = router