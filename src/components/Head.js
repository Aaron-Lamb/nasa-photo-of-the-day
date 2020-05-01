import React from "react";
import styled from "styled-components";
/** @jsx jsx */
import { jsx } from '@emotion/core';

const HeadFont = styled.h1`
font-family: 'Baloo Tamma 2', cursive;
`

const Header = (props) => {
    return(
        <div>
            <HeadFont
            css={{
                width: '50%',
                color: 'white',
                backgroundColor: 'black',
                marginLeft: '22.5%',
                padding: '2%',
                border: '2px solid skyblue'
                }}
            {...props}
            >{props.title}</HeadFont>
            <img 
            css={{
                width: '75%',
                height: '40h',
                border: '2px solid black',
                borderRadius: '3%',
                backgroundColor: 'white',
                background: 'rgba(0, 0, 0, 0.2)',
                padding: '3%'
            }}
            {...props}
            src={props.url} alt={props.title}></img>
        </div>
    )
}

export default Header;