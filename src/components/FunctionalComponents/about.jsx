import {useState} from "react";

const About=()=>{
    const [college,updateCollege] = useState("Kec")
    const updatingClg = () =>{
        updateCollege("kongu engineering College")
    }
    return(
        <div className="about">
            <h1>Welcome to {college}.</h1>
            <button onDoubleClick={updatingClg}>Update College</button>
            {/* <button onClick={About.college}>Update College Again</button> */}
        </div>
    )
} 

export default About;