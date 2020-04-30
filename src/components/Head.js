import React from "react";
import styled from "styled-components";

const DayImage = styled.img`
    width: 75%;
    height: 40h;
    border: 2px solid black;
    border-radius: 3%;
    background-color: white;
    background: rgba(0, 0, 0, 0.2);
    padding: 3%;
`
const TitleHead = styled.h1`
    width: 50%;
    color: white;
    background-color: black;
    margin-left: 22.5%;
    padding: 2%;
    border: 2px solid skyblue;
    font-family: 'Baloo Tamma 2', cursive;
`

const Header = (props) => {
    return(
        <div>
            <TitleHead>{props.title}</TitleHead>
            <DayImage src={props.url} alt={props.title}></DayImage>
        </div>
    )
}

export default Header;