import "../../css/navbar.css"
import { Link } from 'react-router-dom'
import logo5 from "../FunctionalComponents/h7.png"
const Navbar = () => {
    return (
        <div className="one">
            <ol>
                {/* <img src={logo5} className="h7"></img> */}
                <li><Link to="home"><h4>Home</h4></Link></li>
                <li><Link to="about"><h4>About</h4></Link></li>
                <li><Link to="experience"><h4>Experience</h4></Link></li>
                <li><Link to="login"><h4>Login</h4></Link></li>

            </ol>
        </div>
    )

}
export default Navbar
