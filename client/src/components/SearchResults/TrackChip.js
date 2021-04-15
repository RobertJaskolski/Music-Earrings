import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import QueueIcon from "@material-ui/icons/Queue";
import Tooltip from "@material-ui/core/Tooltip";
import { ChipTrack, DivTrack, IMGTrack } from "./style/style";
import { DivTrackPhone, Line, TextTrackPhone } from "./style/phone.style";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const mapState = ({ userResponses }) => ({
  user: userResponses.userProfile["info"],
});

function TrackChip(props) {
  const { t } = useTranslation();
  const { user } = useSelector(mapState);
  const { track, addToFilters, auth, changeChip, changePlayingTrack } = props;
  const { name, album, external_urls } = track;
  if (!name) {
    return null;
  }
  return (
    <ChipTrack data-test="chipComponent" desktop={changeChip}>
      {changeChip ? (
        <DivTrack>
          <span>
            {(track?.preview_url || (auth && user?.product === "premium")) && (
              <PlayArrowIcon
                onClick={() => {
                  changePlayingTrack(track, "s");
                }}
              />
            )}
            <IMGTrack
              data-test="chipIMG"
              src={album?.images[0]?.url || "/images/wrapper.jpg"}
              width="40x"
              height="auto"
            />
            <div>{name}</div>
          </span>
          <span>
            {!auth || user?.product === "open" ? (
              <Tooltip title={t("components.SearchResults.TrackChip.spoti")}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={external_urls["spotify"] || ""}
                >
                  <img
                    alt="spotify Logo"
                    width="35px"
                    height="35px"
                    src="/images/spotifyLogo.svg"
                  />
                </a>
              </Tooltip>
            ) : (
              <div></div>
            )}
            <Tooltip
              title={t("components.SearchResults.TrackChip.addToFilters")}
            >
              <QueueIcon onClick={() => addToFilters(track)} />
            </Tooltip>
          </span>
        </DivTrack>
      ) : (
        <DivTrackPhone>
          <Line />
          <span>
            <IMGTrack
              data-test="chipIMG"
              src={album?.images[0]?.url || "/images/wrapper.jpg"}
              width="40x"
              height="auto"
            />
            <TextTrackPhone>{name}</TextTrackPhone>
          </span>
          <span>
            <div>
              {!auth || user?.product === "open" ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={external_urls["spotify"] || ""}
                >
                  <img
                    alt="spotify Logo"
                    width="35px"
                    height="35px"
                    src="/images/spotifyLogo.svg"
                  />
                </a>
              ) : (
                <div></div>
              )}
              <QueueIcon onClick={() => addToFilters(track)} />
            </div>
            {(track?.preview_url || (auth && user?.product === "premium")) && (
              <PlayArrowIcon
                onClick={() => {
                  changePlayingTrack(track, "s");
                }}
              />
            )}
          </span>
        </DivTrackPhone>
      )}
    </ChipTrack>
  );
}

export default TrackChip;
