import React from "react";
import logo from "../../images/logo.png";
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

export default Logo;
