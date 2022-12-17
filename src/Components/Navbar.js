import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return ( 
        <div className="navbar-section">
            <div>
                <h1>Testing</h1>
            </div>
            <div className="navbar-right">
                <div>
                    <Link to={'/'}><p>Home Page</p></Link>
                </div>
                <div>
                    <Link to={'/login'}><p>Login</p></Link>
                </div>
                <div>
                    <Link to={'/register'}><p>Register</p></Link>
                </div>
                <div>
                    <Link to={'/discovery'}><p>Discovery</p></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;