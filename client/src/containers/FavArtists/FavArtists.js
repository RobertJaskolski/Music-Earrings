// Import outside
import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// Import utils, API's and etc.
import { filtersActions } from "../../reducers/filtersForGeneratePlaylist";
// Import Components
import FavArtist from "../../components/FavArtists/FavArtist";
// Import Styles
import { Div, H2, GridContainer } from "./style/style";

function FavArtists({
  auth,
  userFavoriteArtists,
  addArtistToFiltr,
  filtersLength,
}) {
  const changeFav = useMediaQuery("(min-width:500px)");
  const addToFilters = (item) => {
    if (filtersLength < 5) {
      addArtistToFiltr(item);
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

const mapStateToProps = (state) => {
  return {
    filtersLength:
      state.filtrsGeneratePlaylist["artistSeeds"].length +
      state.filtrsGeneratePlaylist["trackSeeds"].length,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addArtistToFiltr: (artist) => {
      dispatch(filtersActions.addArtist(artist));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavArtists);
