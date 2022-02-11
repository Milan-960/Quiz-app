import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Setting from "./Pages/Setting";
import Final from "./Pages/Final";
import Question from "./Pages/Question";
import Error from "./Components/404/Error";

import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

function App() {
  return (
    <div className="App">
      <Router>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
            <Switch>
              <Route exact path="/">
                <Typography variant="h2" fontWeight="bold">
                  Quiz App
                </Typography>
                <Setting />
              </Route>
              <Route path="/question">
                <Question />
              </Route>
              <Route path="/score">
                <Final />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </Box>
        </Container>
      </Router>
    </div>
  );
}

export default App;
