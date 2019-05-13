import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import Checkout from './containers/Checkout/Checkout';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
  return (
    <Router>
    <div>
      <Layout>

        <BurgerBuilder />
        <Checkout />

      </Layout>
    </div>
    </Router>
  );
}
}

export default App;
