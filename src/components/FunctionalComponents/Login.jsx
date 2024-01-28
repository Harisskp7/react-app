import "../../css/navbar.css"
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <form action="">
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
            <div className="container">
            <h1>Login</h1>
                <input  type="text" placeholder="Username" required/><br></br><br></br>
                <input  type="password" placeholder="Password" required/><br></br><br></br>
                <label><input type="checkbox" />Remember me</label><br></br>
                <a href="#">Forgot Password?</a><br></br><br></br>
                <button type="submit">Login</button><br></br>
                    <p>Don't have an account?Register</p>
                    <button ><Link to="/register">Register</Link></button>
                </div>
            
        </form>

    )
}

export default Login;