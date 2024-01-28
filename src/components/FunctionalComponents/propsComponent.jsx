import React from "react"
import "../../css/propscomp.css"

function PropsComponent(props)
{
    return(
        <div>
            <h1> This is Props component</h1>
            Hello, {props.name} This is {props.course} class
        </div>
    )

}
export default PropsComponent