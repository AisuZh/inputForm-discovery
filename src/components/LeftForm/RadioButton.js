import { FormControl, FormHelperText, FormControlLabel, RadioGroup, Radio, Typography } from "@mui/material";
import React from "react";

const RadioButton = ({ error, onChange, value }) => {


  return (
    <div>
      <FormControl component="fieldset" error={Boolean(error)}>
        <Typography mt={3} mb={2} sx={{ fontWeight: 'bold' }}>
          Radio field
        </Typography>
        <RadioGroup
          name="radio-group"
          aria-labelledby="radio-group-label"
          row
          value={value}
          onChange={onChange}
          helperText={error}

        >
          <FormControlLabel
            control={<Radio size="medium" id="1" />}
            label="Label 1"
            value="Label 1"
            sx={{ mr: 6 }}


          />
          <FormControlLabel
            control={<Radio size="medium" id="2" />}
            label="Label 2"
            value="Label 2"
            sx={{ mr: 6 }}

          />
          <FormControlLabel
            control={<Radio size="medium" id="3" />}
            label="Label 3"
            value="Label 3"
            sx={{ mr: 6 }}

          />
        </RadioGroup>
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export default RadioButton;

