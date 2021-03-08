import React from "react";
import { Grid } from "@material-ui/core";
import FavArtist from "../../components/FavArtists/FavArtist";
import { Div, H2, GridContainer } from "./style/style";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { filtersActions } from "../../reducers/filtersForGeneratePlaylist";
import { connect } from "react-redux";

function FavArtists(props) {
  const changeFav = useMediaQuery("(min-width:500px)");
  const { auth, favs, addArtistToFiltr, filtersLength } = props;
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
          {favs.map((item) => {
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
