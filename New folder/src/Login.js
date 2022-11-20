import { useContext,  useState } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import {UserContext} from "./App"
import {Container} from "./styles/Container"
import {Button} from "./styles/Button"



function Signin() {

    const {state,dispatch} = useContext(UserContext)


    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(email, password)
        axios.post('http://localhost:5000/signin',
            {
                email: email,
                password: password
            })
            .then(res => {
                console.log(res.data)

                if (res.data.code === 500) {
                    alert('User Not Found')
                }
                if (res.data.code === 404) {
                    alert('Password is wrong')
                }
                if (res.data.code === 200) {
                    // move to home
                    dispatch({type:"USER",payload:true})
                    navigate('/')
                    localStorage.setItem('TOKEN', res.data.token)
                    localStorage.setItem('EMAIL', res.data.email)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (<>
        <Container  style={{  display: 'block',  alignContent:"center" , marginLeft:"100px" }}>

        <h1 className="center"> SIGNIN </h1>
            Email
            <input style={{   marginLeft:"17px" }}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                value={email}
                className="inputs"
                type="email" /> <br /> <br />
            Password
            <input
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                value={password}
                className="inputs" type="password" /> <br /> <br />
            <Button
                onClick={handleSubmit}
                className="btns" 
                > 
                     SUBMIT </Button>
            <Link style={{ display: 'block', marginTop: '5px' }}
                to={'/signup'}> SIGN UP </Link>
            <Link style={{  display: 'block', marginTop: '5px' }}
                to={'/forget-pass'}> Forget Password </Link>
       
                </Container>
    </>
    )
}


export default Signin