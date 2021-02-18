import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import QueueIcon from "@material-ui/icons/Queue";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ChipArtist, DivArtist, IMGArtist, H2Artist } from "./style/style";

function ArtistChip(props) {
  const { name, images, auth } = props;
  const changeNChip = useMediaQuery("(min-width:1280px)");
  if (!name) {
    return null;
  }
  return (
    <ChipArtist data-test='chipComponent'>
      <DivArtist>
        <IMGArtist
          data-test='chipIMG'
          height='65px'
          width='65px'
          src={images[0]?.url || "/images/wrapper.jpg"}
          alt={name}
        />
        <H2Artist data-test='chipText'>{name}</H2Artist>
        <span>
          {auth ? (
            <Tooltip title='Add to quequ'>
              <QueueIcon />
            </Tooltip>
          ) : (
            <Tooltip title='Add to quequ'>
              <QueueIcon />
            </Tooltip>
          )}
        </span>
      </DivArtist>
    </ChipArtist>
  );
}

ArtistChip.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
};

export default ArtistChip;
