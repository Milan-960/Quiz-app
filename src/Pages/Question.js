// import React, { useState, useEffect } from "react";

// import { Box, Button, CircularProgress, Typography } from "@mui/material";

// import { decode } from "html-entities";

// import Axios from "../hooks/Axios";

// import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

// import { handleScoreChnage } from "../Redux/action";

// //this function is for generating a random numbers

// const getRandomInt = (max) => {
//   return Math.floor(Math.random() * Math.floor(max));
// };

// const Question = () => {
//   const {
//     question_category,
//     question_difficulty,
//     question_type,
//     amount_of_question,
//     score,
//   } = useSelector((state) => state);

//   const history = useHistory();
//   const dispatch = useDispatch();

//   let apiUrl = `/api.php?amount=${amount_of_question}`;

//   if (question_category) {
//     apiUrl = apiUrl.concat(`&category=${question_category}`);
//   }

//   if (question_difficulty) {
//     apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
//   }

//   if (question_type) {
//     apiUrl = apiUrl.concat(`&type=${question_type}`);
//   }

//   const { response, loading } = Axios({ url: apiUrl });

//   const [questionIndex, setQuestionIndex] = useState(0);
//   const [options, setOptions] = useState([]);

//   useEffect(() => {
//     if (response?.results.length) {
//       const question = response.results[questionIndex];

//       let answers = [...question.incorrect_answers];

//       answers.splice(
//         getRandomInt(question.incorrect_answers.length),
//         0,
//         question.correct_answer
//       );
//       setOptions(answers);
//     }
//   }, [response, questionIndex]);

//   if (loading) {
//     return (
//       <Box mt={20}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   // This is for a answer button
//   const handleClickAnswer = (event) => {
//     const question = response.results[questionIndex];

//     if (event.target.textContent === question.correct_answer) {
//       dispatch(handleScoreChnage(score + 1));
//     }
//     if (questionIndex + 1 < response.result.length) {
//       setQuestionIndex(questionIndex + 1);
//     } else {
//       history.push("/score");
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h4">Questions {questionIndex + 1}</Typography>
//       <Typography mt={5}>
//         {decode(response.result[questionIndex].question)}
//       </Typography>
//       {options.map((data, id) => (
//         <Box mt={2} key={id}>
//           <Button onClick={handleClickAnswer} variant="contained">
//             {decode(data)}
//           </Button>
//         </Box>
//       ))}
//       <Box mt={5}>
//         <Button>
//           Score: {score} / {response.results.length}
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Question;

import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { decode } from "html-entities";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import useAxios from "../hooks/Axios";

import { handleScoreChnage } from "../Redux/action";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector((state) => state);

  const history = useHistory();
  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=${amount_of_question}`;

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }

  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }

  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickAnswer = (event) => {
    const question = response.results[questionIndex];
    if (event.target.textContent === question.correct_answer) {
      dispatch(handleScoreChnage(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      history.push("/score");
    }
  };

  return (
    <Box>
      <Typography variant="h4">Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>
        {decode(response.results[questionIndex].question)}
      </Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant="contained">
            {decode(data)}
          </Button>
        </Box>
      ))}
      <Box mt={5}>
        Score: {score} / {response.results.length}
      </Box>
    </Box>
  );
};

export default Questions;
