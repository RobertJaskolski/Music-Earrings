// Import outside
import React from 'react';
import { Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { useTranslation } from 'react-i18next';
// Import Components
import {
  ArtistChip,
  TrackChip,
  SkeletonArtist,
  SkieletonTrack,
} from '../../components/SearchResults';
// Import Styles
import { Section, Div, H1, DivX, DivNoResults } from './style/style';

function SearchResults({
  artists,
  tracks,
  loadingArtistsAndTracks,
  auth,
  clearArtistsAndTracks,
  searchText,
  artistSeeds,
  trackSeeds,
  addTrackToSeeds,
  addArtistToSeeds,
  setSearchText,
  handleOpenSuccessArtist,
  handleOpenFail,
  handleOpenSuccessTrack,
  changePlayingTrack,
}) {
  const { t } = useTranslation();
  let changeChip = useMediaQuery('(min-width:1000px)');
  const showSearch = searchText ? true : false;
  const addToFilters = (item) => {
    if (trackSeeds.length + artistSeeds.length < 5) {
      if (item.type === 'track') {
        addTrackToSeeds(item);
        handleOpenSuccessTrack();
      } else if (item.type === 'artist') {
        addArtistToSeeds(item);
        handleOpenSuccessArtist();
      }
    } else {
      handleOpenFail();
    }
  };
  return (
    <Section id='searchBox' active={showSearch}>
      {loadingArtistsAndTracks ? (
        <Grid container>
          <Grid item lg={6} xs={12}>
            <H1 active={showSearch}>{t('containers.SearchResults.artists')}</H1>
            <Div>
              <SkeletonArtist changeChip={changeChip} />
              <SkeletonArtist changeChip={changeChip} />
              <SkeletonArtist changeChip={changeChip} />
              <SkeletonArtist changeChip={changeChip} />
              <SkeletonArtist changeChip={changeChip} />
              <SkeletonArtist changeChip={changeChip} />
            </Div>
          </Grid>
          <Grid item lg={6} xs={12}>
            <H1 active={showSearch}>{t('containers.SearchResults.tracks')}</H1>
            <Div>
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
              <SkieletonTrack changeChip={changeChip} />
            </Div>
          </Grid>
          <Grid item lg={11} xs={5}></Grid>
          <Grid item lg={1} xs={1}>
            <DivX>
              <CancelPresentationIcon
                onClick={() => {
                  setSearchText('');
                  clearArtistsAndTracks();
                }}
              />
            </DivX>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item lg={6} xs={12}>
            <H1 active={showSearch}>{t('containers.SearchResults.artists')}</H1>
            {artists?.length > 0 ? (
              <Div>
                {artists.map((item) => {
                  return (
                    !item.name.includes('feat') && (
                      <ArtistChip
                        addToFilters={addToFilters}
                        key={item.id}
                        artist={item}
                        auth={auth}
                        changeChip={changeChip}
                      />
                    )
                  );
                })}
              </Div>
            ) : (
              <DivNoResults active={showSearch}>
                <H1 active={showSearch}>
                  {t('containers.SearchResults.noResults')}
                </H1>
              </DivNoResults>
            )}
          </Grid>
          <Grid item lg={6} xs={12}>
            <H1 active={showSearch}>{t('containers.SearchResults.tracks')}</H1>
            {tracks?.length > 0 ? (
              <Div>
                {tracks.map((item) => {
                  return (
                    <TrackChip
                      key={item.id}
                      track={item}
                      auth={auth}
                      addToFilters={addToFilters}
                      changeChip={changeChip}
                      changePlayingTrack={changePlayingTrack}
                    />
                  );
                })}
              </Div>
            ) : (
              <DivNoResults active={showSearch}>
                <H1 active={showSearch}>
                  {t('containers.SearchResults.noResults')}
                </H1>
              </DivNoResults>
            )}
          </Grid>
          <Grid item lg={11} xs={5}></Grid>
          <Grid item lg={1} xs={1}>
            <DivX>
              <CancelPresentationIcon
                onClick={() => {
                  setSearchText('');
                  clearArtistsAndTracks();
                }}
              />
            </DivX>
          </Grid>
        </Grid>
      )}
    </Section>
  );
}

export default SearchResults;
