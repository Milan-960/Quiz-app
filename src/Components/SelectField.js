import { FormControl, InputLabel } from "@mui/material";
import { Box } from "@mui/system";

import React from "react";

const SelectField = (props) => {
  const { label } = props;

  return (
    <Box mt={3} width="100%">
      <FormControl>
        <InputLabel>{label}</InputLabel>
      </FormControl>
    </Box>
  );
};

export default SelectField;
