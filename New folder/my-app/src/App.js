import React from "react";
import "./App.css";
import Info from "./Info";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Main from "./Main";
import Display from "./Display";
import Diets from "./Diets";
import DietPlan from "./DietPlan";
import Workout from "./Workout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Male from "./Male";
import Female from "./Female";
import Premium from "./Premium";
import Card from "./Card";
import About from "./About";

function App() {
  return (
    <div className="App">
      {/* <div className="App_file"> */}
      <Router>
        <Home />
        <Switch>
        <Route exact path="/aboutus">
            <About />
          </Route>
          <Route exact path="/card">
            <Card />
          </Route>
          <Route exact path="/premium">
            <Premium />
          </Route>
          <Route exact path="/female">
            <Female />
          </Route>
          <Route exact path="/male">
            <Male />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/diets">
            <Diets />
            {/* <DietPlan /> */}
          </Route>
          <Route exact path="/dietplan">
            <DietPlan />
          </Route>
          <Route path="/workout">
            <Workout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/">
            <Display />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
