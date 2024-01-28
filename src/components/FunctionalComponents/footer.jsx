import "../../css/navbar.css"
import logo1 from "../FunctionalComponents/whatsapp.png"
import logo2 from "../FunctionalComponents/github.png"
import logo3 from "../FunctionalComponents/twitter.png"
import logo4 from "../FunctionalComponents/linkedin.png"
import {Link} from 'react-router-dom'
const Footer =() => {
    return(
        <footer>
        <div>
            <h4>Connect with us</h4><br></br>
            <a href="https://wa.me/+918825999569" target="_blank"><img src={logo1} className="whatslogo"></img></a>
            <a href="https://www.linkedin.com/in/haris-t-5b42a1251" target="_blank"><img src={logo4} className="linkedin"></img></a>
            <a href="https://www.github.com/Harisskp7" target="_blank"><img src={logo2} className="linkedin"></img></a>
            <img src={logo3} className="twitterlogo"></img>
        </div>
        </footer>
    )

}
export default Footer