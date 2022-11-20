const UserModel = require('../Model/user')
// const nodemailer = require('nodemailer')
const BlogModel = require("../Model/blogModel")
const jwt = require("jsonwebtoken")


module.exports.signup = (req, res) => {
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

// module.exports.signin = (req, res) => {
//     console.log(req.body.email)

//     // email and password match

//     UserModel.findOne({ email: req.body.email })
//         .then(result => {
//             console.log(result, '11')

//             // match password with req.body.password
//             if (result.password !== req.body.password) {
//                 res.send({ code: 404, message: 'password wrong' })
//             } else {
//                 res.send({
//                     email: result.email,
//                     code: 200,
//                     message: 'user Found',
//                     token: 'hfgdhg'
//                 })
//             }

//         })
//         .catch(err => {
//             res.send({ code: 500, message: 'user not found' })
//         })


module.exports.loginUser = async function (req, res) {
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

    // newUser.save().then(() => {
    //     res.send({ code: 200, message: 'Signup success' })
    // }).catch((err) => {
    //     res.send({ code: 500, message: 'Signup Err' })
    // })

// }

// module.exports.sendotp = async (req, res) => {
//     console.log(req.body)
//     const _otp = Math.floor(100000 + Math.random() * 900000)
//     console.log(_otp)
//     let user = await UserModel.findOne({ email: req.body.email })
//     // send to user mail
//     if (!user) {
//         res.send({ code: 500, message: 'user not found' })
//     }

//     let testAccount = await nodemailer.createTestAccount()

//     let transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false,
//         auth: {
//             user: testAccount.user,
//             pass: testAccount.pass
//         }
//     })



//     let info = await transporter.sendMail({
//         from: 'naimuddin540@gmail.com',
//         to: req.body.email, // list of receivers
//         subject: "OTP", // Subject line
//         text: String(_otp),
//         html: `<html>
//             < body >
//             Hello and welcome
//         </ >
//        </html > `,
//     })

//     if (info.messageId) {

//         console.log(info, 84)
//         UserModel.updateOne({ email: req.body.email }, { otp: _otp })
//             .then(result => {
//                 res.send({ code: 200, message: 'otp send' })
//             })
//             .catch(err => {
//                 res.send({ code: 500, message: 'Server err' })

//             })

//     } else {
//         res.send({ code: 500, message: 'Server err' })
//     }
// }


// module.exports.submitotp = (req, res) => {
//     console.log(req.body)


//     UserModel.findOne({ otp: req.body.otp }).then(result => {

//         //  update the password 

//         UserModel.updateOne({ email: result.email }, { password: req.body.password })
//             .then(result => {
//                 res.send({ code: 200, message: 'Password updated' })
//             })
//             .catch(err => {
//                 res.send({ code: 500, message: 'Server err' })

//             })


//     }).catch(err => {
//         res.send({ code: 500, message: 'otp is wrong' })

//     })


// }


module.exports.logout = (req,res) => {
    console.log("hello my logout page")
    
    res.status(200).send("user logout")
}

// (req, res){
//     cookie = req.cookies;
//     for (var prop in cookie) {
//         if (!cookie.hasOwnProperty(prop)) {
//             continue;
//         }    
//         res.cookie(prop, '', {expires: new Date(0)});
//     }
//     res.redirect('/');
// });


module.exports.add = async (req,res) => {
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


module.exports.get = async (req,res) => {
    // const data = req.body
   const getController = await BlogModel.find({})
   res.status(200).json(getController)
}


module.exports.updateOrderDetail = async function(req, res) {
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
