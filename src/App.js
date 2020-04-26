import React, { Component } from 'react';
import Homepage from "./containers/Homepage/Homepage";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Homepage />`
        </Layout>
      </div>
    );
  }
}

export default App;
