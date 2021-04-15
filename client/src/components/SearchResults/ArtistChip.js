import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import QueueIcon from "@material-ui/icons/Queue";
import { ChipArtist, DivArtist, IMGArtist, H2Artist } from "./style/style";
import {
  DivArtistPhone,
  IMGArtistPhone,
  H4ArtistPhone,
  SpanArtistPhone,
} from "./style/phone.style";
import { useTranslation } from "react-i18next";

function ArtistChip(props) {
  const { t } = useTranslation();
  const { artist, auth, addToFilters, changeChip } = props;
  const { name, images } = artist;

  if (!name) {
    return null;
  }
  return (
    <ChipArtist data-test="chipComponent" desktop={changeChip}>
      {changeChip ? (
        <DivArtist>
          <IMGArtist
            data-test="chipIMG"
            height="65px"
            width="65px"
            src={images[0]?.url || "/images/wrapper.jpg"}
            alt={name}
          />
          <H2Artist data-test="chipText">{name}</H2Artist>

          {auth ? (
            <span>
              <Tooltip
                title={t("components.SearchResults.ArtistChip.addToFilters")}
              >
                <QueueIcon onClick={() => addToFilters(artist)} />
              </Tooltip>
            </span>
          ) : (
            <span>
              <Tooltip
                title={t("components.SearchResults.ArtistChip.addToFilters")}
              >
                <QueueIcon onClick={() => addToFilters(artist)} />
              </Tooltip>
            </span>
          )}
        </DivArtist>
      ) : (
        <DivArtistPhone>
          <IMGArtistPhone
            data-test="chipIMG"
            height="110px"
            width="110px"
            src={images[0]?.url || "/images/wrapper.jpg"}
            alt={name}
          />
          <H4ArtistPhone>
            {name}
            <br />
            {auth ? (
              <SpanArtistPhone>
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

export default ArtistChip;
