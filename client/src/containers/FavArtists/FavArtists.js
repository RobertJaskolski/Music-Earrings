// Import outside
import React from "react";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// Import Components
import FavArtist from "../../components/FavArtists/FavArtist";
// Import Styles
import { Div, H2, GridContainer } from "./style/style";

function FavArtists({
  auth,
  userFavoriteArtists,
  artistSeeds,
  trackSeeds,
  addArtistToSeeds,
}) {
  const changeFav = useMediaQuery("(min-width:500px)");
  const addToFilters = (item) => {
    if (trackSeeds.length + artistSeeds.length < 5) {
      addArtistToSeeds(item);
    }
  };
  if (!auth) {
    return null;
  }
  return (
    <GridContainer container>
      <Grid item xs={12}>
        <H2>Yours favs</H2>
        <Div>
          {userFavoriteArtists.map((item) => {
            return (
              <FavArtist
                addToFilters={addToFilters}
                changeFav={changeFav}
                key={item.id}
                artist={item}
              />
            );
          })}
        </Div>
      </Grid>
    </GridContainer>
  );
}

export default FavArtists;
