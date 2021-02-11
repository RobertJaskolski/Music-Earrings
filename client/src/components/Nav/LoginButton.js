import React from "react";
import spotifyLogo from "../../images/spotifyLogo.png";
import { Button } from "../../StyledComponents/Buttons";
import { Div, Span } from "../../StyledComponents/GridElements";
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
};

LoginButton.propTypes = {
  redirectLink: PropTypes.string,
};

export default LoginButton;
