import React from "react";
//import spotifyLogo from "../../images/SpotifyLogo.svg";
import { Button } from "../../styles/Buttons";
import { Div, Span } from "../../styles/GridElements";

const LoginButton = ({ redirectLink, children }) => {
  if (!redirectLink) {
    return null;
  }

  return (
    <Div data-test='loginButtonComponent'>
      <a data-test='redirect' href={redirectLink}>
        <Button data-test='redirectButton'>
          <Span>
            <img
              data-test='spotifyLogoIMG'
              alt='Spotify logo'
              src='/images/spotifyLogo.svg'
              width='25px'
              height='25px'
            />
          </Span>
          <Span>{children}</Span>
        </Button>
      </a>
    </Div>
  );
};

export default LoginButton;
