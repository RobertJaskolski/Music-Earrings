import React from "react";
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
    <Section>
      <Grid container spacing={6}>
        <Grid item xs={12} md={2}>
          <Typography id='range-slider-Popularity' gutterBottom>
            Tracks
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
