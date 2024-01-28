import React from "react";
class StateComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            name : "KEC",
            course : "React"
        }
    }
    changeState = () => {
         console.log("Kongu Engineering College")//use state should be used When we come to hooks
    }
    render(){
        return(
            <div>
                <h1>
                    This is state Component
                </h1>
                <p>Hello , {this.state.name}<br></br> {this.state.course}<br></br>
                <h3>
                    I am changing the state of name {this.state.name} to {this.state.changeState}
                    </h3> 
                    
                   
                    </p>
                    <button onClick={this.changeState()}>Click me to change the state</button>
                    
            </div>
        )
    }
}
// class Virat extends React.Component{
//     constructor(){
//         super()
//         this.virat = {
//             name : "Virat",
//             spl : "Run machine"
//         }
        
//     }
//     render()
//     {
//         return(
//             <div>
//                 <h1>
//                     VIRAT KOHLI
//                 </h1>
//                 <h2>Hello , {this.virat.name}<br></br> - Indian {this.virat.spl} </h2>
//             </div>

//         )
//     }
// }
export default StateComponent
// export default Virat