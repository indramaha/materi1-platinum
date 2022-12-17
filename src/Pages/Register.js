import axios from 'axios';
import { useState } from 'react';
import { API } from '../const/endpoint';
import './Register.css'
import Navbar from '../Components/Navbar';

const Register = () => {
    const [email, setEmail] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState("")
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleRegis = () => {
        const payLoad = {
            email : email,
            password : password,
            role : "Admin",
        }

        axios
            .post(API.REGISTER, payLoad)
            .then((ress) => {
                console.log(ress)
                localStorage.setItem("token", ress.data.access_token);
            })
            .catch((err) => console.log(err.message))
    }

    // console.log(email)

    return ( 
        <div>
            <Navbar />
            <div className="register-section">
                <div>
                    <h1>Register Admin</h1>
                </div>
                <div className='register-input-bg'>
                    <input onChange={handleEmail} placeholder='email'type='email' className='register-input'/>
                    <input onChange={handlePassword} placeholder='password' type='password' className='register-input'/>
                </div>
                <div className='register-button-bg'>
                    <button onClick={handleRegis} className='register-button'>register</button>
                </div>
            </div>
        </div>
        
     );
}
 
export default Register;