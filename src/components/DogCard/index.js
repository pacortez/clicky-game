import React from "react";
import "./style.css";

function DogCard(props) {
    return(
        <div className="card">
            <div className="img-container">
                <span onClick={() => props.userChoice(props.id)} className="choice">
                    <img alt={props.name} src={props.image} />
                </span>
            </div>
            
        </div>
    );
}

export default DogCard;