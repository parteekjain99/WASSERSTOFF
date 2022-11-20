const express = require('express')

const app = express.Router()


app.post('/signup' , userController.signup)
app.post('/signin', userController.loginUser)
// app.post('/submit-otp', userController.submitotp)
// app.post('/send-otp', userController.sendotp)
app.get('/logout', userController.logout)
app.post('/product/add', userController.add)
app.get('/get', userController.get)
app.put('/get/:id', userController.updateOrderDetail)



module.exports.app = app