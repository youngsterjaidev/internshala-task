import React from "react"
import styled from "styled-components"

interface Props {
    primary: boolean,
}

export const Button = styled.button<Props>`
    padding: 0.7em 1.8em;
    border: none;
    cursor: pointer;
    border-radius: 0.5em;
    font-weight: bold;

    &:hover {
        
    }

    ${props => props.primary && `
        background: green; 
        color: white;
    `}
`