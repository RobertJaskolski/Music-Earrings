import React from "react";
import { Div, Chip } from "./style/style";
import CloseIcon from "@material-ui/icons/Close";

function TracksAndArtists(props) {
  const { artists, tracks, handleDeleteTrack, handleDeleteArtist } = props;
  return (
    <Div>
      {artists.length
        ? artists.map((item) => {
            return (
              <Chip key={item.id}>
                <span>{item.name}</span>
                <span>
                  <CloseIcon
                    onClick={() => {
                      handleDeleteArtist(item);
                    }}
                  />
                </span>
              </Chip>
            );
          })
        : null}
      {tracks.length
        ? tracks.map((item) => {
            return (
              <Chip key={item.id}>
                <span>{item.name}</span>
                <span>
                  <CloseIcon
                    onClick={() => {
                      handleDeleteTrack(item);
                    }}
                  />
                </span>
              </Chip>
            );
          })
        : null}
    </Div>
  );
}

export default TracksAndArtists;
