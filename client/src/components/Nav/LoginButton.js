import React from "react";
import styled from "styled-components";
const Button = styled.button`
  background-color: #1ed760;
  color: #fff;
`;

function LoginButton() {
  return (
    <a href="http://localhost:4000/Login">
      <Button>Connect with Spotify</Button>
    </a>
  );
}

export default LoginButton;
