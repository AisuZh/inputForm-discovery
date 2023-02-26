import * as React from "react";
import Checkbox from "@mui/joy/Checkbox";
import { Typography, Box, FormControl } from "@mui/material";

const InputCheckbox = ({ error, onChange, value }) => {
  const handleChange = (event) => {
    const { name, checked } = event.target;
    const newValue = {
      ...value,
      [name]: checked,
    };
    onChange(newValue);
  };


  return (
    <div>
      <FormControl required>
      <Typography mt={3} mb={2} sx={{ fontWeight: 'bold' }}>
        Checkbox field
      </Typography>
      <Box sx={{ display: "flex", gap: 4 }} value={value}>
        <Checkbox
          size="lg"
          value="Label 1"
          labelid="checkbox"
          id="checkbox-require"
          helperText={error}
          onChange={handleChange}
          name="value1" 
          checked={value.value1 || false} 
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 24,
              fill: "#1976d2", 
            }
          }}
          
        />
        <Typography>Label 1</Typography>

        <Checkbox
          size="lg"
          value="Label 2 "
          color="primary"
          labelid="checkbox"
          id="checkbox"
          helperText={error}
          onChange={handleChange}
          name="value2" 
          checked={value.value2 || false}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 24,
              fill: "#1976d2", 
            }
          }} 

        />
        <Typography>Label 2</Typography>

        <Checkbox
          size="lg"
          value="Label 3"
          color="primary"
          labelid="checkbox"
          id="checkbox-required"
          helperText={error}
          onChange={handleChange}
          name="value3" 
          checked={value.value3 || false} 
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 24,
              fill: "#1976d2", 
            }
          }}
          

        />
        <Typography>Label 3</Typography>
      </Box>
      </FormControl>
    </div>
  );
};

export default InputCheckbox;
