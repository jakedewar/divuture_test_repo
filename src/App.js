import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Home } from "./Home.js";
import NewGoal from "./components/NewGoal.js";
import { Profile } from "./Profile.js";
import { NavigationBar } from "./components/Nav.js";
import { Layout } from "./components/Layout.js";

export default class App extends Component {
  render(){
    return(
      <React.Fragment>
        <NavigationBar />
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Goals" component={NewGoal} />
                <Route exact path="/Profile" component={Profile} />
              </Switch>
            </Router>
          </Layout>
      </React.Fragment>
    )
  }
}
