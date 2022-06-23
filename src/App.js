import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, 
  Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      <Switch>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Customers() {
  return <h2>Customers</h2>;
}

function Products() {
  return <h2>Products</h2>;
}

export default App;
