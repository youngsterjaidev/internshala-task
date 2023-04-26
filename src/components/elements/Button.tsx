import React from "react";
import styled from "styled-components";

interface Props {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

export const Button = styled.button<Props>`
  border: 1px solid ${(props) => props.theme.button};
  background: ${(props) => props.theme.button};
  color: #fff;
  padding: 0.6rem 2.5rem;
  border-radius: 2rem;
  font-weight: bold;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamily};

  &:hover {
    background: ${(props) => props.theme.buttonHover};
    color: white;
  }

  ${(props) =>
    props.large &&
    `
      padding: 1rem 4rem; 
  `}
`;
