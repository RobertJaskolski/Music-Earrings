import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

function Filters() {
  const [valuePopularity, setvaluePopularity] = useState([0, 100]);
  const [valueEnergy, setvalueEnergy] = useState([0, 100]);
  const [valueDanceable, setvalueDanceable] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    console.log(event);
  };

  return (
    <div>
      <FormControl variant='outlined'>
        <InputLabel htmlFor='numberOfTracks'>Max number of tracks</InputLabel>
        <Select
          native
          defaultValue={25}
          //onChange={}
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
        value={valuePopularity}
        onChange={handleChange}
        valueLabelDisplay='auto'
        aria-labelledby='range-slider-Popularity'
      />

      <Typography id='range-slider-Energy' gutterBottom>
        Energy
      </Typography>
      <Slider
        value={valueEnergy}
        onChange={handleChange}
        valueLabelDisplay='auto'
        aria-labelledby='range-slider-Energy'
      />

      <Typography id='range-slider-Danceable' gutterBottom>
        Danceable
      </Typography>
      <Slider
        value={valueDanceable}
        onChange={handleChange}
        valueLabelDisplay='auto'
        aria-labelledby='range-slider-Danceable'
      />
    </div>
  );
}

export default Filters;
