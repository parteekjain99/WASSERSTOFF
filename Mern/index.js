const express = require('express');
const bodyparser  = require('body-parser');
const { default: mongoose } = require('mongoose');
const app = express()
const userController = require('./controller/user')
const port = 5000
const cors = require('cors')

mongoose.connect('mongodb+srv://uranium:uranium@cluster0.pgmlm.mongodb.net/MeRN', { useNewUrlParser:true})
.then(()=>console.log("Project Blogging Site - Database Connected"))
.catch((err)=>console.log(err));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors())
app.post('/signup' , userController.signup)
app.post('/signin', userController.loginUser)
// app.post('/submit-otp', userController.submitotp)
// app.post('/send-otp', userController.sendotp)
app.get('/logout', userController.logout)
app.post('/product/add', userController.add)
app.get('/get', userController.get)
app.put('/get/:id', userController.updateOrderDetail)

app.listen(port , () => {
    console.log("server is connected")
})