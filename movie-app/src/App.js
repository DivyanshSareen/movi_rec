import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Trend from './component/Trend';
import Details from './component/Details';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => requestData(), []);

  async function requestData(){
    try{
      const movies = await fetch("http://localhost:3001/get");
      const json = await movies.json();
      setData(json.results);
    }
    catch(e){
      console.log(e);
    }
    
  }

  return (
    <div>
    <h2>Explore Movies</h2>
    <Router>
      <Switch>
        <Route path="/details/:id">
          <Details />
        </Route>
          <Route path="/">
        <Trend data={data} />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
