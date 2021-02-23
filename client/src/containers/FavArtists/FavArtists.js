import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

function FavArtists(props) {
  const { auth } = props;
  if (!auth) {
    return null;
  }
  return (
    <Grid container>
      <Grid item sm={1}></Grid>
      <Grid item sm={10}>
        Favs Artists
      </Grid>
      <Grid item sm={1}></Grid>
    </Grid>
  );
}

export default FavArtists;
