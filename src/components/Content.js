import React from "react";

const Content =(props) => {
    return(
        <div>
            <h3>{props.date}</h3>
            <p>{props.explanation}</p>
        </div>
    )
}

export default Content;