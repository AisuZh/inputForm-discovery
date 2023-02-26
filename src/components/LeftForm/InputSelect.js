import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

const InputSelect = ({ error, onChange, value = "" }) => {
  return (
    <div>
      <Typography mt={3} mb={2} sx={{ fontWeight: 'bold' }}>
        Select field
      </Typography>

      <FormControl required sx={{ width: "400px" }}>
        <Select
          value={value}
          id="select-required"
          helperText={error}
          onChange={onChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="java">Java</MenuItem>
          <MenuItem value="c++">C++</MenuItem>
          <MenuItem value="python">Python</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default InputSelect;
