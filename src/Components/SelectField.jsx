import { useDispatch } from "react-redux";
import React, { useState } from "react";

import { handleCategoryChnage } from "../Redux/action";
import { handleDifficultyChnage } from "../Redux/action";
import { handleTypeChnage } from "../Redux/action";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";

const SelectField = (props) => {
  const { label, options } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    switch (label) {
      case "Category":
        dispatch(handleCategoryChnage(event.target.value));
        break;
      case "Difficulty":
        dispatch(handleDifficultyChnage(event.target.value));
        break;
      case "Type":
        dispatch(handleTypeChnage(event.target.value));
        break;
      default:
        return;
    }
  };

  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
