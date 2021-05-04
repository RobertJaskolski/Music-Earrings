// Import outside
import React from 'react';
import { Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTranslation } from 'react-i18next';
// Import Components
import FavArtist from '../../components/FavArtists/FavArtist';
// Import Styles
import { Div, H2, GridContainer } from './style/style';

function FavArtists({
  auth,
  userFavoriteArtists,
  artistSeeds,
  trackSeeds,
  addArtistToSeeds,
  handleOpenFail,
  handleOpenSuccessArtist,
}) {
  const { t } = useTranslation();
  const changeFav = useMediaQuery('(min-width:500px)');
  const addToFilters = (item) => {
    if (trackSeeds.length + artistSeeds.length < 5) {
      addArtistToSeeds(item);
      handleOpenSuccessArtist();
    } else {
      handleOpenFail();
    }
  };
  if (!auth) {
    return null;
  }
  return (
    <GridContainer container>
      <Grid item xs={12}>
        <H2>{t('containers.FavArtists.yoursfavs')}</H2>
        <Div>
          {userFavoriteArtists?.map((item) => {
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
