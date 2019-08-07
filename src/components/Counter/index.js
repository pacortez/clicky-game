import React from "react";
import TitleJumbotron from "../TitleJumbotron";

//Extending React.Compoentn class so it inherits functionality
class Counter extends React.Component {
    render() {
        return(
            <div className="card text-center">
                
                <TitleJumbotron 
                    current={this.props.current}
                    high={this.props.high}
                    
                />
            </div>
        );
    }
}

export default Counter;