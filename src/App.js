import React, { Component } from 'react';
import Layout from "./components/Layout/Layout";
import classes from './App.css';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import {Switch, Route} from 'react-router-dom';
import EmploymentHistory from "./components/EmploymentHistory/EmploymentHistory";
import TravelHistory from "./components/TravelHistory/TravelHistory";
import Homepage from "./containers/Homepage/Homepage";
import Profile from "./components/Profile/Profile";
import Logout from "./components/Logout/Logout";

const config = {
    clientId: '0oajate0bv79bWV7P4x6',
    issuer: 'https://dev-565937.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true
};

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
            <Switch>
                <Security {...config}>
                    <SecureRoute path="/employment" component={EmploymentHistory} />
                    <SecureRoute path="/travel" component={TravelHistory} />
                    <SecureRoute path="/education" component={EmploymentHistory} />
                    <SecureRoute path="/docs" component={EmploymentHistory} />
                    <Route path="/implicit/callback" component={LoginCallback} />
                    <SecureRoute path="/profile" component={Profile} />
                    <SecureRoute path="/logout" component={Logout} />
                    <Route path="/" exact component={Homepage} />
                </Security>
            </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
