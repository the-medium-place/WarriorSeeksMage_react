import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import SwipePage from './pages/SwipePage';
import UserProfile from './pages/UserProfile';

import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]}>
          <Login />
        </Route>
        <Route exact path="/swipe">
          <SwipePage />
        </Route>
        <Route exact path="/user/:id">
          <UserProfile />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
