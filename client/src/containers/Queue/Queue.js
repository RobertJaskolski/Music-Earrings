// Import outside
import React from "react";

// Import utils, API's and etc.
// Import Components
import {
  InformationAndConnectButton,
  QueueTrack,
  NowPlaying,
  PlayQueue,
} from "../../components/Queue";

// Import Styles
import { Div, Line, H2, DivTracks, H4 } from "./style/style";
import { DivTrack } from "../../components/Queue/style/style";

function Queue({ auth, queueTracks }) {
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
                  </DivTracks>
                ) : (
                  <PlayQueue />
                )}
                {queueTracks?.map((track) => (
                  <QueueTrack key={track.id} track={track} />
                ))}
              </DivTracks>
            ) : (
              <h2>Empty queue</h2>
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
