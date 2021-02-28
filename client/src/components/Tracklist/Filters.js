import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { connect } from "react-redux";
import { filtersActions } from "../../reducers/filtersForGeneratePlaylist";

function Filters(props) {
  const {
    limit,
    popularity,
    energy,
    danceable,
    changeEnergy,
    changePopularity,
    changeDanceable,
    changeLimit,
    auth,
  } = props;
  const handleChange = (name, newValue) => {
    if (name === "energy") changeEnergy(newValue);
    else if (name === "popularity") changePopularity(newValue);
    else if (name === "danceable") changeDanceable(newValue);
  };

  const handleChangeLimit = (e) => {
    changeLimit(e.target.value);
  };
  return (
    <div>
      <FormControl variant='outlined'>
        <InputLabel htmlFor='numberOfTracks'>Max number of tracks</InputLabel>
        <Select
          native
          defaultValue={limit}
          onChange={handleChangeLimit}
          label='Max number of tracks'
          inputProps={{
            name: "numberOfTracks",
            id: "numberOfTracks",
          }}
        >
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={75}>75</option>
          <option value={100}>100</option>
        </Select>
      </FormControl>
      <Typography id='range-slider-Popularity' gutterBottom>
        Popularity
      </Typography>
      <Slider
        value={popularity}
        onChange={(_, newValue) => {
          handleChange("popularity", newValue);
        }}
        aria-labelledby='range-slider-Popularity'
      />

      <Typography id='range-slider-Energy' gutterBottom>
        Energy
      </Typography>
      <Slider
        value={energy}
        onChange={(_, newValue) => {
          handleChange("energy", newValue);
        }}
        aria-labelledby='range-slider-Energy'
      />

      <Typography id='range-slider-Danceable' gutterBottom>
        Danceable
      </Typography>
      <Slider
        value={danceable}
        onChange={(_, newValue) => {
          handleChange("danceable", newValue);
        }}
        aria-labelledby='range-slider-Danceable'
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    limit: state.filtrsGeneratePlaylist["limit"],
    popularity: state.filtrsGeneratePlaylist["popularity"],
    energy: state.filtrsGeneratePlaylist["energy"],
    danceable: state.filtrsGeneratePlaylist["danceable"],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeEnergy: (item) => {
      dispatch(filtersActions.addEnergy(item));
    },
    changePopularity: (item) => {
      dispatch(filtersActions.addPopularity(item));
    },
    changeDanceable: (item) => {
      dispatch(filtersActions.addDanceable(item));
    },
    changeLimit: (item) => {
      dispatch(filtersActions.addLimit(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
