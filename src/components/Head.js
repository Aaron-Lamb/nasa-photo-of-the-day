import React from "react";

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <img src={props.url} alt={props.title}></img>
        </div>
    )
}

export default Header;