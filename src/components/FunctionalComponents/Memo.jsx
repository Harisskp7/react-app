import React from "react";

const Memo=()=>{
    const [number,updateNumber]=0
    return(
        <div>
            <h1>
                This is a dengerous hook which is memo
            </h1>
            <input type="number" value={number}></input>
            <Link to="/memo">Register</Link>
        </div>
    )
}