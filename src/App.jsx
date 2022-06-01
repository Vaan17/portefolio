import React, { useEffect } from "react";
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

  // useEffect(() => {
  //   debugger;
  //   switch (window.location.pathname) {
  //     case "/2022/maime/portefolio/home":
  //       return history.push("/2022/maime/portefolio/home");
  //     case "/2022/maime/portefolio/profil":
  //       return history.push("/2022/maime/portefolio/profil");
  //     case "/2022/maime/portefolio/numerisk_and_me":
  //       return history.push("/2022/maime/portefolio/numerisk_and_me");
  //     case "/2022/maime/portefolio/professionals_situations":
  //       return history.push("/2022/maime/portefolio/professionals_situations");
  //     default:
  //       return history.push("/2022/maime/portefolio/home");
  //   }
  // }, []);

  useEffect(() => {
    history.push(window.location.pathname);
  });

  return (
    <Router history={history}>
      <Navbar />
      <PageContainer>
        <Switch>
          <Route exact path="/2022/maime/portefolio/home">
            <Home />
          </Route>
          <Route exact path="/2022/maime/portefolio/profil">
            <Profil />
          </Route>
          <Route exact path="/2022/maime/portefolio/numerisk_and_me">
            <NumeriskAndMe />
          </Route>
          <Route exact path="/2022/maime/portefolio/professionals_situations">
            <ProfessionalsSituations />
          </Route>
          {/* When App is started, it display the page with url : /home */}
          <Redirect to="/2022/maime/portefolio/home" />
        </Switch>
      </PageContainer>
      <EndBar />
    </Router>
  );
};

export default App;
