import React from "react";
import logo from "../../images/logo.png";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  margin: 5px;
  justify-content: flex-start;
  align-items: center;
`;

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
