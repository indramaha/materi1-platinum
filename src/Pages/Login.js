import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../const/endpoint";
import Navbar from "../Components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState("")
    const handlePassword = (e) => { 
        setPassword(e.target.value)
    }

    const navigate = useNavigate()

    const [isLogin, setIsLogin] = useState(false)

    useEffect (() => {
        const token = localStorage.getItem("token")
        if (!token){
            setIsLogin(false)
        } else{
            setIsLogin(true)
        }
    })

    const handleLogin = () => {
        const payLoad = {
            email: email,
            password: password
        }

        axios
            .post(API.LOGIN, payLoad)
            .then((ress) => {
                console.log(ress)
                localStorage.setItem("token", ress.data.access_token);
                navigate("/discovery")
            })
            .catch((err) => console.log(err.message))
    }

    const handleLogout = (() => {
        localStorage.removeItem("token")
        navigate("/login")
    })
    return ( 
        <div>
            <Navbar />
            {
                isLogin ? (
                    <button onClick={handleLogout}>Log Out</button>
                    ) : (
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
                    </div>)
            }
            
        </div>
        
     );
}
 
export default Login;