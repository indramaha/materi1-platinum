import axios from "axios";
import { useState } from "react";
import { API } from "../const/endpoint";
import Navbar from "../Components/Navbar";

const Login = () => {
    const [email, setEmail] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState("")
    const handlePassword = (e) => { 
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        const payLoad = {
            email: email,
            password: password
        }

        axios
            .post(API.LOGIN, payLoad)
            .then((ress) => {
                console.log(ress)
            })
            .catch((err) => console.log(err.message))
    }
    return ( 
        <div>
            <Navbar />
            <div className="register-section">
                <div>
                    <h1>Login Admin</h1>
                </div>
                <div className='register-input-bg'>
                    <input onChange={handleEmail} placeholder='email'type='email' className='register-input'/>
                    <input onChange={handlePassword} placeholder='password' type='password' className='register-input'/>
                </div>
                <div className='register-button-bg'>
                    <button onClick={handleLogin} className='register-button'>login</button>
                </div>
            </div>
        </div>
        
     );
}
 
export default Login;