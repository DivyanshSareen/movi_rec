import Card from "./Card";
import { useState, useEffect } from 'react';
function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => requestData(), []);

  async function requestData(){
    try{
      const movies = await fetch("http://localhost:3001/get");
      const json = await movies.json();
    console.log(json);
    }
    catch(e){
      console.log(e);
    }
    
  }

  return (
    <div className="movie-grid">
    {
      data.map(e => <Card key={e.id} name = {e.title} rate = {e.vote_average} date = {e.release_date} poster = {e.poster_path}/>)
    } 
    </div>
  );
}

export default App;
