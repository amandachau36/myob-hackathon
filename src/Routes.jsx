import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './App.js';


const Routes = (
  <Router>
    <div>
      <Route exact path="/:id" component={ App }/>
    </div>
  </Router>

)
