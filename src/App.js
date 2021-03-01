import React from 'react';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import Home from './Pages/Home';
import Register from './Pages/Register'
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Gallery from './Pages/Gallery';

function App() {
  return (
    <Router>
      <div className = "container">
        <nav>
          <ul>
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to = "/register">Register</Link>
            </li>
            <li>
              <Link to = "/login">Login</Link>
            </li>
            <li>
              <Link to = "/profile">Profile</Link>
            </li>
            <li>
              <Link to = "/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
        <Route exact path = "/" component={Home} />
        <Route path = "/register" component={Register} />
        <Route path = "/login" component={Login} />
        <Route path = "/profile" component={Profile} />
        <Route path = "/gallery" component={Gallery} />

      </div>
    </Router>
  );
}

export default App;
