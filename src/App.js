import React from 'react';
import './App.css';
import { Switch, Route, Link, NavLink } from "react-router-dom";
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import DiscoverMoviesPage from './pages/DiscoverMoviesPage'

function App() {


  return (
    <div className="App">
        <nav>
          <NavLink to="/HomePage">home</NavLink>
          <Link to="/AboutPage">about</Link>
          <Link to="/DiscoverMoviesPage">discover movies</Link>
        </nav>
        <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" exact={true} component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
