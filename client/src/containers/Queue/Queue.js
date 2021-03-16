// Import outside
import React from "react";

// Import utils, API's and etc.
// Import Components
import {
  InformationAndConnectButton,
  QueueTrack,
  NowPlaying,
  PlayQueue,
  ClearButton,
} from "../../components/Queue";

// Import Styles
import { Div, Line, H2, DivTracks, H4, H4Empty } from "./style/style";

function Queue({ auth, queueTracks, deleteTrackFromQueue, clearQueue }) {
  const handleDeleteTrackFormQueue = (track) => {
    deleteTrackFromQueue(track);
  };
  const handleClearQueue = () => {
    clearQueue();
  };
  return (
    <Div>
      <main style={{ width: "100%" }}>
        <H2>Queue</H2>
        <Line />
        {auth ? (
          <DivTracks>
            {queueTracks?.length ? (
              <DivTracks>
                {true ? (
                  <DivTracks>
                    <H4>Now Playing</H4>
                    <NowPlaying track={queueTracks[0]} />
                    <H4>Next In Queue</H4>
                  </DivTracks>
                ) : (
                  <PlayQueue />
                )}
                {queueTracks?.map((track) => (
                  <QueueTrack
                    key={track.id}
                    track={track}
                    handleDeleteTrackFormQueue={handleDeleteTrackFormQueue}
                  />
                ))}
                <ClearButton handleClearQueue={handleClearQueue} />
              </DivTracks>
            ) : (
              <H4Empty>Empty queue</H4Empty>
            )}
          </DivTracks>
        ) : (
          <InformationAndConnectButton />
        )}
      </main>
    </Div>
  );
}

export default Queue;
