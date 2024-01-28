import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div classname="wrapper">
        <form action="">
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" required/><br></br><br></br>
                <input type="password" placeholder="Password" required/><br></br><br></br>
                <input type="cnfmpassword" placeholder="Confirm Password" required/>
                
            </div><br></br>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label><br></br>
                <a href="#">Forgot Password?</a><br></br><br></br>
                </div>
                <button type="submit">Login</button><br></br>
                <div className="register-link">
                    <p>Already have an account?</p>
                    <Link to="/Login">Login</Link>
                </div>
            
        </form>
        
    </div>

    )
}

export default Register;