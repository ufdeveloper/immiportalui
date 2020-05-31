import React, { Component } from 'react';
import Layout from "./components/Layout/Layout";
import classes from './App.css';
import {Switch, Route} from 'react-router-dom';
import EmploymentHistory from "./components/EmploymentHistory/EmploymentHistory";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
            <Switch>
                <Route path="/employment" component={EmploymentHistory} />
                <Route path="/travel" component={EmploymentHistory} />
                <Route path="/education" component={EmploymentHistory} />
                <Route path="/docs" component={EmploymentHistory} />
                <Route path="/" component={EmploymentHistory} />
            </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
