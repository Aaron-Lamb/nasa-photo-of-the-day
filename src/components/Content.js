import React from "react";
import styled from "styled-components";

const DateHead = styled.h3`
font-family: 'Baloo Tamma 2', cursive;
`
const InfoPar = styled.p`
    margin-left: 12.25%;
    line-height: 150%;
    width: 75%;
    border: 3px solid grey;
    background-color: aliceblue;
`

const Content =(props) => {
    return(
        <div>
            <DateHead>{props.date}</DateHead>
            <InfoPar>{props.explanation}</InfoPar>
        </div>
    )
}

export default Content;