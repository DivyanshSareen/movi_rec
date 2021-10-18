import { useState, useEffect } from 'react';
import Trend from './component/Trend';

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
    <Trend data = {data}/>
  );
}

export default App;
