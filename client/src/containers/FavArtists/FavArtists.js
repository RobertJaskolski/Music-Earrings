// Import outside
import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// Import Components
import FavArtist from "../../components/FavArtists/FavArtist";
// Import Styles
import { Div, H2, GridContainer } from "./style/style";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function FavArtists({
  auth,
  userFavoriteArtists,
  artistSeeds,
  trackSeeds,
  addArtistToSeeds,
}) {
  const changeFav = useMediaQuery("(min-width:500px)");
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFail, setOpenFail] = useState(false);
  const addToFilters = (item) => {
    if (trackSeeds.length + artistSeeds.length < 5) {
      addArtistToSeeds(item);
      setOpenSuccess(true);
    } else {
      setOpenFail(true);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
    setOpenFail(false);
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
      <Snackbar
        open={openSuccess}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          The artist has been added!
        </Alert>
      </Snackbar>
      <Snackbar open={openFail} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          You can generate a tracklist on the basis of 5 options!
        </Alert>
      </Snackbar>
    </GridContainer>
  );
}

export default FavArtists;
