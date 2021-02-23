import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import FavArtist from "../../components/FavArtists/FavArtist";
import { Div, H2, Line } from "./style/style";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function FavArtists(props) {
  const changeFav = useMediaQuery("(min-width:500px)");
  const { auth, favs } = props;
  if (!auth) {
    return null;
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <H2>Yours favs</H2>
        <Line />
        <Div>
          {favs.map((item) => {
            return <FavArtist changeFav={changeFav} key={item.id} {...item} />;
          })}
        </Div>
      </Grid>
    </Grid>
  );
}

export default FavArtists;
