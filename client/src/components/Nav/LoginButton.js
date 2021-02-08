import React from "react";
import spotifyLogo from "../../images/spotifyLogo.png";
import { Button } from "../../StyledComponents/Buttons";
import { Div, Span } from "../../StyledComponents/GridElements";

function LoginButton(props) {
  return (
    <Div>
      <a href={`${process.env.REACT_APP_API_URL}/login`}>
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
      </a>
    </Div>
  );
}

export default LoginButton;
