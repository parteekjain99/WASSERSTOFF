const express = require('express');
const bodyparser  = require('body-parser');
const { default: mongoose } = require('mongoose');
const app = express()
const route = require('./Routes/Route')
const port = 5000
const cors = require('cors')

mongoose.connect('mongodb+srv://uranium:uranium@cluster0.pgmlm.mongodb.net/MeRN', { useNewUrlParser:true})
.then(()=>console.log("Project Blogging Site - Database Connected"))
.catch((err)=>console.log(err));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors())
app.use("/", route )

app.listen(port , () => {
    console.log("server is connected")
})