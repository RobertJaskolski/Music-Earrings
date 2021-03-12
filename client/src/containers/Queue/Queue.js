// Import outside
import React from "react";

// Import utils, API's and etc.
// Import Components
import {
  InformationAndConnectButton,
  QueueTrack,
} from "../../components/Queue";
import { DivTrack } from "../../components/Queue/style/style";

// Import Styles
import { Div, Line, H2, DivTracks } from "./style/style";

function Queue({ auth, queueTracks }) {
  return (
    <Div>
      <main style={{ width: "100%" }}>
        <H2>Queue</H2>
        <Line />
        {auth ? (
          queueTracks?.length ? (
            <DivTrack>
              {queueTracks?.map((track) => (
                <QueueTrack key={track.id} track={track} />
              ))}
            </DivTrack>
          ) : (
            <h2>Empty queue</h2>
          )
        ) : (
          <InformationAndConnectButton />
        )}
      </main>
    </Div>
  );
}

export default Queue;
