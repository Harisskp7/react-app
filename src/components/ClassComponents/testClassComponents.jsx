import React from "react";
import TestComp1 from "../FunctionalComponents/textCopmponent";
 
class ReiteratorComp extends React.Component{
    render()
    {
        return(
            <div>
            <p>
                <TestComp1/>
                Reiterating Class Components
            </p>
            
        </div>
        );
    }
}
export default ReiteratorComp;