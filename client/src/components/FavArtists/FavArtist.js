import React from "react";
import PropTypes from "prop-types";
import { Div, Span, P } from "./style/style";
import QueueIcon from "@material-ui/icons/Queue";

function FavArtist(props) {
  const { name, images, changeFav } = props;
  return (
    <Div desktop={changeFav}>
      <Span>
        <img
          alt={name}
          src={images[2]?.url || "/images/wrapper.jpg"}
          width={50}
          height={50}
        />
      </Span>
      <Span>
        <P>{name}</P>
      </Span>
      <Span>
        <QueueIcon />
      </Span>
    </Div>
  );
}

export default FavArtist;
