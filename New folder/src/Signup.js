import { useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import {Container} from "./styles/Container"
import { Button} from "./styles/Button"
function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(email, password)
        axios.post('http://localhost:5000/signup',
            {
                email: email,
                password: password
            }).then(res => {
                console.log(res)
                console.log(res.data)
                if (res.data.code === 200) {
                    alert('Signup success.')
                } else {
                    alert('Error.')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (<>
       <Container style={{  display: 'block',  alignContent:"center" , marginLeft:"100px" }}>
        <h1 className="center"> SIGNUP </h1>
           <br/>
            Email: 
            <input style={{  marginLeft:"18px" }}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                value={email}
                className="inputs"
                type="email" /> <br /> <br />
            Password : 
            <input
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                value={password}
                className="inputs" type="password" /> <br /> <br />
            <Button
                onClick={handleSubmit}
                className="btns"> SUBMIT </Button>
            <Link style={{  display: 'block', marginTop: '5px' }}
                to={'/signin'}> SIGN IN </Link>
        
                </Container>
    </>
    )
}

// const Wrapper = styled.section`
//   .textarea{
//     width:100%;
//     height:30%
//   }









export default Signup