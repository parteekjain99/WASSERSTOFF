const UserModel = require('../Model/user')
// const nodemailer = require('nodemailer')
const BlogModel = require("../Model/blogModel")
const jwt = require("jsonwebtoken")

// api for signup
const signup = (req, res) => {
    console.log(req.body)

    // email should not exist alreday

    const newUser = new UserModel({
        email: req.body.email,
        password: req.body.password
    });

    newUser.save().then(() => {
        res.send({ code: 200, message: 'Signup success' })
    }).catch((err) => {
        res.send({ code: 500, message: 'Signup Err' })
    })

}

// api for login use jsonwebtoken for verification
 const loginUser = async function (req, res) {
            try {
                
                let userName = req.body.email;
             let password = req.body.password;
           
             let user = await UserModel.findOne({ email: userName, password: password });
             if (!user)
               return res.send({
                 status: false,
                 msg: "username or the password is not correct or absent",
               });
           
             
             let token = jwt.sign(
               {
                 authorId: user._id,
                 email: "xyz@gmail.com",
                 password: "FUnctionUp",
               },
               "functionup-uranium"
             );
             res.setHeader("x-auth-token", token);
             res.send({ status: true,  code: 200, token: token , email: user.email });
           }catch (error) {
             res.status(400).send({ status: false, error: error.message });
           }
           };



// api for logout inwhich i clear the cookie
 const logout = (req,res) => {
    console.log("hello my logout page")
   
    res.clearCookie('jwt').send();("user logout")
}



// post api for adding title and body
 const add = async (req,res) => {
          let data = req.body 
          let {body ,title  } = data
        //   let dataofbody = await blogModel.find({body})
          
        //      const length = dataofbody.length
            let currentmarks = body.length
            console.log(currentmarks)
            let totalmarks = 120
            let percentage = currentmarks/totalmarks*100
            
             let createdata = {
                       title:title,
                       body:body,
                       percentage:percentage
             }
          const createNewAuthor= await BlogModel.create(createdata)
          res.send({message:'Author successfully created',data:createNewAuthor});

  
}

// api for fetching data
 const get = async (req,res) => {
    // const data = req.body
   const getController = await BlogModel.find({})
   res.status(200).json(getController)
}

// for updation
 const updateOrderDetail = async function(req, res) {
    try {
        let data = req.body;
        // const userId = req.params.id
            //const jwtUserId = req.userId
         const {title , body } = data
            const updatedBlog = await BlogModel.findOneAndUpdate({_id:req.params.id},{

                title: title,
                body : body      
            },
            {new:true}
            )
        res.status(200).send({ status: true, msg: 'sucesfully updated', data: updatedBlog })

    } catch (error) {
        res.status(500).send({ status: false, Message: error.message })
    }
}



module.exports = {signup,add,updateOrderDetail,logout,get,loginUser}