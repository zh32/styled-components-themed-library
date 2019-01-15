import React from 'react'
import styled from "styled-components";

const Button = props => {

  const StyledButton = styled.button`
    background-color: ${props => props.theme.primaryColor}
  `;

  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
