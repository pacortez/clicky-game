import React from "react";
import { Jumbotron } from "reactstrap";
import "./style.css"




const TitleJumbotron = (props) => {
    return(
        <div>
            <Jumbotron style={{
                backgroundColor: "transparent", 
                backgroundImage: "url('/img/background.jpeg')",
                backgroundSize: "cover",
                color: "white",
                opacity: 0.9,
                
            }}>
                <h1 className="display-3">Clicky Game</h1>
                <p className="lead">Game instructions: Click on each image only once, if you click the same image twice, you lose!</p>
                <hr className="my-2" />
                <p>Current Score: {props.current} </p>
                
                <p>High Score: {props.high} </p>
                
                

            </Jumbotron>
        </div>
    )
}

export default TitleJumbotron;