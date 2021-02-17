import React from "react";
//import spotifyLogo from "../../images/SpotifyLogo.svg";
import { Button } from "../../styles/Buttons";
import { Div, Span } from "../../styles/GridElements";
import PropTypes from "prop-types";

const LoginButton = ({ redirectLink }) => {
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
          <Span>Connect with Spotify</Span>
        </Button>
      </a>
    </Div>
  );
};

LoginButton.propTypes = {
  redirectLink: PropTypes.string,
};

export default LoginButton;
