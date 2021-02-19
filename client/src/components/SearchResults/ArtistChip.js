import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import QueueIcon from "@material-ui/icons/Queue";
import RadioIcon from "@material-ui/icons/Radio";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ChipArtist, DivArtist, IMGArtist, H2Artist } from "./style/style";
import {
  DivArtistPhone,
  IMGArtistPhone,
  H4ArtistPhone,
  SpanArtistPhone,
} from "./style/phone.style";

function ArtistChip(props) {
  const {
    name,
    images,
    external_urls,
    followers,
    generes,
    href,
    id,
    popularity,
    type,
    uri,
    auth,
    addToFilters,
  } = props;
  const artist = {
    name,
    images,
    external_urls,
    followers,
    generes,
    href,
    id,
    popularity,
    type,
    uri,
  };
  const changeChip = useMediaQuery("(min-width:1000px)");
  if (!name) {
    return null;
  }
  return (
    <ChipArtist data-test='chipComponent' desktop={changeChip}>
      {changeChip ? (
        <DivArtist>
          <IMGArtist
            data-test='chipIMG'
            height='65px'
            width='65px'
            src={images[0]?.url || "/images/wrapper.jpg"}
            alt={name}
          />
          <H2Artist data-test='chipText'>{name}</H2Artist>

          {auth ? (
            <span>
              <Tooltip title='Listen artist radio'>
                <RadioIcon />
              </Tooltip>
              <Tooltip title='Add to filters'>
                <QueueIcon onClick={() => addToFilters(artist)} />
              </Tooltip>
            </span>
          ) : (
            <span>
              <Tooltip title='Add to filters'>
                <QueueIcon onClick={() => addToFilters(artist)} />
              </Tooltip>
            </span>
          )}
        </DivArtist>
      ) : (
        <DivArtistPhone>
          <IMGArtistPhone
            data-test='chipIMG'
            height='110px'
            width='110px'
            src={images[0]?.url || "/images/wrapper.jpg"}
            alt={name}
          />
          <H4ArtistPhone>
            {name}
            <br />
            {auth ? (
              <SpanArtistPhone>
                <RadioIcon />
                <QueueIcon onClick={() => addToFilters(artist)} />
              </SpanArtistPhone>
            ) : (
              <SpanArtistPhone>
                <QueueIcon onClick={() => addToFilters(artist)} />
              </SpanArtistPhone>
            )}
          </H4ArtistPhone>
        </DivArtistPhone>
      )}
    </ChipArtist>
  );
}

ArtistChip.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
};

export default ArtistChip;
