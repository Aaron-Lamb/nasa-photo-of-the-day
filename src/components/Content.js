import React from "react";
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from "styled-components";

const DateHead = styled.h3`
font-family: 'Baloo Tamma 2', cursive;
`

const Content =(props) => {
    return(
        <div>
            <DateHead>{props.date}</DateHead>
            <p
            css={{
                marginLeft: '12.25%',
                lineHeight: '150%',
                width: '75%',
                border: '3px solid grey',
                backgroundColor: 'aliceblue'
            }}
            {...props}
            >{props.explanation}</p>
        </div>
    )
}

export default Content;