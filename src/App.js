import React, { Component } from 'react';
import Homepage from "./containers/Homepage/Homepage";
import Layout from "./components/Layout/Layout";
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Homepage />
        </Layout>
      </div>
    );
  }
}

export default App;
