// // src/App.jsx or src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import AboutUs from './AboutUs';

function App() {
  return (
    <Router basename="/e-plantShopping">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product-list" component={ProductList} />
        <Route path="/about-us" component={AboutUs} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
}

export default App;
