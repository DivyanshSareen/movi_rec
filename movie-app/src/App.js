import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Trend from './component/Trend';
import Details from './component/Details';

function App() {

  return (
    <div>
    <h2>Ryuu Movies</h2>
    <Router>
      <Switch>
        <Route path="/details/:id">
          <Details />
        </Route>
          <Route path="/">
        <Trend />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
