import React from 'react';
import { Router, Route } from 'react-router-dom';
import Next from './Next';

const createRoutes = () => (
    <Router>
      <Route exact path="/next" component={Next}/>
    </Router>
);

export default createRoutes;