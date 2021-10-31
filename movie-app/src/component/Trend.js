import Card from "./Card";
import { useState, useEffect } from "react";
const Trend = (props) => {
  const [data, setData] = useState([]);
  const [busy, setBusy] = useState(true);

  useEffect(() => requestData(), []);

  async function requestData(){
    try{
      const movies = await fetch("http://localhost:3001/get");
      const json = await movies.json();
      setData(json.results);
      setBusy(false);
    }
    catch(e){
      console.log(e);
    }
    
  }
    return(<div>
    <h2 className="title">Trending</h2>
      { busy ? (<h1>load</h1>) : (
        <div className="movie-grid">
        {
          data.map(e => 
          <Card 
          key={e.id} 
          id = {e.id}
          name = {e.title} 
          rate = {e.vote_average} 
          date = {e.release_date} 
          poster = {e.poster_path}
          />)
        } 
      </div>
      )}
      </div>
    );
}

export default Trend;