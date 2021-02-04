import React from "react";
import styled from "styled-components";
import spotifyLogo from "./spotifyLogo.png";
const A = styled.a`
  text-decoration: none;
`;
const Button = styled.button`
  background-color: #1ed760;
  color: #fff;
  border: 1px solid #1db954;
  padding: 15px;
  border-radius: 5px;
  font-weight: bold;
  transition-duration: 0.5s;
  display: flex;
  align-items: center;
  &:hover {
    border-color: #1ed760;
    background-color: #1db954;
    cursor: pointer;
  }
`;
const Div = styled.div`
  display: flex;
  margin: 10px 10px 0px 0px;
  justify-content: flex-end;
  align-items: center;
`;
const Span = styled.span`
  margin: 0px 5px;
`;

function LoginButton(props) {
  return (
    <Div>
      <A href='http://localhost:4000/Login'>
        <Button>
          <Span>
            <img
              alt='Spotify logo'
              src={spotifyLogo}
              width='16px'
              height='16px'
            />
          </Span>
          <Span>Connect with Spotify</Span>
        </Button>
      </A>
    </Div>
  );
}

export default LoginButton;
