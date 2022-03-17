import React from "react";
import { PageContainer } from "./styledComponent/styledComponent";
import Navbar from "./navigations/Navbar";
import EndBar from "./navigations/EndBar";
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "moment/dist/locale/fr";
import Home from "./content/Home";
import Profil from "./content/Profil";
import NumeriskAndMe from "./content/NumeriskAndMe";
import ProfessionalsSituations from "./content/ProfessionalsSituations";

const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Navbar />
      <PageContainer>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/profil">
            <Profil />
          </Route>
          <Route exact path="/numerisk_and_me">
            <NumeriskAndMe />
          </Route>
          <Route exact path="/professionals_situations">
            <ProfessionalsSituations />
          </Route>
          {/* When App is started, it display the page with url : /home */}
          <Redirect to="/home" />
        </Switch>
      </PageContainer>
      <EndBar />
    </Router>
  );
};

export default App;
