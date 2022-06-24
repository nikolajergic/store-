import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, 
  Route, Link } from 'react-router-dom';
  import React, { useState } from 'react';
  import AppCustomers from './components/AppCustomers';
  import AppProducts from './components/AppProducts';

  

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/customers" exact>
              <AppCustomers />
            </Route>
            <Route path="products" exact>
              <AppProducts />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}



export default App;
