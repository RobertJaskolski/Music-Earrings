import React from "react";
import logo from "../../images/logo.png";
import PropTypes from "prop-types";
import { Div } from "./style/style";

function Logo({ widthLogo, heightLogo }) {
  if (!widthLogo || !heightLogo) {
    return null;
  }

  return (
    <Div data-test='logoComponent'>
      <img
        data-test='logoIMG'
        src={logo}
        alt='Logo'
        width={widthLogo}
        height={heightLogo}
      />
    </Div>
  );
}

Logo.propTypes = {
  widthLogo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  heightLogo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Logo;
