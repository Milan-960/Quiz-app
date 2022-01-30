import React from "react";

import { Box, Button, Typography } from "@mui/material";

import Axios from "../hooks/Axios";
import { useSelector } from "react-redux";

function Question() {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
  } = useSelector((state) => state);

  let apiUrl = `/api.php?amount=10`;

  const { response, loading } = Axios({ url: apiUrl });
  console.log(response);

  return (
    <Box>
      <Typography variant="h4">Question 1</Typography>
      <Typography mt={5}>This is the question?</Typography>
      <Box mt={2}>
        <Button variant="contained">Answer 1</Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained">Answer 2</Button>
      </Box>
      <Box mt={5}>
        <Button>Score: 2 / 6</Button>
      </Box>
    </Box>
  );
}

export default Question;
