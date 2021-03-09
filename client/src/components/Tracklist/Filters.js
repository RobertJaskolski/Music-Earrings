import React, { useEffect, useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { connect } from "react-redux";
import { filtersActions } from "../../reducers/filtersForGeneratePlaylist";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import { Grid } from "@material-ui/core";
import { Section } from "./style/style";
import API from "../../api/SpotifyAPI";
import MyAPI from "../../api/MyAPI";

const CustomInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #1db954",
    fontSize: 16,
    color: "white",
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#1db954",
      boxShadow: "0 0 0 0.2rem rgba(29, 185, 84, .25)",
    },
  },
}))(InputBase);
const CustomSlider = withStyles({
  root: {
    color: "#1db954",
    height: 8,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -6,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function Filters(props) {
  const {
    limit,
    changeEnergy,
    changePopularity,
    changeDanceable,
    changeLimit,
    auth,
    trackSeeds,
    artistSeeds,
    SpotifyGetRecommendations,
    MyAPIGetRecommendations,
  } = props;

  const handleChange = (name, newValue) => {
    if (name === "energy") {
      setEnergy(newValue);
    } else if (name === "popularity") {
      setPopularity(newValue);
    } else if (name === "danceable") {
      setDanceable(newValue);
    }
  };

  const handleChangeLimit = (e) => {
    changeLimit(e.target.value);
    responseToApi();
  };

  const responseToApi = () => {
    changeEnergy(energy);
    changeDanceable(danceable);
    changePopularity(popularity);
    if (artistSeeds.length || trackSeeds.length) {
      if (auth) {
        SpotifyGetRecommendations();
      } else if (!auth) {
        MyAPIGetRecommendations();
      }
    }
  };
  const [popularity, setPopularity] = useState([0, 100]);
  const [danceable, setDanceable] = useState([0, 100]);
  const [energy, setEnergy] = useState([0, 100]);
  useEffect(() => {}, [popularity, danceable, energy]);

  return (
    <Section>
      <Grid container spacing={6}>
        <Grid item xs={12} md={2}>
          <Typography id='range-slider-Popularity' gutterBottom>
            Max Tracks
          </Typography>
          <FormControl>
            <Select
              labelId='demo-customized-select-label'
              id='demo-customized-select'
              value={limit}
              onChange={handleChangeLimit}
              input={<CustomInput />}
            >
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={75}>75</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography id='range-slider-Popularity' gutterBottom>
            Popularity
          </Typography>
          <CustomSlider
            onChangeCommitted={responseToApi}
            value={popularity}
            onChange={(_, newValue) => {
              handleChange("popularity", newValue);
            }}
            aria-labelledby='range-slider-Popularity'
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography id='range-slider-Energy' gutterBottom>
            Energy
          </Typography>
          <CustomSlider
            value={energy}
            onChange={(_, newValue) => {
              handleChange("energy", newValue);
            }}
            onChangeCommitted={responseToApi}
            aria-labelledby='range-slider-Energy'
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography id='range-slider-Danceable' gutterBottom>
            Danceable
          </Typography>
          <CustomSlider
            value={danceable}
            onChange={(_, newValue) => {
              handleChange("danceable", newValue);
            }}
            onChangeCommitted={responseToApi}
            aria-labelledby='range-slider-Danceable'
          />
        </Grid>
      </Grid>
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {
    limit: state.filtrsGeneratePlaylist["limit"],
    artistSeeds: state.filtrsGeneratePlaylist["artistSeeds"],
    trackSeeds: state.filtrsGeneratePlaylist["trackSeeds"],
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
    SpotifyGetRecommendations: () => dispatch(API.GetRecommendations()),
    MyAPIGetRecommendations: () => dispatch(MyAPI.GetRecommendations()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
