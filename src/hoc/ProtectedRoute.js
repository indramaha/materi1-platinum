import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [loading, setLoading] = useState(true)

    //part 1
    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem("token")
        if (!token) {
            setIsLogin(false)
            setLoading(false)
        } else{
            setIsLogin(true)
            setLoading(false)
        }
    }, [isLogin])

    //part 2
    if (loading) {
        return ("loading...")
    }

    //part3
    return isLogin ? <Outlet /> : <Navigate to={'/login'} />;
}

export default ProtectedRoute;