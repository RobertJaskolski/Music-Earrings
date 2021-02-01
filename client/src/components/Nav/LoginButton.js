import React from "react";
import styled from "styled-components";
const Button = styled.button``;

function LoginButton() {
  return (
    <a href="Login">
      <Button>Connect with Spotify</Button>
    </a>
  );
}

export default LoginButton;
