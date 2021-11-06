import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Grid from './component/Grid';
import Details from './component/Details';
function App() {

  return (
    <div>
    <h2 className="title">Ryuu Movies</h2>
    
    <Router>
      <Switch>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/">
        <h2 className="title">Popular</h2>
        <Grid grid_type="popular"/>
        <h2 className="title">Top Rated</h2>
        <Grid grid_type="top_rated"/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
